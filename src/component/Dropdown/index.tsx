import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import DropdownBody from './DropdownBody';
import useDropdown from './hook';
import {DropdownProps} from './types';

function Dropdown({children}: DropdownProps) {
  const {
    childrenRef,
    onDismiss,
    onPress,
    isVisible,
    measureChildren,
    dropdownHeight,
  } = useDropdown();
  return (
    <>
      <View ref={childrenRef}>
        <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
      </View>

      {isVisible && (
        <DropdownBody
          heightDropdown={dropdownHeight}
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
        </DropdownBody>
      )}

      {/* )} */}
    </>
  );
}

export default Dropdown;
