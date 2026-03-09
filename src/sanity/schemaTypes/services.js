export const services = {
  name: 'services',
  title: 'Servicios',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre del servicio',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'calEventTypeId',
      title: 'Cal.com Event Type ID',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'duration',
      title: 'Duración (minutos)',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Precio (CLP)',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Orden de aparición',
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
    select: { title: 'name', subtitle: 'price' },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle
          ? `$${subtitle.toLocaleString('es-CL')}`
          : 'Sin precio',
      }
    },
  },
}
