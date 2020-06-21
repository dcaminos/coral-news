import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import ArticleList from '../components/articleList';
import {getFavorites} from '../selectors';

const FavoritesScreen = () => {
  const articles = useSelector(getFavorites);
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
});

export default FavoritesScreen;
