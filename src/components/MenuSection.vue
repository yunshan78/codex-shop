<script setup lang="ts">
import MenuCourse from "./MenuCourse.vue"
import { menu, menuEyebrow, menuHeading, menuLede } from "@/data/menu"
</script>

<template>
  <section class="menu" id="menu">
    <header class="section-head">
      <p class="eyebrow">{{ menuEyebrow }}</p>
      <h2>{{ menuHeading }}</h2>
      <p class="lede">{{ menuLede }}</p>
    </header>
    <ol class="menu-list">
      <MenuCourse v-for="c in menu" :key="c.title" :course="c" />
    </ol>
  </section>
</template>
