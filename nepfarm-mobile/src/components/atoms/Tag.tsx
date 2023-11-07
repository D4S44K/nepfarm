import React, {FC} from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';

import {heightToDp, widthToDp} from '@nepfarm/utils';
import {AppFonts, Colors} from '@nepfarm/constants';
import {StyleProp} from 'react-native';
import {XOutSVG} from 'assets';

export enum TagSizesEnum {
  base = 'base',
  small = 'small',
  large = 'large',
}

const TagSizesView = StyleSheet.create({
  base: {
    paddingHorizontal: widthToDp(12),
    paddingVertical: heightToDp(4),
    // AppFonts.BodyLargeRegular,
    borderRadius: widthToDp(25),
    fontSize: 25,
  },

  small: {
    paddingHorizontal: widthToDp(8),
    paddingVertical: heightToDp(3),
    ...AppFonts.BodySmallBold,
    borderRadius: widthToDp(25),
  },

  large: {
    padding: widthToDp(16),
    width: widthToDp(183),
    ...AppFonts.BodyLargeRegular,
    borderRadius: widthToDp(15),
  },
});

const TagSizesText = StyleSheet.create({
  base: {
    ...AppFonts.BodyLargeRegular,
  },

  small: {
    ...AppFonts.BodySmallBold,
  },

  large: {
    ...AppFonts.BodyLargeRegular,
  },
});

interface TagProps {
  text: string;
  color?: string;
  textColor?: string;
  isGhost?: boolean;
  customTagStyle?: StyleProp<ViewStyle>;
  customTitleStyle?: StyleProp<TextStyle>;
  isClickable?: boolean;
  size?: TagSizesEnum;
  xColor?: string;
}

const Tag: FC<TagProps> = ({
  text = '',
  color = Colors.brand100,
  textColor = Colors.brand900,
  customTagStyle = {},
  customTitleStyle = {},
  isGhost = false,
  isClickable = true,
  xColor = Colors.brand700,
  size = TagSizesEnum.base,
  // ...custom
}) => {
  return (
    <View
      style={[
        isGhost ? styles.buttonTextGhost : styles.buttonTextFilled,
        size === TagSizesEnum.base
          ? TagSizesView.base
          : size === TagSizesEnum.large
          ? TagSizesView.large
          : TagSizesView.small,
        styles.container,
        customTagStyle,
      ]}>
      <Text
        style={[
          customTitleStyle,
          {color: textColor, fontSize: 25},
          size === TagSizesEnum.base
            ? TagSizesText.base
            : size === TagSizesEnum.large
            ? TagSizesText.large
            : TagSizesText.small,
        ]}>
        {text}
      </Text>
      <View>{isClickable ? <XOutSVG stroke={xColor} /> : null}</View>
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
  // tagContainer: {
  //   flexDirection: 'row',
  //   flex: 1,
  // },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
  },
  buttonTextFilled: {
    // ...AppFonts.BodyBaseBold,
    // color: Colors.brand900,
    backgroundColor: Colors.brand300,
    borderColor: Colors.brand300,
    borderWidth: widthToDp(2),
  },
  buttonTextGhost: {
    // ...AppFonts.BodyBaseBold,
    // color: Colors.brand900,
    backgroundColor: 'transparent',
    borderColor: Colors.brand500,
    borderWidth: widthToDp(2),
  },
});

export default Tag;
