import Codicon from '@site/src/components/Codicon';

# Terminal Shell Integration

Terminal Shell Integration is a key feature that enables Saarthi to execute commands in your terminal and intelligently process their output. This bidirectional communication between the AI and your development environment unlocks powerful automation capabilities.

## What is Shell Integration?

Shell integration is automatically enabled in Saarthi and connects directly to your terminal's command execution lifecycle without requiring any setup from you. This built-in feature allows Saarthi to:

- Execute commands on your behalf through the [`execute_command`](/advanced-usage/available-tools/execute-command) tool
- Read command output in real-time without manual copy-pasting
- Automatically detect and fix errors in running applications
- Observe command exit codes to determine success or failure
- Track working directory changes as you navigate your project
- React intelligently to terminal output without user intervention
- Stop running commands directly from the chat interface using the stop button that appears next to the command execution message.

![Stop Command Button in Chat UI](/img/v3.15/v3.15.png)

When you ask Saarthi to perform tasks like installing dependencies, starting a development server, or analyzing build errors, shell integration works behind the scenes to make these interactions smooth and effective.

## Troubleshooting Shell Integration

Shell integration is built into Saarthi and works automatically in most cases. If you see "Shell Integration Unavailable" messages or experience issues with command execution, try these solutions:

1. **Update VSCode/Cursor** to the latest version (VSCode 1.93+ required)
2. **Ensure a compatible shell is selected**: Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) → "Terminal: Select Default Profile" → Choose bash, zsh, PowerShell, or fish
3. **Windows PowerShell users**: Run `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` then restart VSCode
4. **WSL users**: Add `. "$(code --locate-shell-integration-path bash)"` to your `~/.bashrc`

## Command Execution Fallback

Saarthi has a fallback mechanism for executing commands. This is most relevant if you have chosen to use VS Code's terminal integration (by UNCHECKING the [`Disable terminal shell integration`](#disable-terminal-shell-integration) setting) and that integration then fails.

- **How it works**: If Saarthi is configured to use VS Code's terminal integration but cannot connect or encounters issues, it may automatically attempt to execute the command directly using a background process. This is a fallback to ensure the command still attempts to run.
- **Notification**: You might see a notification in the chat if this fallback is used, indicating that the command is running without the full features of either Saarthi's inline terminal or VS Code's shell integration (e.g., real-time output streaming or precise exit code detection might be limited).
![Command execution fallback notification example](/img/v3.15.0/v3.15.0.png)

- **Resolution**: If you encounter this fallback, it typically indicates an issue with your VS Code shell integration setup. Review the troubleshooting steps in this document or consider using Saarthi's recommended inline terminal by ensuring the [`Disable terminal shell integration`](#disable-terminal-shell-integration) setting is CHECKED.

![Saarthi's recommended inline terminal in action](/img/shell-integration/shell-integration-12.png)
*Example of Saarthi's recommended inline terminal.*


## Terminal Integration Settings

Saarthi provides settings to fine-tune how it interacts with terminals. To access these settings:
1. Click the <Codicon name="gear" /> icon in the top-right corner of the Saarthi sidebar.
2. In the settings pane that opens, select the "Terminal" group from the left-hand menu.

### Basic Settings

#### Terminal Output Limit
![Terminal output limit slider set to 500](/img/shell-integration/shell-integration.png)
This setting controls how much output Saarthi captures from your commands. Consider lowering it if you're concerned about token usage or if Saarthi seems slow processing very long outputs (you'll still get the beginning and end). Consider increasing it if you frequently need more middle content from long commands directly in Saarthi's context, but be mindful of potential token costs. Default: 500 lines.

#### Compress progress bar output
![Compress progress bar output checkbox](/img/shell-integration/shell-integration-10.png)
Keep this enabled (default) for cleaner output and token savings. It makes Saarthi process dynamic output like progress bars or spinners more like a real terminal, showing only the final state. Disable this only in rare cases where you specifically need to debug the intermediate, raw output of a progress bar or similar dynamic display.

### Advanced Settings

:::info Important
**Terminal restart required for these settings**

Changes to advanced terminal settings only take effect after restarting your terminals. To restart a terminal:

