# Uploading file

The Express plugin allows you to upload your files

## Steps to use fileupload feature

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

The default file size accepted is 50MB. If you wish to specify a custom file size, you can modify the value in `"./src/eventsources/http.yaml`".

### Configuration( src/eventsources/http.yaml )
```yaml
type: express
port: 3003
request_body_limit: 30000000
file_size_limit : 30000000
docs:
  endpoint: /
```

:::tip The file size may vary from the original size and could potentially increase in kilobytes after uploading. Please take this into consideration when setting your file size.
:::


### Example Event

```yaml
http.post./helloworld:
  fn: helloworld
  body:
    content:
      multipart/form-data:
        schema:
          type: object
          properties:
            fileName:
              type: string
              format: binary


  responses:
    200:
      content:
        application/json:
          schema:
            type: object

```

### Example workflow


```yaml
summary: Returning a file
tasks:
  - id: first_task
    fn: com.gs.return
    args: <% inputs.files.name %>

```

### Example success response

![image](https://res.cloudinary.com/dzdcjchdc/image/upload/v1704369051/Screenshot_from_2024-01-04_17-20-32_dfzirt.png)