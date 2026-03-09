export const location = {
  name: 'location',
  title: 'Ubicación y Contacto',
  type: 'document',
  fields: [
    {
      name: 'address',
      title: 'Dirección',
      type: 'string',
    },
    {
      name: 'city',
      title: 'Ciudad',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Teléfono',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Correo electrónico',
      type: 'string',
    },
    {
      name: 'hours',
      title: 'Horarios',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'days', title: 'Días', type: 'string' },
            { name: 'hours', title: 'Horario', type: 'string' },
          ],
          preview: {
            select: { title: 'days', subtitle: 'hours' },
          },
        },
      ],
    },
  ],
  preview: {
    select: { title: 'address' },
  },
}
