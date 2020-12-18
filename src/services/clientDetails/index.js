import {Linking} from 'react-native';

export const sendToWhatsapp = (listServices, phone) => {
  const servicesCashIn = listServices.filter((service) => service.debt);
  const totalCahsIn = servicesCashIn
    .map((item) => item.valor)
    .reduce((old, current) => old + current);

  let msg = servicesCashIn.map(
    (service) => `
    ${service.data} - ${service.descricao} - R$:${service.valor
      .toFixed(2)
      .replace('.', ',')}`,
  );

  msg.push(`\nTotal: ${totalCahsIn.toFixed(2).replace('.', ',')}`);

  Linking.openURL(
    `https://api.whatsapp.com/send?phone=55${phone}&text=Olá, Segue relatório de serviços...\n${String(
      msg,
    )}"`,
  );

  // Linking.openURL(`whatsapp://send?text=${totalDebt}`);
};

export const calculateDebit = async (listServices) => {
  const getPrices = (service) => service.valor;
  const sumValues = (sum, value) => Number(sum) + Number(value);

  return await listServices.map(getPrices).reduce(sumValues);
};

export const deleteClient = (id) => {
  console.log('Excluindo cliente, ', id);
};
