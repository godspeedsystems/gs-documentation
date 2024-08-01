MongoDB is a popular NoSQL database. In Godspeed, you can connect to MongoDB in two ways:
### 1. Using Mongoose-as-datasource Plugin
### 2. Using Prisma-as-datasource Plugin

## Mongoose as a datasource: 
This plugin provides seamless integration with MongoDB through the Mongoose library. With this plugin, you can harness the power of Mongoose to model your data, perform queries, and interact with MongoDB in a structured and efficient manner.

## How to Use
**- ** Open the godspeed project in vscode and then add the plugin from the CLI of vscode, select the 'mongoose-as-datastore` to integrate the plugin.
```
> godspeed plugin add
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌──────┬────────────────────────────────────┬────────────────────────────────────────────────────────────────────┐
│      │ Name                               │ Description                                                        │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│ ❯◯   │ mongoose-as-datastore                │ Mongoose as a datasource plugin for Godspeed Framework.              │
└──────┴────────────────────────────────────┴────────────────────────────────────────────────────────────────────┘
```
**- ** The plugin can also be directly installed by running `npm i @godspeedsystems/plugins-mongoose-as-datastore` command.   
**- ** You will find two files in your project related to the Prisma plugin at `src/datasources/types/mongoose.ts` and `src/datasources/mongoose.yaml`

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
 ![Alt text](../../../../../static/img/mongoose_folder_structure.png)
- You can keep the file by any name. This file is used to initialize a mongoose datasource instance. Whatever is the name of the file, you will need to invoke
the mongoose datasource commands by the same name. Also your models will be needed to be kept in a folder with the same name as your yaml file (i.e. your datasource instance name). For example mongoose1.yaml would mean
calling `fn:datasources.mongoose1.<Model_Name>.<Function_Name>` from yaml workflows and 
`ctx.datasources.mongoose1.<Model_Name>.<Function_Name>` from TS/JS files. Also you will need to create a folder `datasources/mongoose1/models` and keep your models there as detailed below.

- You can override the default response codes for success cases for different methods by putting them in the datasource instance's yaml file

