# List of Plugins

Godspeed framework adopts a pluggable approach that empowers you to define data sources effortlessly. Our framework graciously provides an interface that caters to diverse data source needs. Here's a glimpse into the exceptional datasource plugins crafted by our core framework team.

To seamlessly integrate these plugins into your project, simply run the command:

```bash
$  godspeed plugin add
```
```bash


       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝


? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌──────┬────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
│      │ Name                                   │ Description                                                                    │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│ ❯◯   │ cron-as-eventsource                    │ Cron as eventsource plugin for Godspeed Framework                              │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ aws-as-datasource                      │ aws as datasource plugin for Godspeed Framework                                │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ excel-as-datasource                    │ excel as datasource plugin for Godspeed Framework                              │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ mangoose-as-datasource                 │ mongoose-as-datasource as datasource plugin for Godspeed Framework             │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ mailer-as-datasource                   │ mailer as datasource plugin for Godspeed Framework                             │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ kafka-as-datasource-as-eventsource     │ kafka as datasource-as-eventsource plugin for Godspeed Framework               │
└──────┴────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘

```

you can specify plugin name to add directly to your project

```sh
godspeed plugin add <plugin-name>
```
## List of Datasource plugins

### 1. [prisma-as-datasource](https://www.npmjs.com/package/@godspeedsystems/plugins-prisma-as-datastore)

Prisma-as-datasource plugin provide functionality to access most popular databases like, PostgreSQL, MySQL, SQL Server, SQLite, MongoDB, CockroachDB, Planetscale and MariaDB through Prisma ORM.


### 2. [axios-as-datasource](https://www.npmjs.com/package/@godspeedsystems/plugins-axios-as-datasource)

Axios as a datasource: Level up your data-fetching game with Axios. Seamlessly integrate this powerful HTTP client into your app for smooth and efficient data transactions. Fetch, post, and interact with APIs effortlessly. Ready to make data requests a breeze? 🌐✨

<!-- The Godspeed Axios Plugin provides seamless integration with the Axios library for making HTTP requests within the Godspeed framework. It simplifies the process of defining and executing HTTP requests, making it easy to interact with external APIs. -->

## How to Use
- Create a godspeed project from the CLI and by default the axios plugin is integrated into your project if not, add the plugin from the CLI and select the `@godspeedsystems/plugins-axios-as-datasource` to integrate the plugin.

```
godspeed plugin add   


       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝


? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌──────┬───────────────────────────────────┬──────────────────────────────────────────────────────────────────┐
│      │ Name                              │ Description                                                      │
├──────┼───────────────────────────────────┼──────────────────────────────────────────────────────────────────┤
│  ◯   │ kafka-as-datasource-as-eventsource│ kafka as datasource-as-eventsource plugin for Godspeed Framework │
├──────┼───────────────────────────────────┼──────────────────────────────────────────────────────────────────┤
│ ❯◯   │ axios-as-datasource               │ Axios as datasource plugin for Godspeed Framework                │
└──────┴───────────────────────────────────┴──────────────────────────────────────────────────────────────────┘

```

- The plugin can also be directly installed by running `npm i @godspeedsystems/axios-as-datasource` command

- You will find the files in your project related to the axios plugin at `src/datasources/types/axios.ts` and `src/datasources/api.yaml`.

### axios.ts (src/datasources/types/axios.ts)

```typescript
import { DataSource } from '@godspeedsystems/plugins-axios-as-datasource';
export default DataSource;
```

### axios config (src/datasources/api.yaml)

```yaml
type: axios
base_url: http://localhost:4000
```

### Axios Workflow (src/functions/sample.yaml)
```
id: sample
tasks:
  - id: first_task
    fn: datasource.api.get./api/items
    args:
      headers:
      data:
      timeout:
      params:
```
The axios request configuration options, such as headers, params, data, and timeout, can be directly passed as arguments (args).

