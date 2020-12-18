import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

export const MyInput = ({value, editable, type = 'default'}) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      editable={editable}
      underlineColor="#2ABFB0"
      keyboardType={type}
    />
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  title: {
    color: '#2ABFB0',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    justifyContent: 'center',
    marginBottom: 5,
    backgroundColor: '#eee8',
    maxHeight: 40,
  },
  observation: {
    marginBottom: 5,
    backgroundColor: '#eee8',
  },
  totalDebts: {
    alignSelf: 'flex-end',
    marginEnd: 10,
  },
  debtChecked: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  list: {
    flex: 1,
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#2ABFB0',
    backgroundColor: '#dFdFdF',
    borderRadius: 2,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginBottom: 2,
  },
  datePrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttons: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    margin: 10,
  },
  leftActionView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  rightActionView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: 10,
  },
});
