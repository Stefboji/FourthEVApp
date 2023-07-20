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
import {LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get('window').width;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Photo />
      <FirstText />
      <CustomButtons />
    </View>
  );
}

const Photo = () => {
  return (
    <View>
      <Image style={styles.photo} source={require("./assets/CarPhoto.png")} />
    </View>
  );
};

const FirstText = () => {
  const titleText = "Drive the Future";
  const bodyText =
    "Discover a wide selection, combining cutting-edge technology, elegant design, and zero-emissions";

  return (
    <View>
      <Text style={styles.titleText}>{titleText}</Text>
      <Text style={styles.bodyText}>{bodyText}</Text>
    </View>
  );
};

const CustomButtons = () => (
  <View>
    <Pressable
      style={styles.regButton}
      onPress={() => Alert.alert("Going to register")}
    >
      <Text style={styles.regButtonText}>Get started</Text>
    </Pressable>
    <Pressable
      style={styles.logButton}
      onPress={() => Alert.alert("Going to Login")}
    >
      <Text style={styles.logButtonText}>Login</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: "700",
    color: '#E372FF',
    marginTop: 39,
    marginHorizontal: 16,
    marginBottom: 12,
  },
  bodyText:{
   width: 361,
   height: 73,
   fontSize:20,
   marginHorizontal: 16,
   fontWeight: '400',  
   color: "#333",
  },
  regButton: {
    width: 361,
    backgroundColor: "#F0EDFF",
    height: 48,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop:44,
    marginBottom:5,
    marginHorizontal: 16,
  },
  regButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
  },
  logButton: {
    color: "white",
    width: 361,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
  },
  logButtonText: {
    color: "#333",
    fontWeight: '500',

  },
  photo: {
    width: windowWidth,
  }
});
