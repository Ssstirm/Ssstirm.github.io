---
key: gesture-data-pipeline
locale: en
category: world
order: 1
title: Hand-Gesture Data Pipeline
subtitle: Synthetic data for hand tracking
period: 2026.07 – Present
role: Research Intern
org: ByteDance PICO
stack: [Diffusion video generation, Qwen multimodal VLM, Data pipeline]
links: []
summary: A data pipeline for hand-gesture tracking at ByteDance PICO — diffusion-based generation of gesture video data, with a Qwen multimodal VLM handling annotation and review.
---

## Context

Hand tracking is the primary input modality on a headset without controllers, and the models behind it are only as good as the gesture data they are trained on. Collecting that data by hand is slow, and real capture sessions under-cover the long tail: unusual hand shapes, lighting, skin tones, viewing angles, and occlusion.

## What I work on

I am building the data pipeline that sits upstream of gesture-tracking model training, in the multimodal interaction group at ByteDance PICO. It has two halves:

- **Generation.** Diffusion-based synthesis of hand-gesture video data, used to widen coverage beyond what captured sessions provide.
- **Annotation and review.** A Qwen multimodal VLM labels the generated gesture videos and screens them, so that samples which are malformed or off-spec are caught before they reach the training set.

## Why it matters

Treating data as a system rather than a one-off collection effort is what makes the coverage problem tractable — generation widens the distribution, and automated review keeps the widened distribution clean enough to train on. It is the same instinct as the data-engine work in [MoWorld](https://arxiv.org/abs/2607.06216): the model matters, but the pipeline that feeds it decides how far it gets.
