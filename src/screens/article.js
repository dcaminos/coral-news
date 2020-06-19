import React from 'react';
import {Button, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

function ArticleScreen({navigation}) {
  const layout = useSelector(store => store.layout);

  return (
    <View>
      <Button
        title="Back to home"
        onPress={() => navigation.navigate('Home')}
      />

      <Text>{layout.currentArticle.title}</Text>
    </View>
  );
}

export default ArticleScreen;
