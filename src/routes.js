import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Clients from './pages/Clients';
import RegisterServices from './pages/RegisterServices';
import HistoryServices from './pages/HistoryServices';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createMaterialTopTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Registrar"
      keyboardDismissMode="on-drag"
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
        tabStyle: {backgroundColor: '#2ABFB0'},
      }}>
      <Tab.Screen
        name="Clientes"
        component={Clients}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="face" size={20} color={focused ? '#fff' : '#8FD9CB'} />
          ),
        }}
      />
      <Tab.Screen
        name="Registrar"
        component={RegisterServices}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="edit" size={20} color={focused ? '#fff' : '#8FD9CB'} />
          ),
        }}
      />
      <Tab.Screen
        name="Histórico"
        component={HistoryServices}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="event" size={20} color={focused ? '#fff' : '#8FD9CB'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Routes;
