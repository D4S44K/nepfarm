import React from 'react';

import {Label, PrimaryButton, FormType, InputType} from 'components';
import {AuthAppRoutes} from 'routes/AuthNavigator';
import {StyleSheet, Text, View} from 'react-native';
import {heightToDp, numbersOnlyRegex, widthToDp} from 'utils';
import {Colors, AppFonts} from '@nepfarm/constants';
import {useForm} from 'react-hook-form';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {updatePhoneNumber} from 'custom-redux/slices';

const RegisterPhoneScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: any) => state.user.isLoadingPage);

  interface PhoneScreenData {
    phoneNumberReg: string;
  }
  const onPressNext = () => {
    navigation.navigate('Auth', {screen: AuthAppRoutes.RegisterPersonalInfo});
  };

  const onPressBack = () => {
    navigation.navigate('Auth', {screen: AuthAppRoutes.CreateAccount});
  };

  const userType = useSelector(
    (state: any) => state.user.registrationDetails.type,
  );
  const isFarmer = userType === 'farmer';

  const {control, handleSubmit} = useForm();

  const onSubmit = async (values: PhoneScreenData) => {
    console.log('this is values: ', values, values.phoneNumberReg);
    dispatch(updatePhoneNumber(values.phoneNumberReg));
    // const phone = useSelector((state:any) => state.user.log)
    onPressNext();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headingStyle}>
        <Text style={styles.headingTextStyle}>
          {isFarmer ? 'Farmer Registration' : 'Consumer Registration'}
        </Text>
      </View>

      <View style={styles.labelContainer}>
        <Label
          name="phoneNumberReg"
          text="Please enter your phone number below"
          defaultText="000-0000000"
          // phoneNumber={true}
          formType={FormType.Telephone}
          inputType={InputType.Telephone}
          hasHelpText={true}
          helpText="We use your phone number to uniquely identify and register your account. We promise not to spam!"
          // customLabelStyle={{...AppFonts.H6Bold}}
          control={control}
          rules={{
            required: '*Required Field',
            pattern: {
              value: numbersOnlyRegex,
              message: '*Please enter a valid phone number',
            },
          }}
        />
      </View>

      <View style={styles.buttons}>
        <PrimaryButton
          handleOnPress={onPressBack}
          text="Back"
          isGhost={true}
          color={Colors.brand500}
        />
        <PrimaryButton
          handleOnPress={handleSubmit(onSubmit)}
          text="Next"
          // isLoading={isLoading}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headingTextStyle: {
    ...AppFonts.H3Bold,
  },
  headingStyle: {},
  container: {
    flex: 1,
    paddingHorizontal: widthToDp(32),
    paddingVertical: heightToDp(48),
    backgroundColor: Colors.neutrals100,
    alignItems: 'center',
    justifyContent: 'space-between',
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
    justifyContent: 'center',
  },

  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: widthToDp(11),
    marginHorizontal: widthToDp(32),
  },
});

export default RegisterPhoneScreen;
