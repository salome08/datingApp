import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../assets/styles';

const CloseButton = (props) => {
  const { onPress } = props;
  return (
    <TouchableOpacity style={styles.miniButtonClose} onPress={onPress}>
      {/* <Text style={styles.filgersText}> */}
      <FontAwesome name="close" size={18} color="gray" />
      {/* </Text> */}
    </TouchableOpacity>
  );
};

export default CloseButton;
