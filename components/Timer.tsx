import { styles } from "./styles";
import { Text, View, Pressable } from "react-native";

interface Props {
    timer: number
    onStart: () => void;
    onStop: () => void;
    onReset: () => void
}

export default function Timer({timer, onStart, onStop, onReset}: Props) {
    return (
        <View>
            <Text>Timer: {timer} seconds</Text>
            <View>
                <Pressable onPress={onStart}><Text>Start</Text></Pressable>
                <Pressable onPress={onStop}><Text>Stop</Text></Pressable>
                <Pressable onPress={onReset}><Text>Reset</Text></Pressable>
            </View>
        </View>
    );
}