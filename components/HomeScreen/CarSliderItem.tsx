import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { responsiveHeight, responsiveWidth } from "../../utils/dimensionHelper";

interface CarSliderItemProps {
  name: string;
  imagePath: string;
  price: number;
  handleCarSelect: () => void;
}

const CarSliderItem = ({ name, imagePath, price, handleCarSelect }: CarSliderItemProps) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={1}
     onPress={handleCarSelect}
    >
        <View style={styles.carTextContainer}>
      <Text style={styles.carHeaderText}>{name}</Text>
      <Text style={styles.carSubText}>from BGN {price}</Text></View>
      <Image 
        source={imagePath}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: responsiveWidth(190),
        paddingHorizontal: responsiveWidth(16),
        height: responsiveHeight(130),
        alignItems: 'center'
    },
    image: {
        width: responsiveWidth(173),
        height: responsiveHeight(92),
        position: 'absolute',
        bottom: 0,
    },
    carTextContainer:{
        width: responsiveWidth(105),
        height: responsiveHeight(100),
        alignItems: 'center',
        backgroundColor: "#E372FF",
        borderRadius: 10,
        padding: 6,
    },
    carHeaderText: {
        fontSize: 18,
        fontWeight: "700",
        color: 'white',
    },
    carSubText: {
        fontSize: 14,
        color: "white",
    }
})
export default CarSliderItem;
