import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroScreen from "./components/IntroScreen/IntroScreen";
import Register from "./components/RegisterScreen/register";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="IntroScreen" component={IntroScreen} />
        <Stack.Screen name="RegisterScreen" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
