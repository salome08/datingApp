import React from 'react';
import { ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../assets/styles';
import FiltersScreen from '../containers/FiltersScreen';
import MainStackScreen from './MainStackScreen';

const RootStack = createStackNavigator();

const RootStackNavigator = (props) => {
  return (
    // eslint-disable-next-line global-require
    <ImageBackground source={require('../assets/images/bg.png')} style={styles.bg}>
      <RootStack.Navigator mode="card">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="FiltersScreen"
          component={FiltersScreen}
          options={{
            headerTitle: 'Filters',
            headerBackTitle: ' ',
            headerBackTitleStyle: { backgroundColor: 'yellow' },
          }}
        />
      </RootStack.Navigator>
    </ImageBackground>
  );
};

export default RootStackNavigator;
