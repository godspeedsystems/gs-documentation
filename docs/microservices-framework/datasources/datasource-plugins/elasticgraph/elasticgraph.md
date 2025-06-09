---
sidebar_position: 3
title: Elasticgraph Datasource Plugin
---

**[Link to Plugin Source Code](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/elasticgraph-as-datasource)**

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
The framework has inbuilt feature of setting up Elasticgraph model automatically whenever a new configuration is added in `src/datasources/eg_config/` directory. In case, you are getting any error in the setup, then you can refer execute below step for manual setup:

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