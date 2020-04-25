import React from 'react';
import { ImageBackground, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { BlurView } from 'expo-blur';
import styles, { PRIMARY_COLOR } from '../assets/styles';
import SwipeScreen from './SwipeScreen';
import ProfileScreen from './ProfileScreen';
import Filters from '../components/Filters';

const Stack = createStackNavigator();
// <Stack.Navigator></Stack.Navigator>

// const config = {
//   animation: 'spring',
//   config: {
//     stiffness: 1000,
//     damping: 500,
//     mass: 3,
//     overshootClamping: true,
//     restDisplacementThreshold: 0.01,
//     restSpeedThreshold: 0.01,
//   },
// };

const Home = () => {
  return (
    // eslint-disable-next-line global-require
    <ImageBackground source={require('../assets/images/bg.png')} style={styles.bg}>
      <Stack.Navigator
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
        <Stack.Screen
          name="SwipeScreen"
          component={SwipeScreen}
          options={{
            headerTitle: () => (
              // <View style={{ alignItems: 'center' }}>
              <Text
                // xs={2}
                style={{
                  color: PRIMARY_COLOR,
                  fontSize: 32,
                  fontWeight: 'bold',
                }}
              >
                Zalma
              </Text>
              // </View>
            ),
            headerRight: () => <Filters />,
            // headerTransparent: true,
            headerBackground: () => (
              <BlurView tint="light" intensity={8} style={StyleSheet.absoluteFill} />
            ),
          }}
        />
        <Stack.Screen
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
      </Stack.Navigator>
    </ImageBackground>
  );
};

export default Home;
