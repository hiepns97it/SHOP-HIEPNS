import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, Alert } from "react-native";
import {COLORS, SIZES, FONTS} from '../../../constants';
import {ScrollView} from 'react-native-gesture-handler';

const Address = ({navigation}) => {
  const [formState, setFormState] = useState([]);

  const onHandleChange= (label, value) => {
    setFormState({
      ...formState,
      [label]: value
    })
    console.log('form : ', JSON.stringify(formState));
  }
  return (
    <View style={styles.container}>
      <View style={styles.sub_container}>
        <ScrollView>
          <View style={{flex:1,flexDirection: 'row',padding: 6 }}>
            <Text style={{...FONTS.big_button_text, fontWeight: 'bold', marginLeft: 6}}>Thêm địa chỉ</Text>
          </View>
          <View style={{flex: 3,flexDirection: 'column', marginLeft: 5,marginRight: 5}}>
            <View style={styles.input_container}>
              <TextInput
                placeholder={'Nhập mã Code'}
                keyboardType={"numeric"}
                maxLength={6}
                returnKeyType={'done'}
                onChangeText={pincode => onHandleChange('pincode', pincode)}
                placeholderTextColor={'#212121'}
                style={styles.input_box}
              />
            </View>
            <View style={styles.input_container}>
              <TextInput
                placeholder={'Họ'}
                textContentType={'name'}
                maxLength={20}
                returnKeyType={'done'}
                onChangeText={first_name => ""}
                placeholderTextColor={'#212121'}
                style={styles.input_box}
              />
            </View>
            <View style={styles.input_container}>
              <TextInput placeholder={'Tên*'}
                         textContentType={"name"}
                         maxLength={20}
                         returnKeyType={"done"}
                         onChangeText={last_name => ""}
                         style={styles.input_box} placeholderTextColor={'#212121'}></TextInput>
            </View>
            <View style={styles.inputarea_container}>
              <TextInput placeholder={'Địa chỉ*'}
                         maxLength={120}
                         returnKeyType={"done"}
                         onChangeText={f_address => ""}
                         style={styles.input_box} multiline={true} 
                         numberOfLines={4} placeholderTextColor={'#212121'}></TextInput>
            </View>
            <View style={styles.input_container}>
              <TextInput placeholder={'Tòa nhà*'}
                         maxLength={20}
                         returnKeyType={"done"}
                         onChangeText={landmark_name => ""}
                         style={styles.input_box} placeholderTextColor={'#212121'}></TextInput>
            </View>
            <View style={styles.input_container}>
              <TextInput placeholder={'Tỉnh/Thành phố*'}
                         maxLength={20}
                         returnKeyType={"done"}
                         onChangeText={city_name => ""}
                         style={styles.input_box} placeholderTextColor={'#212121'}></TextInput>
            </View>
            <View style={styles.input_container}>
              <TextInput placeholder={'Tình trạng*'}
                         maxLength={20}
                         returnKeyType={"done"}
                         onChangeText={state_name => ""}
                         style={styles.input_box} placeholderTextColor={'#212121'}></TextInput>
            </View>
            <View style={styles.input_container}>
              <TextInput placeholder={'Số điện thoại*'}
                         keyboardType={"numeric"}
                         maxLength={12}
                         returnKeyType={"done"}
                         onChangeText={phone => ""}
                         style={styles.input_box} placeholderTextColor={'#212121'}></TextInput>
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={{...FONTS.big_button_text, marginLeft:10 ,fontWeight:'bold', marginTop:10}}>HIEPNS</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.submit_btn_container}>
        <TouchableOpacity>
          <Text style={styles.submit_box}>
            Save Address
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  submit_box:{color: COLORS.white, ...FONTS.box_shadow, ...FONTS.h2,fontWeight:'bold'},
  submit_btn_container:{
    backgroundColor: '#DA1C4C',
    height: 50,
    width:'60%',
    bottom:0,
    position:'absolute',
    marginBottom:10,
    alignSelf:'center',
    alignItems: 'center',
    borderRadius:5,
    justifyContent: 'center',
  },
  input_container: {
    width: '96%',
    height: 40,
    position: 'relative',
    margin: 5,
    paddingLeft: 4,
    paddingRight: 4,
    borderWidth: 1,
    borderColor: '#d2d2d2',
    borderRadius: 2,
    borderStyle: 'solid'
  },
  inputarea_container:{
    width: '96%',
    height: 80,
    position:'relative',
    margin:6,
    paddingLeft:4,
    paddingRight:4,
    borderWidth:1,
    borderColor:'#d2d2d2',
    borderRadius: 2,
    borderStyle: 'solid',
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ececec',
  },
  sub_container: {
    height: '85%',
    width: '96%',
    margin:8,
    backgroundColor: '#fafafa',
    display: 'flex',
    flexDirection: 'column',
  },
  input_box:{
    backgroundColor:'#00000000',
    color:'#212121',
    ...FONTS.home_btm_text
  },
});

export default Address;