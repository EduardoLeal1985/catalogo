import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import BookCard from '../../components/UI/BookCard/BookCard';
import { books } from '../../data/books';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';
import { Container, Title, Text } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'About'>;

export default function About({ navigation }: Props) {
    return (
        <Container>
            <Title>Sobre o App</Title>
            <Text>Este aplicativo foi desenvolvido para facilitar o acesso a informações sobre livros.</Text>
        </Container>
    );
}
