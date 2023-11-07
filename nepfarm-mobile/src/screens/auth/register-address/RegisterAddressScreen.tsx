import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';

import {useForm} from 'react-hook-form';

import {Label, PrimaryButton} from 'components';
import {AuthAppRoutes} from 'routes/AuthNavigator';
import {FormType, InputType} from 'components/atoms/Label';
import {getError, heightToDp, widthToDp} from 'utils';
import {Colors, AppFonts, axiosInstance} from '@nepfarm/constants';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {
  isLoginFailure,
  isLoginInit,
  isLoginSuccess,
  updateAddress,
} from 'custom-redux/slices';
import {MainAppRoutes} from 'routes/MainNavigator';

interface AddressFormData {
  address: string;
  referencePoints: string;
}

const RegisterAddressScreen = ({navigation}: any) => {
  const userType = useSelector(
    (state: any) => state.user.registrationDetails.type,
  );
  const isFarmer = userType === 'farmer';
  console.log('is farmer? ', isFarmer);
  console.log('userType: ', userType);
  const fullUserData = useSelector(
    (state: any) => state.user.registrationDetails,
  );
  const dispatch = useDispatch();
  const onPressNext = () => {
    if (isFarmer) {
      navigation.navigate('Auth', {screen: AuthAppRoutes.StartPublicProfile});
    } else {
      navigation.navigate('Main', {screen: MainAppRoutes.BottomTab});
    }
  };

  const onPressBack = () => {
    navigation.navigate('Auth', {screen: AuthAppRoutes.RegisterPersonalInfo});
  };

  const handleSignup = async () => {
    try {
      dispatch(isLoginInit());
      console.log('this is full userdata: ', {user: {fullUserData}});
      // const res = await axiosInstance.post(
      //   '/signup_consumer',
      //   {user: {fullUserData}},
      //   {
      //     headers: {'content-type': 'multipart/form-data'},
      //   },
      // );
      const postData = {
        user: {
          email: fullUserData.emailAddress || '',
          full_name: fullUserData.fullName || '',
          phone_number: fullUserData.phoneNumber || '',
          password: fullUserData.password || '',
          address: fullUserData.address || '',
          // profile_attributes: {profile_picture: ''},
        },
      };

      const res = await axiosInstance.post('/signup_consumer', postData);

      console.log('res: ', res, res.data);
      dispatch(isLoginSuccess(res.data));
      onPressNext();
    } catch (error: any) {
      Alert.alert('Error! ', getError(error) || 'Unknown error');

      dispatch(isLoginFailure(getError(error) || 'Unknown error'));
    }
  };

  const {control, handleSubmit} = useForm();
  const onSubmit = async (values: AddressFormData) => {
    console.log('here');
    dispatch(updateAddress(values));
    console.log('now here');
    if (!isFarmer) {
      handleSignup();
      console.log('inside');
    } else {
      console.log('onwards!');
      onPressNext();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headingStyle}>
        <Text style={styles.headingTextStyle}>
          {isFarmer ? 'Farmer Registration' : 'Consumer Registration'}
        </Text>
      </View>
      <View style={styles.descriptionText}>
        <Text style={{...AppFonts.H6Bold}}>
          {isFarmer
            ? 'Please enter your warehouse’s address'
            : 'Please enter your delivery address'}
        </Text>
        <Text style={[AppFonts.BodyLargeRegular, {color: Colors.neutrals600}]}>
          {isFarmer
            ? 'This is used for calculating the transportation costs that are charged to the consumer.'
            : 'This is used for calculating the transportation costs that you are charged.'}
        </Text>
      </View>

      <View style={styles.labelContainer}>
        <Label
          name="address"
          text="Select the closest address (optional)"
          defaultText="Gurzu, Ramesh Complex Fifth Floor, Gusingal"
          formType={FormType.Default}
          inputType={InputType.Text}
          control={control}
          // rules={{
          //   required: '*Required Field',
          // }}
        />
        <Label
          name="referencePoints"
          text="Direction / Reference Points (optional)"
          defaultText="Near Nightingale College"
          formType={FormType.Default}
          inputType={InputType.Email}
          control={control}
        />
      </View>

      <View style={styles.buttons}>
        <PrimaryButton
          handleOnPress={onPressBack}
          text="Back"
          isGhost={true}
          color={Colors.brand500}
        />
        <PrimaryButton handleOnPress={handleSubmit(onSubmit)} text="Next" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
  },
  container: {
    flex: 1,
    paddingHorizontal: widthToDp(32),
    paddingVertical: heightToDp(48),
    backgroundColor: Colors.neutrals100,
    alignItems: 'center',
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

export default RegisterAddressScreen;
