const ClientSchema = {
  name: 'Client',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    phone: 'string?',
    description: 'string?',
    createdAt: 'date',
    updateAt: 'date',
    services: 'Services[]',
  },
};

export default ClientSchema;
