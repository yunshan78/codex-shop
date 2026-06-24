<script setup lang="ts">
import { MapPin } from "lucide-vue-next"
import {
  visitEyebrow,
  visitHeading,
  visitAddress,
  visitCardImg,
  visitCardAlt,
  visitCardCaption,
  hours
} from "@/data/visit"
</script>

<template>
  <section class="visit" id="visit">
    <div class="visit-grid">
      <div class="visit-block">
        <p class="eyebrow">{{ visitEyebrow }}</p>
        <h2>{{ visitHeading }}</h2>
        <p class="address-row">
          <MapPin :size="16" aria-hidden="true" />
          <span style="white-space: pre-line">{{ visitAddress }}</span>
        </p>
        <ul class="hours">
          <li
            v-for="row in hours"
            :key="row.days"
            :class="{ closed: row.closed }"
          >
            <span>{{ row.days }}</span><span>{{ row.time }}</span>
          </li>
        </ul>
      </div>
      <aside class="visit-card">
        <img :src="visitCardImg" :alt="visitCardAlt" loading="lazy" decoding="async">
        <p class="caption">{{ visitCardCaption }}</p>
      </aside>
    </div>
  </section>
</template>
