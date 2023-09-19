---
sidebar_position: 3
title: 3.3.2 Environment variables
---

# Environment variables
The environment variables are defined in yaml files under `config/custom-environment-variables.yaml` file. The default directory structure is given as below:

```
├── config
│   ├── custom-environment-variables.yaml
```

:::note
Any configuration which includes secrets or passwords is recommended to be defined using environment variables only.
:::

### custom-environment-variables.yaml
This is a sample for custom environment variables where these variables gets values from environment variables set in the environment. 
```
my_datasource:
  base_url: MY_DATASOURCE_BASE_URL
  api_key: MY_DATASOURCE_API_KEY
  api_token: MY_DATASOURCE_API_TOKEN

kafka:
  brokers:
    __name: KAFKA_BROKERS
    __format: json
  client_id: KAFKA_CLIENT_ID

jwt:
  issuer: JWT_ISS
  audience: JWT_AUD
  secretOrKey: JWT_SECRET

prisma_secret: PRISMA_SECRET
```
For example, `MY_DATASOURCE_BASE_URL` is defined as an environment variable. To specify its value, you need to export this variable in the environment as given below:

```
$ export MY_DATASOURCE_BASE_URL=https://httpbin.org/
```

After exporting the environment variable, you can access this variable in your project by using scripting `<% config.my_datasource.base_url %>`
