
# read_file

The `read_file` tool examines the contents of files in a project. It allows Saarthi to understand code, configuration files, and documentation to provide better assistance.

:::info Multi-File Support
When the [Concurrent File Reads](../../features/experimental/concurrent-file-reads) experimental feature is enabled, this tool can read multiple files simultaneously using an enhanced XML parameter format. This significantly improves efficiency for tasks requiring analysis of multiple related files.
:::

## Parameters

The tool accepts parameters in two formats depending on your configuration:

### Standard Format (Single File)

- `path` (required): The path of the file to read relative to the current working directory
- `start_line` (optional): The starting line number to read from (1-based indexing)
- `end_line` (optional): The ending line number to read to (1-based, inclusive)

### Enhanced Format (Multi-File - Experimental)

When [Concurrent File Reads](../../features/experimental/concurrent-file-reads) is enabled, the tool accepts an `args` parameter containing multiple file entries:

- `args` (required): Container for multiple file specifications
  - `file` (required): Individual file specification
    - `path` (required): The path of the file to read
    - `lines` (optional): Line range specification (e.g., "1-50" or "100-150")

## What It Does

This tool reads the content of a specified file and returns it with line numbers for easy reference. It can read entire files or specific sections, and even extract text from PDFs and Word documents.

## When is it used?

- When Saarthi needs to understand existing code structure
- When Saarthi needs to analyze configuration files
- When Saarthi needs to extract information from text files
- When Saarthi needs to see code before suggesting changes
- When specific line numbers need to be referenced in discussions

## Key Features

- Displays file content with line numbers for easy reference
- Can read specific portions of files by specifying line ranges
- Extracts readable text from PDF and DOCX files
- Automatically truncates large text files when no line range is specified, showing the beginning of the file
- Provides method summaries with line ranges for truncated large code files
- Efficiently streams only requested line ranges for better performance
- Makes it easy to discuss specific parts of code with line numbering
- **Multi-file support** (experimental): Read multiple files simultaneously with batch approval

## Multi-File Capabilities (Experimental)

When the [Concurrent File Reads](../../features/experimental/concurrent-file-reads) experimental feature is enabled, the `read_file` tool gains enhanced capabilities:

### Batch Processing
- Read up to 100 files in a single request (configurable, default 15)
- Parallel processing for improved performance
- Batch approval interface for user consent

### Enhanced User Experience
- Single approval dialog for multiple files
- Individual file override options
- Clear visibility into which files will be accessed
- Graceful handling of mixed success/failure scenarios

### Improved Efficiency
- Reduces interruptions from multiple approval dialogs
- Faster processing through parallel file reading
- Smart batching of related files
- Configurable concurrency limits to match system capabilities

## Limitations

- May not handle extremely large files efficiently without using line range parameters
- For binary files (except PDF and DOCX), may return content that isn't human-readable
- **Multi-file mode**: Requires experimental feature to be enabled and may have stability issues

## How It Works

When the `read_file` tool is invoked, it follows this process:

1. **Parameter Validation**: Validates the required `path` parameter and optional parameters
2. **Path Resolution**: Resolves the relative path to an absolute path
3. **Reading Strategy Selection**:
   - The tool uses a strict priority hierarchy (explained in detail below)
   - It chooses between range reading, auto-truncation, or full file reading
4. **Content Processing**:
   - Adds line numbers to the content (e.g., "1 | const x = 13") where `1 |` is the line number.
   - For truncated files, adds truncation notice and method definitions
   - For special formats (PDF, DOCX), extracts readable text

## Reading Strategy Priority

The tool uses a clear decision hierarchy to determine how to read a file:

1. **First Priority: Explicit Line Range**
   - If either `start_line` or `end_line` is provided, the tool always performs a range read
   - The implementation efficiently streams only the requested lines, making it suitable for processing large files
   - This takes precedence over all other options

2. **Second Priority: Automatic Truncation for Large Text Files**
   - This applies only when **all** of the following conditions are met:
     - Neither `start_line` nor `end_line` is specified.
     - The file is identified as a text-based file (not binary like PDF/DOCX).
     - The file's total line count exceeds an internal limit (e.g., `maxReadFileLine`, often around 500 lines).
   - When automatic truncation occurs:
     - The tool reads only the *first* `maxReadFileLine` lines.
     - It appends a notice indicating truncation (e.g., `[Showing only 500 of 1200 total lines...]`).
     - For code files, it may also append a summary of source code definitions found within the truncated portion.

