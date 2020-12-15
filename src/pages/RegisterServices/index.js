import * as React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Picker,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

import CameraPicker from '../../components/CameraPicker';

const RegisterService = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [selectedClient, setSelectedClient] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [date, setDate] = React.useState();
  const [showDate, setShowDate] = React.useState(false);

  const handleSelectedClient = async (value) => {
    setSelectedClient(value);
    setExpanded(!expanded);
  };
  const onChangeDate = (event, selectedDate) => {
    let currentDate = new Date(selectedDate).toLocaleDateString() || date;
    setShowDate(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const save = () => {
    console.log('SALVANDO serviço', {
      selectedClient,
      description,
      price,
      date,
    });
  };

  const clientes = ['elton', 'roberto', 'daneil', 'casacio'];

  return (
    <View style={styles.container}>
      <View style={styles.dropList}>
        <Picker
          selectedValue={selectedClient}
          onValueChange={(itemValue, itemIndex) => {
            handleSelectedClient(itemValue);
          }}>
          {clientes.map((item) => (
            <Picker.Item key={item} label={item} value={item} />
          ))}
        </Picker>
      </View>

      <View>
        <TextInput
          style={styles.input}
          label="Descrição"
          value={description}
          multiline={true}
          numberOfLines={5}
          underlineColor="#2ABFB0"
          onChangeText={(value) => setDescription(value)}
        />

        <TextInput
          style={styles.input}
          label="Valor"
          value={price}
          underlineColor="#2ABFB0"
          keyboardType="numeric"
          onChangeText={(value) => setPrice(value)}
        />
        <View>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setShowDate(true)}>
            <TextInput
              editable={false}
              label="Data"
              value={date}
              underlineColor="#2ABFB0"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.buttons}>
          <CameraPicker />
          <Button style={styles.inputSave} onPress={save}>
            SALVAR
          </Button>
        </View>
      </View>

      {showDate && (
        <DateTimePicker
          testID="dateTimePicker"
          value={Date.now()}
          mode="datetime"
          is24Hour={true}
          display="default"
          onChange={onChangeDate}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  dropList: {
    flex: 1,
    marginBottom: 55,
  },
  items: {
    borderBottomWidth: 1,
    borderBottomColor: '#3EF091',
    backgroundColor: '#0BE0B2',
  },
  listItems: {
    backgroundColor: '#2ABFB0',
    borderRadius: 5,
  },
  buttons: {
    margin: 20,
    alignItems: 'center',
  },
  input: {
    margin: 5,
  },
  inputCamera: {
    backgroundColor: '#2ABFB0',
    padding: 15,
    borderRadius: 100,
  },
  inputSave: {
    marginTop: 20,
  },
});

export default RegisterService;
