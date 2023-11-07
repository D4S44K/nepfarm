import React, {BaseSyntheticEvent, FC} from 'react';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {Button} from '@rneui/themed';
import {heightToDp, widthToDp} from '@nepfarm/utils';
import {AppFonts, Colors} from '@nepfarm/constants';
import {StyleProp} from 'react-native';

interface PrimaryButtonProps {
  text: string;
  color?: string;
  textColor?: string;
  isGhost?: boolean;
  customButtonStyle?: StyleProp<ViewStyle>;
  customTitleStyle?: StyleProp<TextStyle>;
  handleOnPress: () => void;
  isLoading?: boolean;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  text = '',
  color = Colors.brand300,
  customButtonStyle = {},
  customTitleStyle = {},
  handleOnPress = () => {},
  isGhost = false,
  isLoading = false,
  ...custom
}) => {
  return (
    <Button
      title={text}
      onPress={handleOnPress}
      titleStyle={[
        isGhost ? styles.buttonTextGhost : styles.buttonTextFilled,
        customTitleStyle,
      ]}
      loading={isLoading}
      buttonStyle={[
        styles.container,
        {borderColor: color, backgroundColor: isGhost ? 'transparent' : color},
        customButtonStyle,
      ]}
      activeOpacity={0.7}
      {...custom}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: heightToDp(16),
    alignItems: 'center',
    borderRadius: widthToDp(12),
    borderWidth: widthToDp(2),
  },
  buttonTextFilled: {
    ...AppFonts.BodyBaseBold,
    color: Colors.brand900,
  },
  buttonTextGhost: {
    ...AppFonts.BodyBaseBold,
    color: Colors.brand500,
  },
});

export default PrimaryButton;
