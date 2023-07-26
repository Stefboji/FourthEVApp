import { View, Text, StyleSheet, Image } from "react-native";
import { responsiveHeight, responsiveWidth } from "../../utils/dimensionHelper";

interface CarSliderItemProps {
  name: string;
  imagePath: string;
}

const CarSliderItem = ({ name, imagePath }: CarSliderItemProps) => {
    console.log(imagePath)
  return (
    <View style={styles.container}>
        <View style={styles.carTextContainer}>
      <Text style={styles.carHeaderText}>{name}</Text>
      <Text style={styles.carSubText}>{name}</Text></View>
      <Image 
        source={imagePath}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: 173,
        marginRight: 14,
        height: 200,
    },
    image: {
        width: responsiveWidth(173),
        height: responsiveHeight(92),
        position: 'absolute',
        bottom: 0,
    },
    carTextContainer:{
        width: responsiveWidth(105),
        borderWidth: 2,
        borderColor: 'yellow',
        height: responsiveHeight(75),
        alignItems: 'center',
        backgroundColor: "#189CFF",
        borderRadius: 10,
        padding: 6,
    },
    carHeaderText: {
        fontSize: 18,
        fontWeight: "700",
        color: 'whiute',
    },
    carSubText: {
        fontSize: 14,
        color: "white",
    }
})
export default CarSliderItem;
