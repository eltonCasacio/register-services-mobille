import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

export const MyInput = ({
  label = '',
  value = '',
  editable = true,
  multiline = false,
  numberOfLines = 1,
  type = 'default',
  callback,
}) => {
  return (
    <TextInput
      label={label}
      value={value}
      editable={editable}
      multiline={multiline}
      numberOfLines={numberOfLines}
      keyboardType={type}
      style={multiline ? styles.inputMultiline : styles.input}
      underlineColor="#2ABFB0"
      onChangeText={callback && callback}
    />
  );
};

export const PersonButton = ({icon, size = 25, callback}) => {
  return (
    <TouchableOpacity onPress={callback}>
      <Icon name={icon} size={size} color="#2ABFB0" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  input: {
    justifyContent: 'center',
    marginBottom: 5,
    backgroundColor: '#eee3',
    maxHeight: 45,
  },
  inputMultiline: {
    justifyContent: 'center',
    marginBottom: 5,
    backgroundColor: '#eee3',
  },
  IconButton: {
    alignSelf: 'center',
  },
});
