---
sidebar_position: 3
title: Custom Middleware
toc_min_heading_level: 2
toc_max_heading_level: 4
---

Godspeed provides usage of application level middleware functions. You can add any custom middleware functions which will have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.

## 14.1 How to add custom middleware in Godspeed
> Step 1: Create an index.js/index.ts file in `src/middlewares` dierctory in your project.   

```yaml title="Project structure"
.
├── config
└── src
    └── middlewares
        └── index.ts
```

> Step 2: index.ts/index.js should be exporting array of middleware functions with signature (req, res, next)   

```ts title="index.ts"
import { uuid } from 'uuidv4';

function addUuid(req: any, res: any, next: any) {
    // Set data
    req.body.uuid = uuid();
    
    // Go to next middleware
    next();
}

function addTitle(req: any, res: any, next: any) {
    // Set data
    req.body.title = "Title from middleware/ts";
    
    // Go to next middleware
    next();
}

export default [addUuid, addTitle];
```

:::caution
If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.
:::

** Sample req object **   
Here, two properties `uuid` and `title` are added in the body of req object.
```json
{
  "_events": {},
  "_eventsCount": 1,
  "httpVersionMajor": 1,
  "httpVersionMinor": 1,
  "httpVersion": "1.1",
  "complete": true,
  "rawHeaders": [
    "Content-Type",
    "application/json",
    "User-Agent",
    "PostmanRuntime/7.29.2",
    "Accept",
    "*/*",
    "Cache-Control",
    "no-cache",
    "Postman-Token",
    "7ce46b80-61e1-44c4-b91a-8a3c914797e8",
    "Host",
    "localhost:4901",
    "Accept-Encoding",
    "gzip, deflate, br",
    "Connection",
    "keep-alive",
    "Content-Length",
    "2"
  ],
  "rawTrailers": [],
  "aborted": false,
  "upgrade": false,
  "url": "/test3",
  "method": "POST",
  "statusCode": null,
  "statusMessage": null,
  "_consuming": true,
  "_dumped": false,
  "baseUrl": "",
  "originalUrl": "/test3",
  "params": {},
  "query": {},
  "body": {
    "uuid": "cfc5fc7f-cfdf-4fe7-99ad-08993f90f570",
    "title": "Title from middleware/ts"
  },
  "_body": true,
  "id": 2,
  "log": {},
  "route": {
    "path": "/test3",
    "stack": [
      {
        "name": "<anonymous>",
        "keys": [],
        "regexp": {
          "fast_star": false,
          "fast_slash": false
        },
        "method": "post"
      },
      {
        "name": "<anonymous>",
        "keys": [],
        "regexp": {
          "fast_star": false,
          "fast_slash": false
        },
        "method": "post"
      }
    ],
    "methods": {
      "post": true
    }
  },
  "protocol": "http",
  "secure": false,
  "ip": "::ffff:192.168.224.1",
  "ips": [],
  "subdomains": [],
  "path": "/test3",
  "hostname": "localhost",
  "host": "localhost",
  "fresh": false,
  "stale": true,
  "xhr": false,
  "files": []
}
```
