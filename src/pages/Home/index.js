import * as React from 'react';

import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
