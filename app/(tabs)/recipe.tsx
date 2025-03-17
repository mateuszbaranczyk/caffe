import { Text, View } from "react-native";

import InitialPour from "@/components/InitialPour";

export default function Recipe({ route }: any) {
  const { coffeeAmount, selectStrength, selectSweetness } = route.params;

  const dose = Math.round(coffeeAmount / 15);

  return (
    <View>
      <Text>Dose: {dose} g</Text>
      <InitialPour sweetness={selectSweetness} weight={coffeeAmount} />
    </View>
  );
}
