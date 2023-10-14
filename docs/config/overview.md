# Introduction

## Config Structure

The configuration variables, along with their respective values, are specified within YAML files located in the `config/` directory. These variables are easily customizable to align with specific business use cases. The default directory structure is outlined as follows

```
├── config
│   ├── custom-environment-variables.yaml
│   ├── default.yaml
```

### File Naming and Load Order
The configuration files under `config/` directory can have specific naming conventions and load order. Please refer [File Name and Load Order](https://github.com/node-config/node-config/wiki/Configuration-Files#file-load-order) for more information.


## Environment variables

**Configuration of enviroment variables can be done in two ways**

1. The environment variables are defined in yaml files under `config/custom-environment-variables.yaml` file. The default directory structure is given as below:


```
├── config
│   ├── custom-environment-variables.yaml
```

2. We can also add Database connection string and Urls in .env  file is under root folder `/.env`

```
├── .env
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


# Static variables
The static variables as well as their values are defined in yaml files under `config/` directory. These variables can be replaced as per the business use cases. The default directory structure is given as below:

```
├── config
│   ├── default.yaml
```

:::note
Any configuration which includes secrets or passwords is recommended to be defined using environment variables only. Avoid using static variables for secrets and passwords.
:::

### default.yaml
This file contains some predefined variables. Below is a sample file which defines the static variables used in Godspeed.
```yaml
log_level: debug
lang: coffee
redact: [] # fields to hide. Sample: ['ns', 'req.headers']
server_url: https://api.example.com:8443/v1/api
httpbin: # sample api datasource url
  base_url: https://httpbin.org
request_body_limit: 50mb
file_size_limit : 50mb
```


