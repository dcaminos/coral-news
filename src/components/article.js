import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {addToFavorites, removeFromFavorites} from '../actions/user';
import FavoriteButton from './favoriteButton';

const Article = ({article}) => {
  const dispatch = useDispatch();

  const setFavorited = () => {
    if (article.isFavorited) {
      dispatch(removeFromFavorites(article.id));
    } else {
      dispatch(addToFavorites(article.id));
    }
  };

  return (
    <View style={styles.article}>
      <ScrollView style={styles.view} removeClippedSubviews={true}>
        <View style={styles.topLine}>
          <Text style={styles.date}>{article.date}</Text>
          <FavoriteButton onPress={setFavorited} filled={article.isFavorited} />
        </View>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.description}>{article.description}</Text>
        <Image
          style={styles.image}
          source={
            article.urlToImage !== null ? {uri: article.urlToImage} : null
          }
        />
        <Text style={styles.author}>{'Author: ' + article.author}</Text>
        <Text style={styles.content}>{article.content}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  article: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  view: {
    padding: 20,
  },

  topLine: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  date: {
    marginTop: 10,
    fontSize: 12,
    color: 'grey',
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 15,
  },

  description: {
    fontSize: 12,
    marginTop: 5,
  },

  image: {
    width: '100%',
    marginTop: 20,
    aspectRatio: 2,
  },

  author: {
    marginTop: 20,
    fontSize: 12,
    color: 'grey',
  },

  content: {
    marginTop: 5,
    fontSize: 12,
    paddingBottom: 50,
  },
});

export default Article;
