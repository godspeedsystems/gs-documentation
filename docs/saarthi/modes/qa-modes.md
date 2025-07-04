# QA Modes Documentation

Users should primarily interact with the **QA Lead Engineer** mode. The **QA Document Writer** and **QA Coder** are specialized agents that assist the lead engineer in completing tasks.


---

### QA Lead Engineer

| Aspect          | Details                                                                                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Name**        | `QA Lead Engineer`                                                                                                                                                |
| **Description** | The QA Lead Engineer AI agent assists with QA-related tasks by following provided instructions for each task. This is the primary mode for all QA activities.      |
| **Tool Access** | `read`, `edit`, `browser`, `command`, `mcp`, `modes`                                                                                                              |
| **Ideal For**   | Initiating and managing all QA tasks, such as setting up testing environments and writing test files.                                                               |
| **Special Features** | Orchestrates the QA workflow by delegating tasks to the QA Document Writer and QA Coder modes.                                                              |

---

### QA Document Writer

| Aspect          | Details                                                                                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Name**        | `QA Document Writer`                                                                                                                                              |
| **Description** | The QA Document Writer AI agent is responsible for generating comprehensive and actionable test strategy documents for specific functions, as assigned by the QA Lead Engineer. |
| **Tool Access** | `read`, `edit`, `browser`, `command`, `mcp`, `modes`                                                                                                              |
| **Ideal For**   | Creating detailed unit and functional test strategy documents.                                                                                                    |
| **Special Features** | Follows strict templates and logic to create standardized test strategies. Activated by the QA Lead Engineer.                                                 |

---

### QA Coder

| Aspect          | Details                                                                                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Name**        | `QA Coder`                                                                                                                                                        |
| **Description** | The QA Coder AI agent is responsible for generating high-quality, maintainable test files for specific functions, based on the test strategy provided by the QA Document Writer. |
| **Tool Access** | `read`, `edit`, `browser`, `command`, `mcp`, `modes`                                                                                                              |
| **Ideal For**   | Writing unit and functional test files based on a provided strategy.                                                                                              |
| **Special Features** | Implements test cases, handles mocking, and validates test execution. Activated by the QA Lead Engineer.                                                      |