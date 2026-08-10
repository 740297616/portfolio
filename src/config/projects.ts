import type { Project } from '@/types/content'

/**
 * Featured projects — add new entries here, no component changes needed.
 * `pinned: true` sorts a project to the front.
 * `image` is a path under /public (e.g. `/projects/foo.png`); a styled
 * placeholder is rendered when omitted.
 */
export const projects: Project[] = [
  {
    image: '',
    slug: 'my-zhuke',
    title: '我的珠科',
    description:
      '珠海科技学院微信小程序，为校内师生提供课表、成绩查询、校车定位、宿舍水电查询、图书馆检索等功能，并接入统一身份认证。',
    tech: ['FastAPI', 'Vue', 'uni-app', 'Python', 'MySQL'],
    tags: ['校园应用', '全栈'],
    github: 'https://github.com/740297616/my-zhuke',
    pinned: true,
  },
  {
    slug: 'xmt-oa',
    title: 'XMT OA',
    description:
      '基于 Vue 3 与 FastAPI 的现代化办公协同系统，涵盖用户权限、流程审批、公告管理等模块，采用前后端分离架构进行团队协作开发。',
    tech: ['Vue 3', 'TypeScript', 'FastAPI', 'MySQL'],
    tags: ['OA', '协同开发'],
    github: 'https://github.com/740297616/xmt-oa',
    pinned: true,
  },
  {
    slug: 'astr-plugin-zcst',
    title: 'astr_plugin_zcst',
    description:
      'AstrBot 校园插件，为机器人提供珠海科技学院相关服务，包括统一认证登录、成绩查询、课表、水电余额、图书馆等校园功能。',
    tech: ['Python', 'AstrBot', 'HTTPX', 'BeautifulSoup'],
    tags: ['插件', 'AI Bot'],
    github: 'https://github.com/740297616/astr_plugin_zcst',
  },
  {
    slug: 'zcst-api',
    title: 'ZCST API',
    description:
      '珠科校园服务 API，封装统一登录、教务系统、水电查询、图书馆等接口，提供缓存、代理及统一鉴权能力。',
    tech: ['FastAPI', 'Python', 'Redis', 'Docker'],
    tags: ['Backend', 'API'],
    github: 'https://github.com/740297616/zcst-api',
  },
]

/** Pinned first, original order otherwise. */
export const sortedProjects: Project[] = [...projects].sort(
  (a, b) => Number(b.pinned ?? false) - Number(a.pinned ?? false),
)
