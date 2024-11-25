import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFFFFF', dark: '#FFFFFF' }}
      headerImage={
        <Image
          source={require('@/assets/images/Logobus.jpeg')} // Adicione sua imagem aqui
          style={styles.headerImage} 
        />
      }>
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">OBJETIVOS DO BUS+</ThemedText>
      </ThemedView>
      
      <ThemedText>Um Aplicativo de Acessibilidade Pública</ThemedText>

      {/* Seção 1 - O que é, e o que faz? */}
      <Collapsible title="O que é, e o que faz?">
        <ThemedText>
        O aplicativo Bus+ visa a apoiar e ajudar as pessoas q possuem deficiência visual a conseguir mais acessibilidade ao pegar o ônibus, utilizando de comandos de voz para ajudar o usuário a  conseguir acessar a função desejada de forma fácil e acessível.
        </ThemedText>
       
      </Collapsible>

      {/* Seção 2 - Benefício ao Público */}
      <Collapsible title="Benefício ao Público">
        <ThemedText>
        O app procura auxiliar a pessoa ao pegar o ônibus utilizando de sistemas sonoros para quando o seu ônibus estiver chegando, como também identifica a localização do ônibus, se houve algum atraso ou desvio fora do normal e o seu destino, tudo isso com a ajuda de um sistema controlado por voz.
        </ThemedText>
      </Collapsible>

      {/* Seção 3 - APP */}
      <Collapsible title="APP">
        <ThemedText>
        O aplicativo tem o objetivo de ser funcional em todos os sistemas operacionais. Também busca a ter uma interface fácil de se utilizar, sendo acessível a pessoas com dificuldades de lidar com aplicativos e celulares. <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> 
        </ThemedText>
        <Image source={require('@/assets/images/logo.png')} style={{ alignSelf: 'center' }} />
        
      </Collapsible>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '50%', // Preenche a largura total do cabeçalho
    height: 360, // Altura do cabeçalho (pode ser ajustada)
    resizeMode: 'stretch', // Faz a imagem preencher mantendo a proporção
    alignSelf: 'center',
    marginBottom: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center', // Centraliza o conteúdo no eixo horizontal
    alignItems: 'center', // Alinha o conteúdo no centro do eixo vertical
    marginTop: 20, // Espaço superior, se necessário
  },
});