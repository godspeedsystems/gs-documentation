

---- Content from: D:\gs-documentation\docs\ai-modules\react-app.md ----

# Web-UI Starter Kit
## Introduction

Godspeed Web-UI Starter Kit simplifies the generation of a foundational front-end from OpenAPI/Swagger API specs. An AI agent creates the template with pre-established API connections.

> An Engineering Powered AI Scaffolding agent to help you generate codebase from bare minimum requirements.

Currently we support [React](https://react.dev/).

| Framework | Support     |
| --------- | ----------- |
| React     | ✅          |
| Vue       | Coming Soon |
| Svelte    | Coming Soon |
| Angular   | Coming Soon |
| Vanila JS | Coming Soon |

---

##### Tech Stack For React

* React-Query
* React-Router
* Tailwind

---

##### Essentials for Running this Package

- OpenAI API/Microservice spec [Link](https://swagger.io/specification/)
- OpenAI/ChatGPT API Secret Key [Link](https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key)

---


### Steps for creating a New Project
* Install Godspeed GS-Kit by `npm i @godspeedsystems/uikit`
* Go to a directory /root
* create a .env file with these keys

  ```
  OPENAI_API_KEY=sk-xxx
  OPENAI_ORG_KEY=org-xxx
  ```

  > Note: If you dont have `OPENAI_ORG_KEY` then skip it
  >
* run -

  ```
  npx @godspeedsystems/uikit {app_type}
  ```
* Enter any app type that you want, currently we are supporting 'React-Web' for react web app.
   ```
    npx @godspeedsystems/uikit react-web
   ```
* Other tamplates are ***coming soon***. 

* It will ask you for the location and name of your OpenAPI file.
```
> npx @godspeedsystems/uikit react-web
[WARN] Importing from 'langchain' is deprecated. See https://js.langchain.com/docs/getting-started/install#updating-from-0052 for upgrade instructions.
┌  Generate front-end boilerplate using Godspeed
│
◆  What is the name of your project?
│  gskit-app_GodspeedTrialProject
└


```
* hit `Enter` after   
* Then it will ask about the where is the OpenAPI Spec file is located. Mention your file path over there.
```
> npx @godspeedsystems/uikit react-web
[WARN] Importing from 'langchain' is deprecated. See https://js.langchain.com/docs/getting-started/install#updating-from-0052 for upgrade instructions.
┌  Generate front-end boilerplate using Godspeed
│
◇  What is the name of your project?
│  gskit-app-godspeedTrial
{ name: 'gskit-app-godspeedTrial' }
│
◆  Where is your OpenAPI spec file located?
│  ./api.yaml_
└
```
* AI agent will read the OpenAPI spec and generate a react project with fetch hooks and tailwind configured.
* depends on the OpenAPI file it will take few seconds to create a project. In the below case the file name is api.yaml.
```
> npx @godspeedsystems/uikit react-web

[WARN] Importing from 'langchain' is deprecated. See https://js.langchain.com/docs/getting-started/install#updating-from-0052 for upgrade instructions.
┌  Generate front-end boilerplate using Godspeed
│
◇  What is the name of your project?
│  gskit-app-godspeedTrial
{ name: 'gskit-app-godspeedTrial' }
│
◇  Where is your OpenAPI spec file located?
│  ./api.yaml
│
◒  Cloning template.cloned godspeedsystems/gskit-react#main to ./gskit-app-godspeedTrial
◇  Template cloned
│
◇  Pick a Data fetching library
│  React Query
│
◓  Generating Fetch Hooks...
```
* After the Project is created it looks like...
```
> npx @godspeedsystems/uikit react-web

[WARN] Importing from 'langchain' is deprecated. See https://js.langchain.com/docs/getting-started/install#updating-from-0052 for upgrade instructions.
┌  Generate front-end boilerplate using Godspeed
│
◇  What is the name of your project?
│  gskit-app-godspeedTrial
{ name: 'gskit-app-godspeedTrial' }
│
◇  Where is your OpenAPI spec file located?
│  ./api.yaml
│
◒  Cloning template.cloned godspeedsystems/gskit-react#main to ./gskit-app-godspeedTrial
◇  Template cloned
│
◇  Pick a Data fetching library
│  React Query
│
◇  react-query fetch hooks generated
│
◇  Fetch hooks written to file
```
* One folder with the Project name will create in the root directory. ( your react project folder )
* Go to the new app folder and install the dependencies by `npm install`
* Run `npm start` command to run the react project.
* The Project will run on http://localhost:3000.
```
Compiled successfully!

You can now view gskit-react in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.188:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```
* if Port 3000 is busy it will ask to change the port.
```
? Something is already running on port 3000. Probably:
  node /Users/other_port_path
  in /Users/other_port_path

Would you like to run the app on another port instead? › (Y/n)
```
* After This the project folder will created. 

### What you will end up with

* React js application.
* Your Tailwind gets Configured.
* Your React Query is configured.       
* Ready for further development.


---- Content from: D:\gs-documentation\docs\documentation_principles.md ----

# Guiding Principles Of Documentation:

Creating effective documentation is essential for clear communication and knowledge transfer. Here are some guiding principles for documentation:

### Clarity: 
Ensure that your documentation is easy to understand for your target audience. Use clear and concise language, avoid jargon, and define technical terms when necessary.

### Consistency: 
Maintain a consistent structure and formatting throughout your documentation. This includes headings, fonts, colors, and styles.

### Accuracy: 
Double-check all information to ensure it is up-to-date and correct. Inaccurate documentation can lead to misunderstandings and errors.

### Relevance: 
Include only information that is relevant to the audience's needs. Avoid unnecessary details and tangents.

### Organization: 
Use a logical and well-structured format. Group related information together, use headings and subheadings, and provide a table of contents if needed.

### Accessibility:
Make sure your documentation is easily accessible to the intended audience. This may involve using a user-friendly platform or ensuring that printed documents are readily available.

### Version Control: 
If your documentation changes over time, keep track of different versions. This is especially important for software documentation. Users should be able to access the documentation for the version they are using.

### Visual Aids: 
Incorporate visuals, such as diagrams, charts, screenshots, and videos, to complement text. Visual aids can enhance understanding and retention.

### Feedback: 
Encourage feedback from users. They can provide valuable insights on how to improve the documentation. Consider using surveys, comments, or a contact point for questions.

### Searchability:
Implement a search function if your documentation is digital. This makes it easier for users to find the information they need.

### Context: 
Provide context for the information. Explain why something is important or how it fits into a larger process. Context helps users make better use of the information.

### Use Cases: 
Include practical examples and use cases. Demonstrating how to apply the information can be more effective than theory alone.

### Conciseness:
Avoid unnecessary verbosity. Get to the point and be concise while still providing necessary information.

### Cross-Referencing:
Include links or references to related topics within your documentation. This helps users explore related information.

### Testing:
Before finalizing your documentation, have a test audience review it. They can identify areas that may be unclear or missing.

### Security:
Protect sensitive information. If your documentation includes confidential data, ensure it is only accessible to authorized users.

### Maintenance:
Keep your documentation up-to-date. As systems or processes change, your documentation should reflect those changes.

### User-Centered:
Always keep your target audience in mind. Your documentation should cater to their needs and expectations.

### Simplicity:
Keep it simple. Avoid overcomplicating your documentation. Simple, straightforward language is often more effective.

### Training:
Consider providing training on how to use your documentation effectively. Training can help users navigate and understand your documentation better.

Remember that the effectiveness of documentation is measured by its ability to convey information clearly and help users achieve their goals. Tailor your documentation to the specific needs and preferences of your audience.

---- Content from: D:\gs-documentation\docs\framework_intro.md ----

# Introduction

Every microservice in the Godspeed framework has three fundamental abstractions, and the developer needs to work with just these three.

## Guiding principles of design

### Three fundamental abstractions
Every microservice in the Godspeed framework has three fundamental abstractions, and the developer needs to work with just these three.

- **Event-sources:** In the Godspeed framework, Event Sources serve as a mechanism for defining the primary entry or initiation points of an application. For instance, you can opt for an 'express' type of Event Source to expose your application through REST APIs, or you may choose a 'cron' type Event Source to schedule recurring calls to specific workflows. This level of configurability empowers developers to finely tune the behavior of their application according to their requirements.

  - **Events:** Events trigger workflows. Events are generated by event sources like REST endpoints, gRPC, message bus, webhooks, websockets, S3, and more...

- **Workflows:** Workflows are triggered by events. They not only perform business logic but also provide orchestration over datasources and microservices, and data/API federation. They will use datasources to store or retrieve data, join across various datasources, transform data, emit events and send responses. The framework provides a YAML dsl with some inbuilt workflows. If YAML does not suffice for any particular case, developers can currently put JS/TS workflows alongside YAML workflows and use them. Coming in future: Support for other languages.

- **Datasources:** Datasources are locations where data can be stored or read from. For example API datasource (another microservice or third party), datastores (RDBMS, document, key-value), file system, S3 storage, etc. A microservice can use multiple datasources. The framework provides abstractions for Authn/Authz making it easy for the developer to express the same in a low code manner.


## Developer's work 
The developer will utilize the framework's CLI to initiate a new microservice project and begin development. They will set up the necessary events, data sources, workflows, and configurations such as mappings, environment variables, and telemetry settings. When configuring data sources:

- For databases, they can either define the database schema or auto-generate it from the existing database using the CLI.

- When using axios plugin for APIs we can specify either OpenAPI schema or provide the corresponding URL.


### design principles

- **Standardization:** "Godspeed offers standardization features that allow you to seamlessly integrate a wide range of event sources without the need to modify the entire event structure. The only change required is the initial line of the event, and the framework will handle the rest, ensuring a unified event structure across all sources."




### Salient Features

:::tip Note
Some of the features mentioned here are in the product roadmap and planned for upcoming releases.
:::

**Schema driven development**

To initiate development, the developer needs to define the API and data schema.

**YAML based DSL and configurations**

Our YAML-based DSL simplifies the expression of policies, business logic, and configurations. It results in shorter and more comprehensible code compared to traditional programming, even for beginners. Developers can further customize this DSL to accommodate specific requirements.

**Multi datastore support**

The model configuration and unified CRUD API, which includes full-text search and autosuggest, offer interfaces to various types of datastores, whether SQL or NoSQL. This API is designed to handle validation, relationship management, transactions, denormalization, and multilingual support. Each integration adapts to the specific functionality required based on the nature of the data store.  


**Data validation**

The framework offers validation for third-party API requests and responses, datastore queries, and its own API endpoints. Developers are only required to define the schema for third-party APIs, their microservice APIs, and datastore models. The framework handles the rest. For more intricate validation scenarios, such as conditional validation based on attributes like subject, object, environment, or payload, developers can incorporate these rules into the application logic as part of the workflows.

**Authentication**

The microservice framework performs authentication on all incoming requests, extracting user roles and additional information from a valid JWT token for further processing. The platform allows integration with an IAM provider like ORY Kratos to provide identity services. This IAM provider generates a JWT token containing user ID, user information, and roles, which is utilized by the microservices to validate users.

**Authorization** **(**<Highlight color="#D0F9E5">Planned</Highlight>**)**

Each microservice handles the authorization process for incoming requests. Developers will define authorization rules for each microservice using straightforward configuration files. These rules encompass not only access to API endpoints but also provide fine-grained data access within datastores. The framework allows seamless integration with third-party authorization services through flexible abstractions.

**Distributed transactions** **(**<Highlight color="#D0F9E5">Planned</Highlight>**)**

Each domain’s orchestrator is able to use the Saga [pattern](https://www.baeldung.com/cs/saga-pattern-microservices) to ensure distributed transactions across multiple microservices.


**Autogenerated documentation**

The framework provides autogenerated documentation using CLI.

**Autogenerated CRUD API**  **(**<Highlight color="#D0F9E5">Planned</Highlight>**)**

The framework provides autogenereated CRUD APIs from database model. Generated API's can be extended by the developers as per their needs.


**Multiple languages support**

If YAML isn't sufficient to address a specific scenario, developers have the flexibility to create custom business logic in their language of choice. If they opt for JavaScript or TypeScript, they can conveniently include the code within the same microservice project. Support for other languages will follow the same approach and is part of our future plans.
Every microservice in the Godspeed framework has three fundamental abstractions, and the developer needs to work with just these three.



---- Content from: D:\gs-documentation\docs\language_tools.md ----

# Coming soon...


---- Content from: D:\gs-documentation\docs\microservices-framework\authentication\custom-authentication.md ----

# Custom Authentication

## Introduction
Custom authentication provides flexibility when not using JWT. This approach allows customization of authentication, enabling the use of alternative forms. Developers can implement custom middleware for tasks such as decrypting and parsing custom keys. Additionally, other protocols like OAuth2 offer the ability to connect with authentication providers such as Google and Facebook.

## How to setup Custom auth?
Here is a list of points on how you can do it
- Currently it can be done by customizing the eventsource. For this you can copy paste the closest event source from our plugins repository and paste it in your `eventsources/types` folder as `<eventsource_name>.ts`. Then go ahead and modify it as per your need. 
- The custom middleware can be added in either initClient() as global middleware or in subscribeToEvent() as API middleware in the code below
- Follow the comments added in the code below for customizing auth.

:::tip Note
Go through the eventsources [fastify](https://github.com/godspeedsystems/gs-plugins/blob/main/plugins/fastify-as-http/src/index.ts) and [graphql](https://github.com/godspeedsystems/gs-plugins/blob/main/plugins/graphql-as-eventsource/src/index.ts) for better understanding.
:::

- In the below code we are discussing how to customize by using the express.ts code


#### initializing client and execution ( src/eventsources/types/express.ts ) :

```javascript
import { PlainObject, GSActor, GSCloudEvent, GSStatus, GSEventSource } from "@godspeedsystems/core";
import express from "express";
import bodyParser from 'body-parser';
import _ from "lodash";
import promClient from '@godspeedsystems/metrics';
//@ts-ignore
import promMid from '@mindgrep/express-prometheus-middleware';
import passport from "passport";
import fileUpload from "express-fileupload"
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

export default class EventSource extends GSEventSource {
  async initClient(): Promise<PlainObject> {
    const app = express();
    const {
      port = 3000,
      request_body_limit = 50 * 1024 * 1024,
      file_size_limit = 50 * 1024 * 1024,
      jwt: jwtConfig
    } = this.config;

    // If the developer has a custom strategy, he can set Global middleware here!! 

    app.use(bodyParser.urlencoded({ extended: true, limit: request_body_limit }));
    app.use(bodyParser.json({ limit: file_size_limit }));
    app.use(
      fileUpload({
        useTempFiles: true,
        //@ts-ignore
        limits: { fileSize: file_size_limit },
      })
    );
  
    // You could also use passport's another strategy, eg: passport google oauth2 strategy 
    //  PASSPORT GOOGLE OAUTH2 strategy , 
    //  for more details visit (https://www.passportjs.org/packages/passport-google-oauth2/)

    //  You can replace the below JwtStrategy with the below Google Strategy for example
    //   passport.use(new GoogleStrategy({
    //   clientID:     GOOGLE_CLIENT_ID,
    //   clientSecret: GOOGLE_CLIENT_SECRET,
    //   callbackURL: "http://yourdomain:3000/auth/google/callback",
    //   passReqToCallback   : true
    // },  
    if (jwtConfig) {
      app.use(passport.initialize());
      passport.use(
        new JwtStrategy(
          {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwtConfig.secretOrKey,
            ignoreExpiration: true,
            jsonWebTokenOptions: {
              audience: jwtConfig.audience,
              issuer: jwtConfig.issuer,
            },
          },
          function (jwtPayload, done) {
            return done(null, jwtPayload);
          },
        ),
      );
    };

    app.listen(port);

    if (process.env.OTEL_ENABLED == 'true') {
      app.use(
        promMid({
          metricsPath: false,
          collectDefaultMetrics: true,
          requestDurationBuckets: promClient.exponentialBuckets(0.2, 3, 6),
          requestLengthBuckets: promClient.exponentialBuckets(512, 2, 10),
          responseLengthBuckets: promClient.exponentialBuckets(512, 2, 10),
        })
      );
    }

    return app;
  }

  private authnHOF(authn: boolean) {
    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
      if (authn) {
        return passport.authenticate('jwt', { session: false })(req, res, next)
      } else {
        next();
      }
    };
  };

  subscribeToEvent(eventRoute: string, eventConfig: PlainObject, processEvent: (event: GSCloudEvent, eventConfig: PlainObject) => Promise<GSStatus>, event?: PlainObject): Promise<void> {
    const routeSplit = eventRoute.split('.');
    const httpMethod: string = routeSplit[1];
    const endpoint = routeSplit[2].replace(/{(.*?)}/g, ':$1');
    const app: express.Express = this.client as express.Express;
   
    // The custom middleware can also be added here

    app[httpMethod](endpoint, this.authnHOF(event.authn), async (req: express.Request, res: express.Response) => {
      const gsEvent: GSCloudEvent = EventSource.createGSEvent(req, endpoint)
      const status: GSStatus = await processEvent(gsEvent, { key: eventRoute, ...eventConfig });
      res
        .status(status.code || 200)
        // if data is a integer, it takes it as statusCode, so explicitly converting it to string
        .send(Number.isInteger(status.data) ? String(status.data) : status.data);
    });
    return Promise.resolve();
  }

  static createGSEvent(req: express.Request, endpoint: string) {
    const reqProp = _.omit(req, [
      '_readableState',
      'socket',
      'client',
      '_parsedUrl',
      'res',
      'app'
    ]);
    const reqHeaders = _.pick(req, ['headers']);
    let data = { ...reqProp, ...reqHeaders };

    const event: GSCloudEvent = new GSCloudEvent(
      'id',
      endpoint,
      new Date(),
      'http',
      '1.0',
      data,
      'REST',
      new GSActor('user'),
      {}
    );

    return event;
  }
}
```
<details>
  <summary>Let's See Github OAuth2 as an example of Custom Authentication :</summary>

#### src/eventsources/types/express.ts
```javascript

import { PlainObject, GSActor, GSCloudEvent, GSStatus, GSEventSource, logger } from "@godspeedsystems/core";
import express from "express";
import bodyParser from 'body-parser';
import promClient from '@godspeedsystems/metrics';
import cors from 'cors';
//@ts-ignore
import promMid from '@godspeedsystems/express-prometheus-middleware';
import passport from "passport";
const session = require('express-session');
import fileUpload from "express-fileupload";
import jwt from 'jsonwebtoken';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { Strategy as GithubStrategy } from 'passport-github2';

export default class EventSource extends GSEventSource {
  async initClient(): Promise<PlainObject> {
    const app = express();
    const {
      port = 3000,
      request_body_limit = 50 * 1024 * 1024,
      file_size_limit = 50 * 1024 * 1024,
    } = this.config;
    
    const jwtConfig = this.config.authn?.jwt || this.config.jwt;
    const githubConfig = this.config.authn.oauth2?.github || this.config.oauth2.github;
    app.use(cors());
    app.use(session({
      secret: 'mysecret',
      resave: false,
      saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    if (githubConfig) {
      if (!githubConfig.client_id || !githubConfig.client_secret || !githubConfig.callback_url) {
        logger.fatal('Github Setting error in http event source. Check all three Github settings are set properly for Express HTTP event source: client_id, client_secret or callback_url. Exiting');
        process.exit(1);
      }
      passport.use(
        new GithubStrategy(
          {
            clientID: githubConfig.client_id,
            clientSecret: githubConfig.client_secret,
            callbackURL: githubConfig.callback_url,
            scope: ['user:email']
          },
          async function (accessToken: any, refreshToken: any, profile: any, done: any) {
            return done(null, profile);
          }
        ),
      );
    }
    // Authentication routes
    app.get('/login', passport.authenticate('github', { session: true, scope: ['user:email'] }), (req, res) => {
    });
    app.get('/auth/github/callback', passport.authenticate('github', {
      failureRedirect: '/user/error'
    }), async (req, res) => {   
      const user: any = req.user;
    }
  );
    passport.serializeUser(function (user, done) {
      done(null, user);
    });
    passport.deserializeUser(function (obj: any, done) {
      done(null, obj);
    });

    app.use(bodyParser.urlencoded({ extended: true, limit: request_body_limit }));
    app.use(bodyParser.json({ limit: file_size_limit }));
    app.use(
      fileUpload({
        useTempFiles: true,
        //@ts-ignore
        limits: { fileSize: file_size_limit },
        abortOnLimit:true,
      })
    );
  
    if (jwtConfig) {
      if (!jwtConfig.secretOrKey || !jwtConfig.audience || !jwtConfig.issuer) {
        logger.fatal('JWT Setting error in http event source. Check all three JWT values are set properly for Express HTTP event source: secretOrKey, audience or issuer. Exiting');
        process.exit(1);
      }
      app.use(passport.initialize());
      app.use(passport.session());
      passport.use(
        new JwtStrategy(
          {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwtConfig.secretOrKey,
            ignoreExpiration: true,
            jsonWebTokenOptions: {
              audience: jwtConfig.audience,
              issuer: jwtConfig.issuer,
            },
          },
          function (jwtPayload, done) {
            return done(null, jwtPayload);
          },
        ),
      );
    };

    app.listen(port);
    // logger.info('Started Express server at port %s', port);
    if (process.env.OTEL_ENABLED == 'true') {
      app.use(
        promMid({
          metricsPath: false,
          collectDefaultMetrics: true,
          requestDurationBuckets: promClient.exponentialBuckets(0.2, 3, 6),
          requestLengthBuckets: promClient.exponentialBuckets(512, 2, 10),
          responseLengthBuckets: promClient.exponentialBuckets(512, 2, 10),
        })
      );
    }
    return app;
  }

  private authnHOF(authn: boolean) {
    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
      if (authn !== false && this.config.authn?.jwt) {
        // if authn is true and JWT config exists
        return passport.authenticate('jwt', { session: false })(req, res, next);
      }else {
        next();   // No authentication required 
      }
    };
  }
  subscribeToEvent(eventRoute: string, eventConfig: PlainObject, processEvent: (event: GSCloudEvent, eventConfig: PlainObject) => Promise<GSStatus>, event?: PlainObject): Promise<void> {
    const routeSplit = eventRoute.split('.');
    const httpMethod: string = routeSplit[1];
    let endpoint = routeSplit[2].replace(/{(.*?)}/g, ':$1');
    let baseUrl = this.config.base_url;
    let fullUrl;
    if (baseUrl) {
      fullUrl = "/" + baseUrl + "/" + endpoint;
      fullUrl = fullUrl.replace(/\/\//g, '/');
    } else {
      fullUrl = endpoint;
    }

    const app: express.Express = this.client as express.Express;
    //@ts-ignore
    app[httpMethod](fullUrl, this.authnHOF(event.authn), async (req: express.Request, res: express.Response) => {
      const gsEvent: GSCloudEvent = createGSEvent(req, endpoint)
      const status: GSStatus = await processEvent(gsEvent, { key: eventRoute, ...eventConfig });
      res
        .status(status.code || 200)
        .send(Number.isInteger(status.data) ? String(status.data) : status.data);
    });
    return Promise.resolve();
  }
}
// Remove leading and trailing / (slash) if present
function trimSlashes(endpoint: string) {
  if (endpoint[0] === '/') {
    endpoint = endpoint.substring(1);
  }
  if (endpoint[endpoint.length - 1] === '/') {
    endpoint = endpoint.substring(0, endpoint.length - 1);
  }
  return endpoint;
}
function createGSEvent(req: express.Request, endpoint: string) {
  const reqProp = omit(req, [
    '_readableState',
    'socket',
    'client',
    '_parsedUrl',
    'res',
    'app'
  ]);
  const reqHeaders = pick(req, ['headers']);
  let data = { ...reqProp, ...reqHeaders };

  const event: GSCloudEvent = new GSCloudEvent(
    'id',
    endpoint,
    new Date(),
    'http',
    '1.0',
    data,
    'REST',
    new GSActor('user'),
    {}
  );

  return event;
 }

const SourceType = 'ES';
const Type = 'express'; // this is the loader file of the plugin, So the final loader file will be `types/${Type.js}`
const CONFIG_FILE_NAME = 'http'; // in case of event source, this also works as event identifier, and in case of datasource works as datasource name
const DEFAULT_CONFIG = { port: 3000, docs: { endpoint: '/api-docs' } };

export {
  EventSource,
  SourceType,
  Type,
  CONFIG_FILE_NAME,
  DEFAULT_CONFIG
};

```
</details>



---- Content from: D:\gs-documentation\docs\microservices-framework\authentication\jwt-auth-old.md ----

# JWT Authentication
All currently available _sync_ event sources support JWT authentication mechanism out of the box. For ex. Apollo Graphql, Express, Fastify.

## Enabling JWT Authentication
You can [setup jwt configuration](./jwt-authentication.md) in the event source's configuration file, and override it in each individual event as applicable.
The plugins follow zero trust policy as a first principle, so if you have setup jwt spec at event source level, all endpoints will go through JWT authentication, unless you explicityly set `authn:false` in their schema.

### Disabling authentication on an endpoint
```yaml
http.post./v1/loan-application/:lender_loan_application_id/kyc/ckyc/initiate: 
  authn: false # explicitly disable jwt authentication on this endpoint
  fn: com.biz.kyc.ckyc.ckyc_initiate
  ...
```


## For plugin creators
For handling JWT , it is recommended that each event source plugin adheres to a standardized JWT handling configuration. In the case of JWT, the configuration typically includes details such as the `issuer`, `audience`, and `secretOrkey`.


You can configure JWT settings within the `eventsources/<plugin_name>.yaml`. Here's an example of such a configuration:

### Example Configuration

```yaml
type: express
jwt:
  issuer: <#config.issues#> # must be equal to the key iss in your jwt token
  audience: <#config.audience#> #must be equal to the key aud in your jwt token
  secretOrKey: <#config.secret#>
```
The provided snippet contains payload information and a secret key. Once the above snippet is added to the `eventsources/http.yaml`, authentication for all the events will be *true* by default. 

:::tip Note
The Express plugin is implemented using passport JWT . To know more check [passport documentation](https://www.passportjs.org/)
:::

The options supported by passport sdk are:

![jwt_config_options](https://docs.godspeed.systems/assets/images/jwtconfig_options-7c650cde2021eae6cdc15d4029afe6ff.png) 

When configuring the JWT settings, if you do not provide either the `secretOrKeyProvider` or the `secretOrKey` property from the configuration options mentioned above, it will result in an error.

Additionally, if you specify an `issuer` or `audience` value in the configuration, and the token values differ from those specified in the configuration payload, the response will be 'Unauthorized.'


## Access JWT payload in event handlers or workflows
You can access the complete JWT payload in `<% inputs.user %>` in YAML workflows inline scripts, and as `ctx.inputs.data.user` when writing JS/TS functions

### Example access from inline scripting with YAML
This is applicable in `functions` and in `authz` workflows in event source or event definitions.
```yaml
summary: Call an API and transform the 
tasks:
    - id: api_step1
      description: Hit with some dummy data. It will send back same as response
      fn: datasource.api.post./anything
      args:
        data: <% inputs.body %>
          jwt_payload: <% inputs.user %>
```

### Example JS/TS workflow
```typescript
export default async function (ctx: GSContext, args: any) {
    
    //Ctx object has the basics you need to write any business logic in TS/JS
    const {
        inputs
    } = ctx;
    //Accessing deserialized inputs from the event source
    const {user, body, params, query, headers} = inputs.data;
    return {'user': inputs.data.user};
    //return new GSStatus(true, 200, undefined, {'user': inputs.data.user});
}
```

---- Content from: D:\gs-documentation\docs\microservices-framework\authentication\jwt-authentication.md ----

# JWT Authentication

**JWT (JSON Web Token)** is a standard method for securely transmitting information between two parties as a JSON object. It’s commonly used for authentication and authorization in web applications.
In Godspeed, you can easily implement JWT authentication to protect routes, control access to resources and ensure secure API communication.
Currently supported event sources which can leverage this mechanism are:
1. Express
2. Apollo GraphQL
3. Fastify

To Learn more about JWT and Payload [Click Here](/docs/microservices-framework/authentication/jwt)


### How JWT Authentication Works in Godspeed
When a client makes a request to a protected route, they need to include a valid JWT in the request header. 
The server validates the token, extracts the payload, and grants access to the resource if the token is valid.
In the case of an expired or invalid token, the client will receive a `401 Unauthorized` response.

:::tip Note
In our Express eventsource plugin, JWT Authentication is implemented using passport-jwt which is a strategy for authenticating with a JSON Web Token. To know more about, you can check [passport documentation](https://www.passportjs.org/)
:::

### Setup and implementation of JWT authentication in Godspeed.

### Step 1: Setting up Environment

**1.** In Godspeed, any configuration which includes secrets or passwords is recommended to be defined using environment variables only. For this, open custom-environment-variables.yaml file which is placed under `config/` in your root project directory and add your jwt configs there like:

  ```
  jwtSecret: JWT_SECRET
  audience:  JWT_AUDIENCE     
  issuer: JWT_ISSUER

  ```

**2.** Now, you need to export these variables in environment. This can be done in two ways:

  **(a)** Set environment variables in .env file which is under your project's root folder /.env as shown below:
  ```
    JWT_SECRET= mysecret            #the secret
    JWT_AUDIENCE= godspeedsystemms  #aud in jwt token
    JWT_ISSUER= godspeed            #iss in jwt token

  ```

  **(b)** Export these variables to your environment, follow the below syntax to export, based on the shell, you are using:
  <details>
  <summary> For git bash  </summary>

   ```bash
      $ export JWT_SECRET=mysecret
      $ export JWT_ISS= mycompany
   ```

  </details>

  <details> 
  <summary> For windows powershell  </summary>

   ```bash
    $env:JWT_SECRET= "mysecret"
    $env:JWT_ISS= "mycompany"  
   ```

  </details>

  After exporting the environment variable, you can access these variable anywhere in your project by using inline
  scripting `<%config.issuer%>` in yaml or as `ctx.config.issuer` in js/ts workflows.

:::tip Note 
If you do not set these environment variables mentioned above, it will result in an error while running your project. And if the token values set in header differ from those specified in the configuration, the response will be 'Unauthorized.'
:::

### Step 2: Enable JWT Auth in your project's eventsource configuration file.
JWT configuration is written under authn: in the event source's configuration file. For Express, config file name will be http.yaml. Open this file and Set up jwt authn as shown below.

`src/eventsources/http.yaml`
```
  type: express
  port: 4000
  #auth settings to run by default on every event
  authn:
    jwt:			
      secretOrKey: <% config.jwtSecret %> # to access jwtSecret from config
      audience: <% config.audience %>   
      issuer: <% config.issuer %>     
```
Once you have enabled it here, authentication will be true for all endpoints, unless you explicitly set authn:false in their event schema.


### Disabling JWT Authentication at Event Level

  The plugins follow zero trust policy as a first principle, so if you have setup jwt spec at event source level, authentication for all the events will be true by default, unless you explicitly set authn:false in their event schema.
  If you don't want users to be authenticated, you can disable any end-point by writing authn: false in your event schema like this:

  ```
  http.get./helloworld:
    fn: helloworld
    authn: false
    params:
      - name: name
        in: query
        required: true
  ```


### User Login Example using JWT Authentciation 

**Event**
```yaml
# Login with username and password
http.post./login:   # defines the POST request that will be triggered when a client hits /login endpoint.
  fn: verifyLogin   # the workflow to handle the request
  authn: false
  body:
    content:
      application/json:
        schema:
          type: object
          properties:
            username:
              type: string
            password:
              type: string
          required:
            - username
            - password
  responses:
    '200':
      description: 'Login successful'
      content:
        application/json:
          schema:
            type: object
    '401':
      description: 'Invalid credentials'
      content:
        application/json:
          schema:
            type: string
            example: 'Invalid username or password'
```
**Workflow (verifyLogin.ts)**
```
  import { GSCloudEvent, GSContext, PlainObject, GSStatus, logger } from "@godspeedsystems/core";
  import jwt from 'jsonwebtoken';
  export default function (ctx: GSContext, args: PlainObject) {
      const {
          inputs: {
              data: {
                body
              }
          }, 
      
      }= ctx;
    logger.info("user info received %o", body);
    // Dummy user validation (replace with your authentication logic)
    if (body.username === 'user' && body.password === 'password') {
      // Create a JWT token
      const token = jwt.sign(
        { sub: '1234567890', name: 'John Doe', role: 'user' },  // Payload
        ctx.config.jwtSecret,  // access Secret key from config
        { expiresIn: '1h', issuer: ctx.config.issuer, audience: ctx.config.audience }  // jwt Options
      );
      logger.info("Token generated %s", token);
      return new GSStatus(true, 200, 'Login Successful',{JWT: token}, undefined);  
    } else {
      return new GSStatus(true, 401, undefined, 'Invalid Credentials',  undefined); 
    }
  }
```


### How to access JWT payload
You can access the complete JWT payload in <% inputs.user %> in YAML workflows, and as ctx.inputs.data.user when writing JS/TS workflows.

Example access from inline scripting with YAML
```
summary: protected route workflow 
tasks:
  - id: check_payload_user
    description: return user object
    fn: com.gs.return
    args:
      data: 
        jwt_payload: <% inputs.user %>
```

Example access from JS/TS workflow
```
import { GSCloudEvent, GSContext, PlainObject, GSStatus, logger } from "@godspeedsystems/core";
export default function (ctx: GSContext, args: PlainObject) {
    const {
        inputs: {
            data: {
               user		
            }
        }, 
    }= ctx;

return new GSStatus(true, 200, undefined, {'Payload user': user}, undefined);  
}

```

### Standardized JWT Configuration (For Plugin Creators)

For consistency across plugins, it's recommended to use a standardized configuration format for JWT settings (issuer, audience, secret key) in eventsources/<plugin_name>.yaml.



---- Content from: D:\gs-documentation\docs\microservices-framework\authentication\jwt.md ----

### What is JWT?  
A JWT consists of three parts:
1. **Header**: Contains the signing algorithm and token type (e.g., `HS256`, `JWT`).
2. **Payload**: Stores claims or data such as user identity, roles, and permissions.
3. **Signature**: Ensures the integrity of the token. It’s created using the header, payload, and a secret key.

 
 ### Authentication Process using JWT: 
 1. Client login: The client sends credentials (e.g., username and password) to the server.
 2. Token creation: Upon successful login, the server generates a JWT signed with a secret and sends it to the client.
 3. Token usage: The client includes the JWT in the `Authorization` header of subsequent requests to access protected resources.
 4. Token validation: The server validates the JWT in incoming requests, checking its signature, expiration, and payload.
 5. Authorization: If the token is valid, the server grants access to the requested resource.


### A typical JWT looks like this:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```
### Example JWT Payload 

```
{
  "iss": "https://your-app.com",
  "sub": "user123",
  "aud": "https://your-app.com/api",
  "exp": 1692425600,
  "nbf": 1692425000,
  "iat": 1692424400,
  "jti": "token123",
  "username": "john.doe",
  "email": "john.doe@example.com",
  "roles": ["admin", "user"]
}
```


---- Content from: D:\gs-documentation\docs\microservices-framework\authentication\oauth2-authentication.md ----

# OAuth2 Authentication

## Introduction
  OAuth2 is a widely adopted authorization framework that provides a secure and efficient way for users to grant third-party applications access to their data without revealing their credentials. By leveraging OAuth2, Godspeed simplifies the authentication process for both developers and users. OAuth2 offer the ability to connect with authentication providers such as Google, Github and Linkedin.

### How It Works:
1. **User Signup/Signin:** When a user want to signup with google/github/linkedin, express-eventsource will trigger OAuth2 authentication flow.
2. **Redirect to Provider:** The user is redirected to the chosen authentication provider (Google, LinkedIn, or GitHub) to authorize the application.
3. **Authorization Grant:** The provider grants the application an authorization code.
4. **Token Exchange:** The application exchanges the authorization code for an access token.
5. **User Information Retrieval:** The application uses the access token to retrieve the user's information from the provider's API.
6. **Authentication Success:** Once the user's identity is verified, they are logged in to the platform.

## Getting Started: 
  To start using OAuth2 authentication in your Godspeed project, follow these steps:

### 1. Configure Provider:
  Set up your OAuth2 application with the chosen authentication provider (Google, LinkedIn, or GitHub) to obtain the necessary client ID and client secret.

### 2. Set up Environment Variables:
  Open .env file in your project's root directory.
  Add the following lines, replacing the placeholders with your actual GitHub credentials:
  ```
    GITHUB_CLIENT_ID= "your_client_id"
    GITHUB_CLIENT_SECRET= "your_client_secret"
    GITHUB_CALLBACK_URL= "your_callback_url" e.g http://localhost:4000/auth/github/callback
    GITHUB_AUTH_ROUTE  =  "/auth/github"
    GITHUB_CALLBACK_ROUTE = "/auth/github/callback"
    GITHUB_SUCCESS_REDIRECT_URL = "/verify/user"
    GITHUB_FAILURE_REDIRECT_URL = "/error"
    # Session Secret
    SESSION_SECRET = "your_secret"
  ```
### 3. Configure your eventsource

  Here's an example of OAuth2 configuration inside  (src/eventsources/http.yaml):
  ```
  authn:
    oauth2:
      github:
        client_id: <% process.env.GITHUB_CLIENT_ID %>  
        client_secret: <% process.env.GITHUB_CLIENT_SECRET %>    
        callback_url: <% process.env.GITHUB_CALLBACK_URL %>
        callback_route: <% process.env.GITHUB_CALLBACK_ROUTE %>
        auth_route: <% process.env.GITHUB_AUTH_ROUTE %>
        success_redirect: <% process.env.GITHUB_SUCCESS_REDIRECT_URL %>
        failure_redirect: <% process.env.GITHUB_FAILURE_REDIRECT_URL %>
  ```

  Let's See an example event and workflow of above provided success_redirect_url 
  
  Event src/events/helloUser.yaml
  ```
  http.get./verify/user:
    fn: helloUser
    authn: false
    responses:
    200:
      content:
        application/json:
          schema:
            type: string
  ```
 
  Workflow  (src/functions/helloUser.ts)
  ```
  import { GSCloudEvent, GSContext, PlainObject, GSStatus } from "@godspeedsystems/core";
  export default function (ctx: GSContext, args: PlainObject) {
      const {
          inputs: {
              data: {
                user
              }
          }, 
      
      }= ctx;
      const name = user.username|| user.displayName ;
      return new GSStatus(true, 200, undefined, 'Hello ' + name, undefined);  
  }
  ```
  If your auth_route = '/auth/github', hit localhost:4000/auth/github, it will take you to your chosen provider's authorization page i.e. Github in this case. 
  After authenticating the user successfully, it will redirect to the success_redirect_url i.e '/verify/user' in this case.


### To learn more about OAuth2 Authentication in Godspeed, please watch the video provided below…

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/ZOQ-wFkXtto?si=0PBfotFFDqAMPSAX" frameborder="0" allowfullscreen></iframe>
</div>





---- Content from: D:\gs-documentation\docs\microservices-framework\authentication\overview.md ----

# About Authentication

Authentication is the process of confirming the identity of an individual, system, or entity. It involves verifying that the entity attempting to access a system or resource is indeed who or what it claims to be. In case of the API and event driven architecture realm, we need to know the user who is trying to access the system. _Who is this user?_

Following separation of concerns (or decoupling) as a first principle, the job of authentication and loading the user information is delegated to individual eventsource plugins as part of their native `middleware` capability. Here you may use JWT, Auth0, OAuth2, Keycloak etc. as per your requirement.

The currently supported Express, Fastify and Apollo Graphql [plugins](https://github.com/godspeedsystems/gs-plugins) support JWT and OAuth2 authentication out of the box. In case you need to customize, you can copy the code from our plugins repository and modify that to suit your purpose.



---- Content from: D:\gs-documentation\docs\microservices-framework\authorization\authz-usecases.md ----

# Authorization in the framework

The authorization workflows in the framework can be setup at    
**i. ** The eventsouce level, applicable to all events   
**ii. ** At the event level, overriding eventsource configuration   
**iii. ** At the task level, restricting access of the user to the information stored in a datastore
```yaml
authz: 
  - id: authz_task_1
    summary: apply the rules over enriched context. Returns true or false or a GSStatus
    fn: | 
      <% 
        success: user.role === 'admin' && user.department === 'HR'
      %>
```

## What do we need for authorization
We need the user, resource, context and action information. This information can be accessed from `ctx.user.data.{user,headers,params,query,body}`. We also need the access policies or rules. These can exist within the microservice or API code, or they can be loaded from a rule engine or a databse, and executed here in the runtime of this event handling. 

### Loading the necessary user information for authorization
**1. ** The `GSCloudEvent.data.user `object is initially populated by the middleware in the eventsource. For ex. in the JWT case. It serializes and loads the user data like role, id or any other necessary detail for the subsequent authz workflows, or the event handler workflow to use. 
**2. ** You can enrich the user in your `authz` workflows. The framework allows you to enrich user information in the authz workflows.  
**3. ** Its a matter of careful design where you choose to store and retrieve your user data and access policies. Having said that, the framework allows you full freedom to enrich user data in either the event source's middleware or in authz workflows. 

<!-- <img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1704787940/authorization_fbj562.jpg" alt="event types" /> -->

## Authz workflows
The framework allows you to specify [yaml taks](../workflows/yaml-workflows/overview.md) to run authorization workflows, at three places - event source, event or yaml task.

**i. ** The approach for handling JWT or similar keys is to implement a task within the authorization (authz) workflow.    
**ii. ** The authz workflow can include a task specifically designed to process and enrich the user object with information obtained from the JWT or other keys.   
**iii. ** Finally the authz has to tell whether the user is allowed to do this action, and if yes, then what kind of data is the user allowed to retrieve in response? Hint: consider database access? Even if a user is allowed to read a table, is he allowed to read all the rows? Or is he allowed to read all the columns?

### Example authorization workflows
Developers can define the authorization workflow using the following method.

<!-- #### Using the Path of a Function/Workflow:
-  Developers can specify the path to a custom function or workflow to be used as the authorization workflow.
This method provides more flexibility, allowing developers to implement custom logic in their chosen programming language.


```yaml
# example 
authz: com.biz.custom_authz_workflow
``` -->

#### Authorization tasks DSL

**- ** Developers can define the authorization workflow by providing a set of tasks using the DSL provided by the core framework's [workflows](../workflows/yaml-workflows/overview.md).   
**- ** This approach allows for a declarative definition of tasks within the authz workflow.

```yaml
# example 
authz: 
  - id: enrich_context
    summary: |
        Enrich user information based on his parsed JWT, 
        from a policy engine, DB, some datasource
    fn: com.biz.enrich_user_context 
    args: 
      success: true
  # if above task returns GSStatus.success==true
  - id: fetch_rules
    summary: |
      in case we need dynamically fetched and evaluated rules 
      from a rule engine like Drools or JRE rule engine storing rules
    fn: com.biz.load_dynamic_rules
  # if above task returns GSStatus.success==true or just true, continue to next task and so on
  - fn: com.gs.evaluate_gre
```

**- ** Think of authz instruction as a workflow. It will accept an array of task or a single task, each of which should return GSStatus or true.   
**- ** These instructions may enrich the context and user data, or load and run authorization checks, or do both.   
**- ** When one task fails, the whole workflow is considered to be failed.   

:::tip Note
- Following Zero trust policy, when a task does not return `true` or `{success: true}` (explicitly), or in the case when `GSStatus.code === 403`, the authorization will be considered as failed. 
- Next tasks in the series of tasks will not be executed. The event or workflow task at which the user's authz has failed will exit.
:::

### Response code, message and data from authorization failure

**1. If GSStatus is returned with success: false ,default code is 403, unless developer specified a 4XX or 5XX code**
##### Sample authz task
```yaml
    authz: 
      id: task_authz
      tasks:
        - fn: com.gs.transform
          id: try_auth_3
          args:
            success: false
            code: 401
```

##### Response 
<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1705002395/Screenshot_from_2024-01-12_01-16-22_k3n7rh.png" alt="rule1_op" />

**2. Framework won't accept 2XX and 3XX status codes when authz task is failed. It will return the default 403**

##### Sample authz task
```yaml
    authz: 
      id: task_authz
      tasks:
        - fn: com.gs.transform
          id: try_auth_3
          args:
            success: false
            code: 200
```
##### Response 
<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1705001270/Screenshot_from_2024-01-12_00-57-37_jmlrh8.png" alt="rule2_op" />


**3. If GSStatus.message is set and GSStatus.data is not set, then GSStatus.message is returned as response body**

##### Sample authz task
```yaml
  authz:
    - fn: com.gs.transform
      id: try_auth_2_authz
      args: | #assume the below if condition is true, then the control goes inside if block and prints the message
        <js%  
          if (inputs.user.role === 'admin') { 
            return {
              success: true, 
              message: "Authorization passed",
            }
          } else {
             return {
              success: false, 
              message: "Authorization failed"
            }
          }
        %>

```

##### Response


<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1705002160/Screenshot_from_2024-01-12_01-12-14_itk2sc.png" alt="rule3_op" />


**4. If GSStatus.message is set and GSStatus.data is set, but 'GSStatus.data.message' is not set, then {...data,message} is returned in the response body**


##### Sample authz task
```yaml
 authz:
    - fn: com.gs.transform
      id: try_auth_2_authz
      args: |
        <js% 
          if (inputs.user.role === 'admin') {
            return {
              success: true, 
              message: "Authorization passed",
              data: {x: 2}
            }
          } else {
             return {
              success: false, 
              message: "Authorization failed"
            }
          }
        %>
```

##### Response
<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1705002667/Screenshot_from_2024-01-12_01-20-56_ao2inh.png" alt="rule3_op" />


**5. If GSStatus.message is set and GSStatus.data is set, and 'GSStatus.data.message' is also set, then data is returned in the response body. Meaning GSStatus.data.message has precedence over GSStatus.message**

##### Sample authz task
```yaml
 authz:
    - fn: com.gs.transform
      id: try_auth_2_authz
      args: |
        <js% 
          if (inputs.user.role === 'admin') {
            return {
              success: true, 
              message: "Authorization passed",
              data: {x: 2 ,message: "helloworld"}
            }
          } else {
             return {
              success: false, 
              message: "Authorization failed"
            }
          }
        %>
```

##### Response
<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1705002878/Screenshot_from_2024-01-12_01-24-19_gbinvz.png" alt="rule3_op" />

## Examples 
In the Framework, authorization can be implemented at different levels: event level, task level, and even within datasource plugins. Each level offers flexibility and customization options to meet specific requirements

:::tip Note
- Following Zero Trust Policy, authz configuration can also be set at the event source level, serving as the default configuration.
- Unless an event explicitly specifies `authz: false` or overrides its authz settings, all events will inherit the authz configuration from the event source.
:::


<!-- ### Scaffolding of the example
To better understand the folder structure of the example, review the following scaffolding:

```bash
  ├── src
        ├── datasources
        │   ├── types
        │   |    └── axios.ts
        |   |
        │   └── api.yaml
        │
        ├── events
        |   |
        │   └── helloworld2.yaml
        |
        ├── eventsources
        │   ├── types
        │   |    └── express.ts
        |   |
        │   └── http2.yaml
        |
        └── functions
        |   |
        |   └── helloworld2.yaml
        |
        └── plugins
            |
            └── sum.js
```            
         -->

### A. Authorization at event source level
You can set authz workflows that apply to all events of a particular event source, unless explicitly overriden by an event definition by setting `authz: false` or `authz:` to another workflow.

```yaml
type: express
authz: # enabling authz in event level
  - fn: com.gs.transform 
    id: authz_task
    args: | # if this condition fails, the else gets executed
      <js% 
        if (inputs.user.role === 'admin') { 
          return {
            success: true,
            message: "Authorization passed",
            data: {tableA: {no_access: ['fieldA'], where: {tenant_id: inputs.user.tenant_id}} 
          }
        } else {
            return {
            success: false, 
            code: 403,
            message: "Authorization failed"
          }
        }
      %>
```

### B. Authorization at event level 
```yaml title=events/helloworld.yaml
"http.get./helloworld":
  authn: true
  fn: helloworld # if the below authentication condition returns true, fn helloworld gets called
  authz: # enabling authz in event level
    - fn: com.gs.transform 
      id: try_auth_2_authz
      args: | # if this condition fails, the else gets executed
        <js% 
          if (inputs.user.role === 'admin') { 
            return {
              success: true, #if success: false, the message and data given below will be returned
              message: "Authorization passed",
              data: {x: 2 ,message: "helloworld"} 
            }
          } else {
             return {
              success: false, 
              message: "Authorization failed"
            }
          }
        %>
  body:
    content:
      application/json:
        schema:
          type: object
          properties:
            name:
              type: string
  responses:
    '200':
      description: Successful response
      content:
        application/json:
          schema:
            type: object
            properties:
              message:
                type: string
    '400':
      description: Bad request response

```
Whenever an API is triggered with authorization enabled, the event source plugin parses the JWT in its request middleware and verifies user data, such as user.role in the example above.    
If the condition evaluates to true, the corresponding workflow is executed. Otherwise, it proceeds to execute the else case, indicating "Authorization failed."

### C. Authorization at task level 
```yaml title=functions/helloworld.yaml
id: helloworld_workflow
tasks:
  - id: helloworld_workflow_first_task
    fn: com.gs.transform
    args: 
      code: 200
      success: true
      data: | #sum_sumindex(4,5) is used to call the function sumindex(x,y) written in sum.js file
        <js%
         {
          a: sum_sumindex(4,5), 
          message: hello("Hi"),
         }
        %> 
    on_error:
      continue: true
      response:
        success: true
        code: 500
        data: {}
    authz:  #Enabling authz in task level
      id: task_authz
      tasks:
        - fn: com.gs.transform
          id: try_auth_3
          args:
            success: <% inputs.headers.x == "ayush" %>
            code: 200
            
```

<!-- ### JS function
:::tip Note
To use sumindex function defined in sum.js , you can access it by using sum_sumindex(x,y)
:::

plugins/sum.js

```js
function sumindex(x, y) {
    return 2*x + y;
}

module.exports = {
    sumindex
}
``` -->

<!-- ### C.How a datastore plugin's execute() method can access authz permission data? -->

### D. Restricting datastore access

**1. ** Plugins can access user data through `args.meta.authzPerms` in the `GSDatasource.execute()` method. The structure of this data is defined by the plugin, following the format supported by the specific datasource plugin.    
**2. ** For example, it could include fields like {can_access, no_access, where}. 
```json title='Sample output of authz workflow authz_wf.yaml'
data: [ 
        //Your access policies for further finegrained datastore access, 
        // as interpreted and used by the datastore plugin to implement restricted database access over any database. 
        { 
          userTableName: { //to be merged in DB query by the datastore plugin 
            where: { //additional filters to be applied on the DB query
              tenant_id: "xyz", sub_tenant_id: "abc" 
            }, 
            no_access: ['PII-A', 'sensitiveB'],  //columns which should not be accessible
            can_access: ['tenant_id']  //columns which are accessible
          } 
        }
      ]
```

**3. ** Subsequently, the plugin is responsible for adjusting its query to the datasource based on the information provided in args.authzPerms

```ts
  async execute(ctx: GSContext, args: PlainObject): Promise<any> {
    const { childLogger } = ctx;
    const {
      meta: { entityType, method, fnNameInWorkflow, authzPerms }, ...rest } = args as { meta: { entityType: string, method: string, fnNameInWorkflow: string, authzPerms: AuthzPerms }, rest: PlainObject };
    if (authzPerms) {
      const authzFailRes = modifyForAuthz(this.client, rest, authzPerms, entityType, method);
      if (authzFailRes) {
        return authzFailRes;
      }
    }
    // Now authz checks are set in select fields and passed in where clause
    let prismaMethod: any;
    try {
        const client = this.client;
        if (entityType && !client[entityType]) {
          logger.error('Invalid entityType %s in %s', entityType, fnNameInWorkflow);
          return new GSStatus(false, 400, undefined, { error: `Invalid entityType ${entityType} in ${fnNameInWorkflow}`});
        }
        prismaMethod = client[entityType][method];
        if (method && !prismaMethod) {
          logger.error('Invalid CRUD method %s in %s', method, fnNameInWorkflow);
          return new GSStatus(false, 500, undefined, { error: 'Internal Server Error'});
        }

        const prismaResponse = await prismaMethod.bind(client)(rest);
        return new GSStatus(true, responseCode(method), undefined, prismaResponse);
    } catch (error: any) {
      logger.error('Error in executing Prisma query for args %o \n Error: %o', args, error);
      return new GSStatus(false, 400, error.message, JSON.stringify(error.message));
    }
  }
```

#### Example: [prisma-as-datasource plugin](../datasources/datasource-plugins/Prisma%20Datasource.md/#database-authorization)
<details>
<summary>Restricted datastore access</summary>
In the below authz workflow can_acces, no_access and where conditions are provided. These conditions will be applied while fetching author details.

```yaml title=authz_wf.yaml
authz: 
  - id: authz_task_1
    summary: return access columns
    fn: com.gs.transform
      args:
        can_access: 
          - col1
          - col2
        no_access:
          - col3
        where:
          tenant: <% inputs.headers.client_id %>
```

```yaml title=fetch_author.yaml
summary: Fetch author
tasks:
  - id: fetch_author
    fn: datasource.mysql.author.findUnique
    authz:
      - fn: authz_wf
        args: <% inputs %>
    args:
      where:
        id: <% inputs.params.id %>
```
</details>


---- Content from: D:\gs-documentation\docs\microservices-framework\authorization\overview.md ----


# About Authorization
Authorization is a crucial component of access control, determining who can access what resources and perform specific actions. 

<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1704787940/authorization_fbj562.jpg" alt="event types" />

## Two types of Authorization
### Role-Based Access Control (RBAC)
RBAC is a widely-used authorization model where access is granted based on predefined roles. Users are assigned roles, and these roles dictate the permissions associated with accessing resources and performing actions.

### Attribute-Based Access Control (ABAC)
ABAC is a dynamic authorization model that considers various attributes associated with **users, resources, actions, and context**. Policies are defined based on these attributes, allowing for more granular control over access. **ABAC is a superset of RBAC**

### Key Agents in Authorization
Authorization involves four key agents:

a. **User**
Users are entities seeking access to resources or the ability to perform actions within a system.

b. **Resource**
Resources are entities or data within a system that users may want to access or manipulate.

c. **Action**
Actions define the specific operations or activities that users may want to perform on resources.

d. **Context**
Context refers to the circumstances or conditions under which a user's request for access is evaluated. This includes factors such as time, location, or any other relevant contextual information.

<!-- 
## Datasources authentication
At the API datasource level, you can implement authentication measures. You can establish an authentication workflow specific to the datasource, allowing it to make requests to an authentication service in order to obtain tokens or perform authentication checks. Subsequently, this workflow can furnish headers, parameters, or status codes to the primary workflow as required.

Here is the sample spec:
**Datasource**
```yaml
type: api
base_url: <% config.api.base_url %>
authn: com.jfs.api_auth
```
Here, `com.jfs.api_auth` is the authentication workflow which gets called for the authentication of any request to this datasource.

#### Sample workflow using the above datasource
```yaml
summary: Call an API and transform the 
tasks:
    - id: api_step1 # the response of this will be accessible within the parent step key, under the step1 sub key
      description: Hit with some dummy data. It will send back same as response
      fn: datasource.api.post./anything
      args:
        data: <% inputs.body %>
```
#### Sample authentication workflow com.jfs.api_auth
```yaml
summary: Auth workflow
tasks:
    - id: auth_step1
      description: Hit the authn request
      fn: datasource.authapi.post./authenticate
      args:
        data: <% inputs.query.username %>

    - id: auth_step2
      description: Transform the response received from authn api
      fn: com.gs.transform
      args:
        headers:
          Authorization: <% 'Bearer ' + outputs.auth_step1.auth.token %>
        params:
          queryid: <% outputs.auth_step1.params.queryid %>
        statusCodes: <% outputs.auth_step1.status_code %>          
```
The authentication workflow should return response in this format:
```yaml
headers: 
  header1: val1
params:
  param1: val1
statusCodes: [401, 403, ....]
```
:::note
The authentication workflow gets called when any request returns the specified `statusCodes`. 
:::




### Workflow DSL
You can add authorization workflow at the task level in any workflow. The authorization workflow should return allow/deny or json output to the main worklfow.

**Allow/Deny**  
If authz workflow returns data as true/false, it means the task is allowed/denied to get executed.

**JSON output**  
If authz workflow returns JSON output then it is merged with args.data of the task for which authz is being executed.

Here is the sample spec:  
**Sample workflow calling the authz workflow**
```yaml
summary: Call an API
tasks:
    - id: api_step1
      description: Hit with some dummy data. It will send back same as response
      authz:
        fn: com.jfs.authz
        args: <% inputs %>
      fn: datasource.api.post./anything
      args:
        data: <% inputs %>
```

**Sample authorization workflow `com.jfs.authz`**
```yaml
summary: Authorization workflow
tasks:
  - id: authz_step1
    description: return allow/deny based upon user
    fn: datasource.authz.post./authorize
    args: 
      data: <% inputs.body.user %>
  - id: authz_step2
    description: transform response from authz api
    fn: com.gs.transform
    args: |
        <coffee% if outputs.authz_step1.data.code == 200 then {
            success: true
            data: true
        } else if outputs.authz_step1.data.code == 201 then {
            success: true
            data:
              where:
                role: 'USER'
        } else {
            success: false
            data: false
        } %>
```

The authorization workflow should return response in this format to allow/deny:
```yaml
success: true/false
data: true/false/JSON output
```

> When data is returned as false i.e. deny then the framework will send `403 Unauthorized` response.


### Sample DB query call authorization
In DB query call, authz workflow can return JSON output with where clause, include clause etc. which will be merged with the args of the main workflow which is doing DB query.

Here is the sample spec:  
**Sample workflow calling the authz workflow**
```yaml
summary: datastore demo
tasks:
  - id: find_user
    description: find users
    authz:
      fn: com.jfs.authz
      args: <% inputs %>
    fn: datasource.mongo.user.findMany
    args:
      data:
        include: <% inputs.body.include %>
        where: <% inputs.body.where %>
```

**Sample authorization workflow `com.jfs.authz`**
```yaml
summary: Authorization workflow
tasks:
  - id: authz_step1
    description: return allow/deny based upon user
    fn: datasource.authz.post./authorize
    args: 
      data: <% inputs.body.user %>
      
  - id: authz_step2
    description: transform response from authz api
    fn: com.gs.transform
    args: |
        <coffee% if outputs.authz_step1.data.code == 200 then {
            success: true
            data:
              where:
                role: 'USER'
        } else {
            success: false
            data: false
        } %>
```

When authorization workflow `com.jfs.authz` returns `success: true` then its `data` will be merged with the main workflow which is calling the authz workflow.   
For example, in the above authz workflow, `data` is returned as:
```yaml
data:
  where:
    role: 'USER'
```

This data will be merged with the args.data of the main workflow i.e.
```yaml
args:
  data:
    include: <% inputs.body.include %>
    where: <% inputs.body.where %> # where clause from authz workflow will be merged with this
``` -->

---- Content from: D:\gs-documentation\docs\microservices-framework\CLI.md ----

---
sidebar_position: 1
title: Godspeed CLI
toc_min_heading_level: 2
toc_max_heading_level: 4
---
CLI to create and manage Godspeed projects.

### About
Godspeed CLI is the primary way to interact with your Godspeed project from the command line. It provides a bunch of useful functionalities during the project development lifecycle.

### How to install

```bash
npm install -g @godspeedsystems/godspeed
```
or
```bash
yarn global add @godspeedsystems/godspeed
```
Once Godspeed CLI is installed, the `godspeed` command can be called from command line. When called without arguments, it displays its help and command usage.
```
$  godspeed
```

```bash

       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
Usage: Godspeed CLI [options] [command]
CLI tool for godspeed framework.
Options:
  -V, --version                   output the version number
  -h, --help                      display help for command
Commands:
  create [options] <projectName>  create a new godspeed project.
  serve                           run the development server in watch mode.
  build                           build the godspeed project.
  clean                           clean the previous build.
  preview                         run the build in a hosted environment like            production                      or development.
  gen-crud-api                    scans your prisma datasources and generate
                                  CRUD APIs events and workflows
  plugin                          manage(add, remove, update) eventsource and
                                  datasource plugins for godspeed.
  prisma                          proxy to prisma commands with some add-on
                                  commands to handle prisma datasources.
  help [command]                  display help for command
```

### Godspeed Commands

### Create: To create a new project
---
The `create` command creates project structure for your microservice. When called without arguments, it creates project structure with default examples.

```bash
$  godspeed create my-service
```

```bash
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝

…  waiting   Cloning project template.
✔  success   Cloning template successful.
…  waiting   Generating project with default examples.
…  waiting   Generating project files.
✔  success   Successfully generated godspeed project files.

dependencies installed successfully!

Successfully created the project my-service.
Use `godspeed help` command for available commands. 

Happy building microservices with Godspeed! 🚀🎉
```
---
### Serve: To Run the service for local development
---
You can run your Godspeed project using `godspeed serve` command. This will build and run your project in auto-watch mode.

```bash
 godspeed serve
```

:::tip
In order to run a full stack application with Godspeed service as your backend, you can use Lerna. Check the example of full stack application in [gs-node-templates repository](https://github.com/godspeedsystems/gs-node-templates).
:::
---
### Build: Building the service for hosted deployment
---
You can build your Godspeed project using `godspeed build` command. This will build your project and copy the contents in `/dist` folder. 

```bash
 godspeed build
```
---
### Preview: Running the service in hosted environment
You can run your Godspeed project using `godspeed preview` command. This will require `godspeed build` to be run prior because preview renders the project from the `dist` folder. 
```bash
 godspeed preview
```
### Help plugin: To get help in Plugin commands
---
Godspeed plugins are the way to extend the core Meta Framework. Currently we support adding eventsource and datasource as plugin.
```bash
$  godspeed help plugin
```
```
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝

Usage: Godspeed CLI plugin [options] [command]

manage(add, remove, update) eventsource and datasource plugins for godspeed.

Options:
  -h, --help           display help for command

Commands:
  add [pluginName]     Add an eventsource/datasource plugin.
  remove [pluginName]  Remove an eventsource/datasource plugin.
  update               Update an eventsource/datasource plugin.
  help [command]       display help for command

For detailed documentation visit https://godspeed.systems

```
---
#### Plugin Add: To install godspeed plugin
---
The `godspeed plugin add` command allows the user to select a plugin from the list of available plugins and add them to the project.

```bash
$  godspeed plugin add
```
```bash
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝

? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌──────┬────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
│      │ Name                                   │ Description                                                                    │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│ ❯◯   │ aws-as-datasource                      │ aws as datasource plugin for Godspeed Framework                                │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ excel-as-datasource                    │ excel as datasource plugin for Godspeed Framework                              │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ mailer-as-datasource                   │ mailer as datasource plugin for Godspeed Framework                             │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ kafka-as-datasource-as-eventsource     │ kafka as datasource-as-eventsource plugin for Godspeed Framework               │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ cron-as-eventsource                    │ Cron as eventsource plugin for Godspeed Framework                              │
└──────┴────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘
```
---
#### plugin remove

The `godspeed plugin remove` command allows the user to select a plugin from the list of available plugins and remove them from the project.

```bash
$  godspeed plugin remove

```
```


       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝


? Please select godspeed plugin to uninstall: (Press <space> to select, <Up and Down> to move rows)
┌──────┬────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
│      │ Name                                   │ Description                                                                    │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│ ❯◯   │ express-as-http                        │ Godspeed event source plugin for express as http server                        │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ prisma-as-datastore                    │ Prisma as a datasource plugin for Godspeed Framework.                          │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ axios-as-datasource                    │ Axios as datasource plugin for Godspeed Framework                              │
└──────┴────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘
```

#### plugin update

The `godspeed plugin update` command allows the user to select a plugin from the list of available plugins and update them.

```bash
$  godspeed plugin update
```
```bash


       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝


? Please select godspeed plugin to update: (Press <space> to select, <Up and Down> to move rows)
┌──────┬────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
│      │ Name                                   │ Description                                                                    │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│ ❯◯   │ express-as-http                        │ Godspeed event source plugin for express as http server                        │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ prisma-as-datastore                    │ Prisma as a datasource plugin for Godspeed Framework.                          │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ axios-as-datasource                    │ Axios as datasource plugin for Godspeed Framework                              │
└──────┴────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘
```

### Enabling and disabling Open Telemetry
CLI provides `otel` command to enable/disable observability in Godspeed.
```bash
$ godspeed help otel
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
Usage: Godspeed CLI otel [options] [command]

enable/disable Observability in Godspeed.

Options:
  -h, --help      display help for command

Commands:
  enable          enable Observability in project.
  disable         disable Observability in project.
  help [command]  display help for command

For detailed documentation visit https://godspeed.systems
```
#### otel enable
The `godspeed otel enable` command allows the user to enable [observability](./telemetry/overview.md) in Godspeed to collect traces, metrics and logs.    

```bash
$ godspeed otel enable
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
otel installed successfully!
Observability has been enabled
```

The above command performs these two functions:
##### A. Installs `@godspeedsystems/tracing` package
This package includes auto-instrumentation of the following plugins to collect traces:   
**1. ** [http](https://nodejs.org/api/http.html) and [https](https://nodejs.org/api/https.html) requests.   
**2. ** [Prisma datasource plugin](../microservices-framework/datasources/datasource-plugins/Prisma%20Datasource.md).

##### B. Sets OTEL_ENABLED env variable to true
By setting `OTEL_ENABLED` to true, the following actions are performed:   
**1. Traces**: starts the auto-instrumentation of traces present in the `@godspeedsystems/tracing` package.   
**2. Metrics**: starts exposing application metrics at `/metrics` endpoint of the service. Currently, the framework exposes HTTP and [Prisma datasource](../microservices-framework/datasources/datasource-plugins/Prisma%20Datasource.md) metrics.    
**3. Logs**: starts dumping the service logs in [OTEL log format](./telemetry/logging.md/#log-format) in console provided NODE_ENV is not equal to 'dev'

:::infoTelemetry data for custom plugins
Follow this [Github issue](https://github.com/godspeedsystems/gs-tracing/issues/2) to know how auto-instrumentation can be enabled for the other custom [eventsource](../event-sources/event-source-plugins/) and [datasource](../datasources/datasource-plugins/Overview.md) plugins.   
Follow this [Github issue](https://github.com/godspeedsystems/gs-node-service/issues/1016) to know how prometheus based metrics can be exposed for the other custom [eventsource](../event-sources/event-source-plugins/) and [datasource](../datasources/datasource-plugins/Overview.md) plugins.
:::

#### otel disable
The `godspeed otel disable` command allows the user to disable [observability](./telemetry/overview.md) in Godspeed.    
```bash
$ godspeed otel disable
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
otel uninstalled successfully!
Observability has been disabled in the project
```

The above command performs these two functions:
##### A. Uninstalls `@godspeedsystems/tracing` package from your service.
##### B. Sets OTEL_ENABLED env variable to false
Setting `OTEL_ENABLED` to false stops all the actions performed in [otel enable](#b-sets-otel_enabled-env-variable-to-true) command   


---- Content from: D:\gs-documentation\docs\microservices-framework\config-and-mappings\config.md ----

# Config
## Config structure

The configuration variables, along with their respective values, are specified within YAML files located in the `config/` directory. These variables are easily customizable to align with specific business use cases. The default directory structure is outlined as follows

```
├── config
│   ├── custom-environment-variables.yaml
│   ├── default.yaml
```

### File naming and Load order
The configuration files under `config/` directory can have specific naming conventions and load order. Please refer [File name and Load order](https://github.com/node-config/node-config/wiki/Configuration-Files#file-load-order) for more information.


## Environment variables

**Configuration of enviroment variables can be done in two ways**

1. The environment variables are defined in yaml files under `config/custom-environment-variables.yaml` file. The default directory structure is given as below:


```
├── config
│   ├── custom-environment-variables.yaml
```

2. We can also add database connection string and Urls in .env  file is under root folder `/.env`

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

For example, `MY_DATASOURCE_BASE_URL` is defined as an environment variable. To specify its value, you need to export this variable in the environment.Enter as given below in the terminal:

```
$ export MY_DATASOURCE_BASE_URL=https://httpbin.org/
```

After exporting the environment variable, you can access this variable in your project by using scripting 
`<% config.my_datasource.base_url %>`

:::info To reflect the updated values of the .env variables, you need to export them again after making changes. This ensures that the updated values are accessible and used in your application.
:::



## Static variables
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
log:
  redact: # ['a.b.c', 'a.b.*', 'req.headers', 'mobileNumber'] #pino redact rules. Default null.
  level: debug #by default info
  sync: true #By default sync is false. For debugging, keep it true. For performance keep it false.
  timestamp: stdTimeFunctions.isoTime #Pino date formats
  bindings: # should pid and hostname be enabled in pino log bindings.
    pid: false
    hostname: true 
defaults:
  lang: coffee #default language of inline scripting e.g. js/coffee
  on_error:
    continue: false # default behavior of on_error.continue property
server_url: https://api.example.com:8443/v1/api
httpbin: # sample api datasource url
  base_url: https://httpbin.org
```

Here, `defaults` key has the variables which are used by the framework for default values in workflow DSL.    
**1. lang** - By default, the framework sets it to `js`. Check [default language](../inline-scripting/overview.md/#default-language-at-global-level) for more information.   
**2. on_error.continue** - By default, the framework sets it to `false`. Check [on_error](../workflows/yaml-workflows/workflow-dsl.md/#error-handling) for more information.


---- Content from: D:\gs-documentation\docs\microservices-framework\config-and-mappings\mappings.md ----

---
sidebar_position: 3
title: Mappings
---

# Mappings

Mappings is a global object which will be available in your microservice. You can define anything in the mappings i.e. key/value pair map, array, etc. You can access these mappings inside your workflows at any time.

## Project structure
Mappings are present in `src/mappings` directory. The default format is yaml and you can store mappings in the nested directories also. The nested directories are also accessible in the same `mappings` object.
```
.
├── config
└── src
    └── mappings
        └── index.yaml
        └── generate.yaml
```

## Sample mappings
This is a sample mapping which is accessible in the workflows inside mappings object using `mappings.Gender` and `mappings.generate.genId`   
```yaml title="index.yaml"
Gender:
  Male: M
  Female: F
  Others: O
```

```yaml title="generate.yaml"
genId: 12345
```
:::tip Note
If the file name is index.yaml then its content is available directly at global level i.e. you don't need to write index explicitly while accessing the mappings object like `mappings.Gender`.    
However, for other file names you need to mention the file name while accessing the mappings object like `mappings.generate.genId`
:::

Sample workflow accessing mappings object:
```
  - id: httpbinCof_step1
    description: Hit http bin with some dummy data. It will send back same as response
    fn: datasource.api.post./anything
    args:
      params:
      data:
        personal_email_id: 'ala.eforwich@email.com'
        gender: <% mappings.Gender[inputs.body.Gender] %>
        id:  <% mappings.generate.genId %>
```

## Use mappings constants in other mapping files
You can use mapping constants in other mapping files using coffee/js scripting.

For example, you have mapping files `index.yaml`, `relations.json` and `reference.yaml`. Use the mappings from first two files as reference in the third file as follows:   
 
```yaml title="index.yaml"
Gender:
  Male: M
  Female: F
  Others: O
```

```json title="relations.json"
{
    "id": 1,
    "title": "Hello World",
    "completed": false,
    "gender": "<%mappings.Gender.Male%>"
}
```

```yaml title="reference.yaml"
NewGender: <% mappings.Gender.Others %>
title:  <% mappings.relations.title %>
```

---- Content from: D:\gs-documentation\docs\microservices-framework\CRUD_API.md ----

---
title: Generating CRUD API
--- 

The gen-crud-api command in Godspeed is a powerful tool that automatically generates CRUD (Create, Read, Update, Delete) APIs for your data models. 
<!-- This command significantly simplifies the process of building back-end APIs, allowing you to focus on other parts of your application. -->

The framework generates CRUD API using Prisma's database model files and ORM client. It uses Godspeed's [Prisma plugin](./datasources/datasource-plugins/Prisma%20Datasource.md) as the ORM and generates CRUD APIs served from **http** eventsource, which is Express.js by default. 

<!-- **Currently supported eventsources:**
- Http eventsources: [Express](./event-sources/event-source-plugins/Express%20Http%20Eventsource.md),   [Fastify](./event-sources/event-source-plugins/Fastify%20Eventsource.md)
- Graphql eventsource: [Apollo Graphql](./event-sources/event-source-plugins/Apollo%20GraphQl%20Eventsource.md)   -->

### Watch this video to see how CRUD API is generated in Godspeed 

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/UOtFzRaoQnE?si=P_NqkqfdBVY1jJop"  frameborder="0" allowfullscreen></iframe>
</div>

## Steps to generate CRUD API over REST

### Step 1. Create a godspeed project 
Create a new project from the CLI and open the created project in vscode
  
  [(See How to create)](./guide/get-started.md#step-2:-create-a-project-and-start-the-server)

### Step 2. Install the prisma plugin
Add the 'prisma-as-datastore' plugin from the CLI

  [(See How to add Prisma plugin)](./datasources/datasource-plugins/Prisma%20Datasource.md#add-plugin)

### Step 3: Set your Database Connection URL

Database connection URL is required to connect your project to a database and it should be configured within your project’s .env file.

**General Format**

Each database type has a specific URL format, but most follow the general structure:
```bash
protocol://username:password@host:port/database_name
```
Here, You can check the list of [**supported databases**](/docs/microservices-framework/databases/Overview#list-of-currently-supported-databases) and [**Connection URL format**](/docs/microservices-framework/databases/MySQL#connection-url) for the database you're using.

**Add the Database connection URL in .env file as:**
```.env
DATABASE_URL= "postgresql://postgres:postgres@localhost:5432/yourdb" //for postgres
 or
DATABASE_URL= "file:./enter_your_file_name.db"  //for SQLite
```
And then this environment variable is to be provided in the url field of the datasource block in the prisma schema 
(/src/datasources/_.prisma)
```
datasource db {
  provider = "database_provider_name",
  url      = env("DATABASE_URL") 
}
```
### Step 4. Create Prisma Schema 
Now Create a [prisma schema](https://www.prisma.io/docs/orm/prisma-schema/overview#example) file in `src/datasources` directory

> **Important Note**:  
> When configuring the Prisma client in your Godspeed project, ensure you add the `output` field in your Prisma schema's `generator` block. This field should point to this location `src/datasources/prisma-clients/<name_of_your_prisma_file>` where the generated Prisma client files will be stored.

```prisma
generator client {
  provider        = "prisma-client-js"
  output          = "./prisma-clients/lms"  //just change the name of prisma schema here 
  previewFeatures = ["metrics"]  // to be used in case you want to generate metrics for prisma queries for telemetry. 
}
```
This setup ensures that the generated client is available at the specified path i.e. `src/datasources/prisma-clients/`

If your schema name is **lms.prisma**, your file content should look like this. 

  ```prisma
    datasource db {
      provider = "Name of Database Provider"  // "mysql", "sqlite", "sqlserver" etc.
      url      = env("DATABASE_URL")     // this is the variable name given to your db_connecion_url in .env
    }

    generator client {
      provider = "prisma-client-js"
      output   = "./prisma-clients/lms" //in place of lms, give the name of your prisma schema here 
      previewFeatures = ["metrics"]  //if you want to generate metrics for prisma queries for telemetry 
    }

    model User {
      id               Int               @id @default(autoincrement())
      pan_number       String            @unique ///@encrypted
    }
  ```

  4.1 If you already have an existing database, you can [introspect it](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/introspection-typescript-postgresql) and generate the Prisma model file using `prisma db pull`. This will generate your .prisma file. 
  
  4.2 Copy the generated file to `src/datasources` folder and rename it as per the name of this datasource that you want to keep. If you don't have an existing database setup with a model, then create a prisma model file from scratch.
  
    
### Step 5. Generate prisma client and sync your database
Run `godspeed prisma prepare`. This command will generate the prisma client and will sync the database with prisma schema. The generated client will be stored in `src/datasources/prisma-clients/` folder which we specified above in the generator client block.

 ```bash
  $ godspeed prisma prepare
 ```
  
### Step 6. Generate CRUD API
 
  The `godspeed gen-crud-api` command will generate the crud apis based on the sample prisma schema provided at ./src/datasources/<db_name>.prisma

  ```bash
  $  godspeed gen-crud-api
  ```

```
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝

> blog-app@1.0.0 gen-crud-api
> npx @godspeedsystems/api-generator

Select datasource / schema to generate CRUD APIs
(x) lms.prisma
( ) For all
( ) Cancel

```
**And your CRUD API will be generated.**

Inspect generated events, definitions and functions.

  ![img](../../static/img/generated_crud_api.png)

  Generated events use definitions defined in `src/definitions` folder, which are in JSON schema format
    
  Generated functions are currently YAML functions

### Run and check Swagger spec 
  You can check the Swagger spec which would have been automatically generated. 

  #Run the project using `godspeed serve` command and then open your swagger endpoint in the browser and test your CRUD app from end to end.
  
   `localhost:<http_port>/<http_docs_endpoint>` which is by default `localhost:3000/api-docs`

<!-- ### To expose same API via Graphql

  Simply add Graphql plugin and change your event URIs which have `http` to `http & graphql`, keeping the rest as the same. See how to use Graphql in detail in the [Apollo Graphql plugin documentation](./event-sources/event-source-plugins/Apollo%20GraphQl%20Eventsource.md)

#### To see generated CRUD API over http and graphql, check this video from 3:30


<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>

<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/dVt6GPSgY7A?si=gYrEESjBpIOfuNM5&amp;start=205" frameborder="0" allowfullscreen></iframe>
</div> -->




---- Content from: D:\gs-documentation\docs\microservices-framework\databases\CokroachDB.md ----

Coackroch, a distributed database that is designed for scalability and high availability, is largely compatible with PostgreSQL, and can be used with Prisma plugin in the same way.

### Pre-requisites
In order to use Coackroch database you need:
 1.	an existing godspeed project with “prisma-as-datasource plugin” installed
 2.	a CoackrochDB database server running
 3.	and database connection URL

### CONNECTION_URL
CockroachDB uses the PostgreSQL format for its connection URL.
```
cockroachDB://USER:PASSWORD@HOST:PORT/DATABASE
```
You have to define the database connection url as an environment variable in .env as :
```
DATABASE_URL="cockroachDB://USER:PASSWORD@HOST:PORT/DATABASE"
```
And then this environment variable is provided in the url field of the datasource block in your prisma schema.
src/datasources/cockroachDB.prisma
```
datasource db {
  provider = "cockroachDB"
  url      = env("DATABASE_URL") 
}

```
### Sample prisma schema for cockroachDB 
<details>
<summary> Sample prisma schema for cockroachDB </summary>

```
datasource db {
  provider = "cockroachDB"
  url      = env("DATABASE_URL")
}
generator client {
  provider = "prisma-client-js"
  output = "./prisma-clients/cockroachDB"
  previewFeatures = ["metrics"]
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}
```
</details>

### Generate prisma client
```bash
godspeed prisma prepare
```
This command will generate the prisma client and will sync the database with prisma schema

### Generate CRUD APIs
Then You can generate the CRUD API'S by entering the below command:
```bash
godspeed gen-crud-api
```
* This command will generate the crud apis based on the sample prisma schema provided at ./src/datasources/cockroachDB.prisma

* Now you can view the event and workflows according to the defined prisma schema

---- Content from: D:\gs-documentation\docs\microservices-framework\databases\MariaDB.md ----

MariaDB is a fork of MySQL, created to maintain MySQL’s features while ensuring open-source development. It can be connected using the same way as MySql with Prisma plugin.

### Pre-requisites
In order to use MariaDB database you need:
 1.	an existing godspeed project with “prisma-as-datastore plugin” installed
 2.	a MariaDB database server running
 3.	and database connection URL

### CONNECTION_URL
```
mariadb://USER:PASSWORD@HOST:PORT/DATABASE
```
### Setting Environment Variable
You have to define the database connection url as an environment variable in .env as :
```
DATABASE_URL="mariadb://USER:PASSWORD@HOST:PORT/DATABASE"
```
And then this environment variable is provided in the url field of the datasource block in your prisma schema.
src/datasources/mariaDB.prisma
```
datasource db {
  provider = "mariaDB"
  url      = env("DATABASE_URL") 
}
```
<details>
<summary> Sample prisma schema for mariaDB database  </summary>

```
datasource db {
  provider = "mariaDB"
  url      = env("DATABASE_URL")
}
generator client {
  provider = "prisma-client-js"
  output = "./prisma-clients/mariaDB"
  previewFeatures = ["metrics"]
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}
```
</details>

### Generate prisma client
```bash
godspeed prisma prepare
```
This command will generate the prisma client and will sync the database with prisma schema

### Generate CRUD APIs
Then You can generate the CRUD API'S by entering the below command:
```bash
godspeed gen-crud-api
```
* This command will generate the crud apis based on the sample prisma schema provided at ./src/datasources/mariaDB.prisma

* Now you can view the event and workflows according to the defined prisma schema


---- Content from: D:\gs-documentation\docs\microservices-framework\databases\MongoDB.md ----

MongoDB is a popular NoSQL database. In Godspeed, you can connect to MongoDB in two ways:
#### 1. [Using Mongoose-as-datasource Plugin](#mongoose-as-datasource-plugin) [(Plugin Repository)](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/mongoose-as-datastore)
#### 2. [Using Prisma-as-datastore Plugin](#prisma-as-datastore-plugin) [(Plugin Repository)](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/prisma-as-datasource)

## Mongoose as datasource Plugin

This plugin provides seamless integration with MongoDB through the Mongoose library. With this plugin, you can harness the power of Mongoose to model your data, perform queries, and interact with MongoDB in a structured and efficient manner.

### How to Use
**- ** Open the godspeed project in vscode and then add the plugin from the CLI of vscode, select 'mongoose-as-datasource' to integrate the plugin.
```
> godspeed plugin add
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌──────┬────────────────────────────────────┬────────────────────────────────────────────────────────────────────┐
│      │ Name                               │ Description                                                        │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│ ❯◯   │ mongoose-as-datasource            │ Mongoose as a datasource plugin for Godspeed Framework             │
└──────┴────────────────────────────────────┴────────────────────────────────────────────────────────────────────┘
```
**- ** The plugin can also be directly installed by running `npm i @godspeedsystems/plugins-mongoose-as-datasource` command.   
**- ** You will find two files in your project related to the Prisma plugin at `src/datasources/types/mongoose.ts` and `src/datasources/mongoose.yaml`

```typescript title=src/datasources/types/mongoose.ts
import { DataSource } from '@godspeedsystems/plugins-mongoose-as-datasource';
export default DataSource;
```

```yaml title=src/datasources/mongoose.yaml
type: mongoose
successResponseCodes: #default response codes for success responses
  create: 201
  find: 200
  findOne: 200
  aggregate: 200
  findOneAndUpdate: 201
  findOneAndDelete: 202
```
 ![Alt text](../../../static/img/mongoose_folder_structure.png)
- You can keep the file by any name. This file is used to initialize a mongoose datasource instance. Whatever is the name of the file, you will need to invoke
the mongoose datasource commands by the same name. Also your models will be needed to be kept in a folder with the same name as your yaml file (i.e. your datasource instance name). For example mongoose1.yaml would mean
calling `fn:datasources.mongoose1.<Model_Name>.<Function_Name>` from yaml workflows and 
`ctx.datasources.mongoose1.<Model_Name>.<Function_Name>` from TS/JS files. Also you will need to create a folder `datasources/mongoose1/models` and keep your models there as detailed below.

- You can override the default response codes for success cases for different methods by putting them in the datasource instance's yaml file

### Setting up Mongoose models
This datasource loads the [Mongoose models](https://mongoosejs.com/docs/models.html) from `datasources/<datasource_name>/models` folder.

![Alt text](../../../static/img/mongoose_folder_structure.png)

**Example Mongoose model file**   
These files are stored in `datasources/<datasource_name>/models` folder Your TS or JS file should export as following
```typescript
module.exports = {
    type: 'SomeModel', //The name by which you will access methods of this collection/model
    model: SomeModel //The Mongoose Model
};
```
An example Mongoose model file
```typescript
const { model, Schema, Document } =require('mongoose');

const SomeModelSchema = new Schema(
  {
    partnerName: {
      type: String,
      required: true,
    },
    productType: {
      type: String,
      required: true,
    },
    apiType: {
      type: String,
      required: true,
    },
    method: {
      type: String,
      required: true,
    },
    api: {
      type: String,
      required: true,
    },
    code: String,
    headers: Schema.Types.Mixed,
    payload: Schema.Types.Mixed,
    response: Schema.Types.Mixed,
    isDynamicUrl: Boolean,
    expectedResponseStatusCode: Number,
  },
  { timestamps: true }
);

const SomeModel = model('some-model', SomeModelSchema, 'some-model');
module.exports = {
    type: 'SomeModel', //The name by which you will access methods of this collection/model
    model: SomeModel
};
```

### Sample workflow
When calling any api function it will be called as `fn:datasources.mongoose1.<Model_Name>.<Function_Name>` from yaml workflows and 
`ctx.datasources.mongoose1.<Model_Name>.<Function_Name>` from TS/JS files.
The arguments to any `Function_Name` are to be passed in two ways:

**1. ** Only the first arg of the function as accepted by the API.
  ```yaml
    id: mongoose_workflow
    tasks:
      - id: first_task
        fn: datasource.mongoose.SomeModel.findOne
        args: {"name": "mastersilv3r"} #Fun fact: YAML acceptes JSON as well. 
  ```
**2. ** Most Mongoose functions accept multiple args. To pass all args to an API call, send an array of the acceptable args. This array is spread and passed to the API call
  ```yaml
    id: helloworld2_workflow
    tasks:
      - id: helloworld2_workflow_first_task
        fn: datasource.mongoose.SomeModel.findOne
        args: #as an array
          - name: mastersilv3r #search clause: First argument
          - 'name age' #The projection: second argument
          - {} # Options: the third argument
  ```
**3. ** Calling from a TS/JS workflow works same as any other datasource
```typescript
import { GSContext, GSDataSource, GSStatus } from "@godspeedsystems/core";

// Option 1: 
// Calling function on Mongoose model directly and sending data with status code
// Here you handle errors/try/catch yourself
export default async function (ctx: GSContext, args: any) {
    const ds: GSDataSource = ctx.datasources.mongoose;
    // If this function is called by another function (yaml or JS), the caller may have passed args object. In case not, then initialize args yourself.
    args = args || [{name: 'mastersilv3r'}, 'name age', {}];
    try {
      const response = ds.SomeModel.findOne(...args);
      return {
        code: 200,
        data: response
      }
      //return response; Framework will automatically add code: 200 in case of HTTP
    } catch (err: any) {
      ctx.childLogger.error(`Found error in Mongoose query ${err}`);
      return {
        code: 500,
        data: {
          error: err,
          message: err.message
        }
      }
    }
}

//Option 2: Handles response codes, errors creation of GSStatus directly
export default async function (ctx: GSContext, args: any) {
    const ds: GSDataSource = ctx.datasources.mongoose;
    args = args || [{name: 'mastersilv3r'}, 'name age', {}];
    //Will need to set a meta object in the args to pass entitType and method
    args.meta = {entityType: 'SomeModel', method: 'findOne'};
    const response = await ds.execute(ctx, args);
    // response.code will be 500 in case of error, and 200 otherwise
    // In case or error, response.data will have message and error keys, like we saw 
    // in the above TS example
    return response;
}
```

### Error response
When a call has an error the datasource returns following `GSStatus`.
```yaml
    code: 500
    success: false
    data: 
        message: Internal Server Error
```

### Run the service
- Set an environment variable `MONGO_URL` as your connection string to running mongodb instance.
  For example, setting via a unix shell.
  ```shell
    export MONGO_URL='mongodb+srv://<user_name>:<password>@cluster0.xyzabc.mongodb.net/?retryWrites=true&w=majority'
  ```
- From your command line run your service in the auto-watch mode
  ```bash
  godspeed serve
  ```
## Prisma as Datastore Plugin

Prisma has experimental support for MongoDB, although this support may not be as mature as for relational databases. 
Make sure you have access to a MongoDB 4.2+ server with a replica set deployment. As, MongoDB database connector uses transactions to support nested writes, which require a replica set deployment. The easiest way to deploy a replica set is with Atlas.

### How to Use
**- ** Open the godspeed project in vscode and then add the plugin from the CLI of vscode, select the 'prisma-as-datastore' to integrate the plugin.

```
> godspeed plugin add
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌──────┬────────────────────────────────────┬────────────────────────────────────────────────────────────────────┐
│      │ Name                               │ Description                                                        │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│ ❯◯   │ prisma-as-datastore                │ Prisma as a datastore plugin for Godspeed Framework.              │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│  ◯   │ aws-as-datasource                  │ aws as datasource plugin for Godspeed Framework                    │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│  ◯   │ excel-as-datasource                │ excel as datasource plugin for Godspeed Framework                  │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│  ◯   │ mailer-as-datasource               │ mailer as datasource plugin for Godspeed Framework                 │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│  ◯   │ kafka-as-datasource-as-eventsource │ kafka as datasource-as-eventsource plugin for Godspeed Framework   │
└──────┴────────────────────────────────────┴────────────────────────────────────────────────────────────────────┘
```

### Related files
You will find a file in your project related to the Prisma plugin at `src/datasources/types/prisma.ts`.

```typescript title=prisma.ts
import { DataSource } from '@godspeedsystems/plugins-prisma-as-datastore';
export default DataSource;
```
### Set your connection url in .env file, See example

```
MONGO_TEST_URL=mongodb+srv://atlas_username:pswd@cluster0.w3bbqrp.mongodb.net/prisma_test?retryWrites=true&w=majority&appName=Cluster0
```
### Create your prisma schema

Now, you can create your [prisma schema](https://www.prisma.io/docs/orm/prisma-schema) in `src/datasources` directory. 

<details>
<summary>Sample prisma schema for mongo database</summary>

```prisma title=src/datasources/mongo.prisma
datasource db {
  provider = "mongodb"
  url      = env("MONGO_TEST_URL")  //Connection string added in the .env file
}

generator client {
  provider = "prisma-client-js"
  output = "./prisma-clients/mongo"
}

model User {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  createdAt DateTime @default(now())
  email     String   @unique
  name      String?
  role      Role     @default(USER)
  posts     Post[]
}

model Post {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  published Boolean  @default(false)
  title     String
  author    User?    @relation(fields: [authorId], references: [id])
  authorId  String   @db.ObjectId
}

enum Role {
  USER
  ADMIN
}
```

</details>

### Support for multiple prisma schema
By default, only single prisma schema can be created in a project that can use only one database as given in the above example.   
To support multiple prisma schemas for different databases, you need to add `output` key in `generator client` block as given in the above sample prisma schema:

### Generate prisma client
This command will generate the prisma client and will sync the database with prisma schema
```bash
godspeed prisma prepare
```
Once you [generate prisma client](#generate-prisma-client), the multiple clients get generated in `src/datasources/prisma-clients` directory. Godspeed automatically loads all the clients present in this directory.

### Generate CRUD APIs
You can generate the CRUD API'S enter the below command:
```bash
godspeed gen-crud-api
```
* This command will generate the crud apis based on the sample prisma schema provided at ./src/datasources/mongo.prisma

* Now you can view the event and workflows according defined prisma schema

### Sample API
Here is a sample event and workflow for mongodb, which is fetching data from the database.

```yaml title=src/events/mongo.yaml
http.get./mongo/post/{id}:
  summary: Fetch Post
  description: Fetch Post from database
  fn: com.biz.mongo.post.one
  params:
    - name: id
      in: path
      required: true
      schema:
        type: string
  responses:
    content:
      application/json:
        schema:
          type: object
```

```yaml title=com/biz/mongo/post/one.yaml
summary: Fetch Post
tasks:
  - id: mongo_post_one
    fn: datasource.mongo.Post.findUnique
    args:
      where:
        id: <% inputs.params.id %>
```
 
## Reference links
**- ** [Prisma Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/prisma-as-datastore)   
**- ** [Mongoose Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/mongoose-as-datasource)  
**- ** [npm package for Prisma](https://www.npmjs.com/package/@godspeedsystems/plugins-prisma-as-datastore)

 





---- Content from: D:\gs-documentation\docs\microservices-framework\databases\MySQL.md ----

MySQL, a widely used open-source relational database management system can be connected easily using the Prisma-as-datasource plugin.

### Pre-requisites

In order to use MySql database you need:
 1.	an existing godspeed project with “prisma-as-datasource plugin” installed
 2.	a MySQL database server running
 3.	and database connection URL

### CONNECTION URL
The format of the connection URL for MySQL looks as follows 
```
mysql://USER:PASSWORD@HOST:PORT/DATABASE
```
For example,
If your MySQL database is hosted on AWS RDS, the connection URL might look like this:
```
"mysql://johndoe:password@mysql–instance1.123456789012.us-east-1.rds.amazonaws.com:3306/mydb"
```

If you are running MySQL locally, your connection URL will be like this:
```
"mysql://root:password@localhost:3306/yourdb"
```

### Setting Environment Variable
You can define the database connection url as an environment variable in .env as :
```
DATABASE_URL="mysql://root:password@localhost:3306/yourdb"
```
And then this environment variable is provided in the url field of the datasource block in your prisma schema.
src/datasources/mysql.prisma
```
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL") 
}
```

### Sample prisma schema for MySQL
<details>
<summary> Sample prisma schema for MySQL </summary>

```
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
generator client {
  provider = "prisma-client-js"
  output = "./prisma-clients/mysql"
  previewFeatures = ["metrics"]
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}
```
</details>

### Generate prisma client
```bash
godspeed prisma prepare
```
This command will generate the prisma client and will sync the database with prisma schema

### Generate CRUD APIs
Then You can generate the CRUD API'S by entering the below command:
```bash
godspeed gen-crud-api
```
* This command will generate the crud apis based on the sample prisma schema provided at ./src/datasources/mysql.prisma

* Now you can view the event and workflows according to the defined prisma schema

---- Content from: D:\gs-documentation\docs\microservices-framework\databases\Overview.md ----


 The framework takes the approach of schema driven development. It supports multiple kinds of SQL and NoSQL datasbases. The developer only needs to specify or generate the schema for a database, with authorization policies. The CRUD events and workflows are automatically generated from the schema itself. 


 The framework provides functionality to access almost all popular databases through Prisma-as-datastore plugin [Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/prisma-as-datastore) which is a powerful tool for efficient and secure database interactions in web applications. 
 
### List of currently supported Databases 

**1. [PostgreSQL](PostgreSQL)**: Prisma has strong support for PostgreSQL, one of the most popular open-source relational database systems.

**2. [MySQL](MySQL)**: Prisma can be used with MySQL, another widely used open-source relational database management system.

**3. [SQLite](https://www.prisma.io/docs/orm/overview/databases/sqlite)**: SQLite is a serverless, self-contained, and zero-configuration database engine, and Prisma supports it as well.

**4. [SQL Server](SQLServer)**: Prisma offers support for Microsoft SQL Server, a popular commercial relational database management system.

**5. [MongoDB (Experimental)](MongoDB)**: Prisma also has experimental support for MongoDB, a NoSQL database, although this support may not be as mature as for relational databases.

**6. [CockroachDB](CockroachDB)**: A distributed, resilient SQL database for large-scale, cloud-native applications.

**7. [MariaDB](MariaDB)**: An open-source, high-performance relational database system and MySQL-compatible alternative.

**8. [PlanetScale](PlanetScale)**: PlanetScale is a database-as-a-service platform designed for distributed SQL databases. It provides a managed, scalable, and highly available database solution for modern, cloud-native applications.

## How it works
You can integrate any of the above databases into your project by following a few simple steps:

**Step 1: Install the Prisma-as-datastore-plugin**, See [How to install](../datasources/datasource-plugins/Prisma%20Datasource.md#how-to-add-plugin)

**Step 2: Set your Database_Connection_URL** 
To connect with the database, give your db_connection_url in .env file. You can check the format and example of Connection_url for all the supported databases in the [next section](MySQL#connection-url)

**Step 3: Schema specification**
The framework extends Prisma specification to define the schema for any database. You can create your prisma schema in the src/datasources folder as a file {database_name}.prisma.

**Check [Sample Prisma Schema](../datasources/datasource-plugins/Prisma%20Datasource.md#sample-prisma-schema)**

**Step 4: Prisma Database and Models Setup**
The framework has inbuilt feature of setting up database automatically whenever a new schema {database_name}.prisma file is created in the src/datasources folder. Just type this command in CLI
```
 'godspeed prisma prepare'
```
### Generate CRUD API
Now you can generate CRUD API using following command
```
 'godspeed gen crud api'
```

#### To see advanced functionalities related to databases, please visit these sections

#### [Database Encryption](../datasources/datasource-plugins/Prisma%20Datasource.md#database-encryption)

#### [Database Authorization](../datasources/datasource-plugins/Prisma%20Datasource.md#database-authorization)


## Reference links
**- ** [Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/prisma-as-datastore)   
    

---- Content from: D:\gs-documentation\docs\microservices-framework\databases\PlanetScale.md ----


PlanetScale is also a relational database management system which can be connected using the Prisma-as-datasource plugin.

### Pre-requisites

In order to use PlanetScale database you need:
 1.	an existing godspeed project with “prisma-as-datasource plugin” installed
 2.	a PlanetScale database server running
 3.	and database connection URL

### CONNECTION_URL
The format of the connection URL for Planet Scale looks as follows 
```
planetscale://USER:PASSWORD@HOST:PORT/DATABASE
```

### Setting Environment Variable
You can define the database connection url as an environment variable in .env as :
```
DATABASE_URL="planetscale://root:password@localhost:3306/yourdb"
```
And then this environment variable is provided in the url field of the datasource block in your prisma schema.
src/datasources/planetscale.prisma
```
datasource db {
  provider = "planetscale"
  url      = env("DATABASE_URL") 
}
```

### Sample prisma schema for PlanetScale 
<details>
<summary> Sample prisma schema for PlanetScale </summary>

```
datasource db {
  provider = "planetscale"
  url      = env("DATABASE_URL")
}
generator client {
  provider = "prisma-client-js"
  output = "./prisma-clients/planetscale"
  previewFeatures = ["metrics"]
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}
```
</details>

### Generate prisma client
```bash
godspeed prisma prepare
```
This command will generate the prisma client and will sync the database with prisma schema

### Generate CRUD APIs
Then You can generate the CRUD API'S by entering the below command:
```bash
godspeed gen-crud-api
```
* This command will generate the crud apis based on the sample prisma schema provided at ./src/datasources/planetscale.prisma

* Now you can view the event and workflows according to the defined prisma schema


---- Content from: D:\gs-documentation\docs\microservices-framework\databases\PostgreSQL.md ----

PostgreSQL can also be connected using the Prisma-as-datastore plugin.

### Pre-requisites
In order to use PostgreSQL database you need:
 1.	an existing godspeed project with “prisma-as-datastore plugin” installed
 2.	a PostgreSQL database server running
 3.	and database connection URL

### CONNECTION_URL
The format of the connection URL for PostgreSQL looks as follows 
```
postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA
```
For example,
If your PostgreSQL database is hosted on Heroku, the connection URL might look like this:
```
DATABASE_URL="postgresql://opnmyfngbknppm:XXX@ec2-46-137-91-216.eu-west-1.compute.amazonaws.com:5432/d50rgmkqi2ipus?schema=hello-prisma"
```

If you are running PostgreSQL locally, your connection URL will be like this:
```
DATABASE_URL="postgresql://johndoe:password@localhost:5432/mydb?schema=public"
```
### Setting Environment Variable
You can define the database connection url as an environment variable in .env as :
```
DATABASE_URL="postgresql://johndoe:password@localhost:5432/mydb?schema=public"
```
In the above examples, DATABASE_URL is just a variable name given to connection url, this same environment variable name will be then provided in the url field of the datasource block in your prisma schema src/datasources/fileName.prisma as:

```
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL") 
}

```
### Sample prisma schema for PostgreSQl
<details>
<summary> Sample prisma schema </summary>

```src/datasources/Postgres.prisma

datasource db {
  provider = "PostgreSQL"
  url      = env("DATABASE_URL")
}
generator client {
  provider = "prisma-client-js"
  output = "./prisma-clients/Postgres"
  previewFeatures = ["metrics"]
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}
```
</details>

### Generate prisma client
```bash
godspeed prisma prepare
```
This command will generate the prisma client and will sync the database with prisma schema

### Generate CRUD APIs
Then You can generate the CRUD API'S by entering the below command:
```bash
godspeed gen-crud-api
```
* This command will generate the crud apis based on the sample prisma schema provided at ./src/datasources/Postgres.prisma

* Now you can view the event and workflows according to the defined prisma schema

---- Content from: D:\gs-documentation\docs\microservices-framework\databases\SQLite.md ----

SQLite is a lightweight, serverless database engine that operates in-memory by default. This means it doesn't require a separate database server process or a network connection to access data.
When you use SQLite with Prisma ORM, the database is created and managed entirely within your application's memory space.

### Pre-requisites

A godspeed project with “prisma-as-datastore plugin” installed

See [How to set up SQLite on your computer](https://www.prisma.io/dataguide/sqlite/setting-up-a-local-sqlite-database#setting-up-sqlite-on-windows) 

### Connecting to SQLite in Godspeed with Prisma

The SQLite data source connector connects Prisma ORM to a SQLite database file (which always has a .db extension).

#### Connection URL
The connection URL for SqLite will point to the location of the database file.

Format:
```
file: followed by the path to the file`
```
Example:
```
file:./testing.db
```

If the database file doesn't exist at the specified path, it will automatically be created in datasource directory of your godspeed project.

### Configure the datasource block in your Prisma schema

sqlite.prisma
```
datasource db {
  provider= "sqlite"
  url  = "file:./testing.db"  # target files from the project root
  or
  url  = "file:/Users/john/testing.db"   # target files from any other place in your file system
}
```

### Setting Environment Variables

SQLite operates in-memory and Prisma handles the connection automatically. For enhanced configuration management, you can store the database file path in an environment variable and reference it in your Prisma schema:

#### In your .env file
```
DATABASE_URL= file:./testing.db
```
#### In your Prisma schema
```
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}
```
This approach allows you to easily switch between different database files at runtime if necessary.

### Sample prisma schema for SqLite
<details>
<summary> Sample prisma schema for SqLite </summary>

```
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}
generator client {
  provider = "prisma-client-js"
  output = "./prisma-clients/sqlite"
  previewFeatures = ["metrics"]
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}
```
</details>

### Generate prisma client
After having saved your schema under datasources directory, you can run the command:
```bash
godspeed prisma prepare
```
This command will generate the prisma client and will sync the database with prisma schema.

### Generate CRUD APIs
Then You can generate the CRUD API's by entering the below command:
```bash
godspeed gen-crud-api
```
* This command will generate the crud apis based on the sample prisma schema provided at ./src/datasources/sqlite.prisma

* Go to the src/Events and src/Functions to vview the events and workflowss generated as per your defined prisma schema.

---- Content from: D:\gs-documentation\docs\microservices-framework\databases\SQLServer.md ----

Microsoft SQL Server database can be connected using Prisma-as-datasource plugin.

### Pre-requisites
In order to use Microsoft SQL Server database, you need:
 1.	an existing godspeed project with “prisma-as-datasource plugin” installed
 2.	a Microsoft SQL Server database
    - Microsoft SQL Server on Linux for Docker
    - Microsoft SQL Server on Windows (local)
 3.	and database connection URL

### CONNECTION_URL
The format of the connection URL for MySQL looks as follows 
```
sqlserver://HOST[:PORT];database=DATABASE;user=USER;password=PASSWORD;encrypt=true
```
To know more about the connection_url format, you can check [details here.](https://www.prisma.io/docs/orm/overview/databases/sql-server) 

### Setting Environment Variable
```
Then define the database connection url as an environment variable in .env as :
```
DATABASE_URL="sqlserver://HOST[:PORT];database=DATABASE;user=USER;password=PASSWORD;encrypt=true"
```
And then this environment variable is provided in the url field of the datasource block in your prisma schema.

src/datasources/sqlserver.prisma
```
datasource db {
  provider = "sqlserver"
  url      = env("DATABASE_URL") 
}
```
### Sample prisma schema for Sql Server
<details>
<summary> Sample prisma schema for Sql Server database  </summary>

```
datasource db {
  provider = "sqlserver"
  url      = env("DATABASE_URL")
}
generator client {
  provider = "prisma-client-js"
  output = "./prisma-clients/sqlserver"
  previewFeatures = ["metrics"]
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}
```
</details>

### Generate prisma client

```bash
godspeed prisma prepare
```
This command will generate the prisma client and will sync the database with prisma schema

### Generate CRUD APIs
Then You can generate the CRUD API'S by entering the below command:
```bash
godspeed gen-crud-api
```
* This command will generate the crud apis based on the sample prisma schema provided at ./src/datasources/mysql.prisma

* Now you can view the event and workflows according to the defined prisma schema

---- Content from: D:\gs-documentation\docs\microservices-framework\datasources\caching.md ----

# Caching
Godspeed provides caching of the tasks using redis/mem-cache or any other custom cache. You can cache the result of any task in the workflows.   
Godspeed provides two pre-defined types of cache i.e. [redis](./datasource-plugins/Redis%20Datasource.md) and in-memory. It allows using multiple caches in a single service with a default cache. Cache datasource should implement abstract class `GSCacheAsDatasource` [code is below](#how-to-write-your-own-cache-plugin). You can make multiple caches using this abstract class.

> You can read and return from cache if data is present there, before executing any task where caching instruction is set.   
> The data is stored in form of [GSStatus](../workflows/native-language-functions.md/#gsstatus) of the executed task. Both success and failure statuses can be stored and loaded.

## Configuration
### Add pre-defined cache in Godspeed
You can use Godspeed CLI to browse and install redis/mem-cache, maintained by Godspeed.
```bash
godspeed plugin add
```
```bash


       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝


? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌──────┬────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
│      │ Name                                   │ Description                                                                    │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯  │ prisma-as-datastore                    │ Prisma as a datasource plugin for Godspeed Framework.                          │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯  │ aws-as-datasource                      │ aws as datasource plugin for Godspeed Framework                                │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│ ❯◯  │ redis-as-datasource                    │ redis as datasource plugin for Godspeed Framework                              │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯  │ graphql-as-eventsource                 │ graphql as eventsource plugin for Godspeed Framework                           │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯  │ mem-cache-as-datasource                │ mem-cache as datasource plugin for Godspeed Fraework Framework                 │
└──────┴────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘
```
Alternatively, you can specify `redis-as-datasource` or `mem-cache-as-datasource` to add cache in your project directly.

```sh
godspeed plugin add <plugin-name>
```

Once you add the desired cache, you can find its code in `src/types/redis.ts` where you can reuse our existing plugins or have code of your own plugin.    
You can find its configuration in the `src/datasources` e.g. `redis.yaml`. All the redis database related configuration need to be set in this file. The `redis.yaml` is an instance of `type: redis`. You can have multiple instances of `type: redis` called `redis1.yaml`, `redis2.yaml` etc. 

```bash
├── api.yaml
├── redis.yaml
└── types
    ├── axios.ts
    └── redis.ts
```

### Default cache
Define default cache datasource in [static configuration](/docs/microservices-framework/config-and-mappings/config.md) in `caching` key.

```yaml
log_level: debug
defaults:
  lang: coffee
server_url: https://api.example.com:8443/v1/api
caching: <redis or mem-cache>
```

### How to use caching in your tasks
#### Using caching in Typescript/Javascript tasks
:::note
Currently caching support is not provided when you call a datasource or function/workflow from typescript code. Check this [github issue](https://github.com/godspeedsystems/gs-node-service/issues/1008) for more information.
:::
For now if you want to use cache datasource within typescript code, you need to call it like any other datasource from within a typescript code. You need to manage caching and invalidations in your code. This requires some boilerplate till the above issue is implemented.

```javascript
export default async function (ctx: GSContext, args: any) {
  const redis_client = ctx.datasources['redis'].client;
  let res: GSStatus;
  const key = 'helloworld2';

  try {
    const cached_value = await redis_client.get(key);
    if (!cached_value) {
      res = await ctx.functions['com.gs.helloworld2'](ctx, {nice: "name", ...args});
      await redis_client.set(key, JSON.stringify(res));
    } else {
      return JSON.parse(cached_value);
    } 
  } catch(ex) {
    return new GSStatus(false, 500, undefined, {message: "Internal Server Error", info: ex.message});
  }

  return res;
}
```

#### Using caching in YAML tasks
##### Caching instruction
Caching instruction has the following specifications.
```yaml
caching:
  before: # execute before the task execution
    datasource: <the name of the datasource instance to use instead of default cache>
    key: <key name which is used to read the cached result from>
    invalidate: <Key name which we want to delete/remove from cache e.g. this feature can be used in CRUD types task. While delete operation, invalidate the cache of read or update task>
  after: # execute after the task execution
    datasource: <the name of the datasource instance to use instead of default cache>
    key: <key name which is used to write the cached result>
    invalidate: <Key name which we want to delete/remove from cache e.g. this feature can be used in CRUD types task. While delete operation, invalidate the cache of read or update task>
    cache_on_failure: <true|false, whether you want to cache the failure result or not. By default, it is false>
    options:
      EX: 200 <timer in seconds, until the cached result is valid> # Can pass any of RedisOptions, if supported by the specific caching Datasource 
```
:::noteRemember
* `options` are [redis options](https://redis.io/commands/set/) supported by redis cache. mem-cache does not support these options.
* `caching.before` instruction is used to read the result from cache and gets executed before the task execution.   
* `caching.after` instruction is used to write the result in cache and gets executed after the task execution.   
* In case where the result is present and returned from the cache, `caching.after` instruction doesn't get executed for that task.
* `datasource` specified in the caching instruction overrides the [default cache datasource](#default-cache).
:::

##### Sample
Here is the caching spec to write in the workflow.
```yaml title=config/default.yaml
caching: redis
```

```yaml title=src/events/helloworld.yaml
# Events
"http.get./helloworld2":
  fn: helloworld2
"http.get./helloworld3":
  fn: helloworld3
```

```yaml title=src/functions/helloworld2.yaml
# Functions (Helloworld2 workflow)
id: helloworld2_workflow
tasks:
  - id: helloworld2_workflow_first_task
    fn: com.gs.transform
    args:
      name: helloworld2
    caching:
      after:
        key: xyz
```

```yaml title=src/functions/helloworld3.yaml
# Functions (Helloworld3 workflow)
id: helloworld3_workflow
tasks:
  - id: helloworld3_workflow_first_task
    caching:
      before:
        key: abc
        invalidate: xyz #helloworld2 key
      after:
        key: abc
        datasource: mem-cache #overrides the default cache `redis`
    fn: com.gs.transform
    args:
      name: helloworld3
```

### How to write your own cache plugin
You need to implement abstract class `GSCacheAsDatasource` interface to write your own cache plugin.
```javascript
export abstract class GSCachingDataSource extends GSDataSource {
  //Redis options are available [here](https://redis.io/commands/set/) Client may or may not support all actions. RedisOptions is a superset based on what Redis supports
  public abstract set(key:string, val: any, options: RedisOptions): any; 
  public abstract get(key: string): any; //Return the value stored against the key
  public abstract del(key: string): any; //Delete the key
}

export type RedisOptions = {
  EX? : number,
  PX? : number,
  EXAT?: number,
  NX?: boolean,
  XX?: boolean,
  KEEPTTL?: boolean,
  GET?: boolean
}
```

#### Sample caching datasource implementation
This code is sourced from [mem-cache plugin](https://github.com/godspeedsystems/gs-plugins/blob/main/plugins/mem-cache-as-datasource/README.md). You can use this as a reference to make or customise your own caching implementations.

<details>
  <summary>mem-cache datasource plugin</summary>


#### Project structure
```bash
.
├── src
│   ├── datasources
│   │   ├── api.yaml
│   │   ├── mem-cache.yaml
│   │   └── types
│   │       ├── axios.ts
│   │       ├── mem-cache.ts
```

#### mem-cache config ( src/datasources/mem-cache.yaml )
```yaml
type: mem-cache
```

#### initializing client and execution ( src/datasources/types/mem-cache.ts ):
```javascript
import { GSContext, GSCachingDataSource, PlainObject, logger } from "@godspeedsystems/core";

export default class DataSource extends GSCachingDataSource {
  protected async initClient(): Promise<PlainObject> {
    this.client = {};
    return this.client;
  }  

  set(key: string, val: any, options: { EX?: number | undefined; PX?: number | undefined; EXAT?: number | undefined; NX?: boolean | undefined; XX?: boolean | undefined; KEEPTTL?: boolean | undefined; GET?: boolean | undefined; }) {
    logger.debug('set key %s %o', key, this.client);
    this.client[key] = val;
  }

  get(key: string) {
    return this.client[key];
  }

  del(key: string) {
    delete this.client[key];
  }

  execute(ctx: GSContext, args: PlainObject): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
```
</details>


<!--
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '0px',
      color: 'black',
      fontSize:'22px',
      padding: '5px',
      cursor: 'pointer',
    }}
   >
    {children}
  </span>
);-->

---- Content from: D:\gs-documentation\docs\microservices-framework\datasources\create-custom-datasource.md ----

# Create a Custom Datasource

**A datasource** in Godspeed is any entity that provides a read/write mechanism for data. For example, an API, a SQL or NoSQL datastore which includes RDBMS or mongodb,postgresql, key value stores, document stores etc. The congfiguration for each datasource lies in src/datasources directory.

## Steps to Create a Custom Datasource in Godspeed

You can create and interact with custom data source in few steps by:

**1. Defining configuration file**

**2. Implementing datasource logic and**

**3. Creating event and workflow to manage interactions**

Lets understand how to implement the above steps :

### Step 1: Define Configuration file 

- Inside the `datasources` directory, create `YAML` files to setup your datasource integrations. For example, chatgpt.yaml or kafka.yaml. 

- In this YAML file, ensure you specify a `type` field, and there must be a corresponding `TypeScript` file in the `types` directory that shares the same name as the `type` you defined. 

:::tip
You can create multiple instances of same datasource type by creating multiple yaml files. For example, chatgpt1.yaml and chatgpt2.yaml. 

FYI you can do the same for eventsources as well, For example http1.yaml and http2.yaml where both are of `type: express` and run on different ports.
:::

Let's see an example of creating chatgpt as custom datasource.

```
    .
    ├── src
        ├── datasources
        │   ├── types
        │   |    └── chatgpt.ts
        |   |
        │   └── chatgpt.yaml
        │
        ├── events
        |
        ├── eventsources
        │   
        └── functions
```

### Example

Chatgpt Config file- `src/datasources/chatgpt.yaml`

```yaml
type: chatgpt  # should be same as the name of your datasource typescript file in `src/datasources/types/`

# custom configurations as per your datasource logic
model: gpt-4o  
temperature: 1
max_tokens: 200

```
This file defines the model, temperature, and token settings for the ChatGPT API.

## Step 2: Implement datasource logic

1. In `src/datasources/types`, create a TypeScript file for your datasource logic (e.g., `chatgpt.ts`).
2. Import `GSDataSource` and other required modules from `@godspeedsystems/core`.
3. Extend the `GSDataSource` abstract class to implement custom methods to interact with your custom datasource.
4. Initialize and return your client by implementing the abstract `initClient()` method of `GSDatasource`.
5. Once your client is initialized, then implement the  abstract `execute()` method of `GSDatasource`.

### Template for your custom datasource logic :
You can use the following template to start writing your custom datasource logic and then modify it as per your requirement.

```typescript
  import { GSContext,  GSDataSource, GSStatus, PlainObject,} from "@godspeedsystems/core";

  export default class DataSource extends GSDataSource {
  protected async initClient(): Promise<object> {
      try {
        
        // initialize your client

      } catch (error) {
      throw error;
      }
  }
  async execute(ctx: GSContext, args: PlainObject): Promise<any> {
      try {

        // execute methods
        
      } catch (error) {
        throw error;
      }
  }
  }
  const SourceType = 'DS';
  const Type = "y"; // this is the loader file of the plugin, So the final loader file will be `types/${Type.js}`
  const CONFIG_FILE_NAME = "y"; // in case of event source, this also works as event identifier, and in case of datasource works as datasource name
  const DEFAULT_CONFIG = {};

  export {
    DataSource,
    SourceType,
    Type,
    CONFIG_FILE_NAME,
    DEFAULT_CONFIG
  }
 ```

### Example Datasource Logic for GPT plugin 

`src/datasources/types/chatgpt.ts`

```typescript

import { GSContext,  GSDataSource, GSStatus, logger, PlainObject,} from "@godspeedsystems/core";
import OpenAI from 'openai';

export default class DataSource extends GSDataSource {
protected async initClient(): Promise<object> {
  // initialize your client
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  return client;
}

async execute(ctx: GSContext, args: PlainObject): Promise<any> {
  const client = this.client as OpenAI;
  const { prompt, meta: { fnNameInWorkflow } } = args;
  // Parse method from fnNameInWorkflow
  let method = fnNameInWorkflow?.split(".")[2];

  // Validate that client and method are available
  if (!client) {
    return new GSStatus(false, 500, "ChatGPT client is not initialized");
  }
  if (!method) {
    return new GSStatus(false, 400, "Method name is missing in fnNameInWorkflow");
  }

  // Use destructuring with defaults to get config values
  const {  model= 'gpt-4o',temperature = 1, max_tokens = 500 } = this.config;

    try {
      // execute methods
      if (method === "chat") {
        // Execute ChatGPT completion
        const response = await client.chat.completions.create({
          model,
          messages: [{ role: "user", content: prompt }],
          temperature,
          max_tokens,
        });
        const responseContent = response.choices[0]?.message?.content ?? "No response generated";
        return new GSStatus(true, 200, "Success", responseContent);
      } else {
        return new GSStatus(false, 400, `Invalid method: ${method}`);
      }
    } catch (error) {
      throw error;
    }
}
}
const SourceType = 'DS';
const Type = "chatgpt"; // this is the loader file of the plugin, So the final loader file will be `types/${Type.js}`
const CONFIG_FILE_NAME = "chatgpt"; // in case of event source, this also works as event identifier, and in case of datasource works as datasource name
const DEFAULT_CONFIG = {};

export {
  DataSource,
  SourceType,
  Type,
  CONFIG_FILE_NAME,
  DEFAULT_CONFIG
}
```
<!-- 
<details>
<summary> Datasource Logic for Kafka: </summary> 

(src/datasources/types/kafka.ts)

   ```typescript
   import { GSContext, GSDataSource, PlainObject } from "@godspeedsystems/core";
   import { Kafka } from "kafkajs";

   export default class DataSource extends GSDataSource {
     protected async initClient(): Promise<PlainObject> {
       const kafka = new Kafka({
         clientId: this.config.clientId,
         brokers: this.config.brokers,
       });
       return kafka;
     }

     async execute(ctx: GSContext, args: PlainObject): Promise<any> {
       const { topic, message, meta: { fnNameInWorkflow } } = args;
       let method = fnNameInWorkflow.split(".")[2];

       if (this.client) {
         if (method === "producer") {
           const producer = this.client.producer();
           await producer.connect();
           const result = await producer.send({
             topic: topic,
             messages: [{ value: message }],
           });
           return result;
         } else {
           return "Invalid method";
         }
       }
     }
   }
```

#### Explanation of the Code:
- **initClient**: Initializes the Kafka client based on the configuration in `kafka.yaml`.
- **execute**: Defines a function that can either publish a message to Kafka or handle errors.
</details>
-->

## Step 3: Define an Event to trigger the Datasource

In the `src/events` directory, create an event file, e.g. `gpt.yaml`

**Example (src/events/gpt.yaml)**

```yaml
http.post./chatgpt:
  summary: "Generate response from ChatGPT"
  description: "Endpoint to send a user prompt to ChatGPT and retrieve the AI-generated response."
  fn: prompt
  authn: false
  body:
    content:
      application/json:
        schema:
          type: object
          properties:
            prompt:
              type: string
              description: "The user's prompt or question for ChatGPT to respond to."
          required:
            - prompt
  responses:
    200:
      description: "Successful response from ChatGPT"
      content:
        application/json:
          schema:
            type: string
```

## Step 4: Define the Workflow

In the `src/functions` directory, create a typescript workflow file (e.g., `prompt.ts`)

```typescript
import { GSContext, GSDataSource, GSStatus } from "@godspeedsystems/core";
export default async function (ctx: GSContext, args: any) {
    const { inputs: {data: { body } }, }= ctx;
    const prompt = body.prompt;    
    const ds: GSDataSource = ctx.datasources.chatgpt;
    
    const response = await ds.execute(ctx, {
        prompt,
        meta: {fnNameInWorkflow: 'datasource.chatgpt.chat'}
    });
    return response;
}
```

Or you can create workflow in yaml also :

Example YAML Workflow (prompt.yaml)

```yaml
summary: "Get AI-driven response from ChatGPT with configurations from YAML file"
tasks:
  - id: request_chatgpt
    fn: datasource.chatgpt.chat
    args:
      prompt: <% inputs.body.prompt %>
```

## Step 5: Access and Test the Custom Datasource

1. **Start Your Godspeed Server**:
   ```bash
   godspeed serve
   ```

2. **Test the API Endpoint:**

  Use Swagger UI at http://localhost:3000/api-docs or a tool like Postman to test the endpoint.
  Send a POST request to /chatgpt with the prompt in the JSON body.

  Example request:

  ```json
    {
      "prompt": "How to create an API in godspeed ?"
    }
  ```

3. **Verify the Response**:
The API should respond with the ChatGPT-generated message in the format specified.




---- Content from: D:\gs-documentation\docs\microservices-framework\datasources\create-custom-datasource_old.md ----

# Create a Custom Data Source

## Data Source 

Any kind of entity which provides read and write mechanism for data is considered a datasource. For example, an API, a SQL or NoSQL datastore which includes RDBMS or mongodb,postgresql, key value stores, document stores etc. The congfiguration for each datasource lies in src/datasources directory.

### Steps to create Custom Datasource

1. Inside the `datasources` directory, create a `YAML` file with a specific name. In this YAML file, ensure you specify a `type` field, and there must be a corresponding `TypeScript` file in the `types` directory that shares the same name as the `type` you defined.

2. In your TypeScript file, use an import statement to bring in `GSDataSource` from the `@godspeedsystems/core` package. Then, create a class that inherits from `GSDataSource`.

```
    .
    ├── src
        ├── datasources
        │   ├── types
        │   |    └── custom_datasource.ts
        |   |
        │   └── custom_datasource.yaml
        │
        ├── events
        | 
        |
        |
        ├── eventsources
        │   
        |
        └── functions
```

3. Afterward, you can access the methods provided by `GSDataSource`. Initialize your client by calling the `initClient()` function.

4. Once your client is initialized, you can execute its methods using the `execute` function.

Let's use kafka as an example of a datasource :

#### Project structure

```bash
    .
    ├── src
        ├── datasources
        │   ├── types
        │   |    └── kafka.ts
        |   |
        │   └── kafka.yaml
        │
        ├── events
        |   |
        │   ├── kafka_publish_event.yaml
        |   |
        |   └── kafka_consumer_event.yaml

        ├── eventsources
        │   ├── types
        │   |    └── kafka.ts
        |   |
        │   └── kafka.yaml
        |
        └── functions
            |
            ├── kafka-publish.yaml
            |
            └── kafka-consume.yaml
```

#### Kafka config ( src/datasources/kafka.yaml )
```yaml
type: Kafka
clientId: "kafka_proj"
brokers: ["kafka:9092"]
```

#### Initializing client and execution ( src/datasources/types/Kafka.ts ) :

```javascript
import { GSContext, GSDataSource, PlainObject } from "@godspeedsystems/core";
import { Kafka } from "kafkajs";

export default class DataSource extends GSDataSource {
  protected async initClient(): Promise<PlainObject> {
    const kafka = new Kafka({
      clientId: this.config.clientId,
      brokers: this.config.brokers,
    });

    return kafka;
  }

  async execute(ctx: GSContext, args: PlainObject): Promise<any> {
    try {
      const {
        topic,
        message,
        meta: { fnNameInWorkflow },
      } = args;
      let method = fnNameInWorkflow.split(".")[2];
      if (this.client) {
        if (method === "producer") {
          const producer = this.client.producer();
          await producer.connect();
          let result = await producer.send({
            topic: topic,
            messages: [{ value: message }],
          });
          return result;
        } else {
          return "Invalid method";
        }
      }
    } catch (error) {
      throw error;
    }
  }
}

```

#### Example Event ( src/events/kafka_publish_event.yaml ) :
```yaml
'http.post./kafka-pub':
  fn: kafka-publish
  body:
    content:
      application/json:
        schema:
          type: object
          properties:
            message:
              type: string
          required: ['message']
  responses:
    200:
      content:
        application/json:
          schema:
            type: object
            properties:
              name:
                type: string

```

#### Workflow Example ( src/functions/kafka-publish.yaml )

```yaml
id: kafka-publish
summary: kafka publish message
tasks:
    - id: publish
      fn: datasource.kafka.producer
      args:
        topic: "publish-producer1"
        message: <% inputs.body.message%>

```


---- Content from: D:\gs-documentation\docs\microservices-framework\datasources\create-datasource-plugin.md ----

# Create Datasource plugins

Godspeed has a [plugin based](https://github.com/godspeedsystems/gs-plugins.git) ecosystem and you can install the plugins using [CLI](/docs/microservices-framework/CLI.md).Now let us understand  <a href="https://github.com/godspeedsystems/gs-plugins/blob/main/README.md">how can you contribute a plugin</a>.

In this section, let us understand how a developer can contribute a plugin to godspeed [plugin repo](https://github.com/godspeedsystems/gs-plugins.git) or for internal use.
Follow these step-by-step guidelines to receive detailed instructions on contributing your plugin. Become an integral part of the world's first meta framework, setting the course for innovation and excellence. 
Watch the videos below for better understanding!

## 1.How to create plugins using godspeed?

Here is a video which helps you create a plugin using the godspeed. Do watch for better understanding

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/owQEuBO8_lk" frameborder="0" allowfullscreen></iframe>
</div>


## 2.Create and use plugins using godspeed
Watch here the video where we demonstrate how to create and use plugins using godspeed.

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
    <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/YzvYjYujBMk" frameborder="0" allowfullscreen></iframe>
</div>


---- Content from: D:\gs-documentation\docs\microservices-framework\datasources\create-datasource-plugin2.md ----

To create a custom data source in Godspeed, follow these steps:

1. **Install the Godspeed Plugin Generator**:
   Begin by installing `godspeed-plugin-generator` to easily set up the plugin structure. Run:
   ```bash
   npm install -g generator-godspeed-plugin
   npm install -g yo
   ```

2. **Generate the Data Source Plugin**:
   Run the generator in your project directory:
   ```bash
   yo godspeed-plugin
   ```
   When prompted, enter a name for your plugin and choose "DataSource" as the plugin type.

3. **Configure the Data Source**:
   In the `src/datasources` directory, create a YAML configuration file (e.g., `custom_datasource.yaml`). This file specifies details like the type of data source, configurations, and any specific parameters. For example:
   ```yaml
   type: my_custom_type
   clientId: "my_project"
   ```

4. **Create the Data Source Class**:
   In the `src/datasources/types` directory, create a TypeScript file with the same name as the type you specified in the YAML file (e.g., `my_custom_type.ts`). This file defines your custom data source class by extending `GSDataSource`. Implement two key methods:

   - **`initClient()`**: Initializes the client for your data source.
   - **`execute()`**: Executes operations with this data source.
   
   Here’s an example for an OpenAI API integration:
   ```typescript
   import { GSContext, GSDataSource, GSStatus, PlainObject } from "@godspeedsystems/core";
   import OpenAI from 'openai';

   export default class DataSource extends GSDataSource {
     protected async initClient(): Promise<object> {
       const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
       return client;
     }

     async execute(ctx: GSContext, args: PlainObject): Promise<any> {
       if (!this.client) {
         this.client = await this.initClient();
       }
       const client = this.client as OpenAI;
       const { prompt, meta: { fnNameInWorkflow } } = args;
       const method = fnNameInWorkflow?.split(".")[2];
       if (!method || method !== "execute") {
         return new GSStatus(false, 400, "Invalid method");
       }
       const response = await client.chat.completions.create({
         model: 'gpt-4o',
         messages: [{ role: "user", content: prompt }],
         temperature: 1,
         max_tokens: 200
       });
       const responseContent = response.choices[0]?.message?.content || "No response";
       return new GSStatus(true, 200, "Success", responseContent);
     }
   }

   const SourceType = 'DS';
   const Type = "gpt"; // Determines the loader file name
   const CONFIG_FILE_NAME = "gpt"; // Used as the datasource name
   const DEFAULT_CONFIG = {};
   export { DataSource, SourceType, Type, CONFIG_FILE_NAME, DEFAULT_CONFIG };
   ```

5. **Define Event and Function Files**:
   Create event and function YAML files to define how other components interact with this data source:
   
   - **Event Configuration (e.g., `gpt_event.yaml`)**:
     ```yaml
     http.post./chatgpt:
       fn: datasource.gpt.execute
       body:
         content:
           application/json:
             schema:
               type: object
               properties:
                 prompt:
                   type: string
                   description: "User prompt"
               required: ['prompt']
       responses:
         200:
           content:
             application/json:
               schema:
                 type: string
     ```

   - **Function Definition (e.g., `prompt.yaml`)**:
     ```yaml
     summary: "Fetch AI response"
     tasks:
       - id: request_chatgpt
         fn: datasource.gpt.execute
         args:
           prompt: <% inputs.body.prompt %>
     ```

6. **Test and Deploy**:
   Once the data source is configured, you can use the function definitions in workflows and test the integration to verify it meets your requirements.

This approach ensures that your custom data source integrates smoothly with the Godspeed framework, allowing you to extend its functionality based on your project's unique requirements.

---- Content from: D:\gs-documentation\docs\microservices-framework\datasources\datasource-plugins\AWS Datasource.md ----

AWS as a datasource plugin: Turbocharge your app by tapping into Amazon Web Services. Unleash the power of cloud-based data, storage, and more to supercharge your application. 🚀 

## Steps to use aws plug-in in godspeed framework:

### How to install
**a. ** Create a godspeed project from the CLI , open the created project in vscode and then add the plugin from the CLI of vscode, select the `@godspeedsystems/plugins-aws-as-datasource` to integrate the plugin.

```
> godspeed plugin add
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌──────┬────────────────────────────────────┬────────────────────────────────────────────────────────────────────┐
│      │ Name                               │ Description                                                        │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│  ◯   │ prisma-as-datastore                │ Prisma as a datasource plugin for Godspeed Framework.              │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│ ❯◯   │ aws-as-datasource                  │ aws as datasource plugin for Godspeed Framework                    │
└──────┴────────────────────────────────────┴────────────────────────────────────────────────────────────────────┘
```
**b. ** The plugin can also be directly installed by running `npm i @godspeedsystems/aws-as-datasource` command

### Configuration

In your `<aws_ds_name>.yaml` file, you will need to configure   

```yaml
type: aws
default_client_config: #any aws specific configurations
  credentials:
    accessKeyId: <%config.accessKeyId%>
    secretAccessKey: <%config.secretAccessKey%>
# service type is the name of the npm module for ex. @aws-sqk/client-dynamodb or @aws-sqk/client-s3 etc
# The `types` key can have service type to sdk's client names mappings when coding
types: #mappings
  dynamodb: DynamoDB
  s3: S3
  lambda: Lambda
  ssm: SSM
  sqs: SQS
services:
  s3:
    type: s3
    config:
      region: <%config.anotherAccessKeyId%>
      credentials:
        accessKeyId: <%config.anotherAccessKeyId%>
        secretAccessKey: <%config.anotherSecretAccessKey%>
  s3_1: #uses default config
    type: s3
  dynamodb:
    type: dynamodb
  sqs:
    type: sqs
  ssm:
    type: ssm
  lamdba:
    type: lambda
```

**1. ** type: aws (type of the datasource)   
**2. ** default_client_config (optional) for initializing your clients, as per the aws config specs   
**3. ** Client type to client name mappings via the `types` key   
**4. ** `services` contains settings for the services you want to invoke via this datasource. Each service has a type like s3, lamdba etc. They can have their own config overriding the default under the `config` key.    
There can be multiple services configured for the same type. For example, `s3` and `s3_1` in the above configuration.

### Example usage

In an event, we establish HTTP endpoint that accepts json objects in request body. When this endpoint is invoked, it triggers the `aws_list` function with the args coming from request body.

```yaml title=event
"http.post./aws":
  fn: aws_list
  body:
    type: object
  responses:
    200:
      content:
         application/json:
```

```yaml title=workflow
id: aws_workflow
tasks:
  - id: aws_list
    fn: datasource.aws.s3.listObjects
    args: <% inputs.body %>
```
In workflow we need to mention `datasource.aws.${serviceName}.${method}` as function `fn` to perform operations in this case `datasource.aws.s3.listObjects`.

```ts title='TS workflow'
import { GSContext, GSDataSource, GSStatus } from "@godspeedsystems/core";

export default async function (ctx: GSContext, args: any) {
    const ds: GSDataSource = ctx.datasources.aws;
    const response = await ds.execute(ctx, {
         //Pass exactly same args as this aws service's method takes
        ...args,
        //Along with args, pass meta object
        // meta can contain {entityName, method}
        meta: {entityName: 's3', method: 'listBuckets'},
        //Or meta can contain {fnNameInWorkflow} which is same as 
        //the 'fn' that we write when invoking datasource from yaml workflow
        //For example, this will also work
        //meta: {fnNameInWorkflow: 'datasource.aws.s3.listBuckets'}
    });
    return response;
}
```
### Example to upload file on aws s3
```yaml title=event
# event for upload s3 file

"http.post./aws":
  fn: aws_upload
  body:
  content:
    multipart/form-data:
        schema:
        $ref: '#/definitions/event/upload_file'
  responses:
    200:
      content:
         application/json:

```
the above event calling `aws_upload.ts` workflow from `src/functions/` 
 
```js 
import { GSContext, GSStatus } from "@godspeedsystems/core";
import fs from 'fs'

module.exports = async (ctx: GSContext) => {
  const { files: { myfile } } = ctx.inputs.data;
  const { datasources, logger } = ctx;
  try {
    return new Promise((resolve, reject) => {
      fs.readFile(myfile.tempFilePath, async function (err, data) {
        if (err) {
        resolve(new GSStatus(false, 500, 'S3 document upload failed', { error: { message: err.message } }));

        } // Something went wrong!
        const contentType = ctx.inputs.data.headers['content-type']
        var params = {
          Key: myfile.name, //file name
          Body: data,
          Bucket: 'userdocs123',
          ContentType: contentType,
        };

        const res = await datasources.aws.client.s3.putObject(params);

        resolve(new GSStatus(true, 200, 'successfully uploaded document', res, undefined))

      })
    });

  } catch (e: any) {
    logger.error('S3 document upload failed %o', e)
    return new GSStatus(false, 500, 'S3 document upload failed', { error: { message: e.message } })
  }

};
```

## Reference links
**- ** [Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/aws-as-datasource)   
**- ** [Issue Tracker](https://github.com/godspeedsystems/gs-plugins/issues)      
**- ** [npm package](https://www.npmjs.com/package/@godspeedsystems/plugins-aws-as-datasource)


---- Content from: D:\gs-documentation\docs\microservices-framework\datasources\datasource-plugins\Axios Datasource.md ----

Axios as a datasource: Level up your data-fetching game with Axios. Seamlessly integrate this powerful HTTP client into your app for smooth and efficient data transactions. Fetch, post, and interact with APIs effortlessly. Ready to make data requests a breeze? 🌐✨

<!-- The Godspeed Axios Plugin provides seamless integration with the Axios library for making HTTP requests within the Godspeed framework. It simplifies the process of defining and executing HTTP requests, making it easy to interact with external APIs. -->

## How to Use
**a. ** Create a godspeed project from the CLI and by default the axios plugin is integrated into your project if not, add the plugin from the CLI and select the `@godspeedsystems/plugins-axios-as-datasource` to integrate the plugin.

```
godspeed plugin add   


       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝


? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌──────┬───────────────────────────────────┬──────────────────────────────────────────────────────────────────┐
│      │ Name                              │ Description                                                      │
├──────┼───────────────────────────────────┼──────────────────────────────────────────────────────────────────┤
│  ◯   │ kafka-as-datasource-as-eventsource│ kafka as datasource-as-eventsource plugin for Godspeed Framework │
├──────┼───────────────────────────────────┼──────────────────────────────────────────────────────────────────┤
│ ❯◯   │ axios-as-datasource               │ Axios as datasource plugin for Godspeed Framework                │
└──────┴───────────────────────────────────┴──────────────────────────────────────────────────────────────────┘

```

**b. ** The plugin can also be directly installed by running `npm i @godspeedsystems/axios-as-datasource` command

**c. ** You will find the files in your project related to the axios plugin at `src/datasources/types/axios.ts` and `src/datasources/api.yaml`.

```typescript title=src/datasources/types/axios.ts
import { DataSource } from '@godspeedsystems/plugins-axios-as-datasource';
export default DataSource;
```

```yaml title=src/datasources/api.yaml
type: axios
base_url: http://localhost:4000
```

### Sample axios datasource yaml workflow
```yaml title=src/functions/sample.yaml
id: sample
tasks:
  - id: first_task
    fn: datasource.api.get./api/items
    args:
      headers:
      data:
      timeout:
      params: 
```

### Sample axios datasource js/ts workflow
```js
import { GSContext, GSDataSource, logger, PlainObject } from "@godspeedsystems/core";

export default async function (ctx: GSContext, args: {loan_offer: PlainObject, pan_number: string}) {
    const client: GSDataSource = ctx.datasources.lms;

    const res =  await client.execute(ctx, {
        meta: {
            method: 'get',
            url: '/api/items',
        },
        data: args
    });
    return res;
};
```
The axios request configuration options, such as headers, params, data, and timeout, can be directly passed as arguments (args).

```yaml
args:
  headers:
    'X-Requested-With': 'XMLHttpRequest'
  params:
    ID: 12345
  data:
    firstName: 'Fred'
  timeout: 1000
```
 To get more clarity checkout about [Axios configuration]( https://axios-http.com/docs/req_config)


## How It Helps

The Godspeed Axios Plugin offers the following advantages:

**1. Axios Integration:** The plugin abstracts away the complexities of setting up Axios instances, making it effortless to configure and execute HTTP requests.

**2. Unified DataSource:** Developers can use a uniform API to define data sources that make HTTP requests using Axios. This enhances consistency and ease of use across different parts of the application.

**3. Error Handling:** The plugin includes robust error handling, allowing developers to gracefully handle various scenarios, such as server timeouts, request setup failures, and server-side errors.

**4. Integration with Godspeed Core:** The plugin seamlessly integrates with the Godspeed Core library, aligning with the principles of the Godspeed framework and enabling streamlined event-driven workflows.


## Plugin Components
:::info
You can deep dive into the plugin code [here](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/axios-as-datasource)
:::
The plugin consists of the following key components:

### 1. `DataSource` Class

- This class extends `GSDataSource`, a base class provided by the Godspeed framework for creating data sources.

- It initializes an Axios instance to make HTTP requests based on the provided configuration options.

- The `execute` method is used to define how the plugin should execute HTTP requests. It maps incoming parameters to Axios request properties, processes the request, and handles various response scenarios.

### 2. Constants

- `SourceType`: A constant representing the source type of the plugin, which is 'DS' (data source).

- `Type`: A constant representing the loader file of the plugin. The final loader file will be located in the 'types' directory and named `${Type.js}`, where `Type` is 'axios' in this case.

- `CONFIG_FILE_NAME`: In the context of a data source, this constant also serves as the data source name. In this plugin, it is set to 'api'.

- `DEFAULT_CONFIG`: A default configuration object with Axios options like base URL and other settings.


### 3. Axios retry
###  **a. ** Set Defaults retry at datasource level within datasource config yaml file.(src/datasources/api.yaml)

```yaml
type: axios
base_url: http://localhost:4000
retry:
    when: #the condition
      status: [500, 501, 502] # an array or single value of codes
      message: my custom expected message for retry
    max_attempts: 5
    type: constant ##[constant,exponential,random]
    interval: PT15s
```
the above config works on two conditions if status from the api is 500,501 or 502 and message value is as mentioned in the config. When condition is optional and if retry is without when condition, the retry will be made on failures of the API.

### **b. ** Override retry logic at task level within args object of the axios method call.

```yaml
id: some_workflow
tasks:
  - id: post-anything
    # Fetching loan offers from rule engine for the given bank and pan card
    fn: datasource.api_datasource.post./anything
    args:
      data:
        data: <%inputs.body.data%>
      headers:
        Content-Type: application/json
    on_error:
      continue: false
    retry: # By default the datasource has constant retry set in its yaml. Here we override the retry to exponential
      when: # an and condition between status and message.
        status: [500, 503] # an array or single value of codes (optional). Default 500
        message: Retry later # Retry when response has this message
      max_attempts: 5
      type: exponential
      min_interval: PT5s
      max_internal: PT15s
```
The sample config can be modified as per the usecase of your application. For example,

```yaml title=src/datasources/api.yaml
type: axios
base_url: https://httpbin.org

# print all api calls in curl format
curlifiedLogs: true 

# Authentication of API calls with token refresh logic
authn: 
  fn: my_bank.authn
  refreshOn:
    statusCode: [401]

# Common headers to be set in all API calls
headers:
  Content-Type: application/json
  Cookie: <%mappings.my_bank.auth_workflow_cookie%>

# Retry logic for failed API calls for ex on Internal server errors or request timeouts
retry:
    when: #the condition
      status: [500, 503] # an array or single value of codes (optional). Default 500
      message: my custom expected message for retry #And (optionally) when response has this message
    max_attempts: 5
    type: constant # or random, exponential
    interval: PT15s
    # type: exponential
    # min_interval: PT5s
    # max_internal: PT15s
    # type: random
    # min_interval: PT5s
    # max_internal: PT15s
```
Retry interval values will be based on [ISO Temporal Duration standard](https://tc39.es/proposal-temporal/docs/duration.html)
### 4. Authentication of API calls with token refresh logic

HTTP requests sometimes need authentication, means they are validated against a token which is passed in the headers
and also the token needs to be refreshed before the API call. 

Please checkout the above sample config of the datasource.

API calls with token refresh logic and authentication is configured in your datasource config file, by setting `authn` and the `fn` is called before calling the API endpoint and token will be refreshed on statusCode mentioned in the array of [`statusCode`](/docs/microservices-framework/datasources/list-of-plugins#sample-config-apiyaml).

Example `fn` of `authn`:

```ts
import { logger } from "@godspeedsystems/core";

const axios = require('axios');
const client = axios.create({
    headers: {
        'Content-Type': 'application/json'
    }
});
/**
 * Generate and return all the headers which are required to be sent
 * in the API calls which require authentication tokens
 */
module.exports = async function (ctx: any) {
    try {
        const res = await client({
            method: 'get',
            url: `https://httpbin.org/anything`,
            data: {
                "Authorization": 'access_token'
            }
        })
        // Retrieve the authn tokens
        const headers = {
            "Authorization": res.data.access_token || 'access_token'
        };
       
        logger.info('Auth token successfully refreshed and following headers set: %o', Object.keys(headers));
        return headers;
    } catch (error) {
        logger.error('Error in refreshing token %o', error);
        throw error;
    }
}
```

### 4.1 Skip auth

In an axios datasource call, if `skipAuth` is set in `args` then auth flow will be ignored. This is useful when generating token from the same api.

example workflow:
```yaml
id: some_workflow
tasks:
  - id: post-anything
    # Fetching loan offers from rule engine for the given bank and pan card
    fn: datasource.api_datasource.post./anything
    args:
      skipAuth: true
```
## Conclusion

The Godspeed Axios Plugin is a valuable addition to the Godspeed framework, providing a standardized way to make HTTP requests using the Axios library. With this plugin, you can easily integrate with external APIs, handle responses, and streamline data retrieval within your applications.

## Reference links
**- ** [Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/axios-as-datasource)   
**- ** [Issue Tracker](https://github.com/godspeedsystems/gs-plugins/issues)      
**- ** [npm package](https://www.npmjs.com/package/@godspeedsystems/plugins-axios-as-datasource)



---- Content from: D:\gs-documentation\docs\microservices-framework\datasources\datasource-plugins\elasticgraph\elasticgraph.md ----

---
sidebar_position: 3
title: Elasticgraph as datasource
---

# Introduction
The framework supports Elasticgraph as a datasource. It supports elasticsearch as datastore. In addition, you can use various features of Elasticgraph like deep graph search algorithms, de-normalization, joins, aggregations, multi-lingual support.

### Folder Structure
The datasources for Elasticgraph are defined in `src/datasources`. Here, `elasticgraph1.yaml` and `elasticgraph2.yaml` are defined in datasources.
```
.
├── config
└── src
    ├── datasources
    │   └── httpbin.yaml
    │   ├── elasticgraph1.yaml
    │   ├── elasticgraph2.yaml
    ├── events
    ├── functions
    └── mappings
```

### Datasource DSL
**elasticgraph1.yaml**
```yaml
  type: elasticgraph
  schema_backend: ./eg_config/eg1/ # relative path to config files
  deep: false # deep feature of Elasticgraph to use graph algorithms
  collect: true # collect feature of elasticsearch
```
**elasticgraph2.yaml**
```yaml
type: elasticgraph
schema_backend: ./eg_config/eg1/ # relative path to config files
deep: false # deep feature of Elasticgraph to use graph algorithms
collect: true # collect feature of elasticsearch
```


### Configuration files of Elasticgraph
All the configuration files of Elasticgraph datasources should be defined in `src/datasources/eg_config/` directory.

Sample strucutre of config files.
```
.
├── elasticgraph1.yaml
├── elasticgraph2.yaml
├── eg1
│   ├── collect.toml
│   ├── common.toml
│   ├── config.toml
│   ├── custom.toml
│   ├── elasticsearch.toml
│   ├── joins
│   │   └── search.txt
│   └── schema
│       ├── aggregation.toml
│       ├── dependencies.toml
│       ├── entities
│       │   ├── reconciled.toml
│       │   └── auth_user.toml
│       ├── entitiesInfo.toml
│       ├── relationships.txt
│       ├── suggestions.toml
│       └── union.toml
└── eg2
    ├── collect.toml
    ├── common.toml
    ├── config.toml
    ├── custom.toml
    ├── elasticsearch.toml
    ├── joins
    │   └── search.txt
    └── schema
        ├── aggregation.toml
        ├── dependencies.toml
        ├── entities
        │   ├── reconciled.toml
        │   └── auth_user.toml
        ├── entitiesInfo.toml
        ├── relationships.txt
        ├── suggestions.toml
        └── union.toml
```

### Elasticgraph Setup
The framework has [inbuilt feature](/docs/microservices-framework/workflows/yaml-workflows/inbuilt-workflows.md) of setting up Elasticgraph model automatically whenever a new configuration is added in `src/datasources/eg_config/` directory. In case, you are getting any error in the setup, then you can refer execute below step for manual setup:

> During the project setup, if you have not selected elasticsearch, then you will have to execute `godspeed update` in project root directory, outside the dev container. This will add elasticsearch in the dev container environment.


#### Step 1: godspeed eg-push
```
$ godspeed eg-push
                      _                                   _
   __ _    ___     __| |  ___   _ __     ___    ___    __| |
  / _` |  / _ \   / _` | / __| | '_ \   / _ \  / _ \  / _` |
 | (_| | | (_) | | (_| | \__ \ | |_) | |  __/ |  __/ | (_| |
  \__, |  \___/   \__,_| |___/ | .__/   \___|  \___|  \__,_|
  |___/                        |_|

> eg_test@1.0.0 eg-push
> for f in src/datasources/eg_config/*; do echo ${f}; node ../gs_service/elasticgraph/lib/mappingGenerator/reIndexer.js ${f} all; done

src/datasources/eg_config/eg1
```

## Auto generating CRUD APIs for Elasticgraph
Developer can generate CRUD APIs for all the entities in `src/datasources/eg_config/` directory. `Events` and `Workflows` will be auto generated for `Create`, `Read`, `Update` and `Delete` operations for each entity in respective datastore.

 Auto-generated events and workflows will be stored in `/events/{datasourceName}/{entityName}` and `/functions/com/gs/eg/{datasourceName}/{entityName}` folders respectively.

```
$ godspeed gen-crud-api
                      _                                   _
   __ _    ___     __| |  ___   _ __     ___    ___    __| |
  / _` |  / _ \   / _` | / __| | '_ \   / _ \  / _ \  / _` |
 | (_| | | (_) | | (_| | \__ \ | |_) | |  __/ |  __/ | (_| |
  \__, |  \___/   \__,_| |___/ | .__/   \___|  \___|  \__,_|
  |___/                        |_|

> eg_test@1.0.0 gen-crud-api
> npx godspeed-crud-api-generator

Select datasource / schema to generate CRUD APIs
Events and Workflows are generated for elasticgraph.yaml
```

# Elasticgraph setup

## Creating the mapping in Elasticsearch for first time

To create the mapping for the first time, run the following command:

```bash
DEBUG=*,-elasticsearch node ../gs_service/elasticgraph/lib/mappingGenerator/reIndexer.js ./datasources/eg_config/eg1 all|<comma seprated list of defined entity types> init
```
:::tip
  If there are existing data indexed in Elasticsearch and we want to make changes to the mapping, such as adding new fields, it is not recommended to use the command used for creating the mapping for the first time
:::

## Reindexing after mapping updates

If we have made any changes to the mapping, such as adding new fields, we will need to reindex our data to apply the changes to the existing documents. To reindex in Elasticsearch,run the following command:

```bash
$ cd <path-to-elasticgraph-repo>
DEBUG=*,-elasticsearch node ../gs_service/elasticgraph/lib/mappingGenerator/reIndexer.js ./datasources/eg_config/eg1 backend all|<comma seprated list of defined entity types>

```


## Configuration: Switching to OpenSearch in Elasticgraph

ElasticGraph supports both Elasticsearch and OpenSearch as underlying data stores. By default, Elasticsearch is used. To configure ElasticGraph to use OpenSearch instead of Elasticsearch, add the following either in an environment variable or in the elasticsearch.toml file in your project's configuration:


### Way 1: Add the following line to the .env file:

```bash
  ds=aws
```

### Way 2: Add the following line to the elasticsearch.toml file:
```
sample_project
└── config
      ├── backend
           └── elasticsearch.toml
```

```yaml title=elasticsearch.toml

maxConnections = 200
apiVersion = '7.4'
requestTimeout = 90000
node = 'http://localhost:9200'
sniffOnStart = true
ds = 'aws'
```

## Custom Elasticsearch Mapping

If you want to override the auto-generated, default Elasticsearch mapping, You can override that in `custom-mapping.yaml`.

```yaml title=custom-mapping.yaml
reconciled: #The type of entity
  mappings:
    dynamic_templates:
    - full_name:
        path_match: charge_params.*
        mapping:
          type: float
    properties:
      charge_params:
        properties:
          fee (Fee):
            type: float
          fee (Phí dịch vụ):
            type: float
```



### API examples: Postman collection

Download the collection with documentation [here](https://api.postman.com/collections/17317391-ae9724b5-10ac-428a-b0d2-e7d8127659c0?access_key=PMAT-01HCM2RCXZCR9H840HKZRBXBP7)
There you will see core CRUD API (same in sync and async). Each CRUD api has its documentation in the collection itself.

---- Content from: D:\gs-documentation\docs\microservices-framework\datasources\datasource-plugins\elasticgraph\feature-set-of-elasticgraph.md ----

---
sidebar_position: 3
title: Feature, Configurations & API
---

# About ElasticGraph
## Benefits

### Productivity
EG saves LOT of effort in development of an Elasticsearch based app because it *abstracts some most common data operations into a simple configurable abstractions* saving hundreds to thousand lines of code, makes the code neat, elegantly abstracts business logic in configurable text files and saves many hours of development and testing.

### Performance
Using ElasticGraph one can configure and run (out of the box) highly scalable microservices using *relational graph approach, optimized for storing and querying large informational graphs in greater depth and complexity.*

The node module internally uses **intelligent query batching and in memory caching**, to support thousands of concurrent users, and complex search and analytic graph queries.

## Features
* Supports relationships
* Joins
	* You can do this for upto multiple depths of relationships in an easy fashion.
* Graph search and aggregations (using denormalization + caching)
	* Graph search: Find friends whose friends are from India.
	* Graph aggrigations: Give countwise breakup of users across city.state.country.name property
* Dependency management between data of related entities (At indexing time).
	* Sometimes the value of some field of an entity depends on the value of another field in (possibly) another entity related to it.
	* Example unions and copy values. More on it below.
	* Here you can configure such dependencies through configuration.
* Multi lingual storage and read operations
    * You can store, retrieve and search text fields in any languages
	* Any new language support can be added though a simple configuration
* Easy SQL
	* English like (or easy) query language is a custom DSL built to richly express queries in a very small and handy syntax, easily human readable.
	* Write complex database operation logic in "very few lines"
	* You (almost) don't need to be a developer to grasp it :-)
* Performance features
	* Query batching
		* EG collects and executes, multiple queries from different places in your application logic, as one bulk query to your datastores.
		* Saves typical throughput time in high load scenario
	* In memory caching
		* Check and store queries and entities in an in-memory cache. This cache is internally populated and used during execution of EG’s deep API.
		* Saves N -1 round trips to the database for every N queries.
		* Developers can use this feature via EG’s npm module, to keep alive and share a cache object as long as they want for performance optimisation.


## Entities and model

In ElasticGraph (EG) domain, there are entities (similar to rows in MySQL, or nodes in a Graph). Each entity has an id, type, fields like text, date etc. and relationships (akin to foreign keys). The configurations of a field are all declared in one place.

Each entity is stored in a separate ElasticSearch index by the name entity._type + ‘s’

For example. for type video, the ES index will be videos


**The simple fields of an entity and their settings are defined in**

Here is a sample config for 'event' entity type in TOML format

```yaml title=configFolder/schema/entities/{entityType}.toml
[title]
type = 'String'
multiLingual = true
autoSuggestion = true
encrypted = true
sort = true # Mark this field to be index as sortable or searchable
[description]
type = 'String' # String | Boolean | Number(stored as Long) | Object | Date
multiLingual = true
[startingDate]
type = 'date'
multiLingual = false
```
:::info
If you want to use `type = Float` then you need to specify in [custom-mappings.yaml](/docs/elasticgraph-orm/elasticgraph.md#custom-elasticsearch-mapping)

:::

Corresponding document of an Event, when returned from the API will look like shown below. It does not matter which underlying database the information is being fetched from.

```json
{
  "_index": "events",
  "_type": "event",
  "_id": "294464",
  "_version": 4,
  "found": true,
  "_source": {
    "startingDate": 489004200000,
    "tibetan": {
      "description": "\nལ་དཱགས་མི་མང་ནས་ཇི་ལྟར་གསོལ་བ་འདེབས་པ་བཞིན་༧སྤྱི་ནོར་༧གོང་ས་སྐྱབས་མགོན་\n\nཆེན་པོ་མཆོག་ནས་ནང་ཆོས་ངོ་སྤྲོད་སྩལ་།",
      "title": "Sample event"
    },
    "english": {
      "description": "His Holiness the Fourteenth Dalai Lama gives an introduction on basic Tibetan Buddhism in Ladakh.",
      "title": "པོ་མཆོག་ནས་ནང་ཆོས་ངོ་སྤྲོད་སྩལ"
    }
  }
}
```


The data model you set is used to generate the appropriate mappings for ES. This way, EG can be used to automatically create schema in ES.

### Field Encryption and Search in ElasticGraph

Protecting sensitive data is crucial in any application. ElasticGraph offers a powerful feature that allows encryption of specific fields mentioned in the TOML file of the schema. This ensures the confidentiality and integrity of sensitive information stored in your database.

Furthermore, ElasticGraph enables search functionality on encrypted fields in their plaintext form. To achieve this, ElasticGraph utilizes the robust SHA-256 algorithm for deterministic encryption.

For example, if you want to encrypt a mobile number field, you can easily achieve this by simply adding the line `encrypted = true` in the corresponding TOML file.

```yaml
[mobileNumber]
type ="String"
sort = true
encrypted = true
```

## Relationships

You must define the relationships of your data model in `configFolder/schema/relationships.txt`.

The format for specifying relationships in relationship file is

```text
relationNameFromAToB <> relationNameFromBToA
entityTypeA <> entityTypeB //One to one
relationNameFromAToB <> relationNameFromBToA
[entityTypeA] <> entityTypeB //Many to one
relationNameFromAToBs <> relationNameFromBToA
entityTypeA <> [entityTypeB] //One to many
relationNameFromAsToBs <> relationNameFromBsToAs
[entityTypeA] <> [entityTypeB] //many to many
```
*As you can see, when an entity type is surrounded by square brackets [], it means cardinality of many*

:::tip
It is compulsory to maintain relationship name both ways, from Entity A to B, and B to A.* This is so that one can express Graph traversal from both sides.
:::


Some examples
```
speakers <> events
[event] <> [speaker]
sessions <> event
event <> [session]
```

### Linking entities via relation

```js
	es.deep.link({
		e1: {
			_type: ‘event’,
			_id: ‘674’
		},
		e2: {
			_type: session,
			_id: 4
		},
		e1ToE2Relation: ‘sessions’
	})
	.then(console.log)
```

### Un-linking entities via relation

```js
	es.deep.unlink({
		e1: {
			_type: ‘event’,
			_id: ‘674’
		},
		e2: {
			_type: session,
			_id: 4
		},
		e1ToE2Relation: ‘sessions’
	})
	.then(console.log)
```

## Graph Search and Graph analytics

**We use denormalisation to make it fast**
> Settings configFolder/joins/index.txt

Imagine you have a database composed of events, speakers and persons.

And, you wish to do the following two queries.
* Search events by speakers.person.name
* Show countwise breakup of search results on events, based on speakers.person.name (like on ecommerce sites)

> If your tables have only the foreign keys, you will have to do multiple hits to implement such cross table queries. And they will be slow. Depending on your data size, this may take a long long time before the final query result is returned. Also, your database will most probably get under heavy load.

*With ElasticGraph you can denormalize based on simple rule setting and achieve the same result with a single hit to the database. *

By denormalizing (always ensuring latest copy of) the speaker.person.name information within the event object, *during index, update, link or unlink calls*.



How does this work?

By denormalizing (always ensuring latest copy of) the speaker.person.name information within the event object, *during index, update, link or unlink calls*.

For example, here is how ‘event’ may look like in denormalization settings (in the file joins/index.txt)

```yaml
[event]
sessions{title, description}
speakers.person{name}
```

Based on your configuration ElasticGraph works to automatically maintain the denormalised storage of speaker and session data in the event entities. Y
** You only need to link or unlink two entities by a relationship. Everything else is taken care by ElasticGraph. **

#### Maintenance of the denormalised graph state

Here are some scenarios in which the automatic denormalization will trigger in our example database.

* Whenever you update the name of a person, the events where he or she spoke, will also get updated with person’s new name.

* When you index (store) the event for first time in the database, and it contains speakers ids, the speaker’s name will also get copied inside the event entity as it gets stored/indexed.

* When the event is linked to a speaker, the speaker’s name will get copied inside the event entity

* When the event is unlinked from a speaker, the speaker’s id, name etc will get removed from the event entity



#### The Butterfly effect

As you just saw, any update can potentially create a ripple update across entire Graph, for maintaining correct data state as per the denormalisation and also the data dependency rules like union and copy (more on the latter below).

Since this is handled internally by ElasticGraph, it saves the developer from the overhead of maintaining a consistent, denormalised graph state across all updates. His code doesn’t need to save the updated field value at multiple places in the database- a big overhead, lots of confusing code, more bugs... Instead, he simply declares the behavior just once, in a human readable way. After that he leaves it to ElasticGraph to do all the internal bookkeeping to upkeep a correct denormalised graph state all the time.

In ElasticSearch and also in popular SQL stores, we can make use of the JSON style storage and do the joins within one document. In comparison to SQL way of rows, the document way of ES saves storage space and helps in faster analytics also. Have a look at how the denormalized speakers relationship is stored within an ElasticGraph event document.

```json
{
  "_index": "events",
  "_type": "event",
  "_id": "294464",
  "_version": 4,
  "found": true,
  "_source": {
    "speakers": [
      {
        "_id": "c6c35e3b21815a4209054505ac5e1680a954efdf",
        "own": true,
        "fields": {
          "person": {
            "_id": "1",
            "_version": 1,
            "fields": {
              "english": {
                "name": "His Holiness the 14th Dalai Lama"
              },
              "tibetan": {
				  "name" : "ང་ས་སྐུ་ཕྲེང་བཅུ་བཞི་"
			  }
            }
          }
        }
      }
    ]
  }
}
```

## Data dependency implementation

> Note: This strategy is perhaps best applied in write less and read more scenarios.

In many data models, data of an entity in your graph may depend on the data of other related entities. For ex. if a married woman has a new child, the husband also has a new child. And vice versa.

ElasticGraph gives you an easy way to manage complex data dependencies between related entities of your information graph. As any update is made to any Entity in your Graph, ElasticGraph checks if any part of the remaining Graph should be updated by this change as per your data model settings. If yes, it updates the entire affected Graph (Butterfly effect).

For now EG supports two kinds of dependencies - Union from and Copy.

*  **Union from**
> Settings are in configFolder/schema/union.toml

Union from operation can be used to compute and store distinct values, whether relationships or data values, merged from field values of multiple related entities.

This is useful for one to many or many to many relationships. Please look at the following examples to understand.

```yaml
[conference]
speakers = '+talks.speaker' #As soon as a talk is linked to a conferece, or an already linked talk gets linked to a speaker, *the talk’s speaker is also linked to the conference as one of its speakers, if not already linked before*. Vice versa happens if the talk is unlinked to its speaker, or the talk is removed from the conference
topics = '+talks.topics' #As soon as a talk is linked to an conference, or a topic is set to an already linked talk, the talk’s topic is also added to the conference as one of its topics, if not already there. Vice versa happens if the talk is unliked to the conference, or the topic is removed from the talk.
[‘person’]
grandChildren = +‘children.children’ #Whenever a person’s child gets a new child, the new child gets added to the person’s grandchildren
[‘folder’]
fileTypes = ‘+childFolders.fileTypes +childFiles.type’ #Calculate union of all file types existing in the entire folder tree (recursively). Anytime, any file gets added to any child folder in this tree, the type of that file gets unioned with the list of fileTypes of that child folder, and all its parent folders up in the hierarchy.
```

*  **Copy**
> Settings are in configFolder/schema/union.toml

Currently the copy functionality is achieved from within the union configuration.

This is effective for many to one or one to one relations. For ex.

```yaml
[person]
child = "+wife.child +husband.child" #This will ensure copy of child between husband and wife, whenever child is added to any one of the person entities
[file]
permissions = "+folder.permissions" #Whenever a folder’s permissions are updated the underlying files’ permissions are updated automatically. You can still manually override them, without affecting the folder. But whenever the folder’s permissions are updated again, the file’s permissions will get overwritten.
```

## **Read time joins**

This is helpful to create multiple views on the fly, during read time joins

Two ways to specify read time joins:

*  **Approach A:** Create a file in joins folder, and send the name of the file in the JSON query.
	> Settings folder: configFolder/joins
	* For read time joins, you specify name of a join configuration file stored in configFolder/joins. You can specify different joins for same entity in different contexts like read, search etc. The particular view can be referred by the ${filename} in your code.
	* Ex. read.txt or search.txt. You can create multiple such files and refer them
	* Sample configuration in text file (Same as denormalization settings in joins/index.txt)
	```
		[event]
		sessions{title, description}
		speakers.person{name}
		speakers.primaryLanguages{name}
	```

*  **Approach B:** Send the view (join) info in the query as JSON object

	* This gives developer the flexibility to create any views on the fly.

	* Example joins for user who lives in a city belonging to a state

	```json
		{
			"joins": {
			"name": 1,
			"city.name": 1,
			"city.state.name": 1,
			"city": { // Same effect as above two lines
				"name": 1,
				"state": {
					"name": 1
				}
			}
		}
		}
```

Sample API calls

```js
	deep.get({_id:1, _type: ‘event’ , joins: ‘read’});
	deep.get({
		_id:1,
		_type: ‘event’ , joins: {
		"name": 1,
		"city.name": 1,
		"city.state.name": 1
		}}
	);
	deep.search({
		_id:1,
		_type: ‘event’ ,
		query: {"match": {“speakers.person.english.name”: “Dalai Lama”}},
		joins: ‘search’
	})
```

The joined response is returned in same structure as the denormalization join you saw just above. *You can apply joins across any relation depth.*

For read time joins, you specify name of a join configuration file stored in configFolder/joins. You can specify different joins for same entity in different contexts like read, search etc. The joined response is returned in same structure as the denormalization join you saw just above. *You can apply joins across any relation depth.*

## **Multi Linguality**
> Settings file: configFolder/common.toml.

In that set, `supportedLanguages = [‘english’ , ‘tibetan’, ‘thirdLanguage’]`

If your data is in a single language or is language agnostic, then supportedLanguages = []

The fields which are declared multilingual, are stored like this in the _source of the entities.

~~~
"english": {
	"name": "His Holiness the 14th Dalai Lama"
},
"tibetan": {
	"name": "ྋགོང་ས་སྐུ་ཕྲེང་བཅུ་བཞི་པ།"
}
~~~




When creating, updating, searching or getting an entity, you have to specify the full path of every field, including its language. In search and get calls, you specify langs parameter, for the languages in which the data is to be fetched. By default data in all supported languages is fetched.





## **Easy SQL**





English like SQL to get lot of data work done - fast and easy. Even non-programmers can easily learn to do complex work over big data using this.





One can use ESQL for working with EG entities or even pure ES indices.





Its main features are



* Get much done with very less lines of code.

* Much elegant way compared to equivalent Javascript code.





It supports





* Search, get, index, link, unlink, delete.





* Creation of variables and assignment of values. Numbers string, boolean, objects supported





* If/else operations



* break, continue

* Print log



* Looping over array - Async each parallel



* Useful for scanning over a search result or entire index and doing operations.

* Loops can be nested within each other

* Mixing pure JS functions as instructions of the script when the script can not handle the complexity of logic





The grammar of dsl engine is in the source code of ElasticGraph npm. lib/dslEngine/grammar.pegjs



To run the a single statement in EQL you call eg.dsl.execute(statement).

To execute a whole script you call eg.dsl.runScripts(script)

```js
const fillSpeakersTranslatorsAndLinkWithEvent = [
	'iterate over old-contents where {$exist: event_id} as old-content. Get 25 at a time. Flush every 5 cycles. Wait for 100 millis',
	[
		'get event *old-content.event_id',
		'if *event is empty, display "empty event", *old-content.event_id',
		'if *event is empty, stop here',
		'search old-content-to-audio-channel where {content_id: *old-content._id} as cac',
		'async each *cac.hits.hits as old-content-to-audio-channel'
		[
			'get old-audio-channel *old-content-to-audio-channel.audiochannel_id as old-audio-channel', //No need to mention _source or fields. Both places, including top level object will be checked for existence of audiochannelId field
			'search first person where {_id: *old-audio-channel.speaker_id} as person.', //Creates person in index if not found there. Also sets person entity viz id+type as key in ctx.data, query as key with value being result in ctx.data
			//Handle event.speakers/translators. This guy is either a speaker or a translator. Set the relevent linking
			//Initializer
			'roleType is speaker if *old-audio-channel.translation_type is empty. Else is translator',
			'roleFeatures are {person._id: *old-audio-channel.speaker_id, primaryLanguages._id: *old-audio-channel.language_id}',
			//Can include pure JS functions within the script also
			(ctx) => {
				//TODO fix this 'roleFeatures.translationType is *old-audio-channel.translation_type if *roleType is translator.',
				if (ctx.get('roleType') === 'translator') {
				const translationType = ctx.get('old-audio-channel')._source.translation_type
				ctx.get('roleFeatures').translationType = translationType
				}
				return ctx
			},
			'search first *roleType where *roleFeatures as speakerOrTranslator. Create if not exists.',
			'if *speakerOrTranslator is empty, display "empty speaker", *roleFeatures, *roleType',
			'if *speakerOrTranslator is empty, stop here',
			(ctx) => {
				const speaker = ctx.get('speakerOrTranslator')
				const speakerBody = speaker._source || speaker.fields
				const pmName = _.get(_.first(speakerBody.primaryLanguages), 'fields.english.name')
				if (_.isObject(pmName)) {
					debug('throw stopHere error to break the loop', JSON.stringify(speaker))
					throw new Error('stopHere')
				}
			},
			//'display *roleType, *speakerOrTranslator._id, *roleFeatures',
			'link *speakerOrTranslator with *event as events',
		],
	],
	(ctx) => debug('Done ' + n++ + ' iterations')
];
//Now run the script
eg.dsl.execute(fillSpeakersTranslatorsAndLinkWithEvent);
```

## **Performance features**





There are two internal feature which stand behind the awesome performance of ElasticGraph - Collect and Cache.





### Collect





A typical program, during runtime, sends multiple queries to the database from different places. In case of using ES from NodeJS, each query entails an HTTP hit. Each such hit is an overhead on the system. Both to the Nodejs client and the ES cluster.





This feature allows you to save this overhead to achieve greater system speed and performance. Using this you can collect multiple queries and when a specified timeout or batch size threshold is reached, you send them to ES *as a single bulk request*. You can collect multiple queries from any parts of your middle ware.
```js
     es.{methodName}.collect({methodParams})
```
> Sample settings in configFolder/collect.toml

```yaml
[batchSizes]
msearch = 200
index = 200
mget = 200
get = 200
search = 200
bulk = 200
[timeouts] #in milliseconds
index = 30
get = 30
bulk = 30
mget = 30
msearch = 30
search = 30
```


*Each type of query is collected in a batch till any one of the batchSize threshold or the timeout threshold is reached.*

The supported es methods are get, mget, search, msearch, bulk and index.
For ex. es.get.collect({_id:..,_type:..}).then()


*The deep functions and esql scripts of EG internally use this feature.* This feature is available as part of the npm module.


### Cache

In the deep EG operations, a cache is used like a temporary EG index in memory. Hit to ES for each get/search query is done only once. After that each retrieved entity or document, and search result, is kept in the in memory store. Further, the graph update operations are also done in memory. Once the time to flush the updated graph to ES has come, one can call cache.flush()
All the in-memory-updated entities will be written to ES indices, and all cache data will be cleared.

## **Limitations**

Currently it does not support transactions or authorization (as of today)

ElasticSearch also does not provide transactions or acidity. In EG, since a single update also updates rest of the graph, but first in memory, and then altogether flushed into ElasticSearch, it is possible that another process may have updated a part of updated graph in meantime. If so flushing of this subgraph update will throw an error because someone already updated part of the subgraph before. This will lead to a partial subgraph update.

When using EG for denormalisation and dependency management, one has to be OK with possible errors in maintenance of the graph state.* If you need strict ACID behavior in your application, its best to use a transactional database as your primary datastore and use ES as your secondary datastore for read/search/analytic queries at scale and speed.*
> Soon EG, will provide both kind of data store support out of the box.

## **Deep API**

You can find the API and docs in the CRUD folder of the Postman collection shared [here](https://app.swaggerhub.com/apis/M4195/ElasticGraph/1.0.0)

> A full API doc shall be made soon.

## **Summing it up**

This project started with the .collect() feature sometime in 2015, from there it has evolved to include the deep API, denormalization, esql and other features. And now it is expanding to become a very powerful full fledged Microservice Platform. We have catered to four clients so far, and also built our own admin panel using the same.

Built with deep thought from the Himalayas.

---- Content from: D:\gs-documentation\docs\microservices-framework\datasources\datasource-plugins\Kafka Datasource.md ----

<!-- Kafka is your dynamic data stream and event maestro! As a data source, it floods your systems with real-time insights, turning data into decision-making gold. And when it comes to event sourcing, Kafka orchestrates a symphony of real-time events that power your applications and spark innovation. Experience the future of data and event handling with Kafka.  -->

Kafka is a versatile messaging system designed to securely transfer data between various systems. Its functionality can be tailored through configuration, allowing it to serve as a reliable conduit for real-time event tracking or even function as a replicated distributed database. While it's often colloquially labeled as a queue, it's more precisely described as a hybrid system that combines characteristics and trade-offs from both queue and database systems.

A brief description of how to use Kafka plug-in in our godspeed framework as Data Source as Event Source. 

## Steps to use kafka plug-in in godspeed framework:

## How to Use
**a. ** Create a godspeed project from the CLI , open the created project in vscode and then add the plugin from the CLI of vscode, select the `@godspeedsystems/plugins-kafka-as-datasource-as-eventsource` to integrate the plugin.

```
> godspeed plugin add
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌──────┬────────────────────────────────────┬────────────────────────────────────────────────────────────────────┐
│      │ Name                               │ Description                                                        │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│  ◯   │ prisma-as-datastore                │ Prisma as a datasource plugin for Godspeed Framework.              │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│  ◯   │ aws-as-datasource                  │ aws as datasource plugin for Godspeed Framework                    │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│  ◯   │ excel-as-datasource                │ excel as datasource plugin for Godspeed Framework                  │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│  ◯   │ mailer-as-datasource               │ mailer as datasource plugin for Godspeed Framework                 │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│ ❯◯   │ kafka-as-datasource-as-eventsource │ kafka as datasource-as-eventsource plugin for Godspeed Framework   │
└──────┴────────────────────────────────────┴────────────────────────────────────────────────────────────────────┘
```

### Use as Datasource (Producer)
**1. ** Update configuration file based on your requirements in `src/datasource/kafka.yaml` file.
```yaml title=src/datasources/kafka.yaml
type: kafka 
clientId: "kafka_proj"
brokers: ["kafka:9092"]
```

**2. ** In the event, we establish an HTTP endpoint that accepts parameters such as the topic name and message content. When this endpoint is invoked, it triggers the `datasource.kafka.producer` function. This function, in turn, takes the provided topic name and message as input arguments and performs the task of publishing the message to the specified Kafka topic.
```yaml title=src/events/kafka_pub.yaml
# event for Publish
'http.post./kafka-pub':
  fn: kafka-publish
  body:
    content:
      application/json:
        schema:
          type: object
          properties:
            message:
              type: string
          required: ['message']
  responses:
    200:
      content:
        application/json:
          schema:
            type: object
            properties:
              name:
                type: string
```

**3. ** In workflow we need to mension `datasource.kafka.producer` as function `fn` to produce data.
```yaml title=src/functions/kafka-publish.yaml
id: kafka-publish
summary: kafka publish message
tasks:
    - id: publish
      fn: datasource.kafka.producer
      args:
        topic: "publish-producer1"
        message: <% inputs.body.message%>
```

### Use as EventSource (Consumer)
**1. ** Update configuration file based on your requirements in `src/eventsources/kafka.yaml`.
```yaml title=src/eventsources/kafka.yaml
type: kafka
groupId: "kafka_proj"

```

**2. ** To use Consumer we need to follow the below event key format.
```yaml title=src/events/kafka_pub.yaml
kafka.{Topic}.{GroupId}: 
```
The consumer event is triggered whenever a new message arrives on the specified topic. Upon triggering, it retrieves the incoming message and forwards it to the `kafka_consume` function. Inside this function, the incoming message is processed, and the result is then returned.

``` yaml title=src/events/kafka_pub.yaml
# event for consume data from Topic
kafka.publish-producer1.kafka_proj: // event key
  id: kafka__consumer
  fn: kafka_consume
  body:
    description: The body of the query
    content:
      application/json: 
        schema:
          type: string
```
**3. ** kafka workflow for consumer
```yaml title=src/functions/kafka_consume.yaml
# function for consume data
id: kafka-consumer
summary: consumer
tasks:
    - id: set_consumer
      fn: com.gs.return
      args: <% inputs %>
```

## Project Structure:

After implementing Kafka plugin, your project structure will look like this:

```
.
├── src
│   ├── datasources
│   │   ├── types
│   │   │    └── kafka.ts                    # Custom datasource logic
│   │   └── kafka.yaml                       # Datasource configuration
│   ├── events
│   │   ├── kafka_publish_event.yaml         # Event to trigger the Kafka publish
│   │   └── kafka_consumer_event.yaml        # Event to trigger the Kafka consume
│   ├── eventsources
│   │   └── kafka.yaml                       # Eventsource configuration
│   └── functions
│       ├── kafka-publish.yaml               # Workflow to publish message
│       └── kafka-consume.yaml               # Workflow to consume message
```

## Reference links
**- ** [Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/kafka-as-datasource-as-eventsource)   
**- ** [Issue Tracker](https://github.com/godspeedsystems/gs-plugins/issues)      
**- ** [npm package](https://www.npmjs.com/package/@godspeedsystems/plugins-kafka-as-datasource-as-eventsource)


---- Content from: D:\gs-documentation\docs\microservices-framework\datasources\datasource-plugins\Memcached Datasource.md ----

The Godspeed mem-cache plugin provides caching interfaces, allowing developers to seamlessly use in-memory cache within the Godspeed framework.

## How to add mem-cache plugin in your project
**- ** Create a godspeed project from the CLI and add the mem-cache plugin from the CLI and select the `@godspeedsystems/plugins-mem-cache-as-datasource` to integrate the plugin.

```
macbookpro@MacbookPros-MBP gs-test-project % godspeed plugin add   


       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝


? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌────┬───────────────────────────────────┬─────────────────────────────────────────────────────────────────┐
│    │ Name                              │ Description                                                     │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│  ◯ │ kafka-as-datasource-as-eventsource│ kafka as datasource-as-eventsource plugin for Godspeed Framework│
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│  ◯ │ cron-as-eventsource               │ Cron as eventsource plugin for Godspeed Framework               │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│ ❯◯ │ mem-cache-as-datasource           │ mem-cache as datasource plugin for Godspeed Framework           │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│  ◯ │ elasticgraph-as-datasource        │ elasticgraph as datasource plugin for Godspeed Framework        │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│  ◯ │ axios-as-datasource               │ Axios as datasource plugin for Godspeed Framework               │
└────┴───────────────────────────────────┴─────────────────────────────────────────────────────────────────┘

```
**- ** You will find the files in your project related to the plugin at `src/datasources/types/mem-cache.ts` and `src/datasources/mem-cache.yaml`.
```yaml title=src/datasources/mem-cache.yaml
type: mem-cache
```

### Sample usage
Create two events and two function handlers for each event by the name helloworld2 and helloworld3 respectively.
```yaml
# Events
"http.get./helloworld2":
  fn: helloworld2
"http.get./helloworld3":
  fn: helloworld3

# Functions (Helloworld2 workflow)
id: helloworld2_workflow
tasks:
  - id: helloworld2_workflow_first_task
 
    fn: com.gs.transform
    args:
      name: helloworld2
    caching:
      key: xyz
      # datasource: memcache #This field should be definitely set if config/default.caching is not set. Else is optional
      # noRead: true #if this is set get(key) method will not be called for this task
      # noWrite: true #the result of this task will not be written, even if cache_on_failure is set to true. i.e. set() method will not be called
    

# Functions (Helloworld3 workflow)
id: helloworld3_workflow
tasks:
  - id: helloworld3_workflow_first_task
    caching:
      key: abc
      invalidate: xyz #helloworld2 key
      # noRead: true #if this is set get(key) method will not be called for this task
      # noWrite: true #the result of this task will not be written, even if cache_on_failure is set to true. i.e. set() method will not be called
      datasource: mem-cache #This field should be definitely set if config/default.caching is not set. Else is optional
    fn: com.gs.transform
    args:
      name: helloworld3
```

## Plugin Components

The plugin consists of the following key components:

### 1. `DataSource` Class

- This class extends `GSCachingDatasource`, a base class provided by the Godspeed framework for creating data sources.

- It initializes a client which provides an object to use as in-memory cache.

- The `set` method is used to set the key and value of the cache.

- The `get` method is used to get value from the cache.

- The `del` method is used to delete value from the cache.

### 2. Constants

- `SourceType`: A constant representing the source type of the plugin, which is 'DS' (data source).

- `Type`: A constant representing the loader file of the plugin. The final loader file will be located in the 'types' directory and named `${Type.js}`, where `Type` is 'mem-cache' in this case.

- `CONFIG_FILE_NAME`: In the context of a data source, this constant also serves as the data source name. In this plugin, it is set to 'mem-cache'.

### Conclusion

The Godspeed mem-cache Plugin is a valuable addition to the Godspeed framework, providing a standardized way to use in-memory cache.

We value your feedback and contributions. If you have any questions, suggestions, or encounter issues while using the plugin, please reach out to us. Your insights and ideas help us enhance and improve this plugin for the entire Godspeed community.

We're excited to see how you leverage the Godspeed mem-cache Plugin in your projects and look forward to collaborating with you to make your applications even more powerful. Happy coding!

## Reference links
**- ** [Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/mem-cache-as-datasource)   
**- ** [Issue Tracker](https://github.com/godspeedsystems/gs-plugins/issues)      
**- ** [npm package](https://www.npmjs.com/package/@godspeedsystems/plugins-mem-cache-as-datasource)


---- Content from: D:\gs-documentation\docs\microservices-framework\datasources\datasource-plugins\Mongoose Datasource.md ----

Mongoose as a datasource: It provides seamless integration with MongoDB through the Mongoose library. MongoDB is a popular NoSQL database, and with this plugin, you can harness the power of Mongoose to model your data, perform queries, and interact with MongoDB in a structured and efficient manner.

## How to Use
**- ** Open the godspeed project in vscode and then add the plugin from the CLI of vscode, select the `@godspeedsystems/plugins-mongoose-as-datastore` to integrate the plugin.
```
> godspeed plugin add
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌──────┬────────────────────────────────────┬────────────────────────────────────────────────────────────────────┐
│      │ Name                               │ Description                                                        │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│ ❯◯   │ mongoose-as-datastore                │ Mongoose as a datasource plugin for Godspeed Framework.              │
└──────┴────────────────────────────────────┴────────────────────────────────────────────────────────────────────┘
```
**- ** The plugin can also be directly installed by running `npm i @godspeedsystems/plugins-mongoose-as-datastore` command.   
**- ** You will find two files in your project related to the Prisma plugin at `src/datasources/types/mongoose.ts` and `src/datasources/mongoose.yaml`

```typescript title=src/datasources/types/mongoose.ts
import { DataSource } from '@godspeedsystems/plugins-mongoose-as-datastore';
export default DataSource;
```

```yaml title=src/datasources/mongoose.yaml
type: mongoose
successResponseCodes: #default response codes for success responses
  create: 201
  find: 200
  findOne: 200
  aggregate: 200
  findOneAndUpdate: 201
  findOneAndDelete: 202
```
  ![Alt text](../../../../static/img/mongoose_folder_structure.png)
- You can keep the file by any name. This file is used to initialize a mongoose datasource instance. Whatever is the name of the file, you will need to invoke
the mongoose datasource commands by the same name. Also your models will be needed to be kept in a folder with the same name as your yaml file (i.e. your datasource instance name). For example mongoose1.yaml would mean
calling `fn:datasources.mongoose1.<Model_Name>.<Function_Name>` from yaml workflows and 
`ctx.datasources.mongoose1.<Model_Name>.<Function_Name>` from TS/JS files. Also you will need to create a folder `datasources/mongoose1/models` and keep your models there as detailed below.

- You can override the default response codes for success cases for different methods by putting them in the datasource instance's yaml file

### Setting up Mongoose models
This datasource loads the [Mongoose models](https://mongoosejs.com/docs/models.html) from `datasources/<datasource_name>/models` folder.

![Alt text](../../../../static/img/mongoose_folder_structure.png)

**Example Mongoose model file**   
These files are stored in `datasources/<datasource_name>/models` folder Your TS or JS file should export as following
```typescript
module.exports = {
    type: 'SomeModel', //The name by which you will access methods of this collection/model
    model: SomeModel //The Mongoose Model
};
```
An example Mongoose model file
```typescript
const { model, Schema, Document } =require('mongoose');

const SomeModelSchema = new Schema(
  {
    partnerName: {
      type: String,
      required: true,
    },
    productType: {
      type: String,
      required: true,
    },
    apiType: {
      type: String,
      required: true,
    },
    method: {
      type: String,
      required: true,
    },
    api: {
      type: String,
      required: true,
    },
    code: String,
    headers: Schema.Types.Mixed,
    payload: Schema.Types.Mixed,
    response: Schema.Types.Mixed,
    isDynamicUrl: Boolean,
    expectedResponseStatusCode: Number,
  },
  { timestamps: true }
);

const SomeModel = model('some-model', SomeModelSchema, 'some-model');
module.exports = {
    type: 'SomeModel', //The name by which you will access methods of this collection/model
    model: SomeModel
};
```

### Sample workflow
When calling any api function it will be called as `fn:datasources.mongoose1.<Model_Name>.<Function_Name>` from yaml workflows and 
`ctx.datasources.mongoose1.<Model_Name>.<Function_Name>` from TS/JS files.
The arguments to any `Function_Name` are to be passed in two ways:

**1. ** Only the first arg of the function as accepted by the API.
  ```yaml
    id: mongoose_workflow
    tasks:
      - id: first_task
        fn: datasource.mongoose.SomeModel.findOne
        args: {"name": "mastersilv3r"} #Fun fact: YAML acceptes JSON as well. 
  ```
**2. ** Most Mongoose functions accept multiple args. To pass all args to an API call, send an array of the acceptable args. This array is spread and passed to the API call
  ```yaml
    id: helloworld2_workflow
    tasks:
      - id: helloworld2_workflow_first_task
        fn: datasource.mongoose.SomeModel.findOne
        args: #as an array
          - name: mastersilv3r #search clause: First argument
          - 'name age' #The projection: second argument
          - {} # Options: the third argument
  ```
**3. ** Calling from a TS/JS workflow works same as any other datasource
```typescript
import { GSContext, GSDataSource, GSStatus } from "@godspeedsystems/core";

// Option 1: 
// Calling function on Mongoose model directly and sending data with status code
// Here you handle errors/try/catch yourself
export default async function (ctx: GSContext, args: any) {
    const ds: GSDataSource = ctx.datasources.mongoose;
    // If this function is called by another function (yaml or JS), the caller may have passed args object. In case not, then initialize args yourself.
    args = args || [{name: 'mastersilv3r'}, 'name age', {}];
    try {
      const response = ds.SomeModel.findOne(...args);
      return {
        code: 200,
        data: response
      }
      //return response; Framework will automatically add code: 200 in case of HTTP
    } catch (err: any) {
      ctx.childLogger.error(`Found error in Mongoose query ${err}`);
      return {
        code: 500,
        data: {
          error: err,
          message: err.message
        }
      }
    }
}

//Option 2: Handles response codes, errors creation of GSStatus directly
export default async function (ctx: GSContext, args: any) {
    const ds: GSDataSource = ctx.datasources.mongoose;
    args = args || [{name: 'mastersilv3r'}, 'name age', {}];
    //Will need to set a meta object in the args to pass entitType and method
    args.meta = {entityType: 'SomeModel', method: 'findOne'};
    const response = await ds.execute(ctx, args);
    // response.code will be 500 in case of error, and 200 otherwise
    // In case or error, response.data will have message and error keys, like we saw 
    // in the above TS example
    return response;
}
```

### Error response
When a call has an error the datasource returns following `GSStatus`.
```yaml
    code: 500
    success: false
    data: 
        message: Internal Server Error
```

### Run the service
- Set an environment variable `MONGO_URL` as your connection string to running mongodb instance.
  For example, setting via a unix shell.
  ```shell
    export MONGO_URL='mongodb+srv://<user_name>:<password>@cluster0.xyzabc.mongodb.net/?retryWrites=true&w=majority'
  ```
- From your command line run your service in the auto-watch mode
  ```bash
  godspeed serve
  ```

## Reference links
**- ** [Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/mongoose-as-datasource)   
**- ** [Issue Tracker](https://github.com/godspeedsystems/gs-plugins/issues)      
**- ** [npm package](https://www.npmjs.com/package/@godspeedsystems/plugins-mongoose-as-datasource)



---- Content from: D:\gs-documentation\docs\microservices-framework\datasources\datasource-plugins\Nodemailer Datasource.md ----

Nodemailer as a datasource: Amp up your communication game by using a mailer as a powerful data source. Connect seamlessly to send information through emails. Transform your app into a messaging maestro, unlocking a world of possibilities. Ready to send your data soaring through the digital mail stream? 📧✨

Sending emails in your Node.js application has never been smoother. The Godspeed Nodemailer Plugin provides seamless integration between the robust Godspeed framework and Nodemailer, the go-to solution for email delivery in Node.js.

## Features

**- Effortless Setup:** Get up and running in minutes with our easy-to-follow setup guide.    
**- Dynamic Templating:** Craft personalized emails with dynamic content using popular templating engines.    
**- Error Resilience:** Robust error handling ensures reliable email delivery, even in challenging scenarios.   
**- Scalable and Secure:** Designed for scalability and security, so your email system can grow with your application.

Whether you're sending transactional emails, newsletters, or notifications, this plugin empowers you to deliver messages with Godspeed. Let's elevate your email game together!

## Example usage

### Config
```yaml title=src/datasources/mail.yaml
type: mail
user: 'godspeed@gmail.com'
pass: 'rmeb bjak xcam xkub'
```

### Event for Producer
```yaml title=src/events/mail_send_event.yaml
http.post./mail:
  summary: sending_mail
  description: sending_mail
  fn: mail_send
  body:
      type: object
      properties:
        name:
          type: string
  responses:
    200:
      content:
        application/json:
          schema:
            type: object

```

### Workflow to send mail
```yaml title=src/functions/mail_send.yaml
summary: send
tasks:
  - id: send_mail
    fn: datasource.mail.send
    args: 
      from: 'sender@gmail.com'
      to: 'receiver@gmail.com'
      subject: 'Hello from Godspeed'
      text: 'Have a Nice day'
  
```

## Reference links
**- ** [Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/mailer-as-datasource)   
**- ** [Issue Tracker](https://github.com/godspeedsystems/gs-plugins/issues)      
**- ** [npm package](https://www.npmjs.com/package/@godspeedsystems/plugins-mailer-as-datasource)


---- Content from: D:\gs-documentation\docs\microservices-framework\datasources\datasource-plugins\Overview.md ----

Godspeed framework adopts a pluggable approach that empowers you to define data sources effortlessly. Our framework graciously provides an interface that caters to diverse data source needs. Here's a glimpse into the exceptional datasource plugins crafted by our core framework team.

To seamlessly integrate these plugins into your project, simply run the command:

```bash
$  godspeed plugin add
```
```bash


       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝


? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌──────┬────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
│      │ Name                                   │ Description                                                                    │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│ ❯◯   │ cron-as-eventsource                    │ Cron as eventsource plugin for Godspeed Framework                              │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ aws-as-datasource                      │ aws as datasource plugin for Godspeed Framework                                │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ excel-as-datasource                    │ excel as datasource plugin for Godspeed Framework                              │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ mangoose-as-datasource                 │ mongoose-as-datasource as datasource plugin for Godspeed Framework             │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ mailer-as-datasource                   │ mailer as datasource plugin for Godspeed Framework                             │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ kafka-as-datasource-as-eventsource     │ kafka as datasource-as-eventsource plugin for Godspeed Framework               │
└──────┴────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘

```

you can specify plugin name to add directly to your project

```sh
godspeed plugin add <plugin-name>
```

---- Content from: D:\gs-documentation\docs\microservices-framework\datasources\datasource-plugins\Prisma Datasource.md ----

---
# Display h2 to h5 headings
toc_min_heading_level: 2
toc_max_heading_level: 4
---
**- ** [Prisma Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/prisma-as-datastore)   
     
**- ** [npm package](https://www.npmjs.com/package/@godspeedsystems/plugins-prisma-as-datastore)

## Overview
Prisma-as-datasource plugin provides functionality to access most popular databases like, PostgreSQL, MySQL, SQL Server, SQLite, MongoDB, CockroachDB, Planetscale and MariaDB through [Prisma ORM](https://www.prisma.io/docs).

**"Prisma: Bridging Databases for Seamless Development. One Toolkit, Any Database."**

Prisma is a modern and open-source database toolkit that simplifies database access for developers. It offers a strongly typed query builder, schema migrations, support for various databases, real-time data synchronization, and enhanced security, making it a powerful tool for efficient and secure database interactions in web applications.

## How to add plugin
### Add plugin
Create a godspeed project from the CLI , open the created project in vscode and then add the plugin from the CLI of vscode, select the `@godspeedsystems/plugins-prisma-as-datastore` to integrate the plugin.

```
> godspeed plugin add
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌──────┬────────────────────────────────────┬────────────────────────────────────────────────────────────────────┐
│      │ Name                               │ Description                                                        │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│ ❯◯   │ prisma-as-datastore                │ Prisma as a datasource plugin for Godspeed Framework.              │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│  ◯   │ aws-as-datasource                  │ aws as datasource plugin for Godspeed Framework                    │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│  ◯   │ excel-as-datasource                │ excel as datasource plugin for Godspeed Framework                  │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│  ◯   │ mailer-as-datasource               │ mailer as datasource plugin for Godspeed Framework                 │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│  ◯   │ kafka-as-datasource-as-eventsource │ kafka as datasource-as-eventsource plugin for Godspeed Framework   │
└──────┴────────────────────────────────────┴────────────────────────────────────────────────────────────────────┘
```

### Related files
You will find a file in your project related to the Prisma plugin at `src/datasources/types/prisma.ts`.
```typescript title=prisma.ts
import { DataSource } from '@godspeedsystems/plugins-prisma-as-datastore';
export default DataSource;
```

## How to use

### 1. Write a prisma schema

  1.1 You can start using this plugin by writing a [prisma schema](https://www.prisma.io/docs/orm/prisma-schema). For this you need to create a file with .prisma extension inside `src/datasources/`.

  1.2 Set the url field of the datasource block in your schema to your database connection URL as shown below:

  src/datasources/schema.prisma
  ```
    datasource db { 
    provider = "mysql"      // name of database provider
    url      = env("DB_URL")  // DB_URL string will be added in .env file
    }
  ```
  Set provider to the type of database you are using. In this case it’s mysql. The url property will take the value of the connection url which is defined in the .env file.

### 2. Set your Database Connection URL

Set your Database Connection URL as environment variable in .env file as per the format. The format of the connection URL for your database depends on the [database](../../databases/Overview.md) you use. For PostgreSQL, it looks as below

 DB_URL = postgresql://USER:PASSWORD@HOST:PORT/DATABASE
 
 The parts spelled all-uppercased are placeholders for your specific connection details
 
 Example Connection String
  ```
    DB_URL = "postgresql://johndoe:password@localhost:5432/mydb?schema=public"
  ```
### 3. Generate data models

The next step is to generate or define the data models. Prisma uses the connection url you provided to connect to the database. 

#### 3.1 If you have an existing database

To connect with your existing database, first install prisma and run prisma db pull command by giving path of your schema.prisma file.
```
npm install prisma --save-dev

prisma db pull --schema = src/datasources/schema.prisma
```

If the command has run successfully Prisma will generate models from your database server and save in schema.prisma file. If the Prisma schema is new to you, have a look at their [documentation](https://www.prisma.io/docs/getting-started).

#### 3.2 If you don't have an existing database,

Then add the data models to your Prisma schema in datasources/schema.prisma as:
### Sample prisma schema

```
datasource db {
  provider = "PostgreSQL"    // database provider name which you are using
  url      = env("DB_URL")   // DB_URL is the name of env variable
}
generator client {
  provider = "prisma-client-js"
  output = "./prisma-clients/dbName"
  previewFeatures = ["metrics"]
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}

```
:::tip  Support for multiple prisma schema
:::
By default, only single prisma schema can be created in a project that can use only one database. To support multiple prisma schemas for different databases, you need to add `output` key in `generator client` block as given in the above sample prisma schema. 

### 4. Generate prisma client

Run `godspeed prisma prepare`. It will generate your prisma client for given schema and will place the generated client in the `src/datasources/prisma-clients/` folder. This is achieved internally by `prisma generate` command. 
It will also setup the provided schema on database. This is achieved internally by the command `prisma db push`

  ```bash
    $ godspeed prisma prepare
  ```
Once you [generated prisma client](#generate-prisma-client), multiple clients get generated in `src/datasources/prisma-clients` directory. Godspeed automatically loads all the clients present in this directory.

### Generate CRUD APIs
You can generate the CRUD API'S by entering the below command:
  ```bash
    godspeed gen-crud-api
  ```
* This command will generate the crud apis based on the sample schema provided at ./src/datasources/schema.prisma

* You can now view events and workflows generated under events and functions folder. They follow a structure similar to the APIs below.

### Sample API
If your schema name is mysql.prisma and model name if 'post', then your event and workflow to fetch data from the database, will look like :
```yaml title = src/events/post.yaml
http.get./mysql/post/{id}:
  summary: Fetch Post
  description: Fetch Post from database
  fn: com.biz.mysql.post.one
  params:
    - name: id
      in: path
      required: true
      schema:
        type: string
  responses:
    content:
      application/json:
        schema:
          type: object
```

```yaml title= src/functions/com/biz/post/one.yaml
summary: Fetch Post
tasks:
  - id: mysql_post_one
    fn: datasource.mysql.Post.findUnique
    args:
      where:
        id: <% inputs.params.id %>
```

### Database Encryption
Godspeed provides AES-256 GCM both way deterministic hashing encryption in Prisma plugin. You can apply encryption only on `String` type fields.

#### Annotate prisma schema
In your prisma schema, add `/// @encrypted` annotation to the fields you want to encrypt.

<details>
<summary>sample schema to encrypt email field</summary>

```prisma title=src/datasources/mongo.prisma
datasource db {
  provider = "mongodb"
  url      = env("MONGO_TEST_URL") //Connection string can be found in the .env file, you can add your own database connection string
}

generator client {
  provider = "prisma-client-js"
  output = "./prisma-clients/mongo"
}

model User {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  createdAt DateTime @default(now())
  email     String   @unique  /// @encrypted
  name      String?
  role      Role     @default(USER)
  posts     Post[]
}

model Post {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  published Boolean  @default(false)
  title     String
  author    User?    @relation(fields: [authorId], references: [id])
  authorId  String   @db.ObjectId
}

enum Role {
  USER
  ADMIN
}
```

</details>

#### Add secret
You can specify secret in `prisma_secret` variable in [config environment variables](../../config-and-mappings/config.md/#custom-environment-variablesyaml).

### Database Authorization
The plugin provides rows and columns level authorization access as explained in [Authorization](../../authorization/authz-usecases.md#d-restricting-datastore-access). If you are not allowed to access something, then empty data is returned.   
**- **empty rows (e.g. in case where query trespasses access boundaries)   
**- **empty fields (e.g. in case all the fields in the query are not allowed to access)    


:::info
Check the below clauses which are available in this plugin and provides database level restricted access. For further enhancements and updates in database access, check this [Github issue](https://github.com/godspeedsystems/gs-plugins/issues/162). 
:::

#### where
Additonal row level access to be applied on the DB query. For example, check below a sample authz instruction:
```yaml
authz: 
  - id: authz_task_1
    summary: return access columns
    fn: com.gs.transform
      args:
        can_access: 
          - col1
          - col2
        no_access:
          - col3
        where:
          tenant: <% inputs.headers.client_id %>
```
Here, `where` clause restricts returning only those rows where this condition is true.

#### select
Additional columns which should be returned in the DB query.

#### can_access
Columns which are allowed to access. When can_access is present no_access will be ignored.

#### no_access
Columns which are not allowed to access.

:::note Remember
If no_access/can_access is set, then you will not be able to specify:  
**a) ** where clause on columns not allowed. This includes direct field match, and nested AND and OR queries.       
**b) ** select clause on columns not allowed.
:::

<details>
<summary>Sample workflow with inline authz instruction</summary>
In the below workflow with inline authz instruction can_access, no_access and where conditions are provided. These conditions will be applied while fetching author details.

```yaml title=fetch_author.yaml
summary: Fetch author
tasks:
  - id: fetch_author
    fn: datasource.mysql.author.findUnique
    authz:
      - fn: com.gs.transform
        args:
          # can_access: 
          #   - col1
          #   - col2
          no_access:
            - col3
          where:
            tenant: <% inputs.headers.client_id %>
    args:
      where:
        id: <% inputs.params.id %>
```
</details>

<details>
<summary>Sample workflow calling a separate authz workflow</summary>

```yaml title=fetch_author.yaml
summary: Fetch author
tasks:
  - id: fetch_author
    fn: datasource.mysql.author.findUnique
    authz:
      - fn: authz_wf
        args: <% inputs %>
    args:
      where:
        id: <% inputs.params.id %>
```

In the below authz workflow can_access, no_access and where conditions are provided. These conditions will be applied while fetching author details.
```yaml title=authz_wf.yaml
summary: authz workflow
  - id: authz_task_1
    summary: return access columns
    fn: com.gs.transform
      args:
        can_access: 
          - col1
          - col2
        # no_access:
        #   - col3
        where:
          tenant: <% inputs.headers.client_id %>
```
</details>

## Reference links
**- ** [Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/prisma-as-datastore)   
**- ** [Issue Tracker](https://github.com/godspeedsystems/gs-plugins/issues)      
**- ** [npm package](https://www.npmjs.com/package/@godspeedsystems/plugins-prisma-as-datastore)


---- Content from: D:\gs-documentation\docs\microservices-framework\datasources\datasource-plugins\Redis Datasource.md ----

Redis as a datasource: Elevate your data game with the speed and efficiency of Redis. Use it as a powerhouse for caching, real-time analytics, and lightning-fast data retrieval. Embrace the key-value magic to supercharge your application's performance. Ready to Rediscover efficiency? 🚀

The Godspeed Redis Plugin provides integration with Redis, allowing developers to seamlessly interact with Redis databases within the Godspeed framework. This plugin simplifies the process of working with Redis data, providing a standardized way to perform common Redis operations.   

You can use redis datasource in caching also. Check [caching](../caching.md) for more information.

## How to add Redis plugin in your project   

**a. ** Create a godspeed project from the CLI and add the Redis plugin the plugin from the CLI and select the `@godspeedsystems/plugins-redis-as-datasource` to integrate the plugin.   

```
macbookpro@MacbookPros-MBP gs-test-project % godspeed plugin add   


       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝


? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌────┬───────────────────────────────────┬─────────────────────────────────────────────────────────────────┐
│    │ Name                              │ Description                                                     │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│  ◯ │ kafka-as-datasource-as-eventsource│ kafka as datasource-as-eventsource plugin for Godspeed Framework│
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│  ◯ │ cron-as-eventsource               │ Cron as eventsource plugin for Godspeed Framework               │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│ ❯◯ │ redis-as-datasource               │ redis as datasource plugin for Godspeed Framework               │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│  ◯ │ elasticgraph-as-datasource        │ elasticgraph as datasource plugin for Godspeed Framework        │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│  ◯ │ axios-as-datasource               │ Axios as datasource plugin for Godspeed Framework               │
└────┴───────────────────────────────────┴─────────────────────────────────────────────────────────────────┘

```

**b. ** You will find the files in your project related to the Redis plugin at `src/datasources/types/redis.ts` and `src/datasources/redis.yaml`.


### 1. redis config
```yaml title=src/datasources/redis.yaml
type: redis
url: redis://alice:foobared@awesome.redis.server:6380

```
Configure your Redis data source with connection string. 

### 2. Get a Value
Workflow to get a value from redis.
```yaml
id: get_redis_value
tasks:
  - id: get_task
    fn: datasource.redis.get
    args:
      key: 'example_key'
```

### 3. Set a Value
Workflow to set a value in redis.
```yaml
id: set_redis_value
tasks:
  - id: set_task
    fn: datasource.redis.set
    args:
      key: 'example_key'
      value: 'example_value'
```

## How it helps

The Godspeed Redis Plugin offers the following benefits:

** 1. Redis Integration:** The plugin abstracts away the complexities of setting up a Redis client, making it effortless to connect to Redis databases and perform operations.

**2. Unified Data Source:** Developers can use a uniform API to define data sources that interact with Redis. This enhances consistency and ease of use across different parts of the application.

**3. Error Handling:** The plugin includes robust error handling, allowing developers to gracefully handle scenarios such as connection issues, key not found, and other Redis-related errors.

**4. Integration with Godspeed Core:** The plugin seamlessly integrates with the Godspeed Core library, aligning with the principles of the Godspeed framework and enabling streamlined event-driven workflows.

## Plugin Components

:::info
You can deep dive into the plugin code [here](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/redis-as-datasource)
:::

The plugin consists of the following key components:
### 1. `DataSource` Class
- This class extends `GSDataSource` a base class provided by the Godspeed framework for creating data sources.
- It initializes a Redis client to interact with Redis databases based on the provided configuration options.

- The `execute` method is used to define how the plugin should perform Redis operations. It maps incoming parameters to Redis commands, processes the operation, and handles various response scenarios.

### 2. Constants
- `SourceType`: A constant representing the source type of the plugin, which is 'DS' (data source).

- `Type`: A constant representing the loader file of the plugin. The final loader file will be located in the 'types' directory and named `${Type.js}`, where `Type` is 'redis' in this case.

- `CONFIG_FILE_NAME`: In the context of a data source, this constant also serves as the data source name. In this plugin, it is set to 'redis'.

- `DEFAULT_CONFIG`: A default configuration object with Redis options like host, port, and other settings.


## Conclusion

The Godspeed Redis Plugin is a valuable addition to the Godspeed framework, providing a standardized way to interact with Redis databases. With this plugin, you can effortlessly perform Redis operations, handle responses, and streamline data storage within your applications.

We value your feedback and contributions. If you have any questions, suggestions, or encounter issues while using the plugin, please reach out to us. Your insights and ideas help us enhance and improve this plugin for the entire Godspeed community.

We're excited to see how you leverage the Godspeed Redis Plugin in your projects and look forward to collaborating with you to make your applications even more powerful. Happy coding!

## Reference links
**- ** [Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/redis-as-datasource)   
**- ** [Issue Tracker](https://github.com/godspeedsystems/gs-plugins/issues)      
**- ** [npm package](https://www.npmjs.com/package/@godspeedsystems/plugins-redis-as-datasource)

---- Content from: D:\gs-documentation\docs\microservices-framework\datasources\list-of-plugins.md ----

# List of Plugins

Godspeed framework adopts a pluggable approach that empowers you to define data sources effortlessly. Our framework graciously provides an interface that caters to diverse data source needs. Here's a glimpse into the exceptional datasource plugins crafted by our core framework team.

To seamlessly integrate these plugins into your project, simply run the command:

```bash
$  godspeed plugin add
```
```bash


       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝


? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌──────┬────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
│      │ Name                                   │ Description                                                                    │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│ ❯◯   │ cron-as-eventsource                    │ Cron as eventsource plugin for Godspeed Framework                              │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ aws-as-datasource                      │ aws as datasource plugin for Godspeed Framework                                │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ excel-as-datasource                    │ excel as datasource plugin for Godspeed Framework                              │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ mangoose-as-datasource                 │ mongoose-as-datasource as datasource plugin for Godspeed Framework             │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ mailer-as-datasource                   │ mailer as datasource plugin for Godspeed Framework                             │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ kafka-as-datasource-as-eventsource     │ kafka as datasource-as-eventsource plugin for Godspeed Framework               │
└──────┴────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘

```

you can specify plugin name to add directly to your project

```sh
godspeed plugin add <plugin-name>
```
## List of Datasource plugins

### 1. [prisma-as-datasource](https://www.npmjs.com/package/@godspeedsystems/plugins-prisma-as-datastore)

Prisma-as-datasource plugin provide functionality to access most popular databases like, PostgreSQL, MySQL, SQL Server, SQLite, MongoDB, CockroachDB, Planetscale and MariaDB through Prisma ORM.


### 2. [axios-as-datasource](https://www.npmjs.com/package/@godspeedsystems/plugins-axios-as-datasource)

Axios as a datasource: Level up your data-fetching game with Axios. Seamlessly integrate this powerful HTTP client into your app for smooth and efficient data transactions. Fetch, post, and interact with APIs effortlessly. Ready to make data requests a breeze? 🌐✨

<!-- The Godspeed Axios Plugin provides seamless integration with the Axios library for making HTTP requests within the Godspeed framework. It simplifies the process of defining and executing HTTP requests, making it easy to interact with external APIs. -->

## How to Use
- Create a godspeed project from the CLI and by default the axios plugin is integrated into your project if not, add the plugin from the CLI and select the `@godspeedsystems/plugins-axios-as-datasource` to integrate the plugin.

```
godspeed plugin add   


       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝


? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌──────┬───────────────────────────────────┬──────────────────────────────────────────────────────────────────┐
│      │ Name                              │ Description                                                      │
├──────┼───────────────────────────────────┼──────────────────────────────────────────────────────────────────┤
│  ◯   │ kafka-as-datasource-as-eventsource│ kafka as datasource-as-eventsource plugin for Godspeed Framework │
├──────┼───────────────────────────────────┼──────────────────────────────────────────────────────────────────┤
│ ❯◯   │ axios-as-datasource               │ Axios as datasource plugin for Godspeed Framework                │
└──────┴───────────────────────────────────┴──────────────────────────────────────────────────────────────────┘

```

- The plugin can also be directly installed by running `npm i @godspeedsystems/axios-as-datasource` command

- You will find the files in your project related to the axios plugin at `src/datasources/types/axios.ts` and `src/datasources/api.yaml`.

### axios.ts (src/datasources/types/axios.ts)

```typescript
import { DataSource } from '@godspeedsystems/plugins-axios-as-datasource';
export default DataSource;
```

### axios config (src/datasources/api.yaml)

```yaml
type: axios
base_url: http://localhost:4000
```

### Axios Workflow (src/functions/sample.yaml)
```
id: sample
tasks:
  - id: first_task
    fn: datasource.api.get./api/items
    args:
      headers:
      data:
      timeout:
      params:
```
The axios request configuration options, such as headers, params, data, and timeout, can be directly passed as arguments (args).

```
args:
    headers:
      'X-Requested-With': 'XMLHttpRequest'
    params:
      ID: 12345
    data:
      firstName: 'Fred'
    timeout: 1000
```
 To get more clarity checkout about [Axios configuration]( https://axios-http.com/docs/req_config)


## How It Helps

The Godspeed Axios Plugin offers the following advantages:

1. **Axios Integration:** The plugin abstracts away the complexities of setting up Axios instances, making it effortless to configure and execute HTTP requests.

2. **Unified DataSource:** Developers can use a uniform API to define data sources that make HTTP requests using Axios. This enhances consistency and ease of use across different parts of the application.

3. **Error Handling:** The plugin includes robust error handling, allowing developers to gracefully handle various scenarios, such as server timeouts, request setup failures, and server-side errors.

4. **Integration with Godspeed Core:** The plugin seamlessly integrates with the Godspeed Core library, aligning with the principles of the Godspeed framework and enabling streamlined event-driven workflows.


## Plugin Components

The plugin consists of the following key components:

### 1. `DataSource` Class

- This class extends `GSDataSource`, a base class provided by the Godspeed framework for creating data sources.

- It initializes an Axios instance to make HTTP requests based on the provided configuration options.

- The `execute` method is used to define how the plugin should execute HTTP requests. It maps incoming parameters to Axios request properties, processes the request, and handles various response scenarios.

### 2. Constants

- `SourceType`: A constant representing the source type of the plugin, which is 'DS' (data source).

- `Type`: A constant representing the loader file of the plugin. The final loader file will be located in the 'types' directory and named `${Type.js}`, where `Type` is 'axios' in this case.

- `CONFIG_FILE_NAME`: In the context of a data source, this constant also serves as the data source name. In this plugin, it is set to 'api'.

- `DEFAULT_CONFIG`: A default configuration object with Axios options like base URL and other settings.


### Axios retry
- Defaults set retry at datasource level within datasource config yaml file.(src/datasources/api.yaml)

```yaml
type: axios
base_url: http://localhost:4000
retry:
    when: #the condition
      status: [500, 501, 502] # an array or single value of codes
      message: my custom expected message for retry
    max_attempts: 5
    type: constant ##[constant,exponential,random]
    interval: PT15s
```

the above config works on two conditions if status from the api is 500,501 or 502 and message value is as mentioned in the config. When condition is optional and if retry is without when condition, the retry will be made on failures of the API.

- Override at task level within args object of the axios method call.

```yaml
id: some_workflow
tasks:
  - id: post-anything
    # Fetching loan offers from rule engine for the given bank and pan card
    fn: datasource.api_datasource.post./anything
    args:
      data:
        data: <%inputs.body.data%>
    on_error:
      continue: false
    retry: # By default the datasource has constant retry set in its yaml. Here we override the retry to exponential
      when: # an and condition between status and message.
        status: [500, 503] # an array or single value of codes (optional). Default 500
        message: Retry later # Retry when response has this message
      max_attempts: 5
      type: exponential
      min_interval: PT5s
      max_internal: PT15s
```



The sample config can be modified as per the usecase of your application.

#### sample config `api.yaml`
```yaml
type: axios
base_url: https://httpbin.org

# print all api calls in curl format
curlifiedLogs: true 

# Authentication of API calls with token refresh logic
authn: 
  fn: my_bank.authn
  refreshOn:
    statusCode: [401]

# Common headers to be set in all API calls
headers:
  Content-Type: application/json
  Cookie: <%mappings.my_bank.auth_workflow_cookie%>

# Retry logic for failed API calls for ex on Internal server errors or request timeouts
retry:
    when: #the condition
      status: [500, 503] # an array or single value of codes (optional). Default 500
      message: my custom expected message for retry #And (optionally) when response has this message
    max_attempts: 5
    type: constant # or random, exponential
    interval: PT15s
    # type: exponential
    # min_interval: PT5s
    # max_internal: PT15s
    # type: random
    # min_interval: PT5s
    # max_internal: PT15s
```

### Authentication 
#### API calls with token refresh logic and authentication can also be configured in your datasource config file, by setting `authn` and the `fn` is called before calling the API endpoint and token will be refreshed on statusCode mentioned in the array of [`statusCode`](/docs/microservices-framework/datasources/list-of-plugins#sample-config-apiyaml).


example `fn` of `authn`
```ts

import { logger } from "@godspeedsystems/core";

const axios = require('axios');
const client = axios.create({
    headers: {
        'Content-Type': 'application/json'
    }
});
/**
 * Generate and return all the headers which are required to be sent
 * in the API calls which require authentication tokens
 */
module.exports = async function (ctx: any) {
    try {
        const res = await client({
            method: 'get',
            url: `https://httpbin.org/anything`,
            data: {
                "Authorization": 'access_token'
            }
        })
        // Retrieve the authn tokens
        const headers = {
            "Authorization": res.data.access_token || 'access_token'
        };
       
        logger.info('Auth token successfully refreshed and following headers set: %o', Object.keys(headers));
        return headers;
    } catch (error) {
        logger.error('Error in refreshing token %o', error);
        throw error;
    }
}
```

## Conclusion

The Godspeed Axios Plugin is a valuable addition to the Godspeed framework, providing a standardized way to make HTTP requests using the Axios library. With this plugin, you can easily integrate with external APIs, handle responses, and streamline data retrieval within your applications.


### 3. [aws-as-datasource](https://github.com/godspeedsystems/gs-plugins/blob/main/plugins/aws-as-datasource/README.md)

AWS as a datasource plugin: Turbocharge your app by tapping into Amazon Web Services. Unleash the power of cloud-based data, storage, and more to supercharge your application. 🚀 

## Steps to use aws plug-in in godspeed framework:

### How to install
- Create a godspeed project from the CLI , open the created project in vscode and then add the plugin from the CLI of vscode, select the `@godspeedsystems/plugins-aws-as-datasource` to integrate the plugin.

```
> godspeed plugin add
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌──────┬────────────────────────────────────┬────────────────────────────────────────────────────────────────────┐
│      │ Name                               │ Description                                                        │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│  ◯   │ prisma-as-datastore                │ Prisma as a datasource plugin for Godspeed Framework.              │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│ ❯◯   │ aws-as-datasource                  │ aws as datasource plugin for Godspeed Framework                    │
└──────┴────────────────────────────────────┴────────────────────────────────────────────────────────────────────┘
```
- The plugin can also be directly installed by running `npm i @godspeedsystems/aws-as-datasource` command

### Configuration

In your <aws_ds_name>.yaml file, you will need to configure
- type: aws (type of the datasource)
- default_client_config (optional) for initializing your clients, as per the aws config specs
- Client type to client name mappings via the `types` key
- `services` contains settings for the services you want to invoke via this datasource. 
  - Each service has a type like s3, lamdba etc.
  - They can have their own config overriding the default under the `config` key
  - Note: There can be multiple services configured for the same type. Check `s3` and `s3_1` below

```yaml
type: aws
default_client_config: #any aws specific configurations
  credentials:
    accessKeyId: <%config.accessKeyId%>
    secretAccessKey: <%config.secretAccessKey%>
# service type is the name of the npm module for ex. @aws-sqk/client-dynamodb or @aws-sqk/client-s3 etc
# The `types` key can have service type to sdk's client names mappings when coding
types: #mappings
  dynamodb: DynamoDB
  s3: S3
  lambda: Lambda
  ssm: SSM
  sqs: SQS
services:
  s3:
    type: s3
    config:
      region: <%config.anotherAccessKeyId%>
      credentials:
        accessKeyId: <%config.anotherAccessKeyId%>
        secretAccessKey: <%config.anotherSecretAccessKey%>
  s3_1: #uses default config
    type: s3
  dynamodb:
    type: dynamodb
  sqs:
    type: sqs
  ssm:
    type: ssm
  lamdba:
    type: lambda
```

### Example usage

In an event, we establish HTTP endpoint that accepts json objects in request body. When this endpoint is invoked, it triggers the `aws_list` function with the args coming from request body.

#### Example event schema
```yaml
# event for create

"http.post./aws":
  fn: aws_list
  body:
    type: object
  responses:
    200:
      content:
         application/json:

```

#### Example YAML workflow

In workflow we need to mention `datasource.aws.${serviceName}.${method}` as function (fn) to perform operations in this case `datasource.aws.s3.listObjects`.

```yaml
id: aws_workflow
tasks:
  - id: aws_list
    fn: datasource.aws.s3.listObjects
    args: <% inputs.body %>
```
#### Example TS workflow
```ts
import { GSContext, GSDataSource, GSStatus } from "@godspeedsystems/core";

export default async function (ctx: GSContext, args: any) {
    const ds: GSDataSource = ctx.datasources.aws;
    const response = await ds.execute(ctx, {
         //Pass exactly same args as this aws service's method takes
        ...args,
        //Along with args, pass meta object
        // meta can contain {entityName, method}
        meta: {entityName: 's3', method: 'listBuckets'},
        //Or meta can contain {fnNameInWorkflow} which is same as 
        //the 'fn' that we write when invoking datasource from yaml workflow
        //For example, this will also work
        //meta: {fnNameInWorkflow: 'datasource.aws.s3.listBuckets'}
    });
    return response;
}
```
### Example to upload file on aws s3

Event
```yaml
# event for upload s3 file

"http.post./aws":
  fn: aws_upload
  body:
  content:
    multipart/form-data:
        schema:
        $ref: '#/definitions/event/upload_file'
  responses:
    200:
      content:
         application/json:

```
the above event calling `aws_upload.ts` workflow from `src/functions/` 
 
```js 
import { GSContext, GSStatus } from "@godspeedsystems/core";
import fs from 'fs'

module.exports = async (ctx: GSContext) => {
  const { files: { myfile } } = ctx.inputs.data;
  const { datasources, logger } = ctx;
  try {
    return new Promise((resolve, reject) => {
      fs.readFile(myfile.tempFilePath, async function (err, data) {
        if (err) {
        resolve(new GSStatus(false, 500, 'S3 document upload failed', { error: { message: err.message } }));

        } // Something went wrong!
        const contentType = ctx.inputs.data.headers['content-type']
        var params = {
          Key: myfile.name, //file name
          Body: data,
          Bucket: 'userdocs123',
          ContentType: contentType,
        };

        const res = await datasources.aws.client.s3.putObject(params);

        resolve(new GSStatus(true, 200, 'successfully uploaded document', res, undefined))

      })
    });

  } catch (e: any) {
    logger.error('S3 document upload failed %o', e)
    return new GSStatus(false, 500, 'S3 document upload failed', { error: { message: e.message } })
  }

};
```

### 4. [excel-as-datasource](https://www.npmjs.com/package/@godspeedsystems/plugins-excel-as-datasource)

Excel as a datasource: Turn your spreadsheets into actionable insights. Seamlessly integrate Excel into your applications to harness data, charts, and calculations. Transform static numbers into dynamic, real-time intelligence. Ready to Excel? 📊

### 5. [Nodemailer-as-datasource](https://www.npmjs.com/package/@godspeedsystems/plugins-mailer-as-datasource)

Nodemailer as a datasource: Amp up your communication game by using a mailer as a powerful data source. Connect seamlessly to send information through emails. Transform your app into a messaging maestro, unlocking a world of possibilities. Ready to send your data soaring through the digital mail stream? 📧✨

Sending emails in your Node.js application has never been smoother. The Godspeed Nodemailer Plugin provides seamless integration between the robust Godspeed framework and Nodemailer, the go-to solution for email delivery in Node.js.

## Features

- **Effortless Setup:** Get up and running in minutes with our easy-to-follow setup guide.
- **Dynamic Templating:** Craft personalized emails with dynamic content using popular templating engines.
- **Error Resilience:** Robust error handling ensures reliable email delivery, even in challenging scenarios.
- **Scalable and Secure:** Designed for scalability and security, so your email system can grow with your application.

Whether you're sending transactional emails, newsletters, or notifications, this plugin empowers you to deliver messages with Godspeed. Let's elevate your email game together!

## example usage:

#### mailer config ( src/datasources/mail.yaml )
```yaml
type: mail
user: 'godspeed@gmail.com'
pass: 'rmeb bjak xcam xkub'
```

#### mailer event for Producer ( src/events/mail_send_event.yaml )

```yaml
http.post./mail:
  summary: sending_mail
  description: sending_mail
  fn: mail_send
  body:
      type: object
      properties:
        name:
          type: string
  responses:
    200:
      content:
        application/json:
          schema:
            type: object

```

#### mailer workflow for send mail ( src/functions/mail_send.yaml )

```yaml
summary: send
tasks:
  - id: send_mail
    fn: datasource.mail.send
    args: 
      from: 'sender@gmail.com'
      to: 'receiver@gmail.com'
      subject: 'Hello from Godspeed'
      text: 'Have a Nice day'
  
```

### 6. [redis-as-datasource](https://www.npmjs.com/package/@godspeedsystems/plugins-redis-as-datasource)

Redis as a datasource: Elevate your data game with the speed and efficiency of Redis. Use it as a powerhouse for caching, real-time analytics, and lightning-fast data retrieval. Embrace the key-value magic to supercharge your application's performance. Ready to Rediscover efficiency? 🚀


### 7. [mongoose-as-datasource](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/mongoose-as-datasource)
Mongoose as a datasource: It provides seamless integration with MongoDB through the Mongoose library. MongoDB is a popular NoSQL database, and with this plugin, you can harness the power of Mongoose to model your data, perform queries, and interact with MongoDB in a structured and efficient manner.

## How to Use
- Open the godspeed project in vscode and then add the plugin from the CLI of vscode, select the `@godspeedsystems/plugins-mongoose-as-datastore` to integrate the plugin.
```
> godspeed plugin add
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌──────┬────────────────────────────────────┬────────────────────────────────────────────────────────────────────┐
│      │ Name                               │ Description                                                        │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│ ❯◯   │ mongoose-as-datastore                │ Mongoose as a datasource plugin for Godspeed Framework.              │
└──────┴────────────────────────────────────┴────────────────────────────────────────────────────────────────────┘
```
- The plugin can also be directly installed by running `npm i @godspeedsystems/plugins-mongoose-as-datastore` command


- This will create some files.
  - You will find a file in your project related to the Prisma plugin at `src/datasources/types/mongoose.ts` 

    ### Contents of types/mongoose.ts
    The file will look something like this
    ```typescript
    import { DataSource } from '@godspeedsystems/plugins-mongoose-as-datastore';
    export default DataSource;
    ```

### <mongoose_ds_name>.yaml file
  ![Alt text](../../../static/img/mongoose_folder_structure.png)
- You can keep the file by any name. This file is used to initialize a mongoose datasource instance. Whatever is the name of the file, you will need to invoke
the mongoose datasource commands by the same name. Also your models will be needed to be kept in a folder with the same name as your yaml file (i.e. your datasource instance name). For example mongoose1.yaml would mean
calling `fn:datasources.mongoose1.<Model_Name>.<Function_Name>` from yaml workflows and 
`ctx.datasources.mongoose1.<Model_Name>.<Function_Name>` from TS/JS files. Also you will need to create a folder `datasources/mongoose1/models` and keep your models there as detailed below.

- You can override the default response codes for success cases for different methods by putting them in the datasource instance's yaml file

```yaml
type: mongoose
successResponseCodes: #default response codes for success responses
  create: 201
  find: 200
  findOne: 200
  aggregate: 200
  findOneAndUpdate: 201
  findOneAndDelete: 202
```

#### Error response
When a call has an error the datasource returns following `GSStatus`

```yaml
    code: 500
    success: false
    data: 
        message: Internal Server Error
```

### Setting up Mongoose models
This datasource loads the [Mongoose models](https://mongoosejs.com/docs/models.html) from `datasources/<datasource_name>/models` folder.

![Alt text](../../../static/img/mongoose_folder_structure.png)
#### Example Mongoose model file
These files are stored in `datasources/<datasource_name>/models` folder Your TS or JS file should export as following
```typescript
module.exports = {
    type: 'SomeModel', //The name by which you will access methods of this collection/model
    model: SomeModel //The Mongoose Model
};
```
An example Mongoose model file
```typescript
const { model, Schema, Document } =require('mongoose');

const SomeModelSchema = new Schema(
  {
    partnerName: {
      type: String,
      required: true,
    },
    productType: {
      type: String,
      required: true,
    },
    apiType: {
      type: String,
      required: true,
    },
    method: {
      type: String,
      required: true,
    },
    api: {
      type: String,
      required: true,
    },
    code: String,
    headers: Schema.Types.Mixed,
    payload: Schema.Types.Mixed,
    response: Schema.Types.Mixed,
    isDynamicUrl: Boolean,
    expectedResponseStatusCode: Number,
  },
  { timestamps: true }
);

const SomeModel = model('some-model', SomeModelSchema, 'some-model');
module.exports = {
    type: 'SomeModel', //The name by which you will access methods of this collection/model
    model: SomeModel
};
```

### Sample workflow for Mongoose API
When calling any api function it will be called as `fn:datasources.mongoose1.<Model_Name>.<Function_Name>` from yaml workflows and 
`ctx.datasources.mongoose1.<Model_Name>.<Function_Name>` from TS/JS files.
The arguments to any `Function_Name` are to be passed in two ways
- Only the first arg of the function as accepted by the API
  ```yaml
    id: mongoose_workflow
    tasks:
      - id: first_task
        fn: datasource.mongoose.SomeModel.findOne
        args: {"name": "mastersilv3r"} #Fun fact: YAML acceptes JSON as well. 
  ```
- Most Mongoose functions accept multiple args. To pass all args to an API call, send an array of the acceptable args. This array is spread and passed to the API call
  ```yaml
    id: helloworld2_workflow
    tasks:
      - id: helloworld2_workflow_first_task
        fn: datasource.mongoose.SomeModel.findOne
        args: #as an array
          - name: mastersilv3r #search clause: First argument
          - 'name age' #The projection: second argument
          - {} # Options: the third argument
  ```
- Calling from a TS/JS workflow works same as any other datasource
```typescript
import { GSContext, GSDataSource, GSStatus } from "@godspeedsystems/core";

export default async function (ctx: GSContext, args: any) {
    const ds: GSDataSource = ctx.datasources.mongoose1;
    //Will need to set a meta object in the args to pass entitType and method
    args.meta = {entityType: 'SomeModel', method: 'findOne'};
    const response = await ds.execute(ctx, args);
    return response;
}
```
### Run the service
- Set an environment variable `MONGO_URL` as your connection string to running mongodb instance.
  For example, setting via a unix shell.
  ```shell
    export MONGO_URL='mongodb+srv://<user_name>:<password>@cluster0.xyzabc.mongodb.net/?retryWrites=true&w=majority'
  ```
- From your command line run your service in the auto-watch mode
  ```bash
  godspeed serve
  ```

### 8. [kafka-as-datasource-as-eventsource](https://www.npmjs.com/package/@godspeedsystems/plugins-kafka-as-datasource-as-eventsource)

Kafka is your dynamic data stream and event maestro! As a data source, it floods your systems with real-time insights, turning data into decision-making gold. And when it comes to event sourcing, Kafka orchestrates a symphony of real-time events that power your applications and spark innovation. Experience the future of data and event handling with Kafka. 




---- Content from: D:\gs-documentation\docs\microservices-framework\datasources\overview.md ----

# Data Sources
## Overview

Data sources play a central role in the Godspeed Framework, serving as the origins or locations from which data can be collected and stored. This documentation provides an overview of data sources within the framework, their usage, and how to invoke them from within workflow tasks.

In the Godspeed Framework, data sources are fundamental components that enable users to access and manipulate data from various origins. Examples of data sources include databases,message bus, cache, file systems, and third-party APIs.

Data sources can be seamlessly integrated into your workflow tasks using a standardized syntax. The key element for invoking data sources is the fn attribute, which is namespaced under datasource. Here's an example of how data sources are used within a workflow task:

### Demonstration

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/NsH9hLCL92Y" frameborder="0" allowfullscreen></iframe>
</div>


## Datasource Types

Datasources can be divided into two types, "Datastore as datasource" and "API as a datasource"


<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1704478971/Screenshot_from_2024-01-05_23-52-33_e8ihnh.png" alt="event types" />


Example 1: Datastore as Datasource [prisma-as-datastore](/docs/microservices-framework/datasources/list-of-plugins#1-prisma-as-datasource)

```yaml
id: workflow_1
description: This workflow will fetch the user with userId from the mongo database
tasks:
  - id: task_1
    fn: datasource.mongo.User.findOne
    args:
      where:
        userId: <% inputs.params.userId %>
```


In this example:

`datasource.mongo.User.findOne` is the datasource function, which can be described as below:

  - `datasource`: fixed namespace for all data sources
  - `mongo`: name of data source,this can be any data base that you select can checkout [database list](/docs/getting-started/advance-guide#prisma-supports-wide-range-of-databases)
  - `User`: entity name
  - `findOne`: method to be invoked in entity name

the workflow is consuming the datasource `mongo` and finding one document from User entity.

:::tip **Godspeed has a "Prisma as datastore plugin" as well, which provides a uniformed access to all prisma based datasources**
:::

To enable this seamless interaction with datasources, the Godspeed Framework allows you to configure data sources within your project. For instance, the example mentions the use of the "prisma-as-datastore" plugin to define the "mongo" data source. This configuration step ensures that the framework can establish connections and communicate effectively with the specified data source.

In the above example there is a `mongo` datasource defined in the project, you are free to name your datasource as you like. A default config of your datasource is present in `src/datasources` folder. To use datasources advance features you configure your datasource.yaml file, to get more details about your specific datasource checkout their respective docs.


Example 2: API Datasource  [axios-as-datasource](/docs/microservices-framework/datasources/list-of-plugins#2-axios-as-datasource)

```yaml
id: post_api_send_anthing
tasks:
  - id: send_anything
    # Fetching loan offers from rule engine for the given bank and pan card
    fn: datasource.api_datasource.post./anything
    args:
      data:
        message: <%inputs.body.message%>
```

In the above example:

`datasource.api_datasource.post./anything` is the datasource function, which can be described as below:

  - `datasource`: fixed namespace for all data sources
  - `api_datasource`: name of data source,
  - `post`: API method
  - `./anything`: API endpoint



---- Content from: D:\gs-documentation\docs\microservices-framework\event-sources\create-custom-event-source.md ----

# Create a Custom Eventsource

## About Eventsources

An eventsource is any entity or technology responsible for capturing events or notifications when specific events or conditions occur. These events are consumed by event handlers or processors for real-time or near-real-time responses. Eventsources can include Sync and Async event sources like Message brokers, Webhooks etc.The settings for each datasource lies in src/eventsources directory.

### Any Eventsource
#### Steps to create custom eventsource :

:::tip **To customize any event source, go through the respective plugin's ts file and customize. Use this [repo](https://github.com/godspeedsystems/gs-plugins.git) for better understanding**
:::

<details>
  <summary>let's use Express as an example of eventsource :</summary>

#### Project structure

```bash
    ├── src
        ├── datasources
        │
        ├── events
        |   |
        │   └── sample.yaml
        |   
        ├── eventsources
        |   |
        │   ├── types
        |   |    |
        │   |    └── express.ts
        |   |
        │   └── http.yaml
        |
        └── functions
            |
            └── sample.yaml
```

#### Express config (src/eventsources/http.yaml)
```
type: express
port: 3000
```

#### initializing client and execution ( src/eventsources/types/express.ts ) :

```javascript
import { PlainObject, GSActor, GSCloudEvent, GSStatus, GSEventSource } from "@godspeedsystems/core";
import express from "express";
import bodyParser from 'body-parser';
import _ from "lodash";
import promClient from '@godspeedsystems/metrics';
//@ts-ignore
import promMid from '@mindgrep/express-prometheus-middleware';
import passport from "passport";
import fileUpload from "express-fileupload"
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

export default class EventSource extends GSEventSource {
  async initClient(): Promise<PlainObject> {
    const app = express();
    const {
      port = 3000,
      request_body_limit = 50 * 1024 * 1024,
      file_size_limit = 50 * 1024 * 1024,
      jwt: jwtConfig
    } = this.config;

    app.use(bodyParser.urlencoded({ extended: true, limit: request_body_limit }));
    app.use(bodyParser.json({ limit: file_size_limit }));
    app.use(
      fileUpload({
        useTempFiles: true,
        //@ts-ignore
        limits: { fileSize: file_size_limit },
      })
    );
  
    if (jwtConfig) {
      app.use(passport.initialize());
      passport.use(
        new JwtStrategy(
          {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwtConfig.secretOrKey,
            ignoreExpiration: true,
            jsonWebTokenOptions: {
              audience: jwtConfig.audience,
              issuer: jwtConfig.issuer,
            },
          },
          function (jwtPayload, done) {
            return done(null, jwtPayload);
          },
        ),
      );
    };

    app.listen(port);

    if (process.env.OTEL_ENABLED == 'true') {
      app.use(
        promMid({
          metricsPath: false,
          collectDefaultMetrics: true,
          requestDurationBuckets: promClient.exponentialBuckets(0.2, 3, 6),
          requestLengthBuckets: promClient.exponentialBuckets(512, 2, 10),
          responseLengthBuckets: promClient.exponentialBuckets(512, 2, 10),
        })
      );
    }

    return app;
  }

  private authnHOF(authn: boolean) {
    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
      if (authn) {
        return passport.authenticate('jwt', { session: false })(req, res, next)
      } else {
        next();
      }
    };
  };

  subscribeToEvent(eventRoute: string, eventConfig: PlainObject, processEvent: (event: GSCloudEvent, eventConfig: PlainObject) => Promise<GSStatus>, event?: PlainObject): Promise<void> {
    const routeSplit = eventRoute.split('.');
    const httpMethod: string = routeSplit[1];
    const endpoint = routeSplit[2].replace(/{(.*?)}/g, ':$1');
    const app: express.Express = this.client as express.Express;
    //@ts-ignore
    app[httpMethod](endpoint, this.authnHOF(event.authn), async (req: express.Request, res: express.Response) => {
      const gsEvent: GSCloudEvent = EventSource.createGSEvent(req, endpoint)
      const status: GSStatus = await processEvent(gsEvent, { key: eventRoute, ...eventConfig });
      res
        .status(status.code || 200)
        // if data is a integer, it takes it as statusCode, so explicitly converting it to string
        .send(Number.isInteger(status.data) ? String(status.data) : status.data);
    });
    return Promise.resolve();
  }

  static createGSEvent(req: express.Request, endpoint: string) {
    const reqProp = _.omit(req, [
      '_readableState',
      'socket',
      'client',
      '_parsedUrl',
      'res',
      'app'
    ]);
    const reqHeaders = _.pick(req, ['headers']);
    let data = { ...reqProp, ...reqHeaders };

    const event: GSCloudEvent = new GSCloudEvent(
      'id',
      endpoint,
      new Date(),
      'http',
      '1.0',
      data,
      'REST',
      new GSActor('user'),
      {}
    );

    return event;
  }
}

const SourceType = 'ES';
const Type = 'express'; // this is the loader file of the plugin, So the final loader file will be `types/${Type.js}`
const CONFIG_FILE_NAME = 'http'; // in case of event source, this also works as event identifier, and in case of datasource works as datasource name
const DEFAULT_CONFIG = { port: 3000, docs: { endpoint: '/api-docs' } };

export  {
  EventSource,
  SourceType,
  Type,
  CONFIG_FILE_NAME,
  DEFAULT_CONFIG
};
```



#### Express event (src/events/sample.yaml)

```
http.get./sample_api:
    fn: sample      #redirects to src/functions/sample.yaml
    body: 
      content:
        application/json:
          schema:
            type: object
            properties:
              name: 
                type: string
              message: 
                type: string                         
    params:     
      - in: query
        name: user
        required: true  
        schema: 
          type: string   
    responses:      
      200:
        content:
          application/json:
            schema:
              type: string
```

#### Function to be called (src/functions/sample.yaml)


```yaml
summary: example
description: this function is called to return
tasks:
    - id: example
      fn: com.gs.return #its an inbuilt function
      args: |
        <%"Hello "+inputs.query.user+". This is a message from body "+inputs.body.message%>
```

</details>


<details>
  <summary>let's use cron as an example of eventsource :</summary>

#### Project structure

```bash
    ├── src
        ├── datasources
        │
        ├── events
        |   |
        │   └── every_minute_task.yaml
        |   
        ├── eventsources
        |   |
        │   ├── types
        |   |    |
        │   |    └── cron.ts
        |   |
        │   └── cron.yaml
        |
        └── functions
            |
            └── every_minute.yaml
```

#### cron config ( src/eventsources/cron.yaml )
```yaml
type: cron
```

#### initializing client and execution ( src/eventsources/types/cron.ts ) :

```javascript
import {GSEventSource, GSCloudEvent,PlainObject, GSStatus, GSActor } from "@godspeedsystems/core";
import cron from "node-cron";

export default class EventSource extends GSEventSource {
protected initClient(): Promise<PlainObject> {
    return Promise.resolve(cron);
}
subscribeToEvent(
    eventKey: string,
    eventConfig: PlainObject,
    processEvent: (
    event: GSCloudEvent,
    eventConfig: PlainObject
    ) => Promise<GSStatus>
): Promise<void> {
    let [,schedule, timezone] = eventKey.split(".");
    let client = this.client;
    if (client) {
    try {
      client.schedule(
          schedule,
          async () => {
            const event = new GSCloudEvent(
              "id",
              eventKey,
              new Date(),
              "cron",
              "1.0",
              {},
              "cron",
              new GSActor("user"),
              {}
            );
            await processEvent(event, eventConfig);
            return Promise.resolve()
          },
          {
            timezone,
          }
        );
      } catch (err) {
        console.error(err);
        throw err;
      }
    }
    return Promise.resolve(); 
  }
};
```



#### cron event  ( src/events/every_minute_task.yaml )

```yaml
# event for Shedule a task for evrey minute.

cron.* * * * *.Asia/Kolkata:
  fn: every_minute

```
For  cron expressions   `https://crontab.cronhub.io/`

#### cron workflow to schedule ( src/functions/every_minute.yaml )


```yaml
summary: this workflow will be running every minute
tasks:
  - id: print
    description: print for every minute
    fn: com.gs.return
    args:
      data: HELLO from CRON
```

</details>


1. Inside the `eventsources` directory, create a `YAML` file with a specific name. In this YAML file, ensure you specify a `type` field, and there must be a corresponding `TypeScript` file in the `types` directory that shares the same name as the `type` you defined.

```
    ├── src
        ├── datasources
        │
        ├── events
        |   |
        │   └── helloworld.yaml
        |
        ├── eventsources
        │   ├── types
        │   |    └── custom_eventsource.ts
        |   |
        │   └── custom_eventsource.yaml
        |
        └── functions
            |
            └── helloworld.yaml


```

2. In your TypeScript file, use an import statement to bring in `GSEventSource` from the `@godspeedsystems/core` package. Then, create a class that inherits from `GSEventSource`.

3. Afterward, you can access the methods provided by `GSEventSource`. Initialize your client by calling the `initClient()` function.

4. Once your client is initialized, you can execute its subscription using the `subscribeToEvent` function.

### Datasource as eventsource 

There are special cases when datasource can also act as an eventsource.
For eg: Kafka can be used both datasource as well as eventsource. When we are publishing message to kafka, it can work as a datasouce .But when we are listening to events on kafka, then it is event source also, then the same client can serve as both.


#### Steps to create custom datasource as eventsource :

:::tip **To customize any event source, go through the respective plugin's ts file and customize. Use this [repo](https://github.com/godspeedsystems/gs-plugins.git) for better understanding**
:::

<details>
  <summary>let's use kafka as an example of an eventsource :</summary>

#### Project structure

```bash
    ├── src
        ├── datasources
        │   ├── types
        │   |    └── kafka.ts
        |   |
        │   └── kafka.yaml
        │
        ├── events
        |   |
        │   ├── kafka_publish_event.yaml
        |   |
        |   └── kafka_consumer_event.yaml

        ├── eventsources
        │   ├── types
        │   |    └── kafka.ts
        |   |
        │   └── kafka.yaml
        |
        └── functions
            |
            ├── kafka-publish.yaml
            |
            └── kafka-consume.yaml
```


#### Kafka config ( src/eventsources/kafka.yaml )
```yaml
type: kafka
groupId: "kafka_proj"
```

#### subscribeToEvent ( src/eventsources/types/Kafka.ts ) :

```javascript
import { GSCloudEvent, GSStatus, GSActor, GSDataSourceAsEventSource, PlainObject} from "@godspeedsystems/core";


export default class EventSource extends GSDataSourceAsEventSource {
  async subscribeToEvent(
    eventKey: string,
    eventConfig: PlainObject,
    processEvent: (
      event: GSCloudEvent,
      eventConfig: PlainObject
    ) => Promise<GSStatus>
  ): Promise<void> {
    const client = this.client;
    const ds = eventKey.split(".")[0];
    const groupId = eventKey.split(".")[2]
    const _topic = eventKey.split('.')[1];
    interface mesresp {
      topic: string;
      partition: number;
      message: any;
    }

    if (client) {
      const consumer = client.consumer({ groupId: groupId });
      await consumer.subscribe({
        topic: _topic,
        fromBeginning: true,
      });

      await consumer.run({
        eachMessage: async (messagePayload: mesresp) => {
          const { message } = messagePayload;
          let msgValue;
          let status;
          let data;
          try {
            msgValue = message?.value?.toString();
            data = {
              body: msgValue,
            };
            status = 200;
          } catch (ex) {
            status = 500;
            return new GSStatus(
              false,
              500,
              `Error in parsing kafka event data ${msgValue}`,
              ex
            );
          }
          const event = new GSCloudEvent(
            "id",
            `${ds}.${_topic}.${groupId}`,
            new Date(message.timestamp),
            "kafka",
            "1.0",
            data,
            "messagebus",
            new GSActor("user"),
            ""
          );
          const res = await processEvent(event, eventConfig);

          if (!res) {
            status = 500;
          } else {
            status = 200;
          }
          return res;
        },
      });
    }
  }
}
```

#### Example event for consume ( src/events/kafka_consumer_event.yaml ) :

```yaml
kafka.publish-producer1.kafka_proj:
  id: kafka__consumer
  fn: kafka_consume
  body:
    description: The body of the query
    content:
      application/json:
        schema:
          type: string

```

#### Example workflow for consumer ( src/functions/kafka-consume.yaml ) :


```yaml
id: kafka-conumer
summary: consumer
tasks:
    - id: set_con
      fn: com.gs.return
      args: <% inputs %>

```


</details>


1. To create datasource follow [How to create custom datasource](/docs/microservices-framework/datasources/create-custom-datasource.md)

```
    .
    ├── src
        ├── datasources
        │   ├── types
        │   |    └── custom_datasource.ts
        |   |
        │   └── custom_datasource.yaml
        │
        ├── events
        |   |
        │   └── helloworld.yaml
        |
        ├── eventsources
        │   ├── types
        │   |    └── custom_eventsource.ts
        |   |
        │   └── custom_eventsource.yaml
        |
        └── functions
            |
            └── helloworld.yaml
```

2. To create eventsource, Inside the `eventsources` directory, create a `YAML` file with a specific name. In this YAML file, ensure you specify a `type` field, and there must be a corresponding `TypeScript` file in the `types` directory that shares the same name as the `type` you defined.

3. In your TypeScript file, use an import statement to bring in `GSEventSource` from the `@godspeedsystems/core` package. Then, create a class that inherits from `GSEventSource`.

4. Your client is initialized already in datasource so you can execute its subscription using the `subscribeToEvent` function.




---- Content from: D:\gs-documentation\docs\microservices-framework\event-sources\create-eventsource-plugin.md ----

# Create Eventsource plugins 

Godspeed has a [plugin based](https://github.com/godspeedsystems/gs-plugins.git) ecosystem and you can install the plugins using [CLI](/docs/microservices-framework/CLI.md).Now let us understand  <a href="https://github.com/godspeedsystems/gs-plugins/blob/main/README.md">how can you contribute a plugin</a>.

In this section, let us understand how a developer can contribute a plugin to godspeed [plugin repo](https://github.com/godspeedsystems/gs-plugins.git) or for internal use.
Follow these step-by-step guidelines to receive detailed instructions on contributing your plugin. Become an integral part of the world's first meta framework, setting the course for innovation and excellence. 
Watch the videos below for better understanding!

### 1.How to create plugins using godspeed?
Here is a video which helps you create a plugin using the godspeed. Do watch for better understanding

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/owQEuBO8_lk" frameborder="0" allowfullscreen></iframe>
</div>


### 2.Create and use plugins using godspeed
Watch here the video where we demonstrate how to create and use plugins using godspeed.

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
    <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/YzvYjYujBMk" frameborder="0" allowfullscreen></iframe>
</div>

---- Content from: D:\gs-documentation\docs\microservices-framework\event-sources\event-schema.md ----

# Event Schema

To define an event in Godspeed, you need to write an Event Schema. This schema is a structured YAML configuration that follows the OpenAPI specification, allowing you to define every detail of how the event should behave. All events adhere to a standard structure, which is one of the core design principles of Godspeed, regardless of their source or protocol.

## Writing an event schema 

It involves specifying:

- The name/topic/URL of the event
- The event handler Workflow (fn)
- Input and Output schema
- [Validation error handling](/docs/microservices-framework/event-sources/validations/schema-validation)
- [Authorization checks](/docs/microservices-framework/authorization/overview.md)

By writing an event schema, you provide a blueprint that defines how an incoming request or message should be handled, making your API endpoints easy to manage and highly configurable.


## The generic Event Schema
Godspeed follows [Schema Driven Development & Single Source of Truth](../introduction/guard-rails.md#1schema-driven-development), [Configure Over Code](../introduction/guard-rails.md#2configure-over-code) and [Modular Architecture](../introduction/guard-rails.md#4-decoupled-architecture) approach in 
- Listening to events from various sources and acting upon them.
- Generating API documentation (Swagger) and other schemas like Graphql

The meta-framework follows a generic schema for defining events - their inputs, outputs, swagger specs, with validations, authentication, authorization etc.  

```yaml
http.get./greet: #The initial line depicts a fusion of the event, the employed method, and the path associated with the event.
  fn: function_greet #Required. The 'fn' key receives the function name located in 'src/functions' and forwards the accompanying parameters. 
  
  #optional configurations
  #Swagger components
  body: #same as requestBody in Swagger world
  params: #same as swagger `parameters` schema
  responses: #same as swagger `responses` schema
  id: # swagger. if not provided, when generating swagger, this is generated from the URI of the event by default
  operationId: # swagger if not provided, check if `id` is set. If that is also not set, use the summary to generate the operationId
  summary:
  tags: # swagger if you give `tags` array in schema of event, framework uses that to add tags to your generated spec. Else it uses the path and name of the file containing the event as tags. For ex. <folder_name>_<file_name> 
  
  #Other non-swagger components (optional)
  authn: #custom authentication. Currently plugins support JWT. Can be customized
  authz: #your custom authz workflow
  on_request_validation_error: #when validation fails
  on_response_validation_error: #when validation fails
  log: #Open Telemetry compliant log attributes which help debug and search through logs better
    attributes:
```
Lets understand the first line from the above snippet `http.get./greet`.

`http`: Protocol http eventsource (can be any)

`get` : method (depends on the eventsource used. Can be topic for Kafka)

`/helloworld`: endpoint (In case of http and graphql sources. Can be groupId in case of Kafka for ex.)

We are exposing an endpoint with a `get` method on `http` protocol. This endpoint is calling an eventhandler called `helloworld` in the second line. Event handlers can be functions written in typescript, javascript or  yaml workflows in Godspeed's DSL format. In the above example the helloworld function exists in `src/functions` directory. 

## Key Differences between a Sync and Async Event Schema

When switching between eventsources, the event schema undergoes significant changes.
- The first line is changed for each protocol:

 In the case of sync events or HTTP events, the start line includes the eventsource name, method, and path. 

 However, for async events, the start line combines the source name, topic and group ID (for Kafka), or schedule (for Cron).

- Async events like Kafka do not have responses, authentication and authorization fields in schema.

- Cron events do not have any input.

:::tip Note
You can apply multiple compatible eventsource instances in a URI for ex. `graphql & http.get./greeting`
:::

<details>
<summary> Example HTTP Schema  </summary>

```yaml
http.get./greet: #The initial line depicts a fusion of the event, the employed method, and the path associated with the event.
  fn: function_greet #The 'fn' key receives the function name located in 'src/functions' and forwards the accompanying parameters.
  on_request_validation_error: on_request_validation
  params: #It is also possible to define inputs such as 'params,' 'body,' 'headers,' and 'query parameters.'
    - name: greet_message
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
  responses:
    500:
      content:
        application/json: 
          schema:
            type: object
    200:
      content:
        application/json:
          schema:
            type: object
```
</details>

**To get a quick understanding of Event scehma, please watch the video provided below…**

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/WsNwInEaWFw?si=2uEG_Tp5x36v9vAB" frameborder="0" allowfullscreen></iframe>
</div>

<!-- <div style={{ margin: '20px auto', textAlign: 'center' }}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/cp1qgIz1PNw?si=4Qngtu-WXoC-LQeY" frameBorder="0" allowFullScreen></iframe>
</div> -->



---- Content from: D:\gs-documentation\docs\microservices-framework\event-sources\event-source-plugins\Apollo GraphQl Eventsource.md ----

GraphQL is a query language and runtime for APIs that enables clients to request precisely the data they need. It allows developers to describe the structure of the data they require, providing a more efficient and flexible alternative to traditional REST APIs. GraphQL empowers front-end developers to shape their API requests, minimizing over-fetching and under-fetching of data.


**Godspeed** leverages Apollo Server, a powerful and extensible open-source server built on GraphQL, to streamline the creation of GraphQL APIs. Apollo Server excels in automatic schema generation and seamless integration with diverse data sources, providing a robust foundation for scalable and high-performance GraphQL applications.

This guide offers a concise overview of integrating the GraphQL plugin into the Godspeed framework as an Event Source.

### Setting up Graphql

1. Add the GraphQL plugin to Godspeed-CLI with the `godspeed plugin add` command.

2. Tailor the configuration file according to your needs in `eventsource/graphql.yaml`.

  - Create a godspeed project from the CLI , open the created project in vscode and then add the plugin from the CLI of vscode, select the `@godspeedsystems/plugins-graphql-as-eventsource` to integrate the plugin.

  ```
  > godspeed plugin add
        ,_,   ╔════════════════════════════════════╗
        (o,o)  ║        Welcome to Godspeed         ║
      ({___}) ║    World's First Meta Framework    ║
        " "   ╚════════════════════════════════════╝
  ? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
  ┌────┬───────────────────────────────────┬─────────────────────────────────────────────────────────────────┐
  │    │ Name                              │ Description                                                     │
  ├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
  │ ❯◯ │ graphql-as-eventsource            │ graphql as eventsource plugin for Godspeed Framework            │
  ├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
  │  ◯ │ aws-as-datasource                 │ aws as datasource plugin for Godspeed Framework                 │
  ├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
  │  ◯ │ mailer-as-datasource              │ mailer as datasource plugin for Godspeed Framework              │
  ├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
  │  ◯ │ excel-as-datasource               │ excel as datasource plugin for Godspeed Framework               │
  ├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
  │  ◯ │ kafka-as-datasource-as-eventsource│ kafka as datasource-as-eventsource plugin for Godspeed Framework│
  └────┴───────────────────────────────────┴─────────────────────────────────────────────────────────────────┘
  ```

  #### A GraphQL instance configuration 

  File: (src/eventsources/Apollo.yaml)

  This configuration is same as Express or Fastify configuration, except that currently file upload is not supported and so is not swagger (since Swagger is not relevant for Graphql). 

  Everything else like authn, authz, port, log attributes is same. 
  ```yaml
  type: graphql
  port: 4000

  #jwt settings to run by default on every event (endpoint)
  authn:
    jwt:
      secretOrKey: mysecret #the secret
      audience: mycompany #aud in jwt token
      issuer: mycompany #iss in jwt token

  # authorization policies to run by default on every event
  # Uncomment this to start checking user roles.
  # This will require jwt to be setup, or another middleware to parse the user information in inputs. Currently Graphql, Epress and Fastify support creating user object from JWT token in incoming request.
  authz:
    - id: check_user_role
      fn: com.gs.transform
      args: <%inputs.user.role === 'admin'%> #an inline JS based check of user role

  # validation error handling, to transform error responses on wrong input or response
  on_request_validation_error: validations.request.standardResponse
  on_response_validation_error:
    - id: response_validation_error_handler
      fn: com.gs.return
      args: <%inputs%>
  ```

3. #### Setup Graphql events & event handlers 

  Ensure the event key prefix aligns with the name of the configuration YAML file. In this example, the prefix for the Event key is `Apollo`. The event schema follows REST standards, resembling HTTP events.

  #### GraphQL Event 
  Its same as http event format. When creating Graphql schema, all `get` events are created as queries and rest are mutations.
  File: (src/events/create_category.yaml)

  ```yaml
  Apollo.post./mongo/category: #this will become a mutation
    summary: Create a new Category
    description: Create Category from the database
    fn: create
    body:
      content:
        application/json:
          schema:
            type: object
            properties:
              name:
                type: string
    responses:
      content:
        application/json:
          schema:
            type: object
  ```

  #### GraphQL event handler 

  Every Graphql event has a `body`, `headers` and `user`. You can access the same in your Typescript, Javascript or YAML functions. Below is an example of a TS and YAML workflow.

  #### src/functions/create.ts
  ```typescript
  export default function (ctx: GSContext, args: PlainObject) {
      const ds = ctx.datasources.mongoose;
      //@ts-ignore
      const response = ds.Category.create(ctx.inputs.data.body);
      return {
        code: 201,
        data: response
      }
  }
  ```

  #### src/functions/create.yaml

  ```yaml
  summary: Find one via Mongoose from Mongodb
  tasks:
    - id: mongo_category_create
      fn: datasource.mongoose.SomeModel.findOne
      args: #as an array
        - name: mastersilv3r #search clause: First argument
        - 'name age' #The projection: second argument
        - {} # Options: the third argument
  ```

4. Use `godspeed gen-graphql-schema` to auto generate graphql schema.

5. Use `godspeed serve `to start server. 

6. Open `https://studio.apollographql.com/sandbox/explorer` on your browser and connect with the correct port on which you are running Apollo service.

This configuration emphasizes the simplicity of implementing GraphQL within the Godspeed framework, promoting efficiency and clarity in API development.

## Reference links
**- ** [Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/graphql-as-eventsource)   
**- ** [Issue Tracker](https://github.com/godspeedsystems/gs-plugins/issues)      
**- ** [npm package](https://www.npmjs.com/package/@godspeedsystems/plugins-graphql-as-eventsource)


---- Content from: D:\gs-documentation\docs\microservices-framework\event-sources\event-source-plugins\Cron Eventsource.md ----

Cron jobs are a standard method of scheduling tasks to run on your server. Cron is a service running in the background that will execute commands (jobs) at a specified time, or at a regular interval. Jobs and their schedules are defined in a configuration file called a crontab.


A brief description of how to use Cron plug-in in  godspeed framework as Event Source. 

## Steps to use cron plug-in in godspeed framework:

### Example usage :

1. Update configuration file based on your requirements in `eventsource/cron.yaml`.
#### cron config ( src/eventsources/cron.yaml )3

## How to Use
- Create a godspeed project from the CLI and by default the Express plugin is integrated into your project if not, add the plugin from the CLI and select the `@godspeedsystems/plugins-cron-as-eventsource` to integrate the plugin.
```
> godspeed plugin add
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌────┬───────────────────────────────────┬─────────────────────────────────────────────────────────────────┐
│    │ Name                              │ Description                                                     │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│  ◯ │ express-as-http                   │ Godspeed event source plugin for express as http server         │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│  ◯ │ aws-as-datasource                 │ aws as datasource plugin for Godspeed Framework                 │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│  ◯ │ mailer-as-datasource              │ mailer as datasource plugin for Godspeed Framework              │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│ ❯◯ │ cron-as-eventsource               │ Cron as eventsource plugin for Godspeed Framework               │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│  ◯ │ kafka-as-datasource-as-eventsource│ kafka as datasource-as-eventsource plugin for Godspeed Framework│
└────┴───────────────────────────────────┴─────────────────────────────────────────────────────────────────┘
```


```yaml
type: cron
```
event key prefix should be the `type` mensioned in the config `yaml` file.

#### cron event  ( src/events/every_minute_task.yaml )

```yaml
# event for Shedule a task for evrey minute.

cron.* * * * *.Asia/Kolkata: //event key
  fn: every_minute

```
For  cron expressions   `https://crontab.cronhub.io/`

#### cron workflow to schedule ( src/functions/every_minute.yaml )


```yaml
summary: this workflow will be running every minute
tasks:
  - id: print
    description: print for every minute
    fn: com.gs.return
    args:
      data: HELLO from CRON
```

## Reference links
**- ** [Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/cron-as-eventsource)   
**- ** [Issue Tracker](https://github.com/godspeedsystems/gs-plugins/issues)      
**- ** [npm package](https://www.npmjs.com/package/@godspeedsystems/plugins-cron-as-eventsource)


---- Content from: D:\gs-documentation\docs\microservices-framework\event-sources\event-source-plugins\Express Http Eventsource.md ----

# Godspeed Express Plugin

The Godspeed Express Plugin is a core component of the Godspeed framework, integrating with the popular Express.js framework to handle HTTP events. This plugin provides seamless, schema-driven development for HTTP-based event handling, offering features like input/output validation, authentication, and Swagger/GraphQL spec generation. This flexible tool allows developers to build robust, modular, and configurable server-side applications in Node.js.

Explore the **[Plugin Source Code here](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/express-as-http)**

### Plugin Features
Read More about the Features of Express Plugin [here](/docs/microservices-framework/event-sources/event-source-plugins/express-plugin.md)

## How to Use
- Create a godspeed project from the CLI and by default the Express plugin is integrated into your project if not, add the plugin from the CLI and select the `@godspeedsystems/plugins-express-as-http` to integrate the plugin.
```
> godspeed plugin add
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌────┬───────────────────────────────────┬─────────────────────────────────────────────────────────────────┐
│    │ Name                              │ Description                                                     │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│ ❯◯ │ express-as-http                   │ Godspeed event source plugin for express as http server         │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│  ◯ │ aws-as-datasource                 │ aws as datasource plugin for Godspeed Framework                 │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│  ◯ │ mailer-as-datasource              │ mailer as datasource plugin for Godspeed Framework              │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│  ◯ │ excel-as-datasource               │ excel as datasource plugin for Godspeed Framework               │
├────┼───────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│  ◯ │ kafka-as-datasource-as-eventsource│ kafka as datasource-as-eventsource plugin for Godspeed Framework│
└────┴───────────────────────────────────┴─────────────────────────────────────────────────────────────────┘
```
- You will find two files added in your project related to the Express plugin at `src/eventsources/types/express.ts` - the type file and `src/eventsources/http.yaml` - the instance file.

### Type File

`eventsources/types/express.ts`

> You generally will not need to touch this file, unless you want to extend or customize the Express functionality
```typescript
import { ExpressEventSource } from '@godspeedsystems/plugins-express-as-http';
export default ExpressEventSource;
```
This is the file generated by the plugin add command. In case you want to customise the Express plugin to add new features like some middlewares not currently supported by the default plugin implementation, you can modify this `type` file in your project. Checkout the section [how to create custom event source](../create-custom-event-source.md)


### Instance file

`src/eventsources/http.yaml`

You can create as many Express instances in your project as http1, http2 and so on. The instance files keep configurations of each instance for the given type of plugin (in following example it is of `type: express`)

<details>
<summary> Default Instance (yaml) File of Express Plugin </summary>

```yaml
type: express
port: 3000
base_url: /api/v1 #the base url of the http service

#Bassic swagger setup
docs:
  endpoint: /api-docs # the url on which the service will start
  info: # info object as per swagger 3.0 spec
    title: Sample Godspeed App
    version: 1.1.0
    summary: some http calls
    description: lets play with Godspeed
    contact:
      name: API Support
      url: 'http://www.myfintech.com/support'
      email: support@myfintech.com
    license:
      name: Apache 2.0
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
  servers:
    - url: 'http://localhost:3000'
      description: Public API server
    - url: 'http://localhost:3001'
      description: Internal API server

request_body_limit: 20000 # maximum size of the request body (in bytes)
file_size_limit: 50000 # How big a file can be uploaded (in bytes) Default is 50 MB.

#jwt settings to run by default on every event (endpoint)
authn:
  jwt:
    secretOrKey: mysecret #the secret
    audience: mycompany #aud in jwt token
    issuer: mycompany #iss in jwt token

# authorization policies to run by default on every event
# Uncomment this to start checking user roles.
# This will require jwt to be setup, or another middleware to setup the user information in inputs
authz:
  - id: check_user_role
    fn: com.gs.transform
    args: <%inputs.user.role === 'admin'%> #an inline JS based check of user role

# validation error handling, to transform error responses on wrong input or response
on_request_validation_error: validations.request.standardResponse
on_response_validation_error:
  - id: response_validation_error_handler
    fn: com.gs.return
    args: <%inputs%>
```
</details>

### HTTP Event Schema Format

All types of events in Godspeed follow a standard format, with only the first line of the event definition changing as per the eventsource type. In case of http, the following structure represents the applicable composition of an event.
Specifying the event schema here, not only validates your input and response, handles authentication and authorization, but also generates your swagger spec and Graphql schema.

```yaml
  http.<method>./<endpoint_url>: #the base_url is prepended to this endpoint path when the service runs
    fn: path.to.function #the event handler: could be a typescript, javascript or YAML function
    
    # Swagger params
    body: #requestBody - applicable for POST, PUT requests
    params: #headers, query, path params as per swagger spec
    responses: #response structure as per swagger spec
    id:
    operationId:
    tags:
    summary:
    description:
    
    #OTHER PARAMS
    # more common parameters to all event types across all event sources, as well applicable to http events
    on_request_validation_error:
    on_response_validation_error:
    authn: 
    authz:
    log:
      attributes:
```
- The event YAML defines properties for handling specific HTTP requests within the Express app. In the YAML, `<method>` should be replaced with actual HTTP methods such as `GET, POST, PUT, or DELETE`, specifying how the app handles those requests. The `<endpoint_url>` field should contain the API URL for the respective HTTP route.
- A function (event handler) will be triggered on sending a request to the respective url. The functions are created under `src/functions/`.

## Get Started by writing an event and workflow for Express 

You can store one or more events in each YAML file stored in the `events` folder. The files can be organized and stored in any folder structure. 

`src/events/sample.yaml`
<details>
<summary> Sample Event </summary>

```yaml
  http.get./sample_api:
    fn: sample      #redirects to src/functions/sample.yaml
    authn: false #to disable global default setting of JWT authn, say authn: false.
    # authz: overriden.custom.authz_fn #here you can add path to a JS/TS/YAML function file or put inline YAML workflow for custom authz
    id: # Swagger id. by default calculated from the event URI
    operationId: #Swagger if not set explicitly, the `id` is used. if `id` not set `summary` is used. If that is also not set, `${method}_${apiEndPoint}` with whitespace replaced by `_` is used
    tags: #swagger tags. by default, a tag is generated from the `folder_path+event_file_name`
    summary: #swagger description
    description: #swaggers summary 
    body: #swagger spec equivalent to swagger's requestBody
      content:
        application/json:
          schema:
            type: object
            properties:
              name: 
                type: string
              message: 
                type: string                         
    params: #swagger params
      - in: query
        name: user
        required: true  
        schema: 
          type: string   
    responses:    #swagger spec of responses   
      200:
        content:
          application/json:
            schema:
              type: string
    log: #custom attributes to add with log statements wherever they are printed by the handlers called by this event
      attributes:
        event_name: sample

    # on_request_validation_error:
    # on_response_validation_error:
```
</details>

### Event Handler or Workflow: (TS/JS based)

The meta-framework supports pure functions. This means they take JSON as input and return JSON as output, irrespective of the eventsource from where the event is captured and response returned.
Hereby sharing a typescript function which shows all that you get in your event handler workflow
when an event is captured by _any event source_. The generic input structure is constant whether for Express, Fastify, Kafka, Salesforce, Socket etc.

```typescript
import { GSContext, PlainObject } from "@godspeedsystems/core";

export default function (ctx: GSContext, args: PlainObject) {
    //@ts-ignore
    const {
        inputs: {
            data: {
                params, body, query, user, headers, files
            }
        }, 
        childLogger, 
        logger,
        outputs,
        functions, 
        datasources,
        config,
        mappings
    }: {
        inputs: {
            data: {
                params: PlainObject,
                body: PlainObject,
                query: PlainObject,
                user: PlainObject,
                headers: PlainObject,
                files: any
            }
        }, 
        childLogger: any, // Pino logger with log.attributes set (which you saw in eventsource, event configurations as well)
        outputs: PlainObject,
        logger: any, //Pino logger (Plain jain Pino logger without any custom log attributes)
        functions: PlainObject, // The functions in the `src/functions` folder
        datasources: PlainObject, // The clients of the datasources you have configured in this proejct 
        config: PlainObject, //Plain JSON of the config folder as per the node-config module
        mappings: PlainObject //Plain JSON loaded from the mappings folder
    } = ctx;
    
    // Will print with workflow_name and task_id attributes
    childLogger.info('Server is running healthy');
    // Will print without workflow_name and task_id attributes
    logger.info('Inputs object \n user %o query %o body %o headers %o params %o', user, query, body, headers, params);
    logger.info('Outputs object has outputs from previous tasks with given ids %o', Object.keys(outputs));
    logger.info('Datasources object has following datasource clients %o', Object.keys(datasources));
    logger.info('Total functions found in the project %s', Object.keys(functions).length)
    
    return {
        data: 'Its working! ' + body.name,
        code: 200,
        success: true,
        headers: {
            custom_response_header: 'something'
        }
    }
}
```

### Event Handlers: YAML based
Same response in a yaml workflow.

```yaml
summary: Returning response
tasks:
  - id: first_task
    fn: com.gs.return
    args: 
      data: <% 'Its working + inputs.body.name %>
      headers:
        custom_response_header: something
      # code: 200 Default value from com.gs.return is success and code is 200
```

## Setting Base Url
The base url is set in datasources/api.yaml

```
type: axios
base_url: /api/v1
```

## Configuring JWT

You can configure JWT settings within the eventsources/http.yaml. Here's an example of such a configuration:

```
type: express
authn:
  jwt:
    issuer: <% config.issuer %>  # must be equal to the key iss in your jwt token
    audience: <% config.audience %> # must be equal to the key aud in your jwt token
    secretOrKey: <% config.secret %>
```
> Note: In order to add OAUTH2 you will need to customize the Express event source as it is not currently supported in the default implementation. Your PR Is welcome!


## Configuring OAuth2

You can configure OAUth2 settings within the eventsources/http.yaml. [Here's an example of such a configuration](/docs/microservices-framework/authentication/oauth2-authentication#3-configure-your-eventsource)


### Uploading files

The Express plugin allows you to upload your files

The default file size accepted is 50MB. If you wish to specify a custom file size, you can modify the value in `"./src/eventsources/http.yaml`".

<details>
<summary> Example- Event to Upload file </summary>
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
</details>


<details>
<summary> Example Workflow to handle the uploaded files </summary>

```typescript
  export default function (ctx: GSContext) {
    // You will get files in the ctx.inputs, along with params, body, query, user, headers
    const { files: { panCardFile } } = ctx.inputs.data;
    //do something like upload to S3
    return {
      data: 'Uploaded',
      success: true,
      code: 201,
      //headers: {}
    }
  }
```
</details>

### Example success response

![image](https://res.cloudinary.com/dzdcjchdc/image/upload/v1704369051/Screenshot_from_2024-01-04_17-20-32_dfzirt.png)

Upon successful upload of the file in Postman, an autogenerated **`tmp`** folder is created within the project directory, containing the uploaded file.

## Plugin Components

[Click here](/docs/microservices-framework/event-sources/event-source-plugins/express-plugin.md) to read more about the Key Components of Express Plugin.


## Reference links
**- ** [Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/express-as-http)    
**- ** [npm package](https://www.npmjs.com/package/@godspeedsystems/plugins-express-as-http)


---- Content from: D:\gs-documentation\docs\microservices-framework\event-sources\event-source-plugins\express-plugin.md ----

## Express-as-http Plugin 

This plugin is designed to integrate with the Godspeed framework and provides functionality related to event sources using Express.js, a popular Node.js web application framework. It allows you to create event sources that can listen for incoming HTTP requests and trigger actions based on those requests.

## Plugin Features

The Godspeed Express Plugin provides the following benefits:

1. **Modular Express Integration:** The plugin abstracts away the complexities of setting up an Express.js application, making it effortless to define routes and handlers for incoming HTTP ou can replace Express with Fastify or another HTTP service tomorrow without changing a single line of code in your business logic and http eventsource configurations, giving you flexibility. You can also provide same API using Graphql or Fastify service by just replacing `http` with `http & graphql & fastify` in your event definitions. For ex. `http & graphql & fastify.get.helloworld` 

2. **Unified event schema with validations and auth:** Developers can easily subscribe to specific HTTP events by defining routes and handlers using a uniform schema which handles authentication, authorization and validations, not just for Express but also other event sources.

3. **Customizable Configuration:** The plugin allows for easy configuration of Express settings, such as port, request body limits, file size limits, JWT authentication, authorization, swagger generation etc.

4. **Reusable pure function handlers:** The plugin works seamlessly with the Godspeed Core library, enabling the processing of cloud events in pure workflows, decoupled with Express API, making them reusable.

5. **File upload feature:** The Express plugin allows you to upload files as well.

6. **Authenticating users using oauth2:** This will allow your users to sign in to your application using their existing Google/Linkedin/GitHub credentials.

## Plugin Components

The plugin consists of several key components:

### 1. `EventSource` Class

- This class extends `GSEventSource`, a base class provided by the Godspeed framework for creating event sources.

- It initializes an Express.js server to listen for incoming HTTP requests based on the provided configuration options.

- The `subscribeToEvent` method is used to define how the plugin should respond to specific HTTP routes. It maps incoming HTTP requests to Godspeed Cloud Events, processes them using a provided function, and sends a response.

- The `createGSEvent` static method is used to create a Godspeed Cloud Event from an incoming Express.js request.

### 2. Constants

- `SourceType`: A constant representing the source type of the plugin, which is 'ES' (event source).

- `Type`: A constant representing the loader file of the plugin. The final loader file will be located in the 'types' directory and named `${Type.js}`, where `Type` is 'express' in this case.

- `CONFIG_FILE_NAME`: In the context of an event source, this constant also serves as the event identifier. For a data source, it works as the data source name. In this plugin, it is set to 'http'.

- `DEFAULT_CONFIG`: A default configuration object with options like the port number for the Express.js server.

## Conclusion

Our Express plugin is a powerful addition to the Godspeed framework, allowing you to seamlessly integrate and manage event sources within your applications. With this plugin, you can effortlessly handle HTTP requests, define routes, and trigger actions, making it an essential tool for building robust and responsive applications.

We value your feedback and contributions. If you have questions, suggestions, or encounter any issues while using the plugin, please don't hesitate to reach out to us. Your insights and ideas can help us improve and enhance this plugin for the entire community.

We're excited to see what you'll create with the Express plugin, and we look forward to collaborating with you to make your projects even more successful. Happy coding!



---- Content from: D:\gs-documentation\docs\microservices-framework\event-sources\event-source-plugins\Fastify Eventsource.md ----

## Introduction

The Godspeed Fastify Plugin is an essential component of the Godspeed framework, designed to streamline the integration of event-driven and serverless functionalities into your projects. This plugin harnesses the power of Fastify, a fast and low overhead web framework for Node.js, to handle HTTP events. It simplifies the process of defining event subscriptions and processing incoming events, providing a robust foundation for building responsive and scalable applications.

## How to Use
When creating a Godspeed project using the CLI, you can add the plugin from the CLI and select `@godspeedsystems/plugins-fastify-as-http` to seamlessly integrate it into your project.
```bash
godspeed plugin add


       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝


? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌──────┬────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
│      │ Name                                   │ Description                                                                    │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│ ❯◯   │ fastify-as-http                        │ Godspeed event source plugin for fastify as http server                        │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ aws-as-datasource                      │ aws as datasource plugin for Godspeed Framework                                │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ excel-as-datasource                    │ excel as datasource plugin for Godspeed Framework                              │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ mailer-as-datasource                   │ mailer as datasource plugin for Godspeed Framework                             │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ elasticgraph-as-datasource             │ elasticgraph as datasource plugin for Godspeed Framework                       │
└──────┴────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘
```
- You will find the files in your project related to the Fastify plugin at `src/eventsources/types/fastify.ts` and `src/eventsources/http.yaml`.

### fastify.ts

```typescript
import { FastifyEventSource } from '@godspeedsystems/plugins-fastify-as-http';
export default FastifyEventSource;
```

### Fastify config (src/eventsources/http.yaml)

```yaml
type: fastify
port: 3000
```
### fastify event (src/events/sample.yaml)
```yaml
http.post./sample_api:
    fn: sample      #redirects to src/functions/sample.yaml
    body: 
      content:
        application/json:
          schema:
            type: object
            properties:
              name: 
                type: string
              message: 
                type: string                         
    params:     
      - in: query
        name: user
        required: true  
        schema: 
          type: string   
    responses:      
      200:
        content:
          application/json:
            schema:
              type: string
```
```yaml
http.<method>./<endpoint_url>:
    fn: <function_yaml>
    body:
    params:
    responses:
```
- The event YAML defines properties for handling specific HTTP requests within the Fastify app. In the YAML, `<method>` should be replaced with actual HTTP methods such as `GET, POST, PUT, or DELETE`, specifying how the app handles those requests. The `<endpoint_url>` field should contain the API URL for the respective HTTP route.
- A function will be triggered on sending a request to the respective url. The functions are created under `src/functions/`.

### Function to be called (src/functions/sample.yaml)
```yaml
summary:
description:
tasks:
    - id: example
      fn: com.gs.return #its an inbuilt function
      args: |
        <%"Hello "+inputs.query.user+". This is a message from body "+inputs.body.message%>
```

## How It Helps

The Godspeed Fastify Plugin provides the following benefits:

1. **Fastify Integration:** The plugin simplifies the setup of a Fastify application, enabling easy definition of routes and handlers for incoming HTTP events.

2. **Event Subscription:** Developers can effortlessly subscribe to specific HTTP events by defining routes and handlers using a consistent API.

3. **Customizable Configuration:** The plugin provides simple configuration options for Fastify settings, including port, request body limits, and file size limits.

4. **Integration with Godspeed Core:** Seamlessly works with the Godspeed Core library, facilitating the processing of cloud events and supporting event-driven architecture.

## Plugin Explaination

This plugin is designed to seamlessly integrate with the Godspeed framework, offering functionality related to event sources using Fastify, a performant web framework for Node.js. It allows you to create event sources that listen for incoming HTTP requests, triggering actions based on those requests.

## Plugin Components

The [plugin](./src/index.ts) consists of several key components:

### 1. `EventSource` Class

- This class extends `GSEventSource`, a base class provided by the Godspeed framework for creating event sources.

- It initializes an Fastify server to listen for incoming HTTP requests based on the provided configuration options.

- The `subscribeToEvent` method is used to define how the plugin should respond to specific HTTP routes. It maps incoming HTTP requests to Godspeed Cloud Events, processes them using a provided function, and sends a response.

- The `createGSEvent` static method is used to create a Godspeed Cloud Event from an incoming Fastify request.

### 2. Constants

- `SourceType`: A constant representing the source type of the plugin, which is 'ES' (event source).

- `Type`: A constant representing the loader file of the plugin. The final loader file will be located in the 'types' directory and named `${Type.js}`, where `Type` is 'fastify' in this case.

- `CONFIG_FILE_NAME`: In the context of an event source, this constant also serves as the event identifier. For a data source, it works as the data source name. In this plugin, it is set to 'http'.

- `DEFAULT_CONFIG`: A default configuration object with options like the port number for the Fastify server.


## Conclusion

The Godspeed Fastify Plugin is a valuable addition to the Godspeed framework, providing a seamless solution for integrating and managing event sources within your applications. With this plugin, handling HTTP requests, defining routes, and triggering actions become effortless, making it an indispensable tool for building responsive and scalable applications.

We welcome your feedback and contributions. If you have questions, suggestions, or encounter any issues while using the plugin, please reach out to us. Your insights and ideas can help us improve and enhance this plugin for the entire community.

We are excited to see the innovative projects you will create with the Fastify plugin, and we look forward to collaborating with you to make your projects even more successful. Happy coding!

## Reference links
**- ** [Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/fastify-as-http)   
**- ** [Issue Tracker](https://github.com/godspeedsystems/gs-plugins/issues)      
**- ** [npm package](https://www.npmjs.com/package/@godspeedsystems/plugins-fastify-as-http)


---- Content from: D:\gs-documentation\docs\microservices-framework\event-sources\event-source-plugins\Kafka Eventsource.md ----

Kafka is a versatile messaging system designed to securely transfer data between various systems. Its functionality can be tailored through configuration, allowing it to serve as a reliable conduit for real-time event tracking or even function as a replicated distributed database. While it's often colloquially labeled as a queue, it's more precisely described as a hybrid system that combines characteristics and trade-offs from both queue and database systems.

A brief description of how to use Kafka plug-in in our godspeed framework as Data Source as Event Source. 

## Steps to use kafka plug-in in godspeed framework:

## How to Use
- Create a godspeed project from the CLI , open the created project in vscode and then add the plugin from the CLI of vscode, select the `@godspeedsystems/plugins-kafka-as-datasource-as-eventsource` to integrate the plugin.

```
> godspeed plugin add
       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝
? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌──────┬────────────────────────────────────┬────────────────────────────────────────────────────────────────────┐
│      │ Name                               │ Description                                                        │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│  ◯   │ prisma-as-datastore                │ Prisma as a datasource plugin for Godspeed Framework.              │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│  ◯   │ aws-as-datasource                  │ aws as datasource plugin for Godspeed Framework                    │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│  ◯   │ excel-as-datasource                │ excel as datasource plugin for Godspeed Framework                  │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│  ◯   │ mailer-as-datasource               │ mailer as datasource plugin for Godspeed Framework                 │
├──────┼────────────────────────────────────┼────────────────────────────────────────────────────────────────────┤
│ ❯◯   │ kafka-as-datasource-as-eventsource │ kafka as datasource-as-eventsource plugin for Godspeed Framework   │
└──────┴────────────────────────────────────┴────────────────────────────────────────────────────────────────────┘
```

### Example usage Datasource (Producer):

1. Update configuration file based on your requirements in `Datasource/kafka.yaml`.
#### kafka config ( src/datasources/kafka.yaml )
```yaml
type: kafka
clientId: "kafka_proj"
brokers: ["kafka:9092"]
```



#### kafka event for Producer ( src/events/kafka_pub.yaml )
In the event, we establish an HTTP endpoint that accepts parameters such as the topic name and message content. When this endpoint is invoked, it triggers the `datasource.kafka.producer` function. This function, in turn, takes the provided topic name and message as input arguments and performs the task of publishing the message to the specified Kafka topic.
```yaml
# event for Publish

'http.post./kafka-pub':
  fn: kafka-publish
  body:
    content:
      application/json:
        schema:
          type: object
          properties:
            message:
              type: string
          required: ['message']

```
#### kafka workflow for Producer ( src/functions/kafka-publish.yaml )

In workflow we need to mension `datasource.kafka.producer` as function (fn) to produce data.

```yaml
id: kafka-publish
summary: kafka publish message
tasks:
    - id: publish
      fn: datasource.kafka.producer
      args:
        topic: "publish-producer1"
        message: <% inputs.body.message %>
```

### Example usage EventSource (Consumer):

1. Update configuration file based on your requirements in `Eventsources/kafka.yaml`.
#### kafka config ( kafka.yaml )
```yaml
type: kafka
groupId: "kafka_proj"

```

#### kafka event for consumer ( src/events/kafka_pub.yaml )

To use Consumer we need to follow the below event key format.

```
 kafka.{Topic}.{GroupId}
```
The consumer event is triggered whenever a new message arrives on the specified topic. Upon triggering, it retrieves the incoming message and forwards it to the `kafka_consume` function. Inside this function, the incoming message is processed, and the result is then returned.

``` yaml
# event to consume data from Topic
kafka.publish-producer1.kafka_proj: // event key
  id: kafka__consumer
  fn: kafka_consume
  body:
    description: The body of the query
    content:
      application/json: 
        schema:
          type: string
```
#### kafka workflow for Consumer ( src/functions/kafka_consume.yaml )
```yaml
# function for consume data
id: kafka-consumer
summary: consumer
tasks:
    - id: set_consumer
      fn: com.gs.return
      args: <% inputs %>
```

## Reference links
**- ** [Plugin Repository](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/kafka-as-datasource-as-eventsource)   
**- ** [Issue Tracker](https://github.com/godspeedsystems/gs-plugins/issues)      
**- ** [npm package](https://www.npmjs.com/package/@godspeedsystems/plugins-kafka-as-datasource-as-eventsource)



---- Content from: D:\gs-documentation\docs\microservices-framework\event-sources\event-source-plugins\Overview.md ----

Godspeed framework adopts a pluggable approach that empowers you to define eventsources effortlessly. Our framework provides an interface that caters to diverse eventsource needs. Here's a glimpse into the exceptional eventsource plugins crafted by our core framework team.

## How to add plugin in your project?
To integrate these plugins into your project, simply use the command:

```bash
$  godspeed plugin add
```
```bash


       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝


? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌──────┬────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
│      │ Name                                   │ Description                                                                    │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│ ❯◯   │ cron-as-eventsource                    │ Cron as eventsource plugin for Godspeed Framework                              │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ aws-as-datasource                      │ aws as datasource plugin for Godspeed Framework                                │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ excel-as-datasource                    │ excel as datasource plugin for Godspeed Framework                              │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ mailer-as-datasource                   │ mailer as datasource plugin for Godspeed Framework                             │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ kafka-as-datasource-as-eventsource     │ kafka as datasource-as-eventsource plugin for Godspeed Framework               │
└──────┴────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘

```

you can specify plugin name to add directly to your project

```sh
godspeed plugin add <plugin-name>
```

---- Content from: D:\gs-documentation\docs\microservices-framework\event-sources\event-source-plugins.md ----

 # Eventsource plugins

Godspeed framework adopts a pluggable approach that empowers you to define eventsources effortlessly. Our framework provides an interface that caters to diverse eventsource needs. Here's a glimpse into the exceptional eventsource plugins crafted by our core framework team.


## List of eventsource plugins

### 1. [express-as-http](https://www.npmjs.com/package/@godspeedsystems/plugins-express-as-http)

Embark on a journey of API development made sublime. The express-as-http plugin, renowned for its simplicity and velocity, equips you with essential features to effortlessly handle HTTP routes, requests, and responses. Elevate your server-side applications in Node.js with this gem.

### 2. [cron-as-eventsource](https://www.npmjs.com/package/@godspeedsystems/plugins-cron-as-eventsource)

cron-as-eventsource is a plugin which running in the background that will execute events at a specified time, or in a regular intervals.


### 3. [kafka-as-datasource-as-eventsource](https://www.npmjs.com/package/@godspeedsystems/plugins-kafka-as-datasource-as-eventsource)

Kafka is your dynamic data stream and event maestro! As a datasource, it floods your systems with real-time insights, turning data into decision-making gold. And when it comes to event sourcing, Kafka orchestrates a symphony of real-time events that power your applications and spark innovation. Experience the future of data and event handling with Kafka. 

### 4. [apollographql-as-eventsource](https://www.npmjs.com/package/@godspeedsystems/plugins-graphql-as-eventsource)

GraphQL is a query language and runtime for APIs that enables clients to request precisely the data they need. It allows developers to describe the structure of the data they require, providing a more efficient and flexible alternative to traditional REST APIs. GraphQL empowers front-end developers to shape their API requests, minimizing over-fetching and under-fetching of data.

### 5. [fastify-as-eventsource](https://www.npmjs.com/package/@godspeedsystems/plugins-fastify-as-http)


## How to add plugin in your project?
To integrate these plugins into your project, simply use the command:

```bash
$  godspeed plugin add
```
```bash


       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝


? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌──────┬────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
│      │ Name                                   │ Description                                                                    │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│ ❯◯   │ cron-as-eventsource                    │ Cron as eventsource plugin for Godspeed Framework                              │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ aws-as-datasource                      │ aws as datasource plugin for Godspeed Framework                                │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ excel-as-datasource                    │ excel as datasource plugin for Godspeed Framework                              │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ mailer-as-datasource                   │ mailer as datasource plugin for Godspeed Framework                             │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ kafka-as-datasource-as-eventsource     │ kafka as datasource-as-eventsource plugin for Godspeed Framework               │
└──────┴────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘

```

you can specify plugin name to add directly to your project

```sh
godspeed plugin add <plugin-name>
```


---- Content from: D:\gs-documentation\docs\microservices-framework\event-sources\event-types\cron-events.md ----


# Cron event
[Cron](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/cron-as-eventsource#godspeed-plugin-cron-as-eventsource)  jobs are a standard method of scheduling tasks to run on your server. Cron is a service running in the background that will execute commands (jobs) at a specified time, or at a regular interval. Jobs and their schedules are defined in a configuration file called a crontab.

:::tip 
- event key prefix should be the type mensioned in the config yaml file.
- For cron expressions https://crontab.cronhub.io/
:::

### Cron Event 

( src/events/every_minute_task.yaml )
```yaml
# event for Scheduling a task for every minute.
cron.* * * * *.Asia/Kolkata:   # event key
  fn: every_minute

```

### Explanation of Cron Event Configuration:

- `cron.*`: This is the cron syntax for the field representing minutes. The asterisk (*) in this position means "every minute," so the event is scheduled to run every minute.

- `* * * * *`: These asterisks represent the other cron fields, which specify the schedule for hours, days of the month, months, and days of the week, respectively. 

- `Asia/Kolkata`: This is a timezone specification. It indicates that the event is scheduled to run in the Asia/Kolkata timezone. Kolkata is a city in India, and this timezone corresponds to the Indian Standard Time (IST).

### Cron workflow to schedule 
( src/functions/every_minute.yaml )
```yaml
summary: this workflow will be running every minute
tasks:
  - id: print
    description: print for every minute
    fn: com.gs.return
    args:
      data: HELLO from CRON
```






---- Content from: D:\gs-documentation\docs\microservices-framework\event-sources\event-types\graphql-events.md ----

# Apollo Graphql Event

The GraphQL event configuration in Godspeed allows seamless integration of GraphQL APIs, emphasizing simplicity and efficiency in API development. The configuration file (Apollo.yaml) specifies the GraphQL type and port, ensuring alignment with the event key prefix.

### GraphQL Configuration 
The Apollo Graphql plugin is currently configured exactly the same as Express and Fastify eventsources. Except that it doesn't have swagger config and doesn't support file upload as of now.

(src/eventsources/apollo.yaml)
```yaml

type: graphql
port: 4000
# eventsource level default settings (can be overriden at event level)
authn:
authz:
on_request_validation_error:
on_response_validation_error:

```

:::tip note
Ensure the event key prefix aligns with the name of the configuration YAML file. In this example, the prefix for the Event key is `apollo` as per the yaml file name (src/eventsources/apollo.yaml). The event schema follows REST standards, resembling HTTP events.
:::

### GraphQL Event 

(src/events/create_category.yaml)
```yaml
apollo.post./mongo/category:      // event key having prefix apollo
  summary: Create a new Category
  description: Create Category from the database
  fn: create
  body:
    content:
      application/json:
        schema:
          type: object
```

### GraphQL Workflow 

(src/functions/create.yaml)
```yaml
summary: Create Category
tasks:
  - id: mongo_category_create
    fn: datasource.mongo.Category.create
    args:
      data: <% inputs.body %>

```

:::tip note
- use godspeed gen-graphql-schema to auto generate graphql schema.
- use godspeed serve to start server.

:::

This configuration emphasizes the simplicity of implementing GraphQL within the Godspeed framework, promoting efficiency and clarity in API development.



---- Content from: D:\gs-documentation\docs\microservices-framework\event-sources\event-types\http-events.md ----

# HTTP events

In Godspeed, sync APIs are created as HTTP events. Each API endpoint is essentially an event configured to listen for HTTP requests and respond accordingly. HTTP events accept inputs such as body, headers, path parameters, and query parameters. 

### HTTP Event Schema

- The framework provides request and response schema validation out of the box.
- To switch between events, you'll need to adjust the event schema based on the expected inputs. For instance,

This event schema is supported by [HTTP express eventsource](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/express-as-http#godspeed-express-plugin)

```yaml
http.post./mongo/user/search/{id}: #This is the only thing that changes across all the events
  summary: Update a user # as per Swagger spec
  description: Update user from database # as per Swagger spec
  fn: com.biz.mongo.user.update # function to be invoked
  on_validation_error: com.jfs.handle_validation_error
  params: # params as per Swagger spec
    - name: id
      in: path
      required: true
      schema:
        type: string
    - name: name
      in: query
      required: false
      schema:
        type: string
  body: #as per Swagger spec
    content:
      application/json:
        schema:
          $ref: "#/definitions/mongo/BusinessProfile" #defined for definition section.
  responses: #as per Swagger spec
    200:
      content:
        application/json:
          schema:
            type: object
    500:
      content:
        application/json:
          schema:
            type: string
```

- The event's first line comprises three key elements: the type of eventsource (e.g., `http`), the method (e.g., `put`), and the URL (`/mongo/user/{id}`). This format is defined by the eventsource plugin, and it is the only line that changes across all events.

#### Accessing Event Properties in Workflows

For an HTTP event, the headers, query, params and body data are captured in a standard format, and made available in the `inputs` object [for use in the workflows](/docs/microservices-framework/workflows/overview.md).

The inputs (event) object has following properties:
If you have jwt authentication like strategy implemented, then

- **past user object can be accessed as**:`<%inputs.user%>`

- **query can be accessed as**: `<%inputs.query.var_name%>` Present in case of http events

- **params can be accessed as**: `<%inputs.params.path_param%>` Present in case of http events

- **headers can be accessed as**: `<%inputs.headers.some_header_key%>` Present in case of http events

- **body can be accessed as**: `<%inputs.body.key%>` Present for all events except for http events which don't have a body. For ex. http.get

- **files can be accessed as**: `<%input.files%>` Any files uploaded via HTTP event. Not present in other kind of events

### Swagger Specs

#### Steps to add Swagger specs in project.

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

1. To enable swagger ui add `docs` in **"./src/eventsources/http.yaml"**

2. `/` is the default endpoint,if you want to provide your custom swagger endpoint, you can modify the endpoint from **"./src/eventsources/http.yaml"**

#### Update http.yaml( src/eventsources/http.yaml )

```yaml
type: express
port: 3000
base_url: /api/v1
docs:
  endpoint: /
```

:::tip note
Both [express](https://github.com/godspeedsystems/gs-plugins/blob/main/plugins/express-as-http/README.md) and [fastify](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/fastify-as-http) plugins support this format of configuration to setup swagger
:::

#### Custom server URL and custom Info:

In the `http.yaml` file, you have the option to incorporate a custom server URL for API documentation. By including this custom server URL, any autogenerated documentation or Swagger specifications will feature this URL within the `servers` section. Additionally, you can enhance the documentation by specifying a custom `title`, `version`, and `contact information` through the addition of `info`.

```yaml
type: express
port: 3000
base_url: /api/v1
docs:
  endpoint: /
  info:
    version: 0.0.1
    title: "Godspeed: Sample Microservice"
    description: Sample API calls demonstrating the functionality of Godspeed framework
    termsOfService: "http://swagger.io/terms/"
    contact:
      name: Mindgrep Technologies Pvt Ltd
      email: talktous@mindgrep.com
      url: "https://docs.mindgrep.com/docs/microservices/intro"
    license:
      name: Apache 2.0
      url: "https://www.apache.org/licenses/LICENSE-2.0.html"
  servers:
    - url: https://api.example.com:8443/api
      description: staging
```

For example,

<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1706042485/Screenshot_from_2024-01-24_02-11-15_frejtp.png" alt="swaggers"/>

<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1706042039/Screenshot_from_2024-01-24_02-03-33_n1i8yw.png" alt="swagger"/>


---- Content from: D:\gs-documentation\docs\microservices-framework\event-sources\event-types\kafka-events.md ----

# Kafka event
> A [Kafka](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/kafka-as-datasource-as-eventsource#godspeed-plugin-kafka-as-datasource-as-eventsource) event is specified as `{datasourceName}.{topic_name}.{group_id}` in [the Kafka event specification](#example-spec-for-kafka-event).

Within the Kafka event structure, the content of the message is captured and made accessible as `inputs.body`, facilitating its integration into the handler workflow for processing.

#### Example spec for Kafka event

``` yaml
 # event for consume data from Topic
Kafka.publish-producer1.kafka_proj:   # event key
  id: kafka_consumer
  fn: kafka_consume
  body:    
    content:
      application/json:
        schema:
          type: object
          properties:
            message:    # the content of the message is captured here
              type: string
          required: ['message']
 ```

#### Example workflow consuming a Kafka event
  ```yaml
   # function for consume data
id: kafka_consumer
summary: consumer
tasks:
    - id: set_consume
      fn: com.gs.return
      args: <% inputs.body %>
  ```

- To know about validation_error, refer [this](/docs/microservices-framework/event-sources/validations/validation-error.md)

:::tip note
- Response_validation_error, authz, authn are not applicable to this protocol since there is no response (thus no error handling for the same). Similarly, Kafka consumers don't require authentication or authorization, and hence, they are not specified here.
:::

<!-- #### On validation error handler
  ```yaml
  summary: Handle json scehma validation error
  id: error_handler
  tasks:
    - id: error_step1
      fn: datasource.kafka.publish
      args:
        data: # publish the event and validation error to kafka on a topic
          value:
            event: <% inputs.event %>
            validation_error: <% inputs.validation_error %>
  ``` -->

---- Content from: D:\gs-documentation\docs\microservices-framework\event-sources\event-types\overview.md ----

#  Event types
Based on how processing is handled ,events can be classified into two types: synchronous (sync) and asynchronous (async) events, each suited for various protocols. 


<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1703849187/Sushil_edited_bbfzl1.jpg" alt="event types" />


**Synchronous events** are typically associated with 
- `HTTP/REST protocol:` Express can also handle asynchronous operations, the basic request-response cycle is synchronous.
- `gRPC:`  gRPC is a framework for building remote procedure call (RPC) systems. If you're using the typical request-response pattern, it can be thought of as synchronous.
- `GraphQL:` Most commonly, GraphQL is used for synchronous communication, but it can handle asynchronous operations when needed.

**Asynchronous events**, on the other hand, are exemplified by
- `Cron jobs:` Cron jobs are asynchronous because they don't execute immediately when you create or schedule them.
- `Kafka:` Apache Kafka is an event streaming platform. It's designed for asynchronous, real-time data streaming.
- `RabbitMQ:` RabbitMQ is a message broker that allows asynchronous communication between distributed systems.
- `WebSocket communication:` WebSockets provide full-duplex communication channels over a single TCP connection. They are inherently asynchronous, allowing real-time bidirectional communication between clients and servers.

You can also create **custom events** like 
- `Salesforce:` Salesforce UI or synchronous API calls provide immediate feedback, many of the underlying processes that handle data processing and automation are performed `asynchronously` for scalability and efficiency.
:::note
You can refer [Salesforce plugin](https://docs.godspeed.systems/v1/microservices/events#624-salesforce-event) which we have in V1.
We have [bounty](https://forum.godspeed.systems/t/1-million-developer-bounty-program-build-earn-with-godspeed/128) on implementing [plugins for V2](https://github.com/godspeedsystems/gs-plugins#list-of-plugins).
:::
- `S3:` Amazon S3 provides real-time access to stored objects and can be used for synchronous operations like serving web content, its internal processes and features are optimized for `asynchronous`.
- `Google Pub/Sub:` Google Cloud Pub/Sub enables real-time messaging with synchronous operations for immediate communication. Its architecture also supports `asynchronous` messaging, ensuring scalability and efficiency. You can use Google pub/sub to access events like new email on gmail.
- `Amazon SQS:` :Amazon SQS is a fully managed message queuing service designed for both synchronous and asynchronous operations. It offers immediate message processing while optimizing for scalability through `asynchronous` handling.


**To learn more about Schema Driven Development and Events in Godspeed, please watch the video provided below…**

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/dVt6GPSgY7A" frameborder="0" allowfullscreen></iframe>
</div>


---- Content from: D:\gs-documentation\docs\microservices-framework\event-sources\events-overview.md ----

# Introduction To Events
Events are the core of creating responsive, real-time applications in godspeed. An event serves as a trigger that initiates specific actions or workflows based on defined conditions or inputs. Whether it’s an API call, a scheduled job, or a message arriving from a queue, events provide a structured way to handle incoming requests and data changes.
<!-- In the realm of microservices architecture, events serve as the lifeblood of communication and coordination. Microservices can be configured to consume events from various sources, such as HTTP endpoints and messaging systems like Kafka. These events are meticulously defined, following the OpenAPI specification, and encapsulate critical information, including event names, sources, and workflow details. -->

## What are Events in Godspeed?
In the meta-framework world, we call all types of sync events (apis) and async events (ex. Kafka, Socket, Cron) as **Events**. Events are entry points into your Godspeed application, determining how the system should respond to various types of inputs. Each event can be configured with a unique set of properties that define:

- **The Source of the Event:** For example, HTTP requests, Kafka messages, Cron schedules, or custom-defined sources.
- **The Triggering Conditions:** Conditions or methods (like GET, POST, PUT for HTTP events) that specify when an event should activate.
- **The Actions or Workflows:** Functions or workflows that are executed when an event is triggered, containing the logic for handling the request or data.

- To start using events, explore the different [Event Source Plugins](/docs/microservices-framework/event-sources/event-source-plugins/Overview) available in Godspeed and choose the ones that suit your application’s needs.

## Defining an Event: Writing an Event Schema
To define an event in Godspeed, you need to write an [Event Schema](/docs/microservices-framework/event-sources/event-schema). This schema is a structured YAML configuration that follows the OpenAPI specification, allowing you to define every detail of how the event should behave. 


## Types of Events
For more details on configuring each type of event, check out the dedicated sections on all supported Event types:

**1. Sync Events**
 - [HTTP](/docs/microservices-framework/event-sources/event-types/http-events)
 - [Apollo Graphql](/docs/microservices-framework/event-sources/event-types/graphql-events)

**2. Async Events**
- [Cron](/docs/microservices-framework/event-sources/event-types/cron-events)
- [Kafka](/docs/microservices-framework/event-sources/event-types/kafka-events)




---- Content from: D:\gs-documentation\docs\microservices-framework\event-sources\overview.md ----

---
title: Eventsources
---
# About Eventsources

  Eventsources in Godspeed framework captures event and allows you to define entry or trigger points of application. For ex. the `type: express` eventsource will allow you to expose your application through REST API or a `type: cron` eventsource will allow to schedule a recurring call to a workflow. 
  
  The eventsources listen on the incoming events. They process incoming event as per the middleware set by you, including [authentication](../authentication/overview.md). Finally, they transform it to Godspeed's standard `GSCloudEvent` object, which is then made available to the event handlers and subsequent child workflows. 
  
  To have a look at supported eventsources and understanding their implementation, refer [Godspeed's gs-plugins mono-repo](https://github.com/godspeedsystems/gs-plugins). For ex. [Kafka](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/kafka-as-datasource-as-eventsource#godspeed-plugin-kafka-as-datasource-as-eventsource)**


## Types of eventsources 
Based on functionality and the nature of the information they provide to the system, eventsources can be divided as below.

  1. Eventsource
    - It can act only as an eventsource
    - has its own client initialization
    - Eg,. Express
  2. DataSource as an eventsource
    - It can act as eventsource as well as a datasource
    - shares the client with the corresponding datasource
    - eg., Kafka, RabbitMQ

## How to use an eventsource in Godspeed project?

  You can use Godspeed CLI to browse and install plugins which are published and maintained by Godspeed.
```bash
    godspeed plugin add
```

```bash


       ,_,   ╔════════════════════════════════════╗
      (o,o)  ║        Welcome to Godspeed         ║
     ({___}) ║    World's First Meta Framework    ║
       " "   ╚════════════════════════════════════╝


? Please select godspeed plugin to install: (Press <space> to select, <Up and Down> to move rows)
┌──────┬────────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────┐
│      │ Name                                   │ Description                                                                    │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│ ❯◯   │ cron-as-eventsource                    │ Cron as eventsource plugin for Godspeed Framework                              │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ aws-as-datasource                      │ aws as datasource plugin for Godspeed Framework                                │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ excel-as-datasource                    │ excel as datasource plugin for Godspeed Framework                              │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ mailer-as-datasource                   │ mailer as datasource plugin for Godspeed Framework                             │
├──────┼────────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────┤
│  ◯   │ kafka-as-datasource-as-eventsource     │ kafka as datasource-as-eventsource plugin for Godspeed Framework               │
└──────┴────────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────┘

```

To understand the actions taken when selecting the pre-defined plugins and their respective functionalities, please refer [this document](/docs/microservices-framework/event-sources/event-source-plugins.md).


**To learn more about Event sources in Godspeed, please watch the video provided below…**

<!-- <div style={{ margin: '20px auto', textAlign: 'center' }}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/WaoWe1dekNk" frameBorder="0" allowFullScreen></iframe>
</div> -->

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/cp1qgIz1PNw?si=4Qngtu-WXoC-LQeY" frameborder="0" allowfullscreen></iframe>
</div>


---- Content from: D:\gs-documentation\docs\microservices-framework\event-sources\validations\schema-validation.md ----

# JSON Schema validation

The Framework provides request and response schema validation 

### Request schema validation

We have the ability to define inputs and their types in our request schema, such as path parameters, query parameters, and request body. This allows the framework to validate whether the API has received the specified inputs in the expected types.

Whenever an API is triggered, AJV (Another JSON Schema Validator) verifies the request schema against the provided inputs. If the defined schema matches the inputs, it allows the workflow to execute. Otherwise, it throws an error with a status code of 400 and a descriptive message indicating where the schema validation failed.

### Sample Request Schema

#### Request Schema with body

```yaml
http.post./helloworld:
  fn: helloworld
  body:
    content:
      application/json:
        schema:
          type: object # type of the request body
          required: [name] # Here make the properties mandatory ,can add multiple variable names
          properties: # we can add properties that we get in body
            name: # property name
              type: string # property type
```

In the provided example, the `type: object` indicates the type of body received. Following that, the required variables are listed, specifying the properties of the body object that must be present. Similarly, it is also possible to define the types of the property variables present in the body.

#### Failed request schema validation

![req_validation](https://res.cloudinary.com/dzdcjchdc/image/upload/v1704546298/Screenshot_from_2024-01-06_18-31-32_tref8f.png)

#### Request Schema with params

```yaml
http.post./helloworld/:path_params:
  fn: helloworld
  params: # Params begin from here
    - name: path_params # name of the parameter
      in: path # type of parameter path/query
      required: true # mandatory check for path parameter
      schema:
        type: string # type of path parameter
    - name: query_params 
      in: query # query parameter
      required: true
      schema:
        type: string
```


#### Sample with pattern

```yaml

http.post./helloworld:
  fn: helloworld
  body:
    content:
      application/json:
        schema:
          type: object
          required: [name]
          properties:
            name:
              type: string
              format: date
              pattern: "[0-9]{4}-[0-9]{2}-[0-9]{2}" # setting patern in schema

```



### Response schema validation

Just like request schema validation, there's also response schema validation in place. In this process, the framework checks the response type, validates the properties of the response, and ensures they align with the specified types.

The process of response schema validation involves storing the response schema, enabling the workflow to execute, and checking the response body along with its properties for validation.

Response schema validation includes two cases

- Failure in Workflow Execution
- Successful Workflow Execution but Fails in Response Schema Validation


### Sample Response Schema

```yaml
  responses:
    200:
      content:
        application/json:
          schema:
            type: object #Types of response
            required: [name] # setting mandatory variables
            properties:
              name:
                type: string #Type of property

```
If the response schema validation fails api return with `500` `internal server error`


#### Failed sample of response schema validation

![case1](https://res.cloudinary.com/dzdcjchdc/image/upload/v1704548714/Screenshot_from_2024-01-06_19-14-52_uwwbek.png)


:::tip In the case of failed request schema validation, the APIs respond with a status of `400` and a message indicating a "bad request." Conversely, if the response schema validation encounters an issue, the APIs return a status of `500` along with an "Internal Server Error" message.
:::

### Event with response and request schema validation

```yaml
http.post./helloworld:
  fn: helloworld
  params:
    - name: path_params
      in: path
      required: true
      schema:
        type: string
    - name: query_params
      in: query
      required: true
      schema:
        type: string

  body:
    content:
      application/json:
        schema:
          type: object
          required: [name]
          properties:
            name:
              type: string


  responses:
    200:
      content:
        application/json:
          schema:
            type: object
            required: [name]
            properties:
              name:
                type: string

```

---- Content from: D:\gs-documentation\docs\microservices-framework\event-sources\validations\validation-error.md ----

# Validation Error

- A validation error occurs when data fails to meet the defined criteria or constraints during the validation process.

## Request and Response Validation
- Verifying that incoming API requests have the required parameters and that those parameters meet specific criteria like data types.  If the specified criteria are not met, it results in a request validation error. 
- For more info about Request Validation and its applications, refer [this](/docs/microservices-framework/event-sources/validations/schema-validation.md#request-schema-validation).
- Similarly, When an API response does not meet the expected criteria, it results in a response validation error.
:::tip Note
- We utilize the AJV library for validating both request and response data, and the response format adheres to the standard AJV error format.
- The `on_request_validation_error` and `on_response_validation_error` handlers are used to override the default errors thrown by the framework (specifically, schema validation errors) and allow developers to customize errors based on their requirements.
:::

### on_request_validation_error

- To customize the error response in cases where request schema validation fails, you can utilize the `on_request_validation_error` handler. Demonstrating its use in the below example

### Example

```yaml
"http.get./validation":
  fn: test_validation
  on_request_validation_error: on_request_validation #can be fn path, or a series of tasks
  params:
  - name: num_1
    in: query
    required: false
    schema:
      type: number
  - name: num_2
    in: query
    required: true
    schema:
      type: number

  responses:
    200:
      content:
        application/json:
          schema:
            type: object
      
```

functions/on_request_validation.yaml
```yaml 
summary: customizing req_response_error
tasks:
  - id: customized_request_error
    fn: com.gs.transform 
    args: 
      success: false 
      code: 400
      data:    
        message: <% inputs.validation_error.data.message %>
     #  inputs.validation_error returns the default framework error
     #  or you can give 
     #  message: <% inputs.validation_error.data.errors[0] %>
     
```
functions/test_validation.yaml
```yaml
summary: This is test function
tasks:
  - id: test_function
    fn: com.gs.return
    args: 
      data: <% "This is number two " + inputs.query.num_2 %>
```
Response
- A: Default Error Format
<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1705958247/Screenshot_from_2024-01-23_02-44-24_xcb02y.png" alt="response_error" />

- B: Customized Error
<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1705958229/Screenshot_from_2024-01-23_02-44-45_pgeokv.png" alt="event types" />


### on_response_validation_error

:::tip Note
- The framework deals with **both request and response errors the same way**, except for the error codes and keys.
- For request validation errors, the associated error code is 400, and the key used is `on_request_validation_error`.
- In the case of response validation errors, the corresponding error code is 500, and the key employed is `on_response_validation_error`.
:::

---- Content from: D:\gs-documentation\docs\microservices-framework\guide\advance-guide.md ----

# Advance Guide

### Steps for creating a sample blog project.

Let's create a project which includes a Prisma schema(`mongo.prisma`) for creating a blog app using mongodb.

1. Create a project using Godspeed CLI with below command:

```bash
godspeed create blog-app --from-example mongo-as-prisma # blog-app is the name of the app
```
### Checkout other examples

:::tip **In this sample project, we have utilized a MongoDB database, but you have the flexibility to choose any other database that Prisma supports and that meets your requirements [MySQL](https://github.com/godspeedsystems/godspeed-codesandbox/tree/gs-projects-examples/Project-Examples/sql), [PostgreSQL](https://github.com/godspeedsystems/godspeed-codesandbox/tree/gs-projects-examples/Project-Examples/postgres) etc**
:::

Framework will give you below folder structure.
```
    ├── config
    │   ├── custom-environment-variables.yaml
    │   |
    |   ├── default.yaml  
    |   
    ├── eslintrc.json  
    |
    ├── src
        ├── datasources
        │   ├── types
        │   |    └── prisma.ts
        |   |
        │   └── mongo.prisma
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
        │   |
        |   └── helloworld.yaml     
        |
        └── mappings
        |   |
        |   └── index.yaml        
        |
        └── plugins
            |
            └── sample.js               
```

:::tip Note
- The framework generates different folders like [config](/docs/microservices-framework/config-and-mappings/config.md),[datasources](/docs/microservices-framework/datasources/overview.md) , [events](/docs/microservices-framework/event-sources/event-schema.md), [eventsources](/docs/microservices-framework/event-sources/overview.md), [functions](/docs/microservices-framework/workflows/overview.md), [mappings](/docs/microservices-framework/config-and-mappings/mappings.md), [plugins](/docs/microservices-framework/inline-scripting/script-plugins.md),etc
- The `eslintrc.json` file includes a curated list of recommended plugins that can be incorporated into the project.
:::


2. Navigate to you project folder

```bash
cd blog-app
```

3. Open the project in vscode using below command:

```bash
code .
```

4. Now to setup your database please follow the steps provided in README.md file of your blog-app project.


#### Prisma supports wide range of databases
* [MySQL](https://dev.mysql.com/doc/)
* [PostgreSQL](https://www.postgresql.org/docs/)
* [SQLite](https://www.sqlite.org/docs.html)
* [CockroachDB](https://www.cockroachlabs.com/docs/cockroachcloud/quickstart)
* [MariaDB](https://mariadb.org/documentation/)
* [MongoDB](https://www.mongodb.com/docs/guides/atlas/cluster/)


Prisma provides a unified and versatile database experience, enabling you to connect to diverse databases through a single schema definition. This ensures a consistent schema for interacting with various databases and generates a unified API, streamlining development for flexibility and ease. Whether you opt for MySQL, PostgreSQL, SQLite, or other supported databases, Prisma's unified approach simplifies both database management and application development.

5. Open terminal in vscode and enter the below command

```bash
godspeed prisma prepare
```
**This command will generate the prisma client and will sync the database with prisma schema**

:::tip Note
We configure [swagger specs](/docs/microservices-framework/event-sources/event-types/http-events.md#swagger-specs) in src/eventsources/http.yaml
:::

6. 3000 is the default port number,if you want to provide your custom port number, you can modify the port number from **"./src/eventsources/http.yaml"**

```yaml
type: express
port: 3000
```

7. Now to generate the CRUD API'S enter the below command

```bash
godspeed gen-crud-api
```
**This command will generate the crud apis based on the sample prisma schema provided at ./src/datasources/mongo.prisma**

Command generates the below respective folders and files in the Events and Functions.

```bash
    .
    ├── src
        ├── datasources
        │   ├── types
        │   |    └── prisma.ts
        |   |
        │   └── mongo.prisma
        |
        ├── events
        |   ├── post.yaml
        │   └── user.yaml
        |
        ├── eventsources
        │   ├── types
        │   |    └── express.ts
        |   |
        │   └── http.yaml
        |
        └── functions/com/biz/mongo
            ├── post
            |   ├── create.yaml
            |   ├── delete.yaml
            |   ├── one.yaml
            |   ├── search.yaml
            |   └── update.yaml
            |
            └── user
                ├── create.yaml
                ├── delete.yaml
                ├── one.yaml
                ├── search.yaml
                └── update.yaml
```

8. Run `godspeed serve` to start the development server.

```bash
godspeed serve
```
9. Go to [http://localhost:3000/api-docs](http://localhost:3000/api-docs) to see the API endpoints in the swagger.

<img src="https://ik.imagekit.io/pavanKillada/Screenshot%20from%202023-10-15%2002-24-45.png?updatedAt=1697316915416" alt="swagger spec default" />

<!-- 
    <img src="../../static/img/swagger_default.png" alt="swagger spec default" />
 -->

10. Create a user in the Mongodb by giving the proper request body to the post API in the swagger and execute it.
<img src="https://ik.imagekit.io/pavanKillada/Screenshot%20from%202023-10-15%2002-27-06.png?updatedAt=1697317104366" alt="swagger mongo user" />

<!-- 
    <img src="../../static/img/swagger_request.png" alt="swagger spec default" />
 -->

11. An appropriate response will be returned on successful execution.
<img src="https://ik.imagekit.io/pavanKillada/Screenshot%20from%202023-10-15%2002-27-20.png?updatedAt=1697317104433" alt="swagger response" />

<!-- 
    <img src="../../static/img/swagger_response.png" alt="swagger spec default" />
 -->

**Voila!** Your API backend is up and running. You can use Postman or swagger to test your API's.

Happy building with Godspeed!


---- Content from: D:\gs-documentation\docs\microservices-framework\guide\get-started.md ----

# Getting Starting with Godspeed
**This guide will walk you through:**
- Installing the Godspeed Meta-Framework on your system.
- Creating your first project and running it locally.

:::tip Need Help?
**[Ask Godspeed GPT First!](https://chatgpt.com/g/g-Zsh9qhlGw-vishwakarma)**

Whether you're having trouble with setup, configurations or understanding the framework, try asking [Godspeed GPT](https://chatgpt.com/g/g-Zsh9qhlGw-vishwakarma) or you can [access the FAQs in our guide](/docs/microservices-framework/guides)
:::

### Watch this One-Click Installation & Step-by-Step Tutorial Guide

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
    <iframe style={{ position: 'absolute', top: 10, left: 10, width: '100%', height: '80%' }} src="https://www.youtube.com/embed/xb0fgMmFywc?si=EhuxwGAXJSSmOUCX" frameborder="0" allow="fullscreen;" allowfullscreen ></iframe>
</div>

### Pre-requisites:
1. Nodejs v18 (or higher) or Bunjs 
2. Npm
3. Git
4. VS Code or any code editor

### Step 1: Install Godspeed
:::tip
To install prerequisites and Godspeed through our Easy Installation Script, Download it from the link provided below:
:::

- [setup.bat](../../../static/setup.bat) (for Windows)

- [setup.sh](../../../static/setup.sh) (for Ubuntu)

It simplifies the installation process by checking all required tools in one go.

<details>
<summary> See How to execute this script in Windows </summary>

1. Run Command Prompt as Administrator.

2. Use cd command to change the directory to where you downloaded the setup.bat file.

3. Execute the script by writing its name.
```
  setup.bat
```
</details>

<details>
<summary> See How to execute this script in Ubuntu </summary>

After downloading setup.sh file, Just execute it from shell as:

```
  sudo bash setup.sh
```
</details>


Once the script finishes, you are ready to **[Create Your First Project](/docs/microservices-framework/guide/get-started#step-2-create-your-first-project)**

### To Install godspeed framework manually follow the steps given below:
1. **Ensure Node.js, Npm and Git is installed**:
   - Verify versions by running the following commands from terminal:
     ```bash
     node -v
     npm -v
     git -v
     ```
   - You should see something like `v18.x.x` for Node.js and `8.x.x` or higher for npm if installed.
   - It will show error in case any of above pre-reqisites is not installed, so download and install it first.
2. **Install Godspeed globally**:
   - Run this command to install the Godspeed meta-framework:
     ```bash
     npm install -g @godspeedsystems/godspeed
     ```
3. **Verify installation**:
   - Run the following command to ensure Godspeed is installed:
     ```bash
     godspeed --version
     ```
---     
### Step 2: Create Your First Project

1. **Create a new Godspeed project**:
   - Use the `create` command to set up a new project:
     ```bash
     godspeed create my_new_project
     ```
   - Replace `my_new_project` with the name of your project.
   - This step may take some time as it installs required npm plugins and creates the project structure. Be patient!

2. **Navigate to your project folder**:
   ```bash
   cd my_new_project
   ```
3. **Start the server**:
  ```
     godspeed serve
  ```
Check the logs. They should indicate that the **Express server** is running on **port 3000**

Example log:
  ```bash
  INFO:[Production Server Running]('express:' eventsource, '3000' port) Try it out at: http://localhost:3000/api-docs
  ```
---

### Step 3: Access Swagger UI

  In Godspeed, the **Swagger UI** is typically accessed at the `/api-docs` endpoint, appended to the `base URL` and `port` where the server is running. Here’s the general format for accessing Swagger UI:
   ```plaintext
    http://<BASE_URL>:<PORT>/<http_docs_endpoint>` which is by default `localhost:3000/api-docs`
   ```
   
  Default port of your service is `3000` and Swagger endpoint is `/api-docs`. If you want to customise default settings, you can modify the `./src/eventsources/http.yaml`

  **To access Swagger UI, navigate to the following default url:**
   ```plaintext
    http://localhost:3000/api-docs
   ```
  ![img](../../../static/img/swagger_helloworld.png)

### Step 4: Test the Helloworld API

- In the Swagger UI, locate the `/helloworld` endpoint.

  Click the **`Try it out`** button and send a request to test the API, It will ask you to fill the name. Once you fill and submit the name parameter,(e.g. John) then following response will be returned from the server.
  ```
    Hello `John`      
  ```


To understand working of this API [Lets Walkthrough your first Godspeed Project](https://godspeed.systems/docs/microservices-framework/guide/get-started#walking-through-your-first-godspeed-project)

### Troubleshooting Common Errors

**Error: Not Able to reach Template repository or hello-world is not a valid example**

![git-not-installed](../../../static/img/git-error.jpeg)

While creating a new godspeed project, if you face above error, it means **Git is not installed** on your system. 
The framework needs Git to clone the template for your new project.

**Solution**:
1. **Install Git**:
   - After installation, verify by running:
       ```bash
       git --version
       ```
2. **Re-run the Godspeed create command**:
   - Once Git is installed, rerun the command:
     ```bash
     godspeed create my_new_project
     ```
---
**Error: Running scripts is disabled on this system (Windows)**

This error occurs because of Windows PowerShell's execution policy, which restricts running scripts by default.
![running_scripts](../../../static/img/scripts-error1.jpeg)
**Solution:**
1. Open PowerShell **as Administrator**.
2. Run the following command to allow script execution:
   ```bash
   Set-ExecutionPolicy RemoteSigned
   ```
3. Press **Y** to confirm.
4. Close PowerShell and rerun your `godspeed serve` command.

**Note**: This change allows local scripts to run, but blocks downloaded scripts unless they're signed by a trusted publisher.


## Walking through your first Godspeed project

- **Scaffolding of a meta-framework project**

![Scaffolding of a new project](../../../static/img/scaffolding_new_proj.png)

- The framework generates different folders like [config](/docs/microservices-framework/config-and-mappings/config.md), [datasources](/docs/microservices-framework/datasources/overview.md), [events](/docs/microservices-framework/event-sources/event-schema.md), [eventsources](/docs/microservices-framework/event-sources/overview.md), [functions](/docs/microservices-framework/workflows/overview.md), [mappings](/docs/microservices-framework/config-and-mappings/mappings.md), [plugins](/docs/microservices-framework/inline-scripting/script-plugins.md),etc
- The `eslintrc.json` file includes a curated list of recommended plugins that can be incorporated into the project.
- We configure [swagger specs](/docs/microservices-framework/event-sources/event-types/http-events.md#swagger-specs) in src/eventsources/http.yaml

:::tip
To understand more about the scaffolding structure of the project , Check [here](/docs/microservices-framework/guide/walkthrough#moving-forward)
::: 

- **Why is Swagger asking you to fill the name?**

  /helloworld API endpoint asks you to fill in the name parameter because the API has been configured to require this parameter as part of the query string.
  Go to `src/events/helloworld.yaml` file, which is the event schema of this API in YAML format.
  ```
    http.get./helloworld: # `http` server listening via `get` method on `/helloworld` endpoint
    fn: helloworld # the function handler to be called for this endpoint, available in `src/functions`
    params: # JSON-Schema of API parameters like query, headers, path params. Note: This is set as per Swagger standard's `parameters` syntax
      - name: name   # This is our name query param
        in: query    # Notice the in: query, it can be `path` or `headers` as well
        required: true # true means `name` parameter is required
        schema:
          type: string
    responses: # JSON-Schema of API responses for different status codes. Note: This is set as per Swagger standard's `responses` syntax
      200:
        content:
          application/json:
            schema:
              type: string
  ```
  In this helloworld.yaml file, the params section defines that the API requires a name parameter to be passed in the query string. Let’s break it down:
- **params:** This section describes the input the API expects. In this case, the API expects a name parameter, which  must be provided by the user when they call the /helloworld endpoint.
- **name: name:** This line specifies that the query parameter is called name.
- **in: query:** This tells Swagger and the Godspeed server that the name parameter should be included in the query string of the URL (e.g., /helloworld?name=John).
- **required: true:** The name parameter is mandatory. This means the API will not work unless this parameter is provided by the user.
- **schema: { type: string }:** The name parameter must be a string, which further validates that the input should be text.

:::tip
In the Godspeed meta-framework each API whether REST or Graphql API is called an `event`. All events, whether API calls or websocket messages, trigger workflows/functions which can be thought of as event handlers (see `fn:` instruction in the yaml above). 
The sync events return a response while async events dont have a concept of response.
:::

This naming approach may be new for you. The general norm across the larger developer community is to call only `async events` as `events` - for ex. Kafka or web socket message. But in Godspeed world we consider both sync APIs (REST, Graphql) and async events (Message bus, web socket, cron) - as events. 

### Testing the validation of API inputs and outputs

Almost every application needs validation of data sent in request to the API and response sent back by the service, to make sure that wrong data could not enter your service nor should it return wrong response for an API call. Let's try this feature in the framework.

1. Open your browser and hit the `/helloworld` endpoint via `localhost:3000/helloworld`. Or, run `curl -i localhost:3000/helloworld` from your terminal.
2. This should return an error with code `400` because you have not passed `name` in query - as expected by the schema of `helloworld` API. 

```
{
  "validation_error": {
    "success": false,
    "code": 400,
    "message": "request validation failed.",
    "error": "must have required property 'name' in query",
    "data": {
      "message": "The API cannot be executed due to a failure in request params schema validation.",
      "error": {
        "instancePath": "",
        "schemaPath": "#/required",
        "keyword": "required",
        "params": {
          "missingProperty": "name"
        },
        "message": "must have required property 'name' in query"
      }
    }
  }
}

```
3. If you hit `localhost:3000/helloworld?name=mastersilv3r`, it should work.
```
Hello mastersilv3r
```

### Swagger Collection

 If you need access to the Swagger collection of godspeed project, open it from `/docs` folder in your project. This is automatically generated from your API schema which we saw above. 

### Postman Collection

 If you need the Postman Collection, import the Swagger file from `src/docs` in Postman.

### For any help
Try the below command line which will show you the commands that can be used in the godspeed framework. Refer [the full CLI spec](/docs/microservices-framework/CLI.md) for more information, including [how to add plugins for eventsources and datasources](../CLI#using-plugins)  

```bash
   godspeed --help
```

### Video Tutorial - Short
There is a longer and detailed introduction video as well, below on this page.

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
    <iframe style={{ position: 'absolute', top: 10, left: 10, width: '100%', height: '80%' }} src="https://www.youtube.com/embed/vudhjYjGeLQ?si=R4kTbH14-sAbKFBA" frameborder="0" allow="fullscreen;" allowfullscreen ></iframe>
</div>


> If you want some pre-made examples please check the [examples repository](https://github.com/godspeedsystems/gs-node-templates)

### Video Tutorial - Longer and in depth

**Walkthrough the Loan Origination System project made using our meta framework**

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/BTPHPoI3dh0" frameborder="0" allowfullscreen></iframe>
</div>



---- Content from: D:\gs-documentation\docs\microservices-framework\guide\walkthrough.md ----

# Diving Deeper

In the previous section we got an understanding on how to setup a meta-framework based project for your local development and create a new project via cli commands. This section is dedicated to providing hands-on practice in constructing comprehensive backend services utilizing the meta framework and its associated plugins. Additionally, it aims to facilitate a thorough understanding of all the fundamental concepts underpinning the Godspeed framework.

### Video Playlist for Detailed Walkthrough

> Don't miss! Video Playlist of detailed guide to eventsources, events, functions and datasources: [Watch here](https://www.youtube.com/watch?v=GdJ0ghpQ7oA&list=PLRuRJ3PaaJ7ti9bfStNTXqsxxW9wvwA_H)

### As we move forward

Do ckeck the [tenets](../introduction/tenets.md), [design principles](../introduction/design-principles.md) and [guardrails](../introduction/guard-rails.md) baked into the meta-framework as part of its design - helping teams develop microservices based applications with best practices. 

#### The three pillars
Have you seen the [three pillars of abstraction](../introduction/design-principles.md#three-fundamental-abstractions) in the Meta-Framework?

- [Eventsources and event schemas](../event-sources/overview.md)
- [Event handler functions (Pure functions)](../workflows/overview.md) 
- [Datasources](../datasources/overview.md)

You may want to check why you should use the [4th generation](https://godspeed.systems/blog/godspeed-fourth-generation-programming-framework) Meta-Framework versus creating apps using pure 3rd generation frameworks like Nodejs or Django stack from scratch.

![img The fourth generation approach of Meta Framework](../../../static/img/four_generations_proramming.png)

> Note: The Meta-Framework currently supports Nodejs based ecosystem

### Moving forward
:::tip
As mentioned in the [getting started](./get-started.md) section all APIs and async events are together referred to as `events`. And hence any source like Express, Fastify, Kafka, Apollo Graphql are called [EventSources](../event-sources/overview.md).
:::
In [getting started](./get-started.md) section we created a project that includes a simple 'hello world' example which uses an http Express [eventsource](../event-sources/overview.md), [events](/docs/microservices-framework/event-sources/event-schema.md) and [event handler functions](/docs/microservices-framework/workflows/overview.md). 


Now we can move into further details.

:::tip
In order to see detailed examples and documentation of eventsources, events and event handlers please visit [Express HTTP Eventsource Plugin documentation](../event-sources/event-source-plugins/Express%20Http%20Eventsource.md).  
:::

### Event Configuration

> All event definitions are stored in `src/events` folders in YAML files. Each YAML file can have multiple events or a single event defined. The folder structure within `src/events` determines the categories (grouping of your API) that you will see in the generated Swagger and Postman collection. You can group events in any files and nested folders as per your need.

Now lets understand how our `helloworld` api endpoint is working behind the scene

**Open `./src/events/helloworld.yaml`**

```yaml
"http.get./helloworld":
  fn: helloworld # event handler function - the logic resides here
  authn: false
  params: #same as Swagger params.
    - name: name
      in: query
      schema:
        type: string
```

Lets understand the first line from the above snippet `http.get./helloworld`. 

#### `http`: Protocol http eventsource

#### `get` : method

#### `/helloworld`: endpoint

We are exposing an endpoint with a `get` method on `http` protocol. This endpoint is calling a function `fn`: `helloworld` in the second line of the above code snippet.

> For the sake of brevity, in the above example we have omitted further details of event configuration like the JSON schema of `body, query, headers, responses` and as well `authn, authz` settings among more. 

:::tip
You can find in-depth introduction to event schema [here](/docs/microservices-framework/event-sources/event-schema).
:::

The meta-framework follows Schema Driven Development and Single Source of Truth as its first guardrail. [Check the blog here](https://godspeed.systems/blog/schema-driven-development-and-single-source-of-truth) on reasons why this is an essential practice for any 10x engineering team. It allows you to use the Swagger (aka OAS3) spec which includes JSON schema spec, to define your event schemas as single source of truth. The schema format remains same independently of the eventsource which listens on an event. 

From your event schemas the meta-framework generates the Swagger specs, Graphql schema (if applicable) and also enable input validation, output validation, authentication, authorization without explicitly writing boilerplate code.

The [event configuration](/docs/microservices-framework/event-sources/event-schema) uses Swagger and JSON Schema for defining shape of `requestBody, params, query, headers & responses`. The overall event schema has more configurations as well, like `authn, authz`. Further the event schemas in the meta-framework are universally same across all event sources *with only two variations per eventsource* which are
- First line of the event URI may change based on the type of eventsource. 
  ```yaml
    http.{method}.{url}: # http event URI - same for Express, Fastify and Graphql plugins
    kafka.{topic}.{group_id}: # kafka event URI
    cron.* * * * *.Asia/Kolkata: # cron event
  ```
- Async events don't return response and hence don't need `responses` in the shema. But REST and Graphql events should have a `responses` section, defined in Swagger format. 

For http service like Express, Fastify and Graphql, all events are defined in the same format. This way you learn once and reuse everywhere, independent of the event source which is capturing the event. This is the fourth guardrail of the Meta Framework - Decoupled or Modular Architecture.


### Event Handler Functions

[Event handlers](../workflows/overview.md) are **pure functions** which take input as JSON and return output as JSON, independent of the eventsource from which the event originated. This is again another adoption of decoupled architecture approach in the meta framework.

**Sample typescript event handler function**
Here is how a function handler looks like.

```typescript
import { GSContext, PlainObject } from "@godspeedsystems/core";

export default function (ctx: GSContext) {
    const {body, headers, params, query, user} = ctx.inputs.data;
    const name: string = query.name; //name expected in request query
    return {
        data: 'Its working! ' + name, //the data key gets set as the body in API response
        code: 200, //Response status code
        success: true, //success can be true or false
        headers: { //custom headers to be attached from this function call
            custom_response_header: 'something'
        }
    }
    //Note: if you wish to use static typing in returning the response instead of using JSON, you can return GSStatus. More on that below.
}
```

We are importing [GSContext](/docs/microservices-framework/workflows/native-language-functions#what-is-gscontext-) & [GSStatus](/docs/microservices-framework/workflows/native-language-functions#gsstatus) from core package of meta-framework. Go to their respective section to more about them.


**Sample YAML function**

The meta-framework gives you the option to write your logic in its [custom YAML DSL](../workflows/yaml-workflows/overview.md) as well. This DSL helps you reduce your lines of code and avoid boilerplate and is an alternative to writing logic in Typescript or Javascript functions. Its downside is that YAML does not have type checking and currently Godspeed does not support autocompletion of YAML workflows like you can have in Typescript within VSCode or another IDE.

```yaml
id: helloworld
tasks:
  - id: first_task
    fn: com.gs.return
    args:
      data: <%'Its working! ' + inputs.body.name%>
      code: 200
      success: true #by default success is assumed to be true
      headers: 
        custom_response_header: 'something'
```

The helloworld event is calling the above function written in YAML, which is executing a task with id `first_task`. This task is calling [`fn: com.gs.return`](../workflows/yaml-workflows/inbuilt-workflows.md#comgsreturn) function that takes argument name in an [inline script](/docs/microservices-framework/inline-scripting/overview).


So far we have seen how can we use Express plugin and also we created an endpoint which returns a response with some code and headers. 

### Swagger generation

The meta-framework gives you an autogenerated Swagger collection and UI to test your API endpoints.

If you are new to Swagger or in other words Open API Spec 3, along with JSON Schema standard, then we strongly suggest to study that. These are standards for defining schema of HTTP APIs. A Swagger schema can also be imported in a Postman collection, or generated from Postman. 

Your Swagger docs are automatically generated and stored in `/docs` folder when the project starts or you make a change to your eventsource or event schemas. The documentation is generated from a combination of settings at Eventsource and events levels.

- **Eventsource level** (refer the `docs` section in http.yaml). This is applicable for Express and Fastify eventsources.
- **Event level**
  - When you enable authentication on an event, its security scheme is set accordingly in generated swagger. By default authentication is enabled on all events when enabled on eventsource instance level itself.
  - `requestBody`, `params`, `responses` ,`operationId`, `id`, `summary`, `description`, `tags` are also picked up or auto-calculated from event spec.

> See more details on Swagger related configurations in http eventsource and event level both, in [Express Plugin documentation](../event-sources/event-source-plugins/Express%20Http%20Eventsource.md)

### CRUD API generation
Checkout how to generate CRUD APIs in a [step by step guide](../CRUD_API.md).

### Graphql setup with schema generation
Check out the [Apollo Graphql plugin documentation](../event-sources/event-source-plugins/Apollo%20GraphQl%20Eventsource.md) for more details.

### Datasources
[Datasources](../datasources/overview.md) are any locations which allow to send or retrieve data. These could be another API service, message bus, file system, database, text search engine etc. 

### Using Datasource and Eventsource Plugins
You can import any datasource or eventsource in your project without writing code, with the available plugins for [eventsources](../event-sources/event-source-plugins.md) and [datasources](../datasources/list-of-plugins.md). 

#### **Eventsource Plugins**

Currently officially supported eventsources plugins are [Express Server](../event-sources/event-source-plugins/Express%20Http%20Eventsource.md), [Fastify Server](../event-sources/event-source-plugins/Fastify%20Eventsource.md), [cron](../event-sources/event-source-plugins/Cron%20Eventsource.md), [Kafka](../event-sources/event-source-plugins/Kafka%20Eventsource.md) & [Apollo Graphql Server](../event-sources/event-source-plugins/Apollo%20GraphQl%20Eventsource.md)

#### Datasource Plugins
Currently officially supported datasource plugins are [Prisma](../datasources/datasource-plugins/Prisma%20Datasource.md), [Mongoose](../datasources/datasource-plugins/Mongoose%20Datasource.md), [Axios](../datasources/datasource-plugins/Axios%20Datasource.md), [Memcached](../datasources/datasource-plugins/Memcached%20Datasource.md), [Kafka](../datasources/datasource-plugins/Kafka%20Datasource.md), [Redis](../datasources/datasource-plugins/Redis%20Datasource.md), [AWS](../datasources/datasource-plugins/AWS%20Datasource.md)

#### Creating Own Plugins

You can modify our existing plugins or create new plugins from scratch and reuse across your projects. A detailed overview of how to [create eventsource plugins](../event-sources/create-eventsource-plugin.md) and [datasource plugins](../datasources/create-datasource-plugin.md) exists.

### JWT authentication

> The Meta Framework currently supports standardised JWT authentication implementation across [Express](../event-sources/event-source-plugins/Express%20Http%20Eventsource.md), [Fastify](../event-sources/event-source-plugins/Fastify%20Eventsource.md) and [Apollo Graphql plugins](../event-sources/event-source-plugins/Apollo%20GraphQl%20Eventsource.md).

Configure the eventsource to enable jwt authentication. More detailed information about authentication available [here](../authentication/overview.md)

**Configuring JWT in Express "./src/eventsources/http.yaml"**
> Express, Fastify and Graphql plugins support standard way of handling JWT based authenticatin.
```
type: express
jwt:
  issuer: <%config.issuer%> 
  audience: <%config.audience%> 
  secretOrKey: <%config.secret%>
```
*This enables JWT authentication on all your endpoints for the given eventsource. *

**Disabling authentication on a given endpoint**
You can disable authn on any endpoint by setting `authn: false`
```yaml
"http.get./helloworld":
  fn: helloworld
  authn: false
```

### Authorization (RBAC, ABAC, PBAC)
The meta-framework gives you full freedom to handle authorization [(more details here)](../authorization/overview.md) based on RBAC, ABAC or PBAC, in a generic way, independent of the event source. You can integrate any IAM or policy engine to use with the meta-framework. 

**Authorization at eventsource level**
Authorization can be a list of YAML instructions or just one function which could be in turn TS, JS or YAML function in Godspeed's DSL.

```yaml
authz: 
  - fn: com.gs.is_allowed

# OR
authz: com.gs.is_allowed
```

**Disabling authorization at event level**
If authorization is enabled at eventsource level for all its events, but you wish to disable authorization for any particular events, you can disable authorization at an event level by saying `authz: false`.

```yaml
"http.get./helloworld":
  fn: helloworld
  authz: false
```

**Customizing authorization at event level**
If authorization is enabled at eventsource level for all its events, but you wish to customise authorization for any particular events, you can disable authorization at the event level, by setting an authorization function or inline yaml workflow there itself.
```yaml
"http.get./helloworld":
  fn: helloworld
  authz: com.biz.user_is_allowed_for_this_event 
```

### Referencing pre-made project templates
Pre-made projects are a great place to start learning about the meta-framework. You can refer these pre-made examples to learn about different features of meta-framework, and reuse the code from there. Feel free to clone, refer and re-use the repos given below.

#### Basic Project

Repository - [Hello World](https://github.com/godspeedsystems/gs-node-templates/tree/master/hello_world)

#### Full Stack App
A full stack app with Godspeed based backend and an embedded React project for frontend.

Repository - [With Godspeed and React](https://github.com/godspeedsystems/gs-node-templates/tree/master/FullStack_App_With_React).

#### Loan Origination System

A more complex fintech project with diverse use cases for issuing loans via multiple lenders, policies, loan offers, KYC, loan account creation etc in a microservice based design.

Repository - [Loan Origination System](https://github.com/godspeedsystems/gs-node-templates/tree/master/LOS). 

_Check the Readme.md and Setup.md files in this repo as it requires a docker container of Postgres and Kafka to be running. Dockerfile is provided in the project._

### Detailed Walkthrough & Playlist

#### Walkthrough
A walkthough on a Godspeed project with Loan Origination System example


<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/BTPHPoI3dh0" frameborder="0" allowfullscreen></iframe>
</div>

#### Detailed Explainer Playlist
:::tip
[Watch here](https://www.youtube.com/watch?v=GdJ0ghpQ7oA&list=PLRuRJ3PaaJ7ti9bfStNTXqsxxW9wvwA_H)
:::

### There is more

For the sake of brevity this section does not include every feature of Godspeed. But feel free to browse the documentatin for more insights and gems!


---- Content from: D:\gs-documentation\docs\microservices-framework\guides.md ----

---
sidebar_position: 1
title: Guides and FAQs
---

This section will give answers to your most pressing questions about using the godspeed meta-framework. 
It is designed to be easy to follow and understand, with step-by-step instructions to help illustrate each process.

### Setting up the APIs of your service

- **[How to create Rest APIs in Godspeed framework?](/docs/microservices-framework/how-to/create-api)**

- **[How to generate CRUD APIs?](/docs/microservices-framework/CRUD_API)**

- **[How to open Swagger UI for your APIs?](/docs/microservices-framework/guide/get-started#step-3-access-swagger-ui)**

- **[How to generate postman collection for your APIs?](/docs/microservices-framework/guide/get-started#postman-collection)**  

- **[How to add JWT authentication in your Rest APIs?](/docs/microservices-framework/authentication/jwt-authentication)**

- **[How to use OAuth2 for user login and protection of your endpoints?](/docs/microservices-framework/authentication/oauth2-authentication)**

- **[How to disable authentication for a particular endpoint? ](/docs/microservices-framework/authentication/jwt-authentication#disabling-jwt-authentication-at-event-level)**

- **[How to call REST APIs using Axios?](/docs/microservices-framework/how-to/axios-apis)**

- **[How to call APIs using client SDK?](/docs/microservices-framework/datasources/create-custom-datasource)**

- **[How to handle API callbacks and webhooks?](/docs/microservices-framework/how-to/callbacks)**



### Writing your Workflows or Functions
In Godspeed, the words Workflows and Functions mean one and the same thing, i.e. your business logic.

- **[How to write typescript workflows in godspeed?](/docs/microservices-framework/workflows/native-language-functions)**

- **[How to write yaml workflows in godspeed?](/docs/microservices-framework/workflows/yaml-workflows/workflow-dsl)**

<!-- - **[When to prefer writing typescript workflows over yaml? And vice versa?]() -->

### Accessing other APIs, databases and other datastores from workflows
In Godspeed, datasource can mean any place where you send or retrieve data from. It could mean:
- External APIs
- Datastores
  - Databases (Types - SQL, NoSQL, graph, key value, columnar, OLAP, OLTP, document)
  - Caches
  - Search engine
  - Vector stores (specially useful for AI and recommendation engines)
  - File system or files
  - Memory

- **[How to access databases using Prisma?](/docs/microservices-framework/databases/Overview)**

- **[How to access databases using Mongoose?](/docs/microservices-framework/databases/MongoDB#mongoose-as-datasource-plugin)**

- **[How to access any datastore by creating a custom datasource?](/docs/microservices-framework/datasources/create-custom-datasource)**

- **[How to invoke datasource clients from typescript workflows?](/docs/microservices-framework/how-to/call-datasource)**

- **[How to invoke datasource clients from yaml workflows?](/docs/microservices-framework/how-to/call-datasource)**

- **[How to access the environment variables from the typescript workflows?](/docs/microservices-framework/how-to/short-faqs)**

- **[How to update and run the project after renaming any file?](/docs/microservices-framework/how-to/short-faqs#how-to-update-and-run-the-project-after-renaming-any-file)**

- **[How to handle secrets, api keys, connection_urls etc.?](/docs/microservices-framework/how-to/short-faqs#how-to-handle-secrets-api-keys-connection_urls-etc)**

- **[How to update CRUD APIs after change in db model?](/docs/microservices-framework/how-to/short-faqs#how-to-update-crud-apis-after-change-in-db-model)**


---- Content from: D:\gs-documentation\docs\microservices-framework\how-to\axios-apis.md ----

# Level up your data-fetching game with Axios

In Godspeed, Axios is used as a datasource plugin for making HTTP requests to external APIs or services. 
This allows your application to communicate with third-party services or other microservices by sending requests
and receiving responses in a structured way. Axios simplifies the process of making requests, 
handling authentication, managing headers, handling errors, 
and retrying requests, which is especially useful for complex workflows or external integrations.

## Step-by-Step Guide:

### **Step 1: Configure Axios as a Datasource**

1. Create a godspeed project from the CLI and by default the axios plugin is integrated into your project if not, add the plugin from the CLI and select the **"axios-as-datasource" plugin** to integrate the plugin.

   ```bash
   godspeed plugin add
   ```

2. **Open the Axios Configuration file**: In your project, go to `src/datasources/<api.yaml>`. This file will define the base configuration for Axios.

In this file, you can set the base URL and any custom headers or authentication needed for interacting with the third-party API.

**Example api.yaml:**

  ```yaml
  type: axios
  base_url: https://httpbin.org   # Base URL of the third-party API. You can use `https://httpbin.org` for testing.

  # Following fields are optional, you can use them as per your requirement
  curlifiedLogs: true   # to print all api calls in curl format

  authn:       # to do Authentication of API calls with token refresh logic
    fn: my_bank.authn
    refreshOn:
      statusCode: [401]

  headers:      # to set Common headers in all API calls
    Content-Type: application/json
    Cookie: <%mappings.my_bank.auth_workflow_cookie%>

  # Retry logic for failed API calls for ex on Internal server errors or request timeouts
  retry:
      when: #the condition
        status: [500, 503] # an array or single value of codes (optional). Default 500
        message: my custom expected message for retry #And (optionally) when response has this message
      max_attempts: 5
      type: constant # or random, exponential
      interval: PT15s
      # type: exponential
      # min_interval: PT5s
      # max_internal: PT15s
      # type: random
      # min_interval: PT5s
      # max_internal: PT15s
     
  ```

### Step 2: Set Up an Event

1. **Create an Event to Trigger the Workflow**: Define an HTTP event to trigger the workflow and call the third-party API.
 Example `fetchData.yaml`:

```yaml
http.get./fetch-data:
  fn: fetchDataWorkflow
  authn: false
  params:
    - name: test_input
      in: query
      required: true
      schema:
        type: string
  responses:
    200:
      content:
        application/json:
          schema:
            type: object
```
  ### Explanation:
   - **http.get./fetch-data:**: The first line of any http event defines the (protocol.Method./end-point)
   Here, /fetch-data is the end point which will send a get request to third party API by calling a workflow.
   - **fn**: fn defines the workflow function to be called. here it is, fetchDataWorkflow.


### Step 3: Set Up Workflow to Use the Axios Datasource

 Go to `src/functions/` and create a file (e.g., `fetchDataWorkflow.yaml`).Use the Axios configuration to make the API call. You can specify the endpoint, HTTP method, and any parameters needed for the request.

```yaml
  summary: Calls the third-party API using Axios
  tasks:
  - id: fetchDataWorkflow
    fn: datasource.api.get./anything
    args:
      data:
        <% inputs.query.id %>
    on_error:
      continue: false
```

  ### Explanation:

   - **fn: datasource.api.get./anything** - References a predefined Axios function `axiosRequest` to make the API call which contains:-

     - **api**: it will be the name of confguration file of the axios datasource. User can give it any name like api1, api2. Same name will be used here.
     - **get**: HTTP method for example, Get/Post/Put
     - **/anything**: The endpoint of the API, relative to the base URL. Here, /anything is the endpoint given by user relative to the base url defined in api.yaml above. So it will send request to this url https://httpbin.org/anything
     - **params**: Optional query parameters.

   - **on_error**: Defines error handling if the API call fails.


### Step 4: Start the Server and Test the API:
   ```bash
   godspeed serve
   ```

   - Go to `http://localhost:3000/api-docs` to access Swagger UI.
   - Test the `/fetch-data` endpoint to ensure the third-party API call is working and data is being returned.

---

Following these steps, you’ll be able to interact with third-party APIs in Godspeed using Axios while keeping the configuration modular and manageable.

---- Content from: D:\gs-documentation\docs\microservices-framework\how-to\call-datasource.md ----


# Invoking Datasource Clients from TypeScript Workflows

In Godspeed, all configured datasources can be accessed through `ctx.datasources`. 

There are two main ways to invoke datasource methods depending on your needs.

---

## Option 1: Direct Access via `client` Key

Each datasource has a `client` key to directly access its client instance. This might be:
   - A **single client instance** (e.g., Axios)
   - **Multiple service instances** (e.g., AWS services like S3, DynamoDB)
   - **Database models** (e.g., MongoDB models via Mongoose)

### Example
To access AWS S3 services directly:

```typescript
const res = await ctx.datasources.aws.client.s3.listBuckets(args);
```
---

## Option 2: Using the `execute` Method

The `execute` method is available for all datasources and is often more flexible because it leverages the plugin’s full capabilities, including:
   - **Error handling checks** and **response codes**
   - **Retries** and **caching** mechanisms (if supported by the plugin)

### **Usage**
Pass arguments directly to the `execute` method, along with a `meta` object that specifies the `entityType` and `method`:
```typescript
const res = await ctx.datasources.aws.execute(ctx, {
   ...args,
   meta: { entityType: 's3', method: 'listBuckets' }
});
```
---

### Example TypeScript Function Using Datasources

Below is a TypeScript function that demonstrates invoking both datasource clients and project functions:

```typescript
import { GSContext, GSStatus } from "@godspeedsystems/core";

export default async function (ctx: GSContext, args: any) {
    // Example of calling another function (YAML, JS, TS) within a project:
    const helloRes = await ctx.functions['com.gs.helloworld2'](ctx, args);

    // **Option 1**: Access AWS S3 directly via the `client` key
    const s3Buckets = await ctx.datasources.aws.client.s3.listBuckets(args);

    // **Option 2**: Access AWS S3 via the `execute` method, which uses plugin capabilities
    const s3Res = await ctx.datasources.aws.execute(ctx, {
        ...args,
        meta: { entityType: 's3', method: 'listBuckets' }
    });

    // Handling response and status checks
    if (!s3Res.success) {
        return new GSStatus(false, s3Res.code || 500, undefined, {
            message: "Internal Server Error",
            info: s3Res.message
        });
    }
    // Returning data in Godspeed:
    // If only data is returned (without `success` or `code` keys), the framework defaults `success` to `true` and response code to `200`.
    return s3Res;
}
```
---

<!-- 
## Invoking Datasource Clients from Yaml Workflows

In Godspeed, datasources can be accessed and invoked within YAML workflows using the datasource.<datasourceName>.<method> syntax. 

This approach enables you to call methods on datasources directly from YAML, making it possible to perform complex API requests or database interactions without writing additional TypeScript or JavaScript code.

### Example Yaml Workflow

```yaml
summary: "Get AI-driven response from ChatGPT"
tasks:
  - id: request_chatgpt
    fn: datasource.chatgpt.chat # calling the chat method within chatgpt datasource.
    args:           # arguments to be passed to the chat method in the datasource
      prompt: <% inputs.body.prompt %>

``` -->



---- Content from: D:\gs-documentation\docs\microservices-framework\how-to\callbacks.md ----

# Handle Callbacks in Godspeed
Handling callbacks in your application just requires setting up an **HTTP endpoint**.

This endpoint will act as a listener for responses from third-party services, which send data or notifications to your server when specific events occur.

### Steps to Handle Callbacks in Godspeed

### 1. Define the Callback URL Endpoint

To receive a callback, define an **HTTP endpoint** in Godspeed that the third-party service can use as the callback URL.

1. **Create a New Event** in the `src/events` directory. This event will listen for incoming callback requests.

Example **`callback-event.yaml`**:

  ```yaml
   http.post./callback:
     summary: "Handle callbacks from external services"
     description: "Endpoint to handle callback responses from external services."
     fn: handleCallback
     authn: false
     body:
       content:
         application/json:
           schema:
             type: object
             properties:
               status:
                 type: string
               data:
                 type: object
             required: [status]
     responses:
       200:
         description: Callback handled successfully
         content:
           application/json:
             schema:
               type: object
               properties:
                 message:
                   type: string
                   example: Callback received and processed
       400:
         description: Invalid callback request
   ```

   **Explanation**:
   - **Path**: The callback endpoint listens at `POST /callback`.
   - **Body**: Defines the structure of the callback payload (e.g., `status` and `data` fields).
   - **Responses**: Specifies possible responses, such as `200` for successful processing and `400` for invalid requests.

---

### 2. Create the Workflow to Process the Callback

Define a workflow to process the callback data, handling any necessary business logic.

1. **Create a Workflow File** in the `src/functions` directory to define how the callback data is processed.

Example **`handleCallback.yaml`**:

   ```yaml
   id: handleCallback
   summary: Process callback data from external service
   tasks:
     - id: validate_callback
       fn: validateCallbackData
       args:
         data: <% inputs.body.data %>
         status: <% inputs.body.status %>

     - id: process_data
       fn: processData
       args:
         data: <% validate_callback.result %>

     - id: respond_success
       args:
         statusCode: 200
         body:
           message: Callback received and processed successfully
   ```

   **Explanation**:
   - **validate_callback**: A task to validate incoming callback data.
   - **process_data**: Processes the data after validation.
   - **respond_success**: Responds with a `200` status code if all tasks are completed successfully.

---

### 3. Set the Callback URL with the Third-Party Service

1. **Register the Callback URL** with the external service.
   - Provide the callback URL in the following format: `http://<BASE_URL>:<PORT>/callback`
   - Replace `<BASE_URL>` and `<PORT>` with your actual server's URL and port.

   For example:
   ```plaintext
   http://localhost:3000/callback
   ```

2. **Test the Callback**:
   - Use tools like **Postman** or a similar HTTP client to simulate a POST request to the `/callback` endpoint.
   - Ensure the payload matches the expected schema to confirm the callback flow.

---

### Example Scenario: Handling Payment Gateway Callback

Let’s say you’re integrating with a payment gateway, and you want to handle a payment status update callback:

1. **Set Up Event and Workflow**: Follow the same steps as above to create the event (`payment_callback.yaml`) and workflow (`handlePaymentCallback`) files.
2. **Register the Callback URL**: Provide the payment gateway with your callback URL.
3. **Process the Callback**: In the `handlePaymentCallback` workflow, define specific tasks to validate payment status, log transactions, or update your database based on the callback data.

---

This setup gives you full control over handling incoming callbacks, allowing you to process and store data as required. Each component—from the event to the functions—can be customized to suit the specific needs of the callback use case.

---- Content from: D:\gs-documentation\docs\microservices-framework\how-to\create-api.md ----

# Creating APIs in Godspeed

## Step-by-Step Guide to create APIs in Godspeed framework

Creating a REST API in Godspeed involves defining an **HTTP event** to handle incoming requests and configuring a workflow/function to process the data and return a response. 
  
  Here’s a step-by-step guide to setting up a REST API in Godspeed.

### Step 1: Confirm HTTP EventSource Configuration
Open src/eventsources/http.yaml to confirm the Express plugin (the HTTP eventsource) is installed and configured correctly.
[Click here](/docs/microservices-framework/event-sources/event-source-plugins/Express%20Http%20Eventsource#instance-file) and check how the default http.yaml file look like

### Step 2: Define the API or HTTP Event
  In Godspeed, each API endpoint is represented by an HTTP event. 
  Here’s how to define an event using to create a simple API that takes a name as input 

 **Create an Event:**
  
  Create a YAML file in the src/events/ directory (e.g., greet-user.yaml).

  Define the HTTP Event to handle POST requests at the /greet endpoint and expect a name in the request body and returns a greeting.

  ```yaml
  http.post./greet:     #  http.<method>./<endpoint_url>:
  fn: greet-user-workflow   # path of the Workflow to handle the request
  summary: Greet a user
  description: Accepts a name in the request body and returns a greeting
  authn: false  # to disable authentication for this event
  body:         # http request body, follows the same syntax as swagger spec
    content:
      application/json:
        schema:
          type: object
          properties:
            name:       # request body property name 
              type: string  # request body property type 
              description: Name of the user to greet
          required:
            - name
  responses:  # JSON-Schema of API responses set as per Swagger's standard responses syntax
    200:
      description: Greeting message
      content:
        application/json:
          schema:
            type: object
            properties:
              message:
                type: string
                example: 'Hello, John!'
    400:
      description: Bad request if name is missing
      content:
        application/json:
          schema:
            type: object
            properties:
              error:
                type: string
                example: Invalid request. 'name' is required.       
  ```

### Step 3: Set Up the Workflow
  Now, create a workflow/function to process the request in the src/functions/ directory. Workflow logic can be written either in typescript/javascript or in yaml.

 ### 3.1 Typescript function
  Hereby sharing a typescript function which shows all that you get in your event handler workflow when an event is triggered. The generic input structure is constant whether for Express, Fastify, Kafka, Salesforce, Socket etc.

  **All that you get in your typescript workflow:**

  ```typescript
  import { GSCloudEvent, GSContext, PlainObject } from "@godspeedsystems/core";
  import Pino from 'pino';

  export default function (ctx: GSContext, args: any) {
      const {
          inputs: {
              data: {
                  params, //path parameters from endpoint url
                  body,  // request body in case of http and graphql apis, event data in case of message bus or socket
                  query, // query parameters from rest api
                  user,  // user payload parsed from jwt token
                  headers //request headers in case of http and graphql apis
              }
          }, 
          childLogger, // context specific logger. Read pino childLogger for more information
          logger, // Basic logger of the project, generally prefer childLogger for logging 
          outputs, // outputs of previously executed tasks of yaml workflows (if any)
          functions, // all loaded workflows/functions from the src/functions/ folder
          datasources, //all configured datasources from src/datasources
          mappings  //mappings from src/mappings folder. this is useful for loading key value configurations for business logic of your project
      }: {
          inputs: GSCloudEvent, 
          childLogger: Pino.Logger, // you can also add custom attributes to childLogger
          logger: Pino.Logger,
          outputs: PlainObject, 
          functions: PlainObject, 
          datasources: PlainObject,
          mappings: PlainObject
      } = ctx;

      // Will print with workflow_name and task_id attributes. 
      childLogger.info('Server is running healthy');
      // Will print without workflow_name and task_id attributes
      logger.info('Arguments passed %o', args);
      logger.info('Inputs object \n user %o query %o body %o headers %o params %o', user, query, body, headers, params);
      logger.info('Outputs object has outputs from previous tasks with given ids %o', Object.keys(outputs));
      logger.info('Datasources object has following datasource clients %o', Object.keys(datasources));
      logger.info('Total functions found in the project %s', Object.keys(functions).length);

      // Returning only data
      return 'Its working! ' + body.name;

      //SAME AS
      return {
          data: 'Its working! ' + body.name,
          code: 200,
          // success: true,
          // headers: undefined
      }
      //SAME AS
      return {
          data: 'Its working! ' + body.name,
          code: 200,
          success: true,
          headers: undefined // or u can set response headers as key: value pairs, 
          //for example headers:{custom-header1:"xyz" }
      }
  }
  ```
### Example typescript workflow to return greetings with user's name
This workflow will take the name from the request and return a personalized greeting. 

`greet-user-workflow.ts`
```typescript
  import { GSCloudEvent, GSContext, PlainObject, GSStatus } from "@godspeedsystems/core";
  export default function (ctx: GSContext, args: PlainObject) {
      const {
        inputs: {
              data: {
                body
              }
          }, 
      }= ctx;
      return new GSStatus(true, 200, undefined, 'Hello ' + body.name, undefined);  
  }

```

#### Example workflow in yaml:
  ```yaml
    summary: Workflow to greet the user by name
    id: greet_user
    description: Workflow to greet the user by name
    tasks:
      - id: testing_inputs
        fn: com.gs.return
        args:
          name: <% inputs.body.name %>
  ```
### Step 5: Test the API

- **Start the Godspeed Server:**
  ```bash
  godspeed serve
  ```
- **Access Swagger UI:** 

In Godspeed, the **Swagger UI** is generated automatically for all defined events for documenting and testing the APIs. 
Swagger UI is typically accessed at the `/api-docs` endpoint, appended to the `base URL` and `port` where the server is running. 
Here’s the general format for accessing Swagger UI:

```plaintext
http://<BASE_URL>:<PORT>/<http_docs_endpoint>` deafult example,  http://localhost:3000/api-docs
```

- If your server is hosted on `example.com` and running on port **8080**:
  ```plaintext
  http://example.com:8080/api-docs
  ```
Here is a Screenshot of sample Swagger UI :

 ![img](../../../static/img/swagger_helloworld.png)

- Test the /greet Endpoint:

  Select the POST /greet endpoint in Swagger.
  Provide a JSON body with a name:
  ```json
  {
    "name": "John"
  }
  ```
  Execute the request and verify the response.
  

---- Content from: D:\gs-documentation\docs\microservices-framework\how-to\short-faqs.md ----

# FAQs

### How to update and run the project after renaming any file?
  
  With `godspeed clean` command you can remove all pre-compiled files from your `/dist` folder. It is useful to clean up the dist folder to remove old references to deleted/renamed files in `src`


### How to handle secrets, api keys, connection_urls etc.?
 
  You can add your own database connection string in .env file which is under root folder /.env
  Open this file and specify your database connection string here.

  Connection URL format: postgresql://username:password@host:port/database
  Example : 
   ```
    MY_DB_URL: postgresql://postgres:postgres@localhost:5432/test
   ```


###  To access the environment variables defined in config/custom-environment-variables.yaml

You can read it in two ways:
  Option1: directly from env
  Option2: through config file
  ```
    const frontendUrl = process.env.FRONTEND_URL ;
  ```
  And then use this variable in your ts code as:
  ```
    redirectUrl = `${frontendUrl}/verify?userId=${userId}
  ```
  Here, in the above example, we are redirecting user to frontEnd i.e. localhost:3001 passing userId as query parameter 

  You need to export this variable in the environment so that the variables can get value from your environment.
  For Example, below is a sample of custom-environment-variables.yaml 
  ```
   jwt:
    issuer: JWT_ISS
    audience: JWT_AUD
    secretOrKey: JWT_SECRET
  ```
  To export above defined variables to your environment, use the following syntax based on the environment which you are using:
  For shell
   ```
    $ export JWT_SECRET=mysecret
    $ export JWT_ISS= mycompany
   ```
  For windows powershell
   ```
    $env:JWT_SECRET= "mysecret"
    $env:JWT_ISS= "mycompany"
     
   ```
  After exporting the environment variable, you can access this variable in your project by using 
  scripting <% config.jwt.issuer %>

### How to update CRUD APIs after change in db model?

  First run
   ``` 
     $ godspeed clean
   ```
 - This command will remove all pre-compiled prisma-schema files from your `/dist` folder then 
 - Do the changes in your prisma schema file located in the datasources/ directory, save it and then run
   ```
    $ godspeed prisma prepare
   ```
  It will generate prisma client with the changes you have made in the schema and will sync the database with your prisma schema. -->

---- Content from: D:\gs-documentation\docs\microservices-framework\inline-scripting\overview.md ----

# Scripting

Inline scripting involves embedding and executing code directly within Godspeed YAML code (e.g. workflows, datasources, eventsource, events, etc.,) enhancing seamless integration of script-based logic or functionality.   
It is used directly by embedding the code/variables in `<% %>` tags. This code is evaluated whenever the yaml is needed to be evaluated e.g. at loadtime or runtime. 
     
**Loadtime evaluation** There are some variables/code which should be evaluated at loadtime. For example, using [configs and mappings](../config-and-mappings/config.md) in datasources, events, or eventsources as given below:
```yaml title=src/datasources/api.yaml
type: axios
base_url: <% config.api.base_url %>
```
```yaml title=src/events/helloworld.yaml
"http.post./helloworld":
  fn: helloworld
  body:
    content:
      application/json:
        schema:
          type: object
          properties:
            name:
              type: string
            gender:
              type: string
              enum: <% mappings.gender %>
```

**Runtime evaluation** There are some variables/code which should be evaluated at runtime. For example, using [GSContext properties](../workflows/native-language-functions.md/#gscontext) in workflows as given below:
```yaml title=src/workflows/helloworld.yaml
id: helloworld
tasks:
  - id: first_task
    fn: com.gs.return
    args: <% "Hello, The gender of " + inputs.body.name + " is " + inputs.body.gender %>
```

## Default language at global level
The default language is `js`. You can change the default language globally in `defaults.lang` key in `config/default.yaml`. It will be applicable everywhere unless overridden explicitly.    
```yaml title=config/default.yaml
defaults:
  lang: js #coffee
```

## Override the default language
You can override the default language by specifying the language inside the starting tag like `<coffee%` or `<js%`
```yaml
type: axios
base_url: <js% config.api.base_url %>
port: <coffee% config.port %>
```

## Scripting in workflows
We use scripting in workflows/functions for dynamic evaluation of variables in `<% %>` tags.

### Accessing ctx properties using scripting

The values of all [`ctx`](/docs/microservices-framework/workflows/native-language-functions.md#gscontext) properties can be assessed using scripting tags.

**1. Evaluating the inputs using scripting**

```yaml
summary: Summing x + y
description: Here we sum two hardcoded x and y values. Feel free to try using API inputs from body or params!
tasks:
  - id: sum_step1
    description: add two numbers
    fn: com.gs.transform
    args: <% inputs.body.x + inputs.body.y %>
```

**2. Evaluating the outputs using scripting**
```yaml
summary: Summing x + y
description: Here we sum two hardcoded x and y values. Feel free to try using API inputs from body or params!
tasks:
  - id: sum_step1
    description: add two numbers
    fn: com.gs.transform
    args: <% inputs.body.x + inputs.body.y %>
  - id: sum_step2
    fn: com.gs.return
    args: <% outputs.sum_step1 %>
```

**3. Evaluating the outputs using scripting bracket notation**
```yaml
  summary: parallel function
  tasks:
    - id: parallel
      fn: com.gs.parallel
      tasks:
        - id: 1st
          fn: com.gs.return
          args: "నమస్కారం"

        - id: 2nd
          fn: com.gs.return
          args: "नमस्ते"

        - id: 3rd
          fn: com.gs.return
          args: "Hello"
    - id: step2
      fn: com.gs.return
      args: |
        <% outputs["1st"] %>
```

### Dynamic evaluation using coffee/js scripting

You can use coffee/js to write embedded code in:
- args which are the arguments to the the function.
- transformations in [`com.gs.transform`](/docs/microservices-framework/workflows/yaml-workflows/inbuilt-workflows.md#comgstransform) and [`com.gs.return`](/docs/microservices-framework/workflows/yaml-workflows/inbuilt-workflows.md#comgsreturn)
- [authz instruction](../authorization/authz-usecases.md/#c-authorization-at-task-level) at task level.
- [on_error](../workflows/yaml-workflows/workflow-dsl.md/#error-handling) in workflow tasks.

**1. Scripting with coffee**
```
summary: test the coffee scripting
id: coffee_workflow
description: Test the coffee script
tasks:
  - id: sum
    fn: com.gs.transform
    args: |
      <coffee% 
        if inputs.query.name
          return "Hello Shirisha"
        else 
          return "Hello Developer"
      %>
```
**2. Scripting with Javascript**
```
summary: performing js scrpit 
tasks:
  - id: first_task
    fn: com.gs.return
    args: |
      <js%
        if(inputs.query.name){
          return `Hello ${inputs.query.name}!`
        }
        return 'Hello Developer!'
      %>
```

:::info Compile-time configuration data and mappings are present, however at runtime, the context (`ctx`) becomes available. 
:::

## Scripting in datasources
Within datasources, [config or mappings](../config-and-mappings/config.md), can be accessed at loadtime.
```yaml title=src/datasources/api.yaml
type: axios
base_url: <% config.api.base_url %>
```

## Scripting in eventsources and events
Within datasources, you can use scripting as given in the below examples:   
- accessing [config and mappings](../config-and-mappings/config.md).
- [authz instruction](../authorization/authz-usecases.md/#a-authorization-at-event-source-level)
```yaml title=eventsources/http.yaml
type: express
port: <% config.http.port %>
docs:
  endpoint: /api-docs
jwt:
  issuer: <% config.jwt.iss %>
  audience: <% config.jwt.aud %>
  secretOrKey: <%  config.jwt.sec %>
authz:
  - fn: com.gs.transform 
    id: authz_task
    args: | # if this condition fails, the else gets executed
      <js% 
        if (inputs.user.role !== 'admin') { 
            return {
            success: false, 
            code: 403,
            message: "Authorization failed"
          }
        }
      %>  
```

```yaml title=src/events/helloworld.yaml
"http.post./helloworld":
  fn: helloworld
  body:
    content:
      application/json:
        schema:
          type: object
          properties:
            name:
              type: string
            gender:
              type: string
              enum: <% mappings.gender %>
  authz:
    - fn: com.gs.transform 
      id: authz_task
      args: | # if this condition fails, the else gets executed
        <js% 
          if (inputs.user.role !== 'system admin') { 
              return {
              success: false, 
              code: 403,
              message: "Authorization failed"
            }
          }
        %>   
```


---- Content from: D:\gs-documentation\docs\microservices-framework\inline-scripting\script-plugins.md ----

---
sidebar_position: 3
title: Plugins
---

# Script Plugins

Plugins are utility JS/TS synchronous functions designed to enhance inline scripting capabilities. You can write any piece of code in a plugin and access it inside your inline scripts at any time.

They can be use like this         
```
date: <% time_epoch_convertEpochToDate(inputs.body.datetimestamp) %>
```

:::tip
Note: These are not to be confused with eventsource and datasource plugins. 
:::

## Project structure
Plugins are present in `src/plugins` directory. The default format is js/ts and you can store plugins in the nested directories also.
```
.
├── config
└── src
    └── plugins
        └── index.ts
        └── time
            └── epoch.ts
        └── epoch
            └── convertEpoch.ts
```
## How they are loaded?
:::tip Note
1. If the file name is index.ts then its content is available directly at global level i.e. you don't need to write index explicitly while accessing the plugin e.g. `randomInt`.    
2. For other file names you need to mention the file name using underscore notation while accessing the plugins function inside your workflow e.g. `time_epoch_convertEpochToDate`
3. If it's a default import then you don't need to mention the plugin function name e.g. `epoch_convertEpoch`
:::

## Sample plugins
These are the sample plugins file which export plugin functions named `randomInt` and `convertEpochToDate`.
```ts title="plugins/index.ts"
export function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

```ts title="plugins/time/epoch.ts"
import format from 'date-fns/format';

export function convertEpochToDate(inputTimestamp: string){
    const newDateTime = new Date(inputTimestamp);
    return format(newDateTime, 'yyyy-MM-dd HH:mm:ss');
}
```

```ts title="plugins/epoch/convertEpoch.ts"
import format from 'date-fns/format';

export default function convertEpoch(inputTimestamp: string){
    const newDateTime = new Date(inputTimestamp);
    return format(newDateTime, 'yyyy-MM-dd HH:mm:ss');
}
```

## Sample workflow using plugins
You can use these plugins in your workflows as given below:
```
  - id: httpbinCof_step1
    description: Hit http bin with some dummy data. It will send back same as response
    fn: datasource.api.post./anything
    args:
      data:
        personal_email_id: 'ala.eforwich@email.com'
        id: <% 'UID-' + randomInt(1,9) %>
        date: <% time_epoch_convertEpochToDate(inputs.body.datetimestamp) %>
        default_date: <% epoch_convertEpoch(inputs.body.datetimestamp) %>

```

---- Content from: D:\gs-documentation\docs\microservices-framework\introduction\design-principles.md ----

# Design Principles

### Three fundamental abstractions
Every microservice in the Godspeed framework has three fundamental abstractions which encompass the functionality of any microservice in general.

- **[Event-sources](/microservices-framework/event-sources/overview):** In the Godspeed framework, Event Sources serve as a mechanism for defining the primary entry or initiation points of an application. Developers can use [pre-built](/docs/microservices-framework/event-sources/event-source-plugins.md) event source types or create their [own plugins](/docs/microservices-framework/event-sources/create-eventsource-plugin.md). For instance, you can opt for an ['Express'](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/express-as-http#godspeed-express-plugin) type of Event Source to expose your microservice through REST APIs, ['Kafka'](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/kafka-as-datasource-as-eventsource#godspeed-plugin-kafka-as-datasource-as-eventsource) message bus event source, a 'Salesforce' Event Source, or you may choose a ['cron'](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/cron-as-eventsource#godspeed-plugin-cron-as-eventsource) type Event Source to schedule recurring calls to specific workflows. This level of configurability empowers developers to finely tune the behavior of their application according to their requirements.

- **[Events](/docs/microservices-framework/event-sources/event-types/overview.md):** Events trigger workflows. Events are of two types: sync (http: REST, gRpc, Graphql) or async(message bus, socket, cron) Events are generated by event sources like REST endpoints, gRPC, message bus, webhooks, websockets, S3, and more...


- **[Functions or Workflows](/docs/microservices-framework/workflows/overview.md):** Workflows are triggered by events. They not only perform business logic but also provide orchestration and federation over datasources. They will use datasources to store or retrieve data, join across various datasources, transform data, emit events and send responses. The framework provides two mechanisms for writing workflows - YAML DSL or native language like JS, TS or Java. For simple workflows, the framework provides a [YAML DSL](/docs/microservices-framework/workflows/yaml-workflows/workflow-dsl.md) with some [inbuilt functions](/docs/microservices-framework/workflows/yaml-workflows/inbuilt-workflows.md) and [inline scripting](/docs/microservices-framework/inline-scripting/overview.md) in JS/CoffeeScript/Groovy. This saves boilerplate and lines of code where we mainly query other datasources with authz, caching, retries, token refresh, custom telemetry etc. YAML DSL is useful when business logic is simple. If YAML does not suffice for any particular case, developers can author JS/TS workflows alongside YAML workflows. Workflows can invoke sub-workflows written in YAML DSL or [native language](/docs/microservices-framework/workflows/native-language-functions.md). Coming in future: Support for Java.


- **[Datasources](/docs/microservices-framework/datasources/overview.md):** Datasources are locations where data can be stored or read from. Developers can use [pre-built](/docs/microservices-framework/datasources/list-of-plugins.md) datasource types or create their [custom plugin](/docs/microservices-framework/datasources/create-datasource-plugin.md). For example API datasource (another microservice or third party), datastores (RDBMS, document, key-value), file system, S3 storage, message bus, cache etc. A microservice can use multiple datasources. 

### Schema driven development

The event schema should serve as single source of truth and binding contract between teams integrating microservices or frontend and backend. This allows them to work in parallel, in a decoupled manner, and enhances team efficiency. At Godspeed, this serves as a fundamental pillar of our design. The database schema written in Prisma format generates the CRUD API schema and also the CRUD workflows. Further, the schema of all other kind of events whether Sync or Async, follow Swagger Spec to define the input and output shape. From this event spec one can generate a [Graphql](https://github.com/godspeedsystems/gs-plugins/blob/880d8516c17b19dc012535d88c651b60d8454809/plugins/graphql-as-eventsource/README.md) or gRpc schema as well (Planned). Next, for calling an external API, the default API client integration (ex. [Axios](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/axios-as-datasource#godspeed-plugin-axios-as-datasource) for Nodejs), validates the input and output of the API based on the API's Swagger spec defined in the API integration. To initiate development, the developer needs to first and foremost define the API and data schema.

### Standardized YAML based DSL and configurations
At Godspeed we want projects written across languages like JS, Java, Golang to be atleast 70% same via higher level abstractions coded as a YAML DSL. This allows consistency of implementation, helps new developers onboard existing projects easily, prevents technical debt and also eases migration from one language or integration to another.

Events, workflows, datasources, configurations and environment variables are defined with high level cross-framework, cross-language, cross-integration abstractions, using YAML-based DSL which allows inline scripting in JS, CoffeeScript or Groovy (coming soon with Java port). However, when necessary, workflows can also be scripted in pure JavaScript, Typescript or Java files.

Godspeed's YAML-based DSL simplifies the expression of what is to be done. In many cases, it results in shorter, boilerplate free, comprehensible code compared to traditional programming. Plugin developers define  
- The custom URI of their event types
- The DSL of the functions exposed by their [plugin](/docs/microservices-framework/datasources/list-of-plugins.md)


### Unified datastore model and API

The unified model configuration and CRUD API, which includes popular SQL, NoSQL stores including [Elasticgraph](/docs/microservices-framework/datasources/datasource-plugins/elasticgraph/elasticgraph.md) (a unique ORM over Elasticsearch), offer standardized interfaces to various types of datastores, whether SQL or NoSQL. Each integration adapts to the nature of the data store. The Prisma and Elasticgraph plugins provided by Godspeed expose the native functions of the client used, giving developer the freedom to use the universal syntax or native queries.


### Schema driven data validation
We follow Swagger spec as a standard to validate the schema of the event, whether incoming or outgoing events (HTTP), without developer having to write any code. In case of database API calls, the datastore plugin validates the arguments based on the DB model specified in Prisma format.
The plugins for HTTP APIs or datastores offer validation for third-party API requests and responses, datastore queries, and incoming events based on Swagger spec or DB schema. For more intricate validation scenarios, such as conditional validation based on attributes like subject, object, environment, or payload, developers can incorporate these rules into the application logic as part of middleware or workflows.

### Authentication
Authentication helps to identify who is the user, and generate their access tokens or JWT token for authorized access to the resources of the application.
The framework gives developers full freedom to setup any kind of authentication. For ex. they can setup simple auth using the microservice's internal datastore. Or they can invoke an IAM service like ORY Kratos, AWS Okta, or an inhouse service. They can also add OAUTH2 authentication using different providers like Google, Microsoft, Apple, Github etc. using pre-built plugins, or import and customize an existing HTTP plugin like Express, by adding PassportJS middleware.

### Authorization
[Authorization](/docs/microservices-framework/authorization/overview.md) is key to security, for multi-tenant or variety of other use cases. The framework allows neat, clean and low code syntax to have a fine grained authorization in place, at the event level or workflow's task level, when querying a database or another API.
Developers define authorization rules for each event or workflow task using straightforward configurations for JWT validation or RBAC/ABAC. For more complex use cases, for ex. where they query a policy engine and dynamically compute the permissions, they can write workflows or native functions to access the datasources, compute the rules on the fly, and patch the outcome of that function into a task's `authz` parameter. 
These rules encompass not only access to API endpoints but also provide fine-grained data access within datastores, for table, row and column level access. The framework allows seamless integration with third-party authorization services or ACL databases via the datasource abstraction.

### Autogenerated Swagger spec
Following the principles of Schema Driven Development, the event spec of the microservice can be used to auto-generate the Swagger spec for HTTP APIs exposed by this serice. The framework provides autogenerated Swagger documentation using CLI.

### Autogenerated CRUD API
The framework provides autogenereated CRUD APIs from database model written in Prisma format. Generated API's can be extended by the developers as per their needs. We are planning auto generate or Graphql and gRpc APIs, and may release a developer bountry for the same soon.

### Environment variables and configurations
The framework promites setting up of environment variables in a pre-defined YAML file. Though the developer can also allow access by other means via a .env file or setting them up manually. Further [configurations](/docs/microservices-framework/config-and-mappings/config.md) are to be written in `/config` folder. These variables are accessible in 
- Other configuration files
- Datasource, event source and event definitions
- Workflows

### Log redaction
The framework allows developer to specify the keys that may have sensitive information and should never get published in logs by mistake. There is a centralized check for such keys before a log is about to be printed. 

### Telemetry autoinstrumentation using OTEL
Godspeed allows a developer to add auto-instrumentation which publishes logs, trace and APM information in OTEL standard format, supported by all major observability backends. The APM export captures not just the RAM, CPU information per node/pod/service, but also the latency information of the incoming API calls, with broken down spans giving breakup of latency across the calls to datastores or external APIs. This helps to find out exact bottlenecks. Further the logs and trace/spans are correlated to find out exactly where the error happened in a request spanning multiple microservices with each calling multiple datasources and doing internal computation. 
Developer can also add custom logging, span creation and BPM metrics at task level. For ex. new user registration, failed login attempt etc.

---- Content from: D:\gs-documentation\docs\microservices-framework\introduction\guard-rails.md ----


# GuardRails 

Guardrails in the context of software development refer to a set of predefined rules, best practices, and constraints that guide developers in creating code that is secure, efficient, and maintainable. 

At Godspeed, our development philosophy revolves around four core guardrails, shaping a robust and innovative approach to software creation:

### 1.Schema driven development:

Embracing the power of structured data, Godspeed follows a schema-driven development approach. This guardrail ensures that the events, workflows within the software are defined by clear and well-documented schemas. 

Dive deeper into the fascinating world of schema-driven development by watching the video below...

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/jtn8rvfs7lo" frameborder="0" allowfullscreen></iframe>
</div>


### 2.Configure over code:

At Godspeed, we believe in empowerment over complexity. That's why we champion configuration over endless coding. This guardrail encourages the use of high-level abstractions and configuration settings, giving developers the power to tailor the software's behavior without getting lost in the weeds of complex code changes.

Ready to unravel the magic of configure over code? Take a closer look in the video below, where we break it down in simple terms!"


<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/7y7-gx80Nsc" frameborder="0" allowfullscreen></iframe>
</div>





### 3.Security:

At Godspeed, security is non-negotiable. We've fortified our software with robust security standards and practices, including secure coding, strong authentication, and proactive vulnerability mitigation. 

Watch the video below to see how we keep your digital fortress impregnable."

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/nVn86r3Sguo" frameborder="0" allowfullscreen></iframe>
</div>



### 4. Decoupled Architecture:

Godspeed's guardrail of decoupled architecture advocates for the separation of concerns within the software. By modularizing components and minimizing dependencies, this approach enhances scalability, maintainability, and collaboration among development teams. 

Watch the below video for more understanding.

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/tVWDbVPsLFQ" frameborder="0" allowfullscreen></iframe>
</div>



---- Content from: D:\gs-documentation\docs\microservices-framework\introduction\overview.md ----

---
slug: /
---
# Godspeed - Meta Framework

This document is meant for technology leaders, architects, and developers. Its purpose is to present the platform's overarching objectives, guiding principles, design elements, components, and functionalities to the target audience.

## Introduction

> Our mission at Godspeed is to bring greater standardization, best practices and ease of engineering to the tech teams of the world. We wish to achieve this as a collaboration by and for the community.  We wish to develop a meta-framework along with tools, integrations, learning content, licensing and marketplace, based on a value system which fosters develop-rights, equity, fairness and wellbeing for all.

We want to democratize tech for teams to effortlessly create, maintain, and monitor complex applications with reduced effort, agility, scalability, quality, performance, cost effectiveness and minimization of technical debt and talent hurdle. Our goal is to liberate teams from the burdensome, repetitive tasks, boilerplate, wiring, so that instead of focusing on the how, they retain a razor sharp focus on the what.

To achieve this, we're committed to providing teams with the meta-framework, tools, integrations and learning that they need to develop and maintain products, guided by first principles and best practices like

* Standardized implementation across languages, frameworks & tools
* Decoupled architecture with plug and play integrations
* Zero boilerplate with pre-built abstractions
* Schema and standards driven development
* Shift left
* Cloud agnostic setup
* No vendor lock-in

---

## Aims

### Boosting tech team's efficiency

The meta-framework with developer guardrails, generative features and pre-built integrations provides a ready-made feature set, a YAML DSL for important abstractions, simplified project setup, OTEL based [telemetry](/docs/microservices-framework/telemetry/overview.md) and devops tooling, streamlining the lives of developers and reducing their work and hence the chance of mistakes. This enables them to concentrate on and achieve their primary tasks with minimal effort, time, and cost.

The framework includes the essential functionalities of a 'modern microservice' by default, allowing developers to concentrate solely on business logic, resulting in significant reduction in workload.
![productivity](/img/productivity.png)

### Lower learning curve.

Developers can deliver a simple microservice on their first day itself. The standardized guardrails enforce their adoption and learning of best practices and engineering concepts, upskilling on the way as the projects proceed. In most cases, only a few in the organization need in-depth expertise, while others can quickly adapt to the framework through training and collaborate effectively, with support from internal team or from Godspeed.

### Easy brownfield adoption

Teams can adopt Godspeed by simply including the NPM module or jar in their existing project and installing the [CLI](/docs/microservices-framework/CLI.md). Godspeed ships as a node module. Hence it can be imported in any nodejs , bunjs or springboot project easily or developers can even reuse the existing event sources and data sources without any hassle.

### Security

The framework can read the environmental variables from a secure source like K8s Vault. It supports JWT, RBAC and ABAC based fine grained [authorization](/docs/microservices-framework/authorization/overview.md). For data at rest, developers can use encryption mechanisms over datastores. Log redaction allows to hide sensitive information from logs.

### Flexibility

Developer should be able to implement anything they need, or replace existing [eventsources](/docs/microservices-framework/event-sources/overview.md) or [datasources](/docs/microservices-framework/datasources/overview.md) with ease. They should also be able to migrate a project from one language or framework to another with least effort.

### Scale, performance and monitoring

For scale, we encourage the adoption of horizontal scaling approach based on Kubernetes. Developers can deploy a service on a Kubernetes cluster on any cloud.

For performance, we believe the datasources (APIs and DBs) are the bottlenecks most of the time, and hence the framework allows an easy integration of a cache of choice, over the calls to the [datasources](/docs/microservices-framework/datasources/overview.md). An easier way to setup Graphql like subscriptions and dual writes is planned.

For monitoring, the framework microservices allows export of APM and BPM signals in OTEL format which is supported by all major observability backend solutions. We provide a pre-configured Grafana dashboard, with correlated logs and traces, and detailed APM out of the box. Using the devops plugin of Godspeed CLI, teams can install the full Grafana stack with Loki, Mimir, Tempo and Minio, on a Kubernetes cluster for scalable telemetry ingestion.

### Maintainability

The standardized guardrails with clearly defined developer's boundaries, ensure neat, simple & systematic implementations across projects and individual developers with diverse experiences. This avoids technical debt from creeping into the project over time. Further, the decoupled architecture and a neat and modular implementation allows agility in bringing rapid changes as per the ever evolving needs and scenarios.

---

## Design Principles

In order to serve the [Goals](#aims) and [Tenets](/docs/microservices-framework/introduction/tenets.md) of the framework, we have followed certain [design principles](/docs/microservices-framework/introduction/design-principles.md).

## Framework architecture

The three main pillars of Godspeed framework: [eventsources](/docs/microservices-framework/event-sources/overview.md), [datasources](/docs/microservices-framework/datasources/overview.md), and [functions or workflows](/docs/microservices-framework/workflows/overview.md).

> Do read more about them in the [design principles](/docs/microservices-framework/introduction/design-principles.md) section.

![framework-architecture](/img/framework-architecture.png)

---

### Building blocks of framework:

1. [**EventSources:**](/docs/microservices-framework/event-sources/overview.md) Pluggable event sources of different kinds like, **HTTP with Express or Fastify, gRpc or Graphql server, cron, web socket, Message bus with Kafka or RabbitMQ, an event from Salesforce**.

   1.1. [**Events:**](/docs/microservices-framework/event-sources/overview.md) Events of async and sync kind are defined in standardized YAML DSL with endpoint, authorization rules and Swagger spec of input and output (as applicable).
2. [**DataSources:**](/docs/microservices-framework/datasources/overview.md) Pluggable datastores or API clients, to send or retrieve data. For ex. **MongoDB, Redis, AWS API etc**
3. [**Pure Workflows or Functions:**](/docs/microservices-framework/workflows/overview.md) The events invoke pure functions or workflows which contain the business logic. They take JSON as input and return JSON based output.
4. [**Config:**](/docs/microservices-framework/config-and-mappings/config.md) The configuration variables as well as their values are defined in yaml files under `config/` directory. Some variables are specific to the framework and rest variables can be created as per the business use cases.
5. [**ENV:**](/docs/microservices-framework/config-and-mappings/config.md#environment-variables) Sensitive data, like database URLs, that require concealment are specified in .env files and made available in the rest of the project via GSContext object.

## Features

![features](/img/features.png)


---- Content from: D:\gs-documentation\docs\microservices-framework\introduction\tenets.md ----

# Tenets


### Focus on the what and not the how

Thanks to Godspeed's out of box integrations, abstractions and command line assistance, developers can focus on implementing features rather than scaffolding, wiring up integrations, writing boilerplate code, doing repetitive tasks, setting up CI/CD, [telemetry](/docs/microservices-framework/telemetry/overview.md) etc. 

### Decoupled Architecture
The framework emphasizes and facilitates the adoption of [decoupled architecture](https://youtu.be/tVWDbVPsLFQ?si=tSILBF1LSoDmCn4Q), a practice that brings notable advantages.

For example, decoupled [event sources](/docs/microservices-framework/event-sources/overview.md) and [datasources](/docs/microservices-framework/datasources/overview.md) mean that replacing HTTP server, message bus, databases, cache systems, HTTP client etc. should require minimum to no changes in the project. Even switching between languages, like from Nodejs to Java, should require change in business logic only, leaving the abstracted event definitions, database models, API calls and business logic untouched.

### Standards driven
All projects of an organization should follow standardized and systematic implementation for ensuring maintainability and easy adoption by new developers.
Godspeed is called a meta-framework, or a framework of frameworks, because it unifies the way in which microservices are developed across the organization, even with varying languages and frameworks like Nodejs, BunJS, Java Springboot (coming soon), Golang/Python (coming in 2024) etc., via its standardized abstractions & scaffolding. 

Further the standardization includes established industry standards into system design, such as [OpenTelemetry](/docs/microservices-framework/telemetry/overview.md) for observability, Swagger specifications for API and event schema, and [Prisma](https://www.prisma.io/) for database model definition.

<!-- ---



In order to serve the [Goals](/docs/introduction#aims) and [Tenets](/docs/introduction#tenets) of the framework, here are the design principles we have followed. -->

---- Content from: D:\gs-documentation\docs\microservices-framework\swagger-specs.md ----

# Swagger Specs

## Steps to add Swagger specs in project. 

Framework will give you below folder structure.

```
    .
    ├── src
        ├── docs
        │    └── http-swagger.json 
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

When a service boots up, framework store the swagger docs for http events in `src/docs/`

1. To enable swagger ui add `docs` in  **"./src/eventsources/http.yaml"**

2. `/api-docs` is the default endpoint,if you want to provide your custom swagger endpoint, you can modify the endpoint from **"./src/eventsources/http.yaml"**

### update http.yaml( src/eventsources/http.yaml )
```yaml
type: express
port: 3000
docs:
  endpoint: /api-docs
```

## Custom info and server URLs info
You can add custom server URL for API documentation in http.yaml.
By adding the custom server url, your autogenerated documentation or swagger specs will have this url set in the `servers`.

```yaml
type: express
port: 3000
docs:
  endpoint: /
  info: # info object as per swagger 3.0 spec
    title: Sample Godspeed App
    version: 1.1.0
    summary: some http calls
    description: lets play with Godspeed
    contact:
      name: API Support
      url: 'http://www.myfintech.com/support'
      email: support@myfintech.com
    license:
      name: Apache 2.0
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
  servers:
    - url: 'http://localhost:3001'
      description: Public API server
    - url: 'http://localhost:3001'
      description: Internal API server
```
### Generate Swagger UI with tags and operationId

For tags: Either developer gives `tags` array in schema of event or else the framwork generates the tags for a given event from [`${folderPath}_${filePath}`]

For operationId: developer can give `operationId`, or `id` in the event shema. If none of this is present, then the summary of the event used to generate the operationId.

For example,
![Swagger specs](https://docs.godspeed.systems/assets/images/swagger_spec-5218946d179677ac711303f8d406b4ee.png)

---- Content from: D:\gs-documentation\docs\microservices-framework\telemetry\configuration.md ----

---
sidebar_position: 1
title: Configuration
toc_min_heading_level: 2
toc_max_heading_level: 3
---

## Generic configuration
The generic configuration is applicable for all traces, logs and metrics. It must be applied to use observability in Godspeed. It includes setting up various [OTel environment variables](https://opentelemetry.io/docs/specs/otel/configuration/sdk-environment-variables/#general-sdk-configuration) and the framework environment variables.

### OTEL_ENABLED
[Enable OTEL](../CLI.md/#otel) in your service using [Godspeed CLI](../CLI.md) by setting `OTEL_ENABLED` to true. You can alternatively set it in the `.env` file of your service. 
```
export OTEL_ENABLED=true
```

### OTEL_SERVICE_NAME
Specify the service name by which you want to setup observability. Set it as env variable or in the `.env` file of your service. 
```
export OTEL_SERVICE_NAME=sample_proj1
```

<!-- Let's assume you have setup SigNoz as the exporter then you will see something like this: 
![Metrics](/img/Metrics.png)
![SigNozgraph](/img/SigNoz-graph.png)
![Traces](/img/Traces.png) -->


---- Content from: D:\gs-documentation\docs\microservices-framework\telemetry\custom-metrics-logs-traces.md ----

# Custom metrics, traces and logs (BPM)
You can add custom metrics, traces and logs in the workflow DSL at each task level. Once you add these BPM (Business performance metrics) then these will be available out of the box along with APM (Application performance metrics).

### DSL spec for custom metrics
You can specify custom metrics in a task by follwing the below DSL spec. Check [Prometheis metrics types](https://prometheus.io/docs/concepts/metric_types/#metric-types) to find the types of available metrics.
```yaml
metrics:
- name: metric_name
  type: counter|gauge|histogram|summary
  labels: 
    label1: val1
    label2: val2
          
  # following functions depending on the metric type and all of them could be scripts, can use inputs/outputs
  inc: 10
  dec: 10
  set: 100
  observe: 2000
  timer: true|false(boolean) starts at the beginning of workflow/task and ends at the end of workflow/task
```

| metric type | function |
| ------------- | ------------- |
| counter | inc |
| gauge | inc, dec, set |
| histogram | observe, timer |
| summary | observe |

Refer [prom-client](https://www.npmjs.com/package/prom-client) to know more about the functions to be used for each metrics type.

#### Example
In the following example, we are using two custom metrics:    
**1. ** httpbin_calls_total: counter type metric, counter is incremented by 1.   
**2. ** httpbin_calls_duration: histogram type metric, timer is set to true to record duration.   

```yaml
summary: Call an API and transform the 
tasks:
    - id: httpbin_step1 # the response of this will be accessible within the parent step key, under the step1 sub key
      name: http bin step
      description: Hit http bin with some dummy data. It will send back same as response
      fn: datasource.api.post./anything       
      metrics:
        - name: httpbin_calls_total
          help: 'httpbin_calls_total counter of httpbin requests labeled with: method, status_code'
          type: counter
          labels:
            method: httpbin
            status_code: <% outputs.httpbin_step1.code %>               
          inc: 1
        - name: httpbin_calls_duration
          help: 'httpbin_calls_duration duration histogram of httpbin responses labeled with: method, status_code'
          type: histogram
          labels:
            method: httpbin
            status_code: <% outputs.httpbin_step1.code %>               
          timer: true          
      args:
        params: <% inputs.query %>
        data: <% inputs.body %>
```

### DSL spec for custom trace
You can add custom trace in the workflow tasks. Then these custom traces will be traced along with the default [traces](./tracing.md). Check [OTel traces](https://opentelemetry.io/docs/concepts/signals/traces/) to understand more about trace, span, attributes, etc.,
```yaml
trace:
  name: span_name
  attributes:
    attribute1: value1
    attribute2: value2
```

#### Example
In the following example, we are creating a new span named `httpbin_trace` with span attributes `request` and `param`. This span gets created when the task starts and ended when the task completes its execution.

```yaml
summary: Call an API and transform the 
tasks:
  - id: httpbin_step1 # the response of this will be accessible within the parent step key, under the step1 sub key
    name: http bin step
    description: Hit http bin with some dummy data. It will send back same as response
    fn: datasource.api.post./anything
    trace:
      name: httpbin_trace
      attributes:
          request: <%inputs.body%>
          param: <%inputs.query%>
    args:
      params: <% inputs.query %>
      data: <% inputs.body %>
```

### DSL spec for custom logs
You can add custom log before and after a task in a workflow.
```yaml
logs:
  before:
    level: fatal|error|warn|info|debug|trace # refer pino for levels
    message: 'Sample log before'
    params: 
      param1: val1
      param2: val2
    attributes:
      request:
        query: <%inputs.query%>
  after:
    level: info
    message: 'Sample log after'
    params:
    attributes: 
```

Please refer to [OTEL Logging Data model](https://opentelemetry.io/docs/reference/specification/logs/data-model/) for understanding of fields dumped in the logs.
> `message` and `params` are part of `Body` field and `attributes` are part of `Attributes` field in the log.

#### Example
In the following example, we are adding two additional logs before and after the task execution. 

```yaml
summary: Call an API and transform the 
tasks:
    - id: httpbin_step1 # the response of this will be accessible within the parent step key, under the step1 sub key
      name: http bin step
      description: Hit http bin with some dummy data. It will send back same as response
      fn: datasource.api.post./anything
      logs:
        before:
          level: error
          message: 'Hello'
          params: 
            - key1: v1
              key2: v2
            - v1
          attributes: 
            request: <%inputs.query%>
        after:
          level: error
          message: 'World'
          params: 
            key1: v1
            key2: v2
          attributes: 
            customer_name: <% outputs.httpbin_step1.data.json.customer_name %> 
      args:
        params: <% inputs.query %>
        data: <% inputs.body %>
```

** Sample Logs **  
```json
{"Body":"Hello [{\"key1\":\"v1\",\"key2\":\"v2\"},\"v1\"]","Timestamp":"2024-04-10T09:40:45.122Z000000","SeverityNumber":9,"SeverityText":"INFO","TraceId":"afde0bf5bb3533d932c1c04c30d91172","SpanId":"ad477b2cf81ca711","TraceFlags":"01","Resource":{"service.name":"unknown_service:node","host.hostname":"9ce06d358ba7","process.pid":67228},"Attributes":{"request":{"status":"Hello"},"task_id":"if","workflow_name":"if_else"}}
. . . . . . . . . . .
{"Body":"World {\"key1\":\"v1\",\"key2\":\"v2\"}","Timestamp":"2024-04-10T09:40:45.127Z000000","SeverityNumber":17,"SeverityText":"ERROR","TraceId":"afde0bf5bb3533d932c1c04c30d91172","SpanId":"ad477b2cf81ca711","TraceFlags":"01","Resource":{"service.name":"unknown_service:node","host.hostname":"9ce06d358ba7","process.pid":67228},"Attributes":{"customer_name":"Hell!","task_id":"if","workflow_name":"if_else"}}
``` 


---- Content from: D:\gs-documentation\docs\microservices-framework\telemetry\logging.md ----

---
sidebar_position: 1
title: Logs
toc_min_heading_level: 2
toc_max_heading_level: 4
---

Logs are the application/service logs that are displayed on console. Sample logs:    
```
[14:46:00.881] DEBUG: Datasources found in src/datasources ["api","mem-cache"]
    section: "loading_functions"
[14:46:00.882] DEBUG: Starting to parse and load GSFunction id: first_task name: helloworld
    parent: {
      "workflow_name": "helloworld",
      "task_id": "helloworld"
    }
    workflow_name: "helloworld"
    task_id: "first_task"     
```
Godspeed adds some attributes (extra key/value pairs) to the logs to enhance logging and provide more information about the location. For example, in the above logs,    
**`section`**: which represents section the service is in while getting loading.   
**`parent`**: an object with information about the parent workflow and task.   
**`workflow_name`**: which represents the current workflow.   
**`task_id`**: which represents the current task.   

## Application configuration
### Log format
There are two types of log formats in Godspeed.   

#### pino pretty format
[pino pretty format](https://www.npmjs.com/package/pino-pretty) is more readable and user friendly. It is mostly used in development environments on user's local machine. Logs are dumped in this format when any of the below conditions is satisfied:   
**a) ** observability is [disabled](/docs/microservices-framework/CLI.md/#otel) i.e. OTEL_ENABLED env variable is not set to true.   
**b) ** NODE_ENV is set to 'dev'.
  
Sample Logs:
```
[14:46:00.813] INFO: [START] Load definitions from /home/gurjot/data/cli-test/v2_test2/dist/definitions
[14:46:00.816] DEBUG: Definitions loaded and registered to ajvInstance
[14:46:00.817] INFO: [END] Load definitions
[14:46:00.818] INFO: [START] Load mappings from /home/gurjot/data/cli-test/v2_test2/dist/mappings
[14:46:00.819] INFO: [END] Load mappings
[14:46:00.819] INFO: [START] Load data sources from /home/gurjot/data/cli-test/v2_test2/dist/datasources
. . . . . . . . .
[14:46:00.881] DEBUG: JS/TS functions found in src/functions my_bank_api.auth_workflow,validations.request.standardResponse
    section: "loading_functions"
. . . . . . . .
[14:46:00.882] DEBUG: Starting to parse and load GSFunction id: helloworld name: helloworld
    workflow_name: "helloworld"
    task_id: "helloworld"
```

#### OTEL format
[OTEL Logging format](https://opentelemetry.io/docs/reference/specification/logs/data-model/) is used in Production/UAT and other environments where the user needs to enable observability.    
:::tip 
  OTEL Logging format provides co-relation between logs and traces by specifying tracing information (like TraceId, SpanId or TraceFlags) in the logs. With this co-relation information, one can navigate from logs to trace to get more information about any scenario. 
:::
Logs are dumped in this format when all of the below conditions are satisfied:   
**a) ** observability is [enabled](/docs/microservices-framework/CLI.md/#otel) i.e. OTEL_ENABLED env variable is set to true.   
**b) ** NODE_ENV is not set to 'dev'.

```json
{"Body":"[START] Load definitions from /home/gurjot/data/cli-test/v2_test2/dist/definitions","Timestamp":"2024-04-10T09:40:45.122Z000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"sample_app","env":"production","host.hostname":"ThinkPadT480s"},"Attributes":{}}
{"Body":"Definitions loaded and registered to ajvInstance","Timestamp":"2024-04-10T09:40:45.124Z000000","SeverityNumber":5,"SeverityText":"DEBUG","Resource":{"service.name":"sample_app","env":"production","host.hostname":"ThinkPadT480s"},"Attributes":{}}
{"Body":"[END] Load definitions","Timestamp":"2024-04-10T09:40:45.125Z000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"sample_app","env":"production","host.hostname":"ThinkPadT480s"},"Attributes":{}}
{"Body":"[START] Load mappings from /home/gurjot/data/cli-test/v2_test2/dist/mappings","Timestamp":"2024-04-10T09:40:45.125Z000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"sample_app","env":"production","host.hostname":"ThinkPadT480s"},"Attributes":{}}
{"Body":"[END] Load mappings","Timestamp":"2024-04-10T09:40:45.126Z000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"sample_app","env":"production","host.hostname":"ThinkPadT480s"},"Attributes":{}}
{"Body":"[START] Load data sources from /home/gurjot/data/cli-test/v2_test2/dist/datasources","Timestamp":"2024-04-10T09:40:45.126Z000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"sample_app","env":"production","host.hostname":"ThinkPadT480s"},"Attributes":{}}
. . . . . . . . .
{"Body":"JS/TS functions found in src/functions my_bank_api.auth_workflow,validations.request.standardResponse","Timestamp":"2024-04-10T09:40:45.210Z000000","SeverityNumber":5,"SeverityText":"DEBUG","Resource":{"service.name":"sample_app","env":"production","host.hostname":"ThinkPadT480s"},"Attributes":{"section":"loading_functions"}}
. . . . . . . . .
{"Body":"Starting to parse and load GSFunction id: helloworld name: helloworld","Timestamp":"2024-04-10T09:40:45.210Z000000","SeverityNumber":5,"SeverityText":"DEBUG","Resource":{"service.name":"sample_app","env":"production","host.hostname":"ThinkPadT480s"},"Attributes":{"workflow_name":"helloworld","task_id":"helloworld"}}
```   

### Log level
The minimum level set to log above this level. Please refer [Pino log levels](https://github.com/pinojs/pino/blob/master/docs/api.md#options) for more information. Set `log.level` in [config](/docs/microservices-framework/config-and-mappings/config.md#static-variables).
```yaml title=config/default.yaml
log:
  redact: # ['a.b.c', 'a.b.*', 'req.headers', 'mobileNumber'] #pino redact rules. Default null.
  level: debug #by default info
  sync: true #By default sync is false. For debugging, keep it true. For performance keep it false.
  timestamp: stdTimeFunctions.isoTime #Pino date formats
  bindings: # should pid and hostname be enabled in pino log bindings.
    pid: false
    hostname: true  
```

Sample Logs:
```
[14:46:00.813] INFO: [START] Load definitions from /home/gurjot/data/cli-test/v2_test2/dist/definitions
[14:46:00.816] DEBUG: Definitions loaded and registered to ajvInstance
[14:46:00.817] INFO: [END] Load definitions
```

### Log fields masking
If you want to hide sensitive information in logs then define the fields which need to be hidden in `redact` feature in [Static variables](/docs/microservices-framework/config-and-mappings/config.md#static-variables). Redaction path syntax is standard JSON object lookup.   
For example, 
```yaml title="config/default.yaml"
log:
  redact: ['a.b.c', 'a.b.*', 'req.headers', 'mobileNumber'] #pino redact rules. Default null.
  level: debug #by default info
  sync: true #By default sync is false. For debugging, keep it true. For performance keep it false.
  timestamp: stdTimeFunctions.isoTime #Pino date formats
  bindings: # should pid and hostname be enabled in pino log bindings.
    pid: false
    hostname: true  
```
By specifying the above redaction paths, the objects which have these properties will be masked in the logs.

:::note
Please refer [Pino redaction paths](https://github.com/pinojs/pino/blob/master/docs/redaction.md#paths) for more information.
:::

** Generic convention **   
If you want to mask any field in the objects in all deep nesting levels then you can use `**.<field_name>` convention instead of specifying each path explicitly.
For example, 
```yaml title="config/default.yaml"
log:
  redact: ['**.mobileNumber'] 
```
By specifying the above redaction path, `mobileNumber` field will be redacted in logs in all nesting levels.   
   
Sample masked logs:
```json
{"Body":"args after evaluation: step1 {\"name\":\"ABC\",\"gender\":\"M\",\"age\":25,\"mobileNumber\":\"*****\"}","Timestamp":"2024-04-10T09:40:45.124Z000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"sample_app","host.hostname":"4030f41a75cb","process.pid":3593},"Attributes":{"event":"/helloworld.http.get","workflow_name":"helloworld","task_id":"step1"}}
{"Body":"Executing handler step1 {\"name\":\"ABC\",\"gender\":\"M\",\"age\":25,\"mobileNumber\":\"*****\"}","Timestamp":"2024-04-10T09:40:45.124Z000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"sample_app","host.hostname":"4030f41a75cb","process.pid":3593},"Attributes":{"event":"/helloworld.http.get","workflow_name":"helloworld","task_id":"step1"}}
{"Body":"Result of _executeFn step1 {\"name\":\"ABC\",\"gender\":\"M\",\"age\":25,\"mobileNumber\":\"*****\"}","Timestamp":"2024-04-10T09:40:45.130Z000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"sample_app","host.hostname":"4030f41a75cb","process.pid":3593},"Attributes":{"event":"/helloworld.http.get","workflow_name":"helloworld","task_id":"step1"}}
{"Body":"Result of _executeFn add_mobileNumber_transformation_step2 {\"request_data\":{\"payload\":{\"data\":{\"body\":{\"mobileNumber\":\"*****\"}}}}}","Timestamp":"2024-04-10T09:40:45.190Z000000","SeverityNumber":9,"SeverityText":"INFO","Resource":{"service.name":"sample_app","host.hostname":"4030f41a75cb","process.pid":3593},"Attributes":{"event":"/helloworld.http.get","workflow_name":"helloworld","task_id":"add_mobileNumber_transformation_step2"}}
{"Body":"this.id: hello_world, output: {\"request_data\":{\"payload\":{\"data\":{\"body\":{\"mobileNumber\":\"*****\"}}}}}","Timestamp":"2024-04-10T09:40:45.191Z000000","SeverityNumber":5,"SeverityText":"DEBUG","Resource":{"service.name":"sample_app","host.hostname":"4030f41a75cb","process.pid":3593},"Attributes":{"event":"/helloworld.http.get","workflow_name":"helloworld","task_id":"hello_world"}}
```

### Log timestamp
Different timestamp formats. Please refer [pino.stdTimeFunctions](https://github.com/pinojs/pino/blob/master/docs/api.md#pinostdtimefunctions-object) for more information. Set `log.timestamp` in [config](/docs/microservices-framework/config-and-mappings/config.md#static-variables).
```yaml title=config/default.yaml
log:
  redact: ['a.b.c', 'a.b.*', 'req.headers', 'mobileNumber'] #pino redact rules. Default null.
  level: debug #by default info
  sync: true #By default sync is false. For debugging, keep it true. For performance keep it false.
  timestamp: stdTimeFunctions.isoTime #Pino date formats
  bindings: # should pid and hostname be enabled in pino log bindings.
    pid: false
    hostname: false 
```
Sample Logs:
```
[14:46:00.813] INFO: [START] Load definitions from /home/gurjot/data/cli-test/v2_test2/dist/definitions
[14:46:00.816] DEBUG: Definitions loaded and registered to ajvInstance
[14:46:00.817] INFO: [END] Load definitions
```

### Log bindings
Binds two extra properties to each log entry by default: the program's process ID (pid), and the current machine's hostname. Set `log.bindings` in [config](/docs/microservices-framework/config-and-mappings/config.md#static-variables).
```yaml title=config/default.yaml
log:
  redact: ['a.b.c', 'a.b.*', 'req.headers', 'mobileNumber'] #pino redact rules. Default null.
  level: debug #by default info
  sync: true #By default sync is false. For debugging, keep it true. For performance keep it false.
  timestamp: stdTimeFunctions.isoTime #Pino date formats
  bindings: # should pid and hostname be enabled in pino log bindings.
    pid: true
    hostname: true 
```
Sample Logs:
```
[14:46:00.813] INFO (16542 on HP-EliteBook-840-G3): [START] Load definitions from /home/gurjot/data/cli-test/v2_test2/dist/definitions
[14:46:00.816] DEBUG (16542 on HP-EliteBook-840-G3): Definitions loaded and registered to ajvInstance
[14:46:00.817] INFO (16542 on HP-EliteBook-840-G3): [END] Load definitions
```

### Asynchronous/Synchronous logs
Specifies whether to do synchronous or asynchronous logging. Please refer [asynchronous logging](https://github.com/pinojs/pino/blob/master/docs/asynchronous.md) for more information. Set `log.sync` in [config](/docs/microservices-framework/config-and-mappings/config.md#static-variables).
:::tip
It is recommented to set it to true for debugging purposes. For performance keep it false.
:::

```yaml title=config/default.yaml
log:
  redact: ['a.b.c', 'a.b.*', 'req.headers', 'mobileNumber'] #pino redact rules. Default null.
  level: debug #by default info
  sync: false #By default sync is false. For debugging, keep it true. For performance keep it false.
  timestamp: stdTimeFunctions.isoTime #Pino date formats
  bindings: # should pid and hostname be enabled in pino log bindings.
    pid: true
    hostname: true 
```
Sample Logs:
```
[14:46:00.813] INFO (16542 on HP-EliteBook-840-G3): [START] Load definitions from /home/gurjot/data/cli-test/v2_test2/dist/definitions
[14:46:00.816] DEBUG (16542 on HP-EliteBook-840-G3): Definitions loaded and registered to ajvInstance
[14:46:00.817] INFO (16542 on HP-EliteBook-840-G3): [END] Load definitions
```

### Custom log attributes
#### 1. For all events
You can add any custom attribute in the logs whenever any event is triggered on your service. The value for the custom identifier can be picked up from event body, params, query, or headers.   

** To enable this feature for common logging attributes across all events ,you need to specify two things: **

**1. ** `log.attributes` variable as in [config](/docs/microservices-framework/config-and-mappings/config.md#static-variables) which contains custom identifiers.

For example, this is the sample static configuration:
```yaml
log:
  attributes: 
    mobileNumber: <% query.mobileNumber %>
    id: <% params.id %>
    lan: <% body.data.lan %>
    name: <% headers.name %>
    gender: <% mappings.Gender %>
```

**2. ** location of the identifier in the request payload. As specified in the above example,     
**- ** if mobileNumber is present in query params then specify `query.mobileNumber`.   
**- ** if id is present in path params then specify `params.id`.   
**- ** if lan is present in data field inside body then specify `body.data.lan`.   
**- ** if name is present in headers then specify `headers.name`.   
**- ** if gender is present in data field inside mappings then specify `<% mappings.Gender %>`.   

##### Sample Logs 
```json
{"Body":"Processing event /test/:id.http.post","Timestamp":"2024-04-10T09:40:45.191Z000000","SeverityNumber":9,"SeverityText":"INFO","TraceId":"3b66e6f8ec6624f6467af1226503a39e","SpanId":"eb6e7d89ac381e9f","TraceFlags":"01","Resource":{"service.name":"sample_app","host.hostname":"5252603e08be","process.pid":828},"Attributes":{"event":"/test/:id.http.post","workflow_name":"com.jfs.test","mobileNumber":"9878987898","id":"12","lan":"12345"}}
{"Body":"event inputs {\"baseUrl\":\"\",\"body\":{\"data\":{\"lan\":\"12345\"}},\"fresh\":false,\"hostname\":\"localhost\",\"ip\":\"::ffff:172.22.0.1\",\"ips\":[],\"method\":\"POST\",\"originalUrl\":\"/test/12?mobileNumber=9878987898\",\"params\":{\"id\":\"12\"},\"path\":\"/test/12\",\"protocol\":\"http\",\"query\":{\"mobileNumber\":\"9878987898\"},\"route\":{\"path\":\"/test/:id\",\"stack\":[{\"name\":\"<anonymous>\",\"keys\":[],\"regexp\":{\"fast_star\":false,\"fast_slash\":false},\"method\":\"post\"},{\"name\":\"<anonymous>\",\"keys\":[],\"regexp\":{\"fast_star\":false,\"fast_slash\":false},\"method\":\"post\"}],\"methods\":{\"post\":true}},\"secure\":false,\"stale\":true,\"subdomains\":[],\"xhr\":false,\"headers\":{\"content-type\":\"application/json\",\"user-agent\":\"PostmanRuntime/7.29.2\",\"accept\":\"*/*\",\"postman-token\":\"9e57df7d-0a75-48b6-bc52-921bd5c045b7\",\"host\":\"localhost:4000\",\"accept-encoding\":\"gzip, deflate, br\",\"connection\":\"keep-alive\",\"content-length\":\"46\"},\"files\":[]}","Timestamp":"2024-04-10T09:40:45.196Z000000","SeverityNumber":9,"SeverityText":"INFO","TraceId":"3b66e6f8ec6624f6467af1226503a39e","SpanId":"eb6e7d89ac381e9f","TraceFlags":"01","Resource":{"service.name":"sample_app","host.hostname":"5252603e08be","process.pid":828},"Attributes":{"event":"/test/:id.http.post","workflow_name":"com.jfs.test","mobileNumber":"9878987898","id":"12","lan":"12345"}}
{"Body":"event body and eventSpec exist","Timestamp":"2024-04-10T09:40:45.197Z000000","SeverityNumber":9,"SeverityText":"INFO","TraceId":"3b66e6f8ec6624f6467af1226503a39e","SpanId":"eb6e7d89ac381e9f","TraceFlags":"01","Resource":{"service.name":"sample_app","host.hostname":"5252603e08be","process.pid":828},"Attributes":{"event":"/test/:id.http.post","workflow_name":"com.jfs.test","mobileNumber":"9878987898","id":"12","lan":"12345"}}
```

#### 2. At eventsource level

You can override log attributes at eventsource level also. You can specify customized log attributes for specific eventsource. This will override default custom attributes as defined in the [previous section](../telemetry/logging.md/#1-for-all-events).

To enable this feature, you need to specify `log.attributes` variable in the eventsource config.
```yaml
type: express
port: 3000
base_url: /api/v1 #the base url of the http service

#Basic swagger setup
docs:
  endpoint: /api-docs # the url on which the service will start

log:
  attributes:
    event_type: myevent   
```

##### Sample Logs
```json
{ Body: "return value [] 200 %o"
    Timestamp: "2024-04-10T09:40:45.197Z000000"
    SeverityNumber: 9
    SeverityText: "INFO"
    TraceId: "3fba9b9bd5d10d00b1b730b74c8eba51"
    SpanId: "985e8a8d6a18568b"
    TraceFlags: "01"
    Resource: {
      "service.name": "sample_app",
      "host.hostname": "6295f63d9181",
      "process.pid": 13956
    }
    Attributes: {
      "event": "/helloworld",
      "workflow_name": "helloworld",
      "file_name": "helloworld",
      "event_type": "myevent"
    }}
```

#### 3. At event level

You can override log attributes at event level also. You can specify customized log attributes for specific event. This will override default custom attributes as defined in the [previous section](../telemetry/logging.md/#2-at-eventsource-level).

To enable this feature ,you need to specify `log.attributes` on event level which contains custom identifiers.
```yaml
"http.get./helloworld":
  fn: helloworld
  authn: false
  log:
    attributes:
      msgparameter:
        fruit: apple
      identifier: 1
  params:
    - name: name
      in: query
      required: true
      schema:
        type: string
  responses:
    200:
      content:
        application/json:
          schema:
            type: string
```

##### Sample Logs
```json
{ Body: "return value [] 200 %o"
    Timestamp: "1688565778237000000"
    SeverityNumber: 9
    SeverityText: "INFO"
    TraceId: "3fba9b9bd5d10d00b1b730b74c8eba51"
    SpanId: "985e8a8d6a18568b"
    TraceFlags: "01"
    Resource: {
      "service.name": "sample_app",
      "host.hostname": "6295f63d9181",
      "process.pid": 13956
    }
    Attributes: {
      "event": "/helloworld",
      "workflow_name": "helloworld",
      "file_name": "helloworld",
      "msgparameter": {
        "fruit": "apple"
      },
      "identifier": 1,
      "task_id": ""
    }}
```
#### 4. Custom on_error logging in workflow/tasks

In case you want to log specific attributes when an error happens in a task, set those values in `on_error.log_attributes` of that task.

For ex.

```yaml
summary: add custom error logs on workflow
id: validation_error
tasks:
  - id: error_transform
    fn: com.biz.error_log
on_error:
  log_attributes:
    error_type: "enter your custom error type here"
    error_message: "xyz value is required"
```

##### Sample logs

```json
    {Timestamp: "1688563866502000000"
    SeverityNumber: 17
    SeverityText: "ERROR"
    TraceId: "7563f0bd1e6c6508e58a4d1de1464635"
    SpanId: "c4c65132ef79982f"
    TraceFlags: "01"
    Resource: {
      "service.name": "sample_app",
      "host.hostname": "6295f63d9181",
      "process.pid": 8455
    }
    Attributes: {
      "event": "/helloworld",
      "workflow_name": "helloworld",
      "file_name": "helloworld",
      "msgparameter": {
        "fruit": "apple"
      },
      "task_id": "response_validation_error_handler",
      "error": {
        "error_type": "enter your custom error type here",
        "error_message": "xyz value is required"
      }
    }}
```

## Collector configuration
:::tipTo be coming soon
Follow this [Github issue](https://github.com/godspeedsystems/gs-node-service/issues/1018) for more updates.
:::


---- Content from: D:\gs-documentation\docs\microservices-framework\telemetry\metrics.md ----

---
sidebar_position: 1
title: Metrics
toc_min_heading_level: 2
toc_max_heading_level: 3
---

## Application configuration
Godspeed starts exposing [Prometheus](https://prometheus.io/docs/introduction/overview/) based application metrics at `/metrics` endpoint of the service once OTEL is [enabled](./configuration.md/#otel-enable). Currently, the framework exposes HTTP and [Prisma datasource](../microservices-framework/datasources/datasource-plugins/Prisma%20Datasource.md) metrics.

:::infoMetrics for custom plugins
Follow this [Github issue](https://github.com/godspeedsystems/gs-node-service/issues/1016) to know how prometheus based metrics can be exposed for the other custom [eventsource](../event-sources/event-source-plugins/) and [datasource](../datasources/datasource-plugins/Overview.md) plugins.
:::

## Collector configuration
:::tipTo be coming soon
Follow this [Github issue](https://github.com/godspeedsystems/gs-node-service/issues/1018) for more updates.
:::


---- Content from: D:\gs-documentation\docs\microservices-framework\telemetry\overview.md ----

---
sidebar_position: 1
title: Observability
toc_min_heading_level: 2
toc_max_heading_level: 4
---

Observability means to understand and analyze an application’s internal state at any given time based only on the knowledge of its external outputs.   

## Why you need observability?
It allows developers to have access to more accurate information about system faults in distributed environments, without additional testing and coding. The more observable a system, the more quickly and accurately you can reach out to the root cause of a problem.

An observability implementation includes a practice of collecting telemetry data such as:   
**1. Metrics**: Collecting values about known performance measurements from your applications and infrastructure you can put on dashboards or use for alerting. It helps you find out when there’s a problem.    
**2. Traces**: Collecting the trace of user requests throughout the various components of your applications and infrastructure. It helps you find out where a problem happens.   
**3. Logs**: Collecting errors, warnings, and other information about events happening within applications and infrastructure. It helps you find out the cause of a problem.    

## Using OpenTelemetry
[OpenTelemetry](https://opentelemetry.io/docs/), also known as OTel, is a CNCF incubating project and a vendor-neutral open source observability framework for instrumenting, generating, collecting, and exporting telemetry data i.e. traces, metrics, and logs.

Godspeed supports Application Performance Monitoring(APM) and Business Performance Monitoring(BPM) out of the box by leveraging the OpenTelemetry standard and its supporting tech ecosystem. 

> Not even a single request must go untracked!

:::tipCheck out the video talks on observability with Godspeed
1. [TEMPLE](https://www.youtube.com/watch?v=2BtCi72LPlM)
2. [Grafana and OTEL based observability](https://www.youtube.com/watch?v=hOKwwYdofcA)
:::

## Goals

### Auto application performance monitoring

No code APM across microservices, integrable with standard APM tools and logging backends, without any dev effort.

### Backend agnostic

Numerous open source and commercial softwares for Observability support OpenTelemetry out of the box, allowing one to switch between them if needed.

### Complete debuggability

Collect, correlate and debug signals across logs (events), traces and metrics, based on the request id and the attributes defined for the organization. For example, app version, function, DB query, K8s pod, domain, microservice etc.

## Architecture
The below architecture diagram explains the implementation of observability in Godspeed.   

![arch](/img/opentelemetry.jpg)

**a) ** Traces are sent to OTEL Collector directly by the application (push based mechanism) using OTLP/gRPC [protocol](https://opentelemetry.io/docs/specs/otlp/). [Tempo](https://grafana.com/docs/tempo/latest/) is used as tracing backend for traces.   
**b) ** Metrics are scraped by the OTEL Collector from the application's `/metrics` endpoint (pull based mechanism). [Prometheus](https://prometheus.io/docs/introduction/overview/) is used as a monitoring tool for metrics with Mimir as its backend.     
**c) ** Logs are collected by a fluent bit service. Then it sends the logs to [Loki](https://grafana.com/docs/loki/latest/).   
**d) ** [Grafana Open Source](https://grafana.com/docs/grafana/latest/fundamentals/#grafana-open-source) is used for the visualization of all the telemetry data.

## Features
Godspeed provides the following features to implement observability:

### 1. Enable/disable observability
You can [enable/disable OTel](../CLI.md/#otel) in Godspeed.

### 2. Custom traces, logs and metrics in the workflows
You can add [custom traces, logs and metrics](./custom-metrics-logs-traces.md) in Godspeed workflows.


---- Content from: D:\gs-documentation\docs\microservices-framework\telemetry\tracing.md ----

---
sidebar_position: 1
title: Traces
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Traces are sent to OTEL Collector directly by the application (push based mechanism) using OTLP/gRPC [protocol](https://opentelemetry.io/docs/specs/otlp/) as explained in the [architecture](./overview.md/#architecture).

## Application configuration
### OTEL_EXPORTER_OTLP_ENDPOINT
Specify the IP address of your OTEL collector as `OTEL_EXPORTER_OTLP_ENDPOINT` env variable. Refer [OTEL Exporter](https://opentelemetry.io/docs/reference/specification/protocol/exporter/#endpoint-urls-for-otlphttp) for more information.
```
export OTEL_EXPORTER_OTLP_ENDPOINT=<IP of OTEL collector>:4317
```
For example,
```
export OTEL_EXPORTER_OTLP_ENDPOINT=http://172.17.0.1:4317
```

## Collector configuration
:::tipTo be coming soon
Follow this [Github issue](https://github.com/godspeedsystems/gs-node-service/issues/1018) for more updates.
::: 


---- Content from: D:\gs-documentation\docs\microservices-framework\vscode-extension\language-tools.md ----

---
sidebar_position: 1
title: Language Tools - VS Code Extension.
toc_min_heading_level: 2
toc_max_heading_level: 4
---

## Introduction

Hello developers Thank You for using Godspeed Microservice Framework. 

### Pre-requisites:

1. VS Code editor

2. Godspeed Framework Version V2



### Steps for Using the Language Tool Extension.

- Open your [VS Code](https://code.visualstudio.com/) app.

- Go to the Extension section and search Godspeed Language Tools. 

- Install the Godspeed Language Tool Extension in your VS Code. 

![languagetools](/img/godspeedlanguagetools.png)


#### Introduction to Snippets 

- We have introduced few features in the extension and one of them is,[Snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets)  now there are Godspeed's snippets for event and workflow.

- If you type `Godspeed Event` in the src/event (path) file then it will give you some sample data to make an event.

- In the Event Snippets contains the event string , authn , summary, description, fn, on_validation_error, sample params, sample body, responses. After creating an Event you can configure the code with your requirements For Ex. Changing the body, params , responses. You can change the values by pressing up and down arrow and tab or Enter to move next.

- sample of eventsnippet

![preview](/img/video-gif/eventsnippet.gif "Godspeed Event Sample")


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


![preview](/img/video-gif/workflowsnippet.gif "Godspeed Workflow Sample")

```
summary: 'the title'
description: 'more details'
id: 'unique_ID'
tasks:
  - id: 'unique_id_of_the_task'
    fn: com.gs.return
    args: <%  %>
```
- You can also add [Built-in Tasks](/docs/microservices-framework/workflows/yaml-workflows/inbuilt-workflows.md) in the workflows. There are snippets for that task. 

- For Examples -

![preview](/img/video-gif/workflowsnippet.gif "Godspeed Workflow Sample")


#### Rules to Write an Event

##### Mandatory Fiels

- There are some key-value pairs in the event and workflows, which needs to be filled to get a proper output, below are the examples of it.


#### In Event

- There are few key-value pairs which are important to the workflow, those are mandatory in the event.

  - For params - 

    - names , in 

    ```
      params:
        - name: world
          in: query
          required: true
    ```

  ![preview](/img/video-gif/paramsSnippet.gif "Godspeed params Sample")

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
![preview](/img/video-gif/bodysnippet.gif "Godspeed body Sample")

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
![preview](/img/video-gif/resopnseSnippet.gif "Godspeed response Sample")


###### In Workflow 

  - in the Workflow there are some key-value pairs that are important to make good workflows.

  - tasks , id, fn , args 

  - in the few built in tasks there are keys like `cases` in  [com.gs.switch](/docs/microservices-framework/workflows/yaml-workflows/inbuilt-workflows.md#comgsswitch) and `conditions` in [com.gs.ifelse](/docs/microservices-framework/workflows/yaml-workflows/inbuilt-workflows.md#comgsif) , `values` [com.gs.each_sequential](/docs/microservices-framework/workflows/yaml-workflows/inbuilt-workflows.md#comgseach_sequential) are the mandatory keys.


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

  - fn should be one of inbuilt functions or from the plugins (it starts with datasources) [samples](/docs/microservices-framework/workflows/yaml-workflows/).

### For more information you can watch our full Deatiled video on language tools and snippets of it on our [Youtube](https://www.youtube.com/embed/Yir19zd492I) channel. 

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
    <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/Yir19zd492I" frameborder="0" allowfullscreen></iframe>
</div>


### Thank You !

---- Content from: D:\gs-documentation\docs\microservices-framework\workflows\native-language-functions.md ----

# Native Language Workflows

Since the framework currently supports Node.js, Deno and Bun.js ecosystems, the native languages currently supported are TypeScript and JavaScript. This allows users to create custom functions. A native language workflow enables us to incorporate additional features using JavaScript or TypeScript, where we have the capability to implement intricate business logic.

:::tip
In Godspeed, your function gets input in a standard JSON format and returns output in a standard JSON format, independent of the eventsource through which this function is triggered. Eventsource could be Express, Fastify, Apollo Graphql or event message bus like Kafka, RabbitMQ or socket message. This means Godspeed has a unified way to deal with all eventsources, giving you modular architecture and re-uasability of your functions.
:::

### Example Typescript function
```typescript
import { GSCloudEvent, GSContext, PlainObject } from "@godspeedsystems/core";
import Pino from 'pino';

export default function (ctx: GSContext, args: any) {
    const {
        inputs: {
            data: {
                params, //path parameters from endpoint url
                body,  // request body in case of http and graphql apis, event data in case of message bus or socket
                query, // query parameters from rest api
                user,  // user payload parsed from jwt token
                headers //request headers in case of http and graphql apis
            }
        }, 
        childLogger, // context specific logger. Read pino childLogger for more information
        logger, // Basic logger of the project, generally prefer childLogger for logging 
        outputs, // outputs of previously executed tasks of yaml workflows (if any)
        functions, // all loaded workflows/functions from the src/functions/ folder
        datasources, //all configured datasources from src/datasources
        mappings  //mappings from src/mappings folder. this is useful for loading key value configurations for business logic of your project
    }: {
        inputs: GSCloudEvent, 
        childLogger: Pino.Logger, // you can also add custom attributes to childLogger
        logger: Pino.Logger,
        outputs: PlainObject, 
        functions: PlainObject, 
        datasources: PlainObject,
        mappings: PlainObject
    } = ctx;

    // Will print with workflow_name and task_id attributes. 
    childLogger.info('Server is running healthy');
    // Will print without workflow_name and task_id attributes
    logger.info('Arguments passed %o', args);
    logger.info('Inputs object \n user %o query %o body %o headers %o params %o', user, query, body, headers, params);
    logger.info('Outputs object has outputs from previous tasks with given ids %o', Object.keys(outputs));
    logger.info('Datasources object has following datasource clients %o', Object.keys(datasources));
    logger.info('Total functions found in the project %s', Object.keys(functions).length);

    // Returning only data
    return 'Its working! ' + body.name;

    //SAME AS
    return {
        data: 'Its working! ' + body.name,
        code: 200,
        // success: true,
        // headers: undefined
    }
    //SAME AS
    return {
        data: 'Its working! ' + body.name,
        code: 200,
        success: true,
        headers: undefined // or u can set response headers as key: value pairs, 
        //for example headers:{custom-header1:"xyz" }
    }
}
```

:::tip
For seeing how framework handles data returned from a function, including calculation of `code`, `success` and `data`, [read this section](./native-language-functions.md#invoking-functions-from-jsts-functions) at the bottom of the page. 
:::

#### GSContext
GSContext carries the loaded components of this project and as well the inputs of the current event.

#### args
The second parameter of the function call is args. This parameter is useful when this function is called from a YAML workflow in Godspeed. The `args` passed in the yaml task of the caller YAML workflow is passed as `args` here. It can be of any native type like object, array, string, number, boolean.

##### Caller YAML function
```yaml
  summary: some workflow
  tasks:
    - id: first_task
      fn: some_function
      args:
        name: mastersilv3r
```
##### Callee Typescript function
```typescript
  export default function (ctx: GSContext, args: PlainObject) {
    ctx.logger.info(args.name);  //Prints 'mastersilv3r'
  }
```
### More about GSContext
:::tip note
 Every function/workflow has access to the ctx object, which is passed as an argument, and furthermore, you can access its properties by destructuring it.
:::

Check the code of GSContext interface [here](https://github.com/godspeedsystems/gs-node-service/blob/v2/src/core/interfaces.ts). GSContext has the contextual information of your current workflow and is available to the event handlers (`functions`). It is passed to any sub workflows subsequently called by the event handler. 

It includes all the context specific information like tracing information, actor, environment, headers, payload etc.

Every information you need to know or store about the event and the workflow executed so far, and as well the loaded `functions`, `datasources`, `logger`, `childLogger`, `config`, `mappings` etc, is available in the `GSContext` object.

<!-- 
```typescript
// Everything you need within a workflow, whether in native languages like JS/TS, or in yaml workflows and tasks.

export class GSContext { //span executions
    outputs: { [key: string]: GSStatus; }; //DAG result. This context has a trace history and responses of all instructions in the DAG, which are are stored in this object against task ids

  log_events: GSLogEvent[] = [];

  config: PlainObject; //The config folder with env vars, default, and other config files. We use node-config module for Nodejs for the same.  

  datasources: PlainObject; //All the datasource exported clients

  log_events: GSLogEvent[] = []; //All the errors during an event handler workflow execution are captured in this list. Framework does not do anything with this. But a developer may want to have access to the errors that happened.

  config: PlainObject; //app config

  datasources: PlainObject; //app config

  mappings: PlainObject; // The static mappings of your project under /mappings

  functions: PlainObject; //All the functions you have written in /functions + all the Godspeed's YAML DSL functions
 //like com.gs.each_parallel

  plugins: PlainObject; // The utility functions to be used in scripts. Not be confused with eventsource or datasource as plugin.

  exitWithStatus?: GSStatus; // Useful when a YAML workflow is being executed. If this is set to non null value containing a GSStatus, the workflow will exit with this status. This will apply to only the immediate yaml workflow. But not its caller workflow. 

  logger: pino.Logger; // For logging using pino for Nodejs. This has multiple useful features incudign biding some key values with the logs that are produced.  

  childLogger: pino.Logger; //Child logger of logger with additional binding to print {workflow_name, task_id} with every log entry


  forAuth?: boolean = false; //Whether this native or yaml workflow is being run as parth of the authz tasks
}
``` -->


<!-- :::tip Check out GSContext alias [<span style={{ color: 'green' }}>ctx</span>](https://github.com/godspeedsystems/gs-node-service/blob/v2/src/core/interfaces.ts) from line 971 and how we extract the variables like inputs,outputs,datasources.
::: -->


#### Inputs

Inputs Provide you all the Information you passed to event like `headers`, `params`, `query`, `params` (path params), `body` & `user` (parsed JWT information).


```javascript
  const {inputs} = ctx;
  const body = inputs.data.body;
```
#### Outputs

To access outputs of tasks executed before the current task, developer can destruct ctx object just like how inputs and datasources.If we have more then one task, we can access first task outputs in second task with Outputs object. we should access first task output by useing it's id.

```javascript
  const {outputs} = ctx;
  const firstTaskOutput = outputs[firstTaskId]
```

#### Accessing Datasource Clients
    
With [datasources](../datasources/overview.md) we can access all datasources, their clients and methods.

```javascript

const { datasources} = ctx;
const responseData = await datasources.mongo.client.Restaurant.create({
    data: inputs.body
})

```
### ChildLogger

With childLogger you have accessibility to Pino logger instance with context information set - for example the `log.attributes` set in eventsource or event level.

```javascript

    const { childLogger} = ctx;
    childLogger.info('inputs: %o', inputs.body);

```

### Returning from a function

#### GSStatus
Developers can return pure JSON object in response, or return GSStatus if they use Typescript.
The GSStatus is a built-in class in Godspeed. We invoke it when we're prepared to define an API response manually and dispatch it.
GSStatus has the below properties.
```yaml
    success: boolean;
    code?: number;
    message?: string;
    data?: any;
    headers?: {
        [key: string]: any;
   };
```

We return with GSStatus as below
```typescript
 return new GSStatus(true, 200, 'OK', responseData, headers);
```
#### Different ways to return from a event handler
```typescript
    // Returning only data
    return 'Its working! ' + body.name;

    //SAME AS
    return {
        data: 'Its working! ' + body.name,
        code: 200,
        message: 'OK', //HTTP protocol message to be returned from service
        // success: true,
        // headers: undefined
    }
    //SAME AS
    return {
        data: 'Its working! ' + body.name,
        code: 200,
        message: 'OK', //HTTP protocol message to be returned from service
        success: true,
        // headers: undefined
    }
    //SAME AS
    return {
        data: 'Its working! ' + body.name,
        code: 200,
        message: 'OK', //HTTP protocol message to be returned from service
        success: true,
        headers: undefined
    }
    // SAME AS returning GSStatus like this
    return new GSStatus(true, 200, 'OK', 'Its working! ' + body.name, headers);  
```

:::tip Note
Check [event handler response](#handling-event-handler-return) to know how framework handles GSStatus.
:::

### Invoking functions and datasource clients from JS/TS functions

<!-- - When invoking functions from a JS/TS function in Godspeed, the framework ensures that calling functions will not lead to error propagation.
- They will instead return a GSStatus with {success: boolean, code: number, message: string, data: any}.  Why? Because the framework has a top level catch for all functions invoked through it.  -->
- All functions within a Godspeed project, including those written in YAML, JavaScript (JS), or TypeScript (TS), are accessible through the `ctx.functions` object.
- Ofcourse you can also `import` them in the standard Typescript or Javascript way
- Similarly, all datasource clients initialised in a Godspeed project are conveniently available under the `ctx.datasources` object.

 ```ts
 export default async function (ctx: GSContext, args: any) {

    //Calling functions (yaml, js, ts) from within a ts/js function, in a meta framework's project's functions folder, all project functions are available under ctx.functions. 
    const res = await ctx.functions['com.gs.helloworld2'](ctx, args);
    //Same As
    const res = await require('com/gs/helloworld2')(ctx, args);
    // Calling datasource functions. All datasources are available under ctx.datasources hood.
    // OPTION 1
    // Every datasource exposes a client key. The client may be a single instance like in case of Axios, or multiple datasource client instances like in case of AWS, or database models like in case of Mongoose (depending on the plugin used).
    const res = await ctx.datasources.aws.client.s3.listBuckets(args);
    // OPTION 2
    // All datasources have an execute method. This may be preferable in case you want to utlise the full capabilities of the plugin wrapped over the native clients, like error handling checks and response codes, retries, caching etc. 
    const res = await ctx.datasources.aws.execute(ctx, {
         //Pass exactly same args as this aws service's method takes
        ...args,
        meta: {entityType: 's3', method: 'listBuckets'}
        //Along with args, pass meta object
        // meta can contain {entityType, method}
    });
    if (!res.success) {
        return new GSStatus(false, res.code || 500, undefined, {message: "Internal Server Error", info: res.message})
    }
  //If a developer only returns data without setting keys like "success" or "code" in the response,
  // the framework assumes it is just the data. 
  //In such cases, the response code defaults to 200, and success is assumed to be true.
    
    return res
    // works same as return new GSStatus(true, 200, undefined, res );
}

 ```
### Handling event handler return
By default, all the framework defined functions or developer written functions, have to return either [GSStatus](#gsstatus) or data.   
Now lets see how the framework qualifies your return as GSStatus or simple data.
The framework sees that your returned data has one of `code` or `success` meta-keys.    

** [Non Authz (normal) workflows](../workflows/overview.md) **    
**i. ** If both are present, it looks for the other GSStatus keys and set them.  
**ii. ** If only code is present and lies between 200-399, then success is assumed to be true else false. It looks for the other GSStatus keys and set them.   
**iii. ** If only success is present, then code is assumed to be 200. It looks for the other GSStatus keys and set them.   
**iv. ** If it doesn't find any of these keys, it assumes all that you have returned is intended to be GSStatus.data then it adds `code: 200` and `success: true` internally to your response and create a `GSStatus` out of it to pass on to next tasks or workflows.   

** [Authz workflows](../authorization/authz-usecases.md/#authz-workflows) **   
Check [reponse handling](../authorization/authz-usecases.md/#response-code-message-and-data-from-authorization-failure) in case of authorization workflows.

:::info
You can study the code [here](https://github.com/godspeedsystems/gs-node-service/blob/v2/src/functions/com/gs/transform.ts) to understand both of the above scenarios better.
:::


---- Content from: D:\gs-documentation\docs\microservices-framework\workflows\overview.md ----

---
title: Workflows or Functions in Meta Framework
---

The Meta Framework allows you to write business logic in [Typescript and Javascript functions](/docs/microservices-framework/workflows/native-language-functions.md) or [YAML Workflows](./yaml-workflows/overview.md)

You may use any language depending on your choice. We suggest to prefer Typescript over Javascript for type check reasons. And we recommend to use YAML when you wish to express logic in minimal lines of code. In the end, all three ways will allow you to express any business logic based on  your needs.


### Video explanation of functions

<!-- <div style={{ margin: '20px auto', textAlign: 'center' }}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/66TxoXEPKUc" frameBorder="0" allowFullScreen></iframe>
</div> -->

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
<iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/E33GqpTr4iw?si=Er9oRp9L6YzH8EJt" frameborder="0" allowfullscreen></iframe>
</div>

### Writing event handler functions
#### Typescript
```typescript
module.exports = function greet(GSContext: ctx){
    return `Hello ${ctx.inputs.data.query.name}!`;
}
```
#### Javascript
```javascript
module.exports = function greet(ctx){
    return `Hello ${ctx.inputs.data.query.name}!`;
}
```

#### Yaml
```yaml
summary: greet the user
description: this function greets the user by accepting the user name
tasks:
  - id: greet_task
    fn: greetings
    args:
      name: <%inputs.query.name%>
```

---- Content from: D:\gs-documentation\docs\microservices-framework\workflows\yaml-workflows\inbuilt-workflows.md ----

# Built-in functions

**The framework comes equipped with the following built-in functions.**

## Godspeed Built-in functions
The Godspeed framework offers a robust set of built-in functions to empower developers in orchestrating workflows seamlessly. Some of these essential functions include  ["com.gs.parallel"](#comgsparallel) enabling the execution of tasks in a sequential or parallel manner, respectively. For conditional logic, the framework provides ["com.gs.switch"](#comgsswitch), ["com.gs.if"](#comgsif) functions to make decisions based on specific criteria. Developers can iterate through tasks with ["com.gs.each_sequential"](#comgseach_sequential) and ["com.gs.each_parallel"](#comgseach_parallel) for controlled repetition. To capture and communicate data between tasks, ["com.gs.return"](#comgsreturn) comes in handy, while ["com.gs.log"](#comgslog) aids in logging crucial information for monitoring and debugging purposes. These built-in functions collectively enhance the efficiency and flexibility of workflow automation within the Godspeed framework.

### com.gs.transform
This function enables you to convert data from one format to another using CoffeeScript or JavaScript scripting.   
See below a sample workflow:
> The first task is doing the transformation and giving 'Hello' as output.   
> The second task is doing the transformation (concatenation of the output of the first task with query params of the request).

<details>
<summary>Example event for transform function</summary>

```yaml
  http.get./transform:
  fn: transform
  params:
  - name: name
    in: query # same as open api spec: one of cookie, path, query, header
    required: true
    allow_empty_value: false
    schema:
      type: string 
  responses:
    200:
      content:
        application/json:
          schema:
            type: string
```
</details>

```yaml title='Example 1'
summary: This function returns the greet message with name provided in query parameters
tasks:
  - id: hello_task1
    fn: com.gs.transform
    args: 'Hello'

  - id: transform_result
    fn: com.gs.transform 
    args: <% outputs.hello_task1.data + inputs.query.name %>

Output:
  code: 200
  success: true
  data: "Hello <inputs.query.name>"   
```

This functions always return [GSStatus](../native-language-functions.md/#gsstatus). Please check [response handling](../native-language-functions.md/#handling-event-handler-return) to know how `com.gs.transform` args are transformed as GSStatus.    
The above example doesn't qualify as GSStatus so the framework adds `code: 200` and `success: true` in the response. Check out various examples given below:

```yaml title='Example 2'
summary: This function returns data present in the args
# these args qualifies as GSStatus. The framework ignores the extra 
# keys because data key is already present in the args.
tasks:
  - id: first_task
    fn: com.gs.transform
    args: 
      code: 400
      success: false
      data: "Invalid input error"
      key1: "E001"
      key2: "E002"
      headers: 
        title: "MS1"

Output:
  code: 400
  success: false
  data: "Invalid input error"
  headers: 
    title: "MS1"  
```

```yaml title='Example 3'
summary: This function returns all the keys present in the args 
# as GSStatus.data as there is no data key defined.
# These args don't qualify as GSStatus
tasks:
  - id: first_task
    fn: com.gs.transform
    args: 
      key1: "E001"
      key2: "E002"

Output:
  code: 200
  success: true
  data: 
    key1: "E001"
    key2: "E002" 
```

### com.gs.parallel
:::tip control flow function
Executes the child tasks in parallel.
:::

Parallel execution of tasks involves running multiple tasks simultaneously, leveraging concurrency to enhance efficiency, reduce processing time, and maximize resource utilization in a system or function.In this cases we choose parallel inbuilt function


#### Example event for parallel inbuilt function

<details>
<summary>Example event for parallel inbuilt function</summary>

```yaml
  http.get./test/parallel:
  summary: parallel
  description: executing tasks parallelly
  fn: parallel
  body:
    content:
      application/json:
        schema:
          type: object
  responses:
    200:
      content:
        application/json:
          schema:
            type: object
```
</details>


The above event will trigger the below function

#### Example function for parallel ( parallel.yaml )

```yaml
  summary: The Parallel function runs all its child task in parallel and we can select the specific childs output
  tasks:
    - id: parallel
      fn: com.gs.parallel
      tasks:
        - id: 1st
          fn: com.gs.return
          args: "నమస్కారం"

        - id: 2nd
          fn: com.gs.return
          args: "नमस्ते"

        - id: 3rd
          fn: com.gs.return
          args: "Hello"

    - id: step2
      fn: com.gs.return
      args: |
        <% outputs["1st"] %>
```

### com.gs.switch
:::tip control flow function
The classic switch-case flow execution
:::

The `switch-flow` function accepts two arguments: `value` and `cases`. The `value` parameter receives a CoffeeScript/JavaScript expression that is evaluated at runtime. Each case corresponds to a task, which can trigger the execution of another function or workflow.


#### Example event for switch inbuilt function

<details>
<summary>Example event for switch inbuilt function</summary>

```yaml
  http.post./test/switch:
  summary: switch
  description: switch
  fn: switch
  body:
    content:
      application/json:
        schema:
          type: object
  responses:
    content:
      application/json:
        schema:
          type: object
```
</details>



The above event will trigger the below function. 

#### Example function for switch ( switch.yaml )


```yaml
summary: A "switch" statement activates specific cases when its conditional value matches any of those cases.
id: switch
description: 
tasks:
  - id: step1
    fn: com.gs.switch
    value: <%inputs.body.condition%>
    cases:
      FIRST:
        id: 1st
        fn: com.gs.return
        args: "sukumar"
      SECOND:
        id: 2nd
        fn: com.gs.return
        args: "yaswanth"
      THIRD:
        id: 3rd
        fn: com.gs.return
        args: "pavan"
    defaults:
      id: default
      fn: com.gs.return
      args: <%"all"%> 

```


### com.gs.each_sequential

:::tip control flow function
The classic for-each flow execution
:::

The `args` parameter consists of a list of values within the `value` field, each paired with its associated task. For every value in the `value` list, tasks are executed one after the other in sequence. The resulting output, `each_sequential`, is an array containing the status of the last task executed in each iteration.


#### Example event using each_sequential

<details>
<summary>Example event using each_sequential</summary>

```yaml
  http.get./test/each_sequential:
  summary: each_sequential
  description: each_sequential
  fn: each_sequential
  body:
    content:
      application/json:
        schema:
          type: object
  responses:
    200:
      content:
        application/json:
          schema:
            type: number

```
</details>


#### Example function using each_sequential ( each_sequential.yaml )

```yaml
  summary: For each sample
  description: Here we transform the response of for loop
  tasks:
    - id: each_sequential_step1
      description: for each
      fn: com.gs.each_sequential
      value: [1, 2, 3, 4]
      tasks:
        - id: each_task1
          fn: com.gs.transform
          args: <% inputs.body.number * task_value %>
    - id: each_sequential_step2
      description: return the response
      fn: com.gs.transform
      args: <% outputs.each_sequential_step1.data %>
```


#### Error handling in each_sequential functions

You have the option to include "on_error" at both the task level and within the "each_sequential" loop.

```yaml
  summary: For each sample
  description: Here we transform the response of for loop
  tasks:
    - id: each_sequential_step1
      description: for each
      fn: com.gs.each_sequential
      value: [1, 2, 3, 4]
      tasks:
        - id: each_task1
          fn: com.gs.transform
          args: <% 'each_task1 ' + task_value %>
          on_error: # on_error at task level
            continue: false
            response: <%Coffee/JS expression%> | String
      on_error: # on_error at loop level
        continue: true
        response: <%Coffee/JS expression%> | String
    - id: each_sequential_step2
      description: return the response
      fn: com.gs.transform
      args: <% outputs.each_sequential_step1 %>
```

Consider the above example:
- In the event of a task failure for any task_value, the control is transferred to the "on_error" specified at the task level. If "continue" is set to false, it interrupts the loop; otherwise, it proceeds to the next tasks.
- If all tasks fail within the loop, control shifts to the "on_error" specified at the loop level.

:::note
on_error at loop level only gets executed when all the tasks are failed. If even one task gets successful then it won't get executed.
:::


### com.gs.each_parallel

The `args` parameter comprises a list of values in the `value` field, each paired with its respective tasks. These tasks run concurrently for each value in the `value` list. The resulting output, `each_parallel`, is an array containing the status of the last task executed in each iteration.


#### Exmaple event using each_parallel

<details>
<summary>Exmaple event using each_parallel</summary>

```yaml
  http.get./test/each_parallel:
  fn: each_parallel
```

</details>


#### Example function using each_parallel ( each_parallel.yaml )

```yaml
  summary: For each sample
  description: Here we transform the response of for loop
  tasks:
    - id: each_parallel_step1
      description: for each
      fn: com.gs.each_parallel
      value: [1, 2, 3, 4]
      tasks:
        - id: each_task1
          fn: com.gs.transform
          args: <% 'each_task1 ' + task_value %>
    - id: each_parallel_step2
      description: return the response
      fn: com.gs.transform
      args: <% outputs.each_parallel_step1 %>
```


#### Error handling in each_parallel

You have the option to include "on_error" at both the task level and within each parallel loop.

```yaml
  summary: For each sample
  description: Here we transform the response of for loop
  tasks:
    - id: each_parallel_step1
      description: for each
      fn: com.gs.each_parallel
      value: [1, 2, 3, 4]
      tasks:
        - id: each_task1
          fn: com.gs.transform
          args: <% 'each_task1 ' + task_value %>
          on_error: # on_error at task level
            continue: false
            response: <%Coffee/JS expression%> | String
        - id: each_task2
          fn: com.gs.transform
          args: <% 'each_task2 ' + task_value %>
      on_error: # on_error at loop level
        continue: true
        response: <%Coffee/JS expression%> | String
    - id: each_parallel_step2
      description: return the response
      fn: com.gs.transform
      args: <% outputs.each_parallel_step1 %>
```

Consider the above example:
- If a task fails for any task_value, control is directed to the "on_error" defined at the task level. If "continue" is set to false, it interrupts the execution for the subsequent tasks in the `tasks` section for the current `task_value` in the `value` list. For instance, in the provided workflow, if the `each_task1` step of `task_value` 1 fails, the `each_task2` won't be executed when "continue" is set to false.
- If all tasks fail within the loop, control shifts to the "on_error" specified at the loop level.

:::note
The "on_error" at the loop level is only executed when all tasks fail. If even one task is successful, it won't be executed.
:::



### com.gs.return

:::tip return statement
The classic return statement
:::

Return statement, in any programming language, ends the execution of a function and returns the control to the function from where it was called.   
Similarly, when the `com.gs.return` function is used, it causes the current function to exit and returns control to the calling function/workflow, effectively terminating the function's execution.

:::note[Important]
This function does the transformation in the same way as [com.gs.transform](#comgstransform) except that it terminates the current function's execution.
:::

<details>
<summary>Example event for return inbuilt function</summary>

```yaml
  http.post./return-fn/:city:
  fn: return
```
</details>

```yaml title='Example 1'
summary: This function returns only the 'Hello' string 
# and causes the function to exit from task1.
tasks:
  - id: hello_task1
    fn: com.gs.return
    args: 
      code: 200
      success: true
      data: "Hello"

  - id: transform_result
    fn: com.gs.transform 
    args: <% outputs.hello_task1.data + inputs.query.name %>

Output:
  code: 200
  success: true
  data: "Hello"   
```

:::infoexception
com.gs.return doesn't immediately return when used inside [com.gs.parallel](#comgsparallel) function. On the contrary, the output of all the parallel tasks is returned as given in the below example:
```yaml
summary: return from com.gs.parallel
tasks:
- id: step1
    fn: com.gs.parallel
    tasks:
      - id: 1st
        fn: com.gs.return
        args: "hello"
      - id: 2nd
        fn: com.gs.return
        args: "nice"
      - id: 3rd
        fn: com.gs.return
        args: "world"       
```
Output:
```json
[
    {
        "code": 200,
        "success": true,
        "data": "hello"
    },
    {
        "code": 200,
        "success": true,
        "data": "nice"
    },
    {
        "code": 200,
        "success": true,
        "data": "world"
    }
]
```
:::

### com.gs.log
During the workflow execution, it records intermediate inputs and outputs in the Pino logging format. The parameters include `level`, which can be set to any value from the [Pino log levels](https://github.com/pinojs/pino/blob/master/docs/api.md#options), and `data`, which accepts a CoffeeScript/JavaScript expression to be evaluated at runtime or any other data type, such as a string or number, that you wish to log.

#### Example event for log inbuilt function
<details>
<summary>Example event for log inbuilt function</summary>

```yaml
  http.post./test/log:
  summary: series
  description: series
  fn: log
  body:
    content:
      application/json:
        schema:
          type: object
          properties:
            x:
              type: integer
            y:
              type: integer
  responses:
    200:
      content:
        application/json:
          schema:
            type: object
    400:
      content:
        application/json: # For ex. application/json application/xml
          schema:
            type: object
            properties:
              lender_response_code:
                type: string
```
</details>

#### Example function using log ( log.yaml )
```yaml
summary: Summing x + y
description: Here we sum two hardcoded x and y values. Feel free to try using API inputs from body or params!
tasks:
  - id: sum_step1
    description: add two numbers
    fn: com.gs.transform
    args: <% inputs.body.x + inputs.body.y %>

  - id: sum_step2
    fn: com.gs.log
    args: 
      level: info 
      data: <% outputs.sum_step1 %>

  - id: sum_step3
    fn: com.gs.return
    args: <js% (outputs.sum_step1) %>
```

### com.gs.if
:::tip control flow function
The classic if-else flow execution
:::

The function takes two parameters: `condition` and `tasks`. The `condition` parameter accepts a CoffeeScript/JavaScript expression that is evaluated at runtime, while the `tasks` parameter can trigger the execution of either another function or a workflow.


#### Example event for if-elif-else inbuilt function

<details>
<summary>Example event for if-elif-else inbuilt function</summary>

```yaml
http.get./greet:
  fn: if
  params:
  - name: greet
    in: query 
    required: true
    allow_empty_value: false
    schema:
      type: string
  responses: 
    200:
      content:
        application/json: 
          schema:
            type: string
            

```
</details>

#### Example function for if-elif-else ( if.yaml )

```yaml
summary: The subtasks will be triggered if the condition returns true
description: Here in each task the condition will be checked,if condition turns true then the corresponding task will be triggered and returns the output 
tasks:
  - id: if
    fn: com.gs.if
    condition: <% inputs.query.greet == 'hello' %>
    tasks:
      - id: step1
        fn: com.gs.return
        args: 'Hello!'

  - id: elif1
    fn: com.gs.elif
    condition: <% inputs.query.greet == 'pavan' %>
    tasks:
      - id: step2
        fn: com.gs.return
        args: 'Hello pavan'

  - id: elif2
    fn: com.gs.elif
    condition: <% inputs.query.greet == 'hari' %>
    tasks:
      - id: step3
        fn: com.gs.return
        args: 'Hello Hari'

  - id: else
    fn: com.gs.else
    tasks:
      - id: step4
        fn: com.gs.return
        args: 'Hi developer'

```

### Using on_error

You have the flexibility to define "on_error" at both the workflow level and the task level based on your specific needs. Refer to the following section for more detailed information. [know more](/docs/microservices-framework/workflows/yaml-workflows/workflow-dsl.md#error-handling)

**1. Workflow level on_error handling**

**2. Task level on_error handling**

:::note
The `on_error` handler at the loop level is triggered exclusively when all tasks within the loop have failed. If at least one task within the loop succeeds, this handler will not be executed.
:::

#### Example for workflow level error handling

```yaml
summary: calling the thirdparty api with headers to check on error
description: testing on_error in workflow level with custom message
on_error:
  response:
    success: false
    code: 500
    data: 'Workflow is broken, returned custom response'  
tasks:
    - id: on_error_at_workflow_04
      fn: datasource.api.get./profile
      args:
        headers:
          Content-Type: application/json
          x-hasura-admin-secret: <% inputs.headers['auth'] %>
          x-hasura-role: <% inputs.headers['role'] %>
          x-hasura-user-id: <% inputs.headers['id'] %>
```
If the `on_error` is not specified at the task level in the above workflow, but it is defined at the workflow level, then in the event of any task failure, the workflow-level `on_error` will be activated, returning a specified custom response.


#### Example for task level error handling

```yaml
summary: Testing on_error at task level
tasks:
  - id: task_level_1 
    fn: com.gs.transform # if we use this args in transform function they will set as response 
    args: 
      success: false
      code: 500
      data: "task 1 executed"
    on_error: 
      continue: false 
      response:
        code: 400
        data: "error occured"
    
  - id: task_level_2
    fn: com.gs.return
    args: "task 2 executed"
```
In the given example, error handling is implemented at the task level, and it activates when a specific task fails. The `continue` variable, which is true by default, determines whether to proceed with the next task in case of a failure. If `continue` is set to true, the subsequent workflow will be executed. If set to false, the current task exits with a custom response specified in the `on_error`.


**When both task-level and workflow-level `on_error` are specified, any error occurring in the tasks will trigger the task-level `on_error`, thereby overriding the `on_error` specified at the workflow level.**

#### Special case on error

```yaml
summary: testing tsaks within workflow
tasks:
  - id: task_level_1 
    fn: com.gs.transform 
    args: 
      success: false # if we use this args in transform function they will set as response 
      code: 500
      data: "task 1 executed"
    on_error: 
      continue: true 
      tasks:  
        - id: on_error_task1
          fn: com.gs.transform
          args: 
            code: 400
            data: "on error task 1 executed"
    
  - id: task_level_2
    fn: com.gs.return
    args: <% outputs.task_level_1 %> 
```

In the given example, instead of specifying a custom response in `on_error` for tasks, we include tasks directly. This approach proves beneficial when additional functions need to be performed in the event of a task failure.


---- Content from: D:\gs-documentation\docs\microservices-framework\workflows\yaml-workflows\overview.md ----

# Overview

## Introduction

YAML DSL serves as the default language for creating general workflows. YAML is suitable for cases where you require straightforward business logic and datasource queries. In contrast, for more intricate business logic, it is advisable to use native programming languages like JavaScript, TypeScript, or Java.

<!-- ![framework-architecture](https://res.cloudinary.com/dsvdiwazh/image/upload/v1704453580/Screenshot_from_2024-01-05_16-48-33_e5svvx.png) -->

<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1704453580/Screenshot_from_2024-01-05_16-48-33_e5svvx.png" alt="event types"/>

## Advantages

### Less Boiler Plate
Yaml follows zero-bolier-plate approach reducing or eliminating repetitive and unnecessary code or setup, allowing developers to focus on essential tasks, resulting in cleaner and more efficient code.

```yaml
summary: workflow to cache task results
id: cache_wf
tasks:
  - id: cache_step1
    caching:
      key: cache_step1
      invalidate: cache_step2
      cache_on_failure : false
      expires: 60
      force: false
    fn: datasource.api.post./anything
    args:
        data:
          name: 'hello'
  - id: cache_step2
    caching:
      key: cache_step2
      cache_on_failure : false
      expires: 60
      force: false
    fn: datasource.api.post./anything
    args:
        data:
          name: 'mastersilv3r'
```

### Programming language independence
This will be useful when we have polyglot implementation of the metaframework in more than one languages. Then YAML [workflows](/docs/microservices-framework/introduction/design-principles.md#standardized-yaml-based-dsl-and-configurations) can be ported to projects written in other languages.

### Decoupling with datasources

  If you develop your code in JavaScript, you are essentially using the native JavaScript client exposed by Prisma. Later, if you decide to switch from Prisma to TypeORM, you can keep the same YAML configuration. All you need to do is adapt the TypeORM client to conform to the YAML DSL of datasources. In this scenario, only the datasource implementation would change, while the rest of your code remains unchanged. For Example [Axios](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/axios-as-datasource)

  When leveraging a Prisma API, it is possible to craft YAML configurations today and seamlessly incorporate them into a Java-based workflow at a later time. This decoupling empowers a seamless transition between various programming languages, provided they uphold compatibility with the identical YAML configuration format.



---- Content from: D:\gs-documentation\docs\microservices-framework\workflows\yaml-workflows\workflow-dsl.md ----

# Workflow-DSL

-A Workflow DSL (Domain-Specific Language) refers to a specialized programming language or notation designed for expressing and defining workflows or processes within a specific domain 

## Structure of a Workflow
Every Workflow has the following attributes.
- **id** - This is recommended for better logging visibility.
- **summary** - This provides a descriptive title for a workflow, enhancing code readability.
- **tasks** - This specifies that tasks, which can be workflows or sub-workflows, will be executed sequentially, one after the other. These tasks can call other workflows defined in YAML or JavaScript/TypeScript.

### Tasks and Attributes within a task
The `tasks` attribute is used to define a list of tasks or steps that need to be performed within a workflow or automation process. Each task is typically represented as a separate item in the list, and they are executed sequentially or in parallel, depending on the workflow's configuration. The `tasks` attribute helps organize and specify the specific actions or operations that need to be carried out as part of the workflow, making it a crucial component for defining the workflow's logic and behavior.

- **id** - This is essential for improved logging visibility and is a mandatory requirement for each task. Furthermore, it plays a crucial role in accessing the output of the task in subsequent tasks through the 'outputs.{task_id}' path, as demonstrated in the example-2 above.
- **summary** - This provides a summarised title for a task, enhancing code readability.
- **description** - In this field, we can provide a detailed description of what the task actually accomplishes.

- **fn** - This specifies the handler that will be executed for this task. It can be [built-in YAML functions](/docs/microservices-framework/workflows/yaml-workflows/inbuilt-workflows.md) or functions written by developers in [YAML](./overview.md) or [Typescript](../native-language-functions.md).

- **args** - Every handler function has its own argument structure, which is kept in the args key.

### Example Workflows
#### Example 1:
```yaml
id: hello_world_function
summary: Call an API and return the task message
tasks:
    - id: return_fn_step1
      description: add a message property
      fn: com.gs.return #It's a inbuilt function that returns args.
      args: "Hello World!"
```
#### Example 2:
```yaml
  summary: Summing x + y
  description: Here we sum two hardcoded x and y values. Feel free to try using API inputs from body or params!
  tasks:
    - id: sum_step1
      description: add two numbers
      fn: com.jfs.sum #This is a developer defined function that takes two arguments, performs addition and returns the total.
      args:
        x: 1
        y: 2
    
    - id: sum_step2
      description: return the response
      fn: com.gs.transform #Inbuilt function that converts the code written in <%%>.
      args: <% outputs.sum_step1 %> #we access the first task output and return it.
```


#### Inputs
 These are typically used to represent the input data or parameters captured from an event or the YAML workflow invocation. In the below workflow, we see references to `inputs.body.name`, which suggests that the task expects a value named "name" as input. This input data can come from external sources. In inputs, you will get `query`, `params`, `body`, `headers` & `user`.

#### Outputs
These represent the results produced by a task. In the below workflow, we have references like `outputs.transform_fn_step1.data`, indicating that the "data" produced by the task named "transform_fn_step1" is accessible as an output. This data can be used as input for subsequent tasks or for other purposes within the workflow.

```yaml
summary: Invoke an API and convert the custom function provided in the arguments into the YAML functions format.
tasks:
    - id: transform_fn_step1
      description: decide which function to call in next step
      fn: com.gs.transform
      args: |
        <js%
          if (inputs.body.fn == 'sum') {
            return 'com.jfs.sum_workflow'
          } else {
            return 'com.jfs.helloworld'
          }
        %>
    - id: call_fn_step2
      description: call fn returned in transform_fn_step1
      fn: <% outputs.transform_fn_step1.data %>
      args:
        name: <% inputs.body.name %>
```
The output of every task and function can be expected in the following format within other task

### Components of Response

Developers can easily transmit data by sending a JSON object containing the following components.

```js
response = new GSStatus(true, 200, undefined, responseData, undefined);
```
Upon the completion of each function execution, whether successful or not, the GSStatus class is invoked with certain properties and then returned.

- **success**: true/false. Default value is true
- **code**: standard HTTP response codes[1xx, 2xx, 3xx, 4xx, 5xx] Default value is 200
- **message**: any string explaining the response. Optional
- **data**: the actual data returned from the task/function. Optional
- **headers**: any headers you want to set in response (in case of sync eventsources only)

## Error handling
The `on_error` section defines how errors are managed within a workflow. It allows you to control whether the workflow should continue or stop in case of an error, what response or data to return in the event of an error, and how to log specific attributes related to the error. Additionally, it lets you specify a sequence of tasks to execute when an error occurs, enabling customized error handling and recovery procedures within the workflow.

:::tip
Think of it like a `catch` in 3rd Gen programming.
:::

- **continue** - The "continue" key accepts a boolean value, which can be either "true" or "false". When it's set to "true" the system will proceed to the next task even if an error occurs, effectively ignoring the error. But the GSStatus output of the failed task will be accessible to the next tasks.   
On the other hand, if it's set to "false" the system will return a custom response and exit the workflow when an error is encountered.
:::info
The default value for the continue variable is set to false. You can control the default behavior of continue by setting `default.on_error.continue` key in `config/default.yaml`
:::

- **log_attributes** - Log attributes assist in pinpointing the precise locations of breakpoints where errors occurred and provide visibility into the logged messages within the terminal.

- **response** - You can define custom responses with distinct status codes and messages to distinguish between different types of errors using customized error messages.

<div style={{ margin: '20px auto', textAlign: 'center' }}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/HYzIOQ-ozSA?si=qASQ2Ofqqb5VFUlo" frameBorder="0" allowFullScreen></iframe>
</div>


 ### Error handling in Workflow level

```yaml
summary: Hello world
description: Hello world example which invokes the com.gs.return workflow
id: hello_world 
on_error:
  continue: false
  log_attributes:  
        error_message: <% outputs.transform_error.message %> # You can check the break point of the workflow in the terminal
        error_type: 'your custom error type'
  response: # Customized response that is returned when an error occurs
    success: false
    code: 500
    data: "Default error"
tasks: 
  - id: step1 
    fn: com.gs.return
    args: 'Hello World!' 
```

 ### Error handling in task level

```yaml
summary: Testing on_error at task level
tasks:
  - id: task_level_1 
    fn: com.gs.transform # if we use this args in transform function they will set as response 
    args: 
      success: false
      code: 500
      data: "task 1 executed"
    on_error: 
      continue: false 
      response:
        code: 400
        data: "error occured"
    
  - id: task_level_2
    fn: com.gs.return
    args: "task 2 executed"
```


## Scripting in workflows
You can use [inline scripting](../../inline-scripting/overview.md) in workflows/functions for dynamic evaluation of variables.

## Built-in functions
The framework comes equipped with the following built-in functions.These functions are readily available for developers to use in their code, simplifying tasks like mathematical calculations, string manipulation, input/output operations, and more. They save time and effort by offering efficient and reliable solutions for common programming challenges.

[Godspeed Built-in function](/docs/microservices-framework/workflows/yaml-workflows/inbuilt-workflows.md)
