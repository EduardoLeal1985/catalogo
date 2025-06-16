import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
    title: string;
    author: string;
    onPress: () => void;
};

export default function BookCard({ title, author, onPress }: Props) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.author}>{author}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f0f0f0',
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    author: {
        fontSize: 14,
        color: '#555',
    },
});
