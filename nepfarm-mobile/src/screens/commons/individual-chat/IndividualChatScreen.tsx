import React from 'react';

import {SampleNavigation} from 'components';
import {MainAppRoutes} from 'routes/MainNavigator';

const IndividualChatScreen = ({navigation}: any) => {
  const onPressNext = () => {
    navigation.navigate('Main', {screen: MainAppRoutes.IndividualChat});
  };

  const onPressBack = () => {
    navigation.goBack();
  };

  return (
    <SampleNavigation
      name={MainAppRoutes.IndividualChat}
      handleOnPressNext={onPressNext}
      handleOnPressBack={onPressBack}
    />
  );
};

export default IndividualChatScreen;
