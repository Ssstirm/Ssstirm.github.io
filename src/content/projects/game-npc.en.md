---
key: game-npc
locale: en
category: xr
order: 1
title: AI Game NPC
subtitle: How much help is too much?
period: 2024 – 2025
role: First author · SUI 2026
stack: [Apple Vision Pro, Unity 6]
links: []
summary: A VR puzzle game on Apple Vision Pro with an LLM-driven AI companion, used to study how much assistance players actually want from intelligent NPCs. 24-participant within-subjects study.
---

## The question

LLMs let game NPCs plan, talk, and act — but how much help do players actually want, and what kind? This work uses a VR puzzle game as a probe to find out.

## The system

The AI companion runs a three-layer pipeline: speech-to-text perception, an LLM brain that reads world state directly from the game engine and emits structured dialogue-plus-action plans, and a TTS-plus-action executor. It was wrapped in Break the Magic Circle, a Unity 6 VR puzzle on Apple Vision Pro. By varying which side held initiative — and how much the companion talked vs. acted — the same architecture was exposed at four assistance levels: Single Play (no help), User Control (executes on command), Discussion (co-plans, then acts together), and Agent Play (fully autonomous).

## The study

24 participants played all four modes in a counter-balanced Latin-square design. After each mode they filled out NASA-TLX (workload) and MiniPXI (player experience); a semi-structured interview afterwards collected play-style, mode preference, and system feedback.

## What we found

Assistance reduced workload, but full autonomy *hurt* enjoyment — players didn't want to be spectators. Participants split into four types (task-oriented, competitive, narrative, social) with very different preferences, suggesting adaptive interaction matters more than a single "right" assistance level.

## Why it matters

The default arc for AI NPCs is "more autonomy is better." The data says the opposite: peak experience sits in the middle, and the *transition* between human and AI authority matters as much as the average — echoing my Coembodiment AI work on shared-control avatars.
