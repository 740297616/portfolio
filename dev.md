# AI Prompt

你是一位顶尖的产品设计师（Product Designer）、UI/UX Designer 和 Senior Frontend Engineer。

你的任务不是简单生成一个 Vue 页面，而是设计并开发一个可以长期维护、持续扩展的个人开发者工作室官网。

整个项目必须达到上线产品的质量，而不是 Demo。

---

## 项目定位

这是一个开发者工作室主页（Developer Studio）。

它部署在我的根域名。

它不是传统意义上的简历网站，也不是后台管理系统，而是一个能够体现个人技术能力、设计审美以及项目实力的官方网站。

打开首页，希望别人第一印象是：

"这是一个很专业的全栈开发者。"

整个网站需要兼顾：

* 品牌感
* 科技感
* 极简
* 专业
* 留白
* 高级

避免：

* 花里胡哨
* 国产后台风
* 模板感
* 廉价渐变
* 大面积彩色

---

## UI 风格

参考：

* Linear
* Vercel
* Raycast
* Apple Developer
* GitHub

整体采用：

* 黑白配色
* 深色主题
* 大量留白
* 极细边框
* Glass 风格点缀（少量）
* 微妙阴影
* 大圆角
* 极简图标

禁止：

Bootstrap 风格

Material Design 风格

Element Plus 风格

国产 Admin 模板风格

---

## 动画

动画必须克制。

参考 Linear 官网。

需要：

页面首次加载

淡入

向上浮现

滚动 Reveal

按钮 Hover

卡片 Hover

导航吸顶

页面切换

滚动视差（轻微）

鼠标跟随高光（轻微）

禁止：

炫酷粒子

满屏特效

复杂 Three.js

动画不能影响性能。

---

## 技术要求

Vue3

TypeScript

Vite

Vue Router

Pinia

UnoCSS（推荐）

Iconify

Motion

VueUse

Auto Import

ESLint

Prettier

项目结构必须企业级。

所有组件必须可复用。

禁止把所有代码写进 App.vue。

---

## 页面结构

### Hero

不要头像。

第一页采用大标题。

例如：

```
Full-stack Developer

Building modern web experiences.

Crafting AI-powered applications.
```

下面放一句介绍。

旁边不要图片。

而是使用：

极简动态图形

几何元素

Grid

渐变线条

SVG

轻微动画。

Hero 下方：

两个按钮：

Projects

Contact

---

### About

介绍自己。

不是流水账。

而是：

我专注于

现代 Web

AI

Backend

Developer Experience

Infrastructure

Open Source

用几段简洁文案体现专业能力。

---

### Tech Stack

不要只是 Logo。

采用：

分类展示。

例如：

Frontend

Backend

Cloud

DevOps

AI

Database

每个技术都有：

Logo

熟练程度

使用年限（可配置）

Hover 动效。

---

### Featured Projects

整个网站重点。

采用卡片。

每个项目包含：

标题

简介

技术栈

截图（预留）

GitHub

Live Demo

标签

支持置顶。

项目以后方便新增。

---

### Timeline

采用时间轴。

展示：

Education

Experience

Projects

Milestones

不要像简历。

更像成长记录。

---

### Current Focus

增加一个：

Now

展示：

最近在做什么。

例如：

Building AI applications

Learning ...

Maintaining ...

Reading ...

全部来自配置文件。

---

### Statistics

展示：

GitHub Projects

Years Coding

Repositories

Stars

Visitors

全部采用动画数字。

支持以后接 API。

---

### Contact

极简。

GitHub

Email

Blog

X

Discord（可选）

二维码不要。

---

### Footer

一句品牌 Slogan。

例如：

Designed & Built with Vue.

或者：

Crafted with passion.

---

## 配置方式

整个网站必须高度配置化。

例如：

所有文字

所有项目

所有时间轴

所有联系方式

全部来自：

```
src/config/
```

而不是写死。

例如：

```
site.ts

projects.ts

timeline.ts

social.ts

tech.ts
```

未来新增内容无需修改组件。

---

## 响应式

Desktop 优先。

Tablet

Mobile

全部适配。

动画不能影响移动端。

---

## SEO

必须包含：

Title

Description

Keywords

Open Graph

Twitter Card

Sitemap

robots.txt

favicon

Manifest

未来支持博客。

---

## 代码规范

所有组件：

Composition API

TypeScript

script setup

Composable

Hooks

组件拆分合理。

避免重复代码。

---

## 文件结构

请先设计完整目录，例如：

```
src/

components/

layouts/

views/

config/

assets/

styles/

router/

stores/

composables/

utils/

types/

constants/
```

不要急着写代码。

---

## 开发流程

严格按照以下步骤执行：

第一步：

分析需求。

第二步：

设计整个网站信息架构。

第三步：

设计页面布局。

第四步：

设计组件拆分。

第五步：

设计目录结构。

第六步：

确认整体设计是否统一。

第七步：

开始编码。

每一步都必须充分思考。

不要一次输出所有代码。

按照真实团队开发流程逐步完成。

---

## 最终目标

最终效果应接近：

* Linear 官网的克制与高级感
* Vercel 官网的极简布局
* Apple Developer 的留白与细节
* 独立开发者工作室的品牌感

整体给人的感觉不是"一个学生的个人主页"，而是"一家专注于 AI 与现代 Web 技术的小型开发工作室官网"，专业、现代、可信，并且能够随着未来新增博客、项目展示、在线工具等内容自然扩展。
