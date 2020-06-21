import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import ArticleList from '../components/articleList';
import ErrorMessage from '../components/errorMessage';
import LoadingIcon from '../components/loadingIcon';
import {getArticles, getStatus} from '../selectors';

const HomeScreen = () => {
  const status = useSelector(getStatus);
  const articles = useSelector(getArticles);

  if (status.isLoading) {
    return <LoadingIcon />;
  }

  if (status.error) {
    return <ErrorMessage error={status.error} />;
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
});

export default HomeScreen;
