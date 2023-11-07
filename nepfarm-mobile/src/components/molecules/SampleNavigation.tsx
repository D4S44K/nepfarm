import {View, Text, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {PrimaryButton} from 'components';
import {Colors} from '@nepfarm/constants';

interface SampleNavigationProps {
  name?: string;
  handleOnPressNext: () => void;
  handleOnPressBack: () => void;
}

const SampleNavigation: FC<SampleNavigationProps> = ({
  name = '',
  handleOnPressNext,
  handleOnPressBack,
}) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>

      <View style={styles.buttons}>
        <PrimaryButton handleOnPress={handleOnPressBack} text="Back" />
        <PrimaryButton handleOnPress={handleOnPressNext} text="Next" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.brand100,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: '10%',
  },
});

export default SampleNavigation;
