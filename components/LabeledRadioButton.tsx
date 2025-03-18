import { RadioButton } from "react-native-paper";
import { Text, View } from "react-native";

import { styles } from "@/components/styles";

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
