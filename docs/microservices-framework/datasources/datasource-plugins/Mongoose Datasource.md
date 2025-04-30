Mongoose as a datasource: It provides seamless integration with MongoDB through the Mongoose library. MongoDB is a popular NoSQL database, and with this plugin, you can harness the power of Mongoose to model your data, perform queries, and interact with MongoDB in a structured and efficient manner.

### How to Add 
Create a godspeed project from the CLI, open the created project in vscode and then add the plugin:

```
godspeed plugin add @godspeedsystems/plugins-mongoose-as-datasource 
```

**- ** You will find two files in your project related to the mongoose plugin at `src/datasources/types/mongoose.ts` and `src/datasources/mongoose.yaml`

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

### Setting up Mongoose models
This datasource loads the [Mongoose models](https://mongoosejs.com/docs/models.html) from `datasources/<datasource_name>/models` folder.

![Alt text](../../../../static/img/mongoose_folder_structure.png)

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

## Reference links
**- ** [Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/mongoose-as-datasource)   
**- ** [Issue Tracker](https://github.com/godspeedsystems/gs-plugins/issues)      
**- ** [npm package](https://www.npmjs.com/package/@godspeedsystems/plugins-mongoose-as-datasource)

