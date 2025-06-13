---
sidebar_label: LM Studio
---
import Codicon from '@site/src/components/Codicon';


# Using LM Studio With Saarthi

Saarthi supports running models locally using LM Studio.  LM Studio provides a user-friendly interface for downloading, configuring, and running local language models.  It also includes a built-in local inference server that emulates the OpenAI API, making it easy to integrate with Saarthi.

**Website:** [https://lmstudio.ai/](https://lmstudio.ai/)

## Setting Up LM Studio

1.  **Download and Install LM Studio:** Download LM Studio from the [LM Studio website](https://lmstudio.ai/).
2.  **Download a Model:**  Use the LM Studio interface to search for and download a model.  Some recommended models include:
    *   CodeLlama models (e.g., `codellama:7b-code`, `codellama:13b-code`, `codellama:34b-code`)
    *   Mistral models (e.g., `mistralai/Mistral-7B-Instruct-v0.1`)
    *   DeepSeek Coder models (e.g., `deepseek-coder:6.7b-base`)
    * Any other model that is supported by Saarthi, or for which you can set the context window.

    Look for models in the GGUF format.  LM Studio provides a search interface to find and download models.
3.  **Start the Local Server:**
    *   Open LM Studio.
    *   Click the **"Local Server"** tab (the icon looks like `<->`).
    *   Select the model you downloaded.
    *   Click **"Start Server"**.

## Configuration in Saarthi

1.  **Open Saarthi Settings:** Click the gear icon (<Codicon name="gear" />) in the Saarthi panel.
2.  **Select Provider:** Choose "LM Studio" from the "API Provider" dropdown.
3.  **Enter Model ID:** Enter the *file name* of the model you loaded in LM Studio (e.g., `codellama-7b.Q4_0.gguf`).  You can find this in the LM Studio "Local Server" tab.
4.  **(Optional) Base URL:**  By default, Saarthi will connect to LM Studio at `http://localhost:1234`.  If you've configured LM Studio to use a different address or port, enter the full URL here.

## Tips and Notes

*   **Resource Requirements:** Running large language models locally can be resource-intensive. Make sure your computer meets the minimum requirements for the model you choose.
*   **Model Selection:**  LM Studio provides a wide range of models.  Experiment to find the one that best suits your needs.
*   **Local Server:**  The LM Studio local server must be running for Saarthi to connect to it.
*   **LM Studio Documentation:** Refer to the [LM Studio documentation](https://lmstudio.ai/docs) for more information.
*   **Troubleshooting:** If you see a "Please check the LM Studio developer logs to debug what went wrong" error, you may need to adjust the context length settings in LM Studio.
*   **Token Tracking:** Saarthi tracks token usage for models run via LM Studio, helping you monitor consumption.
*   **Reasoning Support:** For models that support it, Saarthi can parse "think" tags or similar reasoning indicators in LM Studio responses, offering more insight into the model's process.
