# Code- Godspeed

| Aspect | Details |
|--------|---------|
| **Name** | `⚡ Code-Godspeed` |
| **Description** | A Godspeed meta-framework expert with deep knowledge of microservices architecture, distributed scalable enterprise grade systems and industry wide best practices |
| **Tool Access** | Full access to all tool groups: `read`, `edit`, `browser`, `command`, `mcp` |
| **Ideal For** | Developing and managing Godspeed applications, microservices architecture, and enterprise-grade systems |
| **Special Features** | Optimized for Godspeed framework development, providing access to Godspeed-specific tools and knowledge **Context-Aware Intelligence via RAG Integration**- fetches relevant information from vector databases, allowing precise answers contextualized to the user's codebase and documentation. |
---

### Activate Code-Godspeed Mode

**Code-Godspeed Mode** enables **retrieval-augmented generation (RAG)** powered by your codebase, docs, and the **Godspeed Systems framework** — delivering **production-grade microservices with embedded best practices and architectural guardrails**.

### Connect to the RAG-node MCP Server

To use this mode:

1. Open Saarthi’s **MCP Settings** (top-right of Saarthi pane).
2. Scroll down and click:
   * **Edit Global MCP** → Opens global `mcp_settings.json`.
3. Add your **Gemini API key** under the `env` block of the RAG-node server config:

```json
"RAG-node": {
    "type": "stdio",
    "command": "npx",
    "args": [
    "-y",
    "@godspeedsystems/rag-node"
    ],
    "disabled": false,
    "cwd": "/path/to/home/directory",
    "alwaysAllow": [
    "*"
    ],
    "env": {
    "GOOGLE_API_KEY": "YOUR_GEMINI_API_KEY"   // Add your Gemini API Key here
    }
}
```
🔗 [Get your Gemini API Key](https://makersuite.google.com/app/apikey)

### What Happens Next?

Once connected:

* Saarthi uses `mcp.handle-query` to forward your queries to the **RAG-node**.
* The node uses **FAISS vector search** + **Gemini embeddings** to:
  * Retrieve precise, source-traceable information.
  * Auto-generate config, functions, events, and workflows.
  * Provide *real-time guidance* aligned with Godspeed's architecture.

⚠️ *Currently supports only Google Gemini for embeddings.*
