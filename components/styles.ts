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
    fontSize: theme.fontSizes.medium,
    margin: theme.spacing.md,
  },
  textInput: {
    borderRadius: theme.borderRadius.medium,
    alignItems: 'center',
    padding: theme.spacing.md,
    margin: theme.spacing.md,
    marginHorizontal: theme.spacing.md,
    backgroundColor: theme.colors.primary,
    fontSize: theme.fontSizes.medium,
    color: theme.colors.background,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.medium,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: theme.spacing.md,
    margin: theme.spacing.md,
  },
  containerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing.sm,
  },
  buttonText: {
    color: theme.colors.background,
    fontSize: theme.fontSizes.large,
  },
});
