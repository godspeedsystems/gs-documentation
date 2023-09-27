# Retry

**Retry functionality allows you to specify the number of times a function should be executed.**

#### Workflow spec to upload files with same file key
```yaml
  summary: upload file
  id: upload_file
  tasks:
    - id: step1 # the response of this will be accessible within the parent step key, under the step1 sub key
      description: upload documents
      fn: com.gs.http
      args:
        datasource: httpbin
        params:
        file_key: files
        files: <% inputs.files %>
        config:
          url : /v1/documents
          method: post

      retry:
        max_attempts: 5
        type: constant
        interval: PT15M
```
