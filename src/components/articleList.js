import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Column, Grid, Row} from 'react-native-responsive-grid';
import ArticleItem from '../components/articleItem';

function ArticleList({articles}) {
  return (
    <Grid>
      {({state}) => (
        <Column fullHeight style={{backgroundColor: 'lightgray'}}>
          <ScrollView removeClippedSubviews={true}>
            <Row>
              {articles.map((article, index) => (
                <ArticleItem key={index} gridState={state} article={article} />
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

export default ArticleList;
