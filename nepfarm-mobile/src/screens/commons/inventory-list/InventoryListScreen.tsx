import React from 'react';

import {
  InventoryCard,
  PrimaryButton,
  SampleNavigation,
  UnitsEnum,
} from 'components';
import {MainAppRoutes} from 'routes/MainNavigator';
import {BottomTabAppRoutes} from 'routes/BottomTabNavigator';
import {StyleSheet, Text, View} from 'react-native';
import {heightToDp, widthToDp} from 'utils';
import {AppFonts} from 'constants';
import {Colors} from '@nepfarm/constants';
import {FlatList} from 'react-native-gesture-handler';

const staticInventory = [
  {
    id: 1,
    name: 'Zucchini',
    quantity: 44,
  },
  {
    id: 2,
    name: 'Cucumber',
    quantity: 46,
  },
  {
    id: 3,
    name: 'Apple',
    quantity: 57,
  },
  {
    id: 4,
    name: 'Banana',
    quantity: 24,
  },
  {
    id: 5,
    name: 'Pear',
    quantity: 14,
  },
  {
    id: 6,
    name: 'Mango',
    quantity: 5,
  },
];

const InventoryListScreen = ({navigation}: any) => {
  const onPressNext = () => {
    navigation.navigate('Main', {screen: MainAppRoutes.EditInventory});
  };

  const onPressBack = () => {
    navigation.navigate('Main', {screen: MainAppRoutes.BottomTab});
  };

  const renderInventoryItem = ({item}: any) => {
    return (
      <View style={{marginBottom: heightToDp(8)}}>
        <InventoryCard
          productName={item.name}
          productQuantity={item.quantity.toString() || 'N/A'}
          productUnit={UnitsEnum.kg}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingStyle}>
        <Text style={styles.headingTextStyle}>Inventory</Text>
        <PrimaryButton
          text="Edit"
          customButtonStyle={{padding: 0}}
          handleOnPress={onPressNext}
        />
      </View>

      <FlatList
        data={staticInventory}
        keyExtractor={item => item?.id?.toString()}
        renderItem={renderInventoryItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    gap: heightToDp(8),
  },
  descriptionText: {
    flex: 0.58,
    justifyContent: 'space-between',
    marginBottom: heightToDp(21),
  },
  headingTextStyle: {
    ...AppFonts.H3Bold,
  },
  headingStyle: {
    marginBottom: heightToDp(38),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    paddingHorizontal: widthToDp(32),
    paddingVertical: heightToDp(48),
    backgroundColor: Colors.neutrals100,
  },
  flexContainer: {
    gap: heightToDp(24),
  },
  contentContainer: {
    flex: 1,
    marginTop: heightToDp(84),
  },
  textStyle: {...AppFonts.BodyBaseBold, textAlign: 'center'},
  bottomContainer: {
    gap: heightToDp(10),
  },
  labelContainer: {
    width: '100%',
    flex: 1.4,
    justifyContent: 'flex-start',
    marginBottom: heightToDp(35),
  },

  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: widthToDp(11),
    marginHorizontal: widthToDp(32),
  },
});
export default InventoryListScreen;
