import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  IndividualChatScreen,
  OrderDetailsScreen,
  EditInventoryScreen,
  EditProfileScreen,
} from 'screens';

import {BottomTabNavigator, SettingsNavigator} from 'routes';

export enum MainAppRoutes {
  BottomTab = 'BottomTab',
  Settings = 'Settings',
  IndividualChat = 'IndividualChat',
  OrderDetails = 'OrderDetails',
  EditProfile = 'EditProfile',
  EditInventory = 'EditInventory',
}

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={MainAppRoutes.BottomTab}
        component={BottomTabNavigator}
      />
      <Stack.Screen
        name={MainAppRoutes.Settings}
        component={SettingsNavigator}
        options={{title: 'Settings Pages'}}
      />
      <Stack.Screen
        name={MainAppRoutes.IndividualChat}
        component={IndividualChatScreen}
        options={{title: 'Chat Page'}}
      />
      <Stack.Screen
        name={MainAppRoutes.OrderDetails}
        component={OrderDetailsScreen}
        options={{title: 'Order Details'}}
      />
      <Stack.Screen
        name={MainAppRoutes.EditInventory}
        component={EditInventoryScreen}
        options={{title: 'Edit Inventory Page'}}
      />
      <Stack.Screen
        name={MainAppRoutes.EditProfile}
        component={EditProfileScreen}
        options={{title: 'Edit Profile Page'}}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
