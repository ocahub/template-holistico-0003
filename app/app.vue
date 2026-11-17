<script setup lang="ts">
// Titulo e icone da loja (do build, pelo kit); a cor do navegador segue a paleta.
const store = useRhStore()
const { content } = useRhSite()
useHead({
  titleTemplate: title => (title && title !== store.value?.name ? title : store.value?.name ?? 'Loja'),
  link: [{ rel: 'icon', href: store.value?.logoUrl ?? '/favicon.ico' }],
  meta: [{ name: 'theme-color', content: computed(() => templatePalette(content.value?.theme).primary) }]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
