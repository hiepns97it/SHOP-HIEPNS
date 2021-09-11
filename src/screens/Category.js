import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {COLORS, SIZES, FONTS, icons} from '../../constants';
//import ProductList from './ProductList';


const Category = ({navigation}) => {
  const [category_list, setCategoryList] = React.useState([
    {
      id: 1,
      name: "Women's Fashion",
      bgColor: '#BF012C',
      cmp: '',
    },
    {
      id: 2,
      name: "Men's Fashion",
      bgColor: '#BF012C',
      cmp: '',
    },
    {
      id: 3,
      name: "Kids' Fashion",
      bgColor: '#BF012C',
      cmp: '',
    },
    {
      id: 4,
      name: 'Beauty',
      bgColor: '#BF012C',
      cmp: '',
    },
    {
      id: 5,
      name: 'Jewellary',
      bgColor: '#BF012C',
      cmp: '',
    },
    {
      id: 6,
      name: 'Home Furnishings',
      bgColor: '#BF012C',
      cmp: '',
    },
  ]);

  function renderCategory(item ,index) {
    return (
      <TouchableOpacity onPress={() => {
        navigation.navigate('ProductList');
      }}>
        <View style={{display: 'flex', flexDirection: 'row', backgroundColor: 'gray', height: 'auto',padding: 20, margin: 6,
      justifyContent: 'flex-end'}}>
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <Text>{item.name}</Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Image source={icons.right_arrow} style={{height: 20, width: 20}}/>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={{height: '100%', backgroundColor: COLORS.white}}>
      <FlatList
        data={category_list}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => renderCategory(item, index)}
      />
    </View>
  )
}

export default Category;