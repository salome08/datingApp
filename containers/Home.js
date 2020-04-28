import React from 'react';
import { ImageBackground, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { BlurView } from 'expo-blur';
import styles, { PRIMARY_COLOR } from '../assets/styles';
import SwipeScreen from './SwipeScreen';
import ProfileScreen from './ProfileScreen';
import FiltersScreen from './FiltersScreen';
import Filters from '../components/Filters';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

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

const Home = (props) => {
  console.log(props);
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

export default Home;
