import { View, StyleSheet, Text } from "react-native";

import { Entypo } from '@expo/vector-icons'

export function ButtonNew({ size }) {
    return (
        <View style={styles.container}>
            <Entypo name="plus" size={24} color="#000" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:"center",
        justifyContent:"center",
        borderBottomWidth: 4,
        borderBlockColor: '#1ebfc7',
        borderRightColor: "#f43071",
        borderRadius: 6,
        backgroundColor: "#fff",
        width:35,
        
    },

    inner: {
        backgroundColor: "#fff",
        padding: 1,
        paddingLeft: 6,
        paddingRight: 6,
        borderRadius: 3,

    }
})