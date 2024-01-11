# Authorization

## Introduction
- Authorization is a crucial component of access control, determining who can access what resources and perform specific actions.
- Authorization in the microservice framework works at two levels: one at the event itself and the second at the task and datasource level. It supports multi-level tenancy using Attribute-Based Access Control (ABAC) in addition to plain Role-Based Access Control (RBAC). 
- The GSCloudEvent.user object is populated by the event source plugin or as a task in the authz workflow. Subsequently, the remaining authz workflow tasks can access this information, enrich it, and utilize it for further authorization logic.

<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1704787940/authorization_fbj562.jpg" alt="event types" />

## The How!!


- The framework itself will not handle authentication tasks, such as processing JWT, parsing headers, or validating based on JWT policies, and it won't automatically add that information to the GSCloudEvent.user object. 
- However, parsing JWT or other similar keys can still be achieved through either of the following methods:

### The Event Source plugin.
For handling JWT or similar keys, it is recommended that each event source plugin adheres to a standardized JWT handling configuration. In the case of JWT, the configuration typically includes details such as the issuer, audience, and secret key.

:::tip Note
As of the current implementation, the Framework provides support for JWT in its [Express](https://github.com/godspeedsystems/gs-plugins/blob/main/plugins/express-as-http/README.md) and [GraphQL](https://github.com/godspeedsystems/gs-plugins/blob/main/plugins/graphql-as-eventsource/README.md) plugins. To know more , refer [Jwt-authentication](/docs/microservices-framework/authentication/jwt-authentication.md#introduction)
:::

Example configuration:

```yaml
jwt:
  issuer: YOUR_ISSUER
  audience: YOUR_AUDIENCE
  secretOrKey: YOUR_SECRET_KEY
```
This configuration ensures consistent and secure handling of JWTs across various event source plugin handlers. 

### Authz Workflow Task
- Another approach for handling JWT or similar keys is to implement a task within the authorization (authz) workflow. 
- In this scenario, the authz workflow can include a task specifically designed to process and enrich the user object with information obtained from the JWT or other keys.

- The authz (authorization) workflow is designed to accept either the DSL of tasks from the core framework's workflows or the path of a specific function or workflow.

Developers can choose between the two options based on their preferences and requirements:

#### Using the Path of a Function/Workflow:
-  Developers can specify the path to a custom function or workflow to be used as the authorization workflow.
This method provides more flexibility, allowing developers to implement custom logic in their chosen programming language.


```yaml
# example 
authz: com.biz.custom_authz_workflow
```

#### Using Core Framework's Workflows' Tasks DSL:

- Alternatively,Developers can define the authorization workflow by providing a set of tasks using the DSL provided by the core framework's workflows.
- This approach allows for a declarative definition of tasks within the authz workflow.

```yaml
# example 
authz: 
  - id: enrich_context
    summary: |
        Enrich user information based on his parsed JWT, 
        from a policy engine, DB, some datasource
    fn: com.biz.enrich_user_context 
    args: 
      success: true
  # if above task returns GSStatus.success==true
  - summary: apply the rules over enriched context. Returns true or false
    fn: | 
      <% 
        success: user.role === 'admin' && user.department === 'HR'
      %>
  # if above task returns true or GSStatus.success==true, continue to next task
  - id: fetch_rules
    summary: |
      in case we need dynamically fetched and evaluated rules 
      from a rule engine like Drools or JRE rule engine storing rules
    fn: com.biz.load_dynamic_rules
  # if above task returns GSStatus.success==true or just true, continue to next task and so on
  - fn: com.gs.evaluate_gre

```

- Think of authz instruction as a workflow. It will accept an array of task or a single task, each of which should return GSStatus
- These instructions may enrich the context and user data, or load and run authorization checks, or do both.

## Responses
- When task does not return true or {success: true} (explicitly), it is assumed a failure, the framework reads the {code, message, body} of the GSStatus and try to return response with status code as per the following rules

:::tip Note
- Following Zero trust policy, whenever GSStatus is not returned with success: true or when GSStatus.code === 403, the authorization will be considered failed. 
- Next tasks in the series of tasks will not be executed. The event or workflow task at which the user's authz has failed will exit with GSStatus
:::

### Rules 

1. Default code is 403, unless developer specified a 4XX or 5XX code
2. Framework won't accept 2XX and 3XX status codes when authz task is failed. It will return the default 403
3. If GSStatus.message is set and GSStatus.data is not set, then GSStatus.message is returned as response body
4. If GSStatus.message is set and GSStatus.data is set, but 'GSStatus.data.message' is not set, then {...data,message} is returned in the response body
5. If GSStatus.message is set and GSStatus.data is set, and 'GSStatus.data.message' is also set, then data is returned in the response body. Meaning GSStatus.data.message has precedence over GSStatus.message 


## Example 

### Folder Structure

<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1704992995/Screenshot_from_2024-01-11_22-37-54_uduur5.png" alt="scaffolding" />

#### Event
events/helloworld2.yaml
```yaml
"http2.get./helloworld2":
  authn: true
  fn: helloworld2 # if the below authentication condition returns true, fn helloworld2 gets called
  authz: # enabling authz in event level
    - fn: com.gs.transform 
      id: try_auth_2_authz
      args: | # if this condition fails, the else gets executed
        <js% 
          if (inputs.user.role === 'admin') { 
            return {
              success: true, #if success: false, the message and data given below will be returned
              message: "Authorization failed custom response",
              data: {x: 2 ,message: "helloworld"} 
            }
          } else {
             return {
              success: false, 
              message: "Authorization failed"
            }
          }
        %>
  body:
    content:
      application/json:
        schema:
          type: object
          properties:
            name:
              type: string
  responses:
    '200':
      description: Successful response
      content:
        application/json:
          schema:
            type: object
            properties:
              message:
                type: string
    '400':
      description: Bad request response

```
- Whenever an API is triggered with authorization enabled, the system parses the JWT and verifies user data, such as user.role in the example above. If the condition evaluates to true, the corresponding workflow is executed. Otherwise, it proceeds to execute the else case, indicating "Authorization failed."

### Workflow
functions/helloworld2.yaml
```yaml
id: helloworld2_workflow
tasks:
  - id: helloworld2_workflow_first_task
    fn: com.gs.transform
    args: 
      code: 200
      success: true
      data: | #sum_sumindex(4,5) is used to call the function sumindex(x,y) written in sum.js file
        <js%
         {
          a: sum_sumindex(4,5), 
          message: hello("Hi"),
         }
        %> 
    on_error:
      continue: true
      response:
        success: true
        code: 500
        data: {}
    authz:  #Enabling authz in task level
      id: task_authz
      tasks:
        - fn: com.gs.transform
          id: try_auth_3
          args:
            success: <% inputs.headers.x == "ayush" %>
            code: 200
            
```

### JS function
:::tip Note
To use sumindex function defined in sum.js , you can access it by using sum_sumindex(x,y)
:::

plugins/sum.js

```js
function sumindex(x, y) {
    return 2*x + y;
}

module.exports = {
    sumindex
}
```

## How Plugins can access user data:

- Plugins can access user data through args.authzPerms in the execute() method. The structure of this data is defined by the developer, following the format supported by the specific datasource plugin. For example, it could include fields like {can_access_columns, no_access_columns, additionalWhereClause}. 
- Subsequently, the plugin is responsible for adjusting its query to the datasource based on the information provided in args.authzPerms

example.ts
```ts
async execute(ctx: GSContext, args: PlainObject): Promise<GSStatus> {
    const {
      meta: { entityType: serviceName, method , authzPerms, fnNameInWorkflow},
      ...rest
    } = args;
    //Now do whatever
    try {
    //@ts-ignore
      const response = await this.client[method](rest);
      return new GSStatus(true, 200, undefined, response);
    } catch(err: Error) {
      return new GSStatus(false, err.$metadata?.httpStatusCode || 500, undefined, { message: "Internal server error" });

    }
  }
```