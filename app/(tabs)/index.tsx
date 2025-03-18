import { useState } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { styles } from "@/components/styles";

import RadioChoice from "@/components/RadioChoice";
import { theme } from "@/components/theme";

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
      coffeeAmount: "300",
      selectStrength: "medium",
      selectSweetness: "low",
    });
  };

  return (
    <ScrollView style={styles.containerMain}>
      <View>
        <Text style={styles.textIntro}>Step right up and craft your dream cup of coffee!</Text>
      </View>
      <View>
        <View style={styles.containerInput}>
          <Text style={styles.textAccent}>How much coffee would you like?</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Weight in grams"
            value={coffeeAmount}
            onChangeText={setCoffeeAmount}
            keyboardType="numeric"
            placeholderTextColor={theme.colors.secondary}
          />
        </View>
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
        <View style={styles.containerButton}>
          <Pressable style={styles.button} onPress={() => handleCalculate()}>
            <Text style={styles.buttonText}>Calculate</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
