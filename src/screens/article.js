import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Article from '../components/article';
import {getCurrentArticle} from '../selectors';

const ArticleScreen = () => {
  const currentArticle = useSelector(getCurrentArticle);

  return (
    <SafeAreaView style={styles.container}>
      <Article article={currentArticle} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ArticleScreen;
