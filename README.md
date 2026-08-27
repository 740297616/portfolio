<div align="center">

# Lydia Studio

**全栈开发者 · AI 应用探索者**

专注于 AI 与现代 Web 技术的独立开发者工作室，构建快速、优雅、可靠的产品。

[![Vue](https://img.shields.io/badge/Vue-3.x-42b883?logo=vuedotjs&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.x-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![UnoCSS](https://img.shields.io/badge/UnoCSS-66.x-333333?logo=unocss&logoColor=white)](https://unocss.dev/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


[在线预览](https://lydia0.cn) · [博客](https://blog.lydia0.cn) · [GitHub](https://github.com/740297616)

</div>

---

## ✨ 特性

- 🎨 **Linear / Vercel 风格** — 深色主题、极简布局、大量留白、克制动画
- ⚡ **高性能** — Vite 8 + 按需加载，极速构建与首屏体验
- 🧩 **高度配置化** — 所有内容集中在 `src/config/`，新增内容无需修改组件
- 🎭 **精致动效** — 滚动 Reveal、鼠标跟随高光、数字动画，尊重 `prefers-reduced-motion`
- 🖥 **基础设施展示** — 游戏服务器状态（在线/离线、版本、连接地址一键复制）与自托管站点一览
- 🌐 **友链网络** — 朋友与值得访问的站点卡片，支持头像 / 图标两种展示方式
- 📱 **完全响应式** — Desktop / Tablet / Mobile 全适配
- 🔍 **SEO 就绪** — Open Graph、Twitter Card、Sitemap、robots.txt、Manifest 一应俱全
- 🛠 **企业级工程** — ESLint + Oxlint + Prettier + TypeScript 严格模式

## 🚀 快速开始

### 环境要求

- **Node.js** ≥ 22.18 或 ≥ 24.12
- **pnpm** ≥ 9

### 安装与运行

```bash
# 安装依赖
pnpm install

# 启动开发服务器（HMR）
pnpm dev

# 类型检查 + 生产构建
pnpm build

# 预览生产构建
pnpm preview

# 代码检查（oxlint + eslint，自动修复）
pnpm lint

# 代码格式化
pnpm format
```

## 📁 项目结构

```
src/
├── components/
│   ├── common/          # 通用组件（RevealMotion、BaseButton、BaseCard、SectionHeader 等）
│   ├── layout/          # 布局组件（AppHeader、AppFooter、BrandMark）
│   └── sections/        # 页面区块（Hero、About、Tech、Projects、Timeline、Now、Infrastructure、Friends、Stats、Contact 等）
├── composables/         # 组合式函数（useCountUp、useCardGlow、useMouseSpotlight 等）
├── config/              # ← 所有站点内容配置
├── constants/           # 共享动画缓动/时长
├── layouts/             # 页面布局
├── router/              # 路由 + 滚动行为 + 文档标题
├── stores/              # Pinia 状态（移动端菜单）
├── styles/              # 全局基础样式
├── types/               # 内容模型 + 自动导入类型声明
└── views/               # 页面视图（HomeView、NotFoundView）
```

## 🎨 内容配置

所有可见内容均来自 `src/config/`，**无需修改任何组件**：

| 文件 | 控制内容 |
| --- | --- |
| `site.ts` | 品牌名、标题/描述、导航、Hero 文案与 CTA |
| `about.ts` | 关于段落 + 专注领域 |
| `tech.ts` | 技术栈分类（图标 / 熟练度 / 年限） |
| `projects.ts` | 精选项目（标签、技术栈、GitHub/演示链接、置顶） |
| `timeline.ts` | 成长时间线 |
| `now.ts` | 「当下」——当前关注事项 |
| `stats.ts` | 动画统计数字（API 就绪结构） |
| `social.ts` | 联系方式（GitHub / Email / Blog / Telegram） |
| `friends.ts` | 友链（名称、简介、头像 / 图标、链接） |
| `servers.ts` | 游戏服务器（游戏、状态、版本、连接地址） |
| `sites.ts` | 个人站点（Blog、监控面板、代理服务等，含在线状态） |

> 类型定义见 `src/types/content.ts`。

### 新增游戏服务器示例

```ts
// src/config/servers.ts
{
  slug: 'mc-survival',
  game: 'Minecraft',
  icon: 'simple-icons:minecraft',
  status: 'online', // online | offline
  version: '1.21.4',
  address: 'mc.example.com:25565',
}
```

### 新增项目示例

```ts
// src/config/projects.ts
{
  slug: 'my-new-project',
  title: '我的新项目',
  description: '项目简介……',
  tech: ['Vue 3', 'TypeScript', 'FastAPI'],
  tags: ['全栈', 'AI'],
  github: 'https://github.com/yourname/my-new-project',
  pinned: true, // 置顶
}
```

## 🏗 技术栈

| 类别 | 技术 |
| --- | --- |
| **前端** | Vue 3 · TypeScript · Vite · UnoCSS · uni-app · motion-v · VueUse · Iconify |
| **后端** | Python · FastAPI · Node.js · HTTPX |
| **数据库** | MySQL · Redis · SQLite |
| **AI** | OpenAI API · Claude API · DeepSeek API · AstrBot |
| **DevOps** | Docker · Linux · Nginx · Git |
| **工程化** | ESLint · Oxlint · Prettier · vue-tsc · unplugin-auto-import · unplugin-vue-components |
| **工具** | GitHub · WebStorm · PyCharm · VS Code · Postman · Apifox |

## 🧩 扩展指南

- **新增页面**（如博客）：在 `src/views/` 添加视图，在 `src/router/index.ts` 注册路由——布局、过渡动画和 SEO 标题处理已全部就绪。
- **新增项目 / 时间线条目**：追加到对应配置文件，排序（`pinned`）和渲染自动完成。
- **新增游戏服务器 / 个人站点**：追加到 `servers.ts` / `sites.ts`——卡片、在线状态、连接地址复制均自动渲染（状态目前手动维护，后续可替换为运行时 API）。
- **新增友链**：追加到 `friends.ts`，提供 `avatar`（头像直链）或 `icon`（Iconify 图标）任一字段即可。
- **接入实时统计**：在 composable 中获取数据，喂给 `StatsSection` 的 `StatItem[]` 结构——组件无需改动。

## 📦 部署

构建产物输出到 `dist/`，可部署到任意静态托管平台：

```bash
pnpm build
```

> **部署前请检查：** 替换 `src/config/`、`index.html`、`public/robots.txt`、`public/sitemap.xml` 和 `public/site.webmanifest` 中的品牌名、域名与社交链接。项目截图放在 `public/` 下，通过 `projects.ts` 的 `image` 字段引用。

## 📄 License

[MIT](https://opensource.org/licenses/MIT) © [Lydia Studio](https://lydia0.cn)


---

<div align="center">

**Designed & Built with Vue.**

</div>
