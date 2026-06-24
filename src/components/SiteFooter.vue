<script setup lang="ts">
import { brand } from "@/data/site"
import {
  footerBrandName,
  footerBrandTag,
  footerAddress,
  footerPhone,
  footerEmail,
  footerHours,
  footerClosedDay,
  footerFollow,
  footerCopyright,
  footerIcp
} from "@/data/footer"
</script>

<template>
  <footer class="footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <span class="brand-mark large" aria-hidden="true">{{ brand.mark }}</span>
        <p class="footer-name">{{ footerBrandName }}</p>
        <p class="footer-tag">{{ footerBrandTag }}</p>
      </div>
      <div>
        <p class="footer-h">地址</p>
        <p>{{ footerAddress }}</p>
        <p class="footer-h">电话</p>
        <p>{{ footerPhone }}</p>
        <p class="footer-h">邮箱</p>
        <p>{{ footerEmail }}</p>
      </div>
      <div>
        <p class="footer-h">营业</p>
        <p v-for="h in footerHours" :key="h">{{ h }}</p>
        <p class="closed-day">{{ footerClosedDay }}</p>
      </div>
      <div>
        <p class="footer-h">关注</p>
        <p v-for="f in footerFollow" :key="f">{{ f }}</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>{{ footerCopyright }}</p>
      <p>{{ footerIcp }}</p>
    </div>
  </footer>
</template>
