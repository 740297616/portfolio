import type { TechCategory } from '@/types/content'

/**
 * 技术栈按领域分组。
 *
 * level:
 * - expert      熟练掌握，可独立完成复杂项目
 * - proficient  熟悉并能够用于实际项目
 * - familiar    有一定实践经验
 *
 * years 为大致使用年限，可选。
 * 图标来自 Iconify：https://icones.js.org
 */
export const techCategories: TechCategory[] = [
  {
    name: 'Web 开发',
    items: [
      { name: 'Vue 3', icon: 'logos:vue' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'Vite', icon: 'logos:vitejs' },
      { name: 'uni-app', icon: 'ph:devices-duotone' },
    ],
  },

  {
    name: '后端开发',
    items: [
      { name: 'Python', icon: 'logos:python' },
      { name: 'FastAPI', icon: 'simple-icons:fastapi' },
      { name: 'Node.js', icon: 'logos:nodejs-icon' },
      { name: 'HTTPX', icon: 'ph:globe-duotone' },
    ],
  },

  {
    name: '数据与存储',
    items: [
      { name: 'MySQL', icon: 'logos:mysql' },
      { name: 'Redis', icon: 'logos:redis' },
      { name: 'SQLite', icon: 'simple-icons:sqlite' },
    ],
  },

  {
    name: 'AI',
    items: [
      { name: 'OpenAI API', icon: 'simple-icons:openai' },
      { name: 'Claude API', icon: 'simple-icons:anthropic' },
      { name: 'DeepSeek API', icon: 'ph:brain-duotone' },
      { name: 'AstrBot', icon: 'ph:robot-duotone' },
    ],
  },

  {
    name: '基础设施',
    items: [
      { name: 'Linux', icon: 'logos:linux-tux' },
      { name: 'Docker', icon: 'logos:docker-icon' },
      { name: 'Nginx', icon: 'logos:nginx' },
      { name: 'Git', icon: 'logos:git-icon' },
    ],
  },

  {
    name: '开发工具',
    items: [
      { name: 'GitHub', icon: 'logos:github-icon' },
      { name: 'VS Code', icon: 'logos:visual-studio-code' },
      { name: 'PyCharm', icon: 'logos:pycharm' },
      { name: 'WebStorm', icon: 'logos:webstorm' },
      { name: 'Postman', icon: 'logos:postman-icon' },
      { name: 'Apifox', icon: 'simple-icons:apifox' },
    ],
  },
]

