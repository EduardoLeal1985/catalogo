import styled from 'styled-components/native';

import { theme } from '../../components/Theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 16px;
  background-color: ${theme.colors.background};
`;

export const TopMenu = styled.View`
  margin-bottom: 16px;
  align-items: flex-end;
  color: ${theme.colors.text};
`;