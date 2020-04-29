/* eslint-disable no-use-before-define */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import SwipeScreen from '../containers/SwipeScreen';

import { PRIMARY_COLOR } from '../assets/styles';
import ProfileScreen from '../containers/Profile';
import MessagesScreen from '../containers/Messages';

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
  console.log(props);
  return (
    <Tab.Navigator
      initialRouteName="Swipe"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: PRIMARY_COLOR,
        style: {
          height: '8%',
          shadowOpacity: 0.01,
        },
      }}
    >
      {/* <Tab.Screen
        name="Options"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-settings" size={size} color={color} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-person" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Swipe"
        component={SwipeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-flame" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-chatboxes" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
