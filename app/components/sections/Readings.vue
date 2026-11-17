<script setup lang="ts">
// Pagina longa de leituras/atendimentos: indice lateral fixo ("Nesta pagina"), texto de
// abertura com citacao e um cartao por modalidade (com ancora, para links como /consultas#tema).
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const { editing } = useRhSite()
// "Amor: relacionamentos..." vira o nome em negrito e o texto.
const lines = (text?: string) => (text ?? '').split('\n').map(l => l.trim()).filter(Boolean)
  .map((l) => { const i = l.indexOf(':'); return i > 0 && i < 40 ? { b: l.slice(0, i + 1), t: l.slice(i + 1) } : { b: '', t: l } })
const index = computed(() => [
  ...(p.value.anchor ? [{ id: p.value.anchor, label: p.value.indexIntro || p.value.title }] : []),
  ...(p.value.items ?? []).filter((it: any) => it.anchor).map((it: any) => ({ id: it.anchor, label: it.title })),
  ...(p.value.indexMore ?? []).filter((it: any) => it.anchor).map((it: any) => ({ id: it.anchor.replace(/^#/, ''), label: it.label }))
])
</script>

<template>
  <section class="f-sec f-paper">
    <div class="f-wrap f-readings">
      <aside class="f-readings__toc">
        <nav aria-label="Nesta página">
          <RhText tag="p" class="f-eyebrow" path="indexTitle" :value="p.indexTitle" ph="Título do índice" />
          <ul>
            <li v-for="t in index" :key="t.id"><a :href="`#${t.id}`">{{ t.label }}</a></li>
          </ul>
        </nav>
      </aside>
      <article class="f-prose">
        <div :id="p.anchor || undefined">
          <RhText tag="h2" class="f-prose__h2 f-prose__first" path="title" :value="p.title" ph="Título" />
          <RhText tag="p" class="f-pre" path="text" :value="p.text" ph="Texto" ml />
          <RhText v-if="p.quote || editing" tag="blockquote" class="f-prose__quote" path="quote" :value="p.quote" ph="Citação" ml />
          <RhText v-if="p.text2 || editing" tag="p" class="f-pre" path="text2" :value="p.text2" ph="Texto depois da citação" ml />
        </div>
        <RhText v-if="p.listTitle || editing" tag="h2" class="f-prose__h2" path="listTitle" :value="p.listTitle" ph="Título das modalidades" />
        <RhText v-if="p.listText || editing" tag="p" class="f-pre" path="listText" :value="p.listText" ph="Texto" ml />
        <div v-for="(it, i) in p.items" :id="it.anchor || undefined" :key="i" class="f-card f-reading">
          <RhText tag="p" class="f-eyebrow" :path="`items.${i}.tag`" :value="it.tag" ph="Etiqueta" />
          <RhText tag="h3" class="f-reading__title" :path="`items.${i}.title`" :value="it.title" ph="Título" />
          <RhText tag="p" class="f-pre" :path="`items.${i}.text`" :value="it.text" ph="Texto" ml />
          <ul v-if="it.list" class="f-reading__list">
            <li v-for="(l, k) in lines(it.list)" :key="k"><span aria-hidden="true">✦</span><span><strong v-if="l.b">{{ l.b }}</strong>{{ l.t }}</span></li>
          </ul>
          <RhText v-if="it.text2 || editing" tag="p" class="f-pre" :path="`items.${i}.text2`" :value="it.text2" ph="Texto depois da lista" ml />
        </div>
      </article>
    </div>
  </section>
</template>
