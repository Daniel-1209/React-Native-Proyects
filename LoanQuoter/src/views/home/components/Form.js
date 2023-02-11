import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import theme from '../../../utils/theme';
import {Picker} from '@react-native-picker/picker';

const Form = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View style={styles.viewForm}>
      {/* Inputs */}
      <View style={styles.viewInputs}>
        <TextInput
          style={styles.input}
          placeholder="Cantidad A Pedir"
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, styles.inputPercentage]}
          placeholder="Interes"
          keyboardType="numeric"
        />
      </View>
      {/* Pick select */}
      <Picker
      enabled   
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: -90,
    width: '85%',
    paddingHorizontal: 50,
    backgroundColor: theme.COLORS.PRIMARI_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center',
  },
  viewInputs: {
    flexDirection: 'row',
  },
  input: {
    height: 50,
    width: '60%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: theme.COLORS.PRIMARI,
    borderRadius: 5,
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: 'black',
    paddingHorizontal: 20,
  },
  inputPercentage: {
    width: '40%',
    marginLeft: 5,
  },
});

export default Form;
