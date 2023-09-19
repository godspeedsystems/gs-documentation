---
sidebar_position: 2
title: COMMON FAQs
---

<!-- # GODSPEED

#### CONSULTING AND GODSPEED TECH LANDSCAPE -->

Followings are collections of commonly asked questions with explanations. In future we will keep adding more questions/use cases/scenarios.

## 16.1 What is the learning curve of the microservice framework?

Our entire effort is to be a low code, easy to learn platform without too many things to learn, while getting big jobs done. A bunch of engineers have already trained and are developing microservices. Based on our data, it takes around 3~5 days for a young intern or engineer to get started on delivering enterprise level microservices.

---

## 16.2 What is the development process and quality metrics?

All our upgrades go through peer reviews and test coverage (80%). We follow feature based branching. As part of our CI workflow, a developer can't commit/merge to the dev/master branches, unless all the test cases are passing. This ensures continuous sanity checks of our main branches.

Documentation and test coverage are integral parts of quality metrics.
Code and image vulnerability scans are also followed to ensure security within the code and images.

#### Story/Bug Life Cycle

:::tip

- **Todo** - Created by product owner or ticket creator.
- **In Progress** - By developer when they start the work.
- **Documentation** - By developer when they implement the feature.
- **Code Review** - By developer when they finish the documentation.
- **QA** - By a peer developer when they are testing the feature.
- **Done** - By person merging the pull request.

:::

---

## 16.3 How can we adopt new versions of used technology easily and fast? For example, the new Postgres release.

