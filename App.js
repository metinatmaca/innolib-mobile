import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from 'screens/HomeScreen';
import DenemeScreen from 'screens/DenemeScreen';
import { ROUTES } from 'constants';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ROUTES.home} component={HomeScreen} />
        <Stack.Screen name={ROUTES.deneme} component={DenemeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
