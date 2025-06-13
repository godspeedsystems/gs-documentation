import Codicon from '@site/src/components/Codicon';

# Code Actions

Code Actions are a powerful feature of VS Code that provide quick fixes, refactorings, and other code-related suggestions directly within the editor. Saarthi integrates with this system to offer AI-powered assistance for common coding tasks.

## What are Code Actions?

Code Actions appear as a lightbulb icon (💡) in the editor gutter (the area to the left of the line numbers). They can also be accessed via the right-click context menu, or via keyboard shortcut. They are triggered when:

*   You select a range of code.
*   Your cursor is on a line with a problem (error, warning, or hint).
*   You invoke them via command.

Clicking the lightbulb, right-clicking and selecting "Saarthi", or using the keyboard shortcut (`Ctrl+.` or `Cmd+.` on macOS, by default), displays a menu of available actions.

## Saarthi's Code Actions

Saarthi provides the following Code Actions:

*   **Add to Context:** Quickly adds the selected code to your chat with Saarthi, including the filename and line numbers so Saarthi knows exactly where the code is from. It's listed first in the menu for easy access.
*   **Explain Code:** Asks Saarthi to explain the selected code.
*   **Improve Code:** Asks Saarthi to suggest improvements to the selected code.

### Add to Context Deep Dive

The **Add to Context** action is listed first in the Code Actions menu so you can quickly add code snippets to your conversation. When you use it, Saarthi includes the filename and line numbers along with the code.

This helps Saarthi understand the exact context of your code within the project, allowing it to provide more relevant and accurate assistance.

**Example Chat Input:**

```
Can you explain this function?
@myFile.js:15:25
```

*(Where `@myFile.js:15:25` represents the code added via "Add to Context")*

## Using Code Actions

There are three main ways to use Saarthi's Code Actions:

### 1. From the Lightbulb (💡)

1.  **Select Code:** Select the code you want to work with. You can select a single line, multiple lines, or an entire block of code.
2.  **Look for the Lightbulb:** A lightbulb icon will appear in the gutter next to the selected code (or the line with the error/warning).
3.  **Click the Lightbulb:** Click the lightbulb icon to open the Code Actions menu.
4.  **Choose an Action:** Select the desired Saarthi action from the menu.
5.  **Review and Approve:** Saarthi will propose a solution in the chat panel. Review the proposed changes and approve or reject them.

### 2. From the Right-Click Context Menu

1.  **Select Code:** Select the code you want to work with.
2.  **Right-Click:** Right-click on the selected code to open the context menu.
3.  **Choose "Saarthi":** Select the "Saarthi" option from the context menu. A submenu will appear with the available Saarthi actions.
4.  **Choose an Action:** Select the desired action from the submenu.
5.  **Review and Approve:** Saarthi will propose a solution in the chat panel. Review the proposed changes and approve or reject them.

### 3. From the Command Palette

1.  **Select Code:** Select the code you want to work with.
2.  **Open the Command Palette:** Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).
3.  **Type a Command:** Type "Saarthi" to filter the commands, then choose the relevant code action (e.g., "Saarthi: Explain Code"). The action will apply in the most logical context (usually the current active chat task, if one exists).
4.  **Review and Approve:** Saarthi will propose a solution in the chat panel. Review the proposed changes and approve or reject them.

## Customizing Code Action Prompts

You can customize the prompts used for each Code Action by modifying the "Support Prompts" in the **Prompts** tab.  This allows you to fine-tune the instructions given to the AI model and tailor the responses to your specific needs.

1.  **Open the Prompts Tab:** Click the <Codicon name="notebook" /> icon in the Saarthi top menu bar.
2. **Find "Support Prompts":** You will see the support prompts, including "Enhance Prompt", "Explain Code", and "Improve Code".
3. **Edit the Prompts:**  Modify the text in the text area for the prompt you want to customize. You can use placeholders like `${filePath}` and `${selectedText}` to include information about the current file and selection.
4. **Click "Done":** Save your changes.

By using Saarthi's Code Actions, you can quickly get AI-powered assistance directly within your coding workflow. This can save you time and help you write better code.