- Many times, the upgrades work with a simple update in package.json and [updating the project](./microservices/introduction-cli.md/#update).

- If at all a core framework update is needed, it is done as per the SLA. Security patches, fixes or feature inclusion will be part of the SLA itself.

- Irrespective of our SLAs, we also take an initiative to proactively support important integrations and upgrades from its side, and make it available to all clientele and potential users.

- The system will have default support for free and open source software. But based on client requirements, we can provide integrations for paid versions as well based on SLA and priority. If an upgrade has a license cost, it shall be borne by the client should it decide to use it.

- These changes can be done by the client team itself, because it will have proper documentation, access and right to modify source for its internal uses, and there will be minimum 80% test coverage with test automation, and KT/support by us (latter as per the SLA).

---

## 16.4 How easy is it to add new technology in place of an existing one, or add something absolutely new and unique (not existing in the framework)?

- Since all the implementation is done against the open standards and pluggable interfaces, as long as the new technology is adhering to those standards drop-in replacement will be feasible.

- If the technology is introduced that does not adhere to the open standards, then some work will be needed to create adapters and avoid vendor lock-ins. But still, the integration will have to be compliant to the interfaces, for them to work, giving a uniformity of implementation and replacement. The modular architecture and modular design is plugin based, allowing for new integrations without much hassle.

- This can be done by the client itself, or by us, depending on our engagement.

---

## 16.5 Which databases are currently supported? What is the roadmap for future support?

We currently support Mongodb, Postgres, MySQL, SQLServer, SQLite, MariaDB, CockroachDB, AWS Aurora, Azure SQL via [Prisma](https://www.prisma.io/). We are in the process of adding Elasticsearch in Q2, 2022.

---

## 16.6 Does the API handle DB transactions?

Yes there is an extensive support for [DB transactions](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).

---

## 16.7 How can apps be decoupled or loosely coupled with DBs?

This decoupling is possible because of the universal datastore schema, CRUD API and migration process.
For more, please refer [prisma docs](https://www.prisma.io/docs/).

---

## 16.8 When using Godspeed service alongside SpringBoot, what will be the impact on performance with another hop, versus direct connection with DB from Spring Boot?

The performance of an API endpoint depends on the service PLUS DB working together. For example, DB connection pooling and utilization, transaction handling, batching of independent queries, optimization of indexes and queries, denormalization (for cross table queries and aggregations), memoization/caching (for faster read and solving N+1 queries problem), CQRS setup between multiple DBs.

Godspeed includes algorithms and best performance practices like the ones mentioned above. We are constantly striving to improve the performance. Next up is the feature of caching of output of workflow tasks and DB queries.

---

## 16.9 What is the strategic advantage of making DB queries through Godspeed?
First of all, the hop is completely optional. There are a few benefits of using this hop, however, including

- Become decoupled with the choice of database provider, so that if a DB changes ,the app code does not change.

- Low code configuration of CRUD service (saves effort of development, QA & maintenance)

- Data federation across multiple DBs and APIs. One can execute multiple queries to configured sources within a single query.

---

## 16.10 How to achieve multi-tenancy in DBs, for a single application?

It shall be done in two ways.

- By having separate DBs for every tenant. This will be costly but will be PCI compliant. It will also provide data isolation if needed for each tenant.

- By having a tenant_id in every row/document of every table/collection/index in the database.This will be cost effective and easy to maintain but the data across multiple tenants will be in a single database.

---

## 16.11 How can we start adopting the Godspeed framework?

- Start by creating a new microservice in [10 minutes](./microservices/setup/getting-started.md), referring our docs.
- Migration of existing microservices or monoliths:
    - Generate CRUD APIs and workflows out of the box, by introspecting the database of an existing app, via the CLI. Then start customizing and using it as per your need.
    - If you have existing Open API spec for a service, then you can generate the Godspeed event schema out of the box. (Coming soon)

---

## 16.12 How to move out of the Godspeed framework? Can we have a two door exit? I.e. Can we move out of technology and data both?

It is possible to opt out of the Godspeed framework without any kind of lock-in in which case all the microservices specific to the client can be developed using some other technology stack. The DBs can be self managed.

The data will anyway be hosted on the client’s premise/cloud or its vendor’s cloud. The control of the data is subject to the client’s agreement with their respective cloud vendor, whose hosted database services are being used. But if the client uses self managed DBs, then they are fully in control of their data. This has got nothing to do with Godspeed. The framework comes with no lock-in of any kind and will never do so, as part of our philosophy.

---

## 16.13 How will we prevent unified CRUD API from limiting or choking us?

The framework, via Prisma, facilitates developers to access full functionality of any database or tool without being limited by the universal API. They shall be able to execute native database queries directly or via the API itself.

---

## 16.14 What kind of API standards does the framework support?

We currently support REST and planned to support GraphQL and gRPC in Q2, 2022.

---

## 16.15 Why Rest first approach ? Why not Graphql first approach?

Every existing Graphql server in the industry supports REST/JSON interface, custom DSL and along with it, a Graphql interface (Ex. DGraph, Hasura, Apollo, Postgraphile). We are also going the same route by first being REST/JSON based, custom DSL and then adding Graphql in future. This is primarily because of greater familiarity of the REST standard across industry. At the same time, our REST implementation brings some good concepts to include in the development methodology like the concept of giving power to the frontend team to decide what data they want in response, and to get data from multiple sources in one go. We are including the features of Graphql in our design. The foundation our API interface is the unified event schema which we plan to use to generate GraphQL API (planned for Q2, 2022)

Having said that, we would like to add that the Graphql standard specification does not specify a few critical things, like “where clause”, “aggregations”, “filters in joins”, “specifying relationships in model”, search/suggest queries, custom annotations, how to migrate, code first or schema first approach, etc. Every vendor has its own flavour of Graphql implementation/API, and there is no compatibility or out-of-the-box interoperability between implementations from different vendors. If the client also implements Graphql by any vendor, including Godspeed, it will be still having its own unique flavor of implementation, and the concept of data federation will not work for consumers of the API, just out of the box, as it appears to be so in theory of Graphql data federation. It will need developers to write custom resolvers to federate request/response from multiple Graphql services.

In short Graphql standard lacks standard and unified implementation across industry. Further, we believe based on our survey that the Graphql ecosystem is complex and difficult to learn and extend for the uninitiated, and most developers even today do not know Grapqhl. Those who know find it complex. It lacks bringing agility for a typical developer team who is more comfortable with REST/JSON. It already took banks years to move from XML to JSON. Expecting third party consumers to consume Graphql is another big ask, a few years ahead of time.

Still, it's an new upcoming standard with its own benefits. We wish to roll out our own flavor in 2022.

---

## 16.16 How are we doing testing given there is quite a bit of custom DSL in the framework. How do we ensure the correctness?

- DSL will not get loaded if it's not in the right format.
- We are planning to add language feature in VSCode for compile time checks.
- We have automated test suite generation through the event schema and the developer can add testing as a part of CI process.

---

## 16.17 How will the upgrades and migrations be done to the framework?

We follow a semantic release process using [semantic version (semver)](https://semver.org/) with autogenerated Changelog. The developers can change/upgrade the version of the framework for any microservice [via the CLI](./microservices/introduction-cli.md/#version). After this, they can run the test cases and confirm if everything goes well.

---

## 16.18 How CRUD APIs will support the paid as well as the non paid features of databases such as MongoDB. For example: MongoDB free vs paid versions will support different features.

The framework uses Prisma which already supports paid and non paid features of databases.

---

## 16.19 How to ship new models easily?

Prisma provides a standardized and widely used migration process, which can be used out of the box.
