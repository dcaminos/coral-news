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
    <View style={styles.article}>
      <TouchableOpacity style={styles.card} onPress={goToArticle}>
        <View style={styles.topLine}>
          <Text style={styles.date}>{article.date}</Text>
          <FavoriteButton onPress={setFavorited} filled={article.isFavorited} />
        </View>
        <Text style={styles.title}>{article.title}</Text>
        <Image
          style={styles.image}
          source={
            article.urlToImage !== null ? {uri: article.urlToImage} : null
          }
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  article: {
    padding: 10,
    width: '100%',
  },

  card: {
    backgroundColor: Colors.white,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'space-between',
    height: '100%',
    //iOS shadow
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    //Android shadow
    elevation: 5,
  },

  topLine: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  date: {
    fontSize: 12,
    color: 'grey',
    padding: 10,
  },

  title: {
    padding: 10,
    paddingTop: 0,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },

  image: {
    width: '100%',
    flexGrow: 1,
    resizeMode: 'cover',
  },
});

export default ArticleItem;
