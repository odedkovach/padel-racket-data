// Offline reproduction. Usage: node codex-weight-range-reproduce-2026-09-30.mjs [dataset.json]
// Uses a frozen public export by default; reads input and prints JSON, no site writes/network.
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
const path = process.argv[2] || new URL('./codex-weight-range-dataset-2026-09-30.json', import.meta.url);
const raw = readFileSync(path);
const data = JSON.parse(raw);
if (!Array.isArray(data.rackets) || data.count !== data.rackets.length) throw Error('Dataset count mismatch');
const slugs = new Set();
const groups = { range: [], singleValue: [], missing: [], invalid: [] };
const rows = data.rackets.map(r => {
  if (!r.slug || slugs.has(r.slug)) throw Error('Missing or duplicate slug');
  slugs.add(r.slug);
  const w = r.specs?.weight;
  const valid = w && typeof w.min === 'number' && typeof w.max === 'number' &&
    Number.isFinite(w.min) && Number.isFinite(w.max) && w.min > 0 && w.max >= w.min;
  const kind = !w ? 'missing' : !valid ? 'invalid' : w.min < w.max ? 'range' : 'singleValue';
  groups[kind].push(r.slug);
  return { slug: r.slug, name: r.name, year: r.year, url: r.url, kind,
    ...(w ? { min: w.min, max: w.max, source: w.source, sourceType: w.sourceType } : {}) };
});
const numeric = groups.range.length + groups.singleValue.length;
const percent = (a, b) => b ? Number((100 * a / b).toFixed(1)) : null;
const widths = {};
for (const r of rows.filter(r => r.kind === 'range')) widths[r.max - r.min] = (widths[r.max - r.min] || 0) + 1;
const air = rows.find(r => r.slug === 'babolat-air-viper-2-6');
const counter = rows.find(r => r.slug === 'babolat-counter-viper-2-6');
if (!air || !counter || air.kind !== 'range' || counter.kind !== 'range') throw Error('Example records unavailable');
const overlapMin = Math.max(air.min, counter.min), overlapMax = Math.min(air.max, counter.max);
const result = {
  datasetSha256: createHash('sha256').update(raw).digest('hex'),
  datasetBuilt: data.built, modelVersion: data.modelVersion,
  total: rows.length, numericWeightRecords: numeric,
  counts: Object.fromEntries(Object.entries(groups).map(([k,v]) => [k,v.length])),
  percentOfAll: Object.fromEntries(Object.entries(groups).map(([k,v]) => [k,percent(v.length,rows.length)])),
  rangePercentOfNumeric: percent(groups.range.length,numeric), rangeWidthsGrams: widths,
  example: { air: { slug: air.slug, min: air.min, max: air.max },
    counter: { slug: counter.slug, min: counter.min, max: counter.max },
    nominalMidpointDifferenceGrams: (counter.min + counter.max - air.min - air.max)/2,
    overlap: overlapMin <= overlapMax ? { min: overlapMin, max: overlapMax, width: overlapMax-overlapMin } : null },
  interpretation: 'Recorded specification bounds, not measurements of individual rackets, unit-frequency distributions, brand quality or a representative market sample. Equal endpoints are a recorded single value, not proof of exact physical weight. Missing here does not prove the maker never published a value.',
  rows
};
console.log(JSON.stringify(result,null,2));
