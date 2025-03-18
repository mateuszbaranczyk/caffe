import { useState } from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { styles } from "@/components/styles";

import RadioChoice from "@/components/RadioChoice";

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
  const [selectStrength, setSelectStrength] = useState("medium");
  const [selectSweetness, setSelectSweetness] = useState("sweeter");

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
      coffeeAmount,
      selectStrength,
      selectSweetness,
    });
  };

  return (
    <>
      <View>
        <Text>Prepared for 4:6 method by Tetsu Kasuya</Text>
      </View>
      <View>
        <Text>How much coffee would you like?</Text>
        <TextInput
          placeholder="Weight in grams"
          value={coffeeAmount}
          onChangeText={setCoffeeAmount}
          keyboardType="numeric"
        />
      </View>
      <View>
        <RadioChoice choices={strengthChoices} title="Strength" status={selectStrength} onPress={setSelectStrength} />
      </View>
      <View>
        <RadioChoice
          choices={sweetnessChoices}
          title="Sweetness"
          status={selectSweetness}
          onPress={setSelectSweetness}
        />
      </View>
      <View>
        <Pressable onPress={() => handleCalculate()}>
          <Text>Calculate</Text>
        </Pressable>
      </View>
    </>
  );
}
