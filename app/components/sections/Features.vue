<script setup lang="ts">
// Destaques em caixas (ex.: "Como voce recebe"): titulo, ate 4 caixas e um texto depois.
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const { editing } = useRhSite()
</script>

<template>
  <section :id="p.anchor || undefined" class="f-sec f-sec--tight f-paper">
    <div class="f-wrap f-narrow">
      <RhText tag="h2" class="f-prose__h2 f-prose__first" path="title" :value="p.title" ph="Título" />
      <div class="f-features" :style="{ '--cols': Math.min(p.items?.length || 1, 4) }">
        <div v-for="(it, i) in p.items" :key="i" class="f-feature">
          <RhText tag="p" class="f-feature__title" :path="`items.${i}.title`" :value="it.title" ph="Título" />
          <RhText tag="p" class="f-feature__text" :path="`items.${i}.text`" :value="it.text" ph="Texto" ml />
        </div>
      </div>
      <RhText v-if="p.text || editing" tag="p" class="f-muted f-pre" path="text" :value="p.text" ph="Texto" ml />
    </div>
  </section>
</template>
