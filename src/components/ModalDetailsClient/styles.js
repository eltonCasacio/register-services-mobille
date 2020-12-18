import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: 5,
    backgroundColor: '#eee8',
    maxHeight: 50,
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
});
