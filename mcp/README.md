# PadelTrue MCP server

A remote, read only MCP server over the PadelTrue padel racket dataset. Nothing to install and no key.

Address: `https://padeltrue.com/mcp` (streamable HTTP, plain JSON answers, no session)

| Tool | What it answers |
|---|---|
| `search_rackets` | Search the catalogue by model name and explicit filters: brand, exact year, shape, a budget with its currency, a lowest rating, ordered by one rating. Default 3 results, at most 10 |
| `get_racket` | Every published specification of one racket, each with the address it was read from and the wording used there |
| `search` | For ChatGPT connectors and deep research: find rackets by words of the name, returns id, title and page address |
| `fetch` | For ChatGPT: one racket as a document, every figure with its source, by the id from `search` |
| `compare_rackets` | Two exact models side by side, with a caution when a rating difference may come from a missing input. Names no winner |

Every answer names its sources, the version of the rating model, and says that ratings are calculated from published specifications and are not play tests. No answer contains a retailer link.

```json
{ "mcpServers": { "padeltrue": { "type": "http", "url": "https://padeltrue.com/mcp" } } }
```

The same three questions as plain JSON: https://padeltrue.com/agents

Data licence CC BY 4.0, credit PadelTrue with a link to https://padeltrue.com/

## Registry listings

`server.json` is the manifest for the official MCP registry. Nothing has been submitted to any registry.
Each submission is an outward step and waits for the owner's word.
