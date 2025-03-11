import { useState } from "react";
import { Text, View, TextInput, Pressable } from "react-native";

import { styles } from "@/components/styles";

import LabeledRadioButton from "@/components/LabeledRadioButton";

export default function Calculator() {
  const [coffeeAmount, setCoffeeAmount] = useState("");
  const [selectStrength, setSelectStrength] = useState("medium");
  const [selectSweetness, setSelectSweetness] = useState("sweeter");

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
        <LabeledRadioButton
          value="soft"
          label="Soft"
          status={selectStrength}
          onPress={() => setSelectStrength("soft")}
        />
        <LabeledRadioButton
          value="medium"
          label="Medium"
          status={selectStrength}
          onPress={() => setSelectStrength("medium")}
        />
        <LabeledRadioButton
          value="hard"
          label="Hard"
          status={selectStrength}
          onPress={() => setSelectStrength("hard")}
        />
      </View>
      <View style={styles.radioContainer}>
        <LabeledRadioButton
          value="standard"
          label="Standard"
          status={selectSweetness}
          onPress={() => setSelectSweetness("standard")}
        />
        <LabeledRadioButton
          value="sweeter"
          label="Sweeter"
          status={selectSweetness}
          onPress={() => setSelectSweetness("sweeter")}
        />
        <LabeledRadioButton
          value="brighter"
          label="Brighter"
          status={selectSweetness}
          onPress={() => setSelectSweetness("brighter")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => console.log(selectStrength, selectSweetness, coffeeAmount)}>
          <Text style={styles.buttonLabel}>Calculate</Text>
        </Pressable>
      </View>
    </>
  );
}
