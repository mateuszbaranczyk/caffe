import { useState } from "react";
import { ScrollView } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import ButtonChoice from "@/components/ButtonChoice";
import { Text, TextInput, Button, Card } from "react-native-paper";

type RootStackParamList = {
  Recipe: {
    coffeeAmount: string;
    selectStrength: string;
    selectSweetness: string;
  };
};

export default function Calculator() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [coffeeAmount, setCoffeeAmount] = useState("");
  const [selectStrength, setSelectStrength] = useState("");
  const [selectSweetness, setSelectSweetness] = useState("");

  const strengthChoices = [
    { value: "soft", label: "Soft" },
    { value: "medium", label: "Medium" },
    { value: "strong", label: "Strong" },
  ];
  const sweetnessChoices = [
    { value: "standard", label: "Standard" },
    { value: "sweeter", label: "Sweeter" },
    { value: "brighter", label: "Brighter" },
  ];

  const handleCalculate = () => {
    navigation.navigate("Recipe", {
      coffeeAmount: "300",
      selectStrength: "medium",
      selectSweetness: "low",
    });
  };

  return (
    <ScrollView>
      <Card>
        <Card.Title title="Step right up and craft your dream cup of coffee!" />
        <Card.Content>
          <Text variant="bodyLarge">How much coffee would you like?</Text>
          <TextInput
            mode="outlined"
            label="Weight in grams"
            placeholder="Weight in grams"
            value={coffeeAmount}
            onChangeText={setCoffeeAmount}
          />
          <ButtonChoice buttons={strengthChoices} value={selectStrength} setValue={setSelectStrength} />
          <ButtonChoice buttons={sweetnessChoices} value={selectSweetness} setValue={setSelectSweetness} />
          <Button mode="contained" onPress={() => handleCalculate()}>
            Calculate
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
