import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomButtons from "./CustomButtons";
import FirstText from "./FirstText";
import Photo from "./Photo";
import { useState } from "react";
import Register from "../RegisterScreen/Register";
import Login from "../LoginScreen/Login";

interface IntroScreenProps {
  navigation: any;
}

const IntroScreen = ({ navigation }: IntroScreenProps) => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const handleGetStartedClicked = () => {
    setIsRegisterOpen(true);
  };
  const handleLoginClicked = () => {
    setIsLoginOpen(true);
  };

  const handleAuth = (payload: {}) => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
    navigation.navigate("HomeScreen");
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Photo />
      <FirstText />
      <CustomButtons
        onGetStartedClicked={handleGetStartedClicked}
        onLoginClicked={handleLoginClicked}
      />
      {isRegisterOpen && (
        <Register
          onRegisterClose={() => setIsRegisterOpen(false)}
          onRegisterSubmit={handleAuth}
        />
      )}
      {isLoginOpen && <Login onLoginClose={() => setIsLoginOpen(false)}
      onLoginSubmit={handleAuth} />}
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
