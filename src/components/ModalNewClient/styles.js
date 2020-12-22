import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
  buttons: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  input: {
    marginBottom: 10,
  },
  camera: {
    alignSelf: 'center',
    alignItems: 'center',
    margin: 30,
    width: 80,
  },
});
