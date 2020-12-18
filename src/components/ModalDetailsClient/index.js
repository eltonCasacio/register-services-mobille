/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import {TextInput, Portal, IconButton, Checkbox} from 'react-native-paper';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import {getServicosById} from '../../bd/servicos';
import {sendToWhatsapp, calculateDebit} from '../../services/clientDetails';

import {styles, MyInput} from './styles';

const ModalDetailsClient = ({handleCloseModalDetails, clientData}) => {
  const client = clientData;
  const servicesBD = getServicosById();

  const [services, setServices] = useState(servicesBD);
  const [checkedDebt, setCheckedDebt] = useState(false);
  const [totalDebt, setTotalDebt] = useState(0);
  const [totalServices] = useState(servicesBD.length);

  const close = () => {
    handleCloseModalDetails();
  };

  const handleOpenEditService = (service) => {
    console.log('Abrir Modal para editar um serviço ', service);
  };

  const handleSwipeableLeftOpen = (service) => {
    let newServices = [];
    newServices.push(service);
    sendToWhatsapp(newServices, clientData.phone);
  };

  const handleSwipeableRightOpen = (service) => {
    console.log('Alterar status de pagamento no BD', service.id);
  };

  const onCashIn = () => {
    sendToWhatsapp(servicesBD, clientData.phone);
  };

  const updateTableServices = () => {
    let servicesToReceive = 0;

    if (checkedDebt) {
      servicesToReceive = servicesBD.filter((service) => service.debt);
      setServices(servicesToReceive);
      calculateDebit(servicesToReceive).then((res) => setTotalDebt(res));
      return;
    }

    setServices(servicesBD);
    calculateDebit(servicesBD).then((res) => setTotalDebt(res));
  };

  const RightActions = () => {
    return (
      <View style={styles.rightActionView}>
        <IconButton icon="cash-100" color="#0f0" size={30} />
        <Text>Pago</Text>
      </View>
    );
  };

  const LeftActions = () => {
    return (
      <View style={styles.leftActionView}>
        <IconButton icon="send" color="#0f0" size={35} />
        <Text>Enviado</Text>
      </View>
    );
  };

  useEffect(() => {
    updateTableServices();
  }, [checkedDebt]);

  return (
    <Portal>
      <View style={styles.container}>
        <Text style={styles.title}>Detalhes</Text>
        <View>
          <MyInput value={client.name} editable={false} />
          <MyInput value={client.phone} editable={false} type={'numeric'} />

          <TextInput
            style={styles.observation}
            value={client.observacao}
            multiline={true}
            numberOfLines={2}
            editable={false}
            underlineColor="#2ABFB0"
          />
        </View>

        <Text style={styles.totalServices}>
          Total de seviços prestado: {totalServices}
        </Text>

        <View style={styles.debtChecked}>
          <Text>Não pagos</Text>
          <Checkbox
            status={checkedDebt ? 'checked' : 'unchecked'}
            onPress={() => setCheckedDebt(!checkedDebt)}
          />
        </View>

        <View style={styles.list}>
          <FlatList
            data={services}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => (
              <ScrollView>
                <Swipeable
                  key={item.id}
                  renderRightActions={RightActions}
                  renderLeftActions={LeftActions}
                  onSwipeableLeftOpen={() => handleSwipeableLeftOpen(item)}
                  onSwipeableRightOpen={() => handleSwipeableRightOpen(item)}>
                  <TouchableOpacity
                    style={styles.listItem}
                    onPress={() => handleOpenEditService(item)}>
                    <View style={styles.datePrice}>
                      <Text>{item.data}</Text>
                      <Text>R${item.valor}</Text>
                      <Text>{item.debt ? 'a receber' : 'pago'}</Text>
                    </View>
                    <Text>{item.descricao}</Text>
                  </TouchableOpacity>
                </Swipeable>
              </ScrollView>
            )}
          />
        </View>

        <Text style={styles.totalDebts}>
          R${totalDebt.toFixed(2).replace('.', ',')}
        </Text>

        <View style={styles.buttons}>
          <IconButton
            color="#2ABFB0"
            icon="close"
            size={30}
            style={styles.input}
            onPress={close}
          />

          <IconButton
            color="#2ABFB0"
            icon="currency-usd"
            size={30}
            style={styles.input}
            onPress={onCashIn}
          />
        </View>
      </View>
    </Portal>
  );
};

export default ModalDetailsClient;
