import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, IconButton} from 'react-native-paper';

export const RightActionsDelete = () => {
  return (
    <View style={styles.RightActionsDelete}>
      <IconButton icon="trash-can" color="#fff" size={35} />
      <Text>Excluir</Text>
    </View>
  );
};

export const RightActionsCash = () => {
  return (
    <View style={styles.RightActionsCash}>
      <IconButton icon="cash-100" color="#0f0" size={30} />
      <Text>Pago</Text>
    </View>
  );
};

export const LeftActionsSend = () => {
  return (
    <View style={styles.LeftActionsSend}>
      <IconButton icon="send" color="#0f0" size={35} />
      <Text>Enviado</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  RightActionsDelete: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 10,
    backgroundColor: '#F24607',
    marginBottom: 5,
  },
  RightActionsCash: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: 10,
  },
  LeftActionsSend: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
});
