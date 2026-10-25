# X Article draft: R1D04 benchmark

Working draft, restructured on 19 October 2026. He writes every sentence by hand, so this is scaffolding to rewrite, not copy to paste. Raw counts, cost, tokens and timing come from the Decision Bench runs dashboard; intervals, the T2 accept list, Brier scores, the T4 breakdown and the paired photo effect come from the scorer via the brief. Opus 5.5 ran on a one-in-ten sample; the dashboard's whole-test Opus rows are that sample scaled by ten and are not used here as a run record. Bracketed notes are production tasks or facts only he can supply.

---

**Title (his words, 95 characters; the composer caps titles at 100; no winner):**

> I gave JEV 1.14 and OpenAI's Decisions API the same 1,999 product photos. Here is what I found.

**Cover:** [1080 px wide, one number legible on a phone: "+0.65 points, 3.1x the cost", or chart 2 cropped to the JEV row. Text labels, no vendor logos.]

---

JEV has been all over my feed for a couple of weeks: lightning fast and cheap, but text only. Then on 14 October TypeSafe shipped JEV 1.14, "for the builders AND dreamers", with images behind an experimental flag, which looks to me like an answer to OpenAI's Decisions API taking a photo with the question. The same post admits that the Jev everyone had been using, jev-1.13.0, was multimodal all along.

I had my own doubt to settle. In my work, a decision model dropped into a workflow that was not reshaped to give it enough context tends to make skewed calls, where a frontier model muddles through. So three questions: what is a photo actually worth to JEV, how does JEV compare with the Decisions API on the same items, and how far is either from a general model like Claude Opus 5.5, and at what price?

Last weekend I ran five tests, 7,070 items in all, through all three: support routing, product category with and without the main photo, intent with off-topic messages mixed in, and Decision Bench. Same items, same option order, pre-registered before the first call.

The photo bought JEV 0.65 points (13 more right answers out of 1,999; 95% interval +0.05 to +1.25) at 3.1 times the cost per decision. It bought the Decisions API nothing. JEV finished ahead of Decisions on off-topic messages and on Decision Bench, with no detectable difference on the other three tests, and its probabilities were better calibrated on all five. Opus 5.5, on a fixed one-in-ten sample, was ahead of both on product category, at about 244 times JEV's cost and 2.4 to 6.4 seconds a call.

jev-1.14.0, gpt-6-luna and claude-opus-5-5 at low effort, tag `prereg-2026-10-17`.

[Chart 1, captioned.]

## What a photo is worth

The product-category tests are the pair that matter here. T2 is the listing text alone; T3 is the same 1,999 products with the main product photo, same option order, the same image file to every system: 78 images fell outside JEV's size limits and were padded or shrunk into range, never cropped. JEV took the image through its `assets` map with the header, Decisions as a data URL, Opus as an image block.

[Table as image, captioned:]

| System | Products | Text only | Text and photo | Photo effect, points (95% interval) | Net extra right | Input tokens per call | Cost per 1,000 |
|---|---|---|---|---|---|---|---|
| JEV 1.14 | 1,999 | 85.9% | 86.5% | +0.65 (+0.05 to +1.25) | 13 | 878 → 2,716 | $0.037 → $0.114 (3.1x) |
| OpenAI Decisions API | 1,999 | 85.8% | 85.7% | -0.1 (-0.8 to +0.6) | -2 | 550 → 1,244 | $0.055 → $0.124 (2.3x) |
| Claude Opus 5.5, sample | 199 | 91.0% | 89.4% | -1.5 (-4.0 to +0.5) | -3 | 1,729 → 2,635 | $15.23 → $18.76 (1.2x) |

These counts use the pre-registered scoring, which treats five pairs of near-duplicate categories as right for every system; on the raw labels the photo gain is 7 right answers rather than 13. JEV's gain clears zero by a hair, and I had no pre-registered claim rule for this comparison, so I read it as a small gain at the edge of what this test can see.

What the photo clearly did is change JEV's certainty and its price. Answers given at exactly 100% confidence fell from 42.4% to 26.3%; Decisions went from 57.5% to 59.1%. JEV's input tokens per call roughly tripled, 878 to 2,716, and so did its cost. With text only, JEV was about a third cheaper than Decisions per decision; with the photo it is about 8% cheaper.

Why so little? TypeSafe's own post warns that every model does worse on images than on text, and on product category the listing text usually names the product anyway. A photo should pay where the text is thin, and there is post hoc support for that, labelled as such: of the nine products with under 30 characters of listing text, the photo turned three of JEV's four wrong answers right, and two of Decisions' four.

[Chart 2, captioned.]

If you want to send a photo yourself: PNG or JPEG behind a `TypeSafe-Danger-Zone-Images: true` header, each side 280 to 1,568 px, no resizing and no EXIF rotation on their side, billed as input tokens at the text price. On the day of my run `jev-latest` still served 1.13.0, so pin `jev-1.14.0`; nothing here compares 1.14 with 1.13. [Link the TypeSafe post (typesafe.ai/blog/jev-1-14) and the images page.]

So I would not send the photo by default. Send the listing text first and add the photo only when the text is thin or the confidence comes back low. On these numbers that keeps most calls at $0.037 per 1,000 and spends the 3x only where it has a chance to pay.

[Not allowed anywhere: Amazon listing text or product photos, in the article, the cover or the video.]

## JEV against the Decisions API, item by item

[Table as image, captioned:]

| Test | Items | JEV | Decisions | Verdict |
|---|---|---|---|---|
| T1 support routing (Bitext) | 1,000 | 92.2% | 91.1% | no detectable difference |
| T2 product category, text (Amazon electrical) | 2,000 | 85.9% | 85.8% | no detectable difference |
| T3 same, with photo | 1,999 | 86.5% | 85.7% | no detectable difference (p 0.068) |
| T4 intent with off-topic messages (CLINC150) | 1,000 | 88.2% | 84.2% | JEV ahead |
| T5 Decision Bench bench-v4 | 1,071 | 94.5% | 90.6% | JEV ahead |

JEV's two real leads are on intent with off-topic messages, 88.2% against 84.2%, and on Decision Bench, 94.5% against 90.6%. On support routing and on product category, with or without the photo, the gaps are inside what the test could see: roughly 1.4 to 1.8 points on the product-category tests and up to 4 points on the 1,000-item ones.

Across all five tests, JEV got 6,264 of 7,070 right (88.6%); Decisions got 6,152 (87.0%). JEV cost $0.072 per 1,000 decisions pooled over the run and Decisions $0.094; median call times were 0.22 to 0.26 seconds for JEV and 0.25 to 0.33 for Decisions, depending on the test.

The T4 gap has a specific mechanism. Of the 200 off-topic messages, JEV wrongly answered 21 as an intent and Decisions 19, so both reject junk about equally well. The difference is on the 800 real requests: JEV got 87.9% of them right against Decisions' 82.6%, and Decisions sent 80 real requests to "out of scope" against JEV's 35. The false-accept rate was pre-registered; the 35-against-80 count is post hoc. One example, drawn by seed from CLINC150 (CC BY 3.0): "why can't i access my chase account". The right answer is account_blocked. JEV said account_blocked at 0.64. Decisions said out_of_scope at 1.00.

Decisions declined to answer 13 of 7,070 items (1 on T1, 8 on T2, 4 on T3); refusals counted as wrong. JEV and Opus refused nothing.

The practical reading: if you route with the Decisions API, treat an out_of_scope at 1.00 as a prompt to re-check rather than a verdict, because that is where its errors sat in this run. On routing and intent, JEV was the cheaper and the better-calibrated choice. On product category from text, either will do, with JEV about a third cheaper.

## Calibration

The loudest doubt about decision models is whether the probability that comes back with each answer means anything. This run is the most direct public answer I have found.

