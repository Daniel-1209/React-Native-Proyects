import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  Button,
} from 'react-native';
import theme from '../../utils/theme';
import CalcultationResult from './components/CalcultationResult';
import Footer from './components/Footer';
import Form from './components/Form';

const CalculateByInterest = () => {
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const clean = () => {
    setErrorMessage('');
    setTotal(null);
  };

  const calculate = () => {
    clean();
    if (!capital) {
      setErrorMessage('Sin Capital');
    } else if (!interest) {
      setErrorMessage('Sin Interes');
    } else if (!months) {
      setErrorMessage('Sin Months');
    } else {
      console.log('Ok');
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2),
        totalPayable: (months * fee).toFixed(2),
      });
    }
  };

  useEffect(() => {
    if (capital && interest && months) {
      calculate();
    } else {
      clean();
    }
  }, [capital, interest, months]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      {/* Form Area */}
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.titleApp}>COTIZADOR DE PRESTAMOS</Text>
        <View style={styles.background} />
        <Form
          setInterest={setInterest}
          setMonths={setMonths}
          months={months}
          setCapital={setCapital}
        />
      </SafeAreaView>
      {/* Center Information */}
      <CalcultationResult
        capital={capital}
        interest={interest}
        months={months}
        total={total}
        errorMessage={errorMessage}
      />
      {/* Footer And Submit Button */}
      <Footer calculate={calculate} />
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    // backgroundColor: theme.COLORS.PRIMARI,
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30,
    alignItems: 'center',
    height: 250,
  },
  background: {
    backgroundColor: theme.COLORS.PRIMARI,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: 200,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 15,
  },
});

export default CalculateByInterest;
