<script setup lang="ts">
/**
 * Decorative background for the hero: masked grid, soft glow,
 * gradient beams and a slowly rotating geometric mark.
 * Subtle parallax — the layer drifts slower than the content.
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
    <!-- Grid, faded out radially -->
    <div
      class="absolute inset-0"
      style="
        background-image:
          linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px);
        background-size: 72px 72px;
        mask-image: radial-gradient(ellipse 80% 60% at 50% 20%, black 30%, transparent 75%);
        -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 20%, black 30%, transparent 75%);
      "
    />

    <!-- Soft top glow -->
    <div
      class="absolute left-1/2 top-[-240px] h-[480px] w-[720px] -translate-x-1/2 rounded-full"
      style="background: radial-gradient(closest-side, rgba(255, 255, 255, 0.07), transparent)"
    />

    <!-- Horizontal gradient beams -->
    <div
      class="absolute left-1/2 top-[32%] h-px w-[min(90vw,900px)] -translate-x-1/2"
      style="
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.22), transparent);
      "
    />
    <div
      class="absolute left-1/2 top-[68%] h-px w-[min(70vw,640px)] -translate-x-1/2"
      style="background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)"
    />

    <!-- Rotating geometric mark -->
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
        stroke="rgba(255,255,255,0.10)"
        transform="rotate(45 100 100)"
      />
      <rect
        x="58"
        y="58"
        width="84"
        height="84"
        rx="12"
        stroke="rgba(255,255,255,0.16)"
        transform="rotate(45 100 100)"
      />
      <circle cx="100" cy="100" r="3" fill="rgba(255,255,255,0.5)" />
    </svg>

    <!-- Bottom fade into the page background -->
    <div
      class="absolute inset-x-0 bottom-0 h-40"
      style="background: linear-gradient(transparent, #08090a)"
    />
  </div>
</template>
