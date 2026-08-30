<script setup lang="ts">
import { gameServers, personalSites } from '@/config'
</script>

<template>
  <SectionContainer v-if="gameServers.length || personalSites.length" id="infrastructure">
    <SectionHeader
      eyebrow="基础设施"
      title="Things I Run"
      description="我正在运行和维护的服务与站点。"
    />

    <div class="space-y-12">
      <!-- 游戏服务器 -->
      <ServersSection />

      <!-- 个人站点 -->
      <SitesSection />
    </div>
  </SectionContainer>
</template>
