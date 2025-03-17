import { Text, View, Pressable } from "react-native";
import React, { useState, useEffect } from "react";

import InitialPour from "@/components/InitialPour";
import PourOver from "@/components/PourOver";

export default function Recipe({ route }: any) {
  const { coffeeAmount, selectStrength, selectSweetness } = route.params;
  const dose = Math.round(coffeeAmount / 15);

  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else if (!isRunning && interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval); // Cleanup on unmount
    };
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTimer(0);
  };

  return (
    <View>
      <Text>Dose: {dose} g</Text>
      <InitialPour sweetness={selectSweetness} weight={coffeeAmount} />
      <PourOver strength={selectStrength} weight={coffeeAmount}/>
      <Text>Timer: {timer} seconds</Text>
      <View>
        <Pressable onPress={startTimer}><Text>Start</Text></Pressable>
        <Pressable onPress={stopTimer}><Text>Stop</Text></Pressable>
        <Pressable onPress={resetTimer}><Text>Reset</Text></Pressable>
      </View>
    </View>
  );
}
