import { View, StyleSheet, Text } from "react-native";

export function Search() {
    return (
        <View style={styles.container}>
            <Text>Página Buscar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop:40,
        flex: 1,
    }
})