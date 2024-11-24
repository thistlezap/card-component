<script setup lang="ts">
  import { ref, computed, defineProps } from 'vue'
  import type { CardListItemType } from '@/types/index'

  const props = defineProps<CardListItemType>()

  const isHovered = ref(false)

  const emit = defineEmits(['action_media', 'action_content'])

  function handleMediaClick() {
    console.log('action_media', { title: props.title, id: props.id })
    emit('action_media', { title: props.title, id: props.id });
  }
  
  function handleTitleClick() {
    console.log('action_content', { title: props.title, id: props.id })
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
      <a class="image-container" @click="handleMediaClick">
        <img v-if="image" :src="image.src" :alt="image.alt" />
      </a>

      <div class="tags" v-if="props.tags">
        <span class="tag" v-for="tag in props.tags" :key="tag.slug">{{ tag.title }}</span>
      </div>

      <hgroup>
        <p class="super-title" v-if="superTitle">{{ superTitle }}:</p>
        <h2 class="title">
          <a @click="handleTitleClick">{{ heading }}</a>
        </h2>
      </hgroup>
      
      <p class="description">{{ excerpt }}</p>
    </div>

  </article>
</template>

<style scoped>
.card-list-item {
  display: grid;
  align-content: start;
  
  .item-content {
    padding: var(--card-list-item-padding);
    color: var(--card-list-item-color-text);
    background-color: var(--card-list-item-color-background);
    border-radius: var(--card-list-item-border-radius);
    display: grid;
    align-content: start;
    gap: 0.5rem;
  }

  .image-container {
    border-radius: 4px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;

    .tag {
      font-size: 0.75rem;
      opacity: .7;

      & + .tag {
        &::before {
          content: '|';
          margin: 0 .2rem;
        }
      }
    }
  }

  .title,
  .description {
    hyphens: auto;
  }

  .title {
    font-size: 1.2rem;
  }
}
</style>