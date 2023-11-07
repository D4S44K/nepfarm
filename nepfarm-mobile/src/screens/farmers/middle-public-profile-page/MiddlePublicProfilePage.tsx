import React from 'react';

import {Label, PrimaryButton, SampleNavigation, Tag} from 'components';
import {AuthAppRoutes} from 'routes/AuthNavigator';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {AppFonts} from '@nepfarm/constants';
import {Colors} from '@nepfarm/constants';
import {heightToDp, widthToDp} from 'utils';
import {useForm} from 'react-hook-form';
import {updateFarmerProfileTags} from 'custom-redux/slices';

interface ProduceTags {
  products: Array<number>;
}

const MiddlePublicProfilePage = ({navigation}: any) => {
  const onPressNext = () => {
    navigation.navigate('Auth', {screen: AuthAppRoutes.PreviewPublicProfile});
  };

  const onPressBack = () => {
    navigation.navigate('Auth', {screen: AuthAppRoutes.StartPublicProfile});
  };

  const dispatch = useDispatch();

  const {control, handleSubmit} = useForm();

  const onSubmit = async (values: ProduceTags) => {
    dispatch(updateFarmerProfileTags(values));
    onPressNext();
  };

  return (
    // <SampleNavigation
    //   name={AuthAppRoutes.MiddlePublicProfile}
    //   handleOnPressNext={onPressNext}
    //   handleOnPressBack={onPressBack}
    // />

    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headingStyle}>
        <Text style={styles.headingTextStyle}>
          Setting up your Public Profile
        </Text>
        <Text style={styles.helpTextStyle}>
          What product do you sell? Search for them below and click on the
          corresponding tag. This will be shown on your profile.
        </Text>
        <Label
          text={''}
          defaultText={'Search for tags below'}
          name={'search'}
          control={control}
        />
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
            // color={Colors.secondary100}
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
      {/* <View>
        <Label
          text={''}
          defaultText={'Search for tags below'}
          name={'search'}
          control={control}
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
  tagsStyling: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: widthToDp(8),
  },
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
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
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

export default MiddlePublicProfilePage;

// import React from 'react';

// import {PrimaryButton, SampleNavigation} from 'components';
// import {AuthAppRoutes} from 'routes/AuthNavigator';
// import UploadImage from 'components/molecules/UploadImage';
// import {ScrollView, StyleSheet, Text, View} from 'react-native';
// import {heightToDp, widthToDp} from 'utils';
// import {AppFonts} from '@nepfarm/constants';
// import {Colors} from '@nepfarm/constants';
// import {Label} from 'components';
// import {useForm} from 'react-hook-form';
// import {useDispatch} from 'react-redux';

// interface ProfileSetupOne {
//   image: string;
//   description: string;
// }

// const StartPublicProfilePage = ({navigation}: any) => {
//   const dispatch = useDispatch();

//   const onPressNext = () => {
//     navigation.navigate('Auth', {screen: AuthAppRoutes.MiddlePublicProfile});
//   };

//   const onPressBack = () => {
//     navigation.navigate('Auth', {screen: AuthAppRoutes.RegisterPersonalInfo});
//   };

//   const {control, handleSubmit} = useForm();

//   const onSubmit = async (values: ProfileSetupOne) => {
//     // dispatch(profile(values));
//     onPressNext();
//   };

//   return (
//     // <SampleNavigation
//     //   name={AuthAppRoutes.StartPublicProfile}
//     //   handleOnPressNext={onPressNext}
//     //   handleOnPressBack={onPressBack}
//     // />
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.headingStyle}>
//         <Text style={styles.headingTextStyle}>Farmer Registration</Text>
//         <Text style={styles.helpTextStyle}>
//           This is shown to prospective consumers when they click on your name
//           for more information about your farm and produce.
//         </Text>
//       </View>
//       <View style={styles.uploadContainer}>
//         <Text style={AppFonts.BodyBaseBold}>Upload a profile picture</Text>
//         <UploadImage />
//       </View>
//       <Label
//         text={'Add a description about your farm'}
//         isMultiline={true}
//         defaultText={
//           'What is the history of your farm? How do you guarantee freshness? Why should consumers choose you?'
//         }
//         control={control}
//         name={''}
//       />
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
//   helpTextStyle: {
//     ...AppFonts.BodyLargeRegular,
//     color: Colors.neutrals500,
//   },
//   loadingContainer: {
//     flex: 1,
//   },
//   uploadContainer: {
//     gap: heightToDp(5),
//     flexDirection: 'column',
//     justifyContent: 'center',
//     // alignItems: 'flex-start',
//     alignSelf: 'stretch',
//   },
//   container: {
//     flex: 1,
//     paddingHorizontal: widthToDp(32),
//     paddingVertical: heightToDp(48),
//     justifyContent: 'space-between',
//     // gap: heightToDp(5),
//     // flexDirection: 'column',
//     // // justifyContent: 'center',
//     // // alignItems: 'flex-start',
//     // alignSelf: 'stretch',
//   },
//   flexContainer: {
//     gap: heightToDp(24),
//   },
//   contentContainer: {
//     flex: 1,
//     justifyContent: 'space-between',
//     marginTop: heightToDp(84),
//   },
//   textStyle: {...AppFonts.BodyBaseBold, textAlign: 'center'},
//   bottomContainer: {
//     gap: heightToDp(10),
//   },

//   headingTextStyle: {
//     ...AppFonts.H3Bold,
//   },
//   headingStyle: {
//     gap: heightToDp(10),
//   },
//   // container: {
//   //   flex: 1,
//   //   paddingHorizontal: widthToDp(32),
//   //   paddingVertical: heightToDp(48),
//   //   backgroundColor: Colors.neutrals100,
//   //   alignItems: 'center',
//   //   justifyContent: 'space-between',
//   // },
//   // flexContainer: {
//   //   gap: heightToDp(24),
//   // },
//   // contentContainer: {
//   //   flex: 1,
//   //   marginTop: heightToDp(84),
//   // },
//   // textStyle: {...AppFonts.BodyBaseBold, textAlign: 'center'},
//   // bottomContainer: {
//   //   gap: heightToDp(10),
//   // },
//   labelContainer: {
//     width: '100%',
//     flex: 1,
//     justifyContent: 'center',
//   },

//   buttons: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     columnGap: widthToDp(11),
//     marginHorizontal: widthToDp(32),
//   },
// });

// export default StartPublicProfilePage;
