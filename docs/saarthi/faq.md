import SaarthiIcon from '@site/src/components/SaarthiIcon';

# Frequently Asked Questions

This page answers some common questions about Saarthi.

## General

### What is Saarthi?

Saarthi is an AI-powered autonomous coding agent that lives in your editor.

### How does Saarthi work?

Saarthi uses large language models (LLMs) to understand your requests and translate them into actions.  It can:

*   Read and write files in your project.
*   Execute commands in your VS Code terminal.
*   Perform web browsing (if enabled).
*   Use external tools via the Model Context Protocol (MCP).

You interact with Saarthi through a chat interface, where you provide instructions and review/approve its proposed actions.

### What can Saarthi do?

Saarthi can help with a variety of coding tasks, including:

*   Generating code from natural language descriptions.
*   Refactoring existing code.
*   Fixing bugs.
*   Writing documentation.
*   Explaining code.
*   Answering questions about your codebase.
*   Automating repetitive tasks.
*   Creating new files and projects.

### Is Saarthi free to use?

The Saarthi extension itself is free and open-source. However, Saarthi relies on external API providers (like [Anthropic](providers/anthropic), [OpenAI](providers/openai), [OpenRouter](providers/openrouter), [Requesty](providers/requesty), etc.) for its AI capabilities.  These providers typically charge for API usage based on the number of tokens processed.  You will need to create an account and obtain an API key from your chosen provider.  See [Setting Up Your First AI Provider](getting-started/connecting-api-provider) for details.

### What are the risks of using Saarthi?

Saarthi is a powerful tool, and it's important to use it responsibly.  Here are some things to keep in mind:

*   **Saarthi can make mistakes.**  Always review Saarthi's proposed changes carefully before approving them.
*   **Saarthi can execute commands.**  Be very cautious about allowing Saarthi to run commands, especially if you're using auto-approval.
*   **Saarthi can access the internet.** If you're using a provider that supports web browsing, be aware that Saarthi could potentially access sensitive information.

## Setup & Installation

### How do I install Saarthi?

See the [Installation Guide](/getting-started/installing) for detailed instructions.

### Which API providers are supported?

Saarthi supports a wide range of API providers, including:
*   [Anthropic (Claude)](/providers/anthropic)
*   [OpenAI](/providers/openai)
*   [OpenRouter](/providers/openrouter)
*   [Google Gemini](/providers/gemini)
*   [Glama](/providers/glama)
*   [AWS Bedrock](/providers/bedrock)
*   [GCP Vertex AI](/providers/vertex)
*   [Ollama](/providers/ollama)
*   [LM Studio](/providers/lmstudio)
*   [DeepSeek](/providers/deepseek)
*   [Mistral](/providers/mistral)
*   [Unbound](/providers/unbound)
*   [Requesty](/providers/requesty)
*   [VS Code Language Model API](/providers/vscode-lm)

### How do I get an API key?
Each API provider has its own process for obtaining an API key.  See the [Setting Up Your First AI Provider](/getting-started/connecting-api-provider) for links to the relevant documentation for each provider.

### Can I use Saarthi with local models?
Yes, Saarthi supports running models locally using [Ollama](/providers/ollama) and [LM Studio](/providers/lmstudio).  See [Using Local Models](/advanced-usage/local-models) for instructions.

## Usage

### How do I start a new task?
Open the Saarthi panel (<SaarthiIcon />) and type your task in the chat box. Be clear and specific about what you want Saarthi to do. See [Typing Your Requests](/basic-usage/typing-your-requests) for best practices.

### What are modes in Saarthi?
[Modes](/basic-usage/using-modes) are different personas that Saarthi can adopt, each with a specific focus and set of capabilities. The built-in modes are:

*   **Code:** For general-purpose coding tasks.
*   **Architect:** For planning and technical leadership.
*   **Ask:** For answering questions and providing information.
*   **Debug:** For systematic problem diagnosis.
You can also create [Custom Modes](/features/custom-modes).

### How do I switch between modes?

Use the dropdown menu in the chat input area to select a different mode, or use the `/` command to switch to a specific mode.

### What are tools and how do I use them?
[Tools](/basic-usage/how-tools-work) are how Saarthi interacts with your system.  Saarthi automatically selects and uses the appropriate tools to complete your tasks. You don't need to call tools directly. You will be prompted to approve or reject each tool use.

