<script setup lang="ts">
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const { editing } = useRhSite()
</script>

<template>
  <section class="f-sec f-paper">
    <div class="f-wrap f-narrow">
      <RhText tag="p" class="f-eyebrow" path="eyebrow" :value="p.eyebrow" ph="Chamada" />
      <RhText tag="h2" class="f-title" path="title" :value="p.title" ph="Título" />
      <RhText v-if="p.text || editing" tag="p" class="f-lead f-pre" path="text" :value="p.text" ph="Texto" ml />
      <ol class="f-timeline">
        <li v-for="(it, i) in p.items" :key="i">
          <RhText tag="p" class="f-eyebrow" :path="`items.${i}.step`" :value="it.step" ph="Etiqueta" />
          <RhText tag="h3" class="f-h3" :path="`items.${i}.title`" :value="it.title" ph="Título" />
          <RhText tag="p" class="f-muted f-pre" :path="`items.${i}.text`" :value="it.text" ph="Texto" ml />
        </li>
      </ol>
      <RhText v-if="p.closing || editing" tag="p" class="f-closing f-pre" path="closing" :value="p.closing" ph="Frase de fechamento" ml />
    </div>
  </section>
</template>
