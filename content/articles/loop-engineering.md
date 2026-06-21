---
title: "Loop Engineering: The Part of Agents That Actually Ships"
description: "Why the agent loop, not the model, decides whether an AI system ships. Termination conditions, budgets, context management, and runaway control in production agents."
excerpt: "The model is almost never the thing that breaks in production. The loop is. A look at the boring control plane that separates a demo from something you can put in front of a customer."
date: "2026-06-08"
tags: ["Agents", "LLM", "Reliability"]
---

The model is almost never the thing that breaks in production. The loop is.

A single LLM call is simple. You send a prompt, you get an answer, it stops. An agent is different. It plans, calls a tool, looks at what came back, and decides whether to go again. That cycle, plan then act then observe then repeat, is the whole game. Loop engineering is the work of controlling it: making it finish, keeping it inside a budget, recovering when a step fails, and stopping it before it runs away.

I want to talk about that work, because it is where most agent projects quietly fall apart.

**Start with the distinction Anthropic draws.** A workflow runs LLMs and tools along a path you wrote in code. An agent lets the model direct its own process and pick its own tools. Workflows are predictable because you fixed the path. Agents are flexible because you did not. Loop engineering matters most in the second case, where nobody decided in advance how many steps the thing would take.

**The first hard truth: models have no concept of "done."** Left alone, an agent will keep going. So the loop needs explicit ways to stop. I set a hard iteration cap and a cost budget on every loop, plus timeouts on individual tool calls. None of these are optional. There are public stories of agents that made hundreds of thousands of calls overnight and ran up bills in the thousands of dollars, all because nothing told them to stop.

**The second hard truth: the agent's own "I'm finished" is not trustworthy.** Whether to break or continue should be decided by a check you wrote before the loop ran, against criteria you can measure. If the goal was "the tests pass," run the tests. Do not ask the model how it feels about its work and take that as the stopping signal.

**Then there is context.** Every pass through the loop adds tokens: the plan, the tool call, the result. The window is finite, and recall actually degrades as it fills up. People call it context rot. So inside the loop I manage what stays. I compact older history into a summary. I clear stale tool results once I have what I need from them. For longer runs I push state out to a file the agent reads back at the start of the next pass, instead of carrying everything in the window. An agent that resumes from a progress file beats one trying to hold the entire job in its head.

**Errors need their own handling.** A tool will fail. The fix is not unlimited retries, that is how one broken call becomes a cost spiral. I cap retries with a circuit breaker and validate at each step rather than only at the end, because a bad decision early in the loop compounds through every step after it.

**Watch for the runaway shapes.** The classic one is the agent calling the same tool with the same arguments over and over, making no progress. So I detect no-progress and break on it. The other one is sub-agents spawning sub-agents with no depth limit. If you use sub-agents, cap the recursion.

**On sub-agents:** they are useful. An orchestrator hands a narrow task to a sub-agent that runs in its own fresh context window and returns a summary. You get parallelism and clean context. You also pay for it, roughly an order of magnitude more tokens than a single chat. So I reach for them when isolation earns its cost, and stay with one loop when it does not.

**A note on tools and frameworks.** It is tempting to pull in a heavy framework that promises to handle all of this. Most of them hide the actual prompts and tool calls, which is exactly the layer you need to see when the loop misbehaves. Anthropic's own advice, after working with many teams, is to start simple and add complexity only when it pays. That matches what I have seen. The teams shipping reliable agents are not running the most elaborate stack. They are running a loop they fully understand.

**Where I put the controls matters too.** Instructions in a prompt can be ignored by the model. Limits enforced in infrastructure cannot. So the budget cap, the iteration cap, the kill switch live in a layer in front of the LLM calls, not in the prose I send the model.

None of this is glamorous. It is iteration caps, budgets, retries, context compaction, and a stopping check that does not lie to you. But it is the difference between an agent that demos once and an agent you can put in front of a customer and predict the bill for. The model gets the attention. The loop does the shipping.
