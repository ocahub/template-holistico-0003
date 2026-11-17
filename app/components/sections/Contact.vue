<script setup lang="ts">
// Contato: e-mail, Instagram e (se a loja divulgar) WhatsApp com assuntos prontos, dos Contatos do site.
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const { editing } = useRhSite()
const company = useRhCompany()
const v = computed(() => company.values.value)
const insta = computed(() => (v.value.instagram ?? '').replace('@', ''))
</script>

<template>
  <section class="f-sec f-paper">
    <div class="f-wrap">
      <SectionHead :p="p" center sub="text" />
      <div class="f-contact">
        <a v-if="v.email" :href="`mailto:${v.email}`" class="f-card f-contact__card"><p class="f-eyebrow">E-mail</p><p class="f-contact__value">{{ v.email }}</p></a>
        <a v-if="insta" :href="`https://www.instagram.com/${insta}/`" target="_blank" rel="noopener" class="f-card f-contact__card"><p class="f-eyebrow">Instagram</p><p class="f-contact__value">@{{ insta }}</p></a>
        <div v-if="v.whatsapp" class="f-card f-contact__card">
          <p class="f-eyebrow">WhatsApp</p>
          <ul class="f-contact__topics">
            <li v-for="(it, i) in p.topics" :key="i">
              <RhWhatsappButton :message="it.message" source="contato"><RhText :path="`topics.${i}.label`" :value="it.label" ph="Assunto" /> <span aria-hidden="true">→</span></RhWhatsappButton>
            </li>
          </ul>
          <RhWhatsappButton class="f-btn f-btn--night" source="contato"><RhText path="button" :value="p.button" ph="Botão" /></RhWhatsappButton>
        </div>
        <div v-if="p.hours || editing" class="f-card f-contact__card"><p class="f-eyebrow">Horário de atendimento</p><RhText tag="p" path="hours" :value="p.hours" ph="Horário" /></div>
      </div>
      <p v-if="editing && !v.email && !insta && !v.whatsapp" class="f-empty f-center">Cadastre os contatos em Loja › Dados da loja › Contatos do site.</p>
    </div>
  </section>
</template>
