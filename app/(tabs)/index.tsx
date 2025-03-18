import { useState } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
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
    <ScrollView style={styles.containerMain}>
      <View>
        <Text style={styles.textIntro}>The 4:6 method for V60 brewing, by Tetsu Kasuya, divides the process into five pours. The first 40% balances sweetness and acidity, while the remaining 60% adjusts strength. It offers precision and control for a perfectly balanced cup.</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.textAccent}>How much coffee would you like?</Text>
        <TextInput
          style={styles.textInput}
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
      <View style={styles.container}>
        <Pressable style={styles.button} onPress={() => handleCalculate()}>
          <Text style={styles.buttonText}>Calculate</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
