---
sidebar_label: Your First Task
---
<!--  import SaarthiIcon from '@site/src/components/SaarthiIcon'; -->

# Starting Your First Task with Saarthi

Now that you've [configured your AI provider and model](connecting-api-provider.md), you're ready to start using Saarthi! This guide walks you through your first interaction.

## Step 1: Open the Saarthi Panel

Click the Saarthi icon in the VS Code Activity Bar (vertical bar on the side of the window) to open the chat interface. If you don't see the icon, verify the extension is installed and enabled.

*The Saarthi icon in the Activity Bar opens the chat interface.*

## Step 2: Type Your Task

Type a clear, concise description of what you want Saarthi to do in the chat box at the bottom of the panel. Examples of effective tasks:

* "Create a file named `hello.txt` containing 'Hello, world!'."
* "Write a Python function that adds two numbers."
* "Create an HTML file for a simple website with the title 'Saarthi test'"

No special commands or syntax needed—just use plain English.

*Enter your task in natural language - no special syntax required.*

## Step 3: Send Your Task

Press Enter or click the Send icon to the right of the input box.

## Step 4: Review and Approve Actions

Saarthi analyzes your request and proposes specific actions. These may include:

* **Reading files:** Shows file contents it needs to access
* **Writing to files:** Displays a diff with proposed changes (added lines in green, removed in red)
* **Executing commands:** Shows the exact command to run in your terminal
* **Using the Browser:** Outlines browser actions (click, type, etc.)
* **Asking questions:** Requests clarification when needed to proceed

*Saarthi shows exactly what action it wants to perform and waits for your approval.*

**Each action requires your explicit approval** (unless auto-approval is enabled):

* **Approve:** Click the "Approve" button to execute the proposed action
* **Reject:** Click the "Reject" button and provide feedback if needed

## Step 5: Iterate

Saarthi works iteratively. After each action, it waits for your feedback before proposing the next step. Continue this review-approve cycle until your task is complete.

*After completing the task, Saarthi shows the final result and awaits your next instruction.*

## Conclusion

You've now completed your first task with Saarthi! Through this process, you've learned:

* How to interact with Saarthi using natural language
* The approval-based workflow that keeps you in control
* The iterative approach Saarthi uses to solve problems step-by-step

This iterative, approval-based workflow is at the core of how Saarthi works—letting AI handle the tedious parts of coding while you maintain complete oversight. Now that you understand the basics, you're ready to tackle more complex tasks, explore different [modes](../basic-usage/using-modes) for specialized workflows, or try the [auto-approval feature](../features/auto-approving-actions) to speed up repetitive tasks.
