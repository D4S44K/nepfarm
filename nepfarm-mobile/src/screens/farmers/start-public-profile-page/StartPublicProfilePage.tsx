import React from 'react';

import {PrimaryButton, SampleNavigation} from 'components';
import {AuthAppRoutes} from 'routes/AuthNavigator';
import UploadImage from 'components/molecules/UploadImage';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {heightToDp, widthToDp} from 'utils';
import {AppFonts} from '@nepfarm/constants';
import {Colors} from '@nepfarm/constants';
import {Label} from 'components';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {updateFarmerProfileDescription} from 'custom-redux/slices';

interface ProfileSetupOne {
  // image: string;
  description: string;
}

const StartPublicProfilePage = ({navigation}: any) => {
  const dispatch = useDispatch();

  const onPressNext = () => {
    navigation.navigate('Auth', {screen: AuthAppRoutes.MiddlePublicProfile});
  };

  const onPressBack = () => {
    navigation.navigate('Auth', {screen: AuthAppRoutes.RegisterPersonalInfo});
  };

  const {control, handleSubmit} = useForm();

  const onSubmit = async (values: ProfileSetupOne) => {
    console.log('values: ', values);
    dispatch(updateFarmerProfileDescription(values));
    onPressNext();
  };

  return (
    // <SampleNavigation
    //   name={AuthAppRoutes.StartPublicProfile}
    //   handleOnPressNext={onPressNext}
    //   handleOnPressBack={onPressBack}
    // />
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headingStyle}>
        <Text style={styles.headingTextStyle}>Farmer Registration</Text>
        <Text style={styles.helpTextStyle}>
          This is shown to prospective consumers when they click on your name
          for more information about your farm and produce.
        </Text>
      </View>
      <View style={styles.uploadContainer}>
        <Text style={AppFonts.BodyBaseBold}>Upload a profile picture</Text>
        <UploadImage />
      </View>
      <Label
        name="description"
        text={'Add a description about your farm'}
        isMultiline={true}
        defaultText={
          'What is the history of your farm? How do you guarantee freshness? Why should consumers choose you?'
        }
        control={control}
      />
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
  helpTextStyle: {
    ...AppFonts.BodyLargeRegular,
    color: Colors.neutrals500,
  },
  loadingContainer: {
    flex: 1,
  },
  uploadContainer: {
    gap: heightToDp(5),
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'flex-start',
    alignSelf: 'stretch',
  },
  container: {
    flex: 1,
    paddingHorizontal: widthToDp(32),
    paddingVertical: heightToDp(48),
    justifyContent: 'space-between',
    // gap: heightToDp(5),
    // flexDirection: 'column',
    // // justifyContent: 'center',
    // // alignItems: 'flex-start',
    // alignSelf: 'stretch',
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

  headingTextStyle: {
    ...AppFonts.H3Bold,
  },
  headingStyle: {
    gap: heightToDp(10),
  },
  // container: {
  //   flex: 1,
  //   paddingHorizontal: widthToDp(32),
  //   paddingVertical: heightToDp(48),
  //   backgroundColor: Colors.neutrals100,
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  // },
  // flexContainer: {
  //   gap: heightToDp(24),
  // },
  // contentContainer: {
  //   flex: 1,
  //   marginTop: heightToDp(84),
  // },
  // textStyle: {...AppFonts.BodyBaseBold, textAlign: 'center'},
  // bottomContainer: {
  //   gap: heightToDp(10),
  // },
  labelContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
  },

  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: widthToDp(11),
    marginHorizontal: widthToDp(32),
  },
});

export default StartPublicProfilePage;

// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';

// import {useForm} from 'react-hook-form';

// import {Label, PrimaryButton} from 'components';
// import {AuthAppRoutes} from 'routes/AuthNavigator';
// import {FormType, InputType} from 'components/atoms/Label';
// import {heightToDp, widthToDp} from 'utils';
// import {Colors, AppFonts} from '@nepfarm/constants';
// import {ScrollView} from 'react-native-gesture-handler';
// import {useDispatch} from 'react-redux';
// import {updateAddress} from 'custom-redux/slices';

// interface AddressFormData {
//   address: string;
//   referencePoints: string;
// }

// const RegisterAddressScreen = ({navigation}: any) => {
//   const dispatch = useDispatch();
//   const onPressNext = () => {
//     navigation.navigate('Auth', {screen: AuthAppRoutes.StartPublicProfile});
//   };

//   const onPressBack = () => {
//     navigation.navigate('Auth', {screen: AuthAppRoutes.RegisterPersonalInfo});
//   };

//   const {control, handleSubmit} = useForm();

//   const onSubmit = async (values: AddressFormData) => {
//     dispatch(updateAddress(values));
//     onPressNext();
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.headingStyle}>
//         <Text style={styles.headingTextStyle}>Farmer Registration</Text>
//       </View>
//       <View style={styles.descriptionText}>
//         <Text style={{...AppFonts.H6Bold}}>
//           Please enter your warehouse’s address
//         </Text>
//         <Text style={[AppFonts.BodyLargeRegular, {color: Colors.neutrals600}]}>
//           This is used for calculating the transportation costs that are charged
//           to the consumer.
//         </Text>
//       </View>

