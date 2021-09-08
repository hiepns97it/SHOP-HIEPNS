import React, {Component} from "react";
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import { FONTS } from "../../../constants/theme";
import { icons } from "../../../constants";

class Splashscreen extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        console.log('chay');
        setTimeout(() => {
            this.props.navigation.navigate('Trang chủ');
        }, 3000);
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={icons.launcher_image} style={styles.image}>
                    <Image 
                        source={icons.launcher_icon}
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignContent: 'center',
                            alignSelf: 'center'
                        }}            
                    />
                    <Text style={styles.text}>HIEPNS</Text>
                </ImageBackground>                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    image: {
        flex: 10,
        resizeMode: 'cover',
        height: '68%',
        justifyContent: 'flex-end',
    },
    text: {
        color: 'white',
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#1d3557',
        ...FONTS.body1,
    }
})

export default Splashscreen;