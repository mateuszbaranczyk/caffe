import { Text, View } from "react-native";

import { styles } from "@/components/styles";
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
    <View>
      <View>
        <Text>{title}</Text>
      </View>
      {choices.map(({ value, label }: Choice) => (
        <LabeledRadioButton value={value} label={label} status={status} onPress={onPress} />
      ))}
    </View>
  );
}
