---
sidebar_position: 2
title: Introduction
---

# Introduction

The developer will need to provide abstracted, templated configurations for all the infra and system-level setup. They should not need to learn any underlying technologies for dev ops or automation. The platform will handle the provisioning, securing, configuring, health, scaling, failover and management of the infra and system, in an automated way. The platform will deploy & manage the lifecycle of the following components and functionalities: hardware spanning multiple cloud providers (or on-premise), operating system, network, tools, libraries, data stores, gateways, microservice mesh, message bus, observability, CI/CD, microservices (domain & functional), pipelines & workflows.

**Technologies used by default**

- Crossplane
- ArgoCD (delivery)
- Linkerd (service mesh)
- OpenTelemetry (for standardized tracing and monitoring via Jaeger and Prometheus)
- Elasticsearch/Kibana /Fluentd (Log collection, transformation, dashboard, alerts)
- Jaeger/Elasticsearch (Tracing)
- Prometheus/Grafana or Elasticsearch APM (metrics collection, monitoring & alerts)
- Proposed opensource framework for Auth - ORY Kratos or Keycloak (IAM), ORY OATHKEEPER (For gateway authorization)

## Salient Features

- ### Infrastructure as code

We will use declarative YAML configuration for Crossplane. for seamless integration with CI/CD pipelines to have a single source for infra configuration.

- ### Cloud federation & vendor independence

The deployment will be done using the Kubernetes cluster with [Crossplane](https://crossplane.io/) that provides extensive support for cloud providers such as AWS, GCP, Azure and others, along with on-premise. Using this one can not only be vendor-independent but also operate across multiple vendors.

- ### Application portability

The API centric control plane is directly used by the application teams to deploy their changes easily, with the least involvement of the devOps team. The configurations & APIs hide infrastructure complexity & reduce learning curve, hence empowering the dev teams to develop, deploy or shift auto-managed applications on the fly.

- ### Gitops and CI/CD based provisioning and configuring

All the dev team needs to make a commit to the git repo. The intended changes(as per the diff in the configuration files and code) should get automatically tested & deployed in production, using CI/CD and canary or blue-green deployment approaches. The pull request will need to be accepted by the stakeholders including but not limited to the product manager, engineering head, QA lead. Every commit to git will trigger unit and integration tests whether for infra, microservice or serverless function deployments. In case of test failures, the latest commit should fail to deploy in production. Deployments will not hinder the ongoing service at any time, ensuring high availability. We will use [ArgoCD](https://argo-cd.readthedocs.io/en/stable/) for the same

- ### Observability stack

The stack for observability will be provided out of the box, with certain functionality preset and working without developer intervention.

   1. #### Logging

    There will be provision for centralized logs stored into Elasticsearch via Fluentd, & visualized via Kibana or Grafana. It is to be used by the microservice framework for fundamental request/response/error logging and by developers for business-level logging.

   2. #### Monitoring

    All the application performance metrics (uptime, CPU, RAM, sync request latency, sync request success/failure) will be automatically stored & monitored centrally via the service mesh. The latency/success/failure metric of the async requests will be stored by the microservice framework. The data will be collected in Prometheus; and the dashboard will be rendered in Grafana.

   3. #### Tracing

    Jaeger, along with Elasticsearch backend will be used to collect the trace information for every request. Traces will be collected across both sync and async flows. Every incoming HTTP or async request will carry trace information in its headers. The same will be propagated further through the microservice framework when it makes a sync or async hit to another service. In case of sync hits which shall be routed via the service mesh, the mesh will store the tracing information in the tracing backend. Async hit tracing will be the responsibility of the microservice framework itself, when it will consume an async message. The standard event format being used will carry the tracing headers.

   4. #### Alerting

    Grafana can be used to configure alerts based on the monitored metrics.

- ### Authentication

[ORY Kratos](https://github.com/ory/kratos) will be used to provide authentication and role management service out of the box. But the system is not confined to using ORY Kratos only. The platform users can use any IAM service they wish to use, and it shall be made to work with the remaining system and microservice framework.

- ### Scaffolding

A microservice project structure will be auto-generated from the CLI. There will be a scaffolding mechanism through CLI which will generate the project structure for the custom business logic (route, controller, api definition, validation, authorization, data model) of a custom microservice. The framework will also provide a configuration template that can be customized as per the development need.


## Dashboards available

Follwoing dashboards will be available:

 - ### Service & function dashboard:
   All the services will be managed using OpenFAAS which provides an infra agnostic way of deploying services and functions using Docker over Kubernetes.

 - ### Data dashboard:
  It will allow the admins or team to search, view and edit data in the DB of any microservice.

 - ### Monitoring dashboard:
   It will be used to monitor the state of the live production environment. We plan to use Grafana for the same.

 - ### Workflows dashboard:
   Monitor the workflows running or erroring out in the system. For example, ETLs, CI/CD, scheduled jobs, triggered workflows. This will be provided by the tool used underneath.For example, ARGO workflow.

 - ### Analytics dashboard:
   A dashboard to view & download statistics, graphs and reports will be available. Also other dashboards available in open source can be adopted to work with the same data.



### Developer workflow in action
   The following diagram gives an detailed overview of the workflow.

![Developer Workflow](/img/Platform-Architecture-Devops.jpg)


---
## A SAMPLE SETUP


IMPORTANT NOTE - While Godspeed is providing some standard tools as part of the platform, developers can integrate other tools to cover the same functionality as per the defined API contracts. Because we are using standard protocols like CloudEvents, OpenTelemetry, unified CRUD API, they can integrate any database, cache, message bus, APM/BPM tools, as long as the same API contract is maintained. Most of the tools mentioned below are replaceable as a platform goal. The only exceptions will be tools like Crossplane & Nodejs which are very fundamental to our platform and microservice framework respectively.

![snowburg](/img/es1.PNG)


export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '0px',
      color: 'black',
      padding: '5px',
      cursor: 'pointer',
    }}
   >
    {children}
  </span>
);



All the dev team needs to do is to make a commit to the git repo and the intended changes as per the diff in the configuration files and code, should get automagically tested & deployed in production, using CI/CD and canary or blue-green deployment approaches.The pull request will need to be accepted by the stakeholders including but not limited to product manager, engineering head, QA lead. Every commit to git will trigger unit and integration tests whether for infra, microservice or serverless function deployments. In case of test failing, the latest commit should fail to deploy in production. Deployments will not hinder the ongoing service at any time, ensuring high availability. We will use [ArgoCD](https://argo-cd.readthedocs.io/en/stable/) for the same