//       <View style={styles.labelContainer}>
//         <Label
//           name="address"
//           text="Select the closest address (optional)"
//           defaultText="Gurzu, Ramesh Complex Fifth Floor, Gusingal"
//           formType={FormType.Default}
//           inputType={InputType.Text}
//           control={control}
//           rules={{
//             required: '*Required Field',
//           }}
//         />
//         <Label
//           name="referencePoints"
//           text="Direction / Reference Points (optional)"
//           defaultText="gurzu@gurzu.net"
//           formType={FormType.Default}
//           inputType={InputType.Email}
//           control={control}
//         />
//       </View>

//       <View style={styles.buttons}>
//         <PrimaryButton
//           handleOnPress={onPressBack}
//           text="Back"
//           isGhost={true}
//           color={Colors.brand500}
//         />
//         <PrimaryButton handleOnPress={handleSubmit(onSubmit)} text="Next" />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   descriptionText: {
//     flex: 0.58,
//     justifyContent: 'space-between',
//     marginBottom: heightToDp(21),
//   },
//   headingTextStyle: {
//     ...AppFonts.H3Bold,
//   },
//   headingStyle: {
//     marginBottom: heightToDp(38),
//     justifyContent: 'space-between',
//   },
//   container: {
//     flex: 1,
//     paddingHorizontal: widthToDp(32),
//     paddingVertical: heightToDp(48),
//     backgroundColor: Colors.neutrals100,
//     alignItems: 'center',
//   },
//   flexContainer: {
//     gap: heightToDp(24),
//   },
//   contentContainer: {
//     flex: 1,
//     marginTop: heightToDp(84),
//   },
//   textStyle: {...AppFonts.BodyBaseBold, textAlign: 'center'},
//   bottomContainer: {
//     gap: heightToDp(10),
//   },
//   labelContainer: {
//     width: '100%',
//     flex: 1.4,
//     justifyContent: 'flex-start',
//     marginBottom: heightToDp(35),
//   },

//   buttons: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     columnGap: widthToDp(11),
//     marginHorizontal: widthToDp(32),
//   },
// });

// export default RegisterAddressScreen;

// import React from 'react';

// import {Label, PrimaryButton, FormType, InputType} from 'components';
// import {AuthAppRoutes} from 'routes/AuthNavigator';
// import {StyleSheet, Text, View} from 'react-native';
// import {heightToDp, numbersOnlyRegex, widthToDp} from 'utils';
// import {Colors, AppFonts} from '@nepfarm/constants';
// import {useForm} from 'react-hook-form';
// import {ScrollView} from 'react-native-gesture-handler';
// import {useDispatch, useSelector} from 'react-redux';
// import {updatePhoneNumber} from 'custom-redux/slices';

// const RegisterPhoneScreen = ({navigation}: any) => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector((state: any) => state.user.isLoadingPage);

//   interface PhoneScreenData {
//     phoneNumberReg: string;
//   }
//   const onPressNext = () => {
//     navigation.navigate('Auth', {screen: AuthAppRoutes.RegisterPersonalInfo});
//   };

//   const onPressBack = () => {
//     navigation.navigate('Auth', {screen: AuthAppRoutes.CreateAccount});
//   };

//   const {control, handleSubmit} = useForm();

//   const onSubmit = async (values: PhoneScreenData) => {
//     dispatch(updatePhoneNumber(values.phoneNumberReg));
//     onPressNext();
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.headingStyle}>
//         <Text style={styles.headingTextStyle}>Farmer Registration</Text>
//       </View>

//       <View style={styles.labelContainer}>
//         <Label
//           name="phoneNumberReg"
//           text="Please enter your phone number below"
//           defaultText="000-0000000"
//           // phoneNumber={true}
//           formType={FormType.Telephone}
//           inputType={InputType.Telephone}
//           hasHelpText={true}
//           helpText="We use your phone number to uniquely identify and register your account. We promise not to spam!"
//           // customLabelStyle={{...AppFonts.H6Bold}}
//           control={control}
//           rules={{
//             required: '*Required Field',
//             pattern: {
//               value: numbersOnlyRegex,
//               message: '*Please enter a valid phone number',
//             },
//           }}
//         />
//       </View>

//       <View style={styles.buttons}>
//         <PrimaryButton
//           handleOnPress={onPressBack}
//           text="Back"
//           isGhost={true}
//           color={Colors.brand500}
//         />
//         <PrimaryButton
//           handleOnPress={handleSubmit(onSubmit)}
//           text="Next"
//           isLoading={isLoading}
//         />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   headingTextStyle: {
//     ...AppFonts.H3Bold,
//   },
//   headingStyle: {},
//   container: {
//     flex: 1,
//     paddingHorizontal: widthToDp(32),
//     paddingVertical: heightToDp(48),
//     backgroundColor: Colors.neutrals100,
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   flexContainer: {
//     gap: heightToDp(24),
//   },
//   contentContainer: {
//     flex: 1,
//     marginTop: heightToDp(84),
//   },
//   textStyle: {...AppFonts.BodyBaseBold, textAlign: 'center'},
//   bottomContainer: {
//     gap: heightToDp(10),
//   },
//   labelContainer: {
//     width: '100%',
//     flex: 1,
//     justifyContent: 'center',
//   },

//   buttons: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     columnGap: widthToDp(11),
//     marginHorizontal: widthToDp(32),
//   },
// });

// export default RegisterPhoneScreen;
