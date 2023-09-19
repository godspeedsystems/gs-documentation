---
sidebar_position: 6
title: Data Federation
---

## Introduction

Godspeed has in-built support for federating data from multiple sources like database, search engine, warehouse, third party API & another microservice in both sync and async manner. One can execute multiple queries to configured sources within a single query
- Read only, write only or mixed. i.e. a single instruction can contain a combination of multiple reads and writes.
- Non transactional or as a distributed transaction.
- Retry logic, circuit breaker.

**Notes**
- In case there are multiple independent transactions in the call or queries of any nature, and one is ok for some to fail but some not, then one can specify `ignoreError:true` in those calls. 
- It is recommended that the developer defines all the API schema on server side when going to production. They should export native functions like federate(shown below) as API contract with caution. 


### The uses of data federation can be
- Dedicated Backend For Frontend (BFF) service
- As part of a custom Godspeed service.

### Sample instruction

```
POST /api/v1/${domain}/${microserviceName}/federate
{
    'searchResponse': { //The response of the query will come under this key in response from the service
        "instruction": “findAll”, //This instruction has been declared on the server side in the API schema
        "params”: {
            query_gs: {
                “match_phrase”: {“borrower.city.name”: “patna”},
                “exists”: “pincode”,
                “anyOneOf”: [
                    {range: {annualIncome”: {"gte": 1000000}}},
                    {“match”: {“hasOwnHouse”: true}},	
                ]
            }
        }
    },

    'saveBorrowerProfileResponse': {
        “instruction”: “saveBorrowersProfile”,
        “ignoreError”: true,
        "retry": {
            "count": 3,
            "timeout": 200 //milliseconds
        },
        "params”: {
            “name”: 1,
            “pan”: “asdfadsf”
        }
    }
}
```