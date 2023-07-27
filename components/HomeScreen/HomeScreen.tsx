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
      price: 47,
      imagePath: require("../../assets/BMWi8.png"),
    },

    {
      id: 2,
      name: "BWMI4",
      price: 90,
      imagePath: require("../../assets/BMWi4.png"),
    },

    {
      id: 3,
      name: "BMWiX",
      price: 80,
      imagePath: require("../../assets/BMWiX.png"),
    },

    {
      id: 4,
      name: "IPace",
      price: 70,
      imagePath: require("../../assets/IPace.png"),
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
