---
sidebar_position: 13
title: Godspeed DSL
---

# Introduction

The DSL provided by Godspeed is an extension of the YAML spec.

> Note: Also every keyword will start with double underscores.

## Name

A name of the function. It will has response data as the value to its key.

```
__name: step1
```

## Summary

A basic sumary of the function.

```
__summary: A sample summary of the function
```

## Description

A basic description of the function.

```
__summary: A sample description of the function
```

## Args

The YAML function argument that is needed in the function dag, we specify here. The arg consists of 2 parts

- An example of the how the argument looks for the function using `__example`

```
__example:
  sample_arg_1: sample_value_1
  sample_arg_2: sample_value_2
```

## Three types of functions

The DSL allows one to define functions in YAML format. A function definition can invoke

- A single function using `__ref`. This means, internally we would call this function.

```
 __ref: __src.com.abc.anuj
```

- A series of functions using `__sequence`. This means, that we want to run multiple function in our DAG in sequential manner.

```
__sequence:
  - __ref: __modules.imported_module_1.some_function
  - __ref: __modules.imported_module_2.some_function_2
```

- A parallel exeuction of list of functions using `__parallel`. This means, that we want to run multiple function in our DAG in parallel manner.

```
__parallel:
  - __ref: __modules.imported_module_1.some_function
  - __ref: __modules.imported_module_2.some_function_2
```

> The functions wrapped around and invoked can be either JS, or TS or YAML functions. Also we would only choose of the options between `__ref`, `__sequential`, `_parallel`.

> The name contains the response data in nested manner. Say we want data from step1 of DAG, the way to access that would be

```
__args:
  create_user_url: ${__config.los.urls.create_user}
  user_id: ${__response.data.step1.data.user_id}
  user_name: ${__request.params.user_name}
```

## Hooks

