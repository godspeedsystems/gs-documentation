---
title: Definitions
description: Use `Definitions/` to create reusable YAML-based schema parts. Reference them via `$ref` using JSON Pointer notation. They function similarly to OpenAPI `components`. They reduce duplication and simplify maintenance across large API designs.
keywords: [API schema definitions]
---

# Reuse `Definitions` using $ref

In **Godspeed**, when defining your HTTP events and their payload schemas, you often come across syntax like this:

```yaml
body:
  content:
    application/json:
      schema:
        $ref: "#/definitions/mongo/BusinessProfile"
```
This usage aligns with how **OpenAPI** refers to **component schemas**, but with Godspeed’s internal structure for reusability.


## What is `#/definitions/...`?

The '#/definitions/...' notation is a **JSON Pointer** used for referencing reusable schemas within your project. It behaves just like '#/components/schemas/...' in OpenAPI 3.0 and enables you to keep your API definitions modular and DRY (Don’t Repeat Yourself).


## Location: Where Definitions Live

Godspeed uses the `src/definitions` folder to store all reusable components:

```
src/
├── definitions/
│   ├── mongo/
│   │   └── BusinessProfile.yaml
│   └── shared/
│       └── ErrorResponse.yaml
```

Each `.yaml` file under this folder defines a schema, parameter, response, or other reusable piece of the OpenAPI spec.

---

## Sample Usage

Given a schema like this in `definitions/mongo/BusinessProfile.yaml`:

```yaml
type: object
properties:
  businessId:
    type: string
  name:
    type: string
required:
  - businessId
  - name
```

You can reference it in an event:

```yaml
http.post./business:
  fn: createBusiness
  body:
    content:
      application/json:
        schema:
          $ref: "#/definitions/mongo/BusinessProfile"
```

This connects your event’s body schema to the reusable definition.

However, **definitions themselves do not affect your API** unless they are explicitly referenced in event or function specifications.

---

* Think of `definitions` as a toolbox — its content only matters when you pick and use the tools elsewhere.
* Definitions are **not automatically included** in operations.
* They **must be referenced** via `$ref`.
* They are useful to prevent duplication and improve maintainability.
---

## Analogy with OpenAPI `components`

| OpenAPI Section            | Godspeed Equivalent         |
| -------------------------- | --------------------------- |
| `components.schemas`       | `/definitions/...` files    |
| `$ref: "#/components/..."` | `$ref: "#/definitions/..."` |




