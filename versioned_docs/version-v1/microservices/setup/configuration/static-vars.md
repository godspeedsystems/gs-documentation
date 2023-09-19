---
sidebar_position: 3
title: 3.3.3 Static variables
---

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

**log_level** is the minimum log level to log. Log messages with a lower limit will not get logged. The default value is 'info'.   
The available levels are 'fatal', 'error', 'warn', 'info', 'debug', 'trace' or 'silent'.   
**lang** is the language used for scripting in the workflows. The default value is 'coffee'.   
The available values are 'coffee' or 'js'. Refer [Coffee/JS scripting](../../workflows.md/#65-use-of-coffeejs-for-scripting) for more information.   
**redact** is the list of fields, the values for which, you want to hide from the logs. The default value is blank. Refer [Logs field masking](../../../telemetry/intro.md/#log-fields-masking) for more information.   
**server_url** is the custom server url which you want to use as `Servers` in swagger specs/auto generated documentation. Refer [Custom Server URL](../../swagger-specs.md/#52-custom-server-url)

**request_body_limit** This variable sets the limit for the request body size. It checks if config.request_body_limit is defined in the application's configuration. If it is, the value from the configuration is used; otherwise, it defaults to 50* 1024 * 1024 bytes (50 megabytes).

**file_size_limit** This variable sets the limit for the file size. Similar to request_body_limit, it checks if config.file_size_limit is defined in the configuration. If it is, the value from the configuration is used; otherwise, it defaults to 50 * 1024 * 1024 bytes (50 megabytes).
