import { Button, Text } from "react-native-paper";

interface Props {
  timer: number;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
}

export default function Timer({ timer, onStart, onStop, onReset }: Props) {
  return (
    <>
      <Text>{timer} seconds</Text>
      <Button mode="contained" onPress={onStart}>
        Start
      </Button>
      <Button mode="contained" onPress={onStop}>
        Stop
      </Button>
      <Button mode="contained" onPress={onReset}>
        Reset
      </Button>
    </>
  );
}
