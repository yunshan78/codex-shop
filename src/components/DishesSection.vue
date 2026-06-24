<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next"
import DishCard from "./DishCard.vue"
import { dishes, dishesEyebrow, dishesHeading, dishesLede, dishesCta } from "@/data/dishes"
</script>

<template>
  <section class="dishes" id="dishes">
    <header class="section-head">
      <p class="eyebrow">{{ dishesEyebrow }}</p>
      <h2>{{ dishesHeading }}</h2>
      <p class="lede">{{ dishesLede }}</p>
    </header>
    <div class="dish-grid">
      <DishCard v-for="d in dishes" :key="d.title" :dish="d" />
    </div>
    <a class="btn btn-link btn-center" href="#menu">
      <span>{{ dishesCta }}</span>
      <ArrowRight :size="16" aria-hidden="true" />
    </a>
  </section>
</template>
