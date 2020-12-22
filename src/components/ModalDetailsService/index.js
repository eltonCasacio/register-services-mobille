import React, {useState} from 'react';
import {View, TouchableOpacity, Platform} from 'react-native';
import {Portal, Text} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import Camera from '../Camera';
import {MyInput, PersonButton} from '../MyInput';

import {styles} from './styles';

const ModalDetailsService = ({handleCloseModalDetails, service, clientID}) => {
  const [description, setDescription] = useState(service.descricao || '');
  const [price, setPrice] = useState(service.valor || '');
  const [date, setDate] = useState(service.data || '');
  const [photo, setPhoto] = useState(service.photo || null);

  console.log('ModalDetailsService???');

  const [showDate, setShowDate] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    let currentDate = selectedDate
      ? new Date(selectedDate).toLocaleDateString()
      : date;

    setShowDate(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const cleanInputs = () => {
    setDescription('');
    setPrice('');
    setDate('');
    setPhoto('');
  };

  const save = () => {
    console.log('SALVANDO serviço', {
      id_Client: clientID.id,
      description,
      price,
      date,
      photo,
    });
    handleCloseModalDetails(false);
  };

  return (
    <Portal>
      <View style={styles.container}>
        <Text style={styles.title}>EDITAR SERVIÇO</Text>

        <MyInput
          label="Descrição"
          value={description}
          multiline={true}
          numberOfLines={4}
          onChangeText={(value) => setDescription(value)}
        />

        <MyInput
          label="Valor"
          value={String(price)}
          onChangeText={(value) => setPrice(value)}
        />

        <View>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setShowDate(true)}>
            <MyInput editable={false} label="Data" value={date} />
          </TouchableOpacity>
        </View>

        <View style={styles.camera}>
          <Camera setPhoto={setPhoto} />
        </View>

        <View style={styles.buttons}>
          <PersonButton icon="trash-2" size={25} callback={cleanInputs} />
          <PersonButton icon="save" size={25} callback={save} />
          <PersonButton
            icon="x"
            size={25}
            callback={() => handleCloseModalDetails(false)}
          />
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
    </Portal>
  );
};

export default ModalDetailsService;
