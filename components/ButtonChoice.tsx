import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { SegmentedButtons, Text } from "react-native-paper";
import { FONT_SIZES, SPACING } from "./theme";
interface Choice {
  value: string;
  label: string;
}

interface Props {
  label: string;
  buttons: Array<Choice>;
  value: string;
  setValue: (value: string) => void;
}

export default function ButtonChoice({ label, buttons, value, setValue }: Props) {
  return (
    <SafeAreaView edges={[]}>
      <Text variant="bodyLarge">{label}</Text>
      <SegmentedButtons value={value} onValueChange={setValue} buttons={buttons} />
    </SafeAreaView>
  );
}

