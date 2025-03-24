import { Button, Card, Text } from "react-native-paper";

interface Props {
  timer: number;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
}

export default function Timer({ timer, onStart, onStop, onReset }: Props) {
  return (
    <Card>
      <Card.Title title="Timer" />
      <Card.Content>
        <Text>{timer} seconds</Text>
      </Card.Content>
      <Card.Actions>
        <Button mode="contained" onPress={onStart}>
          Start
        </Button>
        <Button mode="contained" onPress={onStop}>
          Stop
        </Button>
        <Button mode="contained" onPress={onReset}>
          Reset
        </Button>
      </Card.Actions>
    </Card>
  );
}