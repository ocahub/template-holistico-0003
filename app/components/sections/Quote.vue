<script setup lang="ts">
// Citacao: faixa oliva (com ramos), clara ou escura, com texto de apoio e botao opcionais.
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const { editing } = useRhSite()
const tone = computed(() => p.value.tone || 'oliva')
</script>

<template>
  <section class="f-quote" :class="[`f-quote--${tone}`, { 'f-dark': tone === 'escuro' }]">
    <Ornaments v-if="p.ornaments !== 'nao' && tone !== 'claro'" kind="quote" />
    <div class="f-wrap f-center f-quote__inner">
      <p class="f-ornament" aria-hidden="true">✦</p>
      <RhText tag="blockquote" class="f-quote__text f-pre" path="text" :value="p.text" ph="Frase" ml />
      <RhText v-if="p.note || editing" tag="p" class="f-quote__note f-pre" path="note" :value="p.note" ph="Texto de apoio" ml />
      <TButton v-if="p.button || editing" class="f-btn" :class="tone === 'claro' ? 'f-btn--night' : 'f-btn--gold'" :link="p.link" source="citacao"><RhText path="button" :value="p.button" ph="Botão" /></TButton>
    </div>
  </section>
</template>
