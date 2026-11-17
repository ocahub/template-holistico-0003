<script setup lang="ts">
// A marca: o simbolo redondo (logo da loja) com o nome em letra de inscricao e a linha de baixo.
defineProps<{ name: string, tagline?: string, logo?: string }>()
</script>

<template>
  <span class="f-brand">
    <img v-if="logo" class="f-brand__img" :src="logo" alt="" width="48" height="48">
    <span class="f-brand__text">
      <span class="f-brand__name">{{ name }}</span>
      <span v-if="tagline" class="f-brand__tag">{{ tagline }}</span>
    </span>
  </span>
</template>
