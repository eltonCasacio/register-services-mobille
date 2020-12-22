import React, {useState} from 'react';
import {View} from 'react-native';
import {Portal, Text} from 'react-native-paper';
import Camera from '../../components/Camera';
import {MyInput, PersonButton} from '../MyInput';

import {styles} from './styles';

const ModalNewClient = ({handleCloseModal}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState();
  const [photo, setPhoto] = useState();
  const [observation, setObservation] = useState('');

  const cleanInputs = () => {
    setName('');
    setPhone('');
    setPhoto('');
    setObservation('');
  };

  const save = () => {
    console.log('SALVANDO Cliente', {
      name,
      phone,
      observation,
      photo,
    });
  };

  const close = () => {
    handleCloseModal();
  };

  return (
    <Portal>
      <View style={styles.container}>
        <Text style={styles.title}>ADICIONAR CLIENTE</Text>
        <View>
          <MyInput
            label="Nome"
            value={name}
            callback={(text) => setName(text)}
          />

          <MyInput
            label="Cel."
            value={phone}
            type="numeric"
            callback={(text) => setPhone(text)}
          />

          <MyInput
            label="Observação"
            value={observation}
            multiline={true}
            numberOfLines={5}
            callback={(text) => setObservation(text)}
          />
        </View>

        <View>
          <View style={styles.camera}>
            <Camera setPhoto={setPhoto} />
          </View>

          <View style={styles.buttons}>
            <PersonButton icon="trash-2" size={30} callback={cleanInputs} />
            <PersonButton icon="save" size={30} callback={save} />
            <PersonButton icon="x" size={30} callback={close} />
          </View>
        </View>
      </View>
    </Portal>
  );
};

export default ModalNewClient;
