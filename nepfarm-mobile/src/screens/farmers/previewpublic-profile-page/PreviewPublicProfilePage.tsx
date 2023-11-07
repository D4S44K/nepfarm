// import React from 'react';

// import {SampleNavigation} from 'components';
// import {MainAppRoutes} from 'routes/MainNavigator';
// import {AuthAppRoutes} from 'routes/AuthNavigator';

// const PreviewPublicProfilePage = ({navigation}: any) => {
//   const onPressNext = () => {
//     navigation.navigate('Main', {screen: MainAppRoutes.BottomTab});
//   };

//   const onPressBack = () => {
//     navigation.navigate('Auth', {screen: AuthAppRoutes.MiddlePublicProfile});
//   };

//   return (
//     <SampleNavigation
//       name={AuthAppRoutes.PreviewPublicProfile}
//       handleOnPressNext={onPressNext}
//       handleOnPressBack={onPressBack}
//     />
//   );
// };

// export default PreviewPublicProfilePage;

import React from 'react';

import {PrimaryButton, Tag} from 'components';
import {AuthAppRoutes} from 'routes/AuthNavigator';
import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppFonts, axiosInstance} from '@nepfarm/constants';
import {Colors} from '@nepfarm/constants';
import {getError, heightToDp, widthToDp} from 'utils';
// import {useForm} from 'react-hook-form';
import {LargeBlankImage} from 'assets';
import {MainAppRoutes} from 'routes/MainNavigator';
import {isLoginFailure, isLoginInit, isLoginSuccess} from 'custom-redux/slices';
import {useForm} from 'react-hook-form';

// interface ProduceTags {
//   products: Array<number>;
// }

const PreviewPublicProfilePage = ({navigation}: any) => {
  const userType = useSelector(
    (state: any) => state.user.registrationDetails.type,
  );
  const isFarmer = userType === 'farmer';
  console.log('is farmer? ', isFarmer);
  console.log('userType: ', userType);
  const fullUserData = useSelector(
    (state: any) => state.user.registrationDetails,
  );
  console.log('fullUserData: ', fullUserData);
  const onPressNext = () => {
    // navigation.navigate('Main', {screen: MainAppRoutes.BottomTab});
  };

  const onPressBack = () => {
    navigation.navigate('Auth', {screen: AuthAppRoutes.MiddlePublicProfile});
  };

  const dispatch = useDispatch();

  const {control, handleSubmit} = useForm();

  // const onSubmit = async () => {
  //   // dispatch(profile(values));
  //   onPressNext();
  // };
  const handleSignup = async () => {
    try {
      dispatch(isLoginInit());
      console.log('this is full userdata: ', {user: {fullUserData}});
      // const res = await axiosInstance.post(
      //   '/signup_farmer',
      //   {user: {fullUserData}},
      //   {
      //     headers: {'content-type': 'multipart/form-data'},
      //   },
      // );
      const postData = {
        user: {
          ...(fullUserData.emailAddress
            ? {email: fullUserData.emailAddress}
            : {}),
          full_name: fullUserData.fullName || '',
          phone_number: fullUserData.phoneNumber || '',
          password: fullUserData.password || '',
          address: fullUserData.address || '',
          profile_attributes: {
            profile_picture: '',
            // description: fullUserData.description || '',
          },
        },
        public_profile_attributes: {
          produce_list: [],
          description: fullUserData.description || '',
        },
      };
      console.log(postData);

      const res = await axiosInstance.post('/signup_farmer', postData);

      console.log('res: ', res, res.data);
      dispatch(isLoginSuccess(res.data));
      onPressNext();
    } catch (error: any) {
      Alert.alert('Error! ', getError(error) || 'Unknown error');

      dispatch(isLoginFailure(getError(error) || 'Unknown error'));
    }
  };

  const onSubmit = async () => {
    console.log('here');
    // dispatch(updateFar(values));
    console.log('now here');
    if (isFarmer) {
      handleSignup();
      console.log('inside');
    } else {
      console.log('onwards!');
      onPressNext();
    }
  };

  return (
    // <SampleNavigation
    //   name={AuthAppRoutes.MiddlePublicProfile}
    //   handleOnPressNext={onPressNext}
    //   handleOnPressBack={onPressBack}
    // />

    <ScrollView contentContainerStyle={styles.container}>
      <View style={{gap: widthToDp(18), flex: 1}}>
        <View style={styles.headingStyle}>
          <Text style={styles.headingTextStyle}>
            Setting up your Public Profile
          </Text>
          {/* <Text style={styles.helpTextStyle}>
          What product do you sell? Search for them below and click on the
          corresponding tag. This will be shown on your profile.
        </Text> */}
          {/* <Label
          text={''}
          defaultText={'Search for tags below'}
          name={'search'}
          control={control}
        /> */}
          <View style={styles.imageStyling}>
            <LargeBlankImage />
            <Text style={styles.helpTextStyle}> Farmer Name </Text>
          </View>
        </View>
        {/* <View>
        <Label
          text={''}
          defaultText={'Search for tags below'}
          name={'search'}
          control={control}
        />
      </View> */}
        <View style={{gap: heightToDp(12)}}>
          <Text style={AppFonts.BodyLargeBold}>Description from Farmer</Text>
          <Text
            style={{color: Colors.neutrals600, ...AppFonts.BodyLargeRegular}}>
            {fullUserData.description}
            {/* {' '}
            My produce is guaranteed fresh and delivered within 2 business days
            to your door. Be sure to give it a try for the highest quality
            vegetables in Lalitpur!{' '} */}
          </Text>
        </View>
        <View style={styles.tagsStyling}>
          <Tag
            isClickable={true}
            text={'Asparagus'}
            xColor={Colors.secondary900}
            textColor={Colors.secondary900}
            customTagStyle={{
              backgroundColor: Colors.secondary100,
              borderColor: Colors.secondary100,
              borderWidth: widthToDp(2),
            }}
          />
          <Tag
            isClickable={true}
            text={'Bell Pepper'}
            xColor={Colors.secondary900}
            textColor={Colors.secondary900}
            customTagStyle={{
              backgroundColor: Colors.secondary100,
              borderColor: Colors.secondary100,
              borderWidth: widthToDp(2),
            }}
          />
          <Tag
            isClickable={true}
            text={'Beans'}
            xColor={Colors.secondary900}
            textColor={Colors.secondary900}
            customTagStyle={{
              backgroundColor: Colors.secondary100,
              borderColor: Colors.secondary100,
              borderWidth: widthToDp(2),
            }}
          />
        </View>
      </View>
      <View style={styles.buttons}>
        <PrimaryButton
          handleOnPress={onPressBack}
          text="Back"
          isGhost={true}
          color={Colors.brand500}
        />
        <PrimaryButton handleOnPress={handleSubmit(onSubmit)} text="Finish" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageStyling: {
    alignItems: 'center',
    gap: widthToDp(0),
    marginBottom: heightToDp(16),
  },
  helpTextStyle: {
    ...AppFonts.BodyLargeBold,
    color: Colors.black,
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
    alignItems: 'center',
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
  tagsStyling: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: widthToDp(8),
  },
});

export default PreviewPublicProfilePage;
