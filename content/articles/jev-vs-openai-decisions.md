---
title: "I gave JEV 1.14 and OpenAI's Decisions API the same 1,999 product photos. Here is what I found."
description: "JEV 1.14 vs the OpenAI Decisions API vs Claude Opus 5.5 on 7,070 pre-registered decisions: what a product photo is worth, who leads on which test, calibration, cost and speed."
excerpt: "Five pre-registered tests, 7,070 items, three systems. The photo bought JEV 0.65 points at 3.1 times the cost, bought the Decisions API nothing, and Opus 5.5 cost 244 times as much."
date: "2026-10-25"
tags: ["Benchmark", "Decision models", "Evals"]
---

JEV has been all over my feed for a couple of weeks: lightning fast and cheap, but text only. Then on 14 October TypeSafe shipped JEV 1.14, ["for the builders AND dreamers"](https://typesafe.ai/blog/jev-1-14), with images behind an experimental flag, which looks to me like an answer to OpenAI's Decisions API taking a photo with the question.

I had my own doubt to settle. In my work, a decision model dropped into a workflow that was not reshaped to give it enough context tends to make skewed calls, where a frontier model muddles through. So three questions: what is a photo actually worth to JEV, how does JEV compare with the Decisions API on the same items, and how far is either from a general model like Claude Opus 5.5, and at what price?

On Saturday 17 October I ran five tests, 7,070 items in all, through all three: support routing, product category with and without the main photo, intent with off-topic messages mixed in, and Decision Bench. Same items, same option order, pre-registered before the first call.

The photo bought JEV 0.65 points (13 more right answers out of 1,999; 95% interval +0.05 to +1.25) at 3.1 times the cost per decision. It bought the Decisions API nothing. JEV finished ahead of Decisions on off-topic messages and on Decision Bench, with no detectable difference on the other three tests, and its probabilities were better calibrated on all five. Opus 5.5, on a fixed one-in-ten sample, was ahead of both on product category, at about 244 times JEV's cost and 2.4 to 6.4 seconds a call.

Results for `jev-1.14.0`, `gpt-6-luna` and `claude-opus-5-5` at low effort, run 17 October 2026 from London, from the repo at tag [`prereg-2026-10-17`](https://github.com/gbolask24/decision-bench/tree/prereg-2026-10-17).

![JEV 1.14 minus the Decisions API on each test, in percentage points. The line is the 95% paired bootstrap interval; the grey band is roughly the smallest gap each test could detect.](/images/decision-bench/chart1-jev-minus-decisions.png)

## What a photo is worth

The product-category tests are the pair that matter here. T2 is the listing text alone; T3 is the same 1,999 products with the main product photo, same option order, the same image file to every system: 78 images fell outside JEV's size limits and were padded or shrunk into range, never cropped. JEV took the image through its `assets` map with the header, Decisions as a data URL, Opus as an image block.

| System | Products | Text only | Text and photo | Photo effect, points (95% interval) | Net extra right | Input tokens per call | Cost per 1,000 |
|---|---|---|---|---|---|---|---|
| JEV 1.14 | 1,999 | 85.9% | 86.5% | +0.65 (+0.05 to +1.25) | 13 | 878 to 2,716 | $0.037 to $0.114 (3.1x) |
| OpenAI Decisions API | 1,999 | 85.8% | 85.7% | -0.1 (-0.8 to +0.6) | -2 | 551 to 1,246 | $0.055 to $0.124 (2.3x) |
| Claude Opus 5.5, sample | 199 | 91.0% | 89.4% | -1.5 (-4.0 to +0.5) | -3 | 1,729 to 2,635 | $15.23 to $18.76 (1.2x) |

These counts use the pre-registered scoring, which treats five pairs of near-duplicate categories as right for every system; on the raw labels the photo gain is 7 right answers rather than 13. JEV's gain clears zero by a hair, and I had no pre-registered claim rule for this comparison, so I read it as a small gain at the edge of what this test can see.

What the photo clearly did is change JEV's certainty and its price. Answers given at exactly 100% confidence fell from 42.4% to 26.3%; Decisions went from 57.5% to 59.1%. JEV's input tokens per call roughly tripled, 878 to 2,716, and so did its cost. With text only, JEV was about a third cheaper than Decisions per decision; with the photo it is about 8% cheaper.

Why so little? TypeSafe's own post warns that every model does worse on images than on text, and on product category the listing text usually names the product anyway. A photo should pay where the text is thin, and there is post hoc support for that, labelled as such: of the nine products with under 30 characters of listing text, the photo turned three of JEV's four wrong answers right, and two of Decisions' four.

![What the main product photo added, per system: text and photo minus text only on the same products, with the 95% interval. Opus is on the 199-product sample.](/images/decision-bench/chart2-photo-effect.png)

If you want to send a photo yourself: PNG or JPEG behind a `TypeSafe-Danger-Zone-Images: true` header, each side 280 to 1,568 px, no resizing and no EXIF rotation on their side, billed as input tokens at the text price. On the day of my run `jev-latest` still served 1.13.0, so pin `jev-1.14.0`; nothing here compares 1.14 with 1.13.

So I would not send the photo by default. Send the listing text first and add the photo only when the text is thin or the confidence comes back low. On these numbers that keeps most calls at $0.037 per 1,000 and spends the 3x only where it has a chance to pay.

## JEV against the Decisions API, item by item

| Test | Items | JEV | Decisions | Verdict |
|---|---|---|---|---|
| T1 support routing (Bitext) | 1,000 | 92.2% | 91.1% | no detectable difference |
| T2 product category, text (Amazon electrical) | 2,000 | 85.9% | 85.8% | no detectable difference |
| T3 same, with photo | 1,999 | 86.5% | 85.7% | no detectable difference (p 0.068) |
| T4 intent with off-topic messages (CLINC150) | 1,000 | 88.2% | 84.2% | JEV ahead |
| T5 Decision Bench bench-v4 | 1,071 | 94.5% | 90.6% | JEV ahead |

JEV's two real leads are on intent with off-topic messages, 88.2% against 84.2%, and on Decision Bench, 94.5% against 90.6%. On support routing and on product category, with or without the photo, the gaps are inside what the test could see: roughly 1.4 to 1.8 points on the product-category tests and up to 4 points on the 1,000-item ones.

Across all five tests, JEV got 6,264 of 7,070 right (88.6%); Decisions got 6,152 (87.0%). JEV cost $0.072 per 1,000 decisions pooled over the run and Decisions $0.094; median call times were 0.22 to 0.26 seconds for JEV and 0.25 to 0.33 for Decisions, depending on the test.

The T4 gap has a specific mechanism. Of the 200 off-topic messages, JEV wrongly answered 21 as an intent and Decisions 19, so both reject junk about equally well. The difference is on the 800 real requests: JEV got 87.9% of them right against Decisions' 82.6%, and Decisions sent 80 real requests to "out of scope" against JEV's 35. The false-accept rate was pre-registered; the 35-against-80 count is post hoc. One example, drawn by seed from CLINC150 (CC BY 3.0): "why can't i access my chase account". The right answer is `account_blocked`. JEV said `account_blocked` at 0.64. Decisions said `out_of_scope` at 1.00.

Decisions declined to answer 13 of 7,070 items (1 on T1, 8 on T2, 4 on T3); refusals counted as wrong. JEV and Opus refused nothing.

The practical reading: if you route with the Decisions API, treat an `out_of_scope` at 1.00 as a prompt to re-check rather than a verdict, because that is where its errors sat in this run. On routing and intent, JEV was the cheaper and the better-calibrated choice. On product category from text, either will do, with JEV about a third cheaper.

## Calibration

The loudest doubt about decision models is whether the probability that comes back with each answer means anything. This run is the most direct public answer I have found.

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

![Cost per 1,000 decisions (log scale) against share right, one point per system per test. JEV and Decisions on every item; Opus on the fixed one-in-ten sample, so its accuracies are sample figures.](/images/decision-bench/chart3-cost-vs-right.png)

## If you're building with these

The short version, from one Saturday's run and my own use of these APIs:

- Route and classify with JEV by default. It was ahead on two tests, showed no detectable difference on three, cost least on all five, answered in about a quarter of a second, and its probabilities were better calibrated on every test.
- Gate on confidence with JEV. Do not try to with Decisions on category tasks.
- Send the photo only when the text is thin. Budget for triple the input tokens when you do, and pin `jev-1.14.0` rather than `jev-latest`, which still served 1.13 on the day.
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

If you want to check any of this, rerun it from the repo at the tag [`prereg-2026-10-17`](https://github.com/gbolask24/decision-bench/tree/prereg-2026-10-17): the call logs are in `public/logs`, and `scripts/data_pack.py` regenerates every number on this page from them. Or send me a photo task you want in the next round.
