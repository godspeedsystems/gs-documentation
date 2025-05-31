# Authorization in the framework

The authorization workflows in the framework can be setup at    
**i. ** The eventsouce level, applicable to all events   
**ii. ** At the event level, overriding eventsource configuration   
**iii. ** At the task level, restricting access of the user to the information stored in a datastore
```yaml
authz: 
  - id: authz_task_1
    summary: apply the rules over enriched context. Returns true or false or a GSStatus
    fn: | 
      <% 
        success: user.role === 'admin' && user.department === 'HR'
      %>
```

## What do we need for authorization
We need the user, resource, context and action information. This information can be accessed from `ctx.user.data.{user,headers,params,query,body}`. We also need the access policies or rules. These can exist within the microservice or API code, or they can be loaded from a rule engine or a databse, and executed here in the runtime of this event handling. 

### Loading the necessary user information for authorization
**1. ** The `GSCloudEvent.data.user `object is initially populated by the middleware in the eventsource. For ex. in the JWT case. It serializes and loads the user data like role, id or any other necessary detail for the subsequent authz workflows, or the event handler workflow to use. 
**2. ** You can enrich the user in your `authz` workflows. The framework allows you to enrich user information in the authz workflows.  
**3. ** Its a matter of careful design where you choose to store and retrieve your user data and access policies. Having said that, the framework allows you full freedom to enrich user data in either the event source's middleware or in authz workflows. 

<!-- <img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1704787940/authorization_fbj562.jpg" alt="event types" /> -->

## Authz workflows
The framework allows you to specify yaml taks to run authorization workflows, at three places - event source, event or yaml task.

**i. ** The approach for handling JWT or similar keys is to implement a task within the authorization (authz) workflow.    
**ii. ** The authz workflow can include a task specifically designed to process and enrich the user object with information obtained from the JWT or other keys.   
**iii. ** Finally the authz has to tell whether the user is allowed to do this action, and if yes, then what kind of data is the user allowed to retrieve in response? Hint: consider database access? Even if a user is allowed to read a table, is he allowed to read all the rows? Or is he allowed to read all the columns?

### Example authorization workflows
Developers can define the authorization workflow using the following method.

<!-- #### Using the Path of a Function/Workflow:
-  Developers can specify the path to a custom function or workflow to be used as the authorization workflow.
This method provides more flexibility, allowing developers to implement custom logic in their chosen programming language.


```yaml
# example 
authz: com.biz.custom_authz_workflow
``` -->

#### Authorization tasks DSL

**- ** Developers can define the authorization workflow by providing a set of tasks using the DSL provided by the core framework's workflows  
**- ** This approach allows for a declarative definition of tasks within the authz workflow.

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
  - id: fetch_rules
    summary: |
      in case we need dynamically fetched and evaluated rules 
      from a rule engine like Drools or JRE rule engine storing rules
    fn: com.biz.load_dynamic_rules
  # if above task returns GSStatus.success==true or just true, continue to next task and so on
  - fn: com.gs.evaluate_gre
```

**- ** Think of authz instruction as a workflow. It will accept an array of task or a single task, each of which should return GSStatus or true.   
**- ** These instructions may enrich the context and user data, or load and run authorization checks, or do both.   
**- ** When one task fails, the whole workflow is considered to be failed.   

:::tip Note
- Following Zero trust policy, when a task does not return `true` or `{success: true}` (explicitly), or in the case when `GSStatus.code === 403`, the authorization will be considered as failed. 
- Next tasks in the series of tasks will not be executed. The event or workflow task at which the user's authz has failed will exit.
:::

### Response code, message and data from authorization failure

**1. If GSStatus is returned with success: false ,default code is 403, unless developer specified a 4XX or 5XX code**
##### Sample authz task
```yaml
    authz: 
      id: task_authz
      tasks:
        - fn: com.gs.transform
          id: try_auth_3
          args:
            success: false
            code: 401
```

##### Response 
<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1705002395/Screenshot_from_2024-01-12_01-16-22_k3n7rh.png" alt="rule1_op" />

**2. Framework won't accept 2XX and 3XX status codes when authz task is failed. It will return the default 403**

##### Sample authz task
```yaml
    authz: 
      id: task_authz
      tasks:
        - fn: com.gs.transform
          id: try_auth_3
          args:
            success: false
            code: 200
