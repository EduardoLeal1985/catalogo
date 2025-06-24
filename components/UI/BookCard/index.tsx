import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { BookCardContainer, TitleText, AuthorText } from './styles';

type Props = {
    title: string;
    author: string;
    onPress: () => void;
};

export default function BookCard({ title, author, onPress }: Props) {
    return (
        <BookCardContainer onPress={onPress}>
            <TitleText>{title}</TitleText>
            <AuthorText>{author}</AuthorText>
        </BookCardContainer>
    );
}
