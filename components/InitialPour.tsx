import { Text, View, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

interface Props {
  sweetness: string;
  weight: number;
  timer: number;
}

export default function InitialPour({ sweetness, weight, timer }: Props) {
  const initialWeight = weight * 0.4;
  let stPour: number;
  let ndPour: number;
  const [stBold, setStBold] = useState(false);
  const [ndBold, setNdBold] = useState(false);

  useEffect(() => {
    if (timer < 45 && timer > 0) {
      setStBold(true);
      setNdBold(false);
    } else if (timer >= 45 && timer <= 90) {
      setStBold(false);
      setNdBold(true);
    } else if (timer > 90) {
      setStBold(false);
      setNdBold(false);
    }
  }, [timer]);

  if (sweetness === "standard") {
    stPour = Math.round(initialWeight * 0.5);
    ndPour = Math.round(initialWeight * 0.5);
  } else if (sweetness === "sweeter") {
    stPour = Math.round(initialWeight * 0.4);
    ndPour = Math.round(initialWeight * 0.6);
  } else {
    stPour = Math.round(initialWeight * 0.6);
    ndPour = Math.round(initialWeight * 0.4);
  }

  return (
    <View>
      <Text style={stBold ? styles.highlight : styles.normal}>At the beggining pour {stPour} grams of water</Text>
      <Text style={ndBold ? styles.highlight : styles.normal}>
        {ndPour} grams of water - {stPour + ndPour} g total (0:45)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  normal: {
    fontWeight: "normal",
  },
  highlight: {
    fontWeight: "bold",
  },
});
