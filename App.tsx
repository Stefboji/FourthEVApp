import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroScreen from "./components/IntroScreen/IntroScreen";
import Register from "./components/RegisterScreen/Register";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HomeScreen from "./components/HomeScreen/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="IntroScreen" component={IntroScreen} />
          { <Stack.Screen name="HomeScreen" component={HomeScreen} /> }
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
