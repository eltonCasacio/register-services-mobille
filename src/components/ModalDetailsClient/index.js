/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, ScrollView} from 'react-native';
import {TextInput, Portal, IconButton, Checkbox} from 'react-native-paper';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import {getServicosById} from '../../bd/servicos';

import {styles} from './styles';

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

  const save = () => {
    console.log('Salvando alteração do cliente ', clientData.name);
  };

  const handleCheckedDebt = () => {
    let debts = 0;

    if (checkedDebt) {
      debts = servicesBD.filter((service) => service.debt);
      setServices(debts);
      calculateDebt(debts);
      return;
    }

    setServices(servicesBD);
    calculateDebt(servicesBD);
  };

  const calculateDebt = async (listServices) => {
    const getPrices = (service) => service.valor;
    const sumValues = (sum, value) => Number(sum) + Number(value);

    const debts = await listServices.map(getPrices).reduce(sumValues);

    setTotalDebt(debts);
  };

  useEffect(() => {
    calculateDebt();
  }, []);

  useEffect(() => {
    handleCheckedDebt();
  }, [checkedDebt]);

  return (
    <Portal>
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.input}
            value={client.name}
            editable={false}
            underlineColor="#2ABFB0"
          />

          <TextInput
            style={styles.input}
            value={client.phone}
            keyboardType="numeric"
            editable={false}
            underlineColor="#2ABFB0"
          />

          <TextInput
            style={{marginBottom: 10, backgroundColor: '#eee8'}}
            value={client.observacao}
            multiline={true}
            numberOfLines={3}
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
          <Swipeable>
            <FlatList
              data={services}
              keyExtractor={(item) => String(item.id)}
              renderItem={({item}) => (
                <ScrollView>
                  <View style={styles.listItem}>
                    <View style={styles.datePrice}>
                      <Text>{item.data}</Text>
                      <Text>R${item.valor}</Text>
                    </View>
                    <Text>{item.descricao}</Text>
                  </View>
                </ScrollView>
              )}
            />
          </Swipeable>
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
            onPress={save}
          />
        </View>
      </View>
    </Portal>
  );
};

export default ModalDetailsClient;
