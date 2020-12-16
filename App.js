import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from './src/theme';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
