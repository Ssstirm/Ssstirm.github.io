---
key: coembodiment
locale: en
category: xr
order: 2
title: Coembodiment AI
subtitle: A human and an AI sharing one body
period: 2025 – 2026
role: First author
stack: [Unity, C#, VR, Mixed-control algorithms, User study]
links: []
summary: A two-study research programme on human–AI shared control of a single avatar. Study 1 surfaces where users push back; Study 2 proposes and validates a non-linear blending function as a better algorithm for collaborative control.
---

## The question

How do users actually feel when they share control of one virtual body with an AI, and what's a better way to mix human and AI input? Study 1 surfaces the problem; Study 2 proposes a method and tests it.

## Study 1 — Where users push back

In a classic VR locomotion task — natural walking as the action mode — we swept the human/AI control ratio (25/75, 50/50, 75/25, 100/0) and measured sense of agency. Users disliked being overridden — AI authority hurt agency more than the symmetric loss of human authority did — and once one side held a majority, "almost full" and "full" control felt the same. The takeaway: it's *how* control transfers, not the average ratio, that hurts experience.

## Study 2 — A better blending algorithm

We tested three mixing methods — gate (abrupt switch), linear (proportional), non-linear (smooth and eased) — against a 50/50 baseline. Non-linear blending won decisively: smoothest hand-over, highest sense of agency under shared control. Linear matched the baseline; gate transitions substantially degraded experience.

## Outcome

A first validation of users' subjective experience under coembodiment with AI: the data show users react negatively to being controlled by AI. Building on that, we designed several adaptive functions for human–AI shared control; the non-linear adaptive function delivered substantially better user experience than the alternatives. The finding is directly applicable to future human–robot collaborative control, game control, and adjacent domains.
