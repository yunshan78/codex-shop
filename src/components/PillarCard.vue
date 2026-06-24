<script setup lang="ts">
import type { Pillar, PillarIcon } from "@/types/content"
import { Flame, MountainSnow, Hourglass } from "lucide-vue-next"

const props = defineProps<{ pillar: Pillar }>()

const iconMap: Record<PillarIcon, typeof Flame> = {
  Flame,
  MountainSnow,
  Hourglass
}
</script>

<template>
  <article class="pillar">
    <span class="pillar-icon" aria-hidden="true">
      <component :is="iconMap[props.pillar.icon]" />
    </span>
    <h3>{{ pillar.title }}</h3>
    <p>{{ pillar.desc }}</p>
  </article>
</template>
