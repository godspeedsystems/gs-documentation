---
sidebar_position: 3
title: 8.1 Introduction
---

# Datasources
Any kind of entity which provides read and write mechanism for data is considered a datasource. For example, an API, a SQL or NoSQL datastore which includes RDBMS, key value stores, document stores etc. The settings for each datasource lies in `src/datasources` directory.

![datasources](/img/datasources_folder.png)

### 8.1.1 Datasource types

**Currently supported types**
- [API](./api)
- [Datastores](./datastore.md) (SQL/NoSQL)
  - Postgres
  - Mysql
  - Mongodb
- [Kafka](./kafka.md)
- [Elasticsearch](./elasticgraph/elasticgraph.md)

**Upcoming**
- S3
- File system


### 8.1.2 Connecting to a database and accessing them  using AdminUI

If a developer wants to connect to MongoDB or any other database using admin panel then he can read the necessary values in the docker compose such as host, port, username, password, database.

Below are the few examples of URL format patterns for some databases.

**MongoDB**
  - Connection URL format: `mongodb://username:password@host:port/database`
  - Example connection URL: `mongodb://admin:mindgrep@localhost:27017/test`


**MySQL**
  - Connection URL format: `mysql://username:password@host:port/database`
  - Example connection URL: `mysql://root:root@localhost:3306/test`


**PostgreSQL**
  - Connection URL format: `postgresql://username:password@host:port/database`
  - Example connection URL: `postgresql://postgres:postgres@localhost:5432/test`


