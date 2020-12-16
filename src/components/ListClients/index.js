import React, {useState} from 'react';
import {View, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import {List} from 'react-native-paper';

const ListClients = ({data, callback}) => {
  const [expanded, setExpanded] = useState(false);
  const [client, setClient] = useState('Selecione um Cliente');

  const handleSelectedClient = async (value) => {
    setExpanded(!expanded);
    callback(value);
    setClient(value);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <List.Accordion
          title={client}
          expanded={expanded}
          onPress={() => setExpanded(!expanded)}>
          {data.map((item, indice) => (
            <TouchableOpacity
              style={styles.listItem}
              key={indice}
              onPress={() => handleSelectedClient(item)}>
              <List.Item key={item} title={item} />
            </TouchableOpacity>
          ))}
        </List.Accordion>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  listItem: {
    backgroundColor: '#2ABFB0',
    marginBottom: 2,
    borderRadius: 5,
  },
});

export default ListClients;
