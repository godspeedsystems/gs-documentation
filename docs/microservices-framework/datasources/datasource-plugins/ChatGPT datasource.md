

The ChatGPT plugin for Godspeed allows seamless integration with OpenAI’s language models, enabling dynamic AI-driven responses in your workflows and APIs.


### 1. Install the Plugin

First, add the ChatGPT plugin using

```bash
godspeed plugin add @godspeedsystems/plugins-chatgpt-as-datasource
```

### 2. Set Up Environment Variables

In your `.env` file, add your OpenAI API key to securely access the OpenAI models:

```env
OPENAI_API_KEY="your_openai_api_key"
```
This key is required by the plugin to authenticate with OpenAI.


### 3. Check the Datasource Configuration

Check the file `src/datasources/chatgpt.yaml`:

```yaml
type: chatgpt
model: gpt-4o
temperature: 1
max_tokens: 200
```

* `type`: Must be `chatgpt` to register correctly with Godspeed.
* `model`: The model name to use (e.g., `gpt-4o`, `gpt-4`, `gpt-3.5-turbo`).
* `temperature`: Controls the randomness of the output.
* `max_tokens`: The maximum number of tokens to generate in the completion.


### 4. Define the Event (API Endpoint)

Create the file `src/events/chatgpt_event.yaml` to expose an HTTP POST endpoint for ChatGPT interaction:

```yaml
http.post./chatgpt:
  summary: "Generate response from ChatGPT"
  description: "Endpoint to send a user prompt to ChatGPT and retrieve the AI-generated response."
  fn: prompt
  authn: false
  body:
    content:
      application/json:
        schema:
          type: object
          properties:
            prompt:
              type: string
              description: "The user's prompt or question for ChatGPT to respond to."
          required:
            - prompt
  responses:
    200:
      description: "Successful response from ChatGPT"
      content:
        application/json:
          schema:
            type: string
```
This creates a REST API at `POST /chatgpt`.


### 5. Add the Function Logic

Create the file `src/functions/prompt.ts` for the actual function that interacts with the ChatGPT datasource:

```ts
import { GSContext, GSDataSource, GSStatus } from "@godspeedsystems/core";

export default async function (ctx: GSContext, args: any) {
    const {
        inputs: {
            data: { body }
        }
    } = ctx;
    const prompt = body.prompt;
    const ds: GSDataSource = ctx.datasources.chatgpt;

    const response = await ds.execute(ctx, {
        prompt,
        meta: { method: 'chat' }
    });

    return response;
}
```

* `ctx.datasources.chatgpt`: Loads the plugin's configured datasource.
* `ds.execute(...)`: Invokes the chat method on the ChatGPT API with your prompt.


### 6. Test the Endpoint

Once your Godspeed server is running (`godspeed serve`), you can test the API:

```bash
curl -X POST http://localhost:4000/chatgpt \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Explain quantum computing in simple terms."}'
```

You should receive a response directly from the ChatGPT model as JSON.

### 7. Notes

* ✅ **No manual axios or fetch setup** needed — the plugin handles it.
* ✅ You can adjust temperature, model, and tokens in `chatgpt.yaml`.
* ✅ Extend the plugin with retry logic, caching, or prompt templates using standard Godspeed techniques.

---
### Summary

| File                            | Purpose                            |
| ------------------------------- | ---------------------------------- |
| `.env`                          | Stores your OpenAI API key         |
| `src/datasources/chatgpt.yaml`  | Datasource config for the plugin   |
| `src/events/chatgpt_event.yaml` | HTTP API event to invoke ChatGPT   |
| `src/functions/prompt.ts`       | Function that calls OpenAI’s model |

---