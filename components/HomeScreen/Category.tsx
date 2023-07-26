import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ViewToken,
} from "react-native";
import { responsiveHeight, responsiveWidth } from "../../utils/dimensionHelper";
import CarSliderItem from "./CarSliderItem";
import { useRef, useState } from "react";
import Pagination from "../utils/Pagination";

interface CategoryProps {
  name: string;
  data: {
    id: number;
    name: string;
    imagePath: string;
  }[];
}

const Category = ({ name, data }: CategoryProps) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };
  const [index, setIndex] = useState(0);

  const handleOnViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      setIndex(viewableItems[0].index || 0);
    }
  ).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;
  
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.titleText}>{name}</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CarSliderItem
            key={item.id}
            name={item.name}
            imagePath={item.imagePath}
          />
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={data} scrollX={scrollX} index={index}/>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    borderColor: "black",
    borderWidth: 2,
    height: 157,
    width: "100%",
    paddingHorizontal: responsiveWidth(16),
    marginVertical: responsiveHeight (20),
  },
  titleText: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: responsiveHeight(10),
  }
});

export default Category;
