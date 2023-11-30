/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Navigator from './navigation/Navigator';
import Providers from './providers';


function App(): JSX.Element {
  return (
    <Providers>
      <Navigator />
    </Providers>
  );
}

export default App;
