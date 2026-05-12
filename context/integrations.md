# Integrations

---

## Apify

**What:** Cloud scraping platform used for YouTube data extraction.
**API Key:** Stored in `.env` as `APIFY_KEY`.

### Actors Used

| Actor | ID | Purpose |
|---|---|---|
| pintostudio/youtube-transcript-scraper | `faVsWy9VTSNVIhWpR` | Scrape full video transcript with timestamps |
| streamers/youtube-scraper | `streamers~youtube-scraper` | Scrape video metadata (title, views, likes, description, etc.) |

### API Pattern

1. **Start run:** POST to `https://api.apify.com/v2/acts/{actorId}/runs?token={key}` with JSON body
2. **Poll status:** GET `https://api.apify.com/v2/actor-runs/{runId}?token={key}` — check `data.status`
3. **Fetch results:** GET `https://api.apify.com/v2/datasets/{datasetId}/items?token={key}`

Runs typically complete in 15-30 seconds. Dataset ID is returned in the initial run response at `data.defaultDatasetId`.

---

_Add new integrations here as they're set up._
