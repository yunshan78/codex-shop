<script setup lang="ts">
import PillarCard from "./PillarCard.vue"
import { pillars, philosophyEyebrow, philosophyHeading, philosophyLede } from "@/data/philosophy"
</script>

<template>
  <section class="philosophy" id="story">
    <header class="section-head">
      <p class="eyebrow">{{ philosophyEyebrow }}</p>
      <h2>{{ philosophyHeading }}</h2>
      <p class="lede">{{ philosophyLede }}</p>
    </header>
    <div class="grid-3">
      <PillarCard v-for="p in pillars" :key="p.title" :pillar="p" />
    </div>
  </section>
</template>
