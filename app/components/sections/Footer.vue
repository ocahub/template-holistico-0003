<script setup lang="ts">
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const store = useRhStore()
const company = useRhCompany()
const { global, menu, editing } = useRhSite()
const header = computed(() => global('header')?.props ?? {})
const name = computed(() => company.text(header.value.logo) || store.value?.name || '')
const logo = computed(() => header.value.logoImage || store.value?.logoUrl || '')
const v = computed(() => company.values.value)
const insta = computed(() => (v.value.instagram ?? '').replace('@', ''))
</script>

<template>
  <footer class="f-footer f-dark f-dark--deep">
    <Ornaments v-if="p.ornaments !== 'nao'" kind="footer" />
    <div class="f-footer__divider"><CelestialDivider /></div>
    <div class="f-wrap f-footer__grid">
      <div>
        <div class="f-footer__brand">
          <img v-if="logo" :src="logo" alt="" width="56" height="56" loading="lazy">
          <p>{{ name }}</p>
        </div>
        <RhText tag="p" class="f-footer__about f-pre" path="about" :value="p.about" ph="Sobre a marca" ml />
      </div>
      <nav aria-label="Rodapé">
        <RhText tag="p" class="f-eyebrow" path="navTitle" :value="p.navTitle" ph="Título do menu" />
        <ul>
          <li v-for="m in menu" :key="m.id"><NuxtLink :to="m.slug">{{ m.title }}</NuxtLink></li>
          <li><NuxtLink to="/loja">{{ company.text(header.shopLabel) || 'Loja' }}</NuxtLink></li>
          <li><NuxtLink to="/minha-conta">Minha conta</NuxtLink></li>
        </ul>
      </nav>
      <div>
        <RhText tag="p" class="f-eyebrow" path="contactTitle" :value="p.contactTitle" ph="Título dos contatos" />
        <ul class="f-footer__contact">
          <li v-if="insta">
            <a :href="`https://www.instagram.com/${insta}/`" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
              @{{ insta }}
            </a>
          </li>
          <li v-if="v.email">
            <a :href="`mailto:${v.email}`">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
              {{ v.email }}
            </a>
          </li>
          <li v-if="v.whatsapp">
            <RhWhatsappButton source="rodape">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm4.5 12.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.7-1.2 2.2 2.2 0 0 0 .2-1.2c-.1-.1-.3-.2-.5-.3Z" /></svg>
              {{ v.whatsapp }}
            </RhWhatsappButton>
          </li>
          <li v-if="p.hours || editing"><RhText path="hours" :value="p.hours" ph="Horário de atendimento" /></li>
        </ul>
      </div>
    </div>
    <div class="f-footer__bottom">
      <div class="f-wrap">
        <p>© {{ new Date().getFullYear() }} {{ name }}. Todos os direitos reservados.</p>
        <RhText v-if="p.note || editing" tag="p" path="note" :value="p.note" ph="Linha final" />
      </div>
    </div>
    <div style="text-align:center;padding:10px 16px;font-size:.8rem;opacity:.85"><RhCookiePreferences /></div>
  </footer>
</template>
