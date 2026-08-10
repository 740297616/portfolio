<script setup lang="ts">
/**
 * Global ambient background — three fixed, non-interactive layers behind all
 * content. Monochrome and deliberately faint: drifting soft glows, a
 * mouse-follow spotlight, and a barely-there noise grain. Designed to read as
 * "static but alive" (Linear / Vercel / Raycast territory), never techy or busy.
 *
 * Fully disabled when the user prefers reduced motion.
 */
import { useMouseSpotlight } from '@/composables/useMouseSpotlight'

// `false` when the user has no preference, `true` when they want less motion.
const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

const { spotlightStyle } = useMouseSpotlight({ disabled: reducedMotion })
</script>

<template>
  <div class="bg-fx pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <!-- Drifting soft glows -->
    <div class="bg-fx__glows" :class="{ 'bg-fx__glows--static': reducedMotion }">
      <span class="bg-fx__glow bg-fx__glow--a" />
      <span class="bg-fx__glow bg-fx__glow--b" />
      <span class="bg-fx__glow bg-fx__glow--c" />
    </div>

    <!-- Mouse-follow spotlight (hidden entirely under reduced motion) -->
    <div v-if="!reducedMotion" class="bg-fx__spotlight" :style="spotlightStyle" />

    <!-- Fine grain overlay -->
    <div class="bg-fx__noise" />
  </div>
</template>

<style scoped>
/* ---- Drifting soft glows ------------------------------------------------ */
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

/* Top-left cool white pool */
.bg-fx__glow--a {
  top: -18%;
  left: -12%;
  width: 46vw;
  height: 46vw;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.14), transparent 70%);
  opacity: 0.12;
  animation: bg-fx-drift-a 26s ease-in-out infinite;
}

/* Right-mid faint pool */
.bg-fx__glow--b {
  top: 8%;
  right: -16%;
  width: 40vw;
  height: 40vw;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.1), transparent 70%);
  opacity: 0.09;
  animation: bg-fx-drift-b 30s ease-in-out infinite;
}

/* Bottom-center anchor pool */
.bg-fx__glow--c {
  bottom: -22%;
  left: 30%;
  width: 52vw;
  height: 52vw;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.08), transparent 70%);
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

/* ---- Mouse spotlight ----------------------------------------------------- */
.bg-fx__spotlight {
  position: absolute;
  inset: 0;
  opacity: var(--spot-o, 0);
  transition: opacity 0.6s ease;
  background: radial-gradient(
    500px circle at var(--spot-x, 50%) var(--spot-y, 50%),
    rgba(255, 255, 255, 0.06),
    transparent 65%
  );
}

/* ---- Noise grain --------------------------------------------------------- */
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
