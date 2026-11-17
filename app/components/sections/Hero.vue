<script setup lang="ts">
// Abertura: chamada, titulo grande, dois botoes e destaques, com a arte ao lado:
// uma ilustracao que se funde ao fundo (circulo esmaecido) ou uma foto em arco.
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const { editing } = useRhSite()
</script>

<template>
  <section class="f-hero f-dark">
    <div class="f-hero__rings" aria-hidden="true"><span /><span /></div>
    <Ornaments v-if="p.ornaments !== 'nao'" kind="hero" />
    <div class="f-wrap f-hero__grid" :class="{ 'f-hero__grid--solo': !p.image }">
      <div>
        <RhText tag="p" class="f-eyebrow" path="eyebrow" :value="p.eyebrow" ph="Chamada" />
        <RhText tag="h1" class="f-hero__title" path="title" :value="p.title" ph="Título" />
        <RhText v-if="p.subtitle || editing" tag="p" class="f-hero__lead f-pre" path="subtitle" :value="p.subtitle" ph="Texto" ml />
        <div v-if="p.button || p.button2 || editing" class="f-actions">
          <TButton v-if="p.button || editing" class="f-btn f-btn--gold" :link="p.link" source="abertura"><RhText path="button" :value="p.button" ph="Botão" /></TButton>
          <TButton v-if="p.button2 || editing" class="f-btn f-btn--ghost" :link="p.link2" source="abertura"><RhText path="button2" :value="p.button2" ph="Botão secundário" /></TButton>
        </div>
        <ul v-if="p.bullets?.length" class="f-hero__bullets">
          <li v-for="(b, i) in p.bullets" :key="i"><span aria-hidden="true">✦</span> <RhText :path="`bullets.${i}.label`" :value="b.label" ph="Destaque" /></li>
        </ul>
      </div>
      <div v-if="p.image" class="f-hero__art" :class="p.imageStyle === 'arco' ? 'f-hero__art--arch' : 'f-hero__art--fade'">
        <img :src="p.image" :alt="p.imageAlt || ''" fetchpriority="high">
      </div>
    </div>
  </section>
</template>
