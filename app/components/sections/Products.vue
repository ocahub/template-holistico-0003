<script setup lang="ts">
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
const { editing } = useRhSite()
</script>

<template>
  <section class="f-sec f-paper">
    <div class="f-wrap">
      <SectionHead :p="p" center />
      <div class="f-showcase">
        <RhProductShowcase :kind="p.source" :count="p.count" :layout="p.layout">
          <template #empty><p v-if="editing" class="f-empty">Nenhum produto deste tipo à venda na loja. No site, esta vitrine não aparece.</p></template>
        </RhProductShowcase>
      </div>
      <div v-if="p.button || editing" class="f-center f-more"><NuxtLink to="/loja" class="f-btn f-btn--outline"><RhText path="button" :value="p.button" ph="Botão" /></NuxtLink></div>
    </div>
  </section>
</template>