### Setting up Mongoose models
This datasource loads the [Mongoose models](https://mongoosejs.com/docs/models.html) from `datasources/<datasource_name>/models` folder.

![Alt text](../../../../../static/img/mongoose_folder_structure.png)

**Example Mongoose model file**   
These files are stored in `datasources/<datasource_name>/models` folder Your TS or JS file should export as following
```typescript
module.exports = {
    type: 'SomeModel', //The name by which you will access methods of this collection/model
    model: SomeModel //The Mongoose Model
};
```
An example Mongoose model file
```typescript
const { model, Schema, Document } =require('mongoose');

const SomeModelSchema = new Schema(
  {
    partnerName: {
      type: String,
      required: true,
    },
    productType: {
      type: String,
      required: true,
    },
    apiType: {
      type: String,
      required: true,
    },
    method: {
      type: String,
      required: true,
    },
    api: {
      type: String,
      required: true,
    },
    code: String,
    headers: Schema.Types.Mixed,
    payload: Schema.Types.Mixed,
    response: Schema.Types.Mixed,
    isDynamicUrl: Boolean,
    expectedResponseStatusCode: Number,
  },
  { timestamps: true }
);

const SomeModel = model('some-model', SomeModelSchema, 'some-model');
module.exports = {
    type: 'SomeModel', //The name by which you will access methods of this collection/model
    model: SomeModel
};
```

### Sample workflow
When calling any api function it will be called as `fn:datasources.mongoose1.<Model_Name>.<Function_Name>` from yaml workflows and 
`ctx.datasources.mongoose1.<Model_Name>.<Function_Name>` from TS/JS files.
The arguments to any `Function_Name` are to be passed in two ways:

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
  ```
**3. ** Calling from a TS/JS workflow works same as any other datasource
```typescript
import { GSContext, GSDataSource, GSStatus } from "@godspeedsystems/core";

// Option 1: 
// Calling function on Mongoose model directly and sending data with status code
// Here you handle errors/try/catch yourself
export default async function (ctx: GSContext, args: any) {
    const ds: GSDataSource = ctx.datasources.mongoose;
    // If this function is called by another function (yaml or JS), the caller may have passed args object. In case not, then initialize args yourself.
    args = args || [{name: 'mastersilv3r'}, 'name age', {}];
    try {
      const response = ds.SomeModel.findOne(...args);
      return {
        code: 200,
        data: response
      }
      //return response; Framework will automatically add code: 200 in case of HTTP
    } catch (err: any) {
      ctx.childLogger.error(`Found error in Mongoose query ${err}`);
      return {
        code: 500,
        data: {
          error: err,
          message: err.message
        }
      }
    }
}

//Option 2: Handles response codes, errors creation of GSStatus directly
export default async function (ctx: GSContext, args: any) {
    const ds: GSDataSource = ctx.datasources.mongoose;
    args = args || [{name: 'mastersilv3r'}, 'name age', {}];
    //Will need to set a meta object in the args to pass entitType and method
    args.meta = {entityType: 'SomeModel', method: 'findOne'};
    const response = await ds.execute(ctx, args);
    // response.code will be 500 in case of error, and 200 otherwise
    // In case or error, response.data will have message and error keys, like we saw 
    // in the above TS example
    return response;
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
- Set an environment variable `MONGO_URL` as your connection string to running mongodb instance.
  For example, setting via a unix shell.
  ```shell
    export MONGO_URL='mongodb+srv://<user_name>:<password>@cluster0.xyzabc.mongodb.net/?retryWrites=true&w=majority'
  ```
- From your command line run your service in the auto-watch mode
  ```bash
  godspeed serve
  ```
## 2. Using Prisma-as-datasource Plugin
Prisma has experimental support for MongoDB, although this support may not be as mature as for relational databases. 
Make sure you have access to a MongoDB 4.2+ server with a replica set deployment. As, MongoDB database connector uses transactions to support nested writes, which require a replica set deployment. The easiest way to deploy a replica set is with Atlas.

## How to Use
**- ** Open the godspeed project in vscode and then add the plugin from the CLI of vscode, select the 'prisma-as-datastore` to integrate the plugin.

```
> godspeed plugin add
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌──────┬────────────────────────────────────┬────────────────────────────────────────────────────────────────────┐
│      │ Name                               │ Description                                                        │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│ ❯◯   │ prisma-as-datastore                │ Prisma as a datasource plugin for Godspeed Framework.              │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│  ◯   │ aws-as-datasource                  │ aws as datasource plugin for Godspeed Framework                    │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│  ◯   │ excel-as-datasource                │ excel as datasource plugin for Godspeed Framework                  │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│  ◯   │ mailer-as-datasource               │ mailer as datasource plugin for Godspeed Framework                 │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│  ◯   │ kafka-as-datasource-as-eventsource │ kafka as datasource-as-eventsource plugin for Godspeed Framework   │
└──────┴────────────────────────────────────┴────────────────────────────────────────────────────────────────────┘
```

### Related files
You will find a file in your project related to the Prisma plugin at `src/datasources/types/prisma.ts`.
```typescript title=prisma.ts
import { DataSource } from '@godspeedsystems/plugins-prisma-as-datastore';
export default DataSource;
```
Now, you can create your prisma schema in `src/datasources` directory. 

## How to start
You can start using this plugin by writing a [prisma schema](https://www.prisma.io/docs/orm/prisma-schema).

<details>
<summary>Sample prisma schema for mongo database</summary>

```prisma title=src/datasources/mongo.prisma
datasource db {
  provider = "mongodb"
  url      = env("MONGO_TEST_URL") //Connection string can be found in the .env folder. you can add your own database connection string
}

generator client {
  provider = "prisma-client-js"
  output = "./prisma-clients/mongo"
}

model User {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  createdAt DateTime @default(now())
  email     String   @unique
  name      String?
  role      Role     @default(USER)
  posts     Post[]
}

model Post {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  published Boolean  @default(false)
  title     String
  author    User?    @relation(fields: [authorId], references: [id])
  authorId  String   @db.ObjectId
}

enum Role {
  USER
  ADMIN
}
```

</details>

### Support for multiple prisma schema
By default, only single prisma schema can be created in a project that can use only one database as given in the above example.   
To support multiple prisma schemas for different databases, you need to add `output` key in `generator client` block as given in the above sample prisma schema:


### Generate prisma client
This command will generate the prisma client and will sync the database with prisma schema
```bash
godspeed prisma prepare
```
Once you [generate prisma client](#generate-prisma-client), the multiple clients get generated in `src/datasources/prisma-clients` directory. Godspeed automatically loads all the clients present in this directory.

### Generate CRUD APIs
You can generate the CRUD API'S enter the below command:
```bash
godspeed gen-crud-api
```
* This command will generate the crud apis based on the sample prisma schema provided at ./src/datasources/mongo.prisma

* Now you can view the event and workflows according defined prisma schema

### Sample API
Here is a sample event and workflow which is fetching data from the database.
```yaml title=src/events/mongo.yaml
http.get./mongo/post/{id}:
  summary: Fetch Post
  description: Fetch Post from database
  fn: com.biz.mongo.post.one
  params:
    - name: id
      in: path
      required: true
      schema:
        type: string
  responses:
    content:
      application/json:
        schema:
          type: object
```

```yaml title=com/biz/mongo/post/one.yaml
summary: Fetch Post
tasks:
  - id: mongo_post_one
    fn: datasource.mongo.Post.findUnique
    args:
      where:
        id: <% inputs.params.id %>
```
 
## Reference links
**- ** [Prisma Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/prisma-as-datastore)   
**- ** [Mongoose Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/mongoose-as-datasource)  
**- ** [Issue Tracker](https://github.com/godspeedsystems/gs-plugins/issues)      
**- ** [npm package](https://www.npmjs.com/package/@godspeedsystems/plugins-prisma-as-datastore)

 



