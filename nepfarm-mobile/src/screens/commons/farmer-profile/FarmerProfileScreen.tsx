import React from 'react';

import {SampleNavigation} from 'components';
import {MainAppRoutes} from 'routes/MainNavigator';
import {BottomTabAppRoutes} from 'routes/BottomTabNavigator';
import UploadImage from 'components/molecules/UploadImage';

const FarmerProfileScreen = ({navigation}: any) => {
  const onPressNext = () => {
    navigation.navigate('Main', {screen: MainAppRoutes.EditProfile});
  };

  const onPressBack = () => {
    navigation.navigate('Main', {screen: MainAppRoutes.BottomTab});
  };

  return (
    <SampleNavigation
      name={BottomTabAppRoutes.FarmerProfile}
      handleOnPressNext={onPressNext}
      handleOnPressBack={onPressBack}
    />
    // <UploadImage />
  );
};

export default FarmerProfileScreen;
