import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from '../assets/styles';

const EditButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.miniButton}
      onPress={() => navigation.navigate('EditScreen')}
    >
      {/* <Text style={styles.filgersText}> */}
      <FontAwesome name="edit" size={22} color="gray" />
      {/* </Text> */}
    </TouchableOpacity>
  );
};

export default EditButton;
