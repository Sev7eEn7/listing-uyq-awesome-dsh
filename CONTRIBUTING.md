# Contributing to Awesome DSH

Thanks for contributing!

## What can be added?

- DSH plugins
- Agents
- Skills
- MCP integrations
- Libraries and SDKs
- Developer tools
- Examples and templates
- Observability and evaluation tools
- Relevant ecosystem news

## Adding a registry entry

Create a JSON file under the appropriate directory in `registry/`.

Example:

```json
{
  "name": "Example Plugin",
  "repository": "https://github.com/example/dsh-plugin",
  "type": ["plugin"],
  "categories": ["memory"],
  "capabilities": ["persistent-memory"],
  "runtime": ["dsh"],
  "language": ["typescript"],
  "license": "MIT",
  "status": "experimental",
  "official": false,
  "maintained": true,
  "description": "Example DSH plugin."
}
```

## Submission guidelines

1. Use the correct category.
2. Provide a working project URL.
3. Keep the description concise and factual.
4. Do not claim official DeepSeek support unless it is verifiable.
5. Do not submit malware, credential theft tools, spam, or intentionally harmful software.
6. Mention important permissions such as filesystem, network, shell, or credential access when relevant.

## Review process

Submissions may be:

- Discovered
- Submitted
- Reviewed
- Verified
- Featured

Automated discovery does not guarantee inclusion.
