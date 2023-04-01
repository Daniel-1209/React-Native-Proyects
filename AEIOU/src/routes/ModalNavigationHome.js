import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Views
import Home from '../views/Dashboard/Home/Home';
import ImagesOfLetters from '../views/Dashboard/ImaginesOfLetters/ImagesOfLetters';
import Globes from '../views/Dashboard/Globe/Globos';
import Videos from '../views/Dashboard/VideosView/Videos';
import Draw from '../views/Dashboard/Draw';
import Write from '../views/Dashboard/Write';

const Stack = createNativeStackNavigator();

const ModalNavigationHome = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      defaultScreenOptions="lists">
      <Stack.Screen
        name="HomeHome"
        component={Home}
        options={{
          title: 'MENU PRINCIPAL',
          headerTitleAlign: 'center',
          headerShown: true,
        }}
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
        options={{title: 'Videos Musicales', headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="Draw"
        component={Draw}
        options={{title: 'Dibuja', headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="Write"
        component={Write}
        options={{title: 'Escribir', headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
};

export default ModalNavigationHome;
