<script setup lang="ts">
import ReserveForm from "./ReserveForm.vue"
import { reserveEyebrow, reserveHeading, reserveLede } from "@/data/reserve"
</script>

<template>
  <section class="reserve" id="reserve">
    <div class="reserve-inner">
      <header class="section-head section-head-light">
        <p class="eyebrow">{{ reserveEyebrow }}</p>
        <h2>{{ reserveHeading }}</h2>
        <p class="lede">{{ reserveLede }}</p>
      </header>
      <ReserveForm />
    </div>
  </section>
</template>
