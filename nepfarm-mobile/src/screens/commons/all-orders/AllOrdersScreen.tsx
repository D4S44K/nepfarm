import React, {useState} from 'react';

import {PrimaryButton, SampleNavigation} from 'components';
import {BottomTabAppRoutes} from 'routes/BottomTabNavigator';
import {MainAppRoutes} from 'routes/MainNavigator';
import OrderTag from 'components/molecules/OrderTag';
import {height, heightToDp, widthToDp} from 'utils';
import {AppFonts, Colors} from '@nepfarm/constants';
import {StyleSheet, Text, View} from 'react-native';
import App from 'App';
import {FlatList} from 'react-native-gesture-handler';

export enum OrderState {
  requested = 'requested',
  inProgress = 'in_progress',
  completed = 'completed',
}

const staticData = [
  {
    userName: 'MyUsername',
    productTags: ['Brussel Sprouts', 'Chicken', 'Chieck', 'slsls'],
  },
  {
    userName: 'MyUsername',
    productTags: ['Brussel Sprouts', 'Chicken', 'Chieck', 'slsls'],
  },
  {
    userName: 'MyUsername',
    productTags: ['Brussel Sprouts', 'Chicken', 'Chieck', 'slsls'],
  },
  {
    userName: 'MyUsername',
    productTags: ['Brussel Sprouts', 'Chicken', 'Chieck', 'slsls'],
  },
  {
    userName: 'MyUsername',
    productTags: ['Brussel Sprouts', 'Chicken', 'Chieck', 'slsls'],
  },
];

const MiddlePublicProfilePage = ({navigation}: any) => {
  const onPressNext = () => {
    navigation.navigate(MainAppRoutes.OrderDetails);
  };

  const onPressBack = () => {
    navigation.navigate('Main', {screen: BottomTabAppRoutes.AllOrders});
  };

  const renderOrderItem = ({item}: any) => {
    return <OrderTag userName={item.userName} productTags={item.productTags} />;
  };

  const [clickedElement, setClickedElement] = useState(OrderState.requested);
  return (
    // <SampleNavigation
    //   name={BottomTabAppRoutes.AllOrders}
    //   handleOnPressNext={onPressNext}
    //   handleOnPressBack={onPressBack}
    // />
    <View style={styles.container}>
      <View style={styles.headingStyle}>
        <Text style={styles.headingTextStyle}>Orders</Text>
        <View style={styles.buttons}>
          <PrimaryButton
            text={'Requests'}
            handleOnPress={() => setClickedElement(OrderState.requested)}
            customButtonStyle={
              clickedElement === OrderState.requested
                ? styles.clickedButton
                : styles.ghostButton
            }
            customTitleStyle={
              clickedElement === OrderState.requested
                ? {color: Colors.brand900}
                : {color: Colors.brand500}
            }
          />
          <PrimaryButton
            text={'In Progress'}
            handleOnPress={() => setClickedElement(OrderState.inProgress)}
            customButtonStyle={
              clickedElement === OrderState.inProgress
                ? styles.clickedButton
                : styles.ghostButton
            }
            customTitleStyle={
              clickedElement === OrderState.inProgress
                ? {color: Colors.brand900}
                : {color: Colors.brand500}
            }
          />
          <PrimaryButton
            text={'Completed'}
            handleOnPress={() => setClickedElement(OrderState.completed)}
            customButtonStyle={
              clickedElement === OrderState.completed
                ? styles.clickedButton
                : styles.ghostButton
            }
            customTitleStyle={
              clickedElement === OrderState.completed
                ? {color: Colors.brand900}
                : {color: Colors.brand500}
            }
          />
        </View>
      </View>

      {/* <FlatList
        data={staticData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderOrderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flex: 1}}
      /> */}
      <View style={{gap: heightToDp(16)}}>
        <OrderTag
          userName={'Ichhya Amatya'}
          productTags={['Brussel Sprouts', 'Potato', 'Capsicum']}
        />
        <OrderTag
          userName={'Prateek Thapa'}
          productTags={['Mushroom', 'Tofu', 'Chickpea', 'Onion']}
        />
        <OrderTag
          userName={'Robina Bajracharya'}
          productTags={['Onion', 'Spinach', 'Potatoes', 'Kiwi', 'Grapes']}
        />
        <OrderTag userName={'Bishal Sapkota'} productTags={['Grapes']} />
        <OrderTag
          userName={'Rasna Shakya'}
          productTags={['Brussel Sprouts', 'Chicken', 'Chieck', 'slsls']}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingTextStyle: {
    ...AppFonts.H3Bold,
  },
  headingStyle: {
    textAlign: 'left',
    marginBottom: heightToDp(20),
    gap: heightToDp(16),
    height: heightToDp(120),
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
    flex: 1,
    justifyContent: 'flex-start',
    marginBottom: heightToDp(35),
  },
  container: {
    flex: 1,
    paddingHorizontal: widthToDp(32),
    paddingVertical: heightToDp(48),
    backgroundColor: Colors.neutrals100,
    alignItems: 'center',
    gap: heightToDp(8),
  },

  buttons: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // // columnGap: widthToDp(11),
    // marginHorizontal: widthToDp(32),
    flexDirection: 'row',
    // alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    backgroundColor: Colors.neutrals100,
    borderRadius: widthToDp(12),
    // borderRadius: widthToDp(2),

    // Elevation for Android (Android-specific)
    elevation: 4,
  },

  clickedButton: {
    backgroundColor: Colors.brand300,
    paddingVertical: heightToDp(8),
    justifyContent: 'space-between',
    // paddingHorizontal: heightToDp(0),
    // paddingHorizontal: widthToDp(16),
  },

  ghostButton: {
    backgroundColor: Colors.neutrals100,
    borderColor: Colors.neutrals100,
    paddingVertical: heightToDp(8),
    // paddingHorizontal: widthToDp(0),
    justifyContent: 'space-between',
  },
});

export default MiddlePublicProfilePage;
