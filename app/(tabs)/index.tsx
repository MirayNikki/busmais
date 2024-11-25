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
            style={styles.busWire}
          />
          <Image
            source={require('@/assets/images/Wireframe2.jpeg')} // Caminho da imagem do logotipo
            style={styles.busWire}
          />
          <Image
            source={require('@/assets/images/wireframe3.jpeg')} // Caminho da imagem do logotipo
            style={styles.busWire}
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
    flexDirection: 'column', // Alinha as imagens em coluna (uma abaixo da outra)
    justifyContent: 'center', // Garante que as imagens fiquem centralizadas verticalmente
    alignItems: 'stretch', // Centraliza as imagens na horizontal
    marginTop: 16,
  },
  busWire: {
    height: 260, // Ajustado o tamanho das imagens para ficarem organizadas
    width: '65%', // Ajusta a largura para 80% da tela
    resizeMode: 'stretch', // Ajusta a imagem para caber dentro do espaço disponível
    alignSelf: 'center',
    marginBottom: 16, // Espaço entre as imagens
  },
});