# JWT Authentication
All currently available _sync_ event sources support JWT authentication mechanism out of the box. For ex. Apollo Graphql, Express, Fastify.

## Enabling JWT Authentication
You can [setup jwt configuration](./jwt-authentication.md) in the event source's configuration file, and override it in each individual event as applicable.
The plugins follow zero trust policy as a first principle, so if you have setup jwt spec at event source level, all endpoints will go through JWT authentication, unless you explicityly set `authn:false` in their schema.

### Disabling authentication on an endpoint
```yaml
http.post./loan-application: 
  fn: com.biz.kyc.ckyc.ckyc_initiate
  authn: false # explicitly disable jwt authentication on this endpoint
 
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

<!-- ### Example access from inline scripting with YAML
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
``` -->

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