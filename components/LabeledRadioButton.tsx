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
    <View>
      <RadioButton value={value} status={status === value ? "checked" : "unchecked"} onPress={() => onPress(value)} />
      <Text>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    color: theme.colors.text,
    fontSize: theme.fontSizes.medium,
    margin: theme.spacing.sm,
    marginRight: theme.spacing.md,
  },
});