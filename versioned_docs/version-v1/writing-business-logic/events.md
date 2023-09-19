---
sidebar_position: 13
title: Events
---

# Introduction

Events are used to expose the functions of this microservice to the external world. Whether via HTTP, message bus, gRPC or socket.

## HTTP events

Two events needed to complete an HTTP call.

### HTTP request event

Whenever an event has `event.full.name._http.{method_name}` as part of its name,
then the framework will start listening on the URL
`${app_base_url}/event/full/name` against the method ${method_name} which can be PUT, GET, POST etc.
The body, params, headers and query of the HTTP request are
serialized by the framework into the event object and passed to the `__handler` (function handler for this event) which consumes this request and returns a reponse.

> Implicitly the framework will emit a response for every event which can again be an event or yaml execution. Convention is event_name.response, but if we want to emit any other event, we can invoke any other DAG, it could send event to message_bus or GRPC also.

#### Sample input definition

```
do_KYC.__http.post:
  # exposed by convention as REST URL: app_base_url/do_KYC on method POST
  __handler: __src.com.abc.do_KYC
  __data: # {body, params, query, headers} Bank API POST url is: /create_loan/${pan}/?user_id=${user_id} & body takes {user_name, address}
     __example:
        body:
          user_name: Ayush
          pan: AKJP****
          address: India
        # In case of HTTP event, query, headers and params will be also present
        headers:
        query:
        params:
    __schema: #Validation will happen after recieving and before sending out event. In case of HTTP channel, payload will have metadata.http.{headers, params, query}
      # ${config.src.com.pinelabs.li.schemas.create_loan_api} #using template written elsewhere. For ex. compulsory pan, user_name, address
      body:
        type: object
        properties:
          user_name: string
          pan: string
          address: string
          required: [user_name, pan, address]
      headers:
      query:
      params:
  #__response: someother.do_KYC.http.post.response # Can be implicit or explicit (in case of custom event names)
```

#### Sample response event definition

The framework, upon recieving the `__response`, emits another event whose name is `event.full.name._http.{method_name}.response`, by convention. This event is in turn caught by the framework internally itself, and passed on to the `http_event_handler` which then sends over the `__response` data to the HTTP caller.

Every event has a schema which determines the shape of its data.
In case of HTTP event, it will have body, params, query and headers in its data.
Further, note that the event emmitted by the framework will have CloudEvents specific format. This includes the events which returns the HTTP response. This means that the HTTP response will also have CloudEvents format.

```
do_KYC.__http.post.response: #this URI can be customized. By default eventName.response is the actual response event.
  # __handler: __http.response_handler # provided by the framework. No need to specify here
  __data: # Bank API POST url is: /create_loan/${pan}/?user_id=${user_id} & body takes {user_name, address}
    __example:
        body:
          user_id: 1
        headers:
    __schema: #Validation will happen after recieving and before sending out event. In case of HTTP channel, payload will have metadata.http.{headers, params, query}
    # Schema can be in any shape, which is supported by the event handler attached to this event
        200: *200-json-schema
        400: *400-json-schema
        500: *500-json-schema
```
