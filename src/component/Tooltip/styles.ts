import {responsiveWidth} from 'constant/dimension';
import {StyleSheet} from 'react-native';

interface IPropStyle {
  x?: number;
  y?: number;
  height?: number;
  isTop?: boolean;
}

const styles = ({x = 0, y = 0, height = 0, isTop = false}: IPropStyle) =>
  StyleSheet.create({
    modalOverlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.1)',
    },
    contentModal: {
      position: 'absolute',
      top: y,
      left: responsiveWidth(20),
      right: responsiveWidth(20),
      minHeight: height,
    },
    borderChildren: {
      backgroundColor: 'lightblue',
      position: 'relative',
      height: '100%',
      width: '100%',
      borderColor: 'brown',
      borderWidth: 1,
    },
    triangle: {
      width: 10,
      height: 10,
      position: 'absolute',
      bottom: isTop ? -10 : undefined,
      top: !isTop ? -10 : undefined,
      left: x < 20 ? 20 : x - responsiveWidth(18),
      borderLeftWidth: 10,
      borderLeftColor: 'transparent',
      borderRightWidth: 10,
      borderRightColor: 'transparent',
      borderTopWidth: isTop ? 10 : undefined,
      borderTopColor: isTop ? 'brown' : 'transparent',
      borderBottomWidth: !isTop ? 10 : undefined,
      borderBottomColor: !isTop ? 'brown' : 'transparent',
    },
    triangle2: {
      width: 10,
      height: 10,
      position: 'absolute',
      bottom: isTop ? -10 : undefined,
      top: !isTop ? -10 : undefined,
      left: x < 20 ? 21 : x + 1 - responsiveWidth(18),
      borderLeftWidth: 9,
      borderLeftColor: 'transparent',
      borderRightWidth: 9,
      borderRightColor: 'transparent',
      borderTopWidth: isTop ? 9 : undefined,
      borderTopColor: isTop ? 'lightblue' : 'transparent',
      borderBottomWidth: !isTop ? 9 : undefined,
      borderBottomColor: !isTop ? 'lightblue' : 'transparent',
    },
  });
export default styles;
