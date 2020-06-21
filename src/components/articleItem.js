import {faHeart as emptyHeart} from '@fortawesome/free-regular-svg-icons';
import {faHeart as solidHeart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Column, Row} from 'react-native-responsive-grid';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch} from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
  setCurrentArticleAction,
} from '../actions/user';

// column width (relative to screen size)
const sizes = {sm: 100, md: 100, lg: 33.333, xl: 25};

function ArticleItem({gridState, article}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const goToArticle = () => {
    dispatch(setCurrentArticleAction(article.id));
    navigation.navigate('Article');
  };

  const setFavorited = () => {
    if (article.isFavorited) {
      dispatch(removeFromFavorites(article.id));
    } else {
      dispatch(addToFavorites(article.id));
    }
  };

  return (
    <Column
      style={{padding: 20}}
      smSize={sizes.sm}
      mdSize={sizes.md}
      lgSize={sizes.lg}
      xlSize={sizes.xl}>
      <Row
        smSizePoints={
          gridState.layout.grid ? gridState.layout.grid.height / 1.5 : 0
        }
        mdSizePoints={
          gridState.layout.grid ? gridState.layout.grid.width / 1.5 : 0
        }
        lgSizePoints={
          gridState.layout.grid ? gridState.layout.grid.width / 3 : 0
        }
        xlSizePoints={
          gridState.layout.grid ? gridState.layout.grid.width / 4 : 0
        }
        alignLines="stretch">
        <TouchableOpacity onPress={goToArticle}>
          <View style={{width: '100%', height: '30%'}}>
            <Text>{article.title}</Text>
            <Text>{article.date}</Text>
          </View>

          <TouchableOpacity onPress={setFavorited}>
            <FontAwesomeIcon
              icon={article.isFavorited ? solidHeart : emptyHeart}
            />
          </TouchableOpacity>

          <Image
            style={{width: '100%', height: '70%', resizeMode: 'cover'}}
            source={{uri: article.urlToImage}}
          />
        </TouchableOpacity>
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
