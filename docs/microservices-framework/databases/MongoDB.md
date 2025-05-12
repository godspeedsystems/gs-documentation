---
title: MongoDB Integration with Godspeed Framework
description: A comprehensive guide to integrating MongoDB in Godspeed applications using both Mongoose and Prisma plugins. Features include data modeling, schema management, CRUD operations, and seamless database interactions through multiple integration approaches.
keywords: [mongodb, nosql database, mongoose, prisma, database integration, data modeling, crud operations with mongodb, godspeed mongodb plugin, database connectivity, orm, odm]
---

# MongoDB Integration

MongoDB is a popular NoSQL database. In Godspeed, you can connect to MongoDB in two ways:
#### 1. [Using Mongoose-as-datasource Plugin](#mongoose-as-datasource-plugin) [(Plugin Repository)](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/mongoose-as-datastore)
#### 2. [Using Prisma-as-datastore Plugin](#prisma-as-datastore-plugin) [(Plugin Repository)](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/prisma-as-datasource)

## Mongoose as datasource Plugin

This plugin provides seamless integration with MongoDB through the Mongoose library. With this plugin, you can harness the power of Mongoose to model your data, perform queries, and interact with MongoDB in a structured and efficient manner.

### How to Use
**- ** Open the godspeed project in vscode and then install the plugin by specifying its name:

1. **Using Godspeed CLI**
```
  godspeed plugin add @godspeedsystems/plugins-mongoose-as-datasource

```
2. **Using npm**
```
npm i @godspeedsystems/plugins-mongoose-as-datasource
```

**- ** After installing the plugin using godspeed plugin add command, you will find two auto generated files in your project at `src/datasources/types/mongoose.ts` and `src/datasources/mongoose.yaml`

```typescript title=src/datasources/types/mongoose.ts
import { DataSource } from '@godspeedsystems/plugins-mongoose-as-datasource';
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
 ![Alt text](../../../static/img/mongoose_folder_structure.png)
- You can keep the file by any name. This file is used to initialize a mongoose datasource instance. Whatever is the name of the file, you will need to invoke
the mongoose datasource commands by the same name. Also your models will be needed to be kept in a folder with the same name as your yaml file (i.e. your datasource instance name). For example mongoose1.yaml would mean
calling `fn:datasources.mongoose1.<Model_Name>.<Function_Name>` from yaml workflows and 
`ctx.datasources.mongoose1.<Model_Name>.<Function_Name>` from TS/JS files. Also you will need to create a folder `datasources/mongoose1/models` and keep your models there as detailed below.

- You can override the default response codes for success cases for different methods by putting them in the datasource instance's yaml file

### Setting up Mongoose models
This datasource loads the [Mongoose models](https://mongoosejs.com/docs/models.html) from `datasources/<datasource_name>/models` folder.

![Alt text](../../../static/img/mongoose_folder_structure.png)

**Example Mongoose model file**   
These files are stored in `datasources/<datasource_name>/models` folder Your TS or JS file should export as following
```typescript
module.exports = {
    type: 'SomeModel', //The name by which you will access methods of this collection/model
    model: SomeModel //The Mongoose Model
};
```
An example Mongoose model file

```typescript title=SomeModel.ts
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
When calling any api function it will be called as `ctx.datasources.mongoose.<Model_Name>.<Function_Name>` from TS/JS files.

```ts
import { GSContext, GSDataSource, GSStatus } from "@godspeedsystems/core";

export default async function (ctx: GSContext) {

  const mongoClient: GSDataSource = ctx.datasources.mongoose;
  const body =ctx.inputs.data.body ;
  const data = { 
    meta: {
      entityType: 'SomeModel', 
      method: 'create'
    },
    ...body
  };
  const response = await mongoClient.execute(ctx, data);
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

### Set Mongo URL

Set an environment variable `MONGO_URL` as your connection string.
  ```shell
    export MONGO_URL='mongodb+srv://<user_name>:<password>@cluster0.xyzabc.mongodb.net/?retryWrites=true&w=majority'
  ```
### Run the service

From your command line run your service in the auto-watch mode
  ```bash
  godspeed serve
  ```

## Prisma as Datastore Plugin

Prisma has experimental support for MongoDB, although this support may not be as mature as for relational databases. 
Make sure you have access to a MongoDB 4.2+ server with a replica set deployment. As, MongoDB database connector uses transactions to support nested writes, which require a replica set deployment. The easiest way to deploy a replica set is with Atlas.

### How to Use
**- ** Open the godspeed project in vscode and then add the plugin from the CLI of vscode, select the 'prisma-as-datastore' to integrate the plugin.

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
│ ❯◯   │ prisma-as-datastore                │ Prisma as a datastore plugin for Godspeed Framework.              │
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
### Set your connection url in .env file, See example

```
MONGO_TEST_URL=mongodb+srv://atlas_username:pswd@cluster0.w3bbqrp.mongodb.net/prisma_test?retryWrites=true&w=majority&appName=Cluster0
```
### Create your prisma schema

Now, you can create your [prisma schema](https://www.prisma.io/docs/orm/prisma-schema) in `src/datasources` directory. 

### Sample prisma schema for mongo db

```prisma title=src/datasources/mongo.prisma
datasource db {
  provider = "mongodb"
  url      = env("MONGO_TEST_URL")  //Connection string added in the .env file
}

generator client {
  provider = "prisma-client-js"
  output = "./prisma-clients/mongo"  // mongo is the name of prisma schema file
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
Here is a sample event and workflow for mongodb, which is fetching data from the database.

```yaml title=src/events/getPost.yaml
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
```ts title = src/functions/com/biz/mongo/post/one.ts

import { GSContext, GSStatus, PlainObject } from "@godspeedsystems/core";
import { PrismaClient } from "@prisma/client";

module.exports = async (ctx: GSContext, args: PlainObject) => {
  const { inputs: { data: { params } }, logger, datasources } = ctx;

  const client: PrismaClient = datasources.mongo.client;

  const response = await client.Post.findUnique({
                         where: { id: params.id }
                  });
  return new GSStatus(true, 200, "Post fetched", response, undefined );
}
```
<!-- ```yaml title=com/biz/mongo/post/one.yaml
summary: Fetch Post
tasks:
  - id: mongo_post_one
    fn: datasource.mongo.Post.findUnique
    args:
      where:
        id: <% inputs.params.id %>
``` -->
 
## Reference links
**- ** [Prisma Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/prisma-as-datastore)   
**- ** [Mongoose Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/mongoose-as-datasource)  
**- ** [npm package for Prisma](https://www.npmjs.com/package/@godspeedsystems/plugins-prisma-as-datastore)

 



