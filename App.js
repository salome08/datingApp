/* eslint-disable no-use-before-define */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar, StyleSheet } from 'react-native';
import { ThemeProvider } from './context/ThemeContext';
import RootStackNavigator from './navigators/RootStackNavigator';

export default function App() {
  return (
    <ThemeProvider value="dark">
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <RootStackNavigator />
        </View>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
