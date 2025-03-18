import { Text, View, StyleSheet } from "react-native";

import { theme } from "./theme";
import LabeledRadioButton from "./LabeledRadioButton";

interface Choice {
  value: string;
  label: string;
}

interface Props {
  choices: Array<Choice>;
  title: string;
  status: string;
  onPress: (value: string) => void;
}

export default function RadioChoice({ choices, title, status, onPress }: Props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>{title}</Text>
      </View>
      <View style={styles.containerButtons}>
        {choices.map(({ value, label }: Choice, index) => (
          <LabeledRadioButton
            key={index}
            value={value}
            label={label}
            status={status}
            onPress={onPress}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: theme.spacing.xs,
    borderColor: theme.colors.accent,
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.sm,
    margin: theme.spacing.sm,
    flexDirection: "row", // Arrange children in a row
    alignItems: "center", // Align items vertically in the center
    justifyContent: "space-between", // Add space between label and buttons
  },
  label: {
    color: theme.colors.text,
    fontSize: theme.fontSizes.medium,
    flexDirection: "column",
    textAlign: "center",
    marginLeft: theme.spacing.md,

  },
  containerButtons: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: theme.spacing.md,
  },
});
