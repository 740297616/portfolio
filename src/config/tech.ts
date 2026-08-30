import type { TechCategory } from '@/types/content'

/**
 * 技术栈按分类分组；level 取值 expert | proficient | familiar，years 可选。
 * 图标来自 Iconify（https://icones.js.org）。
 */
export const techCategories: TechCategory[] = [
  {
    name: '前端',
    items: [
      { name: 'Vue 3', icon: 'logos:vue', level: 'expert', years: 3 },
      { name: 'TypeScript', icon: 'logos:typescript-icon', level: 'proficient', years: 2 },
      { name: 'JavaScript', icon: 'logos:javascript', level: 'expert', years: 4 },
      { name: 'uni-app', icon: 'simple-icons:wechat', level: 'proficient', years: 2 },
      { name: 'Vite', icon: 'logos:vitejs', level: 'proficient', years: 2 },
    ],
  },
  {
    name: '后端',
    items: [
      { name: 'Python', icon: 'logos:python', level: 'expert', years: 3 },
      { name: 'FastAPI', icon: 'simple-icons:fastapi', level: 'expert', years: 2 },
      { name: 'Node.js', icon: 'logos:nodejs-icon', level: 'proficient', years: 2 },
      { name: 'HTTPX', icon: 'ph:globe-duotone', level: 'proficient', years: 2 },
    ],
  },
  {
    name: '数据库',
    items: [
      { name: 'MySQL', icon: 'logos:mysql', level: 'proficient', years: 2 },
      { name: 'Redis', icon: 'logos:redis', level: 'proficient', years: 2 },
      { name: 'SQLite', icon: 'simple-icons:sqlite', level: 'proficient', years: 2 },
    ],
  },
  {
    name: 'AI',
    items: [
      { name: 'OpenAI API', icon: 'simple-icons:openai', level: 'proficient', years: 1 },
      { name: 'Claude API', icon: 'simple-icons:anthropic', level: 'proficient', years: 1 },
      { name: 'DeepSeek API', icon: 'ph:brain-duotone', level: 'proficient', years: 1 },
      { name: 'AstrBot', icon: 'ph:robot-duotone', level: 'proficient', years: 1 },
    ],
  },
  {
    name: 'DevOps',
    items: [
      { name: 'Docker', icon: 'logos:docker-icon', level: 'proficient', years: 2 },
      { name: 'Linux', icon: 'logos:linux-tux', level: 'proficient', years: 3 },
      { name: 'Nginx', icon: 'logos:nginx', level: 'proficient', years: 2 },
      { name: 'Git', icon: 'logos:git-icon', level: 'expert', years: 4 },
    ],
  },
  {
    name: '工具',
    items: [
      { name: 'Git', icon: 'logos:git-icon', level: 'expert', years: 4 },
      { name: 'GitHub', icon: 'logos:github-icon', level: 'expert', years: 4 },
      { name: 'PyCharm', icon: 'logos:pycharm', level: 'expert', years: 3 },
      { name: 'WebStorm', icon: 'logos:webstorm', level: 'expert', years: 3 },
      { name: 'VS Code', icon: 'logos:visual-studio-code', level: 'proficient', years: 5 },
      { name: 'Postman', icon: 'logos:postman-icon', level: 'proficient', years: 1 },
      { name: 'Apifox', icon: 'simple-icons:apifox', level: 'proficient', years: 2 },
    ],
  },
]
