import { View, StyleSheet } from "react-native";
import { Button, Text, Surface } from "react-native-paper";
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
      <Surface style={timerStyles.surface} elevation={4} mode="flat">
        <Text style={timerStyles.timerText} variant="bodyLarge">
          {String(Math.floor(timer / 60)).padStart(2, "0")}:
          {String(timer % 60).padStart(2, "0")}
        </Text>
      </Surface>
      <View style={timerStyles.container}>
        <Button style={timerStyles.button} mode="contained" onPress={onStart}>
          Start
        </Button>
        <Button style={timerStyles.button} mode="contained" onPress={onStop}>
          Stop
        </Button>
        <Button style={timerStyles.button} mode="contained" onPress={onReset}>
          Reset
        </Button>
      </View>
    </View>
  );
}

const timerStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  timerText: {
    fontWeight: "bold",
  },
  button: {
    marginVertical: SPACING.md,
    marginHorizontal: SPACING.sm,
  },
  surface: {
    padding: SPACING.sm,
    marginVertical: SPACING.md,
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SPACING.md,
  },
});
