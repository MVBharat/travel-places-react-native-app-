import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'

const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed} >
        <View style={styles.listItem}>
            <Image source={props.placeImage} style={styles.placeImage} resizeMode="cover" />
            <Text>{props.placeName} </Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        backgroundColor: "orange",
        marginBottom: 5,
        flexDirection: "row",
        alignItems: "center"
    },
    placeImage: {
        marginRight: 8,
        height: 30,
        width: 30
    }
})

export default listItem;



