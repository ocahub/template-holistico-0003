<script setup lang="ts">
// Quem esta por tras: foto (retrato 4:5), chamada, titulo, texto e link.
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const { editing } = useRhSite()
</script>

<template>
  <section class="f-sec f-paper">
    <div class="f-wrap f-about" :class="{ 'f-about--right': p.side === 'direita' }">
      <div class="f-about__photo"><img v-if="p.image" :src="p.image" :alt="p.imageAlt || ''" loading="lazy"></div>
      <div>
        <RhText tag="p" class="f-eyebrow" path="eyebrow" :value="p.eyebrow" ph="Chamada" />
        <RhText tag="h2" class="f-title" path="title" :value="p.title" ph="Título" />
        <RhText tag="p" class="f-lead f-pre f-about__text" path="text" :value="p.text" ph="Texto" ml />
        <TButton v-if="p.button || editing" class="f-arrow" :link="p.link" source="sobre"><RhText path="button" :value="p.button" ph="Link" /> <span aria-hidden="true">→</span></TButton>
      </div>
    </div>
  </section>
</template>
