import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './src/screens/Home';
import Kitchen from './src/screens/Kitchen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Kitchen: {
    screen: Kitchen
  }
  
});

const AppContainer = createAppContainer(AppNavigator);

export default App = () => <AppContainer />;