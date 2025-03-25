import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { PaperProvider, MD3DarkTheme } from "react-native-paper";

const primary = "#b9d962";
const card = "white";

const theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: primary,
    secondary: "#87a675",
    background: "#1A1A19",
    // segmentedButton checked
    secondaryContainer: "#87a675", // backgroundColor
    onSecondaryContainer: "#1A1A19", // textColor
    // borderColor - primary
    // segmentedButton unchecked
    onSurface: "#fcfff5", // textColor
    outline: primary, // borderColor
    elevation: {
      level0: "transparent",
      level1: "#1e1e1e",
      level2: "#2c2c2c",
      level3: "#383838",
      level4: "#434343",
      level5: "#4f4f4f",
    },
  },
};

export default function RootLayout() {
  return (
    <PaperProvider theme={theme}>
      <Stack>
        <StatusBar style="auto" />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </PaperProvider>
  );
}
