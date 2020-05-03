import React from 'react';
import { Text, StyleSheet } from 'react-native';
// import { Header } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { BlurView } from 'expo-blur';
import { PRIMARY_COLOR } from '../assets/styles';
import ProfileScreen from '../containers/ProfileScreen';
import FilterButton from '../components/FilterButton';
import TabNavigator from './TabNavigator';
import MyHeader from '../components/Header';

const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator headerMode="screen" mode="modal">
      <MainStack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          header: ({ scene }) => {
            return scene.route.state && scene.route.state.index !== 1 ? null : (
              <MyHeader />
            );
          },
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTransparent: 'none',

          headerTitle: () => {
            return (
              <Text
                style={{
                  color: PRIMARY_COLOR,
                  fontSize: 32,
                  fontWeight: 'bold',
                }}
              >
                Zalmar
              </Text>
              // </View>
            );
          },
          headerRight: () => <FilterButton />,
          // headerTransparent: true,
          headerBackground: () => (
            <BlurView intensity={100} style={[StyleSheet.absoluteFill]} />
          ),
        }}
      />
      <MainStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerTransparent: true,
          headerTitle: ' ',
          headerBackTitle: ' ',
          headerTintColor: PRIMARY_COLOR,
          // headerLeft: () => <Text>Tst</Text>,
          // headerBackground: () => (
          //   <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
          // ),
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainStackScreen;
