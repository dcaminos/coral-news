import React from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {Column, Grid, Row} from 'react-native-responsive-grid';
import {useSelector} from 'react-redux';
import ArticleItem from '../components/articleItem';
import {getArticles, getStatus} from '../selectors/articles';

function HomeScreen({navigation}) {
  const status = useSelector(getStatus);
  const articles = useSelector(getArticles);

  if (status.isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="small" color="#0000ff" />
      </View>
    );
  }

  return (
    <Grid>
      {({state}) => (
        <Column fullHeight style={{backgroundColor: 'lightgray'}}>
          <ScrollView removeClippedSubviews={true}>
            <Row>
              {articles.map((article, index) => (
                <ArticleItem
                  key={index}
                  gridState={state}
                  article={article}
                  navigation={navigation}
                />
              ))}
            </Row>
          </ScrollView>
        </Column>
      )}
    </Grid>
  );
}

const styles = StyleSheet.create({
  Grid: {},
});

export default HomeScreen;
