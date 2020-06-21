import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch} from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
  setCurrentArticleAction,
} from '../actions/user';
import FavoriteButton from './favoriteButton';

const ArticleItem = ({article}) => {
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
    <TouchableOpacity onPress={goToArticle}>
      <View style={{width: '100%', height: '30%'}}>
        <Text>{article.title}</Text>
        <Text>{article.date}</Text>
      </View>
      <FavoriteButton onPress={setFavorited} filled={article.isFavorited} />

      <Image
        style={{width: '100%', height: '70%', resizeMode: 'cover'}}
        source={{uri: article.urlToImage}}
      />
    </TouchableOpacity>
  );
};

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
