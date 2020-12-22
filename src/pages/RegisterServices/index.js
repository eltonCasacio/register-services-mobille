import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Platform} from 'react-native';
import {MyInput, PersonButton} from '../../components/MyInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import Camera from '../../components/Camera';
import ClientList from '../../components/ClientList';
import {getClienteById} from '../../bd/clientes';
import {styles} from './styles';

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
      <Text style={styles.title}>REGISTRO DE SERVIÇO</Text>

      <View>
        <View>
          <ClientList clients={clientes} callback={onChangeSelectedClient} />
        </View>

        <MyInput
          label="Descrição"
          value={description}
          multiline={true}
          numberOfLines={3}
          callback={(value) => setDescription(value)}
        />

        <MyInput
          label="Valor"
          value={String(price)}
          keyboardType="numeric"
          callback={(value) => setPrice(value)}
        />

        <TouchableOpacity
          style={styles.input}
          onPress={() => setShowDate(true)}>
          <MyInput editable={false} label="Data" value={date} />
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.buttons}>
          <PersonButton icon="trash-2" callback={cleanInputs} />
          <Camera setPhoto={setPhoto} />
          <PersonButton icon="save" callback={save} />
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

export default RegisterService;
