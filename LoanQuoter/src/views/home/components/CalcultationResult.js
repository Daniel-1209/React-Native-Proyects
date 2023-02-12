import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CalcultationResult = ({
  capital,
  interest,
  months,
  total,
  errorMessage,
}) => {
  return (
    <View style={styles.content}>
      {total && <Text>CalcultationResult</Text>}
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
};

export default CalcultationResult;

const styles = StyleSheet.create({
  error: {color: 'red', textAlign: 'center', fontWeight: 'bold', fontSize: 20},
  content: {marginTop: 100, marginHorizontal: 40},
});
