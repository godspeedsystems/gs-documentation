
# Overview
Authorization is a crucial component of access control, determining who can access what resources and perform specific actions. 

<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1704787940/authorization_fbj562.jpg" alt="event types" />

### Types of Authorization
1. Role-Based Access Control (RBAC):
RBAC is a widely-used authorization model where access is granted based on predefined roles. Users are assigned roles, and these roles dictate the permissions associated with accessing resources and performing actions.

2. Attribute-Based Access Control (ABAC):
ABAC is a dynamic authorization model that considers various attributes associated with users, resources, actions, and context. Policies are defined based on these attributes, allowing for more granular control over access.

### Key Agents in Authorization
Authorization involves four key agents:

a. User
Users are entities seeking access to resources or the ability to perform actions within a system.

b. Resource
Resources are entities or data within a system that users may want to access or manipulate.

c. Action
Actions define the specific operations or activities that users may want to perform on resources.

d. Context
Context refers to the circumstances or conditions under which a user's request for access is evaluated. This includes factors such as time, location, or any other relevant contextual information.

<!-- 
## Datasources authentication
At the API datasource level, you can implement authentication measures. You can establish an authentication workflow specific to the datasource, allowing it to make requests to an authentication service in order to obtain tokens or perform authentication checks. Subsequently, this workflow can furnish headers, parameters, or status codes to the primary workflow as required.

Here is the sample spec:
**Datasource**
```yaml
type: api
base_url: <% config.api.base_url %>
authn: com.jfs.api_auth
```
Here, `com.jfs.api_auth` is the authentication workflow which gets called for the authentication of any request to this datasource.

#### Sample workflow using the above datasource
```yaml
summary: Call an API and transform the 
tasks:
    - id: api_step1 # the response of this will be accessible within the parent step key, under the step1 sub key
      description: Hit with some dummy data. It will send back same as response
      fn: datasource.api.post./anything
      args:
        data: <% inputs.body %>
```
#### Sample authentication workflow com.jfs.api_auth
```yaml
summary: Auth workflow
tasks:
    - id: auth_step1
      description: Hit the authn request
      fn: datasource.authapi.post./authenticate
      args:
        data: <% inputs.query.username %>

    - id: auth_step2
      description: Transform the response received from authn api
      fn: com.gs.transform
      args:
        headers:
          Authorization: <% 'Bearer ' + outputs.auth_step1.auth.token %>
        params:
          queryid: <% outputs.auth_step1.params.queryid %>
        statusCodes: <% outputs.auth_step1.status_code %>          
```
The authentication workflow should return response in this format:
```yaml
headers: 
  header1: val1
params:
  param1: val1
statusCodes: [401, 403, ....]
```
:::note
The authentication workflow gets called when any request returns the specified `statusCodes`. 
:::




### Workflow DSL
You can add authorization workflow at the task level in any workflow. The authorization workflow should return allow/deny or json output to the main worklfow.

**Allow/Deny**  
If authz workflow returns data as true/false, it means the task is allowed/denied to get executed.

**JSON output**  
If authz workflow returns JSON output then it is merged with args.data of the task for which authz is being executed.

Here is the sample spec:  
**Sample workflow calling the authz workflow**
```yaml
summary: Call an API
tasks:
    - id: api_step1
      description: Hit with some dummy data. It will send back same as response
      authz:
        fn: com.jfs.authz
        args: <% inputs %>
      fn: datasource.api.post./anything
      args:
        data: <% inputs %>
```

**Sample authorization workflow `com.jfs.authz`**
```yaml
summary: Authorization workflow
tasks:
  - id: authz_step1
    description: return allow/deny based upon user
    fn: datasource.authz.post./authorize
    args: 
      data: <% inputs.body.user %>
  - id: authz_step2
    description: transform response from authz api
    fn: com.gs.transform
    args: |
        <coffee% if outputs.authz_step1.data.code == 200 then {
            success: true
            data: true
        } else if outputs.authz_step1.data.code == 201 then {
            success: true
            data:
              where:
                role: 'USER'
        } else {
            success: false
            data: false
        } %>
```

The authorization workflow should return response in this format to allow/deny:
```yaml
success: true/false
data: true/false/JSON output
```

> When data is returned as false i.e. deny then the framework will send `403 Unauthorized` response.


### Sample DB query call authorization
In DB query call, authz workflow can return JSON output with where clause, include clause etc. which will be merged with the args of the main workflow which is doing DB query.

Here is the sample spec:  
**Sample workflow calling the authz workflow**
```yaml
summary: datastore demo
tasks:
  - id: find_user
    description: find users
    authz:
      fn: com.jfs.authz
      args: <% inputs %>
    fn: datasource.mongo.user.findMany
    args:
      data:
        include: <% inputs.body.include %>
        where: <% inputs.body.where %>
```

**Sample authorization workflow `com.jfs.authz`**
```yaml
summary: Authorization workflow
tasks:
  - id: authz_step1
    description: return allow/deny based upon user
    fn: datasource.authz.post./authorize
    args: 
      data: <% inputs.body.user %>
      
  - id: authz_step2
    description: transform response from authz api
    fn: com.gs.transform
    args: |
        <coffee% if outputs.authz_step1.data.code == 200 then {
            success: true
            data:
              where:
                role: 'USER'
        } else {
            success: false
            data: false
        } %>
```

When authorization workflow `com.jfs.authz` returns `success: true` then its `data` will be merged with the main workflow which is calling the authz workflow.   
For example, in the above authz workflow, `data` is returned as:
```yaml
data:
  where:
    role: 'USER'
```

This data will be merged with the args.data of the main workflow i.e.
```yaml
args:
  data:
    include: <% inputs.body.include %>
    where: <% inputs.body.where %> # where clause from authz workflow will be merged with this
``` -->