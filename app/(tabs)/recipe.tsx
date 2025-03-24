import { ScrollView, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Card, Text } from "react-native-paper";

import InitialPour from "@/components/InitialPour";
import PourOver from "@/components/PourOver";
import Timer from "@/components/Timer";

export default function Recipe({ route }: any) {
  const { coffeeAmount = 0, selectStrength = "medium", selectSweetness = "low" } = route.params || {};
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
    <ScrollView>
      <Card>
        <Card.Title title="Your coffee is on the way" />
        <Card.Content>
          <Text>Dose: {dose} g</Text>
          <InitialPour sweetness={selectSweetness} weight={coffeeAmount} timer={timer} />
          <PourOver strength={selectStrength} weight={coffeeAmount} />
          <Timer timer={timer} onStart={startTimer} onStop={stopTimer} onReset={resetTimer} />
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
