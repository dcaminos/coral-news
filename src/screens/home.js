import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useSelector} from 'react-redux';
import ArticleList from '../components/articleList';
import {getArticles, getStatus} from '../selectors';

function HomeScreen() {
  const status = useSelector(getStatus);
  const articles = useSelector(getArticles);

  if (status.isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="small" color="#0000ff" />
      </View>
    );
  }

  return <ArticleList articles={articles} />;
}

export default HomeScreen;
