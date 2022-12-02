import 'react-native-gesture-handler'; // Line of React-Navigation
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/routes/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
