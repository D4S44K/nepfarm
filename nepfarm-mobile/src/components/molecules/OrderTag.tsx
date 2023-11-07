import React, {FC} from 'react';
import {
  Dimensions,
  FlatList,
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
import {PrimaryButton, Tag, TagSizesEnum} from 'components/atoms';
import {format} from 'date-fns';
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

interface OrderTagProps {
  //   image?: Svg;
  userName: string;
  productTags: Array<string>;
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

const tagDisplay = (tag: string) => {};
const OrderTag: FC<OrderTagProps> = ({
  //   image = BlankImage,
  // ...custom
  userName = 'Chicken McChicken',
  productTags = ['Brussel Sprouts', 'Celery Sticks', 'Radish'],
}) => {
  const newProductTags = productTags.map((str, index) => ({
    id: index,
    title: str,
  }));

  const finalProductTags: Array<{id: number; title: string}> = [];
  if (newProductTags.length > 3) {
    finalProductTags[0] = newProductTags[0];
    finalProductTags[1] = newProductTags[1];
    finalProductTags[2] = {id: 2, title: '+' + (newProductTags.length - 2)};
  }
  const renderProductTag = ({item}) => (
    <View style={{paddingEnd: widthToDp(6)}}>
      <Tag
        text={item.title}
        size={TagSizesEnum.small}
        isGhost={true}
        customTagStyle={{borderColor: Colors.secondary100}}
        isClickable={false}
        textColor={Colors.secondary900}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tagBackground}>
        <View style={styles.nameDateGroup}>
          <Text style={styles.name}>{userName}</Text>
          <Text style={styles.dateTime}>
            {' '}
            {format(new Date(), "hh':'mmaa 'on' d LLL yyyy")}
          </Text>
        </View>
        <View style={styles.tagStyling}>
          <FlatList
            data={finalProductTags}
            renderItem={renderProductTag}
            keyExtractor={item => item.id}
            initialNumToRender={3}
            horizontal={true}
          />
          {/* <Tag
            text={'Brussel Sprouts'}
            size={TagSizesEnum.small}
            isGhost={true}
            customTagStyle={{borderColor: Colors.secondary100}}
            isClickable={false}
            textColor={Colors.secondary900}
            // customTitleStyle={{color: Colors.secondary900}}
          />
          <Tag
            text={'Celery Sticks'}
            size={TagSizesEnum.small}
            isGhost={true}
            customTagStyle={{borderColor: Colors.secondary100}}
            isClickable={false}
            textColor={Colors.secondary900}
            // customTitleStyle={{color: Colors.secondary900}}
          />
          <Tag
            text={'+2'}
            size={TagSizesEnum.small}
            isGhost={true}
            customTagStyle={{borderColor: Colors.secondary100}}
            isClickable={false}
            textColor={Colors.secondary900}
            // customTitleStyle={{color: Colors.secondary900}}
          /> */}
        </View>
      </View>
      {/* //     for(const tag of productTags)
        //   {
        //     <Tag text={tag} />
        //   } */}
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
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    gap: heightToDp(16),
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

export default OrderTag;
