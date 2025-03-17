import { Text, View } from "react-native";

interface Props {
  strength: string;
  weight: number;
}

export default function PourOver({ strength, weight }: Props) {
  let restWater = Math.round(weight * 0.6);
  let initPour = Math.round(weight * 0.4);

  let thirdPour: string;
  let fourthPour: string = "";
  let fifthPour: string = "";

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
      <Text>{thirdPour}</Text>
      {fourthPour !== "" && <Text>{fourthPour}</Text>}
      {fifthPour !== "" && <Text>{fifthPour}</Text>}
    </View>
  );
}
