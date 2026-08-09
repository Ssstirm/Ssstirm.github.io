---
key: 3d-motion-generation
locale: zh
category: world
order: 3
title: 3D 角色动画生成
subtitle: 文本到动作：自回归与扩散两条路线
period: 2023 – 2025
role: 研究员
stack: [PyTorch, VQGAN, T2M-GPT, Momask, MotionGPT, MDM, HumanML3D]
links: []
summary: 对文本到 3D 动作生成方向的长期跟踪与复现——同时跟进自回归与扩散两条分支，并各自做出一项具体改进（自回归侧的 VQGAN token 化、扩散侧的少步蒸馏）。
---

## 项目简介

文本到动作生成：输入一段对动作的文本描述，输出一段人体骨骼的动作序列。在 HumanML3D 上训练与评估。

## 我的工作

跟进该领域两条并行分支的发展，对每条分支的代表工作做系统复现，并各自做了一项具体改进。在离散序列自回归一侧——从 T2M-GPT 到 Momask、MotionGPT——我引入 VQGAN 替代 VQ-VAE 做序列离散化，进一步提升了动作序列的重建精度；在扩散一侧——从 Human Motion Diffusion Model (MDM) 开始的一系列扩散改进——我做了少步蒸馏，大幅压缩推理步数同时保持 FID 几乎不变。如今这个方向已经进入大模型时代——最新的混元 motion 把动作生成带入了基础模型规模。
