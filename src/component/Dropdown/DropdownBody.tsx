import React from 'react';
import {View, Modal, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import {Measure} from './types';

interface DropdownBodyProps {
  children: React.ReactNode;
  isVisible: boolean;
  onDismiss: () => void;
  measure: Measure;
  heightDropdown: number;
}

function DropdownBody({
  isVisible,
  onDismiss,
  children,
  measure,
  heightDropdown,
}: DropdownBodyProps) {
  console.log('Measure', measure);

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      onRequestClose={onDismiss}
      animationType="none">
      <TouchableWithoutFeedback onPress={onDismiss}>
        <View
          style={
            styles({y: measure.y, heightDropdown: heightDropdown}).modalOverlay
          }
        />
      </TouchableWithoutFeedback>

      <View
        style={
          styles({heightDropdown: heightDropdown, y: measure.y}).contentModal
        }>
        <View style={styles({}).borderChildren}>{children}</View>
      </View>
    </Modal>
  );
}

export default DropdownBody;
