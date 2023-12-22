---
sidebar_position: 3
title: 8.11 Soap as datasource
---

# Introduction

The framework supports SOAP as a datasource. SOAP, which stands for Simple Object Access Protocol, is a way for different systems to talk to each other. It uses XML, a type of code that is easy for people to read and understand.

## 8.11.1 Example spec
The datasources for soap are defined in `src/datasources`.  Here, soap datasource is defined in `soap.yaml.`


```
.
├── config
└── src
    ├── datasources
    │   └── httpbin.yaml
    │   ├── soap.yaml
    │   
    ├── events
    ├── functions
    └── mappings
```

Sample configuration in `soap.yaml`

```
type: soap
url: http://www.dneonline.com/calculator.asmx?WSDL
security:
  type: basic
  username: my_username
  password: my_password
```