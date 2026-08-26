import type { GameServer } from '@/types/content'

/**
 * Game servers — add new entries here, no component changes needed.
 * Status is manually maintained for now; swap with a runtime API later if needed.
 */
export const gameServers: GameServer[] = [
  {
    slug: 'mc-survival',
    game: 'Minecraft',
    icon: 'simple-icons:minecraft',
    status: 'online',
    // players: { current: 3, max: 20 }, // 游戏人数 todo是否可实现实时查询？
    version: 'vanilla-snapshot-26.3-snapshot-9',
    address: 'frp-bid.com:58015',
  },
  // {
  //   slug: 'terraria-main',
  //   game: 'Terraria',
  //   icon: 'simple-icons:terraria',
  //   status: 'offline',
  //   version: '1.4.4.9',
  //   address: 'terraria.example.com:7777',
  // },
  {
    slug: 'satisfactory-main',
    game: 'Satisfactory',
    icon: 'simple-icons:satisfactory',
    status: 'online',
    version: '1.1',
    address: 'frp-bid.com:33638',
  },
  // {
  //   slug: 'palworld-main',
  //   game: 'Palworld',
  //   icon: 'simple-icons:palworld',
  //   status: 'offline',
  //   version: 'Latest',
  //   address: 'palworld.example.com:8211',
  // },
]
