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
        {choices.map(({ value, label }: Choice) => (
          <LabeledRadioButton value={value} label={label} status={status} onPress={onPress} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: theme.spacing.xs,
    borderColor: theme.colors.accent,
    padding: theme.spacing.md,
    margin: theme.spacing.sm,
    borderRadius: theme.borderRadius.medium,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  label: {
    flex: 1,
    color: theme.colors.text,
    fontSize: theme.fontSizes.large,
    margin: theme.spacing.sm,
    alignItems: "center",
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});