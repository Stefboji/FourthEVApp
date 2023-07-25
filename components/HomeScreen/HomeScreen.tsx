import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  NativeSyntheticEvent,
  Animated,
  ViewToken,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CarSliderItem from "./CarSliderItem";
import { NativeScrollEvent } from "react-native";

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const data = [
    {
      id: 1,
      name: "Object 1",
      imagePath: "bababa",
    },

    {
      id: 2,
      name: "Object 2",
      imagePath: "bababa",
    },

    {
      id: 3,
      name: "Object 3",
      imagePath: "bababa",
    },

    {
      id: 4,
      name: "Object 4",
      imagePath: "bababa",
    },
  ];

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
    }).current
  return (
    <SafeAreaView>
      <Text> Showing all cars</Text>
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
        style={styles.container}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container: {
        borderColor: "black",
        borderWidth: 2,
        height: 157,
        width: "100%",
        paddingHorizontal: 16,
        
    }
});

export default HomeScreen;

