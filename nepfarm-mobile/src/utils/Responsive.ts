import {Dimensions, PixelRatio} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const {width, height} = Dimensions.get('window');

const widthPercentToDp = (value: string | number) => {
  let givenWidth = typeof value === 'number' ? value : parseFloat(value);

  return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
};

const heightPercentToDp = (value: string | number) => {
  let givenHeight = typeof value === 'number' ? value : parseFloat(value);

  return PixelRatio.roundToNearestPixel((height * givenHeight) / 100);
};

// Actual figma screen res. is 414x896
const widthToDp = (value: number) => {
  return widthPercentToDp(`${(value / 390) * 100}%`);
};

const heightToDp = (value: number) => {
  return heightPercentToDp(`${(value / 845) * 100}%`);
};

const widthPercentOfDevice = (value: string | number) => {
  let givenWidth = typeof value === 'number' ? value : parseFloat(value);

  return (width * givenWidth) / 100;
};

const heightPercentOfDevice = (value: string | number) => {
  let givenWidth = typeof value === 'number' ? value : parseFloat(value);

  return (width * givenWidth) / 100;
};

export {
  width,
  height,
  widthToDp,
  heightToDp,
  widthPercentToDp,
  heightPercentToDp,
  screenHeight,
  screenWidth,
  widthPercentOfDevice,
  heightPercentOfDevice,
};
