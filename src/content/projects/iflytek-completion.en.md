---
key: iflytek-completion
locale: en
category: world
order: 4
title: Long-Sentence Completion for iFlyTek IME
subtitle: GPT pretrained from scratch, shipped
period: 2021 – 2022
role: NLP Researcher
org: iFlyTek
stack: [GPT, PyTorch, Pretraining, Data cleaning, NLP]
links: []
summary: Cleaned a 400 GB iFlyTek IME corpus down to 40 GB and pretrained a GPT model from scratch on it. The model shipped in the iFlyTek input method, powering long-text completion and poetry-creation features.
---

## What it is

A GPT-style language model pretrained from scratch as the engine behind long-sentence and creative completions in the iFlyTek input method.

## What I did

- Data cleaning. Reduced the 400 GB raw IME corpus to a 40 GB pretraining set — deduplication, language filtering, quality scoring, and topical balancing.
- Pretraining. Trained the GPT model from scratch on the cleaned corpus.
- Deployment. The model later shipped in the iFlyTek input method, powering long-text completion and poetry-creation features.

## Why it matters

Input methods are the highest-frequency text surface in Chinese-language productivity. A model that handles both pragmatic long-sentence completion and creative output (poetry) extends the IME from a typing tool into a writing partner.
