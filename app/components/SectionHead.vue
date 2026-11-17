<script setup lang="ts">
// Chamada, titulo e texto no topo de uma secao, com o divisor de lua e estrelas opcional.
defineProps<{ p: Record<string, any>, center?: boolean, light?: boolean, sub?: string }>()
const { editing } = useRhSite()
</script>

<template>
  <div class="f-head" :class="{ 'f-head--center': center, 'f-head--light': light }">
    <CelestialDivider v-if="p.divider !== 'nao' && center" class="f-head__divider" />
    <RhText tag="p" class="f-eyebrow" path="eyebrow" :value="p.eyebrow" ph="Chamada" />
    <RhText tag="h2" class="f-title" path="title" :value="p.title" ph="Título" />
    <RhText v-if="p[sub ?? 'subtitle'] || editing" tag="p" class="f-lead f-pre" :path="sub ?? 'subtitle'" :value="p[sub ?? 'subtitle']" ph="Texto" ml />
  </div>
</template>
