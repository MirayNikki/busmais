import * as React from 'react';
import renderer from 'react-test-renderer';

// Importando o ThemedText corretamente
import ThemedText from './ThemedText'; // Ajuste o caminho conforme necessário

it('renders correctly', () => {
  const tree = renderer.create(<ThemedText>Snapshot test!</ThemedText>).toJSON();
  
  // Verifica se a árvore renderizada corresponde ao snapshot
  expect(tree).toMatchSnapshot();
});