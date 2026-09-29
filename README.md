# Padel racket data

Published specifications of 120 padel rackets from 15 brands, each with the address of the page it was read from and the wording used there. Maintained by [PadelTrue](https://padeltrue.com/), an independent padel racket comparison website.

Last update: 2026-09-29. The data is refreshed by a scheduled job and this repository follows it.

## What is in it

| File | What it holds |
|---|---|
| [rackets.json](rackets.json) | The full record of every racket: 904 specifications, each with `source`, `verbatim` and `sourceType`, plus the calculated ratings |
| [rackets.csv](rackets.csv) | One row per racket, for a spreadsheet |
| [brands/](brands/) | One readable table per brand |

| Brand | Rackets |
|---|---|
| [Adidas](brands/adidas.md) | 14 |
| [Babolat](brands/babolat.md) | 10 |
| [Bullpadel](brands/bullpadel.md) | 15 |
| [Drop Shot](brands/drop-shot.md) | 2 |
| [Dunlop](brands/dunlop.md) | 3 |
| [Head](brands/head.md) | 13 |
| [Joma](brands/joma.md) | 1 |
| [Kuikma](brands/kuikma.md) | 3 |
| [Nox](brands/nox.md) | 26 |
| [Oxdog](brands/oxdog.md) | 7 |
| [Siux](brands/siux.md) | 13 |
| [StarVie](brands/starvie.md) | 3 |
| [Tecnifibre](brands/tecnifibre.md) | 2 |
| [Varlion](brands/varlion.md) | 2 |
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
      "sourceType": "manufacturer"
    }
  },
  "ratings": {
    "power": 83,
    "control": 10,
    "handling": 28,
    "forgiveness": 46,
    "comfort": 57,
    "value": 13
  }
}
```

## What the ratings are, and what they are not

The ratings are calculated from the published specifications with a formula that is printed in full at [padeltrue.com/methodology](https://padeltrue.com/methodology), model version 1.0. They describe what a build favours on paper. They are not court tests, laboratory measurements or customer reviews. When a maker does not publish an input, the model uses a neutral midpoint and the record says how many inputs were published (`inputsPublished`).

Carbon K count, surface texture and thickness are recorded where published and are never scored, because independent measurements contradict maker claims about them.

## What is not in it

- No photographs.
- No specification without a source. A racket with too little published is held back and listed at [padeltrue.com/methodology](https://padeltrue.com/methodology#held-back).
- Prices are the price seen on the source page on the date in `price_checked`. They are not live prices.

## Use it

```
curl -L https://raw.githubusercontent.com/odedkovach/padel-racket-data/main/rackets.json
```

The same files are served at [padeltrue.com/data](https://padeltrue.com/data).

## Licence and attribution

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). You may reuse and adapt the data, also commercially, when you credit "PadelTrue" with a link to https://padeltrue.com/. Brand and model names belong to their owners.

## Report a wrong figure

Open an issue here with the model name and a link to the page that shows the correct figure, or use the [contact page](https://padeltrue.com/contact). A correction without a source cannot be applied.
