import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Calculator from ".";
import Recipe from "./recipe";
import { COLORS } from "@/components/theme";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        headerStyle: {
          backgroundColor: COLORS.background,
        },
        headerShadowVisible: false,
        headerTintColor: COLORS.text,
        tabBarStyle: {
          backgroundColor: COLORS.background,
        },
      }}
    >
      <Tab.Screen
        name="Calculator"
        component={Calculator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "calculator" : "calculator-outline"} color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Recipe"
        component={Recipe}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "book" : "book-outline"} color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
