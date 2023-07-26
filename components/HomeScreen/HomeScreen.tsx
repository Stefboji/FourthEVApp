import React, {  } from "react";
import {
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { responsiveHeight } from "../../utils/dimensionHelper";
import Category from "./Category";

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const data = [
    {
      id: 1,
      name: "BMWi8",
      imagePath: require("../../assets/BMWi8.png"),
    },

    {
      id: 2,
      name: "Object 2",
      imagePath: require("../../assets/BMWi8.png"),
    },

    {
      id: 3,
      name: "Object 3",
      imagePath: require("../../assets/BMWi8.png"),
    },

    {
      id: 4,
      name: "Object 4",
      imagePath: require("../../assets/BMWi8.png"),
    },
  ];

  
  return (
    <SafeAreaView>
      <Category name="Recently added"
      data={data}/>

      <Category name="Best range"
      data={data}/>
      <Category name="Summer fit"
      data={data}/>
      <Category name="Most rented"
      data={data}/>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  categoryContainer: {
    height: responsiveHeight(157),
    width: "100%",
    paddingHorizontal: 16,
  },
});

export default HomeScreen;
