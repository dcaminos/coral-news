import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Article = ({article}) => {
  return <Text>{article.title}</Text>;
};

const styles = StyleSheet.create({
  favoriteButton: {
    padding: 24,
  },
});

export default Article;
