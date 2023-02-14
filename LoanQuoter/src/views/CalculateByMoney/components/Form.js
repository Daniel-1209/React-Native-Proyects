import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Platform} from 'react-native';
import theme from '../../../utils/theme';
import {Picker, PickerIOS} from '@react-native-picker/picker';

const Form = ({setInterest, setMonths, months, setCapital}) => {
  return (
    <View style={styles.viewForm}>
      {/* Inputs */}
      <View style={styles.viewInputs}>
        <TextInput
          style={styles.input}
          placeholder="Precio A Contado"
          keyboardType="numeric"
          onChange={e => setCapital(e.nativeEvent.text)}
        />
        <TextInput
          style={[styles.input]}
          placeholder="Precio Por Mes"
          keyboardType="numeric"
          onChange={e => setInterest(e.nativeEvent.text)}
        />
        <TextInput
          style={[styles.input]}
          placeholder="Cantidad De Meses"
          keyboardType="numeric"
          onChange={e => setMonths(e.nativeEvent.text)}
        />
      </View>
      {/* Pick select */}
      {/* <Picker
        style={picketSelectStyles.input}
        selectedValue={months}
        onValueChange={(itemValue, itemIndex) => setMonths(itemValue)}>
        <Picker.Item label="Selecciona Un Plazo" value={null} />
        <Picker.Item label="3 Meses" value={3} />
        <Picker.Item label="6 Meses" value={6} />
        <Picker.Item label="12 Meses" value={12} />
        <Picker.Item label="24 Meses" value={24} />
      </Picker> */}
    </View>
  );
};

const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: 0,
    width: '85%',
    paddingHorizontal: 50,
    backgroundColor: theme.COLORS.PRIMARI_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center',
  },
  viewInputs: {
    flexDirection: 'column',
  },
  input: {
    height: 50,
    width: '80%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: theme.COLORS.PRIMARI,
    borderRadius: 5,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 5,
    color: 'black',
    paddingHorizontal: 20,
  },
  inputPercentage: {
    width: '40%',
    marginLeft: 5,
  },
});

const picketSelectStyles = StyleSheet.create({
  input: {
    ...Platform.select({
      ios: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#fff',
        marginLeft: -5,
        marginRight: -5,
      },
      android: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#fff',
        marginLeft: -5,
        marginRight: -5,
      },
    }),
  },
});

export default Form;
