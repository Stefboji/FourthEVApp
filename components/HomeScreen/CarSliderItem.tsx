import { View, Text } from "react-native";

interface CarSliderItemProps {
  name: string;
  imagePath: string;
}

const CarSliderItem = ({ name, imagePath }: CarSliderItemProps) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default CarSliderItem;