1. Click the trash icon in the terminal panel to close the current terminal
2. Open a new terminal with Terminal → New Terminal or <kbd>Ctrl</kbd>+<kbd>`</kbd> (backtick)

Always restart all open terminals after changing any of these settings.
:::

#### Inherit environment variables
![Inherit environment variables checkbox](/img/shell-integration/shell-integration-11.png)
This setting controls whether Saarthi's terminal sessions use the same environment variables (like `PATH`, API keys, etc.) as your main VSCode/Cursor environment. It directly mirrors the VSCode global setting [`terminal.integrated.inheritEnv`](https://code.visualstudio.com/docs/editor/integrated-terminal#_inherit-environment-variables). Keep this enabled (default for VSCode) if you want Saarthi commands to operate with the same context and tools available in your regular VSCode terminal. Consider disabling it only if you need a completely clean, isolated environment for Saarthi's terminal tasks or are troubleshooting complex environment variable conflicts.

### Runtime Environment
On macOS (and possibly other operating systems) the environment provided to VSCode, and consequently Saarthi, can differ depending on how VSCode is launched.  
If launched from the command line `vscode` command, VSCode and Saarthi will inherit the environment from the shell that launched it, and all will (usually) be well.
If launched from the Finder, Dock, or Spotlight, environment exported from `.zshrc`, or `.zprofile` will likely be missing.  If you have environment variables set in one of those files, and find they are missing when running VSCode, move them to .zshenv, and log out and back in again, so the window manager will pick up the new environment settings.

#### Disable terminal shell integration
![Disable terminal shell integration checkbox](/img/shell-integration/shell-integration-9.png)
This setting determines how Saarthi executes terminal commands.
-   **Keep this checkbox CHECKED (recommended):** Saarthi will execute commands using its built-in inline terminal, displaying output directly within the chat interface. This method is generally robust, provides clear output, and is the preferred way for most users to interact with terminal commands through Saarthi. It ensures commands run in a consistent environment managed by Saarthi.

    ![Saarthi's inline terminal with 'Disable terminal shell integration' CHECKED](/img/shell-integration/shell-integration-12.png)
    *Saarthi's inline terminal, active when "Disable terminal shell integration" is CHECKED.*

-   **UNCHECK this checkbox (to use VS Code's terminal integration):** Saarthi will attempt to run commands directly within your active VS Code terminal panel. This alternative method might be useful for specific edge cases where you explicitly need commands to run within your fully customized VS Code shell environment or require interaction with the VS Code terminal's specific features for a command. However, this can sometimes be less reliable depending on your shell setup and VS Code version.

The following settings are advanced options that apply **only if you have UNCHECKED 'Disable terminal shell integration'** (choosing to use VS Code's terminal integration instead of Saarthi's recommended inline terminal):

##### Terminal shell integration timeout
![Terminal shell integration timeout slider set to 15s](/img/shell-integration/shell-integration-1.png)
If shell integration is enabled but you still see 'Shell Integration Unavailable,' especially with complex shell setups (e.g., Zsh with many plugins, or a slow-loading corporate environment), your shell might be taking too long to initialize. Increase this value to give your shell more time to signal its readiness to Saarthi. Try increments of 5-10 seconds. Default: 15s (as shown in UI).

##### Terminal command delay
![Terminal command delay slider set to 0ms](/img/shell-integration/shell-integration-2.png)
If command output appears incomplete or Saarthi seems to miss the end of a command's output (even with shell integration enabled), a small delay might help. Introduce a small delay (e.g., 50ms or 100ms). This gives the terminal more time to flush all output before Saarthi considers the command complete. This is a workaround for potential timing issues in VSCode's terminal or certain shells (see VSCode bug [#237208](https://github.com/microsoft/vscode/issues/237208)). Default: 0ms.

##### Enable PowerShell counter workaround
![Enable PowerShell counter workaround checkbox](/img/shell-integration/shell-integration-3.png)
Specific to PowerShell users. Enable this if you find Saarthi struggles to run the *exact same PowerShell command multiple times in a row*, or if output capture from PowerShell commands is unreliable. This adds a unique counter to commands to help PowerShell differentiate them.

##### Clear ZSH EOL mark
![Clear ZSH EOL mark checkbox](/img/shell-integration/shell-integration-4.png)
Specific to Zsh users. Zsh sometimes adds a special character (often `%`) at the end of a line if it doesn't end with a newline. Enable this if Saarthi seems to misinterpret or get confused by the output of Zsh commands, particularly if the last line of output appears to include an unexpected character. This attempts to remove that marker (`PROMPT_EOL_MARK=''`).

##### Enable Oh My Zsh integration
![Enable Oh My Zsh integration checkbox](/img/shell-integration/shell-integration-5.png)
For users of the popular Oh My Zsh framework for Zsh. Enable this if you use Oh My Zsh and experience general issues with terminal command execution or output rendering that aren't solved by other settings. This helps Saarthi align with Oh My Zsh's specific shell integration mechanisms by setting `ITERM_SHELL_INTEGRATION_INSTALLED=Yes`. Restarting the IDE might be necessary.

##### Enable Powerlevel10k integration
![Enable Powerlevel10k integration checkbox](/img/shell-integration/shell-integration-6.png)
For users of the Powerlevel10k theme for Zsh. Enable this if your Powerlevel10k prompt (which can be quite complex) seems to interfere with Saarthi's ability to correctly detect command boundaries, parse output, or track the current working directory. This sets `POWERLEVEL9K_TERM_SHELL_INTEGRATION=true`.

##### Enable ZDOTDIR handling
![Enable ZDOTDIR handling checkbox](/img/shell-integration/shell-integration-7.png)
An advanced option for Zsh users with customized Zsh startup file locations. Enable this if you use `ZDOTDIR` to specify a custom directory for your Zsh configuration files (like `.zshrc`). This setting helps Saarthi work correctly with such setups by creating an isolated, temporary `ZDOTDIR` for its own integration scripts, preventing conflicts with your personal Zsh environment.

![Fish Cygwin Integration Example](/img/shell-integration/shell-integration-8.png)

## Troubleshooting Resources

### Checking Debug Logs
When shell integration issues occur, check the debug logs:
1. Open Help → Toggle Developer Tools → Console
2. Set "Show All Levels" to see all log messages
3. Look for messages containing `[Terminal Process]`
4. Check `preOutput` content in error messages:
   - Empty preOutput (`''`) means VSCode sent no data
   - This indicates a potential VSCode shell integration issue, or an upstream bug that is out of our control
   - The absence of shell integration markers may require adjusting settings to work around possible upstream bugs or local workstation configuration issues related to shell initialization and VSCode's loading of special shell integration hooks

### Using the VSCode Terminal Integration Test Extension
The [VSCode Terminal Integration Test Extension](https://github.com/KJ7LNW/vsce-test-terminal-integration) helps diagnose shell integration issues by testing different settings combinations:


1. **When Commands Stall**:
   - If you see "command already running" warnings, click "Reset Stats" to reset the terminal state
   - These warnings indicate shell integration is not working
   - Try different settings combinations until you find one that works
   - If it really gets stuck, restart the extension by closing the window and pressing F5

2. **Testing Settings**:
   - Systematically try different combinations of:
     * Terminal Command Delay
     * Shell Integration settings
   - Document which combinations succeed or fail
   - This helps identify patterns in shell integration issues

3. **Reporting Issues**:
   - Once you find a problematic configuration
   - Document the exact settings combination
   - Note your environment (OS, VSCode version, shell, and any shell prompt customization)
   - Open an issue with these details to help improve shell integration

### Additional Resources

- [VSCode Terminal Output Issue #237208](https://github.com/microsoft/vscode/issues/237208)
- [VSCode Terminal Integration Test Repository](https://github.com/KJ7LNW/vsce-test-terminal-integration)
<!-- - [Saarthi Shell Integration Architecture PR](https://github.com/godspeedsystems/Saarthi/pull/1365) -->

## Support

If you're still having issues:

1. Check [Saarthi GitHub Issues](https://github.com/godspeedsystems/Saarthi/issues)
2. Create a new issue with:
   - OS and VSCode version
   - Shell type
   - Steps to reproduce
   - Error messages


