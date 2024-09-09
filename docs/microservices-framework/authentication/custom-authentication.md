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
  <summary>Let's See Github OAuth2 as an example of custom authentication :</summary>

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
      console.log("User response ",user);
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