---
sidebar_position: 2
title: Godspeed Integration with SpringBoot
---

Godspeed will provide an Java SDK to integrate with SpringBoot. Through this JDK, client will have option to use the common microservices provided by Godspeed.

Developer can write their core logic in language of their choice and framework. (Currently planned Java and Springboot)

![Java SDK](/img/Godspeed-Landscape.jpg)

## Options for the Springboot world

Godspeed can be useful for teams working in any framework or language. They can integrate to Godspeed modules through SDKs in those languages.

### SDK features

- Telemetry
  - Out of box telemetry data collection for distrubuted logging, tracing, monitoring
  - Integrating legacy systems
    can easily be integrated with log4j etc.
  - Custom telemetry for BPM(Business Process Monitoring)
  - Pluggable telemtery sinks/backends(OTEL compliant)
    - Godspeed will provide out of box preconfigured open source telemetry backeneds as an option
- Integration with Godspeed common services: - DB CRUD - Search, suggest & scoring - Data federation (Backend For Frontend) - Notification - Document

### Domain gatway

The [Godspeed domain gateway](http://localhost:3000/docs/microservices/intro#the-gateway-microservice)) provides

- Authorization
- Orchestration
- Distributed transaction
