# ContextMemory 🧠

Persistent AI coding context memory for developers and teams.

Git tracks your code history. **ContextMemory tracks your intent history.**

Never re-explain your architecture, decisions, or progress to AI assistants again.

---

## The Problem

When working with AI coding tools like:

- ChatGPT  
- Cursor  
- Claude  
- Copilot  
- Windsurf  

Context is lost between sessions.

You repeatedly explain:

- Architecture  
- Decisions  
- Current progress  
- What you already tried  

This reduces productivity.

---

## The Solution

ContextMemory is a CLI tool that:

- Saves your coding context  
- Restores it instantly  
- Works across sessions, machines, and teams  
- Works with any programming language  

Spring Boot, React, Node, Python — all supported.

---

## Installation

Install globally:

```bash
npm install -g contextmemory
```

Or install from source:

```bash
git clone https://github.com/AkashKobal/contextmemory.git
cd contextmemory
npm install
npm run build
npm link
```

---

## Quick Start

Initialize in your project:

```bash
contextmemory init
```

Save your context:

```bash
contextmemory save
```

Quick save:

```bash
contextmemory save "Implemented multi-model execution"
```

Resume context:

```bash
contextmemory resume
```

This copies a formatted prompt to your clipboard.  
Paste it into ChatGPT, Cursor, or Claude.

---

## Example Workflow

Start work:

```bash
contextmemory resume
```

Work normally on your code.

End work:

```bash
contextmemory save "Added parallel execution using CompletableFuture"
```

Next day:

```bash
contextmemory resume
```

Continue immediately.

---

## Project Structure

ContextMemory creates:

```
.contextmemory/
├── context.json
├── history/
│   ├── entry-1.json
│   ├── entry-2.json
```

Stores:

- Task  
- Goal  
- Decisions  
- Approaches  
- Current state  
- Next steps  

---

## Commands

### Core Commands

Initialize:

```bash
contextmemory init
```

Save context:

```bash
contextmemory save
```

Quick save:

```bash
contextmemory save "message"
```

Resume context:

```bash
contextmemory resume
```

View history:

```bash
contextmemory log
```

Show git diff summary:

```bash
contextmemory diff
```

---

### Automation Commands

Auto-save on file changes:

```bash
contextmemory watch
```

Install git hook:

```bash
contextmemory hook install
```

Team handoff:

```bash
contextmemory handoff @username
```

---

## Example: Spring Boot Project

Initialize:

```bash
contextmemory init
```

After implementing services:

```bash
contextmemory save "Implemented ModelRouterService and model integrations"
```

Next day:

```bash
contextmemory resume
```

AI understands your architecture instantly.

---

## MCP Integration (Optional)

Add to your MCP configuration:

```json
{
  "mcpServers": {
    "contextmemory": {
      "command": "npx",
      "args": ["-y", "contextmemory", "mcp"]
    }
  }
}
```

Exposes tools:

- contextmemory_save  
- contextmemory_resume  
- contextmemory_log  

---

## Supported Environments

Works with:

- Spring Boot  
- React  
- Node.js  
- Python  
- Microservices  
- Monorepos  

Works with AI tools:

- ChatGPT  
- Cursor  
- Claude  
- Copilot  
- Windsurf  

---

## License

MIT License

---

## Author

Akash Kobal  

GitHub:  
https://github.com/AkashKobal/contextmemory

---

## Contributing

Pull requests are welcome.

---

## Roadmap

- Cloud sync  
- Team dashboards  
- VS Code extension  
- Enterprise edition  