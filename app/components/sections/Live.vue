<script setup lang="ts">
// Atendimento ao vivo: bloco verde com texto, um aviso em moldura dourada, botao e foto.
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const { editing } = useRhSite()
</script>

<template>
  <section :id="p.anchor || undefined" class="f-sec f-sec--tight f-paper">
    <div class="f-wrap f-narrow">
      <div class="f-live f-dark" :class="{ 'f-live--photo': p.image }">
        <div class="f-live__body">
          <RhText tag="p" class="f-eyebrow" path="eyebrow" :value="p.eyebrow" ph="Chamada" />
          <RhText tag="h2" class="f-live__title" path="title" :value="p.title" ph="Título" />
          <RhText tag="p" class="f-live__text f-pre" path="text" :value="p.text" ph="Texto" ml />
          <p v-if="p.note || editing" class="f-live__note">
            <RhText tag="strong" path="noteTitle" :value="p.noteTitle" ph="Destaque do aviso" />
            {{ ' ' }}<RhText path="note" :value="p.note" ph="Aviso" ml />
          </p>
          <TButton v-if="p.button || editing" class="f-btn f-btn--gold" :link="p.link" source="ao-vivo"><RhText path="button" :value="p.button" ph="Botão" /></TButton>
        </div>
        <img v-if="p.image" :src="p.image" :alt="p.imageAlt || ''" loading="lazy" class="f-live__img">
      </div>
    </div>
  </section>
</template>