[Table as image, captioned:]

| Test | Brier, JEV / Decisions (lower is better) | Verdict | Answers at exactly 100%, JEV / Decisions |
|---|---|---|---|
| T1 | 0.121 / 0.161 | JEV better | 41.8% / 7.4% |
| T2 | 0.262 / 0.283 | JEV better | 42.4% / 57.5% |
| T3 | 0.254 / 0.287 | JEV better | 26.3% / 59.1% |
| T4 | 0.172 / 0.261 | JEV better | 20.1% / 5.6% |
| T5 | 0.091 / 0.135 | JEV better | 54.1% / 44.0% |

Brier score measures how far the stated probabilities sat from what actually happened, so lower is better. JEV's was lower than Decisions' on all five tests, though I did not correct those differences for multiple comparisons. The complaint I keep seeing, that Decisions only ever returns 0 or 1, turns out to depend on the task. On product category it did answer at exactly 100% confidence on 57.5% of items (59.1% with the photo), where JEV sat at 42.4% and 26.3%. On routing and intent it is the other way round: Decisions at 100% on 7.4% and 5.6% of items, JEV on 41.8% and 20.1%.

For a builder this is the part that matters most. With JEV you can set a confidence cut-off and escalate what falls below it; its probabilities were honest enough to gate on across all five tests. With Decisions on product category, do not bother gating: more than half the answers come back at exactly 100%, so the number is a label, not a probability.

## Claude Opus 5.5, on a one-in-ten sample

Opus is here as the ceiling: a general frontier model with structured output, given the same questions, to show what that buys and what it costs. Haiku 5.5 is the model Anthropic positions for classification, but Opus 5.5 is the general model most people would actually reach for, and with structured output at low effort it is a fair thing to benchmark against.

The sample is the first tenth of each test in the seeded order, fixed in code before the run: 707 items. Opus is only ever set beside the other two on the same items.

[Table as image, captioned:]

| Test | Sample items | Opus | JEV, same items | Decisions, same items | Claimed |
|---|---|---|---|---|---|
| T1 | 100 | 95.0% | 94.0% | 92.0% | none |
| T2 | 200 | 91.0% | 86.0% | 84.0% | Opus ahead of both (+5.0, +7.0) |
| T3 | 199 | 89.4% | 84.9% | 83.4% | Opus ahead of both (+4.5, +6.0) |
| T4 | 100 | 97.0% | 93.0% | 87.0% | Opus ahead of Decisions (+10.0) |
| T5 | 108 | 94.4% | 92.6% | 82.4% | Opus ahead of Decisions (+12.0) |

On those items Opus was ahead of both on product category, with and without the photo, and ahead of Decisions on off-topic intent and Decision Bench. On routing, nothing is claimed.

On T4, Opus's 97% next to JEV's whole-test 88.2% looks like a nine-point lead; on the same 100 items it is four points, and I do not claim it.

Pooled over the 707 items, Opus cost $17.52 per 1,000 decisions against JEV's $0.072 and Decisions' $0.094. That is 244 times JEV and 187 times Decisions; per test the multiple ran from 104 to 525 times. Median call time ran from 2.4 seconds on off-topic intent to 6.4 on support routing, against about a quarter of a second for the other two.

So, on the doubt I started with: on the same items the frontier model was about five points ahead of JEV on product category and not detectably ahead elsewhere, at 244 times the price and ten to thirty times the wait.

Where that leaves me: run JEV on everything and send only the low-confidence slice to a frontier model. Sending one decision in ten to Opus would cost about $1.82 per 1,000 on this run's prices, against $0.07 for JEV alone. I did not test what that hybrid scores, so it is the next experiment, not a claim. And run Opus at low effort: on the 100 routing items, medium scored 96% against low's 95% for the same $24 per 1,000.

[Chart 3, captioned.]

## If you're building with these

The short version, from one Saturday's run and my own use of these APIs:

- Route and classify with JEV by default. It was ahead on two tests, showed no detectable difference on three, cost least on all five, answered in about a quarter of a second, and its probabilities were better calibrated on every test.
- Gate on confidence with JEV. Do not try to with Decisions on category tasks.
- Send the photo only when the text is thin. Budget for triple the input tokens when you do, and pin jev-1.14.0 rather than jev-latest, which still served 1.13 on the day.
- If you use Decisions for intent routing, re-check its out-of-scope calls. It over-used that exit on real requests.
- Keep a frontier model for the slice JEV is unsure about, and measure what that hybrid scores before you trust it.
- Low effort. Medium was the same price for one more right answer in a hundred.
- Do not treat either as a drop-in swap for your GPT or Claude calls. Run a shadow test first.

That last one comes from a shadow test I ran on mail triage. Swapping a frontier model for a decision model in the same workflow, with the same prompts, mostly failed: roughly 30 to 40% of the emails came back labelled right, with false positives and categories that did not hold. The fix was the setup around it: more examples, a better retriever, cleaner data, prompts built for that API. With that work in, it is getting better. Both JEV and the Decisions API will do the job for most people, but only after that work, and only on decisions where a wrong answer is cheap and speed is worth more than the last few points of accuracy.

## How far to trust this

The design was pre-registered and tagged (`prereg-2026-10-17`, commit 03fc011) before the first call at 17:22:53 London time. The tag is not cryptographically signed; the Opus sample rule and the T2 accept list rest on git's own timestamps from minutes before the first call (DEVIATIONS.md, item 2).

Seed 1017, one run per test, retries only on transport errors; refusals and invalid answers counted as wrong. The main run was 14,847 calls in 14 minutes, for $13.56.

Latency came from one machine in London on one Saturday evening; the 55 ms gap between JEV and Decisions is the size network routing alone could move.

