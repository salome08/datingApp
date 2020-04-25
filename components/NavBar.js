import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../containers/Home';

import MessagesScreen from './Message';
import styles from '../assets/styles';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Swipe"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#e91e63',
        style: { height: '100%' },
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
          tabBarIcon: ({ color, size }) => <Ionicons name="ios-person" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Swipe"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="ios-flame" size={size} color={color} />,
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
}
