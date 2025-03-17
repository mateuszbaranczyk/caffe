import { Text, View } from "react-native";

export default function Recipe({ route }: any) {
  const { coffeeAmount, selectStrength, selectSweetness } = route.params;

  return (
    <View>
      <Text>Coffee Amount: {coffeeAmount}</Text>
      <Text>Strength: {selectStrength}</Text>
      <Text>Sweetness: {selectSweetness}</Text>
    </View>
  );
}
