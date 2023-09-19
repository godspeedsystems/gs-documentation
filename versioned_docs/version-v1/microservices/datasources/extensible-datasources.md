---
sidebar_position: 3
title: 8.7 Extensible datasources
---

# Introduction

The framework provides feature to extend datasources where you can add new datasources with any customized type as per your business logic.

## 8.7.1 Datasource definition
You can define your datasource in yaml file inside `src/datasources` directory. For example, newDatasource.yaml is defined in the datasources.
```
.
├── config
└── src
    ├── datasources
    │   └── httpbin.yaml
    │   ├── kafka1.yaml
    │   └── newDatasource.yaml
    ├── events
    ├── functions
    └── mappings
```

> The three keys in yaml `type`, `loadFn` and `executeFn` are mandatory to define any new datasource which is not provided by the framework as core datasources. You can define other key/value pairs as per your need.

Below is a sample of newDatasource.yaml
```
type: sample
loadFn: com.sample.loader
executeFn: com.sample.execute
client_url: https://sample.com
client_id: sample123
```

### type
It defines the type of the datasource like api, soap, datastore, etc.

### loadFn
It defines the load function which loads the client for the datasource. The developer must define the load function in the workflows as mentioned in the below project structure. The loadFn can be a js/ts function which takes the datasource yaml as an input and return an object that contains client.

```
.
├── config
└── src
    ├── datasources
    ├── events
    ├── functions
    │   └── com
    │       └── sample
    │           ├── loader.ts
    │           └── execute.ts
    └── mappings
```

A sample of loader.ts
```
export default async function(args:{[key:string]:any;}) {
    const ds = {
        ...args,
        client: new SampleClient(args)
        };
    return ds;    
}
```

### executeFn
It defines the execute function which gets executed in the workflow. The developer must define the execute function in the workflows as mentioned in the above project structure. The executeFn can be a js/ts function which takes the [workflow args](../workflows.md/#62-the-tasks-within-workflows) as input and return status/output.

```
export default async function(args:{[key:string]:any;}) {
    if(args.datasource) {
        const client = args.datasource.client;
        const data = args.data;

        if (!Array.isArray(args.data)) {
            data = [args.data];
        }
. . . . . . . . . .    
    } else {
        return { success: false, code: 500, data: 'datasource not found in the workflow' };
    }
}
```

## 8.7.2 Example spec for the event
``` yaml
/sample_helloworld.http.post:
  id: sample_event
  fn: com.jfs.sample_helloworld
  body: 
    description: The body of the query
    required: true
    content:
      application/json: # For ex. application/json application/xml
        schema: 
          type: object
          properties:
            name: 
              type: string
          required: [name]
```

## 8.7.3 Example spec for the workflow
``` yaml
summary: hello world
tasks:
  - id: helloworld_step1
    fn: com.sample.execute
    args:
      datasource: newDatasource
      data: <% inputs %>
      config:
        method: sample
```
