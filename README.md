# Padel racket data

Published specifications of 227 padel rackets from 21 brands, each with the address of the page it was read from and the wording used there. Maintained by [PadelTrue](https://padeltrue.com/), an independent padel racket comparison website.

Export date: 2026-10-03. An automated job publishes data changes. This date does not mean every specification was rechecked that day; individual price observation dates are included in the data.

## What is in it

| File | What it holds |
|---|---|
| [rackets.json](rackets.json) | The full record of every racket: 1660 specifications, each with `source`, `verbatim` and `sourceType`, plus the calculated ratings |
| [rackets.csv](rackets.csv) | One row per racket, for a spreadsheet |
| [brands/](brands/) | One readable table per brand |
| [DATA_DICTIONARY.md](DATA_DICTIONARY.md) | Field definitions, units, missing values, CSV mapping and rating limitations |
| [examples/](examples/) | A runnable example: [specification coverage by brand](examples/coverage.md), made by [coverage_by_brand.py](examples/coverage_by_brand.py) |
| [examples/weight-ranges/](examples/weight-ranges/) | A dated finding that can be repeated: 101 of 130 recorded weights are a range, with the frozen export and the calculation |
| [mcp/](mcp/) | The same data as questions an assistant can ask: a remote, read only MCP server at https://padeltrue.com/mcp, and plain JSON addresses described at https://padeltrue.com/agents |

| Brand | Rackets |
|---|---|
| [Adidas](brands/adidas.md) | 21 |
| [Babolat](brands/babolat.md) | 16 |
| [Black Crown](brands/black-crown.md) | 1 |
| [Bullpadel](brands/bullpadel.md) | 32 |
| [Cork Padel](brands/cork-padel.md) | 8 |
| [Drop Shot](brands/drop-shot.md) | 2 |
| [Dunlop](brands/dunlop.md) | 4 |
| [Head](brands/head.md) | 17 |
| [Joma](brands/joma.md) | 1 |
| [Kuikma](brands/kuikma.md) | 3 |
| [Nox](brands/nox.md) | 43 |
| [Oxdog](brands/oxdog.md) | 7 |
| [Padelsmith](brands/padelsmith.md) | 1 |
| [Royal Padel](brands/royal-padel.md) | 14 |
| [Shooter](brands/shooter.md) | 1 |
| [Siux](brands/siux.md) | 23 |
| [StarVie](brands/starvie.md) | 17 |
| [Tecnifibre](brands/tecnifibre.md) | 2 |
| [Vairo](brands/vairo.md) | 2 |
| [Varlion](brands/varlion.md) | 6 |
| [Wilson](brands/wilson.md) | 6 |

## How a record looks

```json
{
  "name": "Adidas Arrow Hit 2026",
  "brand": "Adidas",
  "year": 2026,
  "specs": {
    "weight": {
      "display": "360 to 375 g",
      "min": 360,
      "max": 375,
      "verbatim": "Weight: 360-375 Gr",
      "source": "https://allforpadel.com/en/padel-rackets/7523-padel-racket-adidas-arrow-hit-8435739405888.html",
      "sourceType": "retailer"
    }
  },
  "ratings": {
    "power": 83,
    "control": 10,
    "handling": 28,
    "forgiveness": 46,
    "comfort": 57,
    "value": 10
  }
}
```

## What the ratings are, and what they are not

The ratings are calculated from the published specifications with a formula that is printed in full at [padeltrue.com/methodology](https://padeltrue.com/methodology), model version 1.0. They describe what a build favours on paper. They are not court tests, laboratory measurements or customer reviews. When a usable input is missing from a record, the model uses a neutral midpoint. `inputsPublished` counts usable inputs out of five; a missing input here does not prove that no source has published it.

Carbon K count, surface texture and thickness are recorded where available and are excluded from the scoring formula. The methodology explains the evidence and limits behind the model.

## What is not in it

- No photographs.
- No specification without a source. A racket with too little published is held back and listed at [padeltrue.com/methodology](https://padeltrue.com/methodology#held-back).
- Prices are snapshots from the linked source, dated in JSON `specs.price.checkedOn` and CSV `price_checked`. They are not live prices or confirmation of availability.

## Use it

```
curl -L https://raw.githubusercontent.com/odedkovach/padel-racket-data/main/rackets.json
```

For reproducible work, replace `main` in the download URL with a commit SHA and record `modelVersion`. Use JSON when you need each specification's source; the CSV is a summary and omits field-level provenance.

The same files are served at [padeltrue.com/data](https://padeltrue.com/data).

## Licence and attribution

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). You may reuse and adapt the data, also commercially, when you credit "PadelTrue" with a link to https://padeltrue.com/. Brand and model names belong to their owners.

## Report a wrong figure

Open an issue here with the model name and a link to the page that shows the correct figure, or use the [contact page](https://padeltrue.com/contact). A correction without a source cannot be applied.
