export const lookbook = {
  name: 'lookbook',
  title: 'Lookbook',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'alt',
      title: 'Texto alternativo (accesibilidad)',
      type: 'string',
      description: 'Describe brevemente la foto. Ej: Corte fade con barba perfilada.',
    },
    {
      name: 'order',
      title: 'Orden',
      type: 'number',
    },
  ],
  orderings: [
    {
      title: 'Orden',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'alt', media: 'image' },
    prepare({ title, media }) {
      return {
        title: title || 'Sin descripción',
        media,
      }
    },
  },
}