import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import TooltipBody from './TooltipBody';
import useTooltip from './hook';
import {TooltipProps} from './types';

function Tooltip({children}: TooltipProps) {
  const {
    childrenRef,
    onDismiss,
    onPress,
    isVisible,
    measureChildren,
    tooltipHeight,
  } = useTooltip();
  return (
    <>
      <View collapsable={false} ref={childrenRef}>
        <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
      </View>

      {isVisible && (
        <TooltipBody
          height={tooltipHeight}
          measure={measureChildren}
          isVisible={isVisible}
          onDismiss={onDismiss}>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
        </TooltipBody>
      )}

      {/* )} */}
    </>
  );
}

export default Tooltip;
