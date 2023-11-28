---
sidebar_position: 2
title: Table of Contents
---

# Table of Contents

[1. **Preface**](preface.md)            
    [1.1 Introduction](preface.md/#11-introduction)            
    [1.2 Goals](preface.md/#12-goals)            
    [1.3 Features](preface.md/#13-features)            
    [1.4 Tenets](preface.md/#14-tenets)            
    [1.5 Design principals](preface.md/#15-design-principals)            
    [1.6 Framework architecture](preface.md/#16-framework-architecture)            
    [1.7 Scenarios and use cases](preface.md/#17-scenarios-and-use-cases)            

[2. **Introduction**](./microservices/intro.md)            
    [2.1 Developer's work](./microservices/intro.md/#21-developers-work)      

[3. **Setup**](./microservices/setup/getting-started.md)      
    [3.1 Getting started](./microservices/setup/getting-started.md)      
        [3.1.1 Glossary](./microservices/setup/getting-started.md/#311-glossary)      
        [3.1.2 Pre-requisites](./microservices/setup/getting-started.md/#312-pre-requisites)      
        [3.1.3 Steps to get started](./microservices/setup/getting-started.md/#313-steps-to-get-started)      
        [3.1.4 Time to start the development](./microservices/setup/getting-started.md/#314-time-to-start-the-development)      

[3.2 Project structure](./microservices/setup/scaffolding.md)      
    [3.2.1 Scaffolding & Project structure](./microservices/setup/scaffolding.md/#321-scaffolding--project-structure)      

[3.3 Configuration](./microservices/setup/configuration/env-vars.md)      
    [3.3.1 Introduction](./microservices/setup/configuration/intro.md)      
    [3.3.2 Environment variables](./microservices/setup/configuration/env-vars.md)      
    [3.3.3 Static variables](./microservices/setup/configuration/static-vars.md)      

[3.4 Tests](./microservices/setup/tests.md)      
[3.5 Auto watch and build](./microservices/setup/auto-watch.md)  
[3.6 Debugger in yaml](./microservices/setup/debugger-in-yaml.md)     

[4. **CLI**](./microservices/introduction-cli.md)      
    [4.1 Functionality](./microservices/introduction-cli.md/#41-functionality)      
    [4.2 Installation](./microservices/introduction-cli.md/#42-installation)      
    [4.3 Options](./microservices/introduction-cli.md/#43-options)      
    [4.4 Commands: Outside the dev container](./microservices/introduction-cli.md/#44-commands-outside-the-dev-container)      
    [4.5 Commands: Inside the dev container](./microservices/introduction-cli.md/#45-commands-inside-the-dev-container)      

[5. **Swagger Specs**](./microservices/swagger-specs.md)      
    [5.1 CLI command to generate documentation](./microservices/swagger-specs.md/#51-cli-command-to-generate-documentation)      
    [5.2 Custom Server URL](./microservices/swagger-specs.md/#52-custom-server-url)      

[6. **Events**](./microservices/events.md)      
    [6.1 Event types](./microservices/events.md/#51-event-types)      
    [6.2 Event schema & examples for supported sources](./microservices/events.md/#52-event-schema--examples-for-supported-sources)      
        [6.2.1 JSON schema validation](./microservices/events.md/#521-json-schema-validation)      
        [6.2.2 HTTP event](./microservices/events.md/#522-http-event)      
        [6.2.3 Kafka event](./microservices/events.md/#523-kafka-event)      

[7. **Workflows**](./microservices/workflows.md)      
    [7.1 The structure of workflows](./microservices/workflows.md/#71-the-structure-of-workflows)      
    [7.2 The tasks within workflows](./microservices/workflows.md/#72-the-tasks-within-workflows)      
    [7.3 Location and fully qualified name (id)          of workflows and functions](./microservices/workflows.md/#73-location-and-fully-qualified-name-id-of-workflows-and-functions)      
    [7.4 Referencing a workflow within an event or another workflow](./microservices/workflows.md/#74-referencing-a-workflow-within-an-event-or-another-workflow)      
    [7.5 Use of Coffee/JS for scripting](./microservices/workflows.md/#75-use-of-coffeejs-for-scripting)      
    
[7.6 Inbuilt functions](./microservices/workflows.md/#76-inbuilt-functions)      
        [7.6.1 com.gs.http](./microservices/workflows.md/#761-comgshttp)      
        [7.6.2 com.gs.kafka](./microservices/workflows.md/#762-comgskafka)      
        [7.6.3 com.gs.datastore](./microservices/workflows.md/#763-comgsdatastore)      
        [7.6.4 com.gs.elasticgraph](./microservices/workflows.md/#764-comgselasticgraph)      
        [7.6.5 com.gs.transform](./microservices/workflows.md/#765-comgstransform)      
        [7.6.6 com.gs.series](./microservices/workflows.md/#766-comgsseries)      
        [7.6.7 com.gs.parallel](./microservices/workflows.md/#767-comgsparallel)      
        [7.6.8 com.gs.switch](./microservices/workflows.md/#768-comgsswitch)      
        [7.6.9 com.gs.each_sequential](./microservices/workflows.md/#769-comgseach_sequential)      
        [7.6.10 com.gs.each_parallel](./microservices/workflows.md/#7610-comgseach_parallel)      
        [7.6.11 com.gs.return](./microservices/workflows.md/#7611-comgsreturn)      
        [7.6.12 com.gs.log](./microservices/workflows.md/#7612-comgslog)      
        [7.6.13 com.gs.dynamic_fn](./microservices/workflows.md/#7613-comgsdynamic_fn)      
        [7.6.14 com.gs.aws](./microservices/workflows.md/#7614-comgsaws)      
        [7.6.15 com.gs.redis](./microservices/workflows.md/#7615-comgsredis)      
        [7.6.16 com.gs.if, com.gs.elif, com.gs.else](./microservices/workflows.md/#7616-comgsif-comgselif-comgselse)      

[7.7 Developer written functions](./microservices/workflows.md/#77-developer-written-functions)      
[7.8 Headers defined at workflow level](./microservices/workflows.md/#78-headers-defined-at-workflow-level)      

[7.9 File Upload feature](./microservices/workflows.md/#79-file-upload-feature)      
        [7.9.1 Workflow spec to upload files with same file key](./microservices/workflows.md/#791-workflow-spec-to-upload-files-with-same-file-key)      
        [7.9.2 Workflow spec to upload multiple files with different file keys](./microservices/workflows.md/#792-workflow-spec-to-upload-multiple-files-with-different-file-keys)      
        [7.9.3 Workflow spec to upload file directly from URL](./microservices/workflows.md/#793-workflow-spec-to-upload-file-directly-from-url)      

[8. **Datasources**](./microservices/datasources/intro.md)      
    [8.1 Introduction](./microservices/datasources/intro.md)      
        [8.1.1 Datasource types](./microservices/datasources/intro.md/#811-datasource-types)      

[8.2 Datasources](./microservices/datasources/before-and-after-hooks.md)         
    [8.2.1 Before and after hooks to datasource calls](./microservices/datasources/before-and-after-hooks.md)       

[8.3 API datasource](./microservices/datasources/api.md)      
        [8.3.1 API datasource schema defined externally](./microservices/datasources/api.md/#821-api-datasource-schema-defined-externally)      
        [8.3.2 API datasource schema defined within the yaml file](./microservices/datasources/api.md/#822-api-datasource-schema-defined-within-the-yaml-file)      
        [8.3.3 Headers defined at datasource level](./microservices/datasources/api.md/#823-headers-defined-at-datasource-level)      
        [8.3.4 Headers defined at task level](./microservices/datasources/api.md/#824-headers-defined-at-task-level)      
        [8.3.5 Example usage](./microservices/datasources/api.md/#825-example-usage)      

[8.4 Datastore as datasource](./microservices/datasources/datastore.md)      
    [8.4.1 Schema specification](./microservices/datasources/datastore.md/#831-schema-specification)      
    [8.4.2 CLI Commands](./microservices/datasources/datastore.md/#832-cli-commands)      
    [8.4.3 Prisma Datastore Setup](./microservices/datasources/datastore.md/#833-prisma-datastore-setup)      
    [8.4.4 Auto generating CRUD APIs from data store models](./microservices/datasources/datastore.md/#834-auto-generating-crud-apis-from-data-store-models)      
    [8.4.5 Sample datastore CRUD task](./microservices/datasources/datastore.md/#835-sample-datastore-crud-task)      

[8.5 Kafka as datasource](./microservices/datasources/kafka.md)      
    [8.5.1 Example spec](./microservices/datasources/kafka.md/#841-example-spec)      

[8.6 Elasticgraph as datasource](./microservices/datasources/elasticgraph/elasticgraph.md)      
    [8.6.1 Folder Structure](./microservices/datasources/elasticgraph/elasticgraph.md/#851-folder-structure)      
    [8.6.2 Datasource DSL](./microservices/datasources/elasticgraph/elasticgraph.md/#852-datasource-dsl)      
    [8.6.3 Configuration files for elasticgraph](./microservices/datasources/elasticgraph/elasticgraph.md/#853-configuration-files-of-elasticgraph)      
    [8.6.4 Elasticgraph Setup](./microservices/datasources/elasticgraph/elasticgraph.md/#854-elasticgraph-setup)      
    [8.6.5 Auto generating CRUD APIs for elasticgraph](./microservices/datasources/elasticgraph/elasticgraph.md/#855-auto-generating-crud-apis-for-elasticgraph)      


[8.7 Extensible datasources](./microservices/datasources/extensible-datasources.md)      
    [8.7.1 Datasource definition](./microservices/datasources/extensible-datasources.md/#861-datasource-definition)      
    [8.7.2 Example spec for the event](./microservices/datasources/extensible-datasources.md/#862-example-spec-for-the-event)      
    [8.7.3 Example spec for the workflow](./microservices/datasources/extensible-datasources.md/#863-example-spec-for-the-workflow)      

[8.7 AWS as datasource](./microservices/datasources/aws.md)      
    [8.7.1 Example spec](./microservices/datasources/aws.md/#871-example-spec)      
    [8.7.2 com.gs.aws workflow](./microservices/datasources/aws.md/#872-comgsaws-workflow)      

[8.9 Redis as datasource](./microservices/datasources/redis.md)      
    [8.9.1 Example spec](./microservices/datasources/redis.md/#881-example-spec)      


[8.10 RabbitMQ as datasource](./microservices/datasources/rabbitmq.md)      
    [8.10.1 Example spec](./microservices/datasources/rabbitmq#8101-example-spec)      

[9. **Caching**](./microservices/caching.md)      
    [9.1 Specifications](./microservices/caching.md/#91-specifications)      
    [9.1.1 Datasource spec for redis](./microservices/caching.md/#911-datasource-spec-for-redis)      
    [9.1.2 Configuration](./microservices/caching.md/#912-configuration)      
    [9.1.3 Workflow spec](./microservices/caching.md/#913-workflow-spec)      

[10. **Mappings**](./microservices/mappings.md)      
    [10.1 Project structure](./microservices/mappings.md/#101-project-structure)      
    [10.2 Sample mappings](./microservices/mappings.md/#102-sample-mappings)      
    [10.3 Use mappings constants in other mapping files](./microservices/mappings.md/#103-use-mappings-constants-in-other-mapping-files)      

[11. **Plugins**](./microservices/plugins.md)      
    [11.1 Project structure](./microservices/plugins.md/#111-project-structure)      
    [11.2 Sample plugins](./microservices/plugins.md/#112-sample-plugins)      
    [11.3 Sample workflow using plugins](./microservices/plugins.md/#113-sample-workflow-using-plugins)      

[12. **Authentication & Authorization**](./microservices/authen-author.md)      
    [12.1 Authentication](./microservices/authen-author.md/#121-authentication)      
    [12.1.1 JWT Configuration](./microservices/authen-author.md/#1211-jwt-configuration)      
    [12.1.2 Event spec](./microservices/authen-author.md/#1212-event-spec)      
    [12.1.3 Generate JWT](./microservices/authen-author.md/#1213-generate-jwt)      
    [12.1.4 Datasource authentication](./microservices/authen-author.md/#1214-datasource-authentication)      

[12.2 Authorization](./microservices/authen-author.md/#122-authorization)      
[12.2.1 Workflow DSL](./microservices/authen-author.md/#1221-workflow-dsl)      
[12.2.2 Sample DB query call authorization](./microservices/authen-author.md/#1222-sample-db-query-call-authorization)      

[13. **Telemetry**](./telemetry/intro.md)      
    [13.1 Introduction](./telemetry/intro.md/#131-introduction)      
        [13.1.1 Architecture](./telemetry/intro.md/#1311-architecture)      

[13.2 Goals](./telemetry/intro.md/#132-goals)      
[13.3 Configuration](./telemetry/intro.md/#133-configuration)      
        [13.3.1 OTEL exporter endpoint](./telemetry/intro.md/#1331-otel-exporter-endpoint)      
        [13.3.2 OTEL service name](./telemetry/intro.md/#1332-otel-service-name)      

[13.3.3 Logging](./telemetry/intro.md/#1333-logging)      
        [13.3.3.1 Log level](./telemetry/intro.md/#13331-log-level)      
        [13.3.3.2 Log fields masking](./telemetry/intro.md/#13332-log-fields-masking)      
        [13.3.3.3 Log format](./telemetry/intro.md/#13333-log-format)      
        [13.3.3.4 Add custom identifiers in logs](./telemetry/intro.md/#13334-add-custom-identifiers-in-logs)      

[13.4 Custom metrics, traces and logs (BPM)         ](./telemetry/intro.md/#134-custom-metrics-traces-and-logs-bpm)      
        [13.4.1 DSL spec for custom metrics](./telemetry/intro.md/#1341-dsl-spec-for-custom-metrics)      
        [13.4.2 DSL spec for custom trace](./telemetry/intro.md/#1342-dsl-spec-for-custom-trace)      
        [13.4.3 DSL spec for custom logs](./telemetry/intro.md/#1343-dsl-spec-for-custom-logs)      

[13.5 Observability Stack](./telemetry/intro.md/#135-observability-stack)      
[13.6 Recommended model for telemetry signals](./telemetry/intro.md/#136-recommended-model-for-telemetry-signals)      

[14. **Custom Middleware**](./microservices/custom-middleware.md/)      
    [14.1 How to add custom middleware in Godspeed](./microservices/custom-middleware.md/#141-how-to-add-custom-middleware-in-godspeed)      

[15. **Roadmap**](roadmap.md)      

[16. **FAQ**](faq.md)      
    [16.1 What is the learning curve of the microservice framework?](faq.md/#151-what-is-the-learning-curve-of-the-microservice-framework)      
    [16.2 What is the development process and quality metrics?](faq.md/#152-what-is-the-development-process-and-quality-metrics)      
    [16.3 How can we adopt new versions of used technology easily and fast? For example, the new Postgres release.](faq.md/#153-how-can-we-adopt-new-versions-of-used-technology-easily-and-fast-for-example-the-new-postgres-release)      
    [16.4 How easy is it to add new technology in place of an existing one, or add something absolutely new and unique (not existing in the framework)         ?](faq.md/#154-how-easy-is-it-to-add-new-technology-in-place-of-an-existing-one-or-add-something-absolutely-new-and-unique-not-existing-in-the-framework)      
    [16.5 Which databases are currently supported? What is the roadmap for future support?](faq.md/#155-which-databases-are-currently-supported-what-is-the-roadmap-for-future-support)      
    [16.6 Does the API handle DB transactions?](faq.md/#156-does-the-api-handle-db-transactions)      
    [16.7 How can apps be decoupled or loosely coupled with DBs?](faq.md/#157-how-can-apps-be-decoupled-or-loosely-coupled-with-dbs)      
    [16.8 When using Godspeed service alongside SpringBoot, what will be the impact on performance with another hop, versus direct connection with DB from Spring Boot?](faq.md/#158-when-using-godspeed-service-alongside-springboot-what-will-be-the-impact-on-performance-with-another-hop-versus-direct-connection-with-db-from-spring-boot)      
    [16.9 What is the strategic advantage of making DB queries through Godspeed?](faq.md/#159-what-is-the-strategic-advantage-of-making-db-queries-through-godspeed)      
    [16.10 How to achieve multi-tenancy in DBs, for a single application?](faq.md/#1510-how-to-achieve-multi-tenancy-in-dbs-for-a-single-application)      
    [16.11 How can we start adopting the Godspeed framework?](faq.md/#1511-how-can-we-start-adopting-the-godspeed-framework)      
    [16.12 How to move out of the Godspeed framework? Can we have a two door exit? I.e. Can we move out of technology and data both?](faq.md/#1512-how-to-move-out-of-the-godspeed-framework-can-we-have-a-two-door-exit-ie-can-we-move-out-of-technology-and-data-both)      
    [16.13 How will we prevent unified CRUD API from limiting or choking us?](faq.md/#1513-how-will-we-prevent-unified-crud-api-from-limiting-or-choking-us)      
    [16.14 What kind of API standards does the framework support?](faq.md/#1514-what-kind-of-api-standards-does-the-framework-support)      
    [16.15 Why Rest first approach ? Why not Graphql first approach?](faq.md/#1515-why-rest-first-approach--why-not-graphql-first-approach)      
    [16.16 How are we doing testing given there is quite a bit of custom DSL in the framework. How do we ensure the correctness?](faq.md/#1516-how-are-we-doing-testing-given-there-is-quite-a-bit-of-custom-dsl-in-the-framework-how-do-we-ensure-the-correctness)      
    [16.17 How will the upgrades and migrations be done to the framework?](faq.md/#1517-how-will-the-upgrades-and-migrations-be-done-to-the-framework)      
    [16.18 How CRUD APIs will support the paid as well as the non paid features of databases such as MongoDB. For example: MongoDB free vs paid versions will support different features.](faq.md/#1518-how-crud-apis-will-support-the-paid-as-well-as-the-non-paid-features-of-databases-such-as-mongodb-for-example-mongodb-free-vs-paid-versions-will-support-different-features)      
    [16.19 How to ship new models easily?](faq.md/#1519-how-to-ship-new-models-easily)      