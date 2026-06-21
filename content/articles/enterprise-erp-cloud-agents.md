---
title: "Putting Agents to Work Against the Systems Your Business Runs On"
description: "Deploying AI agents against ERP and back-office systems of record in production cloud. Agent identity, idempotent writes, approval gates, and audit trails that survive an examination."
excerpt: "Most agent demos act on toys. The interesting work is acting on your ERP, where the orders and the ledger live. Here is how to let something non-deterministic touch a system of record safely."
date: "2026-06-15"
tags: ["ERP", "Cloud", "Enterprise"]
---

Most agent demos act on toys. The interesting work is acting on your ERP.

That is where the orders, the ledger, and the customer records live. An agent that drafts an email is forgiving. An agent that posts a journal entry, releases inventory, or creates a purchase order is operating on the same data your month-end close and your auditor depend on. The model is not the hard part. The hard part is letting something non-deterministic touch a system of record without double-posting, over-reaching, or going dark when someone asks what it did.

Here is how I think about building these for production.

**Keep the system of record and the system of action separate.** The ERP holds truth. The agent proposes, the ERP commits. SAP, Microsoft, Oracle, and NetSuite have all converged on the same shape: the agent never talks to raw APIs. It calls named tools behind a gateway. SAP wraps S/4HANA OData behind an MCP gateway so its assistant only sees `check_budget()` and `create_po()`. Microsoft ships an ERP MCP server for Dynamics Finance and Operations. The gateway handles OAuth and connectivity. The agent handles reasoning. Those are different jobs, and mixing them is how credentials end up in a prompt.

**Give the agent its own identity, scoped tight.** Do not hand it a human's token or a wildcard service account. That works in the demo and becomes the incident. Microsoft Entra Agent ID issues just-in-time tokens valid for one resource or one action, and it blocks high-privilege roles from being assigned to an agent at all. Treat the agent like any other principal: least privilege, short token lifetimes, and a real lifecycle from creation to decommission. Start read-only. Prove the reasoning. Then grant writes one tool at a time.

**The write path is the whole game.** Any action that mutates a record gets split into propose, approve, commit. The agent stores a structured payload. A human authorizes it where it matters. Then you commit, and you commit exactly once.

Exactly-once does not exist at the network layer. You get it by writing idempotently. Generate an idempotency key before the action, persist it in the agent's state, and store that key alongside the result in one transaction. On a retry, you return the stored result instead of running the write again. Without that key, a dropped connection turns into a duplicate purchase order, and nobody notices until reconciliation. So run reconciliation as a standing job: compare what the agent intended to write against what actually landed, and post compensating entries when they disagree. Assume the agent will eventually do something your happy path never planned for.

**Approval gates are infrastructure, not a popup.** The model's confidence does not map to whether a write is correct. The gate is what keeps an irreversible action from happening without a human in the causal chain. Build it asynchronous. Synchronous approval dies on gateway timeouts and token expiry under real load. And generate the idempotency key before the pause, so a retried approval still writes once.

**Run it where the data lives, over private networking.** The runtimes are real now. AWS Bedrock AgentCore gives you a serverless runtime with session isolation, VPC, and PrivateLink. Azure AI Foundry ties into Entra and Azure Monitor. GCP Vertex AI Agent Engine emits to Cloud Trace. Pick based on where your ERP and your data residency obligations sit, not on the marketing. Reach the ERP over private links, never the public internet. Keep secrets in a vault and rotate them.

**Log the action, not the chat.** When your compliance team asks why the agent did something, a transcript will not save you. You need an append-only, hash-chained record of the action, the data it used, and which gate allowed it. The EU AI Act sets record-keeping obligations for high-risk systems with a minimum six-month retention, and the high-risk rules bite in August 2026. Know where that evidence is stored, too. If it sits in a vendor's cloud in the wrong region, you have lost control of the exact thing a regulator will ask for.

None of this is exotic. It is identity, idempotency, gated writes, private networking, and an audit trail you would trust under examination. Get those right and an agent can carry real back-office work. Skip them and you have built a fast way to corrupt your system of record.
