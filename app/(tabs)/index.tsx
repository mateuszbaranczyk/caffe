import { useState } from "react";
import { Text, View, TextInput, Pressable } from "react-native";

import { styles } from "@/components/styles";

import RadioChoice from "@/components/RadioChoice";

export default function Calculator() {
  const [coffeeAmount, setCoffeeAmount] = useState("");
  const [selectStrength, setSelectStrength] = useState("medium");
  const [selectSweetness, setSelectSweetness] = useState("sweeter");
  
  const strengthChoices = [
    { value: "soft", label: "Soft" },
    { value: "medium", label: "Medium" },
    { value: "strong", label: "Strong" }
  ];
  const sweetnessChoices = [
    { value: "standard", label: "Standard" },
    { value: "sweeter", label: "Sweeter" },
    { value: "brighter", label: "Brighter" }
  ];

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textIntro}>Prepared for 4:6 method by Tetsu Kasuya</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>How much coffee would you like?</Text>
        <TextInput
          style={styles.input}
          placeholder="Weight in grams"
          value={coffeeAmount}
          onChangeText={setCoffeeAmount}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.radioContainer}>
        <RadioChoice 
        choices={strengthChoices}
        title="Strength"
        status={selectStrength}
        onPress={setSelectStrength} />
      </View>
      <View style={styles.radioContainer}>
        <RadioChoice
        choices={sweetnessChoices}
        title="Sweetness"
        status={selectSweetness}
        onPress={setSelectSweetness} />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => console.log(selectStrength, selectSweetness, coffeeAmount)}>
          <Text style={styles.buttonLabel}>Calculate</Text>
        </Pressable>
      </View>
    </>
  );
}
