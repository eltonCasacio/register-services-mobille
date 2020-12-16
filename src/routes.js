import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Home from './pages/Home';
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
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="people"
              size={20}
              color={focused ? '#fff' : '#8FD9CB'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Registrar"
        component={RegisterServices}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="menu" size={25} color={focused ? '#fff' : '#8FD9CB'} />
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
