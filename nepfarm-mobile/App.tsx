import 'react-native-gesture-handler';
import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AuthNavigator, MainNavigator} from 'routes';
import {Provider, useSelector} from 'react-redux';
import {store} from 'custom-redux/Store';

const Stack = createStackNavigator();

function App(): JSX.Element {
  const {isSignedIn} = useSelector(state => state?.user);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            {!isSignedIn ? (
              <Stack.Screen name="Auth" component={AuthNavigator} />
            ) : (
              <Stack.Screen name="Main" component={MainNavigator} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
