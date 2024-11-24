<script setup lang="ts">
  import type { CardListItemType } from '@/types/index'
  import CardListItem from './CardListItem.vue'

  function handleActionContent(payload: { title: string, id: string }) {
    console.log('action_content', payload)
  }

  function handleActionMedia(payload: { title: string, id: string }) {
    console.log('action_media', payload)
  }

  const props = defineProps<{
    cards: CardListItemType[]
  }>()
</script>

<template>
  <section class="component -wide card-list">
    <CardListItem 
      :key="card.id" 
      v-bind="card"
      v-for="card in cards" 
      @action_content="handleActionContent"
      @action_media="handleActionMedia"
    />
  </section>
</template>