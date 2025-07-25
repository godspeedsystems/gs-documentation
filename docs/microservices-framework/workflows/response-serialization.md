---
title: Response Serialization
---
# Response Serialization (Framework-level)

Godspeed automatically sanitizes the event handler's response (GSStatus) to ensure it can be safely serialized and returned in HTTP or cloud event responses. 
This prevents errors such as:

```
TypeError: Do not know how to serialize a BigInt
```

### What Is Handled Automatically
If your handler or datasource returns non-JSON-serializable types, Godspeed will:

- ✅ Convert BigInt to string

- ✅ Convert Date to ISO strings

- ✅ Convert Function to [Function]

- ✅ Convert Symbol to .toString()

- ✅ Deep sanitize nested arrays and objects

This ensures the response can be safely sent via `res.send() / res.json()` without crashing the app or triggering CORS issues.

### Before:
If you returned:

```
return new GSStatus(true, 200, undefined, { id: 123n });
```
It would crash with a serialization error.

### Now:
Godspeed automatically transforms it to:

```
{ "id": "123456111" }
```

### ⚠️ Note for Plugin/Custom Datasource Developers:
If you are implementing your own datasource plugins or custom responses, you do not need to manually sanitize BigInt or Date in your returned data. The framework handles this for you.

However, if you want to preserve original types (e.g., rehydrating BigInt on the frontend), you may need to use a custom serializer like superjson.

### Additional Notes for Prisma users

#### Handling BigInt in Responses
In previous versions, you may have needed to manually convert BigInt values to strings. With the new framework-level serialization layer, this is no longer required.

Godspeed automatically ensures responses are safe to serialize, including Prisma query results that contain BigInt.

