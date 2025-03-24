import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { SPACING } from "./theme";

interface Props {
  timer: number;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
}

export default function Timer({ timer, onStart, onStop, onReset }: Props) {
  return (
    <View>
      <Text style={styles.timerText} variant="bodyLarge">{timer} seconds</Text>
      <View style={styles.container}>
        <Button style={styles.button} mode="contained" onPress={onStart}>
          Start
        </Button>
        <Button style={styles.button} mode="contained" onPress={onStop}>
          Stop
        </Button>
        <Button style={styles.button} mode="contained" onPress={onReset}>
          Reset
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  timerText: {
    fontWeight: "bold",
  },
  button: {
    marginVertical: SPACING.md,
    marginHorizontal: SPACING.sm
  },
});
