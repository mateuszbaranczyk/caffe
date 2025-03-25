import { useState } from "react";
import { ScrollView, View } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import ButtonChoice from "@/components/ButtonChoice";
import { Text, TextInput, Button, Card } from "react-native-paper";
import { styles } from "@/components/styles";
import { SafeAreaView } from "react-native-safe-area-context";

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
      coffeeAmount: coffeeAmount,
      selectStrength: selectStrength,
      selectSweetness: selectSweetness,
    });
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <Card.Content>
          <Text variant="headlineSmall">Step right up and craft your dream cup of coffee!</Text>
          <View style={styles.textInput}>
            <Text variant="bodyLarge">How much coffee would you like?</Text>
            <TextInput
              mode="outlined"
              label="Weight in grams"
              placeholder="Weight in grams"
              value={coffeeAmount}
              onChangeText={setCoffeeAmount}
            />
          </View>
          <ButtonChoice
            label="Strength"
            buttons={strengthChoices}
            value={selectStrength}
            setValue={setSelectStrength}
          />
          <ButtonChoice
            label="Sweetness"
            buttons={sweetnessChoices}
            value={selectSweetness}
            setValue={setSelectSweetness}
          />
          <SafeAreaView edges={[]}>
            <Button style={styles.button} mode="contained" onPress={() => handleCalculate()}>
              Calculate
            </Button>
          </SafeAreaView>
      </Card.Content>
    </ScrollView>
  );
}
