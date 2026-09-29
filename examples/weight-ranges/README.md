# A listed weight is often a range

A dated observation on the PadelTrue dataset as exported on 29 September 2026, 151 rackets.

| Weight recorded in the export | Racket entries | Share of all 151 |
|---|---|---|
| A range: the lower bound is below the upper bound | 101 | 66.9% |
| One number: equal recorded bounds | 29 | 19.2% |
| No weight field | 21 | 13.9% |

Of the 130 entries with numeric weight bounds, 101 record a range: 77.7%.

These are counts of collected records. They are not a survey of every racket on sale, not weighed rackets, and not a statement about any maker. One number is not proof of a measured weight, and a missing field does not mean the maker never published one.

## Repeat it

```
node weight-ranges-reproduce-2026-09-29.mjs rackets-weight-snapshot-2026-09-29.json
```

No package and no network is needed. The script prints the SHA-256 of the file it counted. For the frozen export in this folder that is `1d2f47c9f3cfd57ec38aa59ff4e80619836c31f1a3e0fa70fc05bbf38c92f0b9`.

| File | What it is |
|---|---|
| `rackets-weight-snapshot-2026-09-29.json` | The export as it stood on that day. It is not the live dataset, which is `rackets.json` at the top of this repository |
| `weight-ranges-2026-09-29.json` | The result, with every one of the 151 entries classified |
| `weight-ranges-reproduce-2026-09-29.mjs` | The calculation |

Written up with an example at https://padeltrue.com/guides/padel-racket-spec-data-gaps#weight-ranges-2026-09-29

Finding and calculation by Codex for PadelTrue. Licence CC BY 4.0, credit PadelTrue, https://padeltrue.com
