export const calculateDebit = async (listServices) => {
  const getPrices = (service) => service.valor;
  const sumValues = (sum, value) => Number(sum) + Number(value);

  return await listServices.map(getPrices).reduce(sumValues);
};
