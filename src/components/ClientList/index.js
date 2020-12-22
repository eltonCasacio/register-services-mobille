import React, {useState} from 'react';
import {View, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import {List} from 'react-native-paper';

const ClientList = ({clients, callback}) => {
  const [expanded, setExpanded] = useState(false);
  const [client, setClient] = useState({});

  const handleSelectedClient = async (value) => {
    setExpanded(!expanded);
    callback(value);
    setClient(value);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <List.Accordion
          title={client.name || 'Selecione um cliente'}
          expanded={expanded}
          onPress={() => setExpanded(!expanded)}>
          {clients.map((item, indice) => (
            <TouchableOpacity
              style={styles.listItem}
              key={indice}
              onPress={() => handleSelectedClient(item)}>
              <List.Item key={item.id} title={item.name} />
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
    backgroundColor: '#ddd7',
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#2ABFB0',
  },
});

export default ClientList;
