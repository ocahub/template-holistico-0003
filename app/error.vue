<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const notFound = computed(() => props.error.statusCode === 404)
useHead({ title: notFound.value ? 'Página não encontrada' : 'Site indisponível' })
</script>

<template>
  <NuxtLayout>
    <section class="f-wrap f-error">
      <p class="f-error__code">{{ error.statusCode }}</p>
      <h1 class="f-title">{{ notFound ? 'Não encontramos esta página' : 'O site está indisponível no momento' }}</h1>
      <p>{{ notFound ? 'O endereço pode ter mudado. Que tal começar pelo início?' : 'Tente de novo em alguns instantes.' }}</p>
      <button type="button" class="f-btn f-btn--night" @click="clearError({ redirect: '/' })">Voltar para o início</button>
    </section>
  </NuxtLayout>
</template>
