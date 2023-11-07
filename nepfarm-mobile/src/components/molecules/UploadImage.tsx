import React, {FC} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import {heightToDp, width, widthToDp} from '@nepfarm/utils';
import {AppFonts, Colors} from '@nepfarm/constants';
import {StyleProp} from 'react-native';
import {BlankImage, XOutSVG} from 'assets';
import {Svg} from 'react-native-svg';
import {PrimaryButton, Tag} from 'components/atoms';

// export enum TagSizesEnum {
//   base = 'base',
//   small = 'small',
//   large = 'large',
// }

// const TagSizesView = StyleSheet.create({
//   base: {
//     paddingHorizontal: widthToDp(12),
//     paddingVertical: heightToDp(4),
//     // AppFonts.BodyLargeRegular,
//     borderRadius: widthToDp(25),
//     fontSize: 25,
//   },

//   small: {
//     paddingHorizontal: widthToDp(8),
//     paddingVertical: heightToDp(3),
//     ...AppFonts.BodySmallBold,
//     borderRadius: widthToDp(25),
//   },

//   large: {
//     padding: widthToDp(16),
//     width: widthToDp(183),
//     ...AppFonts.BodyLargeRegular,
//     borderRadius: widthToDp(15),
//   },
// });

// const TagSizesText = StyleSheet.create({
//   base: {
//     ...AppFonts.BodyLargeRegular,
//   },

//   small: {
//     ...AppFonts.BodySmallBold,
//   },

//   large: {
//     ...AppFonts.BodyLargeRegular,
//   },
// });

// interface TagProps {
//   text: string;
//   color?: string;
//   textColor?: string;
//   isGhost?: boolean;
//   customTagStyle?: StyleProp<ViewStyle>;
//   customTitleStyle?: StyleProp<TextStyle>;
//   isClickable?: boolean;
//   size?: TagSizesEnum;
//   xColor?: string;
// }

interface UploadImageProps {
  //   image?: Svg;
}
// const windowWidth = Dimensions.get('window').width;
// const ratio = 122 / 256;
// const windowHeight = windowWidth * ratio;
const UploadImage: FC<UploadImageProps> = (
  {
    //   image = BlankImage,
    // ...custom
  },
) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageStyling}>
        <BlankImage />
      </View>
      <View>
        <Tag text="Update" isClickable={false} />
      </View>
    </View>
    // <View>
    //   <Text>
    //     title={text}
    //     titleStyle=
    //     {[
    //       isGhost ? styles.buttonTextGhost : styles.buttonTextFilled,
    //       customTitleStyle,
    //     ]}
    //   </Text>
    //   buttonStyle=
    //   {[
    //     styles.container,
    //     {
    //       borderColor: color,
    //       backgroundColor: isGhost ? 'transparent' : color,
    //     },
    //     customButtonStyle,
    //   ]}
    //   {/* {isGhost
    //     ? [
    //         styles.container,
    //         {borderColor: color, backgroundColor: 'transparent'},
    //         customButtonStyle,
    //       ]
    //     : [
    //         styles.container,
    //         {borderColor: color, backgroundColor: color},
    //         customButtonStyle,
    //       ]} */}
    //   activeOpacity={0.7}
    //   {/* {...custom} */}
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: widthToDp(-16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyling: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    gap: widthToDp(10),
    justifyContent: 'center',
    paddingVertical: heightToDp(106),
    backgroundColor: Colors.white,
    borderColor: Colors.neutrals200,
    borderWidth: widthToDp(2),
    borderRadius: widthToDp(10),
  },
});

export default UploadImage;
