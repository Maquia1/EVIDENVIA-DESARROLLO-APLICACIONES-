import React from 'react';
import Constants from 'expo-constants'

import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image,
  TextInput
} from 'react-native';

const image = {uri: 'https://certificadossena.net/wp-content/uploads/2022/10/logo-sena-naranja-png-2022.png'};
// Con separator crearemos una línea separadora en pantalla
const Separator = () => <View style={styles.separator} />;

const App = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.imageContainer}>
      <Image source={image} style={styles.image} />
    </View>
    <View>
      <Text style={styles.title}>
        Estoy desarrollando actividad  con React Native para la evidencia GA8-220501096-AA2-EV02
      </Text>
      <Button
        title="Bienvenido"
        color="#f54c0d"
        onPress={() => Alert.alert('Hola, instructor CARLOS te saluda  el aprendiz JAIME ANDRES RUIZ')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Conoce tu producto 
      </Text>
      <Button
        title="PRODUCTO"
        color="#f54c0d"
        onPress={() => Alert.alert(' ZAPATILLA NICE CON  FECHA DE  FABRICACION2024')}
      />
    </View>
    <Separator />
    <View>    
      <View>
        <Text style={styles.title}>
          Danos tus opiniones
        </Text>
        <TextInput style={styles.textInput} />
      </View>
      <Separator />
      <View style={styles.fixToText}>
        <Button
          title="ENVIAR"
          color="#f54c0d"
          onPress={() => Alert.alert('Enviada tu respuesta ')}
        />
        <Button
          title="CANCELAR"
          color="#f54c0d"
          onPress={() => Alert.alert('CANCELADA TU RESPUESTA ')}
        />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    // justifyContent: 'center',
    marginHorizontal: 8,
  },
  image: {
    // flex: 1,
    justifyContent: 'center',
    resizeMode: 'contain',
    height:150
  },
  imageContainer: {
    marginTop:50
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textInput:{
    borderColor: '#00AC00',
    borderWidth: 1,
    height:50
  }
});

export default App;








