---
title: "You Cannot Manage What You Cannot See: Observability and Cost Control for AI Agents"
description: "Tracing agent runs, attributing cost per request, and catching silent failures. How to instrument LLM agents in production with spans, OpenTelemetry GenAI conventions, and evals."
excerpt: "Most teams ship an agent they cannot see inside. The fix is not a bigger model, it is instrumentation: spans, per-request cost, and the checks that catch a silent failure before a customer does."
date: "2026-06-11"
tags: ["Observability", "Cost", "Production"]
---

Most teams ship an agent they cannot see inside. The demo works, the thing goes to production, and then a user says "it gave me the wrong answer." There is no trace to pull up, no record of which tools it called or what it sent the model, so debugging becomes guesswork. This is the normal state of AI in production, and it is why so many agent projects stall before they ever reach real users.

The fix is not a bigger model. It is instrumentation.

An agent run is a sequence of steps: a model call, a tool call, a retrieval, another model call. The unit you want to capture is the span, one per step, nested into a trace that represents a single request end to end. When you have that tree, a wrong answer stops being a mystery. You open the trace and see the step where the agent picked the wrong tool, or passed a malformed argument, or got a bad chunk back from retrieval. The failure has an address.

This matters more for agents than for single model calls because errors compound. An agent that is reliable on each action still drops a meaningful share of multi-step runs somewhere in the middle, and the final output rarely tells you where. Per-step visibility is the only way to find it. Tool misuse, calling the wrong tool or with the wrong arguments, drives a large share of production agent failures, and you simply cannot see that in the answer.

There is now a standard worth building against. The OpenTelemetry GenAI semantic conventions define the shapes: an `invoke_agent` span at the top, `chat` spans for each model call, `execute_tool` spans for each tool, with agreed attribute names for the model, the token counts, and the finish reason. Instrument once against that vocabulary and you can send the data to whatever backend you like, Langfuse, Phoenix, LangSmith, Datadog, without rewriting your instrumentation. That portability is the whole point.

The same spans that explain failures also account for cost. Every model call carries input and output token counts. Multiply by the per-model price, tag the span with who and what triggered it, and cost becomes a number you can roll up by user, by feature, or by workflow. Without that, you know your total bill and nothing else, which means you cannot cut spend without cutting features blindly. Plenty of teams shipping AI do not track this at all. They find out which feature is expensive when finance asks why the bill doubled.

I tend to put this in one place. A thin telemetry layer, or a proxy that every model call passes through, so instrumentation lives at a single chokepoint instead of being sprinkled through the business logic. That one layer is where per-request cost attribution naturally sits, because every call goes through it. It is also the right place for the cost controls: a cache so identical requests do not pay twice, routing so an easy request goes to a cheap model and a hard one to a strong model, and provider fallback so when one vendor has a bad few minutes the request quietly retries on another instead of failing. A single provider should never be a single point of failure.

The failures that hurt most are the quiet ones. The model returns something confident, well formatted, and wrong. Nothing throws. The cheapest defense is deterministic: check every output for valid JSON, required fields, and whether the right tool was called, then watch the pass rate. A spike in malformed outputs is often the first sign that a provider changed a model under you or a prompt edit regressed. On top of that, sample a fraction of live traffic and score it with a judge, so you have a continuous read on quality rather than a one-time check at launch. Behavior drifts after you ship. If you are not scoring continuously, the regression is silent until customers find it.

It helps to keep two ideas separate. Observability explains what happened, with the trace as evidence. Evals decide whether it was good. They work as a loop: online scoring on production traffic flags a problem, the trace explains the cause, an offline eval in CI confirms the fix before it merges, and the dataset for that offline eval comes from the real production traces that scored badly.

None of this is exotic. Spans, token counts, a few deterministic checks, a cache, a fallback. The work is in doing it at the right altitude and turning it on early, before the agent is in front of users and you are debugging in the dark.
