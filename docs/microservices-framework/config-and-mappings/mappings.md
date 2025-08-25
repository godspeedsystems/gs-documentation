---
title: Mappings
description: Learn about mappings, a global object available in your microservice for defining key/value pairs, arrays, etc.
keywords: [mappings, global object, microservice, key/value pair, YAML]
sidebar_position: 3
---

# Mappings

Mappings is a global object which will be available in your microservice. You can define anything in the mappings i.e. key/value pair map, array, etc. You can access these mappings inside your functions at any time.

## Project structure
Mappings are present in `src/mappings` directory. The default format is yaml and you can store mappings in the nested directories also. The nested directories are also accessible in the same `mappings` object.
```
.
├── config
└── src
    └── mappings
        └── index.yaml
        └── generate.yaml
```

## Sample mappings
This is a sample mapping which is accessible in the functions inside mappings object using `mappings.Gender` and `mappings.generate.genId`   
```yaml title=index.yaml
Gender:
  Male: M
  Female: F
  Others: O
```

```yaml title=generate.yaml
genId: 12345
```
:::tip Note
If the file name is index.yaml then its content is available directly at global level i.e. you don't need to write index explicitly while accessing the mappings object like `mappings.Gender`.    
However, for other file names you need to mention the file name while accessing the mappings object like `mappings.generate.genId`
:::

### Sample Datasource Configuration using Mappings
  ```yaml
   # /src/datasources/aws.yaml
   type: aws
   default_client_config:
     region: <% mappings.aws_region %>
   services:
     s3:
       type: s3
       config:
         bucket: <% mappings.aws_s3_bucket %>
     dynamodb:
       type: dynamodb
       config:
         tableName: <% mappings.aws_table_name %>
   ```
   **Explanation**:
   - `aws_region`, `aws_s3_bucket`, and `aws_table_name` are defined in `mappings`.
   - This configuration dynamically injects these values into the datasource.

---

### Sample Event Source Configuration using Mappings
  ```yaml
   # /src/eventsources/cron.yaml
   type: cron
   events:
     cron.0 0 * * *.UTC:
       description: Daily task at midnight UTC
       fn: daily_update
       args:
         reportPath: <% mappings.report_path %>
  ```
   **Explanation**:
   - The `report_path` mapping is used to dynamically define the report path for the function triggered by the event.

---
### Sample typescript function accessing mappings

In this example, mappings is utilized to dynamically retrieve error messages based on an error code.

```
import { GSContext, GSStatus } from '@godspeedsystems/core';

export default async function(ctx: GSContext, args: any) {
    const { mappings, childLogger, inputs } = ctx;
      let error: any = {};
        error.code = args?.code; 
        error.message = args?.message;
            
            if (!error.code) {
                error.code = "E001";
            } 
            if (!error.message) {
                error.message = mappings.error_codes.codes[error.code];
            }
        return new GSStatus(false, 400, 'Failed', error.message);
      }

```
### Step-by-Step Explanation of above ts function

- The mappings object is destructured from the ctx (Godspeed context).
- In this case, mappings.error_codes.codes contains a predefined set of error codes and their corresponding messages.
- The function checks if the args object contains an error code and a message, if the code is missing, it defaults to "E001".
- If the message is not provided in the args, the function retrieves it from `mappings.error_codes.codes` using the error code as the key. 

### Mappings file containing error codes
`src/mappings/error_codes.yaml`
```yaml
  codes:
    E001: Internal Server Error
    E002: Missing mandatory field in the request body.
    E003: Extra properties found in the request body.
    E004: Wrong field type/format/pattern/length in the request body.
    E005: Record already exists in the database.
    E006: Record to update is not present in the database.
    E007: Record to delete is not present in the database.
```
This ensures that error messages are consistent and centralized. Instead of hardcoding messages in multiple places, they are stored in the mappings file.


## Using mapping constants in other mapping files
You can use mapping constants in other mapping files using coffee/js scripting.

For example, you have mapping files `index.yaml`, `relations.json` and `reference.yaml`. Use the mappings from first two files as reference in the third file as follows:   
 
```yaml title=index.yaml
Gender:
  Male: M
  Female: F
  Others: O
```

```json title=relations.json
{
    "id": 1,
    "title": "Hello World",
    "completed": false,
    "gender": "<%mappings.Gender.Male%>"
}
```

```yaml title=reference.yaml
NewGender: <% mappings.Gender.Others %>
title:  <% mappings.relations.title %>
```