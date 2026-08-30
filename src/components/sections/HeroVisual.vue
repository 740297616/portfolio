<script setup lang="ts">
/**
 * Hero 装饰背景：网格 + 柔光 + 光束 + 缓慢旋转的几何标记。
 * 视差效果让这一层比内容移动得更慢。
 */
const { y } = useWindowScroll()
const parallaxStyle = computed(() => ({
  transform: `translateY(${Math.min(y.value * 0.12, 120)}px)`,
}))
</script>

<template>
  <div
    class="pointer-events-none absolute inset-0 overflow-hidden"
    :style="parallaxStyle"
    aria-hidden="true"
  >
    <!-- 网格，径向渐隐 -->
    <div
      class="absolute inset-0"
      style="
        background-image:
          linear-gradient(var(--color-fx-grid) 1px, transparent 1px),
          linear-gradient(90deg, var(--color-fx-grid) 1px, transparent 1px);
        background-size: 72px 72px;
        mask-image: radial-gradient(ellipse 80% 60% at 50% 20%, black 30%, transparent 75%);
        -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 20%, black 30%, transparent 75%);
      "
    />

    <!-- 顶部柔光 -->
    <div
      class="absolute left-1/2 top-[-240px] h-[480px] w-[720px] -translate-x-1/2 rounded-full"
      style="background: radial-gradient(closest-side, var(--color-fx-glow), transparent)"
    />

    <!-- 横向光束 -->
    <div
      class="absolute left-1/2 top-[32%] h-px w-[min(90vw,900px)] -translate-x-1/2"
      style="
        background: linear-gradient(90deg, transparent, var(--color-fx-beam), transparent);
      "
    />
    <div
      class="absolute left-1/2 top-[68%] h-px w-[min(70vw,640px)] -translate-x-1/2"
      style="background: linear-gradient(90deg, transparent, var(--color-fx-beam-faint), transparent)"
    />

    <!-- 旋转几何标记 -->
    <svg
      class="absolute right-[6%] top-[22%] hidden h-72 w-72 animate-[spin_60s_linear_infinite] lg:block"
      viewBox="0 0 200 200"
      fill="none"
    >
      <rect
        x="40"
        y="40"
        width="120"
        height="120"
        rx="18"
        style="stroke: var(--color-fx-mark)"
        transform="rotate(45 100 100)"
      />
      <rect
        x="58"
        y="58"
        width="84"
        height="84"
        rx="12"
        style="stroke: var(--color-fx-mark-strong)"
        transform="rotate(45 100 100)"
      />
      <circle cx="100" cy="100" r="3" style="fill: var(--color-fx-mark-dot)" />
    </svg>

    <!-- 底部淡出到页面背景：solid background-color（可过渡）+ 静态 mask（不变），
         让 fade 和页面背景同步过渡而不是瞬变 -->
    <div
      class="hero-visual__fade absolute inset-x-0 bottom-0 h-40"
      aria-hidden="true"
    />
  </div>
</template>

<style scoped>
.hero-visual__fade {
  background-color: var(--color-bg);
  -webkit-mask-image: linear-gradient(to bottom, transparent, #000);
  mask-image: linear-gradient(to bottom, transparent, #000);
}
</style>
