import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CustomButtons from "./CutsomButtons";
import FirstText from "./FirstText";
import Photo from "./Photo";

interface IntroScreenProps {
  navigation: any;
}

const IntroScreen = ({ navigation }: IntroScreenProps) => {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Photo />
      <FirstText />
      <CustomButtons onRegisterClick={() => navigation.navigate('RegisterScreen')} />
    </View>

  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },
  });

export default IntroScreen; 