<script setup lang="ts">
import type { Dish } from "@/types/content"

defineProps<{ dish: Dish }>()
</script>

<template>
  <figure class="dish">
    <div class="dish-img">
      <img :src="dish.img" :alt="dish.alt" loading="lazy" decoding="async">
    </div>
    <figcaption>
      <span class="dish-cat">{{ dish.cat }}</span>
      <h3>{{ dish.title }}</h3>
      <p>{{ dish.desc }}</p>
      <span class="dish-price">{{ dish.price }}</span>
    </figcaption>
  </figure>
</template>
