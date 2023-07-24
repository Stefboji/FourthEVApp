import BottomSheet, {
  BottomSheetTextInput,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import CustomButton from "../utils/CustomButton";

interface RegisterProps {
  onRegisterClose: () => void;
  onRegisterSubmit: (payload: any) => void;
}

const Register = ({ onRegisterClose, onRegisterSubmit }: RegisterProps) => {
    const[username, setUsername] =useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={["65%"]}
      enablePanDownToClose
      onClose={onRegisterClose}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Text style={styles.headerText}>Register</Text>
        
        <BottomSheetTextInput 
            style={styles.input}
             placeholder="Username" 
             placeholderTextColor={"#757575"}
             value={username}
             onChangeText={(value:string) => setUsername(value) }
            />
        <BottomSheetTextInput 
            style={styles.input} 
            placeholder="Email" 
            placeholderTextColor={"#757575"}
            value={email}
            onChangeText={(value: string) => setEmail(value)}
        />
        <BottomSheetTextInput 
            style={styles.input} 
            placeholder="Password" 
            placeholderTextColor={"#757575"}
            value={password}
            onChangeText={(value:string) => setPassword(value)}
            secureTextEntry
        />
      
      <CustomButton
        text='Register'
        onPress={() => onRegisterSubmit({})}
        buttonStyle={styles.button}
        textStyle={styles.text}/>
        </BottomSheetView>
    </BottomSheet>
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  input: {
    width: "100%",
    marginHorizontal: 16,
    marginBottom: 32,
    borderRadius: 10,
    fontSize: 16,
    height: 48,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#757575",
  },
  headerText:{
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
    marginBottom: 33,
    marginTop: 7,
  },
  button:{
    width: 361,
    backgroundColor: "#F0EDFF",
    height: 48,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop:34,
    marginBottom: 150,
    marginHorizontal: 16,
  },
  text:{
    color: "black",
    fontSize: 16,
    fontWeight: "600",
  }

});

export default Register;
