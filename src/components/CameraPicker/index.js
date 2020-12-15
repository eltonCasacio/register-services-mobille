import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const CameraPicker = () => {
  return (
    <View>
      <TouchableOpacity>
        <Icon name="camera" size={40} color="#0BE0B2" />
      </TouchableOpacity>
    </View>
  );
};

export default CameraPicker;