```
##### Response 
<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1705001270/Screenshot_from_2024-01-12_00-57-37_jmlrh8.png" alt="rule2_op" />


**3. If GSStatus.message is set and GSStatus.data is not set, then GSStatus.message is returned as response body**

##### Sample authz task
```yaml
  authz:
    - fn: com.gs.transform
      id: try_auth_2_authz
      args: | #assume the below if condition is true, then the control goes inside if block and prints the message
        <js%  
          if (inputs.user.role === 'admin') { 
            return {
              success: true, 
              message: "Authorization passed",
            }
          } else {
             return {
              success: false, 
              message: "Authorization failed"
            }
          }
        %>

```

##### Response


<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1705002160/Screenshot_from_2024-01-12_01-12-14_itk2sc.png" alt="rule3_op" />


**4. If GSStatus.message is set and GSStatus.data is set, but 'GSStatus.data.message' is not set, then `{...data,message}` is returned in the response body**


##### Sample authz task
```yaml
 authz:
    - fn: com.gs.transform
      id: try_auth_2_authz
      args: |
        <js% 
          if (inputs.user.role === 'admin') {
            return {
              success: true, 
              message: "Authorization passed",
              data: {x: 2}
            }
          } else {
             return {
              success: false, 
              message: "Authorization failed"
            }
          }
        %>
```

##### Response
<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1705002667/Screenshot_from_2024-01-12_01-20-56_ao2inh.png" alt="rule3_op" />


**5. If GSStatus.message is set and GSStatus.data is set, and 'GSStatus.data.message' is also set, then data is returned in the response body. Meaning GSStatus.data.message has precedence over GSStatus.message**

##### Sample authz task
```yaml
 authz:
    - fn: com.gs.transform
      id: try_auth_2_authz
      args: |
        <js% 
          if (inputs.user.role === 'admin') {
            return {
              success: true, 
              message: "Authorization passed",
              data: {x: 2 ,message: "helloworld"}
            }
          } else {
             return {
              success: false, 
              message: "Authorization failed"
            }
          }
        %>
```

##### Response
<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1705002878/Screenshot_from_2024-01-12_01-24-19_gbinvz.png" alt="rule3_op" />

## Examples 
In the Framework, authorization can be implemented at different levels: event level, task level, and even within datasource plugins. Each level offers flexibility and customization options to meet specific requirements

:::tip Note
- Following Zero Trust Policy, authz configuration can also be set at the event source level, serving as the default configuration.
- Unless an event explicitly specifies `authz: false` or overrides its authz settings, all events will inherit the authz configuration from the event source.
:::


<!-- ### Scaffolding of the example
To better understand the folder structure of the example, review the following scaffolding:

```bash
  ├── src
        ├── datasources
        │   ├── types
        │   |    └── axios.ts
        |   |
        │   └── api.yaml
        │
        ├── events
        |   |
        │   └── helloworld2.yaml
        |
        ├── eventsources
        │   ├── types
        │   |    └── express.ts
        |   |
        │   └── http2.yaml
        |
        └── functions
        |   |
        |   └── helloworld2.yaml
        |
        └── plugins
            |
            └── sum.js
