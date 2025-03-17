import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Calculator from ".";
import Recipe from "./recipe";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Calculator" component={Calculator} />
      <Tab.Screen name="Recipe" component={Recipe} />
    </Tab.Navigator>
  );
}
