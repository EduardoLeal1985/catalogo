import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';
import { Container } from './styles';
import { Title, Text } from '../../components/UI/Text';

type Props = NativeStackScreenProps<RootStackParamList, 'About'>;

export default function About({ navigation }: Props) {
    return (
        <Container>
            <Title>Sobre o App</Title>
            <Text>Este aplicativo foi desenvolvido para facilitar o acesso a informações sobre livros.</Text>
        </Container>
    );
}
