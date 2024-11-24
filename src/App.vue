<script setup lang="ts">
  import CardList from './components/cards/CardList.vue'
</script>

<template>
  <header>
    
  </header>

  <main>
    <section class="layout">
      <CardList />  
    </section>
  </main>
</template>

<style scoped>
.layout {
  display: grid;
  gap: var(--row-gap) var(--column-gap);

  grid-template-columns: repeat(4, 1fr);

  @media (min-width: 1024px) {
    grid-template-columns: repeat(12, 1fr);
  }

  .component {
    grid-column: span 4;

    @media (min-width: 1024px) {
      grid-column: span 12;
    }

    &:not(.-wide) {
      @media (min-width: 1024px) {
        grid-column: 2 / span 10;
      }

      @media (min-width: 1200px) {
        grid-column: 3 / span 8;
      }
    }
  }
}
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header {
    .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }
} */
</style>
