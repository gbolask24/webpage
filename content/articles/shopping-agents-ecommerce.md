---
title: "Shopping Agents Are Here. The Catalog Is the New Interface."
description: "Agentic commerce, from the new agent payment protocols to the merchant-side catalog automation that makes products legible to shopping agents. Schema-validated enrichment and RAG taxonomy classification."
excerpt: "Buying is moving into the chat window. The protocols decide how money moves, but the catalog decides whether your product was ever in the conversation. A look at both sides of agentic commerce."
date: "2026-06-18"
tags: ["Ecommerce", "Agents", "Catalog"]
---

Buying is moving into the chat window. People now start product research inside ChatGPT, Gemini, Perplexity, and Amazon's shopping assistant. They describe what they want, and the agent searches, compares, and increasingly pays. The button-clicking human is being replaced by software acting on that human's behalf.

This breaks an assumption that every payment system was built on: that a person clicked "buy" on a trusted screen. Once an agent initiates the purchase, you have to answer three new questions. Did the user actually authorize this specific purchase? Does the agent's request reflect what the user really wanted? And who is accountable if it goes wrong?

That is the problem the new protocols are built to solve, and there is more than one of them. OpenAI and Stripe maintain the Agentic Commerce Protocol, the rails behind Instant Checkout in ChatGPT. It defines a checkout API and a delegated-payment step that hands the merchant a scoped, single-use token through the agent, while the merchant stays the seller of record. Google's AP2 takes a different angle: it signs the user's authorization as cryptographic mandates. An intent mandate captures what you allowed, including limits like a price ceiling. A cart mandate signs the exact items and price you approved. Chain them together and you get a non-repudiable record of who agreed to what. Then there is the Universal Commerce Protocol, announced by Google and Shopify at the start of 2026, defining how an agent discovers and transacts with any merchant, and the card networks layering on agent identity with things like Mastercard's Agentic Token and Visa's Trusted Agent Protocol.

These overlap. They partly compete. Anyone telling you the standard is settled has not read the announcements.

Here is the part most people miss, and it is the part I work on. None of this matters if the agent cannot understand your products.

An agent cannot reason about a listing that has a name and a price. It needs structured, high-resolution attributes: material, fit, compatibility, dimensions, the right category. Shopify is running tens of millions of multimodal model inferences a day to standardize listings for exactly this reason, and Google's onboarding for agentic checkout prioritizes merchants with clean, complete feeds. The catalog stopped being back-office hygiene. It became the interface the shopping agent reads. If your data is messy, you do not get recommended, and you never reach the checkout protocol at all.

I build the merchant side of this. The pipeline takes raw supplier data, enriches it, classifies it into a taxonomy, validates it, and publishes it. A few things make it work in production rather than in a demo.

First, treat the output as a typed contract, not free text. I constrain generation to a schema, so the model returns the exact fields and types I asked for, and I put a hard validation gate before anything publishes. Models hallucinate attributes. Without that gate you ship confident, wrong data at scale.

Second, ground the classification. Asking a model to recall the right node from a taxonomy with thousands of categories is asking it to guess. Instead I retrieve the nearest candidate nodes from a vector index, then have the model choose among them. The retrieval anchors the decision in the taxonomy that actually exists.

Third, separate confidence from correctness. High-confidence enrichments publish automatically. Low-confidence ones go to a human. And every attribute carries provenance, so when someone asks why a product landed in a category or got a spec, there is an answer. That is the line between something a merchant tolerates and something a merchant trusts.

The new fraud surface follows the same logic. When an agent transacts, a shared API key is not authorization. You want scoped, single-use credentials, signed mandates that bind the user, the agent, and the spending limit, and a way to tell a legitimate buying agent apart from a scraper. That is what the mandate and agent-identity work is for.

So there are two jobs here, and they are different. The consumer-side job is to be legible and buyable to shopping agents. The merchant-side job is to produce the clean, structured, validated catalog that makes the first job possible. I work on the second one, because that is where the agent economy is actually plumbed. The protocols decide how money moves. The catalog decides whether your product was ever in the conversation.
