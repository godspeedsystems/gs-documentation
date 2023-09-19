<!-- import Highlight from '@site/src/components/Highlight'; -->

# Work of the developer

### <Highlight color="#F0F8FF">Creating Data services or module services like Document or Notification service </Highlight>

The developer will use scaffolding provided by the platform to setup a new microservice project. In the configuration template, (s)he will configure the microservice for the required functionality, data model & performance tunings. Once done, (s)he can migrate the DBs and run the microservice, using the CLI during the local development, and using the GitOps process for staging/production deployment. Simple settings will provide out of the box functionalities like JWT token based authorization, APIs for multi db CRUD, analytics, search, suggest, document, notifications, event publishing/subscription, observability. This can be used to run standalone domain agnostic functional services like notification service! Or to run a separate microservice which does only the job of data federation and nothing else (Such a service is called backend for frontend aka BFF)

### <Highlight color="#F0F8FF">Creating domain gateway, orchestrators & servicese </Highlight>

If for a domain microservice like Lead Origination System, there is any custom validations, business logic, event consumers, REST routes, orchestration flows etc that need to be written, the developer needs to add those within the microservice project, using the respective interface and scaffolding structure provided by the framework. This way a developer can get a custom microservice on top of the fundamental microservice framework capabilities. They can mix and match capabilities provided out of the box with custom capabilities added on top by them.

![snowburg](/img/es2.PNG)
