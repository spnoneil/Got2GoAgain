import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen'
import DetailsScreen from './src/screens/DetailsScreen'
import AddBathroom from './src/screens/AddBathroom'
import About from './src/screens/About'
import HeaderBar from './src/components/StatusBar';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Got2Go' }}
          />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ title: 'Bathroom Detail' }}
          />
        <Stack.Screen
          name="AddBathroom"
          component={AddBathroom}
          options={{ title: 'Add a Bathroom!'}}
          />
          <Stack.Screen
          name="About"
          component={About}
          options={{ title: 'About'}}
          />
      </Stack.Navigator>
      <HeaderBar />
    </NavigationContainer>
  );
}

export default App;