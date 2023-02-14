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
      {total && (
        <View style={styles.boxResutl}>
          <Text style={styles.title}>RESUMEN</Text>
          <ViewResult
            title="Pago Al Contado: "
            value={`$${parseFloat(capital)?.toLocaleString('en-US')} MXN`}
          />
          <ViewResult
            title="Pago Por Mes: "
            value={`$${parseFloat(interest)?.toLocaleString('en-US')} MXN`}
          />
          <ViewResult title="Cantidad De Meses: " value={`${months} MESES`} />
          <ViewResult
            title="Pago Total a Credito: "
            value={`$${total.monthlyFee} MXN`}
          />
          <ViewResult title="Aumento: " value={`$${total.totalPayable} MXN`} />
        </View>
      )}
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
};

const ViewResult = ({title, value}) => {
  return (
    <View style={styles.value}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
};

export default CalcultationResult;

const styles = StyleSheet.create({
  error: {color: 'red', textAlign: 'center', fontWeight: 'bold', fontSize: 20},
  content: {marginTop: 0, marginHorizontal: 40},
  boxResutl: {
    padding: 30,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  value: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