### What are context mentions?
[Context mentions](/basic-usage/context-mentions) are a way to provide Saarthi with specific information about your project, such as files, folders, or problems. Use the "@" symbol followed by the item you want to mention (e.g., `@/src/file.ts`, `@problems`).

### Can Saarthi access the internet?

Yes, if you are using a provider with a model that support web browsing. Be mindful of the security implications of allowing this.

### Can Saarthi run commands in my terminal?

Yes, Saarthi can execute commands in your VS Code terminal.  You will be prompted to approve each command before it's executed, unless you've enabled auto-approval for commands. Be extremely cautious about auto-approving commands. If you're experiencing issues with terminal commands, see the [Shell Integration Guide](/features/shell-integration) for troubleshooting.

### How do I provide feedback to Saarthi?

You can provide feedback by approving or rejecting Saarthi's proposed actions. You can provide additional feedback by using the feedback field.

### Can I customize Saarthi's behavior?

Yes, you can customize Saarthi in several ways:

*   **Custom Instructions:** Provide general instructions that apply to all modes, or mode-specific instructions.
*   **Custom Modes:** Create your own modes with tailored prompts and some tool permissions.
*   **`.saarthirules` Files:** Create `.saarthirules` files in your project to provide additional guidelines.
*   **Settings:** Adjust various settings, such as auto-approval, diff editing, and more.

### Does Saarthi have any auto approval settings?
Yes, Saarthi has a few settings that when enabled will automatically approve actions. Find out more [here](/features/auto-approving-actions).

## Advanced Features

### Can I use saarthi offline?
Yes, if you use a [local model](/advanced-usage/local-models).

### What is MCP (Model Context Protocol)?
[MCP](/features/mcp/overview) is a protocol that allows Saarthi to communicate with external servers, extending its capabilities with custom tools and resources.

### Can I create my own MCP servers?

Yes, you can create your own MCP servers to add custom functionality to Saarthi. See the [MCP documentation](https://github.com/modelcontextprotocol) for details.

### What is Codebase Indexing?

[Codebase Indexing](/features/experimental/codebase-indexing) is an experimental feature that creates a semantic search index of your project using AI embeddings. This enables Saarthi to better understand and navigate large codebases by finding relevant code based on meaning rather than just keywords.

### How much does Codebase Indexing cost?

Codebase Indexing requires an OpenAI API key for generating embeddings and a Qdrant vector database for storage. Costs depend on your project size and the embedding model used. Initial indexing is the most expensive part; subsequent updates are incremental and much cheaper.

## Troubleshooting

### Saarthi isn't responding. What should I do?

*   Make sure your API key is correct and hasn't expired.
*   Check your internet connection.
*   Check the status of your chosen API provider.
*   Try restarting VS Code.
*   If the problem persists, report the issue on [GitHub](https://github.com/RooCodeInc/Roo-Code/issues) or [Discord](https://discord.gg/saarthi).

### I'm seeing an error message. What does it mean?

The error message should provide some information about the problem. If you're unsure how to resolve it, seek help in [Discord](https://discord.gg/saarthi).

### Saarthi made changes I didn't want. How do I undo them?

Saarthi uses VS Code's built-in file editing capabilities.  You can use the standard "Undo" command (Ctrl/Cmd + Z) to revert changes. Also, if experimental checkpoints are enabled, Roo can revert changes made to a file.

### Saarthi can't write to markdown files. What's wrong?

If Saarthi fails to write to `.md` files with errors like "Failed to open diff editor" or "write_to_file tool failed", this is typically caused by VS Code extensions or settings that interfere with file editing:

**Common causes:**
- Extensions with "format on save" functionality
- VS Code settings that open markdown files in preview mode by default
- The Markdown Preview extension or similar markdown processing extensions

**Solutions:**
- Disable any extensions that automatically format files on save
- Remove these settings from your VS Code `settings.json`:
  ```json
  "markdown.preview.openMarkdownLinks": "inPreview",
  "workbench.editorAssociations": {
    "*.md": "vscode.markdown.preview.editor"
  }
  ```
- Temporarily disable markdown-related extensions to test if they're causing the issue
- Restart VS Code after making these changes

### How do I report a bug or suggest a feature?

Please report bugs or suggest features on the Saarthi [Issues page](https://github.com/RooCodeInc/Roo-Code/issues) and [Feature Requests page](https://github.com/RooCodeInc/Roo-Code/discussions/categories/feature-requests?discussions_q=is%3Aopen+category%3A%22Feature+Requests%22+sort%3Atop).
