<script setup lang="ts">
// Aviso importante numa moldura terracota (ex.: a leitura nao substitui medico ou psicologo).
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
</script>

<template>
  <section class="f-sec f-sec--tight f-paper">
    <div class="f-wrap f-narrow">
      <div class="f-notice">
        <RhText tag="h2" class="f-notice__title" path="title" :value="p.title" ph="Título" />
        <RhText tag="p" class="f-pre" path="text" :value="p.text" ph="Texto" ml />
      </div>
    </div>
  </section>
</template>
