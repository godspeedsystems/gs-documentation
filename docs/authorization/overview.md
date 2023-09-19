
# Authorization
The framework provides authorization, to verify if any event/model is authorized to access specific information or is allowed to execute certain actions.

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
      fn: datasource.api.anything.post
      args:
        data: <% inputs %>
```

**Sample authorization workflow `com.jfs.authz`**
```yaml
summary: Authorization workflow
tasks:
  - id: authz_step1
    description: return allow/deny based upon user
    fn: datasource.authz.authorize.post
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
      fn: com.jfs.auth
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
    fn: datasource.authz.authorize.post
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
```