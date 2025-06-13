---
sidebar_label: OpenAI Compatible
---
import Codicon from '@site/src/components/Codicon';


# Using OpenAI Compatible Providers With Saarthi

Saarthi supports a wide range of AI model providers that offer APIs compatible with the OpenAI API standard. This means you can use models from providers *other than* OpenAI, while still using a familiar API interface.  This includes providers like:

*   **Local models** running through tools like Ollama and LM Studio (covered in separate sections).
*   **Cloud providers** like Perplexity, Together AI, Anyscale, and others.
*   **Any other provider** offering an OpenAI-compatible API endpoint.

This document focuses on setting up providers *other than* the official OpenAI API (which has its own [dedicated configuration page](/providers/openai)).

## General Configuration

The key to using an OpenAI-compatible provider is to configure two main settings:

1.  **Base URL:** This is the API endpoint for the provider.  It will *not* be `https://api.openai.com/v1` (that's for the official OpenAI API).
2.  **API Key:**  This is the secret key you obtain from the provider.
3.  **Model ID:** This is the model name of the specific model.

You'll find these settings in the Saarthi settings panel (click the <Codicon name="gear" /> icon):

*   **API Provider:** Select "OpenAI Compatible".
*   **Base URL:** Enter the base URL provided by your chosen provider.  **This is crucial.**
*   **API Key:** Enter your API key.
*   **Model:** Choose a model.
*   **Model Configuration:** This lets you customize advanced configuration for the model
    - Max Output Tokens
    - Context Window
    - Image Support
    - Computer Use
    - Input Price
    - Output Price

## Supported Models (for OpenAI Native Endpoint)

While this provider type allows connecting to various endpoints, if you are connecting directly to the official OpenAI API (or an endpoint mirroring it exactly), Saarthi recognizes the following model IDs based on the `openAiNativeModels` definition in its source code:

*   `o3-mini`
*   `o3-mini-high`
*   `o3-mini-low`
*   `o1`
*   `o1-preview`
*   `o1-mini`
*   `gpt-4.5-preview`
*   `gpt-4o`
*   `gpt-4o-mini`

**Note:** If you are using a different OpenAI-compatible provider (like Together AI, Anyscale, etc.), the available model IDs will vary. Always refer to your specific provider's documentation for their supported model names.

## Troubleshooting

*   **"Invalid API Key":** Double-check that you've entered the API key correctly.
*   **"Model Not Found":** Make sure you're using a valid model ID for your chosen provider.
*   **Connection Errors:** Verify the Base URL is correct and that your provider's API is accessible.
*   **Unexpected Results:** If you're getting unexpected results, try a different model.

By using an OpenAI-compatible provider, you can leverage the flexibility of Saarthi with a wider range of AI models. Remember to always consult your provider's documentation for the most accurate and up-to-date information.
