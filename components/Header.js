import React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { BlurView } from 'expo-blur';
import FilterButton from './FilterButton';
import { PRIMARY_COLOR } from '../assets/styles';

const MyHeader = () => {
  return (
    <Header
      // placement="left"
      // ViewComponent={() => (
      //   <BlurView tint="light" intensity={0} style={StyleSheet.absoluteFill} />
      // )}
      containerStyle={{
        backgroundColor: '#eee9',
        justifyContent: 'center',
        // opacity: 0.2,
        alignItems: 'center',
      }}
      // leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{
        text: 'Zalma',
        style: {
          color: PRIMARY_COLOR,
          fontSize: 32,
          fontWeight: 'bold',
          // backgroundColor: '#fff',
        },
      }}
      rightComponent={() => <FilterButton />}
    >
      <BlurView intensity={100} style={[StyleSheet.absoluteFill]} />
    </Header>
  );
};

export default MyHeader;
