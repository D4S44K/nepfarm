import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  AllOrdersScreen,
  ChatListScreen,
  FarmerProfileScreen,
  InventoryListScreen,
  InitialSearchScreen,
  PrivacySettingsScreen,
} from 'screens';
import {
  OrderIconSVG,
  ChatsIconSVG,
  InventoryIconSVG,
  ProfileIconSVG,
  SearchSVG,
  SettingsSVG,
} from 'assets';
import {Colors} from '@nepfarm/constants';
import {heightToDp} from 'utils';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AppFonts} from '@nepfarm/constants';
import {useSelector} from 'react-redux';

export enum BottomTabAppRoutes {
  AllOrders = 'Orders',
  ChatList = 'Chats',
  InventoryList = 'Inventory',
  FarmerProfile = 'Profile',

  Search = 'Search',
  Settings = 'Settings',
}

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const userType = useSelector(
    (state: any) => state.user.registrationDetails.type,
  );
  const isFarmer = userType === 'farmer';
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      safeAreaInsets={{bottom: 0}}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let tabBarItem;
          let iconName;

          switch (route.name) {
            case BottomTabAppRoutes.AllOrders:
              tabBarItem = focused ? (
                <OrderIconSVG stroke={Colors.brand100} strokeWidth={2} />
              ) : (
                <OrderIconSVG stroke={Colors.brand900} strokeWidth={2} />
              );
              break;
            case BottomTabAppRoutes.ChatList:
              tabBarItem = focused ? (
                <ChatsIconSVG stroke={Colors.brand100} strokeWidth={2} />
              ) : (
                <ChatsIconSVG stroke={Colors.brand900} strokeWidth={2} />
              );
              break;
            case BottomTabAppRoutes.InventoryList:
              tabBarItem = focused ? (
                <InventoryIconSVG stroke={Colors.brand100} strokeWidth={2} />
              ) : (
                <InventoryIconSVG stroke={Colors.brand900} strokeWidth={2} />
              );
              break;
            case BottomTabAppRoutes.FarmerProfile:
              tabBarItem = focused ? (
                <ProfileIconSVG stroke={Colors.brand100} strokeWidth={2} />
              ) : (
                <ProfileIconSVG stroke={Colors.brand900} strokeWidth={2} />
              );
              break;
            case BottomTabAppRoutes.Search:
              tabBarItem = focused ? (
                <SearchSVG stroke={Colors.brand100} strokeWidth={2} />
              ) : (
                <SearchSVG stroke={Colors.brand900} strokeWidth={2} />
              );
              break;
            case BottomTabAppRoutes.Settings:
              tabBarItem = focused ? (
                <SettingsSVG stroke={Colors.brand100} strokeWidth={2} />
              ) : (
                <SettingsSVG stroke={Colors.brand900} strokeWidth={2} />
              );
              break;
          }

          iconName = (
            <View style={styles.tabItemContainer}>
              {tabBarItem}
              <Text style={[styles.labelTextStyle, {color: color}]}>
                {route.name}
              </Text>
            </View>
          );
          return iconName;
        },
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: heightToDp(76) + (insets.bottom ? 20 : 0),
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarActiveBackgroundColor: Colors.brand500,
        tabBarInactiveBackgroundColor: Colors.brand100,
        tabBarActiveTintColor: Colors.brand100,
        tabBarInactiveTintColor: Colors.brand900,
      })}>
      <Tab.Screen
        name={
          isFarmer ? BottomTabAppRoutes.AllOrders : BottomTabAppRoutes.Search
        }
        component={isFarmer ? AllOrdersScreen : InitialSearchScreen}
      />
      <Tab.Screen
        name={BottomTabAppRoutes.ChatList}
        component={ChatListScreen}
      />
      <Tab.Screen
        name={
          isFarmer
            ? BottomTabAppRoutes.InventoryList
            : BottomTabAppRoutes.AllOrders
        }
        component={isFarmer ? InventoryListScreen : AllOrdersScreen}
      />
      <Tab.Screen
        name={
          isFarmer
            ? BottomTabAppRoutes.FarmerProfile
            : BottomTabAppRoutes.Settings
        }
        component={isFarmer ? FarmerProfileScreen : PrivacySettingsScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabItemContainer: {
    alignItems: 'center',
  },
  labelTextStyle: {
    marginTop: heightToDp(4),
    ...AppFonts.BodySmallBold,
  },
});

export default BottomTabNavigator;

// import * as React from 'react';
// import {StyleSheet, View, Text} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {
//   AllOrdersScreen,
//   ChatListScreen,
//   FarmerProfileScreen,
//   InventoryListScreen,
//   InitialSearchScreen,
//   PrivacySettingsScreen,
//   OrderDetailsScreen,
// } from 'screens';
// import {
//   OrderIconSVG,
//   ChatsIconSVG,
//   InventoryIconSVG,
//   ProfileIconSVG,
//   SearchSVG,
//   SettingsSVG,
// } from 'assets';
// import {Colors} from '@nepfarm/constants';
// import {heightToDp} from 'utils';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import {AppFonts} from '@nepfarm/constants';
// import {useSelector} from 'react-redux';

// export enum BottomTabAppRoutes {
//   AllOrders = 'Orders',
//   ChatList = 'Chats',
//   InventoryList = 'Inventory',
//   FarmerProfile = 'Profile',

//   Search = 'Search',
//   Settings = 'Settings',
// }

// const Tab = createBottomTabNavigator();

// const BottomTabNavigator = () => {
//   const userType = useSelector(
//     (state: any) => state.user.registrationDetails.type,
//   );
//   const isFarmer = userType === 'farmer';
//   const insets = useSafeAreaInsets();
//   return (
//     <Tab.Navigator
//       safeAreaInsets={{bottom: 0}}
//       screenOptions={({route}) => ({
//         tabBarIcon: ({focused, color}) => {
//           let tabBarItem;
//           let iconName;

//           switch (route.name) {
//             case BottomTabAppRoutes.AllOrders:
//               tabBarItem = focused ? (
//                 <OrderIconSVG stroke={Colors.brand100} strokeWidth={2} />
//               ) : (
//                 <OrderIconSVG stroke={Colors.brand900} strokeWidth={2} />
//               );
//               break;
//             case BottomTabAppRoutes.ChatList:
//               tabBarItem = focused ? (
//                 <ChatsIconSVG stroke={Colors.brand100} strokeWidth={2} />
//               ) : (
//                 <ChatsIconSVG stroke={Colors.brand900} strokeWidth={2} />
//               );
//               break;
//             case BottomTabAppRoutes.InventoryList:
//               tabBarItem = focused ? (
//                 <InventoryIconSVG stroke={Colors.brand100} strokeWidth={2} />
//               ) : (
//                 <InventoryIconSVG stroke={Colors.brand900} strokeWidth={2} />
//               );
//               break;
//             case BottomTabAppRoutes.FarmerProfile:
//               tabBarItem = focused ? (
//                 <ProfileIconSVG stroke={Colors.brand100} strokeWidth={2} />
//               ) : (
//                 <ProfileIconSVG stroke={Colors.brand900} strokeWidth={2} />
//               );
//               break;
//             case BottomTabAppRoutes.Search:
//               tabBarItem = focused ? (
//                 <SearchSVG stroke={Colors.brand100} strokeWidth={2} />
//               ) : (
//                 <SearchSVG stroke={Colors.brand900} strokeWidth={2} />
//               );
//               break;
//             case BottomTabAppRoutes.Settings:
//               tabBarItem = focused ? (
//                 <SettingsSVG stroke={Colors.brand100} strokeWidth={2} />
//               ) : (
//                 <SettingsSVG stroke={Colors.brand900} strokeWidth={2} />
//               );
//               break;
//           }

//           iconName = (
//             <View style={styles.tabItemContainer}>
//               {tabBarItem}
//               <Text style={[styles.labelTextStyle, {color: color}]}>
//                 {route.name}
//               </Text>
//             </View>
//           );
//           return iconName;
//         },
//         tabBarHideOnKeyboard: true,
//         tabBarShowLabel: false,
//         tabBarStyle: {
//           height: heightToDp(76) + (insets.bottom ? 20 : 0),
//           alignItems: 'center',
//           justifyContent: 'center',
//         },
//         tabBarActiveBackgroundColor: Colors.brand500,
//         tabBarInactiveBackgroundColor: Colors.brand100,
//         tabBarActiveTintColor: Colors.brand100,
//         tabBarInactiveTintColor: Colors.brand900,
//       })}>
//       {isFarmer ? (
//         <>
//           <Tab.Screen
//             name={BottomTabAppRoutes.AllOrders}
//             component={AllOrdersScreen}
//           />
//           <Tab.Screen
//             name={BottomTabAppRoutes.ChatList}
//             component={ChatListScreen}
//           />
//           <Tab.Screen
//             name={BottomTabAppRoutes.InventoryList}
//             component={InventoryListScreen}
//           />
//           <Tab.Screen
//             name={BottomTabAppRoutes.FarmerProfile}
//             component={FarmerProfileScreen}
//           />{' '}
//         </>
//       ) : (
//         <>
//           <Tab.Screen
//             name={BottomTabAppRoutes.Search}
//             component={InitialSearchScreen}
//           />
//           <Tab.Screen
//             name={BottomTabAppRoutes.ChatList}
//             component={ChatListScreen}
//           />
//           <Tab.Screen
//             name={BottomTabAppRoutes.AllOrders}
//             component={OrderDetailsScreen}
//           />
//           <Tab.Screen
//             name={BottomTabAppRoutes.Settings}
//             component={PrivacySettingsScreen}
//           />
//         </>
//       )}
//     </Tab.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   tabItemContainer: {
//     alignItems: 'center',
//   },
//   labelTextStyle: {
//     marginTop: heightToDp(4),
//     ...AppFonts.BodySmallBold,
//   },
// });

// export default BottomTabNavigator;
