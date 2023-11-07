import React from 'react';

import {SampleNavigation} from 'components';
import {MainAppRoutes} from 'routes/MainNavigator';

const EditInventoryScreen = ({navigation}: any) => {
  const onPressNext = () => {
    navigation.navigate('Main', {screen: MainAppRoutes.EditInventory});
  };

  const onPressBack = () => {
    navigation.goBack();
  };

  return (
    <SampleNavigation
      name={MainAppRoutes.EditInventory}
      handleOnPressNext={onPressNext}
      handleOnPressBack={onPressBack}
    />
  );
};

export default EditInventoryScreen;