```            
         -->

### A. Authorization at event source level
You can set authz workflows that apply to all events of a particular event source, unless explicitly overriden by an event definition by setting `authz: false` or `authz:` to another workflow.

```yaml
type: express
authz: # enabling authz in event level
  - fn: com.gs.transform 
    id: authz_task
    args: | # if this condition fails, the else gets executed
      <js% 
        if (inputs.user.role === 'admin') { 
          return {
            success: true,
            message: "Authorization passed",
            data: {tableA: {no_access: ['fieldA'], where: {tenant_id: inputs.user.tenant_id}} 
          }
        } else {
            return {
            success: false, 
            code: 403,
            message: "Authorization failed"
          }
        }
      %>
```

### B. Authorization at event level 
```yaml title=events/helloworld.yaml
"http.get./helloworld":
  authn: true
  fn: helloworld # if the below authentication condition returns true, fn helloworld gets called
  authz: # enabling authz in event level
    - fn: com.gs.transform 
      id: try_auth_2_authz
      args: | # if this condition fails, the else gets executed
        <js% 
          if (inputs.user.role === 'admin') { 
            return {
              success: true, #if success: false, the message and data given below will be returned
              message: "Authorization passed",
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
Whenever an API is triggered with authorization enabled, the event source plugin parses the JWT in its request middleware and verifies user data, such as user.role in the example above.    
If the condition evaluates to true, the corresponding workflow is executed. Otherwise, it proceeds to execute the else case, indicating "Authorization failed."

### C. Authorization at task level 
```yaml title=functions/helloworld.yaml
id: helloworld_workflow
tasks:
  - id: helloworld_workflow_first_task
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

<!-- ### JS function
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
``` -->

<!-- ### C.How a datastore plugin's execute() method can access authz permission data? -->

### D. Restricting datastore access

**1. ** Plugins can access user data through `args.meta.authzPerms` in the `GSDatasource.execute()` method. The structure of this data is defined by the plugin, following the format supported by the specific datasource plugin.    
**2. ** For example, it could include fields like `{can_access, no_access, where}`. 
```json title='Sample output of authz workflow authz_wf.yaml'
data: [ 
        //Your access policies for further finegrained datastore access, 
        // as interpreted and used by the datastore plugin to implement restricted database access over any database. 
        { 
          userTableName: { //to be merged in DB query by the datastore plugin 
            where: { //additional filters to be applied on the DB query
              tenant_id: "xyz", sub_tenant_id: "abc" 
            }, 
            no_access: ['PII-A', 'sensitiveB'],  //columns which should not be accessible
            can_access: ['tenant_id']  //columns which are accessible
          } 
        }
      ]
```

**3. ** Subsequently, the plugin is responsible for adjusting its query to the datasource based on the information provided in args.authzPerms

```ts
  async execute(ctx: GSContext, args: PlainObject): Promise<any> {
    const { childLogger } = ctx;
    const {
      meta: { entityType, method, fnNameInWorkflow, authzPerms }, ...rest } = args as { meta: { entityType: string, method: string, fnNameInWorkflow: string, authzPerms: AuthzPerms }, rest: PlainObject };
    if (authzPerms) {
      const authzFailRes = modifyForAuthz(this.client, rest, authzPerms, entityType, method);
      if (authzFailRes) {
        return authzFailRes;
      }
    }
    // Now authz checks are set in select fields and passed in where clause
    let prismaMethod: any;
    try {
        const client = this.client;
        if (entityType && !client[entityType]) {
          logger.error('Invalid entityType %s in %s', entityType, fnNameInWorkflow);
          return new GSStatus(false, 400, undefined, { error: `Invalid entityType ${entityType} in ${fnNameInWorkflow}`});
        }
        prismaMethod = client[entityType][method];
        if (method && !prismaMethod) {
          logger.error('Invalid CRUD method %s in %s', method, fnNameInWorkflow);
          return new GSStatus(false, 500, undefined, { error: 'Internal Server Error'});
        }

        const prismaResponse = await prismaMethod.bind(client)(rest);
        return new GSStatus(true, responseCode(method), undefined, prismaResponse);
    } catch (error: any) {
      logger.error('Error in executing Prisma query for args %o \n Error: %o', args, error);
      return new GSStatus(false, 400, error.message, JSON.stringify(error.message));
    }
  }
```

#### Example: [prisma-as-datasource plugin](../datasources/datasource-plugins/Prisma%20Datasource.md/#database-authorization)
<details>
<summary>Restricted datastore access</summary>
In the below authz workflow can_acces, no_access and where conditions are provided. These conditions will be applied while fetching author details.

```yaml title=authz_wf.yaml
authz: 
  - id: authz_task_1
    summary: return access columns
    fn: com.gs.transform
      args:
        can_access: 
          - col1
          - col2
        no_access:
          - col3
        where:
          tenant: <% inputs.headers.client_id %>
```

```yaml title=fetch_author.yaml
summary: Fetch author
tasks:
  - id: fetch_author
    fn: datasource.mysql.author.findUnique
    authz:
      - fn: authz_wf
        args: <% inputs %>
    args:
      where:
        id: <% inputs.params.id %>
```
</details>
