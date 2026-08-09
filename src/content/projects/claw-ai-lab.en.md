---
key: claw-ai-lab
locale: en
category: agent
order: 2
title: Claw-AI-Lab
subtitle: Multi-agent platform for research
period: 2025 – Present
role: Co-developer
stack: [Python, TypeScript, PyTorch, Multi-agent orchestration]
links:
  - label: GitHub
    href: https://github.com/Claw-AI-Lab/Claw-AI-Lab
summary: An autonomous research platform that turns a single prompt into a full deliverable — paper, code, figures, and experiment logs — via multi-agent orchestration with human-in-the-loop control. 1.3k+ stars on GitHub.
---

## What it is

Claw-AI-Lab is an autonomous, multi-agent research platform. Given a single prompt, it spawns a team of specialized agents that collaborate on literature review, experiment design, code generation, training, evaluation, and writing — producing a paper, the code that backs it, the figures, and the experiment logs as a single deliverable.

## Three modes

- Explore — autonomous investigation of an open question.
- Discussion — multi-agent debate that surfaces trade-offs the user can steer.
- Reproduce — replicate prior work as a self-checking baseline.

## What I do here

Optimized the experiment module: ported it to run on domestic Huawei Ascend GPU servers, hardened the stability and accuracy of experiment runs, and sped up the end-to-end pipeline.

## Why it matters

Most "AI research agent" demos break down on the seam between agents and the developer's actual environment. Claw treats the local file system, datasets, and checkpoints as first-class state, with rollback, resume, and human intervention points — which is what makes it usable for real projects rather than toy benchmarks.
