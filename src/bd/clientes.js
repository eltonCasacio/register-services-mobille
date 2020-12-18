const clientes = [
  {
    id: 1,
    name: 'elton',
    phone: '19971196825',
    observacao:
      'observação qualquer observação qualquer observação qualquer observação qualquer observação qualquer',
    data: '12/12/20',
  },
  {
    id: 2,
    name: 'Roberto',
    phone: '19971196825',
    observacao: 'observação qualquer',
    data: '12/12/20',
  },
  {
    id: 3,
    name: 'Daniel',
    phone: '19971196825',
    observacao: 'observação qualquer',
    data: '12/12/20',
  },
  {
    id: 4,
    name: 'Casacio',
    phone: '19971196825',
    observacao: 'observação qualquer',
    data: '17/12/20',
  },
];

export const getClienteById = (id) => {
  return id ? clientes.filter((cliente) => cliente.id === id) : clientes;
};
