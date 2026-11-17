// Template de site holistico 0003 "Floresta" (00047): baralho cigano, tarot e
// bruxaria natural, no visual da Bruxa do Contra de 2026 (verde texturizado,
// ramos e flores em dourado, lua e estrelas).
// O conteudo (paginas, secoes, textos e imagens) a tenant edita no painel em
// Loja › Site › Editar páginas; o build le a versao publicada no cloud-management.
// O que mora aqui: as secoes (app/components/sections), o visual e o
// template.json (o contrato com o painel). A loja (prateleira, produto,
// carrinho, conta, checkout, mapa astral) vem do @ocahub/kit.
import manifest from './template.json'

// Os nomes do mapa que a tenant escolhe em Aparência (Mapa astral, Roda Cigana...).
const birthChartNames = Object.fromEntries(manifest.theme.chartNames.map(({ id, label: _label, ...n }) => [id, n]))

export default defineNuxtConfig({
  modules: ['@ocahub/kit'],
  compatibilityDate: '2026-10-01',
  devtools: { enabled: false },

  rhfactor: {
    storeId: process.env.RHFACTOR_STORE_ID ?? '',
    apiBase: process.env.RHFACTOR_API_BASE ?? 'http://localhost:8085',
    iamBase: process.env.RHFACTOR_IAM_BASE ?? 'http://localhost:8080',
    contractsBase: process.env.RHFACTOR_CONTRACTS_BASE ?? 'http://localhost:8082',
    paymentsBase: process.env.RHFACTOR_PAYMENTS_BASE ?? 'http://localhost:8089',
    // A inicial e do template; a prateleira do kit fica na Loja.
    pages: { shelf: '/loja' },
    siteContent: true,
    birthChartNames
  },

  // Cada tipo de secao e um componente global Section{Tipo}: o kit monta a pagina pelo tipo.
  components: [
    { path: '~/components/sections', prefix: 'Section', global: true },
    '~/components'
  ],

  css: ['~/assets/css/template.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=IM+Fell+DW+Pica:ital@0;1&family=Josefin+Sans:wght@300..600&display=swap' }
      ]
    }
  }
})
