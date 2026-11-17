<script setup lang="ts">
// Titulo e paragrafos, numa coluna de leitura.
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const { editing } = useRhSite()
</script>

<template>
  <section :id="p.anchor || undefined" class="f-sec f-sec--tight f-paper">
    <div class="f-wrap f-narrow f-prose">
      <RhText v-if="p.title || editing" tag="h2" class="f-prose__h2 f-prose__first" path="title" :value="p.title" ph="Título" />
      <RhText tag="p" class="f-pre" path="body" :value="p.body" ph="Texto" ml />
    </div>
  </section>
</template>
