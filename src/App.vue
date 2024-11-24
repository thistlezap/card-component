<script setup lang="ts">
  import CardList from './components/cards/CardList.vue'
  import { nanoid } from 'nanoid'
  import type { CardListItemType } from '@/types/index'

  const dummyCards: CardListItemType[] = [
    {
      id: `card_${nanoid()}`,
      title: 'Nedgang på Oslo Børs før kveldens rentebeskjed fra USA',
      superTitle: 'Konkurransetilsynet',
      description: 'Ut ut leo eget tortor suscipit rhoncus ut sit amet mauris. Suspendisse tristique justo non magna venenatis, condimentum ultrices odio faucibus. Cras vestibulum fermentum libero, ut viverra turpis pharetra sed. Donec placerat leo ligula, et hendrerit massa condimentum id. Quisque vulputate non purus in varius. Fusce gravida leo ligula, vitae ornare augue ultrices sed. Curabitur a ex placerat lectus pulvinar tincidunt at sed nunc. Curabitur vitae felis dui',
      tags: [{ slug: 'finans', title: 'Finans' }],
      image: {
        src: '/images/img_1.png',
        alt: 'Oslo Børs'
      }
    },
    {
      id: `card_${nanoid()}`,
      title: 'Slik unngår it-avdelingen å bli stående på perrongen når ledelsen tar digitalt ekspresstog inn i fremtiden',
      superTitle: 'Doblet på en måned',
      description: 'Nullam quis commodo velit. Cras a gravida lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem diam, cursus id leo eget, maximus rutrum libero. Fusce accumsan cursus libero, sed eleifend nibh rhoncus vel. Curabitur vulputate metus et nulla convallis, eget elementum risus tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur a magna non risus accumsan malesuada ut eget lacus. Proin ut suscipit dui. Fusce eget posuere ante. Proin at ipsum iaculis, blandit turpis in, convallis lacus.',
      tags: [{ slug: 'annonse', title: 'Annonse' }, { slug: 'entur', title: 'Entur' }],
      image: {
        src: '/images/img_2.png',
        alt: 'Smilende mann med skjegg'
      }
    },
    {
      id: `card_${nanoid()}`,
      title: 'Portefølje­forvalterens tips til hvordan du unngår «FOMO» i aksjemarkedet',
      description: 'Donec iaculis ex at pharetra auctor. Sed suscipit odio et ullamcorper fermentum. Quisque dignissim elit lectus, condimentum semper massa vehicula euismod. Cras iaculis nulla tincidunt egestas euismod. Integer vitae faucibus ex. Curabitur vel rutrum nulla. Praesent consectetur, tellus dictum tempor tincidunt, elit est tincidunt nisl, quis ornare est mi et quam. Praesent vestibulum ligula dui, nec eleifend leo rutrum et. Fusce ac lectus urna.',
      tags: [{ slug: 'topic', title: 'Topic' }, { slug: 'abonnent', title: 'Abonnent' }],
      image: undefined,
    },
    {
      id: `card_${nanoid()}`,
      title: 'Equinor har tapt over 200 milliarder kroner',
      description: 'Aliquam erat volutpat. Curabitur mauris dui, cursus vitae lobortis et, interdum id lectus. Aenean nibh nisl, suscipit ac egestas finibus, efficitur eu tortor. Praesent hendrerit, enim ut tempor fringilla, libero arcu posuere nibh, nec pulvinar nunc nunc at turpis. Vestibulum fringilla scelerisque malesuada. Morbi placerat ante in quam tincidunt dictum. Nullam nec ornare lorem. Fusce id purus tortor. Cras feugiat orci tortor, vel lacinia nisi mollis sed. Nullam sed enim consequat',
      tags: [{ slug: 'dokumentar', title: 'Dokumentar' }],
      image: {
        src: '/images/img_3.png',
        alt: 'Equinor'
      }
    },
  ];
</script>

<template>
  <main>
    <section class="layout">
      <CardList :cards="dummyCards"/>
    </section>
  </main>
</template>
