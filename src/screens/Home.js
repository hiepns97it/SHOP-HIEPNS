import React, {useEffect} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import { images, icons, COLORS, FONTS, SIZES } from '../../constants';
import {
    Svg,
    Polygon,
} from 'react-native-svg';

const Home = () => {
    const [trending, setTrending] = React.useState([
        {
            id: 0,
            name: 'Nike Air Zoom Pegasus 36',
            img: images.nikePegasus36,
            bgColor: '#BF012C',
            type: 'RUNNING',
            price: '$1860',
            sizes: [6, 7, 8, 9, 10],
        },
        {
            id: 1,
            name: 'Nike Metcon 5',
            img: images.nikeMetcon5Black,
            bgColor: '#D39C67',
            type: 'TRAINING',
            price: '$1350',
            sizes: [6, 7, 8, 9, 10, 11, 12],
        },
        {
            id: 2,
            name: 'Nike Air Zoom Kobe 1 Proto',
            img: images.nikeZoomKobe1Proto,
            bgColor: '#7052A0',
            type: 'BASKETBALL',
            price: '$1990',
            sizes: [6, 7, 8, 9],
        },
        {
            id: 3,
            name: 'Nike Air Zoom Kobe 1 Proto',
            img: images.nikeZoomKobe1Proto,
            bgColor: '#7052A0',
            type: 'CRICKET',
            price: '$1990',
            sizes: [6, 7, 8, 9],
        },
        {
            id: 4,
            name: 'Nike Air Zoom Pegasus 36',
            img: images.nikePegasus36,
            bgColor: '#BF012C',
            type: 'RUNNING',
            price: '$1860',
            sizes: [6, 7, 8, 9, 10],
        },
        {
            id: 5,
            name: 'Nike Metcon 5',
            img: images.nikeMetcon5Black,
            bgColor: '#D39C67',
            type: 'TRAINING',
            price: '$1350',
            sizes: [6, 7, 8, 9, 10, 11, 12],
        },
        {
            id: 6,
            name: 'Nike Air Zoom Kobe 1 Proto',
            img: images.nikeZoomKobe1Proto,
            bgColor: '#7052A0',
            type: 'BASKETBALL',
            price: '$1990',
            sizes: [6, 7, 8, 9],
        },
        {
            id: 7,
            name: 'Nike Air Zoom Kobe 1 Proto',
            img: images.nikeZoomKobe1Proto,
            bgColor: '#7052A0',
            type: 'CRICKET',
            price: '$1990',
            sizes: [6, 7, 8, 9],
        },
    ])

    function renderTrendingShoes(item, index) {
        var trendingStyle = {};
        if(index == 0) {
            trendingStyle = {marginLeft: SIZES.padding};
        } else {
            trendingStyle = {}
        }

        if (item.price.toString().includes('$'))
            {item.price = Math.round(item.price.replace('$',''));}
        else if (!item.price.toString().includes('₹'))
            {item.price = '₹' + item.price;}
        
        return (
            <TouchableOpacity
                style={{height: 240,width: 180, justifyContent: 'center', marginHorizontal: SIZES.base, ...trendingStyle}}
                onPress={() => {

                }}
            >
                <Text style={{color: COLORS.gray, ...FONTS.h5}}>{item.type}</Text>
                <View style={[{
                    flex: 1,
                    justifyContent: 'flex-end',
                    marginTop: SIZES.base,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    marginRight: SIZES.padding,
                    paddingLeft: SIZES.radius,
                    backgroundColor: item.bgColor,
                    paddingBottom: SIZES.radius,
                }, styles.trendingShadow]}>
                    <View style={{height: '35%', justifyContent: 'space-between'}}>
                        <Text style={{color: COLORS.black, ...FONTS.prod_list_price_text}}>{item.name}</Text>
                        <Text style={{color: COLORS.black, ...FONTS.prod_list_price_text}}>{item.price}</Text>
                    </View>
                </View>
                <View style={{ position: 'absolute', top: 27, right: 0, width: '95%', height: '100%' }}>
                    <Svg height="100%" width="100%">
                        <Polygon
                            points="0,0 160,0 160,80"
                            fill="white"
                        />
                    </Svg>
                </View>
                <Image
                    source={item.img}
                    resizeMode='cover'
                    style={{
                        position: 'absolute',
                        elevation: 10,
                        top: 50,
                        right: 0,
                        width: '98%',
                        height: 80,
                        transform: [
                            {rotate: '-15deg'}
                        ]
                    }}
                />
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ height: 260, marginTop: 5, backgroundColor: COLORS.white}}>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={trending}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({item , index}) => renderTrendingShoes(item, index)}
                        />
                    </View>
                    <View style={{ height: 260, marginTop: 2, backgroundColor: COLORS.light1}}>
                        
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black,
        marginBottom: 40
    },
    trendingShadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    }
});

export default Home;
