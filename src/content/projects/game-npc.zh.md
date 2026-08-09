---
key: game-npc
locale: zh
category: xr
order: 1
title: AI Game NPC
subtitle: AI 同伴该帮多少？
period: 2024 – 2025
role: 第一作者 · SUI 2026
stack: [Apple Vision Pro, Unity 6]
links: []
summary: 一款基于 Apple Vision Pro 的 VR 解谜游戏，配 LLM 驱动的 AI 同伴，用来研究玩家到底希望 NPC 提供多少辅助。24 人内被试用户研究。
---

## 研究问题

大语言模型让 NPC 能规划、对话、行动——但玩家到底想要多少帮助、想要哪种？这项工作以一款 VR 解谜游戏为探针寻找答案。

## 系统

AI 同伴是一个三层流水线：语音转文字的感知层、直接从游戏引擎读取世界状态并输出结构化"对白 + 动作"的 LLM 认知层、TTS + 动作执行层。整套系统包装进 VR 解谜游戏 Break the Magic Circle（Unity 6 + Apple Vision Pro）。通过调整"主动权在哪一方"和"对话还是行动"，同一套架构暴露成四档辅助：Single Play（无辅助）、User Control（按指令执行）、Discussion（协同规划后执行）、Agent Play（完全自主）。

## 用户研究

24 人，拉丁方序对照内被试设计，每人玩遍四种模式。每个模式后填 NASA-TLX（工作负荷）和 MiniPXI（游戏体验）；结束后做半结构化访谈，收集玩家类型、模式偏好、系统反馈。

## 发现

辅助可降低工作负荷，但完全自主反而*损害*体验——玩家不想被变成观众。访谈聚出四类玩家（任务导向、竞技、叙事、社交），偏好差异显著，说明"自适应交互"比单一"正确辅助等级"更关键。

## 这件事为什么重要

AI NPC 的默认路径是推向更高自主，但数据指向相反：体验高点在中间，人与 AI 之间权限的过渡机制与平均辅助强度同等重要——这与 Coembodiment AI 中关于共控 avatar 的结论一脉相承。
