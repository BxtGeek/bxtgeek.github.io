---
title: Railway Crossing Predictor
description: >-
  A mobile-first web app that predicts when the Kadubeesanahalli railway
  crossing gate in Bengaluru will open and close.
status: paused
repo: https://github.com/BxtGeek/railway-crossing-data
featured: true
tags:
  - react
  - typescript
  - github-actions
  - data
  - vibe-coded
---

Built for commuters who are tired of guessing whether to wait or take a detour.
It works without a backend server and is hosted free on GitHub Pages
([live app](https://bxtgeek.github.io/railway-crossing-data/)).

- Shows whether the gate is open, closed or approaching, plus the next closure and reopening time
- Merges back-to-back trains into one continuous closure
- Confidence score that drops as the data gets older
- A Cloudflare Worker triggers a GitHub Action that refreshes the data every 5 minutes
- **Status:** paused. The data source cut its free API limit from 300 to 50 requests a day,
  so live data is on hold until I find a replacement.

*Vibe coded: built mostly with AI assistance.*
