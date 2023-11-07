import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';

import {useForm} from 'react-hook-form';

import {Label, PrimaryButton} from 'components';
import {AuthAppRoutes} from 'routes/AuthNavigator';
import {MainAppRoutes} from 'routes/MainNavigator';
import {FormType, InputType} from 'components/atoms/Label';
import {
  aplhabetsOnlyRegex,
  emailRegex,
  heightToDp,
  passwordRegex,
  widthToDp,
} from 'utils';
import {Colors, AppFonts} from '@nepfarm/constants';
import {ScrollView} from 'react-native-gesture-handler';
import AuthSlice, {
  updateSignUpPage2,
} from 'custom-redux/slices/auth-slice/AuthSlice';
import {useDispatch, useSelector} from 'react-redux';
import Tag, {TagSizesEnum} from 'components/atoms/Tag';

interface PersonalInfoFormData {
  fullName: string;
  emailAddress: string;
  password: string;
}

const RegisterPersonalInfoScreen = ({navigation}: any) => {
  const dispatch = useDispatch();

  const userType = useSelector(
    (state: any) => state.user.registrationDetails.type,
  );
  const isFarmer = userType === 'farmer';

  const onPressNext = () => {
    navigation.navigate('Auth', {screen: AuthAppRoutes.RegisterAddress});
  };

  const onPressBack = () => {
    navigation.navigate('Auth', {screen: AuthAppRoutes.RegisterPhone});
  };

  const {control, handleSubmit} = useForm();

  const onSubmit = async (values: PersonalInfoFormData) => {
    dispatch(updateSignUpPage2(values));
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
          name="fullName"
          text="Full Name"
          defaultText="Jane Doe"
          formType={FormType.Default}
          inputType={InputType.Text}
          control={control}
          rules={{
            required: '*Required Field',
            pattern: {
              value: aplhabetsOnlyRegex,
              message: '*Please enter a valid name',
            },
          }}
        />
        <Label
          name="emailAddress"
          text="Email Address"
          defaultText="gurzu@gurzu.net"
          formType={FormType.Default}
          inputType={InputType.Email}
          control={control}
          rules={{
            required: false,
            pattern: {
              value: emailRegex,
              message: '*Please enter a valid phone number',
            },
          }}
        />
        <Label
          name="password"
          text="Password"
          defaultText="●●●●●●●●●●"
          formType={FormType.Password}
          inputType={InputType.Text}
          control={control}
          rules={{
            required: '*Required Field',
            pattern: {
              value: passwordRegex,
              message: '*Please enter a valid password',
            },
          }}
        />
      </View>
      {/* <View>
        <Tag
          text="sple"
          size={TagSizesEnum.base}
          isGhost={true}
          isClickable={true}
          xColor={Colors.brand700}
        />
      </View> */}

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
  headingTextStyle: {
    ...AppFonts.H3Bold,
  },
  headingStyle: {
    justifyContent: 'center',
    marginBottom: heightToDp(38),
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
    flex: 1,
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

export default RegisterPersonalInfoScreen;
