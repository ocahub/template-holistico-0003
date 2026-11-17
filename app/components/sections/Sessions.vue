<script setup lang="ts">
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
</script>

<template>
  <section class="f-sec f-paper-light f-ruled">
    <div class="f-wrap">
      <SectionHead :p="p" center />
      <div class="f-cards" :style="{ '--cols': Math.min(p.items?.length || 1, 3) }">
        <article v-for="(it, i) in p.items" :key="i" class="f-session">
          <div class="f-session__photo"><img v-if="it.image" :src="it.image" alt="" loading="lazy"></div>
          <RhText tag="p" class="f-eyebrow" :path="`items.${i}.eyebrow`" :value="it.eyebrow" ph="Chamada" />
          <RhText tag="h3" class="f-h3" :path="`items.${i}.title`" :value="it.title" ph="Título" />
          <RhText tag="p" class="f-muted f-pre" :path="`items.${i}.text`" :value="it.text" ph="Texto" ml />
          <TButton class="f-arrow" :link="it.link" source="sessoes"><RhText :path="`items.${i}.linkLabel`" :value="it.linkLabel" ph="Link" /> <span aria-hidden="true">→</span></TButton>
        </article>
      </div>
    </div>
  </section>
</template>
