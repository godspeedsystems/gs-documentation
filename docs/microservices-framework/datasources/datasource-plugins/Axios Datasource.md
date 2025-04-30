Axios as a datasource: Level up your data-fetching game with Axios. Seamlessly integrate this powerful HTTP client into your app for smooth and efficient data transactions. Fetch, post, and interact with APIs effortlessly. Ready to make data requests a breeze? 

<!-- The Godspeed Axios Plugin provides seamless integration with the Axios library for making HTTP requests within the Godspeed framework. It simplifies the process of defining and executing HTTP requests, making it easy to interact with external APIs. -->

## How to Use

**a. ** When you create a godspeed project from the CLI, by default the axios plugin is integrated into your project if not, add the plugin from the CLI

```
godspeed plugin add @godspeedsystems/plugins-axios-as-datasource
```

**b. ** You will find two files in your project related to the axios plugin at `src/datasources/types/axios.ts` and `src/datasources/api.yaml`.

```typescript title=src/datasources/types/axios.ts
import { DataSource } from '@godspeedsystems/plugins-axios-as-datasource';
export default DataSource;
```

### Sample config file for Axios

The sample config can be modified as per the usecase of your application.

```yaml title=src/datasources/api.yaml
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
    Cookie: <% mappings.my_bank.auth_workflow_cookie %>
    Authorization: <% `Bearer ${config.my_bank.apiToken}` %>    # to use Bearer token 

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
Retry interval values will be based on [ISO Temporal Duration standard](https://tc39.es/proposal-temporal/docs/duration.html)

### Sample yaml workflow
```yaml title=src/functions/sample.yaml
id: sample
tasks:
  - id: first_task
    fn: datasource.api.get./api/items
  # axios request configuration options, such as headers, params, data and timeout can be directly passed as arguments (args).
    args:
      headers:
        'X-Requested-With': 'XMLHttpRequest'
      params:
        ID: 12345
      data:
        firstName: 'Fred'
      timeout: 1000
```

### Sample js/ts workflow
```js
import { GSContext, GSDataSource, logger, PlainObject } from "@godspeedsystems/core";

export default async function (ctx: GSContext, args: {loan_offer: PlainObject, pan_number: string}) {
    const client: GSDataSource = ctx.datasources.api;

    const res =  await client.execute(ctx, {
        meta: {
            method: 'get',
            url: '/api/items',
        },
        data: args
    });
    return res;
};
```

 To get more clarity checkout about [Axios configuration]( https://axios-http.com/docs/req_config)


## How It Helps

The Godspeed Axios Plugin offers the following advantages:

**1. Axios Integration:** The plugin abstracts away the complexities of setting up Axios instances, making it effortless to configure and execute HTTP requests.

**2. Unified DataSource:** Developers can use a uniform API to define data sources that make HTTP requests using Axios. This enhances consistency and ease of use across different parts of the application.

**3. Error Handling:** The plugin includes robust error handling, allowing developers to gracefully handle various scenarios, such as server timeouts, request setup failures, and server-side errors.

**4. Integration with Godspeed Core:** The plugin seamlessly integrates with the Godspeed Core library, aligning with the principles of the Godspeed framework and enabling streamlined event-driven workflows.


## Plugin Components
:::info
You can deep dive into the plugin code [here](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/axios-as-datasource)
:::
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


### 3. Axios retry
**a. ** Set Defaults retry at datasource level within datasource config yaml file.(src/datasources/api.yaml)

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

**b. ** Override retry logic at task level within args object of the axios method call.

```yaml
id: some_workflow
tasks:
  - id: post-anything
    # Fetching loan offers from rule engine for the given bank and pan card
    fn: datasource.api.post./anything
    args:
      data:
        data: <%inputs.body.data%>
      headers:
        Content-Type: application/json
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

### 4. Authentication of API calls with token refresh logic

HTTP requests sometimes need authentication, means they are validated against a token which is passed in the headers
and also the token needs to be refreshed before the API call. 

Please checkout the above sample config of the datasource.

API calls with token refresh logic and authentication is configured in your datasource config file, by setting `authn` and the `fn` is called before calling the API endpoint and token will be refreshed on statusCode mentioned in the array of [`statusCode`](/docs/microservices-framework/datasources/list-of-plugins#sample-config-apiyaml).

Example `fn` of `authn`:

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

### 4.1 Skip auth

In an axios datasource call, if `skipAuth` is set in `args` then auth flow will be ignored. This is useful when generating token from the same api.

example workflow:
```yaml
id: some_workflow
tasks:
  - id: post-anything
    # Fetching loan offers from rule engine for the given bank and pan card
    fn: datasource.api.post./anything
    args:
      skipAuth: true
```
## Conclusion

The Godspeed Axios Plugin is a valuable addition to the Godspeed framework, providing a standardized way to make HTTP requests using the Axios library. With this plugin, you can easily integrate with external APIs, handle responses, and streamline data retrieval within your applications.

## Reference links
**- ** [Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/axios-as-datasource)   
**- ** [Issue Tracker](https://github.com/godspeedsystems/gs-plugins/issues)      
**- ** [npm package](https://www.npmjs.com/package/@godspeedsystems/plugins-axios-as-datasource)

