import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CreateAccountScreen,
  InitialScreen,
  RegisterPersonalInfoScreen,
  RegisterPhoneScreen,
  StartPublicProfilePage,
  MiddlePublicProfilePage,
  PreviewPublicProfilePage,
  FarmerLogin,
  RegisterAddressScreen,
} from 'screens';

export enum AuthAppRoutes {
  Initial = 'Initial',
  CreateAccount = 'CreateAccount',
  RegisterPhone = 'RegisterPhone',
  RegisterPersonalInfo = 'RegisterPersonalInfo',
  StartPublicProfile = 'StartPublicProfile',
  MiddlePublicProfile = 'MiddlePublicProfile',
  PreviewPublicProfile = 'PreviewPublicProfile',
  FarmerLogin = 'FarmerLogin',
  RegisterAddress = 'RegisterAddress',
}

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={AuthAppRoutes.Initial}
        component={InitialScreen}
        options={{title: 'Welcome to NepFarm'}}
      />
      <Stack.Screen
        name={AuthAppRoutes.FarmerLogin}
        component={FarmerLogin}
        options={{title: 'Welcome to NepFarm'}}
      />
      <Stack.Screen
        name={AuthAppRoutes.CreateAccount}
        component={CreateAccountScreen}
        options={{title: 'Creating an Account'}}
      />
      <Stack.Screen
        name={AuthAppRoutes.RegisterPhone}
        component={RegisterPhoneScreen}
        options={{title: 'Register your Phone Number'}}
      />
      <Stack.Screen
        name={AuthAppRoutes.RegisterPersonalInfo}
        component={RegisterPersonalInfoScreen}
        options={{title: 'Give us all off your personal info mwahahaha'}}
      />
      <Stack.Screen
        name={AuthAppRoutes.RegisterAddress}
        component={RegisterAddressScreen}
        options={{title: 'Give us all off your personal info mwahahaha'}}
      />
      <Stack.Screen
        name={AuthAppRoutes.StartPublicProfile}
        component={StartPublicProfilePage}
        options={{title: 'Give us all off your personal info mwahahaha'}}
      />
      <Stack.Screen
        name={AuthAppRoutes.MiddlePublicProfile}
        component={MiddlePublicProfilePage}
        options={{title: 'Give us all off your personal info mwahahaha'}}
      />
      <Stack.Screen
        name={AuthAppRoutes.PreviewPublicProfile}
        component={PreviewPublicProfilePage}
        options={{title: 'Give us all off your personal info mwahahaha'}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
