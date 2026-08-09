---
key: claw-ai-lab
locale: zh
category: agent
order: 2
title: Claw-AI-Lab
subtitle: 端到端研究的多智能体平台
period: 2025 – 至今
role: 联合开发者
stack: [Python, TypeScript, PyTorch, 多智能体编排]
links:
  - label: GitHub
    href: https://github.com/Claw-AI-Lab/Claw-AI-Lab
summary: 给定一句 prompt，平台调度多个智能体协作完成文献调研、实验设计、代码生成、训练、评估到论文写作的全流程，产出论文、代码、图表与实验日志。GitHub 1.3k+ stars。
---

## 项目简介

Claw-AI-Lab 是一个自主的多智能体研究平台。输入一句 prompt，系统会派出专门角色的智能体协作完成文献调研、实验设计、代码生成、训练、评估、论文写作——最终把论文、可运行代码、配图和实验日志作为整体交付。

## 三种工作模式

- Explore（探索） — 对开放问题做自主研究。
- Discussion（论辩） — 多智能体辩论，把权衡空间显式呈现给用户。
- Reproduce（复现） — 复现已有工作，作为自检基线。

## 我的角色

优化了实验模块：适配国产昇腾 GPU 服务器，加固了实验运行的稳定性与准确性，并提升了整体流程的运行效率。

## 为什么重要

大多数"AI 研究智能体"的 demo 在与开发者真实环境对接的那一层就崩了。Claw 把本地文件系统、数据集、检查点都当作一等状态来管理，配合回滚、断点续跑和人工介入点——这是它能跑真实项目而不是只能跑玩具 benchmark 的原因。
