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

const CalculateByMoney = () => {
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
      setErrorMessage('Falta Precio De Contado');
    } else if (!interest) {
      setErrorMessage('Falta Precio Por Mes');
    } else if (!months) {
      setErrorMessage('Falta Cantidad De Meses');
    } else {
      console.log('Ok');
      const i = interest * months;
      //   console.log(fee);
      setTotal({
        monthlyFee: i?.toLocaleString('en-US'),
        totalPayable: (i - capital < 0 ? 0 : i - capital)?.toLocaleString(
          'en-US',
        ),
      });
      //   console.log(total);
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
        <Text style={styles.titleApp}>COTIZADOR DE CREDITOS</Text>
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

export default CalculateByMoney;
