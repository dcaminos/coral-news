import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Column, Row} from 'react-native-responsive-grid';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch} from 'react-redux';
import {setCurrentArticleAction} from '../actions/layout';

// column width (relative to screen size)
const sizes = {sm: 100, md: 100, lg: 33.333, xl: 25};

function ArticleItem({gridState, article, navigation}) {
  const dispatch = useDispatch();

  const goToArticle = () => {
    dispatch(setCurrentArticleAction(article));
    navigation.navigate('Article');
  };

  return (
    <Column
      smSize={sizes.sm}
      mdSize={sizes.md}
      lgSize={sizes.lg}
      xlSize={sizes.xl}>
      <Row
        smSizePoints={
          gridState.layout.grid ? gridState.layout.grid.height / 2 : 0
        }
        mdSizePoints={
          gridState.layout.grid ? gridState.layout.grid.width / 2 : 0
        }
        lgSizePoints={
          gridState.layout.grid ? gridState.layout.grid.width / 3 : 0
        }
        xlSizePoints={
          gridState.layout.grid ? gridState.layout.grid.width / 4 : 0
        }
        alignLines="stretch">
        <Column fullWidth>
          <TouchableOpacity onPress={goToArticle}>
            <Text>{article.title}</Text>
            <Text>{article.date}</Text>
            <Image
              style={{width: 50, height: 50}}
              source={{uri: article.urlToImage}}
            />
          </TouchableOpacity>
        </Column>
      </Row>
    </Column>
  );
}

const styles = StyleSheet.create({
  Article: {
    //backgroundColor: Colors.black,
    width: 300,
    height: 300,
    padding: 20,
    margin: 20,
    borderColor: Colors.black,
    borderWidth: 1,
  },
});

export default ArticleItem;