```
args:
    headers:
      'X-Requested-With': 'XMLHttpRequest'
    params:
      ID: 12345
    data:
      firstName: 'Fred'
    timeout: 1000
```
 To get more clarity checkout about [Axios configuration]( https://axios-http.com/docs/req_config)


## How It Helps

The Godspeed Axios Plugin offers the following advantages:

1. **Axios Integration:** The plugin abstracts away the complexities of setting up Axios instances, making it effortless to configure and execute HTTP requests.

2. **Unified DataSource:** Developers can use a uniform API to define data sources that make HTTP requests using Axios. This enhances consistency and ease of use across different parts of the application.

3. **Error Handling:** The plugin includes robust error handling, allowing developers to gracefully handle various scenarios, such as server timeouts, request setup failures, and server-side errors.

4. **Integration with Godspeed Core:** The plugin seamlessly integrates with the Godspeed Core library, aligning with the principles of the Godspeed framework and enabling streamlined event-driven workflows.


## Plugin Components

The plugin consists of the following key components:

### 1. `DataSource` Class

- This class extends `GSDataSource`, a base class provided by the Godspeed framework for creating data sources.

- It initializes an Axios instance to make HTTP requests based on the provided configuration options.

- The `execute` method is used to define how the plugin should execute HTTP requests. It maps incoming parameters to Axios request properties, processes the request, and handles various response scenarios.

### 2. Constants

- `SourceType`: A constant representing the source type of the plugin, which is 'DS' (data source).

- `Type`: A constant representing the loader file of the plugin. The final loader file will be located in the 'types' directory and named `${Type.js}`, where `Type` is 'axios' in this case.

- `CONFIG_FILE_NAME`: In the context of a data source, this constant also serves as the data source name. In this plugin, it is set to 'api'.

- `DEFAULT_CONFIG`: A default configuration object with Axios options like base URL and other settings.


### Axios retry
- Defaults set retry at datasource level within datasource config yaml file.(src/datasources/api.yaml)

```yaml
type: axios
base_url: http://localhost:4000
retry:
    when: #the condition
      status: [500, 501, 502] # an array or single value of codes
      message: my custom expected message for retry
    max_attempts: 5
    type: constant ##[constant,exponential,random]
    interval: PT15s
```

the above config works on two conditions if status from the api is 500,501 or 502 and message value is as mentioned in the config. When condition is optional and if retry is without when condition, the retry will be made on failures of the API.

- Override at task level within args object of the axios method call.

```yaml
id: some_workflow
tasks:
  - id: post-anything
    # Fetching loan offers from rule engine for the given bank and pan card
    fn: datasource.api_datasource.post./anything
    args:
      data:
        data: <%inputs.body.data%>
    on_error:
      continue: false
    retry: # By default the datasource has constant retry set in its yaml. Here we override the retry to exponential
      when: # an and condition between status and message.
        status: [500, 503] # an array or single value of codes (optional). Default 500
        message: Retry later # Retry when response has this message
      max_attempts: 5
      type: exponential
      min_interval: PT5s
      max_internal: PT15s
```



The sample config can be modified as per the usecase of your application.

#### sample config `api.yaml`
```yaml
type: axios
base_url: https://httpbin.org

# print all api calls in curl format
curlifiedLogs: true 

# Authentication of API calls with token refresh logic
authn: 
  fn: my_bank.authn
  refreshOn:
    statusCode: [401]

# Common headers to be set in all API calls
headers:
  Content-Type: application/json
  Cookie: <%mappings.my_bank.auth_workflow_cookie%>

# Retry logic for failed API calls for ex on Internal server errors or request timeouts
retry:
    when: #the condition
      status: [500, 503] # an array or single value of codes (optional). Default 500
      message: my custom expected message for retry #And (optionally) when response has this message
    max_attempts: 5
    type: constant # or random, exponential
    interval: PT15s
    # type: exponential
    # min_interval: PT5s
    # max_internal: PT15s
    # type: random
    # min_interval: PT5s
    # max_internal: PT15s
```

### Authentication 
#### API calls with token refresh logic and authentication can also be configured in your datasource config file, by setting `authn` and the `fn` is called before calling the API endpoint and token will be refreshed on statusCode mentioned in the array of [`statusCode`](/docs/microservices-framework/datasources/list-of-plugins#sample-config-apiyaml).


example `fn` of `authn`
```ts

import { logger } from "@godspeedsystems/core";

const axios = require('axios');
const client = axios.create({
    headers: {
        'Content-Type': 'application/json'
    }
});
/**
 * Generate and return all the headers which are required to be sent
 * in the API calls which require authentication tokens
 */
module.exports = async function (ctx: any) {
    try {
        const res = await client({
            method: 'get',
            url: `https://httpbin.org/anything`,
            data: {
                "Authorization": 'access_token'
            }
        })
        // Retrieve the authn tokens
        const headers = {
            "Authorization": res.data.access_token || 'access_token'
        };
       
        logger.info('Auth token successfully refreshed and following headers set: %o', Object.keys(headers));
        return headers;
    } catch (error) {
        logger.error('Error in refreshing token %o', error);
        throw error;
    }
}
```

## Conclusion

The Godspeed Axios Plugin is a valuable addition to the Godspeed framework, providing a standardized way to make HTTP requests using the Axios library. With this plugin, you can easily integrate with external APIs, handle responses, and streamline data retrieval within your applications.


### 3. [aws-as-datasource](https://github.com/godspeedsystems/gs-plugins/blob/main/plugins/aws-as-datasource/README.md)

AWS as a datasource plugin: Turbocharge your app by tapping into Amazon Web Services. Unleash the power of cloud-based data, storage, and more to supercharge your application. 🚀 

## Steps to use aws plug-in in godspeed framework:

### How to install
- Create a godspeed project from the CLI , open the created project in vscode and then add the plugin from the CLI of vscode, select the `@godspeedsystems/plugins-aws-as-datasource` to integrate the plugin.

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
│  ◯   │ prisma-as-datastore                │ Prisma as a datasource plugin for Godspeed Framework.              │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│ ❯◯   │ aws-as-datasource                  │ aws as datasource plugin for Godspeed Framework                    │
└──────┴────────────────────────────────────┴────────────────────────────────────────────────────────────────────┘
```
- The plugin can also be directly installed by running `npm i @godspeedsystems/aws-as-datasource` command

