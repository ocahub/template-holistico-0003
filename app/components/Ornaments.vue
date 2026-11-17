<script setup lang="ts">
/**
 * Os ramos de folhas e flores de cada tipo de faixa, atras do conteudo.
 * A secao liga ou desliga no painel (campo "Ramos e flores").
 */
defineProps<{ kind: 'hero' | 'intro' | 'quote' | 'cta' | 'footer' }>()
</script>

<template>
  <div class="f-orn" :class="`f-orn--${kind}`" aria-hidden="true">
    <template v-if="kind === 'hero'">
      <BotanicalSprig class="f-orn__a" :bend="70" :seed="0" flower />
      <BotanicalSprig class="f-orn__b" :bend="-40" :leaves="7" :seed="2" />
    </template>
    <template v-else-if="kind === 'intro'">
      <BotanicalSprig class="f-orn__a" :bend="60" :seed="1" flower />
      <BotanicalSprig class="f-orn__b" :bend="-50" :leaves="7" :seed="3" />
    </template>
    <template v-else-if="kind === 'quote'">
      <BotanicalSprig class="f-orn__a" :bend="40" :leaves="8" :seed="4" />
      <BotanicalSprig class="f-orn__b" :bend="-40" :leaves="8" :seed="2" />
    </template>
    <template v-else-if="kind === 'cta'">
      <BotanicalSprig class="f-orn__a" :bend="55" :seed="1" flower />
      <BotanicalSprig class="f-orn__b" :bend="55" :seed="3" />
    </template>
    <template v-else>
      <BotanicalSprig class="f-orn__a" :bend="50" :leaves="8" :seed="5" />
    </template>
  </div>
</template>
