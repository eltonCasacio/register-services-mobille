import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
    padding: 10,
  },
  title: {
    alignSelf: 'center',
    fontSize: 22,
    marginBottom: 15,
    color: '#2ABFB0',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
  },
  input: {
    marginBottom: 5,
  },
  inputSave: {
    marginTop: 20,
  },
  camera: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: 70,
  },
});
