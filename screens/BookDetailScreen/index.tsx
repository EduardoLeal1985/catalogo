import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { books } from '../../data/books';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';
import { Container, Title, Author, Description } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'BookDetail'>;

export default function BookDetailScreen({ route, navigation }: Props) {
    const book = books.find((b) => b.id === route.params.id);

    if (!book) return <Text>Livro não encontrado.</Text>;

    return (
        <Container>
            <Button title="Voltar" onPress={() => { navigation.goBack() }} />
            <Title>{book.title}</Title>
            <Author>Autor: {book.author}</Author>
            <Description>{book.description}</Description>
        </Container>
    );
}
