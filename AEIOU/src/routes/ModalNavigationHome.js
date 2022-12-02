import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Views
import Home from '../views/Dashboard/Home/Home';
import ImagesOfLetters from '../views/Dashboard/ImaginesOfLetters/ImagesOfLetters';
import Globes from '../views/Dashboard/Globe/Globos';
import Videos from '../views/Dashboard/VideosView/Videos';

const Stack = createNativeStackNavigator();

const ModalNavigationHome = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      defaultScreenOptions="lists">
      <Stack.Screen
        name="HomeHome"
        component={Home}
        options={{title: 'Menu', headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="ImagesOfLetters"
        component={ImagesOfLetters}
        options={{title: 'Letras', headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="Globes"
        component={Globes}
        options={{title: 'Globos', headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="Videos"
        component={Videos}
        options={{title: 'Videos', headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
};

export default ModalNavigationHome;
