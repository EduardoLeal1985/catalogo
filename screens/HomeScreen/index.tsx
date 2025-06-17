import React from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import BookCard from '../../components/BookCard';
import { books } from '../../data/books';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes';
import { Container, TopMenu } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
    return (
        <Container>
            <TopMenu><Button title="Sobre" onPress={() => navigation.navigate('About')} /></TopMenu>
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
            />
        </Container>
    );
}
