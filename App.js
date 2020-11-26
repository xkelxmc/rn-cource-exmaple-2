import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationProvider} from "./src/context/NavigationStore";
import Navigation from "./src/navigation/Navigation";
import {ThemeProvider} from "./src/context/ThemeStore";
import {Provider} from "react-redux";
import {store} from "./src/store";

export default function App() {
  return (
      <NavigationProvider>
          <ThemeProvider>
              <Provider store={store} >
                <Navigation/>
              </Provider>
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
