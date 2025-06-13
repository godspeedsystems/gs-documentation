---
sidebar_label: Keyboard Shortcuts
---

# Keyboard Shortcuts

The Saarthi interface supports keyboard shortcuts to streamline your workflow and reduce dependence on mouse interactions.

## Available Keyboard Commands

Saarthi offers keyboard commands to enhance your workflow. This page focuses on the `saarthi.acceptInput` command, but here's a quick reference to all keyboard commands:

| Command | Description | Default Shortcut |
|---------|-------------|-----------------|
| `saarthi.acceptInput` | Submit text or accept the primary suggestion | None (configurable) |
| `saarthi.focus` | Focus the Saarthi input box | None (configurable) |

### Key Benefits of Keyboard Commands

* **Keyboard-Driven Interface**: Submit text or select the primary suggestion button without mouse interaction
* **Improved Accessibility**: Essential for users with mobility limitations or those who experience discomfort with mouse usage
* **Vim/Neovim Compatibility**: Supports seamless transitions for developers coming from keyboard-centric environments
* **Workflow Efficiency**: Reduces context switching between keyboard and mouse during development tasks

## saarthi.acceptInput Command

The `saarthi.acceptInput` command lets you submit text or accept suggestions with keyboard shortcuts instead of clicking buttons or pressing Enter in the input area.

### What It Does

The `saarthi.acceptInput` command is a general-purpose input submission command. When triggered, it:

- Submits your current text or image input when in the text input area (equivalent to pressing Enter)
- Clicks the primary (first) button when action buttons are visible (such as confirm/cancel buttons or any other action buttons)

### Detailed Setup Guide

#### Method 1: Using the VS Code UI

1. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac)
2. Type "Preferences: Open Keyboard Shortcuts"
3. In the search box, type "saarthi.acceptInput"
4. Locate "Saarthi: Accept Input/Suggestion" in the results
5. Click the + icon to the left of the command
6. Press your desired key combination (e.g., `Ctrl+Enter` or `Alt+Enter`)
7. Press Enter to confirm


#### Method 2: Editing keybindings.json directly

1. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac)
2. Type "Preferences: Open Keyboard Shortcuts (JSON)"
3. Add the following entry to the JSON array:

```json
{
  "key": "ctrl+enter",  // or your preferred key combination
  "command": "saarthi.acceptInput",
  "when": "rooViewFocused"  // This is a context condition that ensures the command only works when Saarthi is focused
}
```

You can also use a more specific condition:
```json
{
  "key": "ctrl+enter",
  "command": "saarthi.acceptInput",
  "when": "webviewViewFocus && webviewViewId == 'saarthi-cline.SidebarProvider'"
}
```

#### Recommended Key Combinations

Choose a key combination that doesn't conflict with existing VS Code shortcuts:

- `Alt+Enter` - Easy to press while typing
- `Ctrl+Space` - Familiar for those who use autocomplete
- `Ctrl+Enter` - Intuitive for command execution
- `Alt+A` - Mnemonic for "Accept"

### Practical Use Cases

#### Quick Development Workflows

- **Text Submission**: Send messages to Saarthi without moving your hands from the keyboard
- **Action Confirmations**: Accept operations like saving files, running commands, or applying diffs
- **Multi-Step Processes**: Move quickly through steps that require confirmation or input
- **Consecutive Tasks**: Chain multiple tasks together with minimal interruption

#### Keyboard-Centric Development

- **Vim/Neovim Workflows**: If you're coming from a Vim/Neovim background, maintain your keyboard-focused workflow
- **IDE Integration**: Use alongside other VS Code keyboard shortcuts for a seamless experience
- **Code Reviews**: Quickly accept suggestions when reviewing code with Saarthi
- **Documentation Writing**: Submit text and accept formatting suggestions when generating documentation

#### Accessibility Use Cases

- **Hand Mobility Limitations**: Essential for users who have difficulty using a mouse
- **Repetitive Strain Prevention**: Reduce mouse usage to prevent or manage repetitive strain injuries
- **Screen Reader Integration**: Works well with screen readers for visually impaired users
- **Voice Control Compatibility**: Can be triggered via voice commands when using voice control software

### Accessibility Benefits

The `saarthi.acceptInput` command was designed with accessibility in mind:

- **Reduced Mouse Dependence**: Complete entire workflows without reaching for the mouse
- **Reduced Physical Strain**: Helps users who experience discomfort or pain from mouse usage
- **Alternative Input Method**: Supports users with mobility impairments who rely on keyboard navigation
- **Workflow Optimization**: Particularly valuable for users coming from keyboard-centric environments like Vim/Neovim

### Keyboard-Centric Workflows

Here are some complete workflow examples showing how to effectively use keyboard shortcuts with Saarthi:

#### Development Workflow Example

1. Open VS Code and navigate to your project
2. Open Saarthi via the sidebar
3. Type your request: "Create a REST API endpoint for user registration"
4. When Saarthi asks for framework preferences, use your `saarthi.acceptInput` shortcut to select the first suggestion
5. Continue using the shortcut to accept code generation suggestions
6. When Saarthi offers to save the file, use the shortcut again to confirm
7. Use VS Code's built-in shortcuts to navigate through the created files

#### Code Review Workflow

1. Select code you want to review and use VS Code's "Copy" command
2. Ask Saarthi to review it: "Review this code for security issues"
3. As Saarthi asks clarifying questions about the code context, use your shortcut to accept suggestions
4. When Saarthi provides improvement recommendations, use the shortcut again to accept implementation suggestions

### Troubleshooting

| Issue | Solution |
|-------|----------|
| Shortcut doesn't work | Ensure Saarthi is focused (click in the Saarthi panel first) |
| Wrong suggestion selected | The command always selects the first (primary) button; use mouse if you need a different option |
| Conflicts with existing shortcuts | Try a different key combination in VS Code keyboard settings |
| No visual feedback when used | This is normal - the command silently activates the function without visual confirmation |
| Shortcut works inconsistently | Make sure the `when` clause is properly configured in your keybindings.json (either `rooViewFocused` or the webview-specific condition) |

### Technical Implementation

The `saarthi.acceptInput` command is implemented as follows:

- Command registered as `saarthi.acceptInput` with display title "Saarthi: Accept Input/Suggestion" in the command palette
- When triggered, it sends an "acceptInput" message to the active Saarthi webview
- The webview determines the appropriate action based on the current UI state:
  - Clicks the primary action button if action buttons are visible and enabled
  - Sends the message if the text area is enabled and contains text/images
- No default key binding - users assign their preferred shortcut

### Limitations

- Works only when the Saarthi interface is active
- Has no effect if no inputs or suggestions are currently available
- Prioritizes the primary (first) button when multiple options are shown