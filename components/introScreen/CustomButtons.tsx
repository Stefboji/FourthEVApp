import { StyleSheet, Text, View, Alert, Pressable } from "react-native";
import CustomButton from "../utils/CustomButton";


interface CutsomButtonsProps {
  onGetStartedClicked: ()=> void,
  onLoginClicked: () => void,
}
const CustomButtons = ({ onGetStartedClicked, onLoginClicked}: CutsomButtonsProps) => {
  
  return (
    <View>
      <CustomButton
        text='Get Started'
        onPress={onGetStartedClicked}
        buttonStyle={styles.regButton}
        textStyle={styles.regButtonText}
      />
     <CustomButton
      text='Login'
      onPress={onLoginClicked}
      buttonStyle={styles.logButton}
      textStyle={styles.logButtonText}
      />
    </View>
  );
};

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
});

export default CustomButtons;
