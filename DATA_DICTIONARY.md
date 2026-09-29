# PadelTrue data dictionary

This describes `rackets.json` and `rackets.csv` as published in [padel-racket-data](https://github.com/odedkovach/padel-racket-data). Field names are case sensitive. The reference snapshot is 29 September 2026, rating model 1.0. Use a commit permalink when a reproducible snapshot matters.

## Root JSON fields

| Field | Type | Meaning |
|---|---|---|
| `name` | string | Dataset title |
| `license` | string | Dataset licence label |
| `attribution` | string | Requested credit and publisher URL |
| `built` | date string | Export date, `YYYY-MM-DD`; not the verification date of every specification |
| `modelVersion` | string | Rating formula version; not a dataset revision identifier |
| `methodology` | URL string | Explanation of inputs, calculation and limitations |
| `count` | integer | Number of entries in `rackets` |
| `rackets` | array | The racket records described below |

## Racket fields

| Field | Type | Meaning |
|---|---|---|
| `slug` | string | Unique record identifier within this export |
| `name` | string | Model name, including recorded variant/year |
| `brand` | string | Recorded brand |
| `year` | integer or null | Recorded model year; do not infer one from download date |
| `url` | URL string | PadelTrue page for this exact record |
| `productUrl` | URL string | Recorded external product page; individual specifications can cite other pages |
| `level` | string or null | Recorded playing-level label, not a personalized recommendation |
| `player` | string or null | Player name associated with the model in the record; not endorsement of PadelTrue |
| `ratings` | object | Calculated model outputs, described below |
| `inputsPublished` | integer | Number of usable inputs among shape, balance category, core category, face family and weight, from 0 to 5; not total specification count |
| `profile` | array of strings | Labels derived from ratings, not independent observations of player fit |
| `specs` | object | Available specification objects, with provenance |

`level` and `player` do not have their own provenance objects in this export. Do not treat them as having the same field-level evidence structure as `specs`.

## Ratings and profile

`ratings.power`, `control`, `handling`, `forgiveness` and `comfort` are integer outputs on model 1.0's 10 to 90 scale. `ratings.value` is a relative price-adjusted model output scaled to a maximum of 100 across the current index, or null where unavailable. It can change when other records or prices change.

These are calculations from recorded specifications, not court tests, laboratory results, customer ratings or measured injury risk. Missing or unusable model inputs contribute a neutral midpoint. Equal scores can therefore conceal different evidence coverage; inspect `inputsPublished` and `specs`.

`profile` can include `power`, `control`, `all-round`, `easy to move`, `forgiving`, `arm-friendly` and `demanding`. They inherit the model's limitations. In particular, `arm-friendly` is not a medical safety or injury-prevention claim.

## Fields shared by specification objects

| Field | Type | Meaning |
|---|---|---|
| `display` | string | Human-readable presentation generated from the record; not necessarily a quotation |
| `source` | URL string | Evidence page recorded for this specification |
| `sourceType` | string | `manufacturer` or `retailer`; records the source category, not independent validation |
| `verbatim` | string | Source wording stored in the record; may contain joined excerpts and should be checked against the linked page before quotation |

Normalized categories such as firmness are not standardized laboratory measurements. The export does not expose every upstream evidence/normalization flag. Inspect the source and methodology when comparing categories across brands.

## Specification-specific fields

All specification objects also have the shared fields above. Optional fields may be absent or null.

| JSON object | Additional fields | Meaning and units |
|---|---|---|
| `specs.shape` | `value`: string | Normalized shape, for example `round`, `teardrop`, `hybrid` or `diamond` |
| `specs.weight` | `min`, `max`: numbers | Lower and upper recorded weight in grams; these are specifications, not measured weights of individual units |
| `specs.balance` | `value`: string/null; `mm`, `cm`: number/null | Recorded balance category and available numerical balance in the named unit; do not infer a category from a numerical measurement alone |
| `specs.core` | `value`: string/null; `material`: string/null | Recorded normalized firmness and foam/material label |
| `specs.surface` | `material`: string | Face material wording; a carbon K count is not itself a stiffness measurement |
| `specs.frame` | `material`: string | Frame material wording |
| `specs.thicknessMm` | `value`: number | Recorded thickness in millimetres |
| `specs.roughSurface` | `value`: boolean; optional `checkedOn`: date | Recorded textured-surface flag, not a measured spin result |
| `specs.price` | `value`: number; `currency`: string; `checkedOn`: date; optional `rrp`: number/null | Observed price, currency code, observation date and recorded list price when available. Neither stock nor a live quote is implied |

`checkedOn` uses `YYYY-MM-DD`. It is not present on every specification. Never substitute `built` for a missing observation date.

## CSV mapping

The CSV has one row per racket. Use `index_url` to join it to JSON `url`; the CSV has no `slug` column.

| CSV column | JSON field |
|---|---|
| `name`, `brand`, `year` | Same-named record fields |
| `shape` | `specs.shape.value` |
| `weight` | `specs.weight.display` |
| `balance` | `specs.balance.display` |
| `core` | `specs.core.display` |
| `face` | `specs.surface.material` |
| `price`, `currency`, `price_checked` | `specs.price.value`, `.currency`, `.checkedOn` |
| `power`, `control`, `handling`, `forgiveness`, `comfort`, `value` | Same-named members of `ratings` |
| `inputs_published` | `inputsPublished` |
| `product_url` | `productUrl` |
| `index_url` | `url` |

The CSV omits field-level sources, quotations, several specifications and profile tags. Use JSON for provenance-sensitive work. Missing JSON fields/null and empty CSV cells mean unavailable, not zero. Preserve model years and variants when joining other data.

## Coverage and reuse

This is a collection of recorded published specifications, not a complete inventory of the market. A missing value means it is absent from this record, not that no source has published it. Source pages and prices can change after collection.

Credit PadelTrue and link to [the dataset landing page](https://padeltrue.com/data). Record the GitHub commit and rating model version for reproducible analysis. Keep the distinction between sourced specifications and calculated ratings visible in reused tables and applications.
