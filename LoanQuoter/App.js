import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, StatusBar} from 'react-native';
import theme from './src/utils/theme';
import Form from './src/views/home/components/Form';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.titleApp}>COTIZADOR DE PRESTAMOS</Text>
        <Form />
      </SafeAreaView>
      <View>
        <Text>Centro</Text>
      </View>
      <View>
        <Text>Centro</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: theme.COLORS.PRIMARI,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    height: 200,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 15,
  },
});

export default App;
