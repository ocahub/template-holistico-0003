# template-holistico-0003 · Floresta

Template de site holístico da plataforma (atividade 00047), feito a partir do site
`bruxadocontra` de 2026: verde profundo texturizado (papel, manchas de luz e vinheta),
ramos de folhas e flores em dourado, lua e estrelas, ilustração fundida ao fundo na
abertura. Títulos em Cormorant Garamond, chamadas e botões em Cinzel, texto em Josefin Sans.

Para lojas que **vendem** (módulos E-commerce e Holístico): o `template.json` pede
`sales:CreateProduct`. A tenant escolhe o template em **Loja › Site** e monta as páginas
em **Editar páginas**: textos, imagens, ordem das seções, páginas novas, cores, fontes e
o **nome do mapa**.

## Como funciona

- **`template.json`**: o contrato com o painel e o cloud-management: as seções (campos,
  grupo, globais), as aparências (paletas com ou sem textura, fontes), os nomes do mapa
  (`theme.chartNames`), o conteúdo padrão de cada seção e as páginas prontas (Início,
  Consultas, Sobre, Contato). Os textos padrão são genéricos.
- **`app/components/sections/`**: um componente por tipo de seção (`hero` → `SectionHero`).
  Além do catálogo dos holísticos 0001/0002, tem **Modalidades** (`modes`), **Leituras em
  detalhe** com índice lateral fixo (`readings`), **Destaques em caixas** (`features`),
  **Atendimento ao vivo** (`live`), **Aviso importante** (`notice`) e **Identidade da
  marca** (`identity`). Abertura, topo de página, citação, chamada final e rodapé têm o
  campo "Ramos e flores".
- **Nome do mapa**: a tenant escolhe em Aparência (`theme.chartName`: Mapa astral ou Roda
  Cigana). O kit (`birthChartNames`, 0.19+) aplica no build o nome nos títulos e botões,
  os endereços (`/roda-cigana`, `/minha-conta/rodas-ciganas`) e redireciona os padrão.
- **O que é dinâmico vem do `@ocahub/kit`**: vitrine, conta, sacola, WhatsApp da loja,
  amostra grátis do mapa e todas as páginas da loja.
- **Variáveis da empresa** nos textos: `{empresa}`, `{whatsapp}`, `{telefone}`, `{email}`,
  `{endereco}`, `{registro}` e `{instagram}` (Loja › Dados da loja › Contatos do site).
  Sem WhatsApp cadastrado, o rodapé, o contato e as perguntas não mostram o WhatsApp.
- **Botões**: o link é uma página do site (`/loja`, `/consultas#tema`), outro site
  (`https://...`) ou, vazio, o WhatsApp da loja.

## Versão nova

Mude o `template.json` (e a `version`), faça o push e, no painel, **Plataforma ›
Templates de site › Ler template.json**. Seção nova: o componente em
`app/components/sections/` e a entrada em `sections` e `sectionDefaults`.

## Desenvolvimento

`npm run dev` (porta 3024). O robô `release-check/tests-dev/template-floresta.spec.ts`
publica a Bruxa do Contra neste template, com as páginas de `support/floresta-pages.ts`.
