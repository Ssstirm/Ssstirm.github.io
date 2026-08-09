---
key: lingbot-distillation
locale: en
category: world
order: 2
title: LingBot Distillation
subtitle: 14B video diffusion → 4-step student
period: 2026.03 – 2026.05
role: Research Intern
org: Moxin Technology
stack: [PyTorch, Ascend 920C / CANN, Video diffusion, Knowledge distillation]
links: [{ label: "arXiv", href: "https://arxiv.org/abs/2607.06216" }]
summary: Reproduced LingBot's distillation pipeline on Huawei Ascend servers, distilling a teacher video-generation model that handles ~1000-frame long videos with camera-trajectory control.
---

## What I did

At Moxin Technology, I ported and ran LingBot's distillation pipeline on Huawei Ascend servers (CANN stack). The teacher was a video-generation model with camera-trajectory control and ~1000-frame long-video coverage; the student inherits both capabilities at a deployable parameter budget.

## Challenges and fixes

- Memory bottleneck in self-forcing training on Ascend. Autoregressive unrolling exploded activation memory on the backward pass. I traded time for space with a gradient-accumulation-style two-pass forward — recomputing activations to cut backward memory enough to fit the full long-video unroll.
- Instability when injecting camera control into a long-video distillation. Generating ODE pairs from the teacher was expensive and a source of training drift. I designed a new ODE-initialization method that uses the training data to initialize the student's ODE directly from the teacher — eliminating the explicit pair-generation step and stabilizing the distillation.

## Why it matters

Long-video diffusion typically needs 40–50 sampling steps for acceptable quality — prohibitively slow at thousand-frame scale. Distillation collapses that to 4 steps with minimal quality loss, taking a single generation from 50+ minutes down to under 4. Layer multi-machine parallelism on top and the model approaches real-time — the gap that turns it from a research artifact into something usable in embodied-AI and game products.
