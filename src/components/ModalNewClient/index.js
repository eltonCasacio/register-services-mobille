import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Portal, IconButton} from 'react-native-paper';
import Camera from '../../components/Camera';

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
        <View>
          <TextInput
            style={styles.input}
            label="Nome"
            value={name}
            onChangeText={(text) => setName(text)}
          />

          <TextInput
            style={styles.input}
            label="Cel."
            value={phone}
            keyboardType="numeric"
            onChangeText={(text) => setPhone(text)}
          />

          <TextInput
            style={styles.input}
            label="Observação"
            value={observation}
            multiline={true}
            numberOfLines={5}
            underlineColor="#2ABFB0"
            onChangeText={(text) => setObservation(text)}
          />
        </View>
        <View style={styles.camera}>
          <Camera setPhoto={setPhoto} />
        </View>

        <View style={styles.buttons}>
          <IconButton
            icon="eraser"
            size={30}
            style={styles.input}
            onPress={cleanInputs}
          />

          <IconButton
            icon="content-save-outline"
            size={30}
            style={styles.input}
            disabled={!name}
            onPress={save}
          />

          <IconButton
            icon="close"
            size={30}
            style={styles.input}
            onPress={close}
          />
        </View>
      </View>
    </Portal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
  },
  buttons: {
    justifyContent: 'space-around',
    flexDirection: 'row',
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

export default ModalNewClient;
