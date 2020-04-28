import React from 'react';
import { Button, Text, View } from 'react-native';

const SlideModal = ({ navigation }) => {
  return (
    // <Modal
    //   isVisible={isModalVisible}
    //   animationIn="slideInRight"
    //   animationOut="slideOutRight"
    // >
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello!</Text>
      <Button title="Hide modal" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SlideModal;
