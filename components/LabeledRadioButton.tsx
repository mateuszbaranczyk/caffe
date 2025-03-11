import { RadioButton } from "react-native-paper";
import { Text, View } from "react-native";

import { styles } from "@/components/styles";

interface Props {
  value: string;
  label: string;
  status: string;
  onPress: () => void;
}

export default function LabeledRadioButton({ value, label, status, onPress }: Props) {
  return (
    <View style={styles.radioRow}>
      <RadioButton value={value} status={status === value ? "checked" : "unchecked"} onPress={onPress} />
      <Text style={styles.radioText}>{label}</Text>
    </View>
  );
}
