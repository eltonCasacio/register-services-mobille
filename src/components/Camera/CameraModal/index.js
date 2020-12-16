import React, {useState} from 'react';
import {View, Modal, StyleSheet, Alert} from 'react-native';
import {RNCamera} from 'react-native-camera';

import Icon from 'react-native-vector-icons/Feather';

const CameraModal = ({isVisible, onChangePhoto, onClose}) => {
  const [camera, setCamera] = useState();

  const onTakePicture = async () => {
    try {
      const {uri} = await camera.takePictureAsync({
        quality: 0.5,
        forceUpOrientation: true,
        fixOrientation: true,
        skipProcessing: true,
      });
      onChangePhoto(uri);
    } catch (error) {
      Alert.alert('Erro', 'Houve um erro ao tirar a foto.');
    }
  };

  return (
    <View>
      <Modal animationType="slide" transparent={false} visible={isVisible}>
        <RNCamera
          style={styles.camera}
          ref={(ref) => setCamera(ref)}
          type={RNCamera.Constants.Type.back}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permissão para usar a câmera',
            message: 'Precisamos da sua permissão para usar a câmera.',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancelar',
          }}
          captureAudio={false}>
          <Icon
            style={styles.icon}
            name="x"
            size={50}
            color={'#fff'}
            onPress={onClose}
          />
          <Icon
            name="camera"
            size={40}
            color={'#fff'}
            onPress={onTakePicture}
            style={styles.icon}
          />
        </RNCamera>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    margin: 30,
  },
});

export default CameraModal;
