<script setup lang="ts">
  import { ref, computed } from 'vue'
  import type { CardListItemType } from '@/types/index'

  const emit = defineEmits(['action_media', 'action_content'])
  const props = defineProps<CardListItemType>()

  const isHovered = ref(false)

  function handleMediaClick() {
    emit('action_media', { title: props.title, id: props.id });
  }
  
  function handleTitleClick() {
    emit('action_content', { title: props.title, id: props.id });
  }

  const heading = computed(() => {
    if (props.title.length <= 30) return props.title
    return `${props.title.slice(0, 30)}[...]`
  })

  const excerpt = computed(() => {
    if (props.description.length <= 120) return props.description
    return isHovered.value ? props.description : `${props.description.slice(0, 120)}[...]`
  })
</script>

<template>
  <article class="card-list-item"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false">

    <div class="item-content">
      <a class="image-container image-link" @click="handleMediaClick">
        <img class="item-image" v-if="image" :src="image.src" :alt="image.alt" />
      </a>

      <div class="tags" v-if="props.tags">
        <span class="tag" v-for="tag in props.tags" :key="tag.slug">{{ tag.title }}</span>
      </div>

      <hgroup>
        <p class="super-title" v-if="superTitle">{{ superTitle }}:</p>
        <h2 class="title">
          <a class="text-link" @click="handleTitleClick">{{ heading }}</a>
        </h2>
      </hgroup>
      
      <p class="description">{{ excerpt }}</p>
    </div>

  </article>
</template>