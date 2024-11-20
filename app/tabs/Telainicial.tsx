import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Audio } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen() {
  const [sound, setSound] = React.useState();
  const navigation = useNavigation();

  // Função para tocar o som ao clicar
  

  // Função que navega para as abas após tocar
  
  
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/Logobus.jpeg')}  // Coloque aqui sua imagem
        style={styles.image}
      />
      <Animatable.Text
        style={styles.text}
        animation="fadeIn"
        iterationCount="infinite"
        direction="alternate"
        duration={1000}
      >
        Toque para Iniciar
      </Animatable.Text>

      <TouchableOpacity style={styles.touchArea} onPress={handlePress}>
        {/* Área tocável para iniciar o efeito e navegação */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  touchArea: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});