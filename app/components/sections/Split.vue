<script setup lang="ts">
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const { editing } = useRhSite()
</script>

<template>
  <section class="f-sec f-paper">
    <div class="f-wrap f-split" :class="{ 'f-split--left': p.side === 'esquerda' }">
      <div>
        <RhText tag="p" class="f-split__text f-pre" path="text" :value="p.text" ph="Frase" ml />
        <TButton v-if="p.button || editing" class="f-btn f-btn--night" :link="p.link" source="texto-foto"><RhText path="button" :value="p.button" ph="Botão" /></TButton>
      </div>
      <div class="f-split__photo"><img v-if="p.image" :src="p.image" alt="" loading="lazy"></div>
    </div>
  </section>
</template>
