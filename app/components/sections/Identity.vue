<script setup lang="ts">
// A identidade da marca numa faixa escura: o simbolo redondo e o texto que o explica.
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
</script>

<template>
  <section class="f-sec f-dark f-dark--deep">
    <div class="f-wrap f-identity">
      <img v-if="p.image" :src="p.image" :alt="p.imageAlt || ''" loading="lazy" class="f-identity__img">
      <div>
        <RhText tag="p" class="f-eyebrow" path="eyebrow" :value="p.eyebrow" ph="Chamada" />
        <RhText tag="h2" class="f-title" path="title" :value="p.title" ph="Título" />
        <RhText tag="p" class="f-lead f-pre" path="text" :value="p.text" ph="Texto" ml />
      </div>
    </div>
  </section>
</template>
