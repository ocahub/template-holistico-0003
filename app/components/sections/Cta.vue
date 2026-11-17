<script setup lang="ts">
// Chamada final: escura com ramos (ou clara), simbolo redondo opcional, titulo, texto e botoes.
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const { editing } = useRhSite()
const light = computed(() => p.value.tone === 'claro')
</script>

<template>
  <section class="f-cta" :class="light ? 'f-paper' : 'f-dark'">
    <Ornaments v-if="p.ornaments !== 'nao' && !light" kind="cta" />
    <div class="f-wrap f-center f-cta__inner">
      <img v-if="p.image" :src="p.image" alt="" width="96" height="96" loading="lazy" class="f-cta__img">
      <p v-else class="f-ornament" aria-hidden="true">✦</p>
      <RhText tag="h2" class="f-cta__title" path="title" :value="p.title" ph="Título" />
      <RhText v-if="p.text || editing" tag="p" class="f-cta__text f-pre" path="text" :value="p.text" ph="Texto" ml />
      <div class="f-actions f-actions--center">
        <TButton class="f-btn" :class="light ? 'f-btn--night' : 'f-btn--gold'" :link="p.link" source="chamada"><RhText path="button" :value="p.button" ph="Botão" /></TButton>
        <TButton v-if="p.button2 || editing" class="f-btn" :class="light ? 'f-btn--outline' : 'f-btn--ghost'" :link="p.link2" source="chamada"><RhText path="button2" :value="p.button2" ph="Botão secundário" /></TButton>
      </div>
      <RhText v-if="p.footnote || editing" tag="p" class="f-cta__foot f-pre" path="footnote" :value="p.footnote" ph="Texto final" ml />
    </div>
  </section>
</template>
