<template>
  <div id="top" class="relative flex min-h-screen flex-col">
    <BackgroundEffects />
    <AppHeader />

    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
