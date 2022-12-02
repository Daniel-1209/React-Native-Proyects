import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
// Vistas
import ModalNavigationHome from './ModalNavigationHome';

const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="home"
        component={ModalNavigationHome}
        options={{
          title: 'A E I O U',
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#6d55a5'},
        }}
      />
    </Drawer.Navigator>
  );
};

export default Navigation;
