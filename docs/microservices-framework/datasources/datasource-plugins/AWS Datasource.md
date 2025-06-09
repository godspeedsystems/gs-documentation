---
title: AWS Datasource Plugin
description: A comprehensive AWS integration plugin that enables seamless access to Amazon Web Services in Godspeed applications. Features include S3 storage, DynamoDB, Lambda functions, SQS messaging, and SSM parameter management with configurable service clients.
keywords: [aws plugin, amazon web services, cloud integration, s3, dynamodb, lambda, sqs, ssm, godspeed plugin, cloud storage, serverless, cloud services]
---

**- ** [Plugin Soucre Code](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/aws-as-datasource) 

Turbocharge your app by tapping into Amazon Web Services. Unleash the power of cloud-based data, storage, and more to supercharge your application.

## Steps to use aws plug-in in godspeed framework:

### How to install 
Create a godspeed project from the CLI, open the created project in vscode and then add the plugin:

```
godspeed plugin add @godspeedsystems/plugins-aws-as-datasource 
```

### Related files
After installation, you will find two auto-generated files in your project related to the plugin at `src/datasources/types/aws.ts` and `src/datasources/aws.yaml`.

### Configuration

In your `<aws_ds_name>.yaml` file, you will need to configure   

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

**1. ** type: aws (type of the datasource)   
**2. ** default_client_config (optional) for initializing your clients, as per the aws config specs   
**3. ** Client type to client name mappings via the `types` key   
**4. ** `services` contains settings for the services you want to invoke via this datasource. Each service has a type like s3, lamdba etc. They can have their own config overriding the default under the `config` key.    
There can be multiple services configured for the same type. For example, `s3` and `s3_1` in the above configuration.

### Example usage

In an event, we establish HTTP endpoint that accepts json objects in request body. When this endpoint is invoked, it triggers the `aws_list` function with the args coming from request body.

```yaml title=event
"http.post./aws":
  fn: aws_list
  body:
    type: object
  responses:
    200:
      content:
         application/json:
```

In workflow we need to mention `datasource.aws.${serviceName}.${method}` as function `fn` to perform operations in this case `datasource.aws.s3.listObjects`.

```ts title='TS workflow'
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
```yaml title=event
# event for upload s3 file

http.post./aws:
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

        resolve(new GSStatus(true, 200, 'successfully uploaded document', res, undefined))

      })
    });

  } catch (e: any) {
    logger.error('S3 document upload failed %o', e)
    return new GSStatus(false, 500, 'S3 document upload failed', { error: { message: e.message } })
  }

};
```

## Reference links
**- ** [Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/aws-as-datasource)   
**- ** [Issue Tracker](https://github.com/godspeedsystems/gs-plugins/issues)      
**- ** [npm package](https://www.npmjs.com/package/@godspeedsystems/plugins-aws-as-datasource)