Nothing here covers photos taken by customers, with blur, bad light or odd angles. No damage or condition checks, no reading values off receipts or labels, no Box, no multi-image comparison, no multilingual items (TypeSafe's own headline gain) and no long context. All five datasets are public, so the general model has very likely seen them. The labels are not perfect either: 3 of 100 audited T2 labels were wrong, and five pairs of near-duplicate categories count as right, the same for every system.

If you want to check any of this, rerun it from the repo at the tag prereg-2026-10-17, github.com/gbolask24/decision-bench, or send me a photo task you want in the next round.

---

## Draft notes (not article copy)

- Published 19 October 2026, 23:30 London time, at x.com/gbolagadehq/status/2112310531881156707 (@gbolagadehq). Audience everyone, replies open, no caption on the post, boost declined. He chose no disclosure line. The body below matches what went live.
- Site version added 25 October 2026 at `content/articles/jev-vs-openai-decisions.md` (live path /articles/jev-vs-openai-decisions once deployed). Same title and body as the X article, with these differences: the four tables are real markdown tables (Decisions' tokens as 551 to 1,246 from the data pack, against 550 to 1,244 on the X image), the three charts are PNGs under `public/images/decision-bench/` with the X captions as alt text and visible captions, "last weekend" became "On Saturday 17 October", the version line names the run date and links the repo at the tag, and the closing paragraph points to `public/logs` and `scripts/data_pack.py`. The renderer gained table styles and image captions for this. Not taken from the site brief: the 3,500-word expansion, dataset and vendor-docs links, Opus whole-test estimates, latency and run tables, disclosures and vendor-response sections. X went out first, so the brief's publish-site-first order did not happen; X sets no canonical.
- X draft was at x.com/compose/articles/edit/2112290824528576512, complete as of 19 Oct evening: title, body, six headings, three charts and four tables as the real PNGs with captions, 2,031 words. Decided with him: no race video in the article (it goes out as a separate post), no stability paragraph, no corrections line, no publication date, cover left as it is. Closing paragraph links the repo at the tag (public, checked 19 Oct); the opening quote links the TypeSafe post. The disclosure question was put to him and he chose to publish without it.
- X composer check (brief's open item): the Insert menu offers Media, GIF, Posts, Link preview, Divider and Code. No table support, so tables go in as images; code blocks exist. Paragraph breaks from Enter render as paragraphs; headings via the Body menu (Heading, Subheading, Body).
- Shadow test figure (roughly 30 to 40% right as a straight swap on mail triage) is his, given 19 Oct.
- Practical layer added 19 Oct at his request (brief's length and researcher-only framing set aside): four first-person "what I'd do" paragraphs at the end of the photo, head-to-head, calibration and Opus sections, and a bulleted "If you're building with these" section before the trust section. Every rule is tied to a number already in the article; the hybrid's accuracy is stated as untested. The last bullet and the paragraph after the list carry his mail-triage shadow test (his account, no numbers; add a count if he has one).
- Trimmed 19 Oct to hold length after the practical layer: cut the video-estimate paragraph (the caption carries it), the 122 image rows, the medium-effort and caching paragraphs, the ECE and option-order lines, the pilot sentence, and shortened the spec, sample, tag and latency passages.
- Word count of article body: about 2,150 in this file's count, about 2,100 in the composer.
- Tables as images: `outputs/charts/table1-photo-effect.png` (photo section), `table2-five-tests.png` (head-to-head), `table3-calibration.png`, `table4-opus-sample.png`; 2160 px wide PNGs with SVG sources, same type and colours as the charts. Insert each at its "[... table goes here as an image]" placeholder in the X draft via Insert, Media.
- Charts: `outputs/charts/chart1-jev-minus-decisions.png`, `chart2-photo-effect.png`, `chart3-cost-vs-right.png` (2160 px wide PNGs; SVG sources beside them; generator in the session scratchpad). Chart 1's grey band uses ±1.8 points on T2 and T3 and ±4.0 on the 1,000-item tests, taken from the brief's "about 1.4 to 1.8" and "up to 4"; set the exact widths from the data pack's power figures before publishing. Chart 3 mixes whole-test accuracy for JEV and Decisions with sample accuracy for Opus, as the brief specified, and says so in the subtitle and footer.
- Opening is now about 330 words in his narrative order (JEV's appeal, the photo gap, the 1.14 post, his own doubt, the test, the result), against the brief's 150-word three-facts screen; the result still arrives before the first chart.
- Structure change from the brief: the 1.14 release notes now follow the photo finding instead of preceding it; limits, method and ending are one closing section; the stability run and the pilot are in; the medium-effort comparison has its own paragraph.
- The opening says "last weekend" (the run was Saturday 17 October), which holds for a Monday 19 or Thursday 22 launch; change it if the date slips a week.
- Dates checked on 19 Oct against typesafe.ai: JEV launched in early access on 15 September 2026 (launch post), 1.14 available from 14 October 2026 (post and docs), jev-latest still pointing at jev-1.13.0 on the docs models page.
- Photo gain checked 19 Oct: results/summary.json and data-pack.md give 13 under the pre-registered accept list (PREREGISTRATION.md, line 30); the dashboard's raw counts give 7. The article now states both.
- Calibration: "the complaint I keep seeing" is his; if a specific post or thread made the 0-or-1 complaint, name it there instead.
- He supplies, if wanted: the disclosure sentence.
- Dashboard housekeeping: the Opus 5.5 rows in the main, medium and stability runs are the sample scaled by ten (update notes of 19 Oct, 07:00 and 07:10). Put the real counts back before anyone reads the dashboard as a run record or links it from the article.
- Open checks from the brief still gate publication: billing reconciliation, vendor terms on publishing benchmarks, the atlanai/TypeSafe tie question, `jev-latest` and Decisions GA on the morning, X composer table/cover behaviour, Premium and bio live.
- Wording rules held: "no detectable difference" throughout, no winner in the title, no 1.14-against-1.13 claim, no claim that photos help in general, no em dashes, JEV in capitals in prose, lower case only inside model IDs.
