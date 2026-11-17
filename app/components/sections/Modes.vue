<script setup lang="ts">
// Modalidades: cartoes com etiqueta, titulo, resumo e link, e um cartao em destaque (verde) no fim.
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const { editing } = useRhSite()
</script>

<template>
  <section class="f-sec f-paper">
    <div class="f-wrap">
      <SectionHead :p="p" center />
      <div class="f-modes">
        <TButton v-for="(it, i) in p.items" :key="i" :link="it.link" class="f-card f-mode" source="modalidades">
          <RhText tag="span" class="f-tag" :path="`items.${i}.tag`" :value="it.tag" ph="Etiqueta" />
          <RhText tag="h3" class="f-mode__title" :path="`items.${i}.title`" :value="it.title" ph="Título" />
          <RhText tag="p" class="f-mode__text" :path="`items.${i}.text`" :value="it.text" ph="Texto" ml />
          <span class="f-arrow"><RhText :path="`items.${i}.linkLabel`" :value="it.linkLabel" ph="Link" /> <span aria-hidden="true">→</span></span>
        </TButton>
        <TButton v-if="p.featuredTitle || editing" :link="p.featuredLink" class="f-mode f-mode--featured f-dark" source="modalidades">
          <RhText tag="span" class="f-tag f-tag--gold" path="featuredTag" :value="p.featuredTag" ph="Etiqueta" />
          <RhText tag="h3" class="f-mode__title" path="featuredTitle" :value="p.featuredTitle" ph="Título do destaque" />
          <RhText tag="p" class="f-mode__text" path="featuredText" :value="p.featuredText" ph="Texto" ml />
          <span class="f-arrow f-arrow--light"><RhText path="featuredLinkLabel" :value="p.featuredLinkLabel" ph="Link" /> <span aria-hidden="true">→</span></span>
        </TButton>
      </div>
    </div>
  </section>
</template>
