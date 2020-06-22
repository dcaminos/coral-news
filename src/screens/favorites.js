import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import ArticleList from '../components/articleList';
import {getFavorites} from '../selectors';

const FavoritesScreen = () => {
  const articles = useSelector(getFavorites);

  if (articles.length === 0) {
    return (
      <View style={styles.noArticlesMessage}>
        <Text> {'You have no favorite articles'} </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ArticleList articles={articles} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  noArticlesMessage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FavoritesScreen;
