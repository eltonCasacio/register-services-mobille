import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
  },
  title: {
    color: '#2ABFB0',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
  debtChecked: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 15,
  },
  list: {
    flex: 1,
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#2ABFB0',
    backgroundColor: '#ddd5',
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginBottom: 3,
  },
  totalDebts: {
    alignSelf: 'flex-end',
    marginEnd: 10,
  },
  datePrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttons: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    margin: 5,
  },
});
