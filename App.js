import {faHeart as solidHeart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {fetchNewsAction} from './src/actions/news';
import ArticleScreen from './src/screens/article';
import FavoritesScreen from './src/screens/favorites';
import HomeScreen from './src/screens/home';

const Stack = createStackNavigator();

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewsAction());
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({navigation}) => ({
            title: 'Coral News',
            headerRight: () => (
              <TouchableOpacity
                style={styles.favoriteButton}
                onPress={() => navigation.navigate('Favorites')}>
                <FontAwesomeIcon icon={solidHeart} color={'red'} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Article"
          component={ArticleScreen}
          options={{
            headerTitle: '',
          }}
        />
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  favoriteButton: {
    paddingRight: 24,
  },
});

export default App;
