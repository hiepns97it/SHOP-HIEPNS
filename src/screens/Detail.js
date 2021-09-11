import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {COLORS, SIZES, FONTS} from '../../constants';
import {ScrollView} from 'react-native-gesture-handler';

const Product = ({route, navigation}) => {
  const {id, name, img, type, price} = route.params;

  if (price.toString().includes('$')) {
    price = Math.round(price.replace('$', ''));
  } else if (price.toString().includes('₹')) {
    //price = Math.round(price.toString().replace('₹', ''));
  }

  return (
    <View style={{height: '100%', width: '100%', backgroundColor: '#fafafa'}}>
      <ScrollView>
        <View style={{height: 500, padding: 2}}>
          <Image
            source={{uri: img}}
            resizeMode="contain"
            style={{
              height: '100%',
              width: '100%'
            }}
          />
        </View>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', margin: 10}}>
            <View style={{flex: 1, alignItems: 'flex-start'}}>
              <Text style={{...FONTS.product_title_text}}>{name}</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Text style={{...FONTS.product_title_text}}>{price}</Text>
            </View>
        </View>
      </ScrollView>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
        bottom: 0,
        ...FONTS.box_shadow,
        height: 70,
        backgroundColor: 'red',
        justifyContent: 'center'
      }}>
        <View style={{
          flex: 1,
          backgroundColor: '#fafafa',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Cart', {
              id: id,
              name: name,
              img: img,
              type: type,
              price: price,
            });
          }}>
            <Text style={{color: COLORS.black, ...FONTS.big_button_text}}>Thêm vào giỏ</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          flex: 1,
          backgroundColor: '#DA1C4C',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <TouchableOpacity onPress={() =>{
            navigation.navigate('Cart', {
              id: id,
              name: name,
              img: img,
              type: type,
              price: price,
            });
          }}>
            <Text style={{color: COLORS.black, ...FONTS.big_button_text}}>Mua</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default  Product;