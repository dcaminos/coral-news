import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {getCurrentArticle} from '../selectors';

function ArticleScreen() {
  const navigation = useNavigation();
  const currentArticle = useSelector(getCurrentArticle);

  return (
    <View>
      <Button
        title="Back to home"
        onPress={() => navigation.navigate('Home')}
      />

      <Text>{currentArticle.title}</Text>
    </View>
  );
}

export default ArticleScreen;