### Configuration

In your <aws_ds_name/>.yaml file, you will need to configure
- type: aws (type of the datasource)
- default_client_config (optional) for initializing your clients, as per the aws config specs
- Client type to client name mappings via the `types` key
- `services` contains settings for the services you want to invoke via this datasource. 
  - Each service has a type like s3, lamdba etc.
  - They can have their own config overriding the default under the `config` key
  - Note: There can be multiple services configured for the same type. Check `s3` and `s3_1` below

```yaml
type: aws
default_client_config: #any aws specific configurations
  credentials:
    accessKeyId: <%config.accessKeyId%>
    secretAccessKey: <%config.secretAccessKey%>
# service type is the name of the npm module for ex. @aws-sqk/client-dynamodb or @aws-sqk/client-s3 etc
# The `types` key can have service type to sdk's client names mappings when coding
types: #mappings
  dynamodb: DynamoDB
  s3: S3
  lambda: Lambda
  ssm: SSM
  sqs: SQS
services:
  s3:
    type: s3
    config:
      region: <%config.anotherAccessKeyId%>
      credentials:
        accessKeyId: <%config.anotherAccessKeyId%>
        secretAccessKey: <%config.anotherSecretAccessKey%>
  s3_1: #uses default config
    type: s3
  dynamodb:
    type: dynamodb
  sqs:
    type: sqs
  ssm:
    type: ssm
  lamdba:
    type: lambda
```

### Example usage

In an event, we establish HTTP endpoint that accepts json objects in request body. When this endpoint is invoked, it triggers the `aws_list` function with the args coming from request body.

#### Example event schema
```yaml
# event for create

"http.post./aws":
  fn: aws_list
  body:
    type: object
  responses:
    200:
      content:
         application/json:

```

#### Example TS workflow
```ts
import { GSContext, GSDataSource, GSStatus } from "@godspeedsystems/core";

export default async function (ctx: GSContext, args: any) {
    const ds: GSDataSource = ctx.datasources.aws;
    const response = await ds.execute(ctx, {
         //Pass exactly same args as this aws service's method takes
        ...args,
        //Along with args, pass meta object
        // meta can contain {entityName, method}
        meta: {entityName: 's3', method: 'listBuckets'},
        //Or meta can contain {fnNameInWorkflow} which is same as 
        //the 'fn' that we write when invoking datasource from yaml workflow
        //For example, this will also work
        //meta: {fnNameInWorkflow: 'datasource.aws.s3.listBuckets'}
    });
    return response;
}
```
### Example to upload file on aws s3

Event
```yaml
# event for upload s3 file

"http.post./aws":
  fn: aws_upload
  body:
  content:
    multipart/form-data:
        schema:
        $ref: '#/definitions/event/upload_file'
  responses:
    200:
      content:
         application/json:

```
the above event calling `aws_upload.ts` workflow from `src/functions/` 
 
