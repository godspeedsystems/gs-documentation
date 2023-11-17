---
sidebar_position: 1
title: GS-Kit React App
toc_min_heading_level: 2
toc_max_heading_level: 4
---

## Introduction

Godspeed gskit helps you to generate bare metal front-end from OpenAPI/Swagger API spec. An AI agent generates the Front-end Template with API connections in place.

> An Engineering Powered AI Scaffolding agent to help you generate codebase from bare minimum requirements.

Currently we support [React](https://react.dev/).

| Framework | Support     |
| --------- | ----------- |
| React     | ✅          |
| Vue       | Coming Soon |
| Svelte    | Coming Soon |
| Angular   | Coming Soon |
| Vanila JS | Coming Soon |

---

##### Tech Stack For React

* React-Query
* React-Router
* Tailwind

---

##### What you required to run this package

- OpenAI API/Microservice spec, [Link](https://swagger.io/specification/)
- OpenAI/ChatGPT API Secret Key, [Link
  ](https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key)

---


### How to Use
* Install Godspeed GS-Kit by `npm i @godspeedsystems/gskit`
* Go to a directory /root
* create a .env file with these keys

  ```
  OPENAI_API_KEY=sk-xxx
  OPENAI_ORG_KEY=org-xxx
  ```

  > Note: If you dont have `OPENAI_ORG_KEY` then skip it
  >
* run -

  ```
  npx @godspeedsystems/gskit init
  ```
* It will ask you for the location and name of your OpenAPI file.
* AI agent will read the OpenAPI spec and generate a react project with fetch hooks and tailwind configured.
* And Done.

### What you will end up with

* React js application.
* with Tailwind Configured.
* with React Query configured
* Ready for further development.
