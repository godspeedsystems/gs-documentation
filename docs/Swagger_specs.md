# Swagger Specs

### Steps to add Swagger specs in project. 

Framework will give you below folder structure.

```
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
        │   └── helloworld.yaml
        |
        ├── eventsources
        │   ├── types
        │   |    └── express.ts
        |   |
        │   └── http.yaml
        |
        └── functions
            |
            └── helloworld.yaml
```
1. To enable swagger ui add `docs` in  **"./src/eventsources/http.yaml"**

2. `/api-docs` is the default endpoint,if you want to provide your custom swagger endpoint, you can modify the endpoint from **"./src/eventsources/http.yaml"**

#### update http.yaml( src/eventsources/http.yaml )
```yaml
type: express
port: 3000
docs:
  endpoint: /api-docs
```