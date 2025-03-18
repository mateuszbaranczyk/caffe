import { StyleSheet } from "react-native";
import { theme } from "./theme";
import { Button } from "react-native-paper";

export const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  textIntro: {
    color: theme.colors.text,
    fontSize: theme.fontSizes.large,
    margin: theme.spacing.md,
  },
  textAccent: {
    color: theme.colors.text,
    fontSize: theme.fontSizes.large,
    margin: theme.spacing.md,
    fontWeight: "bold",
  },
  textInput: {
    height: 50,
    width: "80%",
    borderColor: theme.colors.secondary,
    borderWidth: theme.spacing.xs,
    borderRadius: theme.borderRadius.medium,
    paddingHorizontal: theme.spacing.md,
    backgroundColor: theme.colors.primary,
    fontSize: theme.fontSizes.large,
    color: theme.colors.background,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.md,
    margin: theme.spacing.md,
  },
  buttonText: {
    color: theme.colors.background,
    fontSize: theme.fontSizes.large,
  },
});
