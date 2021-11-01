import {SCREEN_HEIGHT} from 'constant/dimension';
import {useRef, useState} from 'react';
import {defaultMeasure, Measure} from './types';

const TOOLTIP_HEIGHT = 100;

const useTooltip = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [measureChildren, setMeasureChildren] =
    useState<Measure>(defaultMeasure);

  const onDismiss = () => setIsVisible(false);

  const onPress = () => {
    childrenRef?.current?.measure(
      (_: number, __: number, w: number, h: number, px: number, py: number) => {
        if (SCREEN_HEIGHT < py + h + TOOLTIP_HEIGHT + 10) {
          setMeasureChildren({
            x: px,
            y: py - 10 - TOOLTIP_HEIGHT,
            width: w,
            height: h,
            isTop: true,
          });
        } else {
          setMeasureChildren({
            x: px,
            y: py + h + 10,
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
    tooltipHeight: TOOLTIP_HEIGHT,
  };
};

export default useTooltip;
