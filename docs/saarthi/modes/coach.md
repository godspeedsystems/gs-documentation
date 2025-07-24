# 🧑‍💻 Coach Mode
Your personal AI learning mentor within Saarthi.

## Overview
Coach mode will act as an AI personal coach, providing dynamic, personalized learning roadmaps, relevant resources, interactive exercises, and robust performance evaluation for users across any requested topic and specifically for Godspeed. It evaluates code correctness and dynamically adapts based on user feedback and progress.

## Primary Use Cases
- Personalized skill-building roadmaps (e.g., "Learn TypeScript", "Learn Godspeed")
- Roadmap document creation for self-paced learning
- Assignment of interactive coding exercises (including half-written code)
- Evaluation of user code: correctness, completeness, and optimality
- Adaptive learning: roadmap adjusts to user skill level and feedback

## Example Prompts
```
"I want to learn Godspeed workflows — beginner level"
"Help me master TypeScript for backend"
"Give me an exercise on recursion in Python"
"Evaluate this custom hash table I wrote in C++"
"Create a roadmap to learn Kafka with Godspeed"
```

## Internal Capabilities / Agents

- **Roadmap Generator:** Builds .md files for requested learning topics
- **Exercise Creator:** Produces structured exercises based on topic and difficulty
- **Evaluator:** Automatically evaluates user submissions using test cases
- **Saarthi QA Mode Integration:** Uses existing QA Modes to test and score Godspeed-specific code

## Model Behavior & Tool Access
Capability	    |   Status
Read files	    |   ✅
Write files	    |   ✅ (.md, optionally test files)
Execute commands|   ✅ (within secure scope)
Evaluate code	  |   ✅
Use external documentation	|✅ (via RAG MCP)
Manage learning flow	|✅

## Preferred Models:

GPT-4.5 / Claude 3 Sonnet (Roadmap & Feedback)
Claude 3 Opus / Gemini 1.5 Pro (Exercise generation & evaluation)


## Scope
✅ In Scope
- General development topics (e.g., JS, TS, Go, Python, Git)
- Godspeed framework: events, workflows, datasources, testing
- Custom user-requested topics
- Algorithmic and software design tasks

❌ Out of Scope
- Full-stack frontend/backend integration testing
- Persistent session storage (unless backend provided)
- Certification or human coaching simulation
- Live deployment or CI/CD execution

## Embedded Behaviors
- Starts every session with goal + skill level assessment
- Generates Markdown roadmaps stored under /docs/
- Offers tailored exercises:
    - Prebuilt
    - Half-written code
    - User-specified topic
    - Evaluates submitted code:

✅ Simple: runs auto test cases, gives feedback
✅ Complex: scores for correctness + optimality
✅ Godspeed: invokes qa mode testing framework

Adjusts roadmap based on feedback and test outcomes

🔄 Workflow Integration
Stores user roadmaps in:

```
docs/
  └── topic_level_roadmap.md
```
Exercises + evaluations go to:

```
tests/coach/
  └── topic_exercise_1.test.ts
```

### Leverages:

- qa modes for test execution
- rag-node MCP for Godspeed doc retrieval
- command group to create files and evaluate code

## Safety Features
- All commands run in restricted, sandboxed shell
- No production files are modified
- AI seeks explicit confirmation before overwriting files
- User code execution is isolated and guarded

## Shortcut to Activate
```
Mac: ⌘ + .  
Windows/Linux: Ctrl + .
```

### Related Modes
/qa: For test generation and validation

/ask: To understand foundational concepts

/pm-lead: For planning your product + technical roadmap

/orchestrator: To connect your learning into production flows

## Author Notes
This mode is designed to transform Saarthi into a personal learning companion — one that doesn’t just teach, but guides, adapts, and evaluates. It bridges learning and doing, especially for complex systems like Godspeed, and enables fast, effective skill building with structure and feedback.

