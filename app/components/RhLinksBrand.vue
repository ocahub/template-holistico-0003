<script setup lang="ts">
// A marca da pagina /links (kit, 00050): a mesma do cabecalho.
const { global } = useRhSite()
const store = useRhStore()
const company = useRhCompany()
const p = computed(() => (global('header')?.props ?? {}) as Record<string, any>)
const logo = computed(() => p.value.logoImage || store.value?.logoUrl || '')
const name = computed(() => company.text(p.value.logo) || store.value?.name || '')
const tagline = computed(() => company.text(p.value.tagline))
</script>

<template>
  <div class="f-links-brand"><BrandMark :name="name" :tagline="tagline" :logo="logo" /></div>
</template>

<style>
.f-links-brand { display: flex; justify-content: center; margin-bottom: 12px; }
.f-links-brand .f-brand__img { width: 72px; height: 72px; }
</style>
