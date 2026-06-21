---
title: "Enterprise Context Layers for Agents: From Semantic Models to Reasoning Graphs"
description: "Why enterprise agents need more than RAG. The progression from retrieving chunks to reasoning over a governed model of the business: semantic layers, knowledge graphs, GraphRAG, and MCP."
excerpt: "Most enterprise AI projects fail because the agent reads the company's documents without understanding the company. The fix is not a bigger model. It is a context layer."
date: "2026-06-21"
tags: ["RAG", "Knowledge Graphs", "Context"]
---

Most enterprise AI projects do not fail because the model is weak. They fail because the agent reads the company's documents without understanding the company. Gartner expected most AI projects without AI-ready data to be abandoned by 2026, and by mid-2025 a large share of firms had already pulled back. The pattern is consistent. The bot can quote the wiki. It cannot answer like someone who works there.

The fix is not a bigger model. It is a context layer.

## Start with what plain RAG actually does

Retrieval-augmented generation embeds your documents into vectors, finds the chunks most similar to the question, and pastes them into the prompt. For "find the passage that answers this," it works.

Its limits are structural, not a tuning problem. Fixed chunking splits related content across chunk boundaries, so the sentence you need sits in a chunk that never gets retrieved. Embedding similarity is not relevance. And the whole pipeline sits downstream of your source: if the source is stale or ungoverned, no reranker saves you. Retrieval, not generation, is where most enterprise answers go wrong.

So the question becomes: what does the agent need beyond "paragraphs that look like the query"? It needs definitions, and it needs relationships.

## Definitions: the semantic layer

Ask three teams what "active customer" means and you get three answers. An agent writing SQL against raw tables invents a fourth.

A semantic layer fixes this. It defines metrics and business terms once, in one governed place, then serves them to dashboards, notebooks, and agents through an API. dbt's Semantic Layer, Cube, and AtScale do this today. In 2025, dbt Labs, Snowflake, and Salesforce started the Open Semantic Interchange to standardize these definitions in vendor-neutral YAML, so a metric defined once is consumed everywhere.

For an agent, this is the difference between guessing "net revenue" from a column name and computing it the way Finance signed off on. Teams report large accuracy gains when an LLM queries a semantic layer instead of raw tables. That is the first half of understanding the business: shared meaning.

## Relationships: knowledge graphs and GraphRAG

The second half is connection. "Which customers are affected if a supplier in this region goes down?" is not a similarity search. It is a chain: region, supplier, factory, product, customer. Vector search matches words. It cannot walk that chain.

A knowledge graph models data as entities and typed relationships, so the connections documents only imply become things you can traverse. GraphRAG, Microsoft's open technique from 2024, uses an LLM to extract those entities and relationships from your corpus, then retrieves over the graph instead of over loose chunks. It outperforms plain RAG on multi-hop questions, the ones that require linking facts scattered across documents.

This is the move from retrieval to reasoning. Graph traversal answers "how are these connected," which is most of the hard questions a business actually asks.

The honest caveat: graphs cost more to build and are overkill for single-fact lookups. The strong systems are hybrid. Graph for relationships and multi-hop, vectors for fuzzy match over unstructured text, and the agent decides per query. Use the expensive tool only where it earns its cost.

## One interface: MCP

A semantic layer and a graph are no use if every agent needs a custom connector to reach them. That was the old problem: every model times every data source, all bespoke.

The Model Context Protocol, Anthropic's open standard from late 2024, gives agents one permissioned interface to tools and data. OpenAI and Google adopted it through 2025, and it now sits under the Linux Foundation. MCP is the plumbing, the standard way to fetch context. It is not the meaning. Do not confuse the two. A clean MCP server in front of an ungoverned warehouse is a fast path to a wrong answer.

## Context engineering, and the part nobody can skip

More context is not better. Every major model tested in a 2025 study got worse as the input grew. So the layer has to be selective: fetch the right thing, not everything. That discipline, deciding what enters the window for the next step, is context engineering.

And it has to be governed. The hard truth most teams miss: they control who can call the agent but not what the agent retrieves once called. Permissions belong in the retrieval path. Row-level security so the agent sees only authorized records. Column masking for sensitive fields. Audit logs on every access, because GDPR and SOX do not care that an AI made the query. And freshness, with staleness signals, so the agent does not cite last quarter's truth with full confidence.

## The arc

Plain RAG retrieves chunks. A semantic layer gives the agent shared definitions. A knowledge graph gives it relationships. MCP gives it one governed way in. Together they move the agent from "find me a paragraph" to "reason over a structured model of the business," with permissions and an audit trail intact.

That is the layer worth building. The model was never the hard part.
