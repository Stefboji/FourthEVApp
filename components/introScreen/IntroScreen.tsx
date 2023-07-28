import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";
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
  const [isAuth, setIsAuth] = useState(false);
  const [userId, setUserId] = useState(0);
  const handleGetStartedClicked = () => {
    setIsRegisterOpen(true);
  };
  const handleLoginClicked = () => {
    setIsLoginOpen(true);
  };

  function submitRegister(data: {}) {
    console.log(data);
    fetch("http://172.20.10.8:5000/api/Users/Register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setUserId(data);
        setIsAuth(true);
      })
      .catch((error: any) => {console.log(error)
        console.log(error.message);
      });
  }

  const alertAuth = () => {
    Alert.alert(`User is authenticated! User ID: ${userId}`);
    return <></>;
  }

  const handleAuth = (payload: {}) => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
    submitRegister(payload);
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
      {isLoginOpen && (
        <Login
          onLoginClose={() => setIsLoginOpen(false)}
          onLoginSubmit={handleAuth}
        />
      )}
      {isAuth && alertAuth()}
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
