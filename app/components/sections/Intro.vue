<script setup lang="ts">
// Topo das paginas internas: o caminho (Inicio / Pagina), chamada, titulo, texto, botao e foto em arco opcional.
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const { editing, page } = useRhSite()
const route = useRoute()
const here = computed(() => page(route.path)?.title ?? '')
</script>

<template>
  <section class="f-intro f-dark">
    <Ornaments v-if="p.ornaments !== 'nao'" kind="intro" />
    <div class="f-wrap f-intro__grid" :class="{ 'f-intro__grid--photo': p.image }">
      <div>
        <nav v-if="here && route.path !== '/'" aria-label="Você está em" class="f-crumbs">
          <NuxtLink to="/">Início</NuxtLink><span aria-hidden="true">/</span><span aria-current="page">{{ here }}</span>
        </nav>
        <RhText tag="p" class="f-eyebrow" path="eyebrow" :value="p.eyebrow" ph="Chamada" />
        <RhText tag="h1" class="f-intro__title" path="title" :value="p.title" ph="Título" />
        <RhText v-if="p.lead || editing" tag="p" class="f-hero__lead f-pre" path="lead" :value="p.lead" ph="Texto" ml />
        <div v-if="p.button || p.button2 || editing" class="f-actions">
          <TButton v-if="p.button || editing" class="f-btn f-btn--gold" :link="p.link" source="apresentacao"><RhText path="button" :value="p.button" ph="Botão" /></TButton>
          <TButton v-if="p.button2 || editing" class="f-btn f-btn--ghost" :link="p.link2" source="apresentacao"><RhText path="button2" :value="p.button2" ph="Botão secundário" /></TButton>
        </div>
      </div>
      <div v-if="p.image" class="f-arch-frame">
        <img :src="p.image" :alt="p.imageAlt || ''" fetchpriority="high">
      </div>
    </div>
  </section>
</template>
