import * as React from 'react';

import {View, StyleSheet, ScrollView} from 'react-native';
import {List, IconButton} from 'react-native-paper';
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

  const RightActions = () => {
    return (
      <View style={styles.rightActionView}>
        <IconButton icon="trash-can" color="#fff" size={35} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {clientes.map((item) => (
          <Swipeable renderRightActions={RightActions}>
            <List.Item
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
  },
  listItem: {
    backgroundColor: '#8FD9CB',
    marginBottom: 2,
    borderRadius: 2,
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