```js 
import { GSContext, GSStatus } from "@godspeedsystems/core";
import fs from 'fs'

module.exports = async (ctx: GSContext) => {
  const { files: { myfile } } = ctx.inputs.data;
  const { datasources, logger } = ctx;
  try {
    return new Promise((resolve, reject) => {
      fs.readFile(myfile.tempFilePath, async function (err, data) {
        if (err) {
        resolve(new GSStatus(false, 500, 'S3 document upload failed', { error: { message: err.message } }));

        } // Something went wrong!
        const contentType = ctx.inputs.data.headers['content-type']
        var params = {
          Key: myfile.name, //file name
          Body: data,
          Bucket: 'userdocs123',
          ContentType: contentType,
        };

        const res = await datasources.aws.client.s3.putObject(params);

        resolve(new GSStatus(true, 200, 'successfully uploaded document', res, {}))

      })
    });

  } catch (e: any) {
    logger.error('S3 document upload failed %o', e)
    return new GSStatus(false, 500, 'S3 document upload failed', { error: { message: e.message } })
  }

};
```

### 4. [excel-as-datasource](https://www.npmjs.com/package/@godspeedsystems/plugins-excel-as-datasource)

Excel as a datasource: Turn your spreadsheets into actionable insights. Seamlessly integrate Excel into your applications to harness data, charts, and calculations. Transform static numbers into dynamic, real-time intelligence. Ready to Excel? 📊

### 5. [Nodemailer-as-datasource](https://www.npmjs.com/package/@godspeedsystems/plugins-mailer-as-datasource)

Nodemailer as a datasource: Amp up your communication game by using a mailer as a powerful data source. Connect seamlessly to send information through emails. Transform your app into a messaging maestro, unlocking a world of possibilities. Ready to send your data soaring through the digital mail stream? 📧✨

Sending emails in your Node.js application has never been smoother. The Godspeed Nodemailer Plugin provides seamless integration between the robust Godspeed framework and Nodemailer, the go-to solution for email delivery in Node.js.

## Features

- **Effortless Setup:** Get up and running in minutes with our easy-to-follow setup guide.
- **Dynamic Templating:** Craft personalized emails with dynamic content using popular templating engines.
- **Error Resilience:** Robust error handling ensures reliable email delivery, even in challenging scenarios.
- **Scalable and Secure:** Designed for scalability and security, so your email system can grow with your application.

Whether you're sending transactional emails, newsletters, or notifications, this plugin empowers you to deliver messages with Godspeed. Let's elevate your email game together!

## Example usage:

### Mailer config ( src/datasources/mail.yaml )
```yaml
type: mail
user: 'godspeed@gmail.com'
pass: 'rmeb bjak xcam xkub'
```

### Mailer Event for Producer ( src/events/mail_send_event.yaml )

```yaml title=src/events/mail_send_event.yaml
http.post./email:
  summary: Send email to user
  description: Sends an email to a user using the mailer datasource
  fn: send_email
  authn: false
  body:
    content:
      application/json:
        schema:
          type: object
          properties:
            recipient:
              type: string
            subject:
              type: string
            body:
              type: string
          required:
            - recipient
            - subject
            - body
  responses:
    '200':
      description: Email sent successfully
      content:
        application/json:
          schema:
            type: object
            properties:
              success:
                type: boolean
                example: true
              data:
                type: object # Or a more specific schema if the mailer returns structured data
    '400':
      description: Failed to send email
      content:
        application/json:
          schema:
            type: object
            properties:
              success:
                type: boolean
              error:
                type: string
```

### Typescript Workflow to send mail
```typescript title=src/functions/send_email.ts

import { GSContext, GSStatus, GSDataSource } from "@godspeedsystems/core";
export default async function (ctx: GSContext) {
  const { body} = ctx.inputs.data;
  const mailerClient: GSDataSource = ctx.datasources.mailer;

  try {
    const response = await mailerClient.execute(ctx, {
      to: body.recipient,
      subject: body.subject,
      text: body.body
    });
    return new GSStatus(true, 200, "Email Sent successfully", response);
  } catch (error: any) {
      const errorData = error.stack || error;
      return new GSStatus(false, 400, "Failed to send email", errorData);
  }
}
```

### 6. [redis-as-datasource](https://www.npmjs.com/package/@godspeedsystems/plugins-redis-as-datasource)

