import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import CameraModal from './CameraModal';

const Camera = ({setPhoto}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onChangePhotoPress = (newPhoto) => {
    setPhoto && setPhoto(newPhoto);
    onClosePress();
  };

  const onClosePress = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.inputCamera}
        onPress={() => setModalVisible(true)}>
        <Icon name="camera" size={30} color="#8f0" />
      </TouchableOpacity>
      <CameraModal
        isVisible={modalVisible}
        onChangePhoto={onChangePhotoPress}
        onClose={onClosePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputCamera: {
    backgroundColor: '#2ABFB0',
    padding: 15,
    borderRadius: 100,
  },
});
export default Camera;
