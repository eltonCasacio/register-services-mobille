import * as React from 'react';

import {View, StyleSheet, ScrollView} from 'react-native';
import {Text, List, IconButton} from 'react-native-paper';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import ModalNewClient from '../../components/ModalNewClient';
import ModalDetailsClient from '../../components/ModalDetailsClient';

import {getClienteById} from '../../bd/clientes';

const Clients = () => {
  const clientBD = getClienteById();

  console.log('Clientes DB::', clientBD);

  const [currentClient, setCurrentClient] = React.useState();
  const [showModalNewCliente, setShowModalNewCliente] = React.useState(false);
  const [showModalDetails, setShowModalDetailsCliente] = React.useState(false);

  const onDelete = (cliente, indice) => {
    console.log('delete ', cliente.name, indice);
  };

  const onDetails = (clienteDetail) => {
    setCurrentClient(clienteDetail);
    handleShowModalDetails();
  };

  const handleShowModalClient = () => {
    setShowModalNewCliente(!showModalNewCliente);
  };

  const handleShowModalDetails = () => {
    setShowModalDetailsCliente(!showModalDetails);
  };

  const RightActions = () => {
    return (
      <View style={styles.rightActionView}>
        <IconButton icon="trash-can" color="#fff" size={35} />
        <Text>Excluir</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {clientBD.map((item, indice) => (
          <Swipeable
            key={indice}
            renderRightActions={RightActions}
            onSwipeableOpen={() => onDelete(item, indice)}>
            <List.Item
              key={item.id}
              title={item.name}
              description={item.observacao}
              style={styles.listItem}
              onPress={() => onDetails(item)}
            />
          </Swipeable>
        ))}
      </ScrollView>

      <IconButton
        icon="plus"
        color="#2ABFB0"
        size={45}
        style={{alignSelf: 'center'}}
        onPress={handleShowModalClient}
      />

      {showModalNewCliente && (
        <ModalNewClient handleCloseModal={handleShowModalClient} />
      )}

      {showModalDetails && (
        <ModalDetailsClient
          handleCloseModalDetails={handleShowModalDetails}
          clientData={currentClient}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#2ABFB0',
    backgroundColor: '#dFdFdF',
    borderRadius: 2,
    marginBottom: 2,
  },
  rightActionView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 20,
    backgroundColor: '#F24607',
  },
});
export default Clients;
