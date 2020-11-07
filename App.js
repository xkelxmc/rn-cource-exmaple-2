import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationProvider} from "./src/context/NavigationStore";
import Navigation from "./src/navigation/Navigation";
import {ThemeProvider} from "./src/context/ThemeStore";

export default function App() {
  return (
      <NavigationProvider>
          <ThemeProvider>
              <Navigation/>
          </ThemeProvider>
      </NavigationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
