import { RadioButton } from "react-native-paper";
import { Text, View, StyleSheet } from "react-native";

import { theme } from "./theme";

interface Props {
  value: string;
  label: string;
  status: string;
  onPress: (value: string) => void;
}

export default function LabeledRadioButton({ value, label, status, onPress }: Props) {
  return (
    <View style={styles.container}>
      <RadioButton color={theme.colors.accent} uncheckedColor={theme.colors.primary} value={value} status={status === value ? "checked" : "unchecked"} onPress={() => onPress(value)} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing.md,
  },
  label: {
    color: theme.colors.text,
    fontSize: theme.fontSizes.large,
    margin: theme.spacing.sm,
  },
});