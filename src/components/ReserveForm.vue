<script setup lang="ts">
import { onMounted, reactive, ref } from "vue"
import { Check } from "lucide-vue-next"
import {
  reserveSubmit,
  reserveEmptyMessage,
  reserveOkTemplate,
  timeOptions,
  partyOptions
} from "@/data/reserve"

const form = reactive({
  name: "",
  phone: "",
  date: "",
  time: "",
  party: "",
  note: ""
})

const status = ref("")
const dateInput = ref<HTMLInputElement | null>(null)

onMounted(() => {
  if (!dateInput.value) return
  const t = new Date()
  const yyyy = t.getFullYear()
  const mm = String(t.getMonth() + 1).padStart(2, "0")
  const dd = String(t.getDate()).padStart(2, "0")
  dateInput.value.min = `${yyyy}-${mm}-${dd}`
})

const onSubmit = (e: Event) => {
  e.preventDefault()
  if (!form.name || !form.phone || !form.date || !form.time || !form.party) {
    status.value = reserveEmptyMessage
    return
  }
  status.value = reserveOkTemplate
    .replace("{name}", form.name)
    .replace("{phone}", form.phone)
  form.name = ""
  form.phone = ""
  form.date = ""
  form.time = ""
  form.party = ""
  form.note = ""
}
</script>

<template>
  <form class="reserve-form" id="reserveForm" novalidate @submit="onSubmit">
    <label>
      <span>姓名 NAME</span>
      <input
        v-model="form.name"
        type="text"
        name="name"
        required
        placeholder="请输入您的姓名"
        autocomplete="name"
      >
    </label>
    <label>
      <span>电话 PHONE</span>
      <input
        v-model="form.phone"
        type="tel"
        name="phone"
        required
        placeholder="+86"
        autocomplete="tel"
      >
    </label>
    <label>
      <span>日期 DATE</span>
      <input ref="dateInput" v-model="form.date" type="date" name="date" required>
    </label>
    <label>
      <span>时间 TIME</span>
      <select v-model="form.time" name="time" required>
        <option value="">请选择</option>
        <option v-for="t in timeOptions" :key="t">{{ t }}</option>
      </select>
    </label>
    <label>
      <span>人数 PARTY</span>
      <select v-model="form.party" name="party" required>
        <option value="">请选择</option>
        <option v-for="n in partyOptions" :key="n">{{ n }} 位</option>
      </select>
    </label>
    <label class="full">
      <span>备注 NOTE</span>
      <textarea
        v-model="form.note"
        name="note"
        rows="3"
        placeholder="忌口 / 庆祝 / 特殊安排"
      ></textarea>
    </label>
    <button type="submit" class="btn btn-solid btn-block">
      <span>{{ reserveSubmit }}</span>
      <Check :size="16" aria-hidden="true" />
    </button>
    <p class="form-status" id="formStatus" role="status" aria-live="polite">{{ status }}</p>
  </form>
</template>
