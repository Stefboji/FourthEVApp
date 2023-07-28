import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { responsiveHeight } from "../../utils/dimensionHelper";
import Category from "./Category";
import { Car } from "../../interfaces/Car";
import CarDetailsSheet from "./CarDetailsSheet";

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [selectCar, setSelectCar] = useState<Car | undefined>(undefined);
  const data: Car[] = [
    {
      id: 1,
      name: "BMW i8",
      price: 47,
      imagePath: require("../../assets/BMWi8.png"),
      range: 300,
      topSpeed: 240,
      chargeTime: 30,
    },

    {
      id: 2,
      name: "BWM i4",
      price: 90,
      imagePath: require("../../assets/BMWi4.png"),
      range: 750,
      topSpeed: 100,
      chargeTime: 45,
    },

    {
      id: 3,
      name: "BMW iX",
      price: 80,
      imagePath: require("../../assets/BMWiX.png"),
      range: 250,
      topSpeed: 290,
      chargeTime: 60,
    },

    {
      id: 4,
      name: "IPace",
      price: 70,
      imagePath: require("../../assets/IPace.png"),
      range: 350,
      topSpeed: 120,
      chargeTime: 20,
    },
  ];
  const handleCarSelect = (id: number) => {
    setSelectCar(data.find((car) => car.id === id));
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Category
          name="Recently added"
          data={data}
          handleCarSelect={handleCarSelect}
        />

        <Category
          name="Best range"
          data={data}
          handleCarSelect={handleCarSelect}
        />
        <Category
          name="Summer fit"
          data={data}
          handleCarSelect={handleCarSelect}
        />
        <Category
          name="Most rented"
          data={data}
          handleCarSelect={handleCarSelect}
        />
      </ScrollView>
      {selectCar && (
        <CarDetailsSheet
          data={selectCar}
          onClose={() => setSelectCar(undefined)}
        />
      )}
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
