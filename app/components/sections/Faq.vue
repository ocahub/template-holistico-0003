<script setup lang="ts">
// Perguntas frequentes: ao lado do titulo (com link opcional) ou em coluna unica.
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const { editing } = useRhSite()
const company = useRhCompany()
</script>

<template>
  <section :id="p.anchor || undefined" class="f-sec f-paper">
    <div class="f-wrap f-faq" :class="{ 'f-faq--stack': p.layout === 'coluna' }">
      <div>
        <RhText tag="p" class="f-eyebrow" path="eyebrow" :value="p.eyebrow" ph="Chamada" />
        <RhText tag="h2" class="f-title" path="title" :value="p.title" ph="Título" />
        <RhText v-if="p.text || editing" tag="p" class="f-lead f-pre" path="text" :value="p.text" ph="Texto" ml />
        <TButton v-if="p.button || editing" class="f-arrow" :link="p.link" source="perguntas"><RhText path="button" :value="p.button" ph="Link" /> <span aria-hidden="true">→</span></TButton>
        <RhWhatsappButton v-if="(p.whatsapp && company.values.value.whatsapp) || editing" class="f-arrow" source="perguntas"><RhText path="whatsapp" :value="p.whatsapp" ph="Convite para o WhatsApp" /></RhWhatsappButton>
      </div>
      <div>
        <details v-for="(it, i) in p.items" :key="i" class="f-faq__item" :open="editing">
          <summary><RhText :path="`items.${i}.q`" :value="it.q" ph="Pergunta" /><span class="f-faq__plus" aria-hidden="true">+</span></summary>
          <RhText tag="p" class="f-pre" :path="`items.${i}.a`" :value="it.a" ph="Resposta" ml />
        </details>
      </div>
    </div>
  </section>
</template>
