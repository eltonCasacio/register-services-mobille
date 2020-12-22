import * as React from 'react';

import {View, ScrollView} from 'react-native';
import {Text, List} from 'react-native-paper';
import {PersonButton} from '../../components/MyInput';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import ModalNewClient from '../../components/ModalNewClient';
import ModalDetailsClient from '../../components/ModalDetailsClient';

import {getClienteById} from '../../bd/clientes';
import {RightActionsDelete} from '../../components/ActionsSwipeable';

import {styles} from './styles';

const Clients = () => {
  const [currentClient, setCurrentClient] = React.useState();
  const [showModalNewCliente, setShowModalNewCliente] = React.useState(false);
  const [showModalDetails, setShowModalDetailsCliente] = React.useState(false);

  const onDelete = (clientId) => {};

  const onDetails = (clienteDetail) => {
    setCurrentClient(clienteDetail);
    handleShowModalDetails();
  };

  const handleShowModalClient = () =>
    setShowModalNewCliente(!showModalNewCliente);

  const handleShowModalDetails = () =>
    setShowModalDetailsCliente(!showModalDetails);

  const clientBD = getClienteById();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CLIENTES</Text>
      <ScrollView>
        {clientBD.map((item, indice) => (
          <Swipeable
            key={indice}
            renderRightActions={RightActionsDelete}
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

      <View style={styles.button}>
        <PersonButton
          icon="user-plus"
          size={35}
          callback={handleShowModalClient}
        />
      </View>

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

export default Clients;
