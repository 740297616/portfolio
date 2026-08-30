import type { GameServer } from '@/types/content'

/**
 * 游戏服务器；状态目前手动维护，后续可换成运行时 API。
 */
export const gameServers: GameServer[] = [
  {
    slug: 'mc-survival',
    game: 'Minecraft',
    icon: 'simple-icons:minecraft',
    status: 'online',
    // players: { current: 3, max: 20 }, // TODO: 是否可实现实时查询人数？
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
