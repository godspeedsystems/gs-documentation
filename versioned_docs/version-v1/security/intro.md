---
sidebar_position: 2
title: Introduction
---

# Introduction

The introduction of code level security is as follows:

## Security

## 1. Code Level Security

Methodologies for code scanning, vulnerability prevention, and security are listed below:

- GitHub secret scanning to avoid committing private keys and secrets into the codebase across all git branches.
- Use of CodeQL to scan and analyze code for security vulnerabilities and code related problems. This will be integrated in the CI using GitHub Actions.
- Dependabot alerts will be configured on the github repos for the early detection of vulnerabilities in the third-party libraries and packages.

- Integrate [Snyk](https://snyk.io/) container security to the Kubernetes cluster to identify and fix the vulnerabilities across all image layers. This will be hooked up in the CI process.

- Web Application security testing will be done using Zed Attack Proxy (ZAP) to identify risks of malicious attacks.

## 2. Network

The entire platform will be hosted inside a restricted private network similar to Amazon Virtual Private Cloud (VPC). All communication between the internet and this network will be encrypted with HTTPS.

## 3. Data at rest & transit

All personally identifiable and sensitive information will be encrypted when stored in the database. This will be achieved using client side field encryption within the microservices/CRUD APIs. The encryption of the fields will be configurable at the time of defining the schema. For example, a MongoDB client will encrypt the fields using Authenticated encryption with associated data (AEAD) with HMAC-SHA-512 MAC before sending the data to the MongoDB server. This is supported out of the box using [mongodb-client-encryption](https://www.npmjs.com/package/mongodb-client-encryption) library.

During transit, the communication between microservices will follow a mutual TLS approach to ensure that the parties at each end of the network are who they claim to be. Additionally the data in transit will be encrypted as long as it was configured in the schema.

## 4. Logging

No Personally identifiable information (PII) to be present in logs. This will have to be ensured by the developers through model configuration. Once configured, the specific information will be redacted from the logs by the framework. Additionally, the use of pre-commit git hooks such as [Husky](https://www.npmjs.com/package/husky) will prevent committing console logs using [ESlint](https://eslint.org/) rules.

## 5. Cache

Cache to support encryption at rest and in-transit. Caching services such as Redis Enterprise have built in encryption support data in transit and at rest. Additionally, Amazon ElastiCache for Redis, an in-memory distributed caching mechanism, provides in-transit and at rest encryption to protect the data.

## 6. Documents

Documents to be stored as Blobs and will be encrypted at rest. Storage services such as Amazon S3 allow configuring the default encryption on a bucket. Doing so will encrypt all the newly added objects using server side encryption.

## 7. Vaults

Secret Management -- Using Hashicorp Vault or AWS Secret Manager or Azure Key Vault. Hashicorp Vault is cloud agnostic
