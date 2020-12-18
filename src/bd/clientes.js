const clientes = [
  {
    id: 1,
    name: 'elton',
    phone: '11111111111',
    observacao: 'observação qualquer',
    data: '12/12/20',
  },
  {
    id: 2,
    name: 'Roberto',
    phone: '22222222222',
    observacao: 'observação qualquer',
    data: '12/12/20',
  },
  {
    id: 3,
    name: 'Daniel',
    phone: '33333333333',
    observacao: 'observação qualquer',
    data: '12/12/20',
  },
  {
    id: 4,
    name: 'Casacio',
    phone: '44444444444',
    observacao: 'observação qualquer',
    data: '17/12/20',
  },
];

export const getClienteById = (id) => {
  return id ? clientes.filter((cliente) => cliente.id === id) : clientes;
};
