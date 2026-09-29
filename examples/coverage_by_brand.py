"""Reproduce a coverage table using only the public dataset and Python stdlib.
Usage: python3 coverage_by_brand.py rackets.json > coverage.md
Missing here means missing from these records, not never published by a brand.
"""
import json
import sys
from collections import defaultdict
from pathlib import Path

data = json.loads(Path(sys.argv[1]).read_text())
groups = defaultdict(list)
for row in data['rackets']:
    groups[row['brand']].append(row)

print('# Specification coverage in this PadelTrue snapshot\n')
print(f"Export date: {data['built']}. Model version: {data['modelVersion']}. Records: {len(data['rackets'])}.\n")
print('This measures the records collected by PadelTrue, not the whole market or the quality of a brand. A missing field here does not establish that a manufacturer never published it. Small and unequal brand samples are not a brand ranking.\n')
print('Each cell shows records with the field / records for that brand. Numerical balance means a recorded mm or cm value. Five inputs means the export reports all five usable model inputs.\n')
print('| Brand | Records | Weight range | Numerical balance | Face material | Five model inputs |')
print('|---|---:|---:|---:|---:|---:|')
for brand, rows in sorted(groups.items()):
    n = len(rows)
    weight = sum(r['specs'].get('weight',{}).get('min') is not None and r['specs'].get('weight',{}).get('max') is not None for r in rows)
    balance = sum(any(r['specs'].get('balance',{}).get(u) is not None for u in ('mm','cm')) for r in rows)
    face = sum(bool(r['specs'].get('surface',{}).get('material')) for r in rows)
    inputs = sum(r['inputsPublished'] == 5 for r in rows)
    print(f'| {brand} | {n} | {weight}/{n} | {balance}/{n} | {face}/{n} | {inputs}/{n} |')
print('\nSource: [PadelTrue open data](https://padeltrue.com/data), CC BY 4.0. Keep the GitHub commit SHA alongside this table when citing a snapshot. Field sources and recorded wording are in rackets.json; calculated ratings are not play tests.')
