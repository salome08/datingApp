import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
// import { Header } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { BlurView } from 'expo-blur';
import { PRIMARY_COLOR } from '../assets/styles';
import SwipeScreen from '../containers/SwipeScreen';
import ProfileScreen from '../containers/ProfileScreen';
import Filters from '../components/Filters';
import TabNavigator from './TabNavigator';
import MyHeader from '../components/Header';

const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator
      headerMode="screen"
      mode="modal"
      screenOptions={
        {
          // cardOverlayEnabled: true,
          // cardStyleInterpolator: ({ current: { progress } }) => ({
          //   cardStyle: {
          //     opacity: progress.interpolate({
          //       inputRange: [0, 0.5, 0.9, 1],
          //       outputRange: [0, 0.25, 0.7, 1],
          //     }),
          //   },
          // }),
        }
      }
    >
      <MainStack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          header: ({ scene, previous, navigation }) => {
            // console.log('navigation', navigation);
            // console.log('scene.route : ', scene.route);
            console.log('options', scene.descriptor.options);

            return scene.route.state && scene.route.state.index !== 1 ? null : (
              <MyHeader />
            );
          },
          headerStyle: {
            // height: '10%',
            backgroundColor: 'red',
          },
          headerTransparent: 'none',

          headerTitle: (props) => {
            console.log('scene.route : ', props);
            // console.log('previous', previous);
            // console.log('navigation', navigation);

            return (
              // <View style={{ alignItems: 'center' }}>
              <Text
                // xs={2}
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
          headerRight: () => <Filters />,
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
          // headerLeft: () => <Button onPress={( navigation.navigate('')}>retour</Button>,
          // headerBackground: () => (
          //   <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
          // ),
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainStackScreen;
