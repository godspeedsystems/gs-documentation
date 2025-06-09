---
title: Mongoose Datasource Plugin
description: A powerful MongoDB integration plugin that enables seamless database operations through Mongoose ODM in Godspeed applications. Features include data modeling, CRUD operations and efficient query handling with MongoDB.
keywords: [mongoose plugin, prisma with mongodb, nosql database, godspeed datasource plugin, mongoose integration]
---

**[Link to Plugin Source Code](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/mongoose-as-datasource)**  

It provides seamless integration with MongoDB through the Mongoose library. MongoDB is a popular NoSQL database, and with this plugin, you can harness the power of Mongoose to model your data, perform queries, and interact with MongoDB in a structured and efficient manner.

### How to Add 
Create a godspeed project from the CLI, open the created project in vscode and then add the plugin:

```
godspeed plugin add @godspeedsystems/plugins-mongoose-as-datasource 
```

**-** You will find two files in your project related to the mongoose plugin at `src/datasources/types/mongoose.ts` and `src/datasources/mongoose.yaml`

```typescript title=src/datasources/types/mongoose.ts
import { DataSource } from '@godspeedsystems/plugins-mongoose-as-datastore';
export default DataSource;
```

```yaml title=src/datasources/mongoose.yaml
type: mongoose
successResponseCodes: #default response codes for success responses
  create: 201
  find: 200
  findOne: 200
  aggregate: 200
  findOneAndUpdate: 201
  findOneAndDelete: 202
```
  ![Alt text](../../../../static/img/mongoose_folder_structure.png)
- You can keep the file by any name. This file is used to initialize a mongoose datasource instance. Whatever is the name of the file, you will need to invoke
the mongoose datasource commands by the same name. Also your models will be needed to be kept in a folder with the same name as your yaml file (i.e. your datasource instance name). For example mongoose1.yaml would mean
calling `fn:datasources.mongoose1.<Model_Name>.<Function_Name>` from yaml workflows and 
`ctx.datasources.mongoose1.<Model_Name>.<Function_Name>` from TS/JS files. Also you will need to create a folder `datasources/mongoose1/models` and keep your models there as detailed below.

- You can override the default response codes for success cases for different methods by putting them in the datasource instance's yaml file

### Provide Connection URL

Set an environment variable named `MONGO_URL` as your connection string to running mongodb instance.
You can save url in .env file as
  
  ```
    MONGO_URL='mongodb+srv://<user_name>:<password>@cluster0.xyzabc.mongodb.net/?retryWrites=true&w=majority'
  ```

### Setting up Mongoose models
This datasource loads the [Mongoose models](https://mongoosejs.com/docs/models.html) from `datasources/<datasource_name>/models` folder.

![Alt text](../../../../static/img/mongoose_folder_structure.png)

 
These files are stored in `datasources/<datasource_name>/models` folder.

### Writing Mongoose Models in Godspeed

Godspeed framework uses **CommonJS** module syntax. When defining Mongoose models, ensure you follow the below format:

**Import Mongoose:** Use the require syntax to import Mongoose:
```ts
const { model, Schema, Document } = require('mongoose');
```

**Export the Model:**
 Export the model using the module.exports syntax. The export should include a type property (used for accessing the model) and the Mongoose model instance itself.
```ts
module.exports = {
    type: 'SomeModel', // The name by which you will access methods of this collection/model
    model: SomeModel   // The Mongoose Model
};
```

### An example Mongoose model file

```typescript title=datasources/<datasource_name>/models/Participant.ts

const { model, Schema } =require('mongoose');

const participantSchema = new Schema({
  participant_id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  region: { type: String, required: true },
  city: { type: String, required: true }
});

const Participant = model('Participant', participantSchema);
module.exports = {
    type: 'Participant',              // The name by which you will access methods of this collection/model
    model: Participant                // The Mongoose Model
};

```

### Sample Event and workflow
<!-- 
**1. ** Only the first arg of the function as accepted by the API.
  ```yaml
    id: mongoose_workflow
    tasks:
      - id: first_task
        fn: datasource.mongoose.SomeModel.findOne
        args: {"name": "mastersilv3r"} #Fun fact: YAML acceptes JSON as well. 
  ```
**2. ** Most Mongoose functions accept multiple args. To pass all args to an API call, send an array of the acceptable args. This array is spread and passed to the API call
  ```yaml
    id: helloworld2_workflow
    tasks:
      - id: helloworld2_workflow_first_task
        fn: datasource.mongoose.SomeModel.findOne
        args: #as an array
          - name: mastersilv3r #search clause: First argument
          - 'name age' #The projection: second argument
          - {} # Options: the third argument
  ``` -->
### Event
```yaml title=events/createParticipant.yaml
http.post./participant:
  fn: createParticipant
  body:
    content:
      application/json:
        schema:
          type: object
          properties:
            participant_id:
              type: number
            name:
              type: string
              description: Name
            email:
              type: string
              description: Email id
            region:
              type: string
  responses:
    201:
      description: Participant created successfully
      content:
        application/json:
          schema:
            type: object
            properties:
              someModel:
                type: object
                description: The created Participant object
```
### Workflow
When calling any api function it will be called as `ctx.datasources.mongoose1.<Model_Name>.<Function_Name>` from TS/JS files.

### Create
```ts title=createParticipant.ts
import { GSContext, GSDataSource, GSStatus } from "@godspeedsystems/core";

export default async function (ctx: GSContext) {

  const mongoClient: GSDataSource = ctx.datasources.mongoose;
  const { body }= ctx.inputs.data ;
  const data = { 
    meta: {
      entityType: 'Participant', 
      method: 'create'
    },
    ...body
  };
  
  const response = await mongoClient.execute(ctx, data);
  return response;
}
```

### Find
```ts title=getParticipant.ts
import { GSContext, GSDataSource, GSStatus } from "@godspeedsystems/core";

export default async function (ctx: GSContext){
  const { query } = ctx.inputs.data; // for GET request, query params are here
  const { email } = query;

  const mongoClient: GSDataSource = ctx.datasources.mongoose;

  try {
    const result = await mongoClient.execute(ctx, {
      meta: {
        entityType: 'Participant',
        method: 'findOne'
      },
      email:  email 
    });

    return result;
  } catch (error: any) {
    ctx.childLogger.error("Failed to fetch user by email: %o", error);
    return new GSStatus(false, 500, "Internal Server Error", error);
  }
}
```

### Error response
When a call has an error the datasource returns following `GSStatus`.
```yaml
    code: 500
    success: false
    data: 
        message: Internal Server Error
```

### Run the service
- From your command line run your service in the auto-watch mode
  ```bash
  godspeed serve
  ```

## Reference links
**-** [Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/mongoose-as-datasource)   
**-** [Issue Tracker](https://github.com/godspeedsystems/gs-plugins/issues)      
**-** [npm package](https://www.npmjs.com/package/@godspeedsystems/plugins-mongoose-as-datasource)

