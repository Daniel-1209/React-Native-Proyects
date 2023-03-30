import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Alert, Image, Dimensions} from 'react-native';
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';
import Icon from 'react-native-vector-icons/FontAwesome';

const Draw = () => {
  const letters = [
    require('../../../../assets/DibujoLetras/mayA.png'),
    require('../../../../assets/DibujoLetras/mayE.png'),
    require('../../../../assets/DibujoLetras/mayI.png'),
    require('../../../../assets/DibujoLetras/mayO.png'),
    require('../../../../assets/DibujoLetras/mayU.png'),
  ];
  const [position, setPosition] = useState(0);
  const [width, setWidith] = useState(172);
  const [height, setHeight] = useState(172);

  useEffect(() => {
    const widthNow = Math.trunc(Dimensions.get('window').width);
    const heigthNow = Math.trunc(Dimensions.get('window').height);
    const scaleNow = Dimensions.get('window').scale;

    console.log('ancho => ' + widthNow);
    console.log('alto => ' + heigthNow);
    console.log('alto => ' + scaleNow);

    setWidith(widthNow - (widthNow % (346 / scaleNow)));
    setHeight(heigthNow - (heigthNow % 346) / scaleNow - 346 / scaleNow);
  }, []);

  useEffect(() => {
    Dimensions.addEventListener('change', ({window}) => {
      const widthNow = Math.trunc(window.width);
      const heigthNow = Math.trunc(window.height);
      const scaleNow = window.scale;

      console.log('ancho => ' + widthNow);
      console.log('alto => ' + heigthNow);

      setWidith(widthNow - (widthNow % 346) / scaleNow);
      setHeight(heigthNow - (heigthNow % 346) / scaleNow - 346 / scaleNow);
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* Background Images */}
      <Image
        source={letters[position]}
        style={{
          top: 50,
          position: 'absolute',
          height: height,
          width: width,
          resizeMode: 'repeat',
        }}
      />
      {/* Change Letter */}
      <View
        onTouchStart={() => setPosition((position + 1) % 5)}
        style={{
          position: 'absolute',
          top: 10,
          left: 5,
          height: 30,
          width: 80,
          zIndex: 10,
          backgroundColor: '#4cad4c',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
        }}>
        <Text style={{color: 'white'}}>
          <Icon name="exchange" /> Cambiar
        </Text>
      </View>
      {/* Draw */}
      <View style={{flex: 1, flexDirection: 'row'}}>
        <RNSketchCanvas
          containerStyle={{backgroundColor: 'transparent', flex: 1}}
          canvasStyle={{backgroundColor: 'transparent', flex: 1}}
          defaultStrokeIndex={0}
          defaultStrokeWidth={5}
          // closeComponent={<View style={styles.functionButton}><Text style={{color: 'white'}}>Cerrar</Text></View>}
          undoComponent={
            <View style={styles.functionButton}>
              <Text style={{color: 'white'}}>
                <Icon name="step-backward" /> Retroceder
              </Text>
            </View>
          }
          clearComponent={
            <View style={styles.functionButton}>
              <Text style={{color: 'white'}}>
                <Icon name="close" />
                Limpiar
              </Text>
            </View>
          }
          // eraseComponent={
          //   <View style={styles.functionButton}>
          //     <Text style={{color: 'white'}}>Borrador</Text>
          //   </View>
          // }
          //   Select color
          strokeComponent={color => (
            <View
              style={[
                {backgroundColor: color, display: 'flex'},
                styles.strokeColorButton,
              ]}
            />
          )}
          //   Chanche britnes nivel
          //   strokeSelectedComponent={(color, index, changed) => {
          //     return (
          //       <View
          //         style={[
          //           {backgroundColor: color, borderWidth: 2},
          //           styles.strokeColorButton,
          //         ]}
          //       />
          //     );
          //   }}
          // Chanse pointer width
          //   strokeWidthComponent={w => {
          //     return (
          //       <View style={styles.strokeWidthButton}>
          //         <View
          //           style={{
          //             backgroundColor: 'white',
          //             marginHorizontal: 2.5,
          //             width: Math.sqrt(w / 3) * 10,
          //             height: Math.sqrt(w / 3) * 10,
          //             borderRadius: (Math.sqrt(w / 3) * 10) / 2,
          //           }}
          //         />
          //       </View>
          //     );
          //   }}
          // Save Image
          //   saveComponent={
          //     <View style={styles.functionButton}>
          //       <Text style={{color: 'white'}}>Guardar</Text>
          //     </View>
          //   }
          onSketchSaved={(success, path) => {
            // Alert.alert(success ? 'Image saved!' : 'Failed to save image!', path)
            Alert.alert(
              success ? 'Imagen Guardada!' : 'Falla al guardar imagen!',
            );
          }}
          savePreference={() => {
            return {
              folder: 'RNSketchCanvas',
              filename: String(Math.ceil(Math.random() * 100000000)),
              transparent: false,
              imageType: 'png',
            };
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  strokeColorButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  strokeWidthButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#39579A',
  },
  functionButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    height: 30,
    width: 80,
    backgroundColor: '#4cad4c',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default Draw;
