import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { SegmentedButtons } from "react-native-paper";

interface Choice {
  value: string;
  label: string;
}

interface Props {
  buttons: Array<Choice>;
  value: string;
  setValue: (value: string) => void;
}

export default function ButtonChoice({ buttons, value, setValue }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <SegmentedButtons value={value} onValueChange={setValue} buttons={buttons} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
