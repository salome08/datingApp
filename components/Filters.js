import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../assets/styles';

import Icon from './Icon';

const Filters = () => {
  return (
    <TouchableOpacity style={styles.miniButton}>
      {/* <Text style={styles.filtersText}> */}
      <FontAwesome name="filter" size={24} color="gray" />
      {/* </Text> */}
    </TouchableOpacity>
  );
};

export default Filters;