Redis as a datasource: Elevate your data game with the speed and efficiency of Redis. Use it as a powerhouse for caching, real-time analytics, and lightning-fast data retrieval. Embrace the key-value magic to supercharge your application's performance. Ready to Rediscover efficiency? 🚀


### 7. [mongoose-as-datasource](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/mongoose-as-datasource)
Mongoose as a datasource: It provides seamless integration with MongoDB through the Mongoose library. MongoDB is a popular NoSQL database, and with this plugin, you can harness the power of Mongoose to model your data, perform queries, and interact with MongoDB in a structured and efficient manner.

## How to Use
- Open the godspeed project in vscode and then add the plugin from the CLI of vscode, select the `@godspeedsystems/plugins-mongoose-as-datastore` to integrate the plugin.
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
- The plugin can also be directly installed by running `npm i @godspeedsystems/plugins-mongoose-as-datastore` command


- This will create some files.
  - You will find a file in your project related to the Prisma plugin at `src/datasources/types/mongoose.ts` 

    ### Contents of types/mongoose.ts
    The file will look something like this
    ```typescript
    import { DataSource } from '@godspeedsystems/plugins-mongoose-as-datastore';
    export default DataSource;
    ```

### <mongoose_ds_name/>.yaml file
  ![Alt text](../../../static/img/mongoose_folder_structure.png)
- You can keep the file by any name. This file is used to initialize a mongoose datasource instance. Whatever is the name of the file, you will need to invoke
the mongoose datasource commands by the same name. Also your models will be needed to be kept in a folder with the same name as your yaml file (i.e. your datasource instance name). For example mongoose1.yaml would mean
calling `fn:datasources.mongoose1.<Model_Name>.<Function_Name>` from yaml workflows and 
`ctx.datasources.mongoose1.<Model_Name>.<Function_Name>` from TS/JS files. Also you will need to create a folder `datasources/mongoose1/models` and keep your models there as detailed below.

- You can override the default response codes for success cases for different methods by putting them in the datasource instance's yaml file

```yaml
type: mongoose
successResponseCodes: #default response codes for success responses
  create: 201
  find: 200
  findOne: 200
  aggregate: 200
  findOneAndUpdate: 201
  findOneAndDelete: 202
```

#### Error response
When a call has an error the datasource returns following `GSStatus`

```yaml
    code: 500
    success: false
    data: 
        message: Internal Server Error
```

### Setting up Mongoose models
This datasource loads the [Mongoose models](https://mongoosejs.com/docs/models.html) from `datasources/<datasource_name>/models` folder.

![Alt text](../../../static/img/mongoose_folder_structure.png)
#### Example Mongoose model file
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

### Sample workflow for Mongoose API
When calling any api function it will be called as `fn:datasources.mongoose1.<Model_Name>.<Function_Name>` from yaml workflows and 
`ctx.datasources.mongoose1.<Model_Name>.<Function_Name>` from TS/JS files.
The arguments to any `Function_Name` are to be passed in two ways
- Only the first arg of the function as accepted by the API
  ```yaml
    id: mongoose_workflow
    tasks:
      - id: first_task
        fn: datasource.mongoose.SomeModel.findOne
        args: {"name": "mastersilv3r"} #Fun fact: YAML acceptes JSON as well. 
  ```
- Most Mongoose functions accept multiple args. To pass all args to an API call, send an array of the acceptable args. This array is spread and passed to the API call
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
- Calling from a TS/JS workflow works same as any other datasource
```typescript
import { GSContext, GSDataSource, GSStatus } from "@godspeedsystems/core";

export default async function (ctx: GSContext, args: any) {
    const ds: GSDataSource = ctx.datasources.mongoose1;
    //Will need to set a meta object in the args to pass entitType and method
    args.meta = {entityType: 'SomeModel', method: 'findOne'};
    const response = await ds.execute(ctx, args);
    return response;
}
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

### 8. [kafka-as-datasource-as-eventsource](https://www.npmjs.com/package/@godspeedsystems/plugins-kafka-as-datasource-as-eventsource)

Kafka is your dynamic data stream and event maestro! As a data source, it floods your systems with real-time insights, turning data into decision-making gold. And when it comes to event sourcing, Kafka orchestrates a symphony of real-time events that power your applications and spark innovation. Experience the future of data and event handling with Kafka. 


