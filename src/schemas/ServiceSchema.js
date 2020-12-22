const ServiceSchema = {
  name: 'Service',
  primaryKey: 'id',
  properties: {
    id: 'string',
    description: 'string?',
    price: 'double',
    debt: 'bool',
    photo: 'string',
    createdAt: 'date',
    updateAt: 'date',
    client: 'client',
  },
};

export default ServiceSchema;
