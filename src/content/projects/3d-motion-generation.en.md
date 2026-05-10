---
key: 3d-motion-generation
locale: en
category: world
order: 2
title: 3D Character Animation Generation
subtitle: Tracking the autoregressive and diffusion branches of text-to-motion through to the foundation-scale era
period: 2023 – 2025
role: Researcher
stack: [PyTorch, VQGAN, T2M-GPT, Momask, MotionGPT, MDM, HumanML3D]
links: []
summary: A long-running engagement with text-to-3D-motion generation — tracking and reproducing both branches of the field, with concrete contributions on each (VQGAN tokenization on the autoregressive side, few-step distillation on the diffusion side).
---

## What it is

Text-to-motion generation: input a sentence describing a motion, output a sequence of skeletal poses for a humanoid character. Trained and evaluated on HumanML3D.

## What I did

Tracked two parallel branches of the field for two-plus years, reproducing the major work in each and contributing one concrete improvement per branch. On the discrete-token autoregressive side — T2M-GPT, then Momask, MotionGPT — I swapped the VQ-VAE for VQGAN as the tokenizer, which improved motion-sequence reconstruction quality at the discretization stage. On the diffusion side — starting from the Human Motion Diffusion Model (MDM) and the wave that followed — I applied few-step distillation, sharply reducing inference cost while keeping FID essentially unchanged. The field has now entered the foundation-model era, most recently with HuYuan Motion bringing text-to-motion to large-model scale.
