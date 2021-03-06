import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchNewsAction} from './src/actions/news';
import FavoriteButton from './src/components/favoriteButton';
import ArticleScreen from './src/screens/article';
import FavoritesScreen from './src/screens/favorites';
import HomeScreen from './src/screens/home';

const Stack = createStackNavigator();

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewsAction());
  }, []);

  const headerStyle = {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  };

  const homeOptions = ({navigation}) => ({
    title: 'Coral News',
    headerRight: () => (
      <FavoriteButton onPress={() => navigation.navigate('Favorites')} />
    ),
    headerStyle: headerStyle,
  });

  const articleOptions = () => ({
    title: '',
    headerStyle: headerStyle,
  });

  const favoritesOptions = () => ({
    title: 'Favorites',
    headerStyle: headerStyle,
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={homeOptions}
        />
        <Stack.Screen
          name="Article"
          component={ArticleScreen}
          options={articleOptions}
        />
        <Stack.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={favoritesOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
