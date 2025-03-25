import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { SPACING } from "./theme";
interface Props {
  strength: string;
  weight: number;
  timer: number;
}

export default function PourOver({ strength, weight, timer }: Props) {
  let restWater = Math.round(weight * 0.6);
  let initPour = Math.round(weight * 0.4);

  let thirdPour: string;
  let fourthPour: string = "";
  let fifthPour: string = "";
  const [thirdBold, setThirdBold] = useState(false);
  const [fourthBold, setFourthBold] = useState(false);
  const [fifthBold, setFifthBold] = useState(false);

  useEffect(() => {
    if (timer === 0) {
      setThirdBold(false);
      setFourthBold(false);
      setFifthBold(false);
    } else if (timer > 90 && timer <= 135) {
      setThirdBold(true);
      setFourthBold(false);
      setFifthBold(false);
    } else if (timer > 135 && timer <= 165) {
      setThirdBold(false);
      setFourthBold(true);
      setFifthBold(false);
    } else if (timer > 165) {
      setThirdBold(false);
      setFourthBold(false);
      setFifthBold(true);
    }
  }, [timer]);

  if (strength === "soft") {
    thirdPour = `${restWater} grams of water - ${initPour + restWater} g total (1:30)`;
  } else if (strength === "medium") {
    thirdPour = `${restWater / 2} grams of water - ${initPour + restWater / 2} g total (1:30)`;
    fourthPour = `${restWater / 2} grams of water - ${initPour + restWater} g total (2:15)`;
  } else {
    thirdPour = `${restWater / 3} grams of water - ${initPour + restWater / 3} g total (1:30)`;
    fourthPour = `${restWater / 3} grams of water - ${initPour + (2 * restWater) / 3} g total (2:15)`;
    fifthPour = `${restWater / 3} grams of water - ${initPour + restWater} g total (2:45)`;
  }

  return (
    <View>
      <Text variant="bodyLarge" style={thirdBold ? styles.highlight : styles.normal}>{thirdPour}</Text>
      {fourthPour !== "" && <Text variant="bodyLarge" style={fourthBold ? styles.highlight : styles.normal}>{fourthPour}</Text>}
      {fifthPour !== "" && <Text variant="bodyLarge" style={fifthBold ? styles.highlight : styles.normal}>{fifthPour}</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  normal: {
    fontWeight: "normal",
    marginVertical: SPACING.sm,
  },
  highlight: {
    fontWeight: "bold",
    marginVertical: SPACING.sm,
  },
});
