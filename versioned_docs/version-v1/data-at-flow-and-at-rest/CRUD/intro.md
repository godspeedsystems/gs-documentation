---
sidebar_position: 6
title: CRUD Module Introduction
---

This introduction covers aspects and benefits of the CRUD API in Godspeed.

CRUD API is part of common services available out of box which can be easily plugged into your code using Godspeed SDK

DB CRUD is avialable with powerful features like : - Universal API with GSL, native and sql support - SQL/NoSQL databases supported - bi-directional Relationship management across NoSQL, SQL DBs (first of its kind) - in-built support of internalization and localization(first of its kind) - in-built denormalization and data dependency management (first of its kind)

> In order to use the API, one must first [configure the data model](../model-setup)

---

## Single Universal API for multiple database

In Godspeed, one can query multiple databases through single API layer.
This generic API decouples The application code from underlying DB.

** Common params**

```
request:
        ds //datasource
        {queryType} : // can be one of  query_sql, query_native, query_gsl
                    { actual query}


response:
        status_code
        message
        _score //total score
        result [
              {_score://indivual score for each match
               data : { fields value corresponding to returnData }
              }
              ]


```

** A sample query **
This query will be sent to the underlying primary database, which is typically a transactional store.

```
  /** The default datasource for executing queries is the
   * primary datastore (as per the configuration) unless specifically mentioned in the
   * query with the 'source' argument.
   */

  /api/v2/search
  {
    type: 'user',
    where: {
      name: "ayush" //Executes an exact match
    }
  }
```

One may want to leverage Elasticsearch for text search or faster reads.
If setup as secondary datastore, it will be synced with the primary
as per the data model configuration.
The following query is targetted specifically to Elasticsearch.
But any supported database can be set as secondary, not just Elasticsearch.

```
  /api/v2/search
  {
    source: 'elasticsearch', //can be 'cache', 'mongodb' or an in memory object etc.
    query: {
      type: 'user',
      where: {
        age: {
          gte: 'ayush'
        },
        'city.name': {
          matchPhrase: 'delhi' //Executes a text search
        }
      }
    }
  }

```

---

## Support for native and SQL queries

A developer is not limited to use only the generic interface. Infact Godspeed design allows developer to execute SQL queries and native queries both.
In case,source is cache or in-memory object store, then the native query or SQL query may or may not be available as the constraint imposed by underlying cache or in-memory object store.

```
  /api/v2/search
  {
     source: “postgres” //Can be any configured database and supporting SQL
    _sql_query: {
                  'select * from user where age > 8 and name='Ayush'
                }

  }

  //OR to a secondary datastore
  {
    source: 'mongoDB',
    _native_query : { tags: ["technology", "low-code"] },

  }
```

---

## Relationship awareness

This API is relationship aware, even with NoSQL stores like Elasticsearch and MongoDB. Based on the relationship definitions,
the following is managed by this library out of the box. (No code)

- Bidirectional relationship maintenance. i.e. A single API call establishes relationships from A to B and B to A
  - It is also possible to configure storage of foreign keys only on one side, yet traverse from both sides. (Similar to Graph databases)
- Denormalisation support is also provided out of the box, across all NoSQL stores support. i.e. MongoDB and Elasticsearch

```
//An example of many to many relationships. An Event has multiple speakers, and a speaker can speak in many events.
speakers <> events
[event] <> [speaker]
Don't store foreign key in speaker //Means only event will have the foreign key of speaker stored in it.

//For denormalization, the following rule in schema/denormalisation.txt stores the names of speakers in the event
[event]
speakers{name} //Whenever a speaker and event are linked, the speaker's name is automatically copied to the event along with the foreign key (speaker's id).
               //When unlinked, the name of the speaker is also removed along with the foreign key.
               //When the name of the speaker is changed, the new name reflects across all the events where that speaker is linked.
```

---

## Batching of queries

In order to optimize the performance of databases and the microservices, the framework allows to `batch the CRUD queries, per database` (by query category, i.e. get, create, find, delete, update)
.

- All queries of one type and to one DB (irrespective of their arguments like entity type, where clause) are batched by default, unless specified otherwise.

- Queries and their reponse are multiplexed and demultiplexed internally so that the client never knows what else went in a batch.

  - All queries including transactions are batched together internally in same sequence as arrival of the queries

  - Error in one query does not affect the result of the other queries. The callers of each get their respective success or failure response as if they had executed the query without any batching in the first place.

`In config/collect.toml`

```
//Project level setting for batching.
//Specify the batch size or timeout, for every query category

noBatch = false // Can be set to true, in which case batching will not happen by default.
[batchSizes]
  find = 20
  create = 20
  get = 20
  update = 20
  delete = 20
[timeouts] //in milli seconds
  find = 20
  create = 20
  get = 20
  update = 20
  delete = 20

When invoking through JS
  gs.find.collect() //Executes with batching

//When exposing the function externally through a microservice, it is batched by default
  gs.find({
    query: {}
  })
```

> And, batching is optional

```
  //When invoking through JS, don't add .collect() to the CRUD function calls
  gs.find()
  //When exposing the function externally through a microservice, you can add noBatch: true
  gs.find({
    noBatch: true
  }
```

> You can set default setting of the API to noBatch. In that case you will need to say `noBatch: false` exlicitly to batch a kind of query.

---

## Transactions

When writing to a datasource which support transactions, all writes are always transactions.
A single write allows to update multiple entities/rows.

---

## Dual writes

Developer does not need to worry about dual writes
for data syncing across multiple types of databases used in the app.

Main featues of the dual writes are following:

- Just configure the federated DB model, write only to your primary. Your secondary databases will get eventually synced, as per your model settings.
- It is intended for future to also handle transactions spread across multiple databases via Saga pattern.