3. **Default Behavior: Read Entire File**
   - If neither an explicit range is given nor automatic truncation applies (e.g., the file is within the line limit, or it's a supported binary type), the tool reads the entire content.
   - For supported formats like PDF and DOCX, it attempts to extract the full text content.

## Examples When Used

- When asked to explain or improve code, Saarthi first reads the relevant files to understand the current implementation.
- When troubleshooting configuration issues, Saarthi reads config files to identify potential problems.
- When working with documentation, Saarthi reads existing docs to understand the current content before suggesting improvements.

## Usage Examples

Here are several scenarios demonstrating how the `read_file` tool is used and the typical output you might receive.

### Reading an Entire File

To read the complete content of a file:

**Input:**
```xml
<read_file>
<path>src/app.js</path>
</read_file>
```

**Simulated Output (for a small file like `example_small.txt`):**
```
1 | This is the first line.
2 | This is the second line.
3 | This is the third line.
```
*(Output will vary based on the actual file content)*

### Reading Specific Lines

To read only a specific range of lines (e.g., 46-68):

**Input:**
```xml
<read_file>
<path>src/app.js</path>
<start_line>46</start_line>
<end_line>68</end_line>
</read_file>
```

**Simulated Output (for lines 2-3 of `example_five_lines.txt`):**
```
2 | Content of line two.
3 | Content of line three.
```
*(Output shows only the requested lines with their original line numbers)*

### Reading a Large Text File (Automatic Truncation)

When reading a large text file without specifying a line range, the tool automatically truncates the content if it exceeds the internal line limit (e.g., 500 lines).

**Input:**
```xml
<read_file>
<path>logs/large_app.log</path>
</read_file>
```

**Simulated Output (for a 1500-line log file with a 500-line limit):**
```
1 | Log entry 1...
2 | Log entry 2...
...
500 | Log entry 500...

[Showing only 500 of 1500 total lines. Use start_line and end_line to read specific ranges.]
// Optional: Source code definitions summary might appear here for code files
```
*(Output shows the beginning lines up to the internal limit, plus a truncation notice. Use line ranges for full access.)*

### Attempting to Read a Non-Existent File

If the specified file does not exist:

**Input:**
```xml
<read_file>
<path>non_existent_file.txt</path>
</read_file>
```

**Simulated Output (Error):**
```
Error: File not found at path 'non_existent_file.txt'.
```

### Attempting to Read a Blocked File

If the file is excluded by rules in a `.saarthiignore` file:

**Input:**
```xml
<read_file>
<path>.env</path>
</read_file>
```

**Simulated Output (Error):**
```
Error: Access denied to file '.env' due to .saarthiignore rules.
```

## Multi-File Examples (Experimental)

When the [Concurrent File Reads](../../features/experimental/concurrent-file-reads) experimental feature is enabled, you can read multiple files simultaneously using the enhanced XML format.

### Reading Multiple Complete Files

To read several complete files at once:

**Input:**
```xml
<read_file>
<args>
  <file>
    <path>src/app.ts</path>
  </file>
  <file>
    <path>src/utils.ts</path>
  </file>
  <file>
    <path>src/config.json</path>
  </file>
</args>
</read_file>
```

**Simulated Output:**
```xml
<files>
  <file>
    <path>src/app.ts</path>
    <content>
      1 | import React from 'react'
      2 | import { Utils } from './utils'
      3 | // ... rest of file content
    </content>
  </file>
  <file>
    <path>src/utils.ts</path>
    <content>
      1 | export class Utils {
      2 |   static formatDate(date: Date): string {
      3 |     // ... utility functions
    </content>
  </file>
  <file>
    <path>src/config.json</path>
    <content>
      1 | {
      2 |   "apiUrl": "https://api.example.com",
      3 |   "timeout": 5000
      4 | }
    </content>
  </file>
</files>
```

### Reading Specific Line Ranges from Multiple Files

To read specific sections from multiple files:

**Input:**
```xml
<read_file>
<args>
  <file>
    <path>src/app.ts</path>
    <lines>1-20</lines>
    <lines>45-60</lines>
  </file>
  <file>
    <path>src/utils.ts</path>
    <lines>10-25</lines>
  </file>
</args>
</read_file>
```

**Simulated Output:**
```xml
<files>
  <file>
    <path>src/app.ts</path>
    <content>
      1 | import React from 'react'
      2 | import { Utils } from './utils'
      ...
      20 | const App = () => {
      
      45 |   const handleSubmit = () => {
      46 |     // Handle form submission
      ...
      60 |   }
    </content>
  </file>
  <file>
    <path>src/utils.ts</path>
    <content>
      10 |   static formatDate(date: Date): string {
      11 |     return date.toISOString().split('T')[0]
      ...
      25 |   }
    </content>
  </file>
</files>
```

### Handling Mixed Results (Some Files Denied/Blocked)

When some files are approved and others are denied or blocked:

**Input:**
```xml
<read_file>
<args>
  <file>
    <path>src/app.ts</path>
  </file>
  <file>
    <path>.env</path>
  </file>
  <file>
    <path>src/secret-config.ts</path>
  </file>
</args>
</read_file>
```

**Simulated Output:**
```xml
<files>
  <file>
    <path>src/app.ts</path>
    <content>
      1 | import React from 'react'
      2 | // ... file content successfully read
    </content>
  </file>
  <file>
    <path>.env</path>
    <error>Access denied by .saarthiignore rules</error>
  </file>
  <file>
    <path>src/secret-config.ts</path>
    <error>User denied access</error>
  </file>
</files>
```

### Batch Approval Interface

When requesting multiple files, you'll see a batch approval interface that allows you to:

- **Approve All**: Grant access to all requested files
- **Deny All**: Deny access to all requested files
- **Individual Control**: Override decisions for specific files
- **File Preview**: Click file headers to open them in your editor

The interface displays each file path clearly, making it easy to understand what Saarthi wants to access before granting permission.

## Backward Compatibility

The enhanced multi-file format is fully backward compatible. Existing single-file requests using the `path` parameter continue to work exactly as before, regardless of whether the experimental feature is enabled or disabled.
