import React from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import BookCard from '../../components/UI/BookCard';
import { books } from '../../data/books';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';
import { Container, TopMenu, ContainerNoData, Title } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
    return (
        <Container>
            <FlatList
                data={books}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <BookCard
                        title={item.title}
                        author={item.author}
                        onPress={() => navigation.navigate('BookDetail', { id: item.id })}
                    />
                )}
                ListEmptyComponent={<ContainerNoData>Nenhum livro encontrado.</ContainerNoData>}
                ListHeaderComponent={
                    <TopMenu><Title>Lista de Livros</Title><Button title="Sobre" onPress={() => navigation.navigate('About')} /></TopMenu>
                }
            />
        </Container>
    );
}