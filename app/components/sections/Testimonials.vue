<script setup lang="ts">
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const { editing } = useRhSite()
</script>

<template>
  <section v-if="p.items?.length || editing" class="f-sec f-paper-light f-ruled">
    <div class="f-wrap">
      <SectionHead :p="p" center />
      <p v-if="!p.items?.length" class="f-empty f-center">Sem depoimentos: no site, esta seção não aparece. Adicione no formulário ao lado.</p>
      <div class="f-cards" :style="{ '--cols': Math.min(p.items?.length || 1, 3) }">
        <figure v-for="(it, i) in p.items" :key="i" class="f-card f-testi">
          <span class="f-testi__mark" aria-hidden="true">“</span>
          <RhText tag="blockquote" class="f-pre" :path="`items.${i}.quote`" :value="it.quote" ph="Depoimento" ml />
          <figcaption><RhText tag="b" :path="`items.${i}.name`" :value="it.name" ph="Nome" /> · <RhText :path="`items.${i}.detail`" :value="it.detail" ph="Atendimento" /></figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
