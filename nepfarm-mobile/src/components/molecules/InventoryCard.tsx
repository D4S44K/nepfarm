import React, {FC} from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  Image,
} from 'react-native';

import {heightToDp, width, widthToDp} from '@nepfarm/utils';
import {AppFonts, Colors} from '@nepfarm/constants';
import {StyleProp} from 'react-native';
import {BlankImage, XOutSVG} from 'assets';
import {Svg} from 'react-native-svg';
import {PrimaryButton, Tag, TagSizesEnum} from 'components/atoms';
import {format} from 'date-fns';
import {Images} from 'assets';
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

export enum UnitsEnum {
  g = 'g',
  kg = 'kg',
  cwt = 'cwt',
}

interface InventoryCardProps {
  productName: string;
  productQuantity: number;
  productUnit: UnitsEnum;
  //   image?: Svg;
  //   userName: string;
  //   productTags: Array<string>;
  // distance:
}

// const convertStringsToTag = (tagArray: Array<string>) => {
//     tagArray.map((tag: string) => {
//         <Tag></Tag>
//     })
// };

// const windowWidth = Dimensions.get('window').width;
// const ratio = 122 / 256;
// const windowHeight = windowWidth * ratio;

const InventoryCard: FC<InventoryCardProps> = ({
  productName = 'Chicken McChicken',
  productQuantity = 100,
  productUnit = UnitsEnum.kg,
  //   image = BlankImage,
  // ...custom
}) => {
  return (
    <View style={styles.container}>
      <Image source={Images.zucchiniSample} />
      <View style={styles.textContainer}>
        <Text style={styles.productText}>{productName}</Text>
        <View style={styles.amountContainer}>
          <Text style={styles.quantityStyle}>{productQuantity}</Text>
          <Text style={styles.quantityStyle}>{productUnit}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quantityStyle: {
    ...AppFonts.BodyBaseBold,
    color: Colors.neutrals500,
  },
  amountContainer: {
    flexDirection: 'row',
    gap: widthToDp(2),
    color: Colors.neutrals500,
    ...AppFonts.BodyBaseBold,
  },
  productText: {
    ...AppFonts.BodyBaseBold,
    color: Colors.neutrals800,
  },
  textContainer: {
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    gap: heightToDp(12),
  },
  tagBackground: {
    borderRadius: widthToDp(16),
    backgroundColor: Colors.white,
    flex: 1,
    paddingVertical: heightToDp(12),
    paddingHorizontal: widthToDp(16),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    // padding: 12px 16px;
    // flex-direction: column;
    // justify-content: center;
    // align-items: flex-start;
    // align-self: stretch;
  },
  nameDateGroup: {
    flexDirection: 'column',
    gap: heightToDp(0),
  },
  name: {
    ...AppFonts.BodyLargeBold,
    color: Colors.brand900,
  },
  dateTime: {
    ...AppFonts.BodySmallBold,
    color: Colors.neutrals500,
  },
  tagStyling: {
    marginTop: heightToDp(12),
    flexDirection: 'row',
  },
});

export default InventoryCard;
