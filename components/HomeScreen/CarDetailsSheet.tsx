import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Image, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { Car } from "../../interfaces/Car";
import { responsiveHeight, responsiveWidth } from "../../utils/dimensionHelper";
import CarTechDetails from "../utils/CarTechDetails";
import BookingCalendar from "./BookingCalendar";

interface CarDetailsSheetProps {
  data: Car;
  onClose: () => void;
}

const CarDetailsSheet = ({ data, onClose }: CarDetailsSheetProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={["80%"]}
      enablePanDownToClose
      onClose={onClose}
    >
      <BottomSheetView style={styles.container}>
        <Text style={styles.headerText}>{data.name}</Text>
        <Image source={data.imagePath} style={styles.image} />
        <View style={styles.detailsContainer}>
          <CarTechDetails title="225km" desc="Range" />
          <CarTechDetails title="245km/h" desc="Top speed" />
          <CarTechDetails title="30min" desc="Charge time" />
        </View>
        <View style={styles.calendarContainer}>
          <BookingCalendar />
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(16),
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
  },
  image: {
    width: "100%",
    height: responsiveHeight(188),
  },
  detailsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: responsiveHeight(20),
  },
  calendarContainer: {
    height: responsiveHeight(380),
    width: "100%",
  },
});

export default CarDetailsSheet;
