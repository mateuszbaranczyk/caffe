import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Calculator' }} />
      <Tabs.Screen name="recipe" options={{ title: 'Recipe' }} />
    </Tabs>
  );
}
