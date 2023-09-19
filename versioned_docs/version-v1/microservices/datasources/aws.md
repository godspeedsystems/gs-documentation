---
sidebar_position: 3
title: 8.8 AWS as datasource
---

# Introduction

The framework supports AWS as a datasource. It helps in interacting with AWS, to use various AWS services and methods. 

## 8.8.1 Example spec
The datasources for AWS are defined in `src/datasources`. Here, AWS datasource is defined in `aws_s3.yaml`.
```
.
├── config
└── src
    ├── datasources
    │   └── httpbin.yaml
    │   ├── aws_s3.yaml
    ├── events
    ├── functions
    └── mappings
```

Sample configuration in `aws_s3.yaml`
```
type: aws
common:
    credentials:
        accessKeyId: 'AKIA4KQJJFGY2KPNNOEMmnbv'
        secretAccessKey: '+pf5xyyPSUfBNn0V9ZIH0oPVzARBvxoehR+mpzigcdfg'
    region: "ap-south-1"
services:
    S3:
        config: {}
```

## 8.8.2 com.gs.aws workflow
[Refer here](../workflows.md/#6614-comgsaws) for com.gs.aws workflow.
