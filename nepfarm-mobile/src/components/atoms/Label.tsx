import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {height, heightToDp, width, widthToDp} from '@nepfarm/utils';
import {AppFonts, Colors} from '@nepfarm/constants';
import {StyleProp, TextInput} from 'react-native';
import {EyeSVG, PhoneSVG, NoEyeSVG} from 'assets';
import {Control, Controller} from 'react-hook-form';

export enum InputType {
  Decimal = 'decimal',
  Email = 'email',
  None = 'none',
  Numeric = 'numeric',
  Search = 'search',
  Telephone = 'tel',
  Text = 'text',
  URL = 'url',
}

export enum FormType {
  Password = 'password',
  Telephone = 'telephone',
  Default = 'default',
}

interface LabelProps {
  text: string;
  defaultText: string;
  formColor?: string;
  labelColor?: string;
  defaultColor?: string;
  customLabelStyle?: StyleProp<ViewStyle>;
  customFormStyle?: StyleProp<ViewStyle>;
  inputType?: InputType;
  formType?: FormType;
  hasHelpText?: boolean;
  helpText?: string;
  control: Control | undefined;
  name: string;
  rules?: any;
  isMultiline?: boolean;
}

const Label: FC<LabelProps> = ({
  text = '',
  defaultText = '',
  formColor = Colors.white,
  labelColor = Colors.black,
  defaultColor = Colors.neutrals400,
  customLabelStyle = {},
  customFormStyle = {},
  inputType = InputType.Text,
  formType = FormType.Default,
  hasHelpText = false,
  isMultiline = false,
  helpText = '',
  control,
  name = '',
  rules = {},
  ...custom
}) => {
  const [isClicked, setClick] = useState(true);
  const changeClick = () => setClick(!isClicked);
  return (
    <Controller
      rules={rules}
      name={name}
      control={control}
      render={({field: {onChange, value}, fieldState: {error}}) => (
        <View style={styles.container}>
          <Text
            style={[{color: labelColor}, styles.labelText, customLabelStyle]}>
            {text}
          </Text>

          <View
            style={[
              formType === FormType.Password
                ? styles.formStylingEndIcon
                : styles.formStyling,
              customFormStyle,
            ]}>
            {formType === FormType.Telephone ? (
              <>
                <PhoneSVG style={styles.iconStyling} />
                <Text
                  style={[
                    {color: Colors.neutrals500},
                    {...AppFonts.BodyLargeRegular},
                  ]}>
                  +977
                </Text>
              </>
            ) : null}
            <TextInput
              multiline={isMultiline}
              // numberOfLines={isMultiline ? 5 : 1}
              maxLength={isMultiline ? 1000 : 20}
              value={value}
              onChangeText={onChange}
              inputMode={inputType}
              placeholder={defaultText}
              placeholderTextColor={defaultColor}
              style={(AppFonts.BodyLargeRegular, {flex: 1})}
              secureTextEntry={
                formType === FormType.Password ? isClicked : false
              }
              {...custom}
            />
            {formType === FormType.Password ? (
              isClicked ? (
                <NoEyeSVG style={styles.iconStyling} onPress={changeClick} />
              ) : (
                <EyeSVG style={styles.iconStyling} onPress={changeClick} />
              )
            ) : null}
          </View>

          {hasHelpText ? (
            <Text
              style={[
                {...AppFonts.BodyBaseRegular},
                {color: Colors.neutrals500},
              ]}>
              {helpText}
            </Text>
          ) : null}

          {error ? (
            <Text
              style={[
                {...AppFonts.BodyBaseRegular},
                {color: Colors.danger800},
              ]}>
              {error.message}
            </Text>
          ) : null}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  iconStyling: {
    width: widthToDp(24),
    height: heightToDp(24),
  },
  container: {
    width: '100%',
    paddingVertical: heightToDp(16),
    alignItems: 'flex-start',
    borderRadius: widthToDp(12),
    backgroundColor: Colors.neutrals100,
    gap: heightToDp(6),
  },
  formStyling: {
    width: '100%',
    borderRadius: widthToDp(16),
    paddingVertical: heightToDp(16),
    backgroundColor: Colors.white,
    flexDirection: 'row',
    gap: widthToDp(10),
    paddingHorizontal: widthToDp(24),
    alignItems: 'center',
    borderColor: Colors.neutrals200,
    borderWidth: widthToDp(2),
  },

  formStylingEndIcon: {
    width: '100%',
    borderRadius: widthToDp(16),
    paddingVertical: heightToDp(16),
    backgroundColor: Colors.white,
    flexDirection: 'row',
    gap: widthToDp(10),
    paddingHorizontal: widthToDp(24),
    alignItems: 'center',
    borderColor: Colors.neutrals200,
    borderWidth: widthToDp(2),
    justifyContent: 'space-between',
  },
  labelText: {
    ...AppFonts.BodyBaseBold,
    color: Colors.black,
  },
});

export default Label;
