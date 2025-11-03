
# Redirection Handling (302 Response)

The Godspeed framework now supports **HTTP redirection** using a `302` status code via the `GSStatus` response object.
This is particularly useful in authentication flows or when you need to redirect the client to another URL after certain operations.

## Usage

You can trigger a redirect response from within any Godspeed function or workflow by returning a `GSStatus` object with:

* `success` set to `false` (optional, depending on the logic)
* `statusCode` set to `302`
* a `message` (optional)
* a payload object containing a `redirectUrl` key

## Example

```typescript
import { GSStatus } from "@godspeedsystems/core";

export default async function (ctx, args) {
  const redirectUrl = "https://example.com/login";
  return new GSStatus(
    false,
    302,
    "Error while logging in, please try again later",
    { redirectUrl },
    undefined
  );
}
```

When Godspeed encounters a response with status `302` and a `redirectUrl` key:

* The framework automatically sets the HTTP response status to `302`.
* The client is expected to handle redirection based on the `redirectUrl` value.
* Example response payload:

  ```json
  {
    "success": false,
    "message": "Error while logging in, please try again later",
    "data": {
      "redirectUrl": "https://example.com/login"
    }
  }
  ```
