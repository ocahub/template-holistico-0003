import manifest from '~~/template.json'

/**
 * O template.json (00047): secoes, campos, aparencias e o conteudo padrao.
 * O painel le o mesmo arquivo (pelo cloud-management) para montar o editor.
 */
export const TEMPLATE = manifest

type Props = Record<string, any>
type SectionRef = string | { type: string, props?: Props }

const clone = <T>(v: T): T => JSON.parse(JSON.stringify(v))

/** "hero" ou { type, props }: o padrao da secao com o que a pagina muda. */
export function templateSection(ref: SectionRef, id: string) {
  const type = typeof ref === 'string' ? ref : ref.type
  const base = (manifest.sectionDefaults as Record<string, Props>)[type] ?? {}
  return { id, type, props: { ...clone(base), ...(typeof ref === 'string' ? {} : clone(ref.props ?? {})) } }
}

/** O conteudo padrao do template, para quando nada foi publicado ainda. */
export function templateDefaultContent() {
  return {
    template: { id: manifest.id, version: manifest.version },
    theme: { ...manifest.defaults.theme },
    globals: {
      header: templateSection('header', 'header'),
      footer: templateSection('footer', 'footer')
    },
    pages: manifest.defaults.pages.map((p, i) => ({
      id: i === 0 ? 'p-home' : `p-${i}`,
      title: p.title, slug: p.slug, menu: p.menu, seoTitle: p.seoTitle, seoDescription: p.seoDescription,
      sections: (p.sections as SectionRef[]).map((s, j) => templateSection(s, `s-${i}-${j}`))
    }))
  }
}

/** A paleta escolhida no painel (a primeira, se nenhuma). */
export function templatePalette(theme: Record<string, string> | undefined) {
  return manifest.theme.palettes.find(p => p.id === theme?.palette) ?? manifest.theme.palettes[0]!
}

/** Cores e fontes escolhidas no painel, como variaveis CSS (o visual floresta usa canais RGB). */
export function templateThemeVars(theme: Record<string, string> | undefined) {
  const p = templatePalette(theme)
  const fonts = manifest.theme.fonts.find(f => f.id === theme?.fonts) ?? manifest.theme.fonts[0]!
  const rgb = (hex: string) => [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16)).join(' ')
  return {
    '--f-night': rgb(p.primary),
    '--f-night-deep': rgb(p.deep),
    '--f-night-soft': rgb(p.nightSoft),
    '--f-parchment': rgb(p.soft),
    '--f-parchment-light': rgb(p.light),
    '--f-gold': rgb(p.accent),
    '--f-gold-light': rgb(p.accentLight),
    '--f-gold-dark': rgb(p.accentDark),
    '--f-olive': rgb(p.olive),
    '--f-ink': rgb(p.ink),
    '--f-ink-soft': rgb(p.muted),
    '--f-alert': rgb(p.alert),
    '--f-display': fonts.display,
    '--f-label': fonts.ui,
    '--f-body': fonts.body,
    '--f-dw': String(fonts.weight)
  }
}

/** Link de um botao: vazio = WhatsApp da loja; http = outro site; o resto, pagina do site. */
export function templateLink(link?: string | null): { kind: 'whatsapp' | 'external' | 'page', to: string } {
  const l = (link ?? '').trim()
  if (!l) return { kind: 'whatsapp', to: '' }
  if (/^https?:\/\//i.test(l) || l.startsWith('mailto:') || l.startsWith('tel:')) return { kind: 'external', to: l }
  return { kind: 'page', to: l.startsWith('/') ? l : `/${l}` }
}
