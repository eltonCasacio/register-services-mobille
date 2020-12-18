const servicos = [
  {
    id: 1,
    id_cliente: 1,
    data: '12/12/20',
    descricao: 'Serviço 1',
    valor: 123.0,
    debt: false,
  },
  {
    id: 2,
    id_cliente: 2,
    data: '17/12/20',
    descricao: 'Serviço 2',
    valor: 123.0,
    debt: false,
  },
  {
    id: 3,
    id_cliente: 1,
    data: '17/12/20',
    descricao: 'Serviço 3',
    valor: 123.0,
    debt: true,
  },
  {
    id: 4,
    id_cliente: 1,
    data: '12/12/20',
    descricao: 'Serviço 4',
    valor: 123.0,
    debt: false,
  },
  {
    id: 11,
    id_cliente: 1,
    data: '12/12/20',
    descricao: 'Serviço 1 Serviço 1 Serviço 1 Serviço 1 Serviço 1 Serviço 1 Serviço 1 Serviço 1 Serviço 1 Serviço 1 Serviço 1 Serviço 1',
    valor: 123.0,
    debt: false,
  },
  {
    id: 21,
    id_cliente: 2,
    data: '17/12/20',
    descricao: 'Serviço 2',
    valor: 123.0,
    debt: true,
  },
  {
    id: 31,
    id_cliente: 1,
    data: '17/12/20',
    descricao: 'Serviço 3',
    valor: 123.0,
    debt: false,
  },
  {
    id: 41,
    id_cliente: 1,
    data: '12/12/20',
    descricao: 'Serviço 4',
    valor: 123.0,
    debt: true,
  },
];

export const getServicosById = (id) => {
  return id ? servicos.filter((servico) => servico.id === id) : servicos;
};
