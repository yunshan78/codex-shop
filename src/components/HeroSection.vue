<script setup lang="ts">
import { CalendarCheck, ArrowRight, ChevronDown } from "lucide-vue-next"
import {
  heroEyebrow,
  heroHeading,
  heroLine,
  heroCtaPrimary,
  heroCtaSecondary,
  heroScrollCue,
  heroImage,
  heroImageAlt,
  heroMeta
} from "@/data/hero"
</script>

<template>
  <section class="hero" id="top">
    <div class="hero-media">
      <img :src="heroImage" :alt="heroImageAlt" fetchpriority="high">
      <div class="hero-scrim" aria-hidden="true"></div>
    </div>
    <div class="hero-inner">
      <p class="eyebrow">{{ heroEyebrow }}</p>
      <h1 class="display">{{ heroHeading }}</h1>
      <p class="hero-line">{{ heroLine }}</p>
      <div class="hero-actions">
        <a class="btn btn-solid" href="#reserve">
          <CalendarCheck :size="16" aria-hidden="true" />
          <span>{{ heroCtaPrimary }}</span>
        </a>
        <a class="btn btn-link" href="#menu">
          <span>{{ heroCtaSecondary }}</span>
          <ArrowRight :size="16" aria-hidden="true" />
        </a>
      </div>
      <dl class="hero-meta">
        <div v-for="item in heroMeta" :key="item.dt">
          <dt>{{ item.dt }}</dt>
          <dd>{{ item.dd }}</dd>
        </div>
      </dl>
    </div>
    <a class="scroll-cue" href="#story" :aria-label="`\u5411\u4e0b\u6eda\u52a8`">
      <span class="scroll-cue-text">{{ heroScrollCue }}</span>
      <ChevronDown :size="16" aria-hidden="true" />
    </a>
  </section>
</template>
