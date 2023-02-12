import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  Button,
} from 'react-native';
import theme from './src/utils/theme';
import CalcultationResult from './src/views/home/components/CalcultationResult';
import Footer from './src/views/home/components/Footer';
import Form from './src/views/home/components/Form';

const App = () => {
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
      console.log('Sin Capital');
      setErrorMessage('Sin Capital');
    } else if (!interest) {
      console.log('Sin Interes');
      setErrorMessage('Sin Interes');
    } else if (!months) {
      console.log('Sin Months');
      setErrorMessage('Sin Months');
    } else {
      console.log('Ok');
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
      console.log(fee);
      setTotal({
        monthlyFee: fee.toFixed(2),
        totalPayable: (months * fee).toFixed(2),
      });
      console.log(total);
    }
  };

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
      <CalcultationResult errorMessage={errorMessage} />
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
    height: 290,
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

export default App;
