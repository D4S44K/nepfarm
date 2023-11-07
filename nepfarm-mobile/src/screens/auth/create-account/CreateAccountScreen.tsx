import React from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';

import {PrimaryButton} from 'components';
import {AuthAppRoutes} from 'routes/AuthNavigator';
import {Colors} from 'constants/Colors';
import {heightToDp, widthToDp} from 'utils';
import {AppFonts} from '@nepfarm/constants';
import {useDispatch} from 'react-redux';
import {updateUserType} from 'custom-redux/slices';

const CreateAccountScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  const onPressRegisterFarmer = () => {
    try {
      dispatch(updateUserType('farmer'));
    } catch (e: any) {
      Alert.alert(e.toString());
    }
    navigation.navigate(AuthAppRoutes.RegisterPhone);
  };

  const onPressRegisterConsumer = () => {
    try {
      dispatch(updateUserType('consumer'));
    } catch (e: any) {
      Alert.alert(e.toString());
    }
    navigation.navigate(AuthAppRoutes.RegisterPhone);
  };

  const onPressExistingAccount = () => {
    navigation.navigate(AuthAppRoutes.FarmerLogin);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.headerTitleStyle}>Create an Account</Text>

        <View style={styles.flexContainer}>
          <PrimaryButton
            text="Register as Farmer"
            handleOnPress={onPressRegisterFarmer}
          />
          <PrimaryButton
            text="Register as Consumer"
            handleOnPress={onPressRegisterConsumer}
          />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.textStyle}>Already have an account?</Text>
        <PrimaryButton
          text="Login"
          handleOnPress={onPressExistingAccount}
          color={Colors.secondary300}
          customTitleStyle={{color: Colors.secondary900}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: widthToDp(32),
    paddingVertical: heightToDp(48),
    backgroundColor: Colors.neutrals100,
    justifyContent: 'center',
  },
  flexContainer: {
    gap: heightToDp(24),
    alignContent: 'flex-end',
    marginTop: heightToDp(27),
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  textStyle: {...AppFonts.BodyBaseBold, textAlign: 'center'},
  bottomContainer: {
    gap: heightToDp(10),
  },
  headerTitleStyle: {...AppFonts.H4Bold, textAlign: 'center'},
});

export default CreateAccountScreen;
