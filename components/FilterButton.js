import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from '../assets/styles';

const FilterButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.miniButton}
      onPress={() => navigation.navigate('FiltersScreen')}
    >
      {/* <Text style={styles.filgersText}> */}
      <FontAwesome name="filter" size={22} color="gray" />
      {/* </Text> */}
    </TouchableOpacity>
  );
};

export default FilterButton;
