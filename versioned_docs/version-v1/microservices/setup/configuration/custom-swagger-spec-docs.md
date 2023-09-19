---
sidebar_position: 3
title: 3.3.4 Custom SwaggerSpec Documentation
---

# API Documentation

This documentation provides details about the API for the **Custom Swagger Specification**.

## Swagger Specifications

You can customize the Swagger specifications for this API by creating a JSON file named `swagger.json` in the `/config` directory of your project. If the `swagger.json` file is not present, the default Swagger specification will be used.

### Custom Swagger Specifications

To define custom Swagger specifications, create a JSON file named `swagger.json` in the `/config` directory with the following content:

```json
{
"info": {
  "title": "Sample Pet Store App",
  "summary": "A pet store manager.",
  "description": "This is a sample server for a pet store.",
  "termsOfService": "https://example.com/terms/",
  "contact": {
    "name": "API Support",
    "url": "https://www.example.com/support",
    "email": "support@example.com"
  },
  "license": {
    "name": "Apache 2.0",
    "url": "https://www.apache.org/licenses/LICENSE-2.0.html"
  },
  "version": "1.0.1"
}
}
```
