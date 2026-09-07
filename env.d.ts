/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** 站点状态接口地址，缺省为 `/api/status` */
  readonly VITE_STATUS_ENDPOINT?: string
}
