import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { Car } from "../../interfaces/Car";
import { responsiveHeight, responsiveWidth } from "../../utils/dimensionHelper";
import CarTechDetails from "../utils/CarTechDetails";
import BookingCalendar from "./BookingCalendar";
import CustomButton from "../utils/CustomButton";

interface CarDetailsSheetProps {
  data: Car;
  onClose: () => void;
}

const CarDetailsSheet = ({ data, onClose }: CarDetailsSheetProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={["85%"]}
      enablePanDownToClose
      onClose={onClose}
    >
      <BottomSheetView style={styles.container}>
        <Text style={styles.headerText}>{data.name}</Text>
        <Image source={data.imagePath} style={styles.image} />
        <View style={styles.detailsContainer}>
          <CarTechDetails title={`${data.range}km`} desc="Range" />
          <CarTechDetails title={`${data.topSpeed}km/h`} desc="Top speed" />
          <CarTechDetails title={`${data.chargeTime}min`} desc="Charge time" />
        </View>
        <View style={styles.calendarContainer}>
          <BookingCalendar />
        </View>
        <View style ={styles.buttonsContainer}>
            <CustomButton buttonStyle ={styles.cancelButton}
            text="Cancel"
            textStyle={styles.buttonText}
            onPress={onClose}/>
            <CustomButton
            buttonStyle={styles.submitButton}
            text="Reserve"
            textStyle={styles.buttonText}
            onPress={() => Alert.alert("Reservation has been made")}/>
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
  },
  buttonsContainer: {
    flex: 1,
    flexDirection:"row",
    justifyContent: 'space-around'
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
  },
  submitButton: {
    width: responsiveWidth(180),
    backgroundColor: "#F0EDFF",
    height: 48,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButton: {
    color: "white",
    width: responsiveWidth(180),
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,

  },
});

export default CarDetailsSheet;
