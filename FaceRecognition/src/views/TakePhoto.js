import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  PermissionsAndroid,
  Image,
  Platform,
} from 'react-native';
import FaceDetection, {
  FaceDetectorContourMode,
  FaceDetectorLandmarkMode,
  FaceContourType,
} from 'react-native-face-detection';
import {Button, ActivityIndicator} from 'react-native-paper';
import {launchCamera} from 'react-native-image-picker';

const TakePhoto = () => {
  const [photoImage, setPhoto] = useState('');
  const [countFaces, setCountFaces] = useState('Sin datos');
  const [isLoading, setIsLoading] = useState(false);

  const takePhoto = what => {
    const options = {
      title: 'Tomar una foto',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      // includeBase64: true,
      cameraType: 'back',
      saveToPhotos: true,
    };

    launchCamera(options, async response => {
      if (response.errorCode) {
        console.log(response.errorMessage);
      } else if (response.didCancel) {
        console.log('Usuario Cancelo');
      } else {
        const photo = response.assets[0];
        // console.log(photo);
        if (what === 1) {
          setPhoto(photo);
        } else {
          setIdCard(photo);
        }
      }
    });
  };

  const processFaces = async imagePath => {
    const options = {
      landmarkMode: FaceDetectorLandmarkMode.ALL,
      contourMode: FaceDetectorContourMode.ALL,
    };

    const faces = await FaceDetection.processImage(imagePath, options);
    console.log('\nCaras', faces.length);
    setCountFaces(faces.length);
    faces.forEach(face => {
      console.log('Head rotation on X axis: ', face.headEulerAngleX);
      console.log('Head rotation on Y axis: ', face.headEulerAngleY);
      console.log('Head rotation on Z axis: ', face.headEulerAngleZ);

      console.log('Left eye open probability: ', face.leftEyeOpenProbability);
      console.log('Right eye open probability: ', face.rightEyeOpenProbability);
      console.log('Smiling probability: ', face.smilingProbability);
      
    });
    
  };

  const searcFaces = async path => {
    console.log(path);
    setIsLoading(true);
    try {
      
      await processFaces(path);
      console.log('\nHecho');
     
    } catch (e) {
      console.log('Hubo un error ', e);
    }
    setIsLoading(false);
  };
  return (
    <View>
      <View style={styles.boxOne}>
        <View style={styles.boxTwo}>
          <Image source={photoImage} style={{width: 300, height: 300}} />
          <View style={styles.boxTree}>
            <View style={styles.boxFour}>
              <Text>
                Por Favor Ingrese Una Foto de Usted Con Cara Descubierta
              </Text>
              <Text>Numero de rostros : {countFaces} </Text>
              {isLoading ? (
                ''
              ) : (
                <Button
                  style={styles.buttonPhoto}
                  onPress={() => searcFaces(photoImage?.uri)}
                  mode="contained">
                  Buscar Caras
                </Button>
              )}

              <Button
                style={styles.buttonPhoto}
                onPress={() => takePhoto(1)}
                mode="contained">
                Tomar Foto
              </Button>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TakePhoto;

const styles = StyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: '#dcd9f8',
  },
  conteinMain: {
    height: '100%',
    marginVertical: 40,
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '90%',
    // backgroundColor: 'blue',
  },
  boxOne: {
    backgroundColor: '#fff',
    height: 'auto',
    padding: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '45%',
    marginTop: 30,
    borderRadius: 10,
  },
  boxTwo: {
    flexDirection: 'row',
  },
  boxTree: {
    height: 300,
    // backgroundColor: 'green',
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  boxFour: {marginTop: 'auto', marginBottom: 'auto'},
  buttonSub: {
    width: '80%',
    marginVertical: 50,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  buttonPhoto: {
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 30,
  },
});
