import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ThemeContext, { ThemeProvider } from './context/ThemeContext';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Trouve ton Zalma !</Text>
      <ThemedButton />
    </View>
  );
};
function App() {
  return (
    <ThemeProvider value="red">
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Zalma" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const ThemedButton = () => {
  const theme = React.useContext(ThemeContext);
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".

  return <Button title="Lance toi !" color={theme} theme={theme} />;
};

const Stack = createStackNavigator();

export default App;
