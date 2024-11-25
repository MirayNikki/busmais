import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';
import { Text } from 'react-native';
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
        O projeto BUS + é um aplicativo móvel inovador, que visa ser projetado para facilitar a mobilidade e a autonomia de pessoas com deficiência visual no uso de transporte público, de modo que consigam sem impedimento ou precisar de ajuda externa se locomover a grandes distâncias de forma independente, usufruindo dos direitos que todos tem e usam rotineiramente.
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
    

{/* Seção 4 - Documentação */}
<Collapsible title="Documentação de Funcionalidades">
  <ThemedText>
    O aplicativo BUS+ possui as seguintes funcionalidades principais, voltadas para garantir acessibilidade e autonomia no uso de transporte público:
    <br />
    <br />
    1. <Text style={{ fontWeight: 'bold' }}>Reconhecimento de Voz</Text> 
    <br />
       Permite ao usuário interagir com o aplicativo por comandos de voz, eliminando a necessidade de navegação tátil.  
       <br />
       Tecnologia Sugerida: Google Speech-to-Text ou Microsoft Azure Speech Service.  
       <br />
       Exemplos incluem consultar horários e localização de ônibus em tempo real.
       <br />
    2. <Text style={{ fontWeight: 'bold' }}>Geolocalização</Text> 
    <br />
       Identifica a localização do usuário e dos ônibus, oferecendo atualizações em tempo real e informações personalizadas sobre trajetos.  
       <br />
       Tecnologia Sugerida: React Native Geolocation, Google Maps API.  
       <br />
    3. <Text style={{ fontWeight: 'bold' }}>Localização de Ônibus em Tempo Real</Text>  
    <br />
       Mostra a posição exata dos ônibus e atualizações constantes para evitar longas esperas ou incertezas nos pontos.  
       <br />
       Tecnologia Sugerida: Integração com APIs de transporte público como Google Transit APIs.
       <br />
    4. <Text style={{ fontWeight: 'bold' }}>Rotas e Itinerários Comuns</Text>  
    <br /> 
       Permite pesquisar trajetos, horários e salvar rotas frequentes para fácil acesso em viagens recorrentes.  
       <br />
       Tecnologia Sugerida: Firebase ou SQLite para armazenar as rotas mais usadas. APIs de Dados de Transporte Público.
       <br />
    5. <Text style={{ fontWeight: 'bold' }}>Notificações em Tempo Real</Text> 
    <br />
       Envia alertas sobre atrasos, mudanças de rota e chegada de ônibus para manter o usuário informado.  
       <br />
       Tecnologia Sugerida: Firebase Cloud Messaging.

    <br />
    <br />
    Funcionalidades adicionais incluem:
    <br />
    <br />
    - <Text style={{ fontWeight: 'bold' }}>Suporte para Vários Idiomas e Línguas</Text> - 
    <br />
      Amplia a acessibilidade do app, tornando-o útil para uma base maior de usuários.  
      <br />
      Tecnologia Sugerida: react-i18next ou React Intl.
      <br />
      - <Text style={{ fontWeight: 'bold' }}>Modo Offline</Text> -
    <br />
      Oferece acesso a informações básicas de rotas e horários mesmo sem conexão à internet.  
      <br />
      Tecnologia Sugerida: GeoJSON para armazenar dados de mapas e rotas de maneira eficiente.
      <br />
      - <Text style={{ fontWeight: 'bold' }}>Integração com Assistentes Virtuais</Text> -
    <br />
      Compatibilidade com dispositivos como Google Assistant para interações por voz.
      <br />  
      Tecnologia Sugerida: Google Assistant.
      <br />
      - <Text style={{ fontWeight: 'bold' }}>Histórico de Viagens</Text> -
    <br />
      Salva as viagens realizadas e permite o planejamento futuro. 
      <br /> 
      Tecnologia Sugerida: MongoDB, Firebase Firestore ou Map APIs.

    <br />

    Essas funcionalidades, com o uso de tecnologias específicas, tornam o BUS+ uma solução abrangente para facilitar a mobilidade de pessoas com deficiência visual no transporte público.
  </ThemedText>

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