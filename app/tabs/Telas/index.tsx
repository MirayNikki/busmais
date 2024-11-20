import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFFFFF', dark: '#FFFFFF' }}
      headerImage={
        <Image
          source={require('@/assets/images/Logobus.jpeg')} // Caminho da imagem do logotipo
          style={styles.headerImage} // Estilo atualizado para preencher o cabeçalho
        />
      }>
      {/* Conteúdo da página */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="title">BUS+ Wireframes</ThemedText>
        
        <ThemedView style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/wireframe1.jpeg')} // Caminho correto do logotipo
            style={styles.busWire1}
          />
          <Image
            source={require('@/assets/images/Wireframe2.jpeg')} // Caminho da imagem do logotipo
            style={styles.busWire2}
          />
          <Image
            source={require('@/assets/images/wireframe3.jpeg')} // Caminho da imagem do logotipo
            style={styles.busWire3}
          />
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  // Estilo do cabeçalho para preencher 100% da largura
  headerImage: {
    width: '50%', // Preenche a largura total do cabeçalho
    height: 360, // Altura do cabeçalho (pode ser ajustada)
    resizeMode: 'stretch', // Faz a imagem preencher mantendo a proporção
    alignSelf: 'center',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 20,
  },
  imageContainer: {
    flexDirection: 'row', // Alinha as imagens lado a lado
    justifyContent: 'space-between', // Distribui as imagens igualmente
    alignItems: 'center', // Alinha as imagens verticalmente
    marginTop: 16,
  },
  busWire1: {
    height: 300,
    width: 300,
    resizeMode: 'stretch', // Mantém a proporção da imagem
    alignSelf: 'flex-start', // Posiciona à esquerda
  },
  busWire2: {
    height: 300,
    width: 300,
    resizeMode: 'stretch', // Mantém a proporção da imagem
    alignSelf: 'center', // Posiciona no centro
  },
  busWire3: {
    height: 300,
    width: 300,
    resizeMode: 'stretch', // Mantém a proporção da imagem
    alignSelf: 'flex-end', // Posiciona à direita
  },
});