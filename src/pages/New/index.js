import { View, StyleSheet, Text } from "react-native";

export function New() {
    return (
        <View style={styles.container}>
            <Text>Página Cadastrar novo video</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop:40,
        flex: 1,
    }
})