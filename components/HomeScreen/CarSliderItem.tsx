import { View, Text, StyleSheet } from "react-native";

interface CarSliderItemProps {
  name: string;
  imagePath: string;
}

const CarSliderItem = ({ name, imagePath }: CarSliderItemProps) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'red',
        width: 173,
        marginRight: 14,
        height: 200,
    }
})
export default CarSliderItem;
