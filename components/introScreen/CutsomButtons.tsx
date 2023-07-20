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
    regButton: {
        width: 361,
        backgroundColor: "#F0EDFF",
        height: 48,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 44,
        marginBottom: 5,
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
        fontWeight: "500",
      },
  })  

  export default CustomButtons;