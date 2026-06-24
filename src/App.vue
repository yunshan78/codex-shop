<script setup lang="ts">
import SiteHeader from "@/components/SiteHeader.vue"
import HeroSection from "@/components/HeroSection.vue"
import PhilosophySection from "@/components/PhilosophySection.vue"
import DishesSection from "@/components/DishesSection.vue"
import MenuSection from "@/components/MenuSection.vue"
import VisitSection from "@/components/VisitSection.vue"
import ReserveSection from "@/components/ReserveSection.vue"
import SiteFooter from "@/components/SiteFooter.vue"
</script>

<template>
  <a class="skip" href="#main">跳到主要内容</a>
  <SiteHeader />
  <main id="main">
    <HeroSection />
    <PhilosophySection />
    <DishesSection />
    <MenuSection />
    <VisitSection />
    <ReserveSection />
  </main>
  <SiteFooter />
</template>
