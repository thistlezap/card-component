import type { Meta, StoryObj } from '@storybook/vue3';
import CardListItem from '../components/cards/CardListItem.vue';

import '../assets/main.css';

const meta = {
  title: 'Components/CardListItem',
  component: CardListItem,
  argTypes: {
    // Control events
    onAction_media: { action: 'action_media' },
    onAction_content: { action: 'action_content' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardListItem>;

export default meta;

type Story = StoryObj<typeof CardListItem>;

export const Default: Story = {
  args: {
    id: 'card_default',
    title: 'Card Title Example',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac eros purus. Suspendisse potenti. Vivamus quis dolor a urna pretium dapibus vel a nulla. Integer vitae magna eros. Curabitur sed arcu id velit ullamcorper mollis. Fusce fermentum risus ut ipsum sollicitudin pharetra. Quisque nec justo eu velit venenatis tempor. Sed at purus bibendum, fermentum erat ac, pretium odio. Morbi sed tristique eros. Sed vitae pharetra magna.',
    superTitle: 'Super-title',
    tags: [{ slug: 'tag1', title: 'Tag 1' }, { slug: 'tag2', title: 'Tag 2' }],
    image: {
      src: '/images/img_1.png',
      alt: 'Placeholder Image',
    },
  },
  render: (args) => (
    <section class="component -wide card-list">
      <CardListItem {...args} />
    </section>
  )
}

export const WithoutImage: Story = {
  args: {
    id: 'card_no_image',
    title: 'Teaser card without image',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac eros purus. Suspendisse potenti. Vivamus quis dolor a urna pretium dapibus vel a nulla. Integer vitae magna eros. Curabitur sed arcu id velit ullamcorper mollis. Fusce fermentum risus ut ipsum sollicitudin pharetra. Quisque nec justo eu velit venenatis tempor. Sed at purus bibendum, fermentum erat ac, pretium odio. Morbi sed tristique eros. Sed vitae pharetra magna.',
    superTitle: 'No image here whatsoever',
    tags: [{ slug: 'tag3', title: 'Tag 3' }],
  },
  render: (args) => (
    <section class="component -wide card-list">
      <CardListItem {...args} />
    </section>
  )
};
