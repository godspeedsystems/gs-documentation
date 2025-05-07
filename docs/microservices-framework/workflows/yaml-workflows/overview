# Overview

## Introduction

YAML DSL serves as the default language for creating general workflows. YAML is suitable for cases where you require straightforward business logic and datasource queries. In contrast, for more intricate business logic, it is advisable to use native programming languages like JavaScript, TypeScript, or Java.

<!-- ![framework-architecture](https://res.cloudinary.com/dsvdiwazh/image/upload/v1704453580/Screenshot_from_2024-01-05_16-48-33_e5svvx.png) -->

<img src="https://res.cloudinary.com/dsvdiwazh/image/upload/v1704453580/Screenshot_from_2024-01-05_16-48-33_e5svvx.png" alt="event types"/>

## Advantages

### Less Boiler Plate
Yaml follows zero-bolier-plate approach reducing or eliminating repetitive and unnecessary code or setup, allowing developers to focus on essential tasks, resulting in cleaner and more efficient code.

```yaml
summary: workflow to cache task results
id: cache_wf
tasks:
  - id: cache_step1
    caching:
      key: cache_step1
      invalidate: cache_step2
      cache_on_failure : false
      expires: 60
      force: false
    fn: datasource.api.post./anything
    args:
        data:
          name: 'hello'
  - id: cache_step2
    caching:
      key: cache_step2
      cache_on_failure : false
      expires: 60
      force: false
    fn: datasource.api.post./anything
    args:
        data:
          name: 'mastersilv3r'
```

### Programming language independence
This will be useful when we have polyglot implementation of the metaframework in more than one languages. Then YAML [workflows](/docs/microservices-framework/introduction/design-principles.md#standardized-yaml-based-dsl-and-configurations) can be ported to projects written in other languages.

### Decoupling with datasources

  If you develop your code in JavaScript, you are essentially using the native JavaScript client exposed by Prisma. Later, if you decide to switch from Prisma to TypeORM, you can keep the same YAML configuration. All you need to do is adapt the TypeORM client to conform to the YAML DSL of datasources. In this scenario, only the datasource implementation would change, while the rest of your code remains unchanged. For Example [Axios](https://github.com/godspeedsystems/gs-plugins/tree/main/plugins/axios-as-datasource)

  When leveraging a Prisma API, it is possible to craft YAML configurations today and seamlessly incorporate them into a Java-based workflow at a later time. This decoupling empowers a seamless transition between various programming languages, provided they uphold compatibility with the identical YAML configuration format.

