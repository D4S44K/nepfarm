import React from 'react';

import {SampleNavigation} from 'components';
import {MainAppRoutes} from 'routes/MainNavigator';

const OrderDetailsScreen = ({navigation}: any) => {
  const onPressNext = () => {
    navigation.navigate('Main', {screen: MainAppRoutes.OrderDetails});
  };

  const onPressBack = () => {
    navigation.goBack();
  };

  return (
    <SampleNavigation
      name={MainAppRoutes.OrderDetails}
      handleOnPressNext={onPressNext}
      handleOnPressBack={onPressBack}
    />
  );
};

export default OrderDetailsScreen;
