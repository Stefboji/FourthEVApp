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

  function submitRegister(data: {}) {
    console.log(data);
    fetch("http://192.168.115.101:5000/api/Users/Register", {
      method: "POST",
      headers: {
        "Content-Type": "application-json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {console.log("here maybe")
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }console.log("here")
        // Process the response data here
        return response.json();
      })
      .then((data) => console.log("Ready: ", data))
      .catch((error: any) => {console.log(error)
        console.log(error.message);
      });
  }

  const handleAuth = (payload: {}) => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
    //submitRegister(payload);
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
