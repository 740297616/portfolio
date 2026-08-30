import type { FriendLink } from '@/types/content'

/**
 * 友链，新增直接加在数组里即可。
 * avatar: 头像直链 URL（支持任意外部图片）
 * icon:   Iconify 图标名（未提供 avatar 时显示）
 */
export const friendLinks: FriendLink[] = [
  {
    name: 'LTDSA',
    href: 'https://www.ltdsa.cn/',
    description: '不疯魔不成活',
    avatar:
      'https://wxapp.zcst.edu.cn/cms/assets/26d777d9-db5b-466c-837b-7ba73a290680',
  },
  {
    name: 'KXIT',
    href: 'https://www.kxit.net/',
    description: '镇东的博客',
    avatar: 'https://wxapp.zcst.edu.cn/cms/assets/55a06e1e-3c57-4981-8446-3fca033a27ed',
  },
  {
    name: 'Darc',
    href: 'https://darc.pro/',
    description: 'UE Developer',
    avatar: 'https://wxapp.zcst.edu.cn/cms/assets/1dc657a8-e750-40fc-8d8c-69898a7c596e',
  },
]