Hooks are like decorators in Python world or annotations in Java world, where you define logic that must execute before or after a function call.
The framework has some common hooks for all functions in the project, like Telemetry hooks. But the developer has the flexibility to override or change commmon hooks through [function overriding](#overriding-a-function) defined below.

Here are the different kind of hook functions possible

```
  __hooks:
    __pre_validations: # This ref is executed for pre_validation
    __validations: # This ref is executed for validation
    __preauths: # This ref is executed for pre_auths
    __auths: # This ref is executed for auths
    __pre_ref: # This ref is executed before the function call itself
    __post_ref: # This ref is executed after the function call itself
    __on_error: # This ref is executed if the function raises an error
    __finally: # This ref is executed when the execution of the function call is done
```

> An example on hooks for `__on_error`

```
__hooks:
  __on_error:
    - __ref: __log
      __args:
        data:
          key1:value1
          key2:value2
```

## Example using single function

    ```
    com:
      xyz:
        someFn:
          __name: step1
          __summary: Summary of this function
          __description: long description
          __args:
            __example:
            __schema:
          __ref: com.abc.anuj # JS, TS, yaml  __src.com.a.b.c, __modules
          __args:
            arg1: 5
            arg2: Hello World
          __hooks:
            __pre_validations:
            __validations:
            __preauths:
            __auths:
            __pre_ref:
            __post_ref:
            __on_error:
            __finally:

    ```

## Sequence or parallel execution of list of functions

    ```
    __sequence:
      - __ref: src.com.abc.a_function
      - __parallel:
        - __ref: src.com.abc.b_function
        - __ref: src.com.abc.c_function
    ```

## Sequence or parallel business logic over an array of items or an object

```
__sequence:
__args:
  items: ${__request.body.items}
  as: item_name
  __sequence:
    - __ref: __if_else # or __sequence or __parallel
      __args:
        when:
          ${__vars.item_name}:
            in: ${__config.shop.inventory.unavailable_items}
        then:
          __ref: __continue # also there is __break
    - __ref: com.ecommerce.add_to_invoice # or __sequence or __parallel
      __args:
        text: ${__vars.item_name}
```

## Overriding a function

- Written within the project's src folder (DSL, JS or TS functions)
- Exported by the modules included in the project (via package.json)

## Context variables

> Purpose

### `__super` (for overriding)

### `__vars`

All variables created using `__assign` are available under `__vars`

### `__config`

All variables that are part of the project config are present in the `__config` variable

### `__src`

The `__src` variables contains every function under source folder(js, ts, yaml). We can access all these functions using the above variable

### `__env`

The `__env` variables contains all the environment variables

### `__response`

The `__response` has object for the incoming data.

#### How to define variables

```
  __ref: __assign
  __name: nested_step
  __args:
      create_user_url: ${__config.los.urls.create_user}
      user_id: ${__response.data.step1.data.user_id}
      user_name: ${__request.params.user_name}
```

#### How to use variables

```
  __summary: Create loan in LOS
  __ref: __http_post
  __args:
    url: ${__vars.step1.code}/${__vars.user_id}/?user_name=${__vars.user_name}
    body: # body is {user_name: string, address: string}
      user_name:  ${__event.data.body.user_name}
      address:  ${__request.body.address}
      loan_id: ${__response.step1.data.loan_id}
    query:
      user_id: ${__vars.user_id}
```

, **config, **src, **modules, **env, **event.data, **response (starting from the first parent span), \_\_args (of the running GS instruction)

## Examples

```
 com:
    pinelabs:
      create_account_hdfc:
        __summary: Multiplexing create loan for hdfc api calls
        __args:

        __parallel:
          - __name: step1 # the response of this will be accessible within the parent step key, under the step1 sub key
            __description: create account in the bank
            __ref: __http_post
            __args:
              url: ${__config.banks.urls.hdfc.create_user}/${__args.pan}
              body: # body is {user_name: string, address: string}
                user_name:  ${__request.body.user_name}
                address:  ${__request.body.address}
              query:
                user_name: ${__request.query.user_name}
              headers:
                xyz: 2134234
            __hooks:
              __on_error:
                - __ref: __log
                  __args:
                    level:
                    data:
                      key1: val1
                      key2: val2
          - __description: create account in our LOS
            __name: step2
            __sequence:
              - __ref: __assign
                __name: nested_step
                __args:
                    create_user_url: ${__config.los.urls.create_user}
                    user_id: ${__response.data.step1.data.user_id}
                    user_name: ${__request.params.user_name}
              - __summary: Create loan in LOS
                __ref: __http_post
                __args:
                  url: ${__vars.step1.code}/${__vars.user_id}/?user_name=${__vars.user_name}
                  body: # body is {user_name: string, address: string}
                    user_name:  ${__event.data.body.user_name}
                    address:  ${__request.body.address}
                    loan_id: ${__response.step1.data.loan_id}
                  query:
                    user_id: ${__vars.user_id}
                  headers:
                    access_token: ${__env.hdfc_token}
                __hooks:
                  __on_error:
                    - ${__super.__on_error}
                  __finally:
                    - ${__super.preauths}
                __on_err:
                    __args:
                      acceptable: true
                      retry:
                        count: 3
                        interval: 100 #milliseconds
                        strategy: incremental_backoff
                        onError:
                          __ref: *alias_deadqueue_ref
                      saga_compensation:
                        __ref: __notification__email
                          __args:
                            #args for compensation
                        __on_err:
                          __args:
                            ignore: true
          - __description: send event to message bus of successful loan creation
            __name: item_name
            __ref: __send_message # For example send the request to MB to notify any consumers that this API has been called on this microservice
              __args:
                topic: com.abc.li.create_loan.success
                body:
                  data: ${__request}
                headers:
                  custom_header_1: custom_value
          - __description: Save in the DB
            __ref: __data.insert
            __args:
              _type: user
              _id: ${user_id}
                body:
                  user_name: ${__vars.user_name}
        hooks:
          validation:
          auths:
            - role_permission
        __on_error:
          __return:

```
