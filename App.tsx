import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  Pressable,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Photo from "./components/introScreen/Photo";
import FirstText from "./components/introScreen/FirstText";
import CustomButtons from "./components/introScreen/CutsomButtons";



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Photo />
      <FirstText />
      <CustomButtons />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  
});
