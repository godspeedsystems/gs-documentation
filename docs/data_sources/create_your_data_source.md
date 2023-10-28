# Defining a Custom Data Source.

## Data Source :

Any kind of entity which provides read and write mechanism for data is considered a datasource. For example, an API, a SQL or NoSQL datastore which includes RDBMS or mongodb,postgresql, key value stores, document stores etc. The settings for each datasource lies in src/datasources directory.

### Steps to create Custom Datasource for personal use:

1. Look for the `npm package` you wish to integrate with  Godspeed framework.

2. Inside the `datasources` directory, create a `YAML` file with a specific name. In this YAML file, ensure you specify a `type` field, and there must be a corresponding `TypeScript` file in the `types` directory that shares the same name as the `type` you defined.

3. In your TypeScript file, use an import statement to bring in `GSDataSource` from the `@godspeedsystems/core` package. Then, create a class that inherits from `GSDataSource`.

```
    .
    ├── src
        ├── datasources
        │   ├── types
        │   |    └── custom_datasource.ts
        |   |
        │   └── custom_datasource.yaml
        │
        ├── events
        | 
        |
        |
        ├── eventsources
        │   
        |
        └── functions
```

4. Afterward, you can access the methods provided by `GSDataSource`. Initialize your client by calling the `initClient()` function.

5. Once your client is initialized, you can execute its methods using the `execute` function.

<details>
<summary> let's use axios as an example of datasource :</summary>

#### Project structure

```bash
    .
    ├── src
        ├── datasources
        │   ├── types
        │   |    └── axios.ts
        |   |
        │   └── api.yaml
        │
        ├── events
        |   |
        |   └── axios_event.yaml
        |
        ├── eventsources
        │  
        |
        └── functions
            |
            └── axios_workflow.yaml
```

#### axios config ( src/datasources/api.yaml )
```yaml
type: axios
base_url: http://localhost:5440
```

#### Initializing client and execution ( src/datasources/types/axios.ts ) :

``` typeScript
import { GSContext, GSDataSource, GSStatus, PlainObject } from "@godspeedsystems/core";
import axios, { Axios, AxiosInstance, AxiosResponse } from 'axios'

export default class DataSource extends GSDataSource {
  protected async initClient(): Promise<PlainObject> {
    const { base_url, ...rest } = this.config;

    const client = axios.create({ baseURL: base_url, ...rest });
    return client;

  }
  async execute(ctx: GSContext, args: PlainObject): Promise<any> {
    const { logger } = ctx;
    const {
      meta: { fnNameInWorkflow },
      ...rest
    } = args as { meta: { entityType: string, method: string, fnNameInWorkflow: string }, rest: PlainObject };

    const [, , method, url] = fnNameInWorkflow.split('.');

    try {
      const client = this.client as AxiosInstance;

      const response = await client({
        method: method.toLowerCase(),
        url,
        ...rest
      });

      return new GSStatus(true, response.status, response.statusText, response.data, response.headers);
    } catch (error: any) {
      const { request, response } = error;

      // request initilized but failed
      if (response) {
        const { status, data: { message }, headers } = response as AxiosResponse;
        return new GSStatus(false, status, message, undefined, headers)
      }

      // request sent but no response received
      if (request) {
        return new GSStatus(false, 503, 'Server timeout.', undefined, undefined);
      }

      return new GSStatus(false, 500, 'Oops! Something went wrong while setting up request.', undefined, undefined);
    }
  }
}


```
#### Example Event ( src/events/axios_event.yaml ) :
```yaml
"http.post./hello":
  fn:axios_workflow :
  body:
    type: object
  responses:
    200:
      application/json:
```
#### Example workflow ( src/functions/axios_workflow.yaml ) :
```yaml
id: helloworld
tasks:
  - id: fist_task
    fn: datasource.api.post./helloworld
    args:
      name: 'Hello World!'
```
</details>

