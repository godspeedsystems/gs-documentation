# Prisma Plugin Changelog

All notable changes to the `@godspeedsystems/plugins-prisma-as-datastore` plugin will be documented in this file.

---
## v3.0.1

### [3.0.1] – 2025-07-01

### Fixed
- **BigInt Serialization in API Responses**
  - Resolved a critical issue where `BigInt` values returned by Prisma would cause runtime errors during Express `res.send()` operations.
  - Introduced `stringifyData()` utility to recursively convert `BigInt` fields into JSON-safe `string` or `number` types.
  - Prevents service crashes and pod restarts in environments where Prisma returns large integer fields (e.g., PostgreSQL `BIGINT`, `DECIMAL`, `NUMERIC`).

### Impact
- Improves runtime safety of all API responses containing numeric database fields.
- Enhances production resilience and observability.

### Recommended Actions
- Validate fields using `BIGINT`, `DECIMAL`, or `NUMERIC` types for changes in data format (e.g., now serialized as `string` or `number`).
- Review API consumer expectations around number handling.

---

## v3.0.0
### [3.0.0] – 2025-06-24

### Upgraded
- **Prisma Client Version**
  - Upgraded `@prisma/client` from `v5.0.0` → `v6.8.2`.

### Key Enhancements
- Improved support for interactive transactions and middleware enhancements
- Ensures compatibility with `prisma` CLI v6.x.
- Pulls in performance improvements and bug fixes introduced in Prisma 6 series.

### Migration & Upgrade Instructions

#### a. Upgrade Dependencies
Update following package versions in your project's `package.json`:

```bash
 @godspeedsystems/plugins-prisma-as-datastore@1.0.31
 @prisma/client@6.8.2
```
#### b. Regenerate Prisma Client
```
npx prisma generate
```

#### c. Validate Output Format
If your API exposes BIGINT, DECIMAL, or NUMERIC fields, test frontend/client integrations to ensure compatibility with serialized string/number formats.