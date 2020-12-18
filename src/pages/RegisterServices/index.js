import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

import Camera from '../../components/Camera';
import ListClients from '../../components/ListClients';

import {getClienteById} from '../../bd/clientes';

const RegisterService = () => {
  const [selectedClient, setSelectedClient] = useState({});
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState();
  const [photo, setPhoto] = useState();

  const [showDate, setShowDate] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    let currentDate = new Date(selectedDate).toLocaleDateString() || date;
    setShowDate(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const onChangeSelectedClient = (value) => {
    setSelectedClient(value || {});
  };

  const cleanInputs = () => {
    setSelectedClient('');
    setDescription('');
    setPrice('');
    setDate('');
    setPhoto('');
  };

  const save = () => {
    console.log('SALVANDO serviço', {
      id_Client: selectedClient.id,
      description,
      price,
      date,
      photo,
    });
  };

  const clientes = getClienteById();

  return (
    <View style={styles.container}>
      <View>
        <ListClients clients={clientes} callback={onChangeSelectedClient} />
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
          value={String(price)}
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

        <View style={styles.camera}>
          <Camera setPhoto={setPhoto} />
        </View>

        <View style={styles.buttons}>
          <Button style={styles.input} onPress={cleanInputs}>
            LIMPAR
          </Button>

          <Button
            style={styles.input}
            disabled={!selectedClient.name}
            onPress={save}>
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  input: {
    marginBottom: 10,
  },
  inputSave: {
    marginTop: 20,
  },
  camera: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: 80,
  },
});

export default RegisterService;
