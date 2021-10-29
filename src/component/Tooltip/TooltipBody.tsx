import React from 'react';
import {View, Modal, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import {Measure} from './types';

interface TooltipProps {
  children: React.ReactNode;
  isVisible: boolean;
  onDismiss: () => void;
  measure: Measure;
  height: number;
}

function Tooltip({
  isVisible,
  onDismiss,
  children,
  measure,
  height,
}: TooltipProps) {
  console.log('Measure', measure);

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      onRequestClose={onDismiss}
      animationType="none">
      <TouchableWithoutFeedback onPress={onDismiss}>
        <View style={styles({y: measure.y, height: height}).modalOverlay} />
      </TouchableWithoutFeedback>

      <View style={styles({height: height, y: measure.y}).contentModal}>
        <View style={styles({}).borderChildren}>
          <View style={styles({x: measure.x, isTop: measure.isTop}).triangle} />
          <View
            style={styles({x: measure.x, isTop: measure.isTop}).triangle2}
          />

          {children}
        </View>
      </View>
    </Modal>
  );
}

export default Tooltip;
