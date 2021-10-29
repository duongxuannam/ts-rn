import {responsiveWidth} from 'constant/dimension';
import {StyleSheet} from 'react-native';

interface IPropStyle {
  x?: number;
  y?: number;
  heightDropdown?: number;
  isTop?: boolean;
}

const styles = ({y = 0, heightDropdown = 0}: IPropStyle) =>
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
      height: heightDropdown,
    },
    borderChildren: {
      backgroundColor: 'lightblue',
      position: 'relative',
      height: '100%',
      width: '100%',
      borderColor: 'brown',
      borderWidth: 1,
    },
  });
export default styles;
