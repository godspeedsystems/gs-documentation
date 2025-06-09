---
title: About Authentication
description: Overview of authentication in Godspeed, including confirming identity and delegating authentication to individual eventsource plugins.
keywords: [Godspeed, authentication, identity, eventsource, plugin, JWT, OAuth2]
---
# About Authentication

Authentication is the process of confirming the identity of an individual, system, or entity. It involves verifying that the entity attempting to access a system or resource is indeed who or what it claims to be. In case of the API and event driven architecture realm, we need to know the user who is trying to access the system. _Who is this user?_

Following separation of concerns (or decoupling) as a first principle, the job of authentication and loading the user information is delegated to individual eventsource plugins as part of their native `middleware` capability. Here you may use JWT, Auth0, OAuth2, Keycloak etc. as per your requirement.

The currently supported Express, Fastify and Apollo Graphql [plugins](https://github.com/godspeedsystems/gs-plugins) support JWT and OAuth2 authentication out of the box. In case you need to customize, you can copy the code from our plugins repository and modify that to suit your purpose.

