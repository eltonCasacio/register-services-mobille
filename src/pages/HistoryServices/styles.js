import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  title: {
    alignSelf: 'center',
    fontSize: 22,
    marginBottom: 20,
    color: '#2ABFB0',
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#2ABFB0',
    backgroundColor: '#dFdFdF',
    borderRadius: 2,
    marginBottom: 2,
  },
  rightActionView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 20,
    backgroundColor: '#F24607',
  },
});
