type tag = { slug: string; title: string; };

export type CardListItemType = {
  id: string;
  title: string;
  superTitle?: string;
  description: string;
  tags?: tag[];
  image?: {
    src: string;
    alt: string;
  }
}