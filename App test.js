/* eslint-disable no-use-before-define */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider } from './context/ThemeContext';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <ThemeProvider value="dark">
      <NavigationContainer>
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" />
          <View style={styles.top} />
          <View style={styles.center}>
            <View style={styles.profileImage} />
          </View>
          <View style={styles.navBar}>
            <NavBar />
          </View>
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
    height: '20%',
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
