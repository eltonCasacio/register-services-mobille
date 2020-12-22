/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import {Portal, Checkbox} from 'react-native-paper';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import {getServicosById} from '../../bd/servicos';
import {sendToWhatsapp} from '../../services/SendToWhatsapp';
import {calculateDebit} from '../../services/CalculateDebt';

import ModalDetailsService from '../ModalDetailsService';
import {RightActionsCash, LeftActionsSend} from '../ActionsSwipeable';
import {MyInput, PersonButton} from '../MyInput';

import {styles} from './styles';

const ModalDetailsClient = ({handleCloseModalDetails, clientData}) => {
  const client = clientData;
  const servicesBD = getServicosById();

  const [services, setServices] = useState(servicesBD);
  const [checkedDebt, setCheckedDebt] = useState(false);
  const [totalDebt, setTotalDebt] = useState(0);
  const [totalServices] = useState(servicesBD.length);

  const [showModalDetails, setShowModalDetailsService] = useState(false);
  const [selectedService, setSelectedService] = useState(false);

  const close = () => {
    handleCloseModalDetails();
  };

  const handleOpenEditService = (service) => {
    setSelectedService(service);
    setShowModalDetailsService(!showModalDetails);
  };

  const handleSwipeableLeftOpen = (service) => {
    sendToWhatsapp([service], clientData.phone);
  };

  const handleSwipeableRightOpen = (service) => {
    console.log('Alterar status de pagamento no BD');
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

  useEffect(() => {
    updateTableServices();
  }, [checkedDebt]);

  return (
    <Portal>
      <View style={styles.container}>
        <Text style={styles.title}>DETALHES</Text>
        <View>
          <MyInput value={client.name} editable={false} />
          <MyInput value={client.phone} editable={false} type={'numeric'} />

          <MyInput
            value={client.observacao}
            multiline={true}
            numberOfLines={3}
            editable={false}
          />
        </View>

        <Text style={styles.totalDebts}>
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
                  renderRightActions={RightActionsCash}
                  renderLeftActions={LeftActionsSend}
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
          <PersonButton icon="dollar-sign" callback={onCashIn} />
          <PersonButton icon="x" callback={close} />
        </View>

        {showModalDetails && (
          <ModalDetailsService
            clientID={client.id}
            service={selectedService}
            handleCloseModalDetails={handleOpenEditService}
          />
        )}
      </View>
    </Portal>
  );
};

export default ModalDetailsClient;
