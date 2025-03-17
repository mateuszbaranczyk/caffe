import { Text, View } from "react-native";

interface Props {
  sweetness: string;
  weight: number;
}

export default function InitialPour({ sweetness, weight }: Props) {
  const initialWeight = weight * 0.4;
  let stPour: number;
  let ndPour: number;

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
      <Text>At the beggining pour {stPour} grams of water</Text>
      <Text>
        {ndPour} grams of water {stPour + ndPour} g total (0:45)
      </Text>
    </View>
  );
}
