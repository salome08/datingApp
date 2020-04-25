/* eslint-disable no-use-before-define */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider } from './context/ThemeContext';
import HomeScreen from './containers/Home';
import { PRIMARY_COLOR } from './assets/styles';
import ProfileScreen from './containers/Profile';

import MessagesScreen from './containers/Messages';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

// function ProfileScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Profile!</Text>
//     </View>
//   );
// }

const Tab = createBottomTabNavigator();

function MyTabs() {
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
        component={HomeScreen}
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
}

export default function App() {
  return (
    <ThemeProvider value="dark">
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <MyTabs />
        </View>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    height: '10%',
    backgroundColor: '#98d2c1',
  },
  center: {
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97d7f9',
  },
  profileImage: {
    width: 140,
    height: '50%',
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#fff',
    backgroundColor: '#eee',
  },
  navBar: {
    height: '10%',
    backgroundColor: '#98d2c1',
  },
});
