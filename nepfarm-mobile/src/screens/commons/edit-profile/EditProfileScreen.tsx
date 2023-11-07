import React from 'react';

import {SampleNavigation} from 'components';
import {MainAppRoutes} from 'routes/MainNavigator';

const EditProfileScreen = ({navigation}: any) => {
  const onPressNext = () => {
    navigation.navigate('Main', {screen: MainAppRoutes.EditProfile});
  };

  const onPressBack = () => {
    navigation.goBack();
  };

  return (
    <SampleNavigation
      name={MainAppRoutes.EditProfile}
      handleOnPressNext={onPressNext}
      handleOnPressBack={onPressBack}
    />
  );
};

export default EditProfileScreen;
