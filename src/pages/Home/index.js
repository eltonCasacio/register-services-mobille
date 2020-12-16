import * as React from 'react';

import {View, StyleSheet, ScrollView} from 'react-native';
import {List, IconButton, Text} from 'react-native-paper';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const Home = () => {
  const clientes = [
    'elton',
    'roberto',
    'daniel',
    'casacio',
    'roberto',
    'daniel',
    'casacio',
    'roberto',
    'daniel',
    'casacio',
  ];

  const LeftActions = (item) => {
    return (
      <View style={styles.leftActionView}>
        <Text style={styles.leftActionText}>{item}</Text>
        <Text style={styles.leftActionText}>Descrição...</Text>
      </View>
    );
  };

  const RightActions = () => {
    return (
      <View style={styles.rightActionView}>
        <IconButton icon="trash-can" color="#fff" size={35} />
      </View>
    );
  };

  function teste() {
    console.log('teste');
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        {clientes.map((item) => (
          <Swipeable
            renderLeftActions={() => LeftActions(item)}
            renderRightActions={RightActions}>
            <List.Item
              onPress={teste}
              key={item}
              title={item}
              description="3 Serviços a receber"
              style={styles.listItem}
            />
          </Swipeable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    overflow: 'scroll',
  },
  listItem: {
    backgroundColor: '#8FD9CB',
    marginBottom: 2,
    borderRadius: 2,
  },
  leftActionView: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 15,
    marginBottom: 2,
    borderRadius: 5,
    backgroundColor: '#04BF8A',
  },
  leftActionText: {
    color: '#fff',
  },
  rightActionView: {
    justifyContent: 'center',
    marginBottom: 2,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: '#F24607',
  },
});
export default Home;
