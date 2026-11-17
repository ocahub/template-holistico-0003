<script setup lang="ts">
const props = defineProps<{ section: { id: string, props: Record<string, any> } }>()
const p = computed(() => props.section.props)
</script>

<template>
  <section class="f-sec f-paper-light f-ruled">
    <div class="f-wrap">
      <SectionHead :p="p" center />
      <ol class="f-steps" :style="{ '--cols': Math.min(p.items?.length || 1, 4) }">
        <li v-for="(it, i) in p.items" :key="i">
          <span class="f-steps__n">{{ Number(i) + 1 }}</span>
          <RhText tag="h3" class="f-h3" :path="`items.${i}.title`" :value="it.title" ph="Título" />
          <RhText tag="p" class="f-muted" :path="`items.${i}.text`" :value="it.text" ph="Texto" ml />
        </li>
      </ol>
    </div>
  </section>
</template>
