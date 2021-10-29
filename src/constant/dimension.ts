import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

console.log('whai ', height, width);
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

export const SCREEN_HEIGHT = longDimension;
export const SCREEN_WIDTH = shortDimension;

const STANDARD_WINDOW = {width: 375, height: 667}; // iphone 6

export const responsiveWidth = (size: number) =>
  (shortDimension / STANDARD_WINDOW.width) * size;

export const responsiveHeight = (size: number) =>
  (longDimension / STANDARD_WINDOW.height) * size;

export const responsiveFont = (size: number, factor: number = 0.5) =>
  size + (responsiveWidth(size) - size) * factor;
