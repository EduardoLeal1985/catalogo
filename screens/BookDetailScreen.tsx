import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { books } from '../data/books';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'BookDetail'>;

export default function BookDetailScreen({ route }: Props) {
    const book = books.find((b) => b.id === route.params.id);

    if (!book) return <Text>Livro não encontrado.</Text>;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.author}>Autor: {book.author}</Text>
            <Text style={styles.description}>{book.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        gap: 12,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    author: {
        fontSize: 16,
        color: '#666',
    },
    description: {
        fontSize: 16,
    },
});
