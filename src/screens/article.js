import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

function ArticleScreen() {
  const navigation = useNavigation();
  const currentArticle = useSelector(store => store.user.currentArticle);

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
