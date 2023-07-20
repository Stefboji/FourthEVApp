import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  Pressable,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width;

const Photo = () => {
  return (
    <View>
      <Image style={styles.photo} source={require("./assets/CarPhoto.png")} />
    </View>
  );
};
const styles = StyleSheet.create({
  photo: {
    width: windowWidth,
  },
});

export default Photo;
