<script setup lang="ts">
import { sortedProjects } from '@/config'
import { STAGGER_STEP } from '@/constants/animation'
</script>

<template>
  <SectionContainer id="projects">
    <SectionHeader
      eyebrow="精选项目"
      title="代表作品。"
      description="由我端到端设计、构建并交付的产品与开源项目。"
    />

    <div class="grid gap-5 md:grid-cols-2">
      <RevealMotion
        v-for="(project, i) in sortedProjects"
        :key="project.slug"
        :delay="(i % 2) * STAGGER_STEP"
      >
        <ProjectCard :project="project" class="h-full" />
      </RevealMotion>
    </div>
  </SectionContainer>
</template>
