import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';

const Home = ({navigation}) => {
  return (
    <View>
      <Text> Home</Text>
      <Button onPress={() => navigation.navigate('ImagesOfLetters')}>Letras</Button>
      <Button onPress={() => navigation.navigate('Globes')}>Globos</Button>
      <Button onPress={() => navigation.navigate('Videos')}>Videos</Button>
    </View>
  );
};

export default Home;
