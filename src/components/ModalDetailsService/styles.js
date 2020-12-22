import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#fdfdfd',
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
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
