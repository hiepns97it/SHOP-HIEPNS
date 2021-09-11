import React from 'react';
import { Image, TouchableOpacity,LogBox, Alert } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {images, icons, COLORS, FONTS, SIZES } from './constants';
import Home from './src/screens/Home';
import Splashscreen from './src/components/Splash/Splashscreen';
import Product from './src/screens/Detail';
import Cart from './src/screens/Cart';
import Category from './src/screens/Category';
import ProductList from './src/screens/ProductList';
import Address from './src/components/Forms/Address';

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
        name="Home"
        component={Home}
        options={{
          title:'Trang chủ',
          headerTintColor: COLORS.lightGray,
          headerTitleStyle: {
            ...FONTS.navTitle,
          },
          headerLeft: ({onPress}) => (
            <TouchableOpacity
              style={{marginLeft: SIZES.padding}}
              onPress={() => navigation.openDrawer()}
            >
              <Image
                source={icons.menu}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25
                }}
              />
            </TouchableOpacity>
          ),
          headerRight: ({onPress}) => (
            <TouchableOpacity
              style={{marginRight: SIZES.padding}}
            >
              <Image
                source={icons.search}
                resizeMode='contain'
                style={{
                  width: 30,
                  height: 30
                }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Splashscreen"
        component={Splashscreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{
          title: "Sản phẩm"
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          title: "Thanh toán"
        }}
      />
      <Stack.Screen
        name="Category"
        component={Category}
        options={{
          title: "Danh mục sản phẩm"
        }}
      />
      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{
          title: "Danh sách sản phẩm"
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
      
      <Drawer.Screen
        name="Address"
        options={{drawerLabel: 'Địa chỉ'}}
        component={Address}
      />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
