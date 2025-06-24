import styled from 'styled-components/native';

import { theme } from '../../components/Theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 16px;
  background-color: ${theme.colors.background};
`;

export const TopMenu = styled.View`
  margin-bottom: 16px;
  align-items: center;
  color: ${theme.colors.text};
  flex-direction: row;
  gap: 8px;

`;

export const ContainerNoData = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: 8px;
`;