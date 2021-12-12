import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import customeStyle from '../../utils/CustomeStyles'
import Icon from 'react-native-vector-icons/Feather'
const HomeScreen = () => {
    return (
        <View style={customeStyle.default}>
            <Icon name="home" />
            <Text>Home Screen</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

})
