---
sidebar_position: 3
title: 8.5 Kafka as datasource
---

# Introduction

The framework supports kafka as a datasource. It helps in interacting with kafka, to send/receive events on a kafka message bus. 

## 8.5.1 Example spec
The datasources for kafka are defined in `src/datasources`. Here, two kafka clients `kafka1.yaml` and `kafka2.yaml` are defined in datasources.
```
.
├── config
└── src
    ├── datasources
    │   └── httpbin.yaml
    │   ├── kafka1.yaml
    │   └── kafka2.yaml
    ├── events
    ├── functions
    └── mappings
```

Sample configuration in `kafka1.yaml`
```
type: kafka
client_id: my_service
brokers: [ "kafka:9092" ]
```