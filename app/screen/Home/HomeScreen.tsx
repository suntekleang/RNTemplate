import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import customeStyle from '../../utils/CustomStyles'
import Icon from 'react-native-vector-icons/Feather'
import { BattambangBold } from '../../utils/CustomFontFamily/customFontFamily'
const HomeScreen = () => {
    return (
        <View style={customeStyle.default}>
            <Icon name="home" />
            <Text style={{fontFamily: "BattambangBold"}}>Home Screen</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

})
