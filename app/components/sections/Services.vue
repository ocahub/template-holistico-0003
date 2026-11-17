<script setup lang="ts">
// Cartoes com simbolo, titulo, texto e link (servicos, valores...).
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const { editing } = useRhSite()
</script>

<template>
  <section class="f-sec f-paper">
    <div class="f-wrap">
      <SectionHead :p="p" center />
      <div class="f-cards" :style="{ '--cols': Math.min(p.items?.length || 1, 3) }">
        <article v-for="(it, i) in p.items" :key="i" class="f-card f-svc">
          <RhText tag="span" class="f-svc__icon" :path="`items.${i}.icon`" :value="it.icon" ph="✦" />
          <RhText tag="h3" class="f-h3" :path="`items.${i}.title`" :value="it.title" ph="Título" />
          <RhText tag="p" class="f-muted f-pre" :path="`items.${i}.text`" :value="it.text" ph="Texto" ml />
          <TButton v-if="it.linkLabel || editing" class="f-arrow" :link="it.link" source="servicos"><RhText :path="`items.${i}.linkLabel`" :value="it.linkLabel" ph="Link" /> <span aria-hidden="true">→</span></TButton>
        </article>
      </div>
      <RhText v-if="p.note || editing" tag="p" class="f-note" path="note" :value="p.note" ph="Frase de fechamento" />
    </div>
  </section>
</template>
