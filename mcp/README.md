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

Listed in the official MCP registry as `io.github.odedkovach/padeltrue`, version 1.0.0, since 29 September 2026. `server.json` is its manifest.
A listing describes the server. It is not evidence of use.

## ChatGPT

`chatgpt-plugin/` holds the package for the ChatGPT app directory. Version 1.0.0 was published on 14 October 2026 through the dashboard form. Version 1.0.1 (the name "PadelTrue Padel Racket Finder", starter questions for 2027 models, a Spanish listing) is prepared here and waits for upload and OpenAI review. For the upload the manifest `name` is replaced by the package name the dashboard holds, `app-6abc382b152481919010074cc3b33c51`.

The fixed question set for the tool descriptions is `content/app-golden-prompts.json`; `npm run app-prompts` replays it weekly and writes `data/app-prompts.md`.
