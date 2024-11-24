import type { Meta, StoryObj } from '@storybook/vue3';
import CardListItem from '../components/cards/CardListItem.vue';

// Meta configuration
const meta = {
  title: 'Components/CardListItem',
  component: CardListItem,
  argTypes: {
    // Control events
    onAction_media: { action: 'action_media' },
    onAction_content: { action: 'action_content' },
  },
} satisfies Meta<typeof CardListItem>;

export default meta;

type Story = StoryObj<typeof CardListItem>;

// Template to render the component with props
const Template: any = (args: any) => ({
  components: { CardListItem },
  setup() {
    // You can add any local state here if needed
    return { args };
  },
  template: '<CardListItem v-bind="args" />',
});

// Default story with basic props
export const Default = Template.bind({});
Default.args = {
  id: 'card_default',
  title: 'Card Title Example',
  description: 'This is a description of the card item. It can be long or short, depending on the content.',
  superTitle: 'Super Title',
  tags: [{ slug: 'tag1', title: 'Tag 1' }, { slug: 'tag2', title: 'Tag 2' }],
  image: {
    src: '/images/img_1.png',
    alt: 'Placeholder Image',
  },
};

// Story for a card without an image
export const WithoutImage = Template.bind({});
WithoutImage.args = {
  id: 'card_no_image',
  title: 'Another Card Without Image',
  description: 'This card does not have an image. It should still display all other content properly.',
  superTitle: 'No Image',
  tags: [{ slug: 'tag3', title: 'Tag 3' }],
};

// Story for a card with hover effect
export const Hovered = Template.bind({});
Hovered.args = {
  id: 'card_hovered',
  title: 'Card with Hover Effect',
  description: 'This card will show the full description when hovered.',
  superTitle: 'Hover Me',
  tags: [{ slug: 'tag4', title: 'Tag 4' }],
  image: {
    src: '/images/img_1.png',
    alt: 'Placeholder Image',
  },
};

// Story for a card with longer description
export const LongDescription = Template.bind({});
LongDescription.args = {
  id: 'card_long_description',
  title: 'Card with Long Description',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac eros purus. Suspendisse potenti. Vivamus quis dolor a urna pretium dapibus vel a nulla. Integer vitae magna eros. Curabitur sed arcu id velit ullamcorper mollis. Fusce fermentum risus ut ipsum sollicitudin pharetra. Quisque nec justo eu velit venenatis tempor. Sed at purus bibendum, fermentum erat ac, pretium odio. Morbi sed tristique eros. Sed vitae pharetra magna.',
  superTitle: 'Long Text Example',
  tags: [{ slug: 'tag5', title: 'Tag 5' }],
  image: {
    src: '/images/img_1.png',
    alt: 'Placeholder Image',
  },
};