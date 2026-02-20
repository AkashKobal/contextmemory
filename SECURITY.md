# Security Policy

## Supported Versions

The following versions of ContextMemory are currently supported with security updates:

| Version | Supported |
|---------|-----------|
| 0.5.x   | ✅ Yes     |
| < 0.5.0 | ❌ No      |

Only the latest minor release will receive security patches.

---

## Reporting a Vulnerability

If you discover a security vulnerability, please report it responsibly.

### Do NOT:
- Open a public GitHub issue for security vulnerabilities.
- Disclose the vulnerability publicly before it is fixed.

### Instead:

Email the details to:

**akashkobal18@gmail.com**

Include:

- Description of the vulnerability
- Steps to reproduce
- Affected version
- Potential impact
- Any suggested fix (if available)

---

## Response Process

1. You will receive acknowledgment within 48 hours.
2. The issue will be investigated and validated.
3. A fix will be prepared.
4. A patched version will be released.
5. A security advisory will be published.

---

## Scope

This policy applies to:

- CLI functionality
- Local file storage (.contextmemory folder)
- MCP server integration
- Dependency vulnerabilities

---

## Security Best Practices for Users

- Always use the latest version:
  
  ```bash
  npm update -g @akashkobal/contextmemory
  ```

- Do not commit `.contextmemory/` to public repositories if it contains sensitive architecture data.
- Review dependency updates regularly.

---

## Disclosure Policy

We follow responsible disclosure practices.
Contributors reporting valid vulnerabilities will be acknowledged (unless they prefer anonymity).

---

Thank you for helping keep ContextMemory secure.
