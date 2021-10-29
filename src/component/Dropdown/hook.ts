import {SCREEN_HEIGHT} from 'constant/dimension';
import {useRef, useState} from 'react';
import {defaultMeasure, Measure} from './types';

const DROPDOWN_HEIGHT = 200;

const useDropdown = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [measureChildren, setMeasureChildren] =
    useState<Measure>(defaultMeasure);

  const onDismiss = () => setIsVisible(false);

  const onPress = () => {
    childrenRef?.current?.measure(
      (_: number, __: number, w: number, h: number, px: number, py: number) => {
        console.log(px);
        if (SCREEN_HEIGHT < py + h + DROPDOWN_HEIGHT + 10) {
          setMeasureChildren({
            x: px,
            y: py - 5 - DROPDOWN_HEIGHT,
            width: w,
            height: h,
            isTop: true,
          });
        } else {
          setMeasureChildren({
            x: px,
            y: py + h + 5,
            width: w,
            height: h,
          });
        }
      },
    );
    setIsVisible(preState => !preState);
  };

  const childrenRef = useRef<any>(null);

  return {
    childrenRef,
    onDismiss,
    onPress,
    measureChildren,
    isVisible,
    dropdownHeight: DROPDOWN_HEIGHT,
  };
};

export default useDropdown;
