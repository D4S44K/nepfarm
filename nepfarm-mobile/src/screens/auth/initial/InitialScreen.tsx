import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {PrimaryButton} from 'components';
import {AuthAppRoutes} from 'routes/AuthNavigator';
import {LogoSVG} from 'assets';
import {Colors} from 'constants/Colors';
import {heightToDp, widthToDp} from 'utils';
import {AppFonts} from '@nepfarm/constants';
import UploadImage from 'components/molecules/UploadImage';
import {AllOrdersScreen, InventoryListScreen} from 'screens/commons';
import {updateUserType} from 'custom-redux/slices';
import {useDispatch} from 'react-redux';

const InitialScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  const onPressRegister = () => {
    navigation.navigate(AuthAppRoutes.CreateAccount);
  };

  const onPressLoginFarmer = () => {
    dispatch(updateUserType('farmer'));
    navigation.navigate(AuthAppRoutes.FarmerLogin);
  };

  const onPressLoginConsumer = () => {
    dispatch(updateUserType('consumer'));
    navigation.navigate(AuthAppRoutes.FarmerLogin);
  };

  return (
    // <AllOrdersScreen />
    // <InventoryListScreen />
    <View style={styles.container}>
      <LogoSVG />

      <View style={styles.contentContainer}>
        <View style={styles.flexContainer}>
          <PrimaryButton
            text="Login as Consumer"
            handleOnPress={onPressLoginConsumer}
          />
          <PrimaryButton
            text="Login as Farmer"
            handleOnPress={onPressLoginFarmer}
          />
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.textStyle}>Don't have an account?</Text>
          <PrimaryButton
            text="Register"
            handleOnPress={onPressRegister}
            color={Colors.secondary300}
            customTitleStyle={{color: Colors.secondary900}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: widthToDp(32),
    paddingVertical: heightToDp(48),
    backgroundColor: Colors.brand100,
  },
  flexContainer: {
    gap: heightToDp(24),
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: heightToDp(84),
  },
  textStyle: {...AppFonts.BodyBaseBold, textAlign: 'center'},
  bottomContainer: {
    gap: heightToDp(10),
  },
});

export default InitialScreen;
