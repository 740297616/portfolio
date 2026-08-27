import type { PersonalSite } from '@/types/content'

/**
 * Personal sites — add new entries here, no component changes needed.
 */
export const personalSites: PersonalSite[] = [
  {
    slug: 'blog',
    name: 'Blog',
    description: '个人技术博客，记录开发经验、技术折腾与日常思考',
    url: 'https://blog.lydia0.cn',
    domain: 'blog.lydia0.cn',
    icon: 'simple-icons:ghost',
    status: 'online',
  },
  {
    slug: 'home',
    name: 'Homepage',
    description: '个人主页，展示我的项目、技术栈与正在做的事情',
    url: 'https://lydia0.cn',
    domain: 'lydia0.cn',
    icon: 'ph:house',
    status: 'online',
  },
  {
    slug: 'nezha',
    name: 'Nezha Monitoring',
    description: '自托管服务器监控面板，用于监控我的服务器与基础设施',
    url: 'https://nz.lydia0.cn',
    domain: 'nz.lydia0.cn',
    icon: 'simple-icons:grafana',
    status: 'online',
  },
  {
    slug: 'ghproxy',
    name: 'GitHub Proxy',
    description: '自托管 GitHub 加速与代理服务',
    url: 'https://ghproxy.lydia0.cn',
    domain: 'ghproxy.lydia0.cn',
    icon: 'simple-icons:github',
    status: 'online',
  },
  {
    slug: 'api',
    name: 'API Service',
    description: '公共 API 服务，提供一些实用接口',
    url: 'https://api.lydia0.cn',
    domain: 'api.lydia0.cn',
    icon: 'ph:plugs-connected',
    status: 'offline',
  },
]
