import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { StyleSheet, Text } from "react-native";
import React, {useRef} from "react";

interface CarDetailsSheetProps {
    data: {}
}

const CarDetailsSheet = ({data}: CarDetailsSheetProps) => {
    const bottomSheetRef = useRef<BottomSheet>(null);
  return (
    <BottomSheet 
     ref={bottomSheetRef}
     snapPoints={['65%']}
     enablePanDownToClose
    >
        <BottomSheetView style={styles.container}>
            <Text>Title</Text>
        </BottomSheetView>
        
    </BottomSheet>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }

});

export default CarDetailsSheet