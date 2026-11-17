<script setup lang="ts">
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const store = useRhStore()
const { menu, editing } = useRhSite()
const company = useRhCompany()
const links = useRhLinks()
const terms = useRhChartTerms()
const logo = computed(() => p.value.logoImage || store.value?.logoUrl || '')
const name = computed(() => company.text(p.value.logo) || store.value?.name || '')
const tagline = computed(() => company.text(p.value.tagline))
// Mapa astral (00026): a amostra gratis entra no menu quando a loja oferece, com o nome do mapa do site.
const sampleOn = useState('t:sample-on', () => false)
onMounted(async () => { sampleOn.value = await useRhBirthCharts().sampleEnabled() })
// Blog (00049): no menu quando o site tem post no ar.
const blog = useRhBlogInfo()
const nav = computed(() => [
  { to: '/', label: 'Início' },
  ...menu.value.map(m => ({ to: m.slug, label: m.title })),
  { to: '/loja', label: company.text(p.value.shopLabel) || 'Loja' },
  ...(sampleOn.value ? [{ to: links.birthChartSample(), label: `${terms.title} grátis` }] : []),
  ...(blog.enabled ? [{ to: blog.path, label: 'Blog' }] : [])
])
const route = useRoute()
const open = ref(false)
watch(() => route.fullPath, () => { open.value = false })
const active = (to: string) => (to === '/' ? route.path === '/' : route.path.startsWith(to))
</script>

<template>
  <header class="f-header f-dark">
    <div class="f-wrap f-header__row">
      <NuxtLink to="/" :aria-label="`${name}, página inicial`"><BrandMark :name="name" :tagline="tagline" :logo="logo" /></NuxtLink>
      <nav class="f-nav" aria-label="Principal">
        <NuxtLink v-for="l in nav" :key="l.to" :to="l.to" :class="{ 'f-nav--on': active(l.to) }">{{ l.label }}</NuxtLink>
        <div class="f-header__actions"><RhAccountButton /><RhCartButton /></div>
      </nav>
      <div class="f-header__actions f-header__mobile">
        <RhCartButton />
        <button type="button" class="f-burger" :aria-expanded="open" :aria-label="open ? 'Fechar menu' : 'Abrir menu'" @click="open = !open">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path v-if="!open" stroke-linecap="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            <path v-else stroke-linecap="round" d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>
    </div>
    <nav v-if="open" class="f-mnav" aria-label="Principal">
      <div class="f-wrap">
        <NuxtLink v-for="l in nav" :key="l.to" :to="l.to">{{ l.label }}</NuxtLink>
        <NuxtLink to="/minha-conta">Minha conta</NuxtLink>
        <NuxtLink to="/minha-conta/pedidos">Meus pedidos</NuxtLink>
        <TButton v-if="p.button || editing" class="f-btn f-btn--gold" :link="p.link" source="menu"><RhText path="button" :value="p.button" ph="Botão do menu no celular" /></TButton>
      </div>
    </nav>
  </header>
</template>
