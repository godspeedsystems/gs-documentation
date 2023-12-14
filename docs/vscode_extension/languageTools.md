---
sidebar_position: 1
title: Language Tools - VS Code Extension.
toc_min_heading_level: 2
toc_max_heading_level: 4
---

## Introduction

Hello developers Thank You for using Godspeed Microservice Framework. 


Godspeed Language Tool is the extnsion used to increase the productivity.

### Pre-requisites:

1. VS Code editor

2. Godspeed Framework Version V2

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
    <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/Yir19zd492I" frameborder="0" allowfullscreen></iframe>
</div>


### Steps for Using the Language Tool Extension.

- Open your [VS Code](https://code.visualstudio.com/) app.

- Go to the Extension section and serach Godspeed Language Tools. 

- Install the Godspeed Language Tool Extension in your VS Code. 

![languagetools](/img/godspeedlanguagetools.png)


#### Introduction to Snippets 

- We have introduced few features in the extension and one of them is,[Snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets)  now there are Godspeed's snippets for event and workflow.

- If you type `Godspeed Event` in the src/event (path) file then it will give you some sample data to make an event.

- In the Event Snippets contains the event string , authn , summary, description, fn, on_validation_error, sample params, sample body, responses. After creating an Event you can configure the code with your requirements For Ex. Changing the body, params , responses. You can change the values by pressing up and down arrow and tab or Enter to move next.

- sample of eventsnippet


```
http.get./event-endpoint:
  authn: false
  summary: 'summary of the event'
  description: 'description of the event'
  fn: 'full path of the function, seprated with dots, remove .yaml, like: com.biz.helloworld'
  on_validation_error: com.jfs.handle_validation_error
  params:
    - name: world
      in: query
      required: true
  body:
    content:
      application/json:
        schema:
          type: object
          properties:
            name:
              type: string
            email:
              type: string
          required: [name , email]
  responses:
    '200':
      description: OK
      content:
        application/json:
          schema:
            type: object
```


- If you type `Godspeed Workflow` in the src/workflow (path) then it will give a snippet of sample workflow which includes summary, description, id, tasks, fn and args.

- You can also add [Built-in Tasks](../workflows/inbuilt_workflows.md) in the workflows. There are snippets for that task. 


```
summary: 'the title'
description: 'more details'
id: 'unique_ID'
tasks:
  - id: 'unique_id_of_the_task'
    fn: com.gs.return
    args: <%  %>
```


#### Rules to Write an Event

##### Mandatory Fiels

- There are some key-value pairs in the event and workflows, which needs to be filled to get a proper output, below are the examples of it.


###### In Event

- There are few key-value pairs which are important to the workflow, those are mandatory in the event.

  - For params - 

    - names , in 

    ```
      params:
        - name: world
          in: query
          required: true
    ```


  - For Body - 

    - content , application/json, schema, type

    ```
    body:
      description: This is the Description of body
      required: false
      content:
        application/json:
          schema:
            type: string
    ```
  - For responses - 

    - 200, content, application/json schema, type

    ```
    responses:
      200:
        description: OK
        content:
          application/json:
            schema:
              type: object
    ```


###### In Workflow 


  - in the Workflow there are some key-value pairs that are important to make good workflows.

  - tasks , id, fn , args 

  - in the few built in tasks there are keys like `cases` in  [com.gs.switch](../workflows/inbuilt_workflows.md#comgsswitch) and `conditions` in [com.gs.ifelse](../workflows/inbuilt_workflows.md#comgsif) , `values` [com.gs.each_sequential](../workflows/inbuilt_workflows.md#comgseach_sequential) are the mandatory keys.


### Rules


#### Event 

  - Minimun length of the description and summary is 50 letters and minimum length is 2.

#### Workflow 
  - To define an Id in the Workflow id should be all in small letters , without spaces, without numbers and minimum charactors is 2 and maximum length is 45

  ```
  String does not match the pattern of "^[^\s]+$"
  ```

  - Minimum length of the summary and description are 2 and maximum length is 50
  ```
  String is longer than the maximum length of 50.
  ```

  - fn should be one of inbuilt functions or from the plugins (it starts with datasources) [samples](../workflows/yaml_dsl_functions.md).

### Thank You !