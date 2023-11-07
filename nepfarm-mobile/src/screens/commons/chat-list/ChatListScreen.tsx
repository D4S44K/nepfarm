import React from 'react';

import {SampleNavigation} from 'components';
import {MainAppRoutes} from 'routes/MainNavigator';
import {BottomTabAppRoutes} from 'routes/BottomTabNavigator';

const ChatListScreen = ({navigation}: any) => {
  const onPressNext = () => {
    navigation.navigate('Main', {screen: MainAppRoutes.IndividualChat});
  };

  const onPressBack = () => {
    navigation.navigate('Main', {screen: BottomTabAppRoutes.ChatList});
  };

  return (
    <SampleNavigation
      name={BottomTabAppRoutes.ChatList}
      handleOnPressNext={onPressNext}
      handleOnPressBack={onPressBack}
    />
  );
};

export default ChatListScreen;
