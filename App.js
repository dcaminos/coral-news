import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchNewsAction} from './src/actions/news';
import ArticleScreen from './src/screens/article';
import HomeScreen from './src/screens/home';

const Stack = createStackNavigator();

function App() {
  const layout = useSelector(store => store.layout);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewsAction(layout));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Article" component={ArticleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
