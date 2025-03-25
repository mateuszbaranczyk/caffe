import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZES, SPACING } from "./theme";

export const styles = StyleSheet.create({
  card: {
    padding: SPACING.sm,
  },
  button: {
    marginVertical: SPACING.md
  },
  textInput: {
    marginVertical: SPACING.md,
  },
  mainContainer: {
    flex: 1,
  },
  surface: {
    padding: SPACING.sm,
    marginVertical: SPACING.md,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SPACING.md,
  },
});
