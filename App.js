import React from 'react';
import { Image, TouchableOpacity,LogBox, Alert } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {images, icons, COLORS, FONTS, SIZES } from './constants';
import Home from './src/screens/Home';
import Splashscreen from './src/components/Splash/Splashscreen';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function stackSrceens({navigation}){
  return (
    <Stack.Navigator initialRouteName={'Splashscreen'}>
      <Stack.Screen
        name="Trang chủ"
        component={Home}
      />
      <Stack.Screen
        name="Splashscreen"
        component={Splashscreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

const App = () => {
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer theme={theme}>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: {marginVertical: 5}
        }}
      >
      <Drawer.Screen
        name="HomePage"
        options={{drawerLabel: 'Trang chủ'}}
        component={stackSrceens}
      />
          
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
