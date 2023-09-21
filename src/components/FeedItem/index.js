import { useRef, useState } from "react";
import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import { Video } from 'expo-av'

const { height: heightSceen } = Dimensions.get("screen")

export function FeedItems({ data }) {
    const video = useRef(null);
    const [status, setStatus] = useState()
    function handlePlayer() {
        alert("TESTE")

    }

    function handlePlayer() {
        status.isPlayer ? video.current.passeAsync() : video.current?.playAsync()
    }

    return (

        <View>
            <Pressable onPress={handlePlayer}>
                <Video
                    ref={video}
                    style={{ width: '100%', height: heightSceen }}
                    source={{ uri: data?.video }}
                    resizeMode="cover"
                    shouldPlay={false}
                    isMuted={false}
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({

})