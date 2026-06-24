<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue"
import { ArrowUpRight } from "lucide-vue-next"
import { brand } from "@/data/site"
import { navLinks, navCta } from "@/data/nav"

const scrolled = ref(false)
const navOpen = ref(false)
const isMobile = ref(false)

let raf = 0
const onScroll = () => {
  if (raf) return
  raf = requestAnimationFrame(() => {
    scrolled.value = window.scrollY > 32
    raf = 0
  })
}

const onResize = () => {
  const mobile = window.innerWidth <= 860
  isMobile.value = mobile
  if (!mobile) navOpen.value = false
}

const closeMenu = () => { navOpen.value = false }

const toggleMenu = () => { navOpen.value = !navOpen.value }

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true })
  window.addEventListener("resize", onResize)
  onScroll()
  onResize()
})

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll)
  window.removeEventListener("resize", onResize)
  if (raf) cancelAnimationFrame(raf)
})
</script>

<template>
  <header class="nav" :class="{ scrolled, 'nav-open': navOpen }" id="nav">
    <a class="brand" href="#top" aria-label="苑北 首页">
      <span class="brand-mark" aria-hidden="true">{{ brand.mark }}</span>
      <span class="brand-text">
        <span class="brand-name">{{ brand.name }}</span>
        <span class="brand-sub">{{ brand.sub }}</span>
      </span>
    </a>
    <nav class="nav-links" id="primaryNav" aria-label="主导航">
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        @click="closeMenu"
      >{{ link.label }}</a>
    </nav>
    <a class="btn btn-ghost nav-cta" :href="navCta.href">
      <span>{{ navCta.label }}</span>
      <ArrowUpRight :size="16" aria-hidden="true" />
    </a>
    <button
      class="nav-toggle"
      aria-label="打开菜单"
      :aria-expanded="navOpen"
      aria-controls="primaryNav"
      @click="toggleMenu"
    >
      <span></span><span></span><span></span>
    </button>
  </header>
</template>
