<script setup lang="ts">
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const { editing } = useRhSite()
const links = useRhLinks()
// So quando a loja oferece a amostra gratis do mapa (painel › Mapa astral).
const on = useState('t:sample-on', () => false)
onMounted(async () => { on.value = await useRhBirthCharts().sampleEnabled() })
</script>

<template>
  <section v-if="on || editing" class="f-sample f-dark">
    <div class="f-wrap f-sample__row">
      <div>
        <RhText tag="p" class="f-eyebrow" path="eyebrow" :value="p.eyebrow" ph="Chamada" />
        <RhText tag="h2" class="f-sample__title" path="title" :value="p.title" ph="Título" />
        <p v-if="editing && !on" class="f-empty">A amostra grátis está desligada na loja: no site, esta faixa não aparece.</p>
      </div>
      <NuxtLink :to="links.birthChartSample()" class="f-btn f-btn--gold"><RhText path="button" :value="p.button" ph="Botão" /></NuxtLink>
    </div>
  </section>
</template>
