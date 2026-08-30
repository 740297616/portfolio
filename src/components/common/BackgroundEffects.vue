<script setup lang="ts">
/**
 * 全局背景装饰：三层固定且不参与交互的层（漂移柔光 / 鼠标聚光 / 噪点）。
 * 纯单色、刻意保持低存在感，prefers-reduced-motion 时整体停用。
 */
import { useMouseSpotlight } from '@/composables/useMouseSpotlight'

const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

const { spotlightStyle } = useMouseSpotlight({ disabled: reducedMotion })
</script>

<template>
  <div class="bg-fx pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <!-- 漂移柔光 -->
    <div class="bg-fx__glows" :class="{ 'bg-fx__glows--static': reducedMotion }">
      <span class="bg-fx__glow bg-fx__glow--a" />
      <span class="bg-fx__glow bg-fx__glow--b" />
      <span class="bg-fx__glow bg-fx__glow--c" />
    </div>

    <!-- 鼠标聚光（reduced motion 下隐藏） -->
    <div v-if="!reducedMotion" class="bg-fx__spotlight" :style="spotlightStyle" />

    <!-- 噪点层 -->
    <div class="bg-fx__noise" />
  </div>
</template>

<style scoped>
/* 漂移柔光 */
.bg-fx__glows {
  position: absolute;
  inset: 0;
}

.bg-fx__glow {
  position: absolute;
  border-radius: 9999px;
  filter: blur(120px);
  will-change: transform;
}

/* 左上冷白光晕 */
.bg-fx__glow--a {
  top: -18%;
  left: -12%;
  width: 46vw;
  height: 46vw;
  background: radial-gradient(circle at center, var(--color-glow-a), transparent 70%);
  opacity: 0.12;
  animation: bg-fx-drift-a 26s ease-in-out infinite;
}

/* 右侧淡光晕 */
.bg-fx__glow--b {
  top: 8%;
  right: -16%;
  width: 40vw;
  height: 40vw;
  background: radial-gradient(circle at center, var(--color-glow-b), transparent 70%);
  opacity: 0.09;
  animation: bg-fx-drift-b 30s ease-in-out infinite;
}

/* 底部中间锚点光晕 */
.bg-fx__glow--c {
  bottom: -22%;
  left: 30%;
  width: 52vw;
  height: 52vw;
  background: radial-gradient(circle at center, var(--color-glow-c), transparent 70%);
  opacity: 0.07;
  animation: bg-fx-drift-c 34s ease-in-out infinite;
}

.bg-fx__glows--static .bg-fx__glow {
  animation: none;
}

@keyframes bg-fx-drift-a {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(6vw, 4vh, 0) scale(1.08);
  }
}

@keyframes bg-fx-drift-b {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(-5vw, 6vh, 0) scale(1.1);
  }
}

@keyframes bg-fx-drift-c {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(4vw, -5vh, 0) scale(1.06);
  }
}

/* 鼠标聚光 */
.bg-fx__spotlight {
  position: absolute;
  inset: 0;
  opacity: var(--spot-o, 0);
  transition: opacity 0.6s ease;
  background: radial-gradient(
    500px circle at var(--spot-x, 50%) var(--spot-y, 50%),
    var(--color-spotlight),
    transparent 65%
  );
}

/* 噪点 */
.bg-fx__noise {
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 160px 160px;
}

@media (prefers-reduced-motion: reduce) {
  .bg-fx__glow {
    animation: none !important;
  }
}
</style>
