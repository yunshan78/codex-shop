<script setup lang="ts">
import type { MenuCourse } from "@/types/content"

defineProps<{ course: MenuCourse }>()
</script>

<template>
  <li class="menu-course">
    <span class="course-tag">{{ course.tag }}</span>
    <div>
      <h4>{{ course.title }}</h4>
      <p>{{ course.desc }}</p>
    </div>
  </li>
</template>
