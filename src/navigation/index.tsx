// In App.js in a new project

import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Demo from 'screen/Demo';
import BubbleChat from 'screen/BubbleChat';
import Home from 'screen/Home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Demo">
        <Stack.Screen name="Demo" component={Demo} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BubbleChat" component={BubbleChat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
