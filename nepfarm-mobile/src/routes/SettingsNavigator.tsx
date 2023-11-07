import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SettingsOptionsScreen,
  EditProfileScreen,
  CustomerPreferencesScreen,
  PrivacySettingsScreen,
  ChangePasswordScreen,
} from 'screens';

export enum SettingsAppRoutes {
  SettingsOptions = 'SettingsOptions',
  EditProfile = 'EditProfile',
  CustomerPreferences = 'CustomerPreferences',
  PrivacySettings = 'PrivacySettings',
  ChangePassword = 'ChangePassword',
}

const Stack = createStackNavigator();

const SettingsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SettingsAppRoutes.SettingsOptions}
        component={SettingsOptionsScreen}
        options={{title: 'Welcome to NepFarm'}}
      />
      <Stack.Screen
        name={SettingsAppRoutes.EditProfile}
        component={EditProfileScreen}
        options={{title: 'Creating an Account'}}
      />
      <Stack.Screen
        name={SettingsAppRoutes.CustomerPreferences}
        component={CustomerPreferencesScreen}
        options={{title: 'Register your Phone Number'}}
      />
      <Stack.Screen
        name={SettingsAppRoutes.PrivacySettings}
        component={PrivacySettingsScreen}
        options={{title: 'Give us all off your personal info mwahahaha'}}
      />
      <Stack.Screen
        name={SettingsAppRoutes.ChangePassword}
        component={ChangePasswordScreen}
        options={{title: 'Give us all off your personal info mwahahaha'}}
      />
    </Stack.Navigator>
  );
};

export default SettingsNavigator;
