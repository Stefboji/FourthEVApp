import { Pressable, StyleSheet, Text } from "react-native";

interface CustomButton {
    text: string;
    onPress: () => void
    buttonStyle: {};
    textStyle: {};
}

const CustomButton = ({text,buttonStyle, textStyle, onPress}: CustomButton) => (
    <Pressable 
        style={buttonStyle} 
        onPress={onPress}>
        <Text style={textStyle}>{text}</Text>
      </Pressable>
);

export default CustomButton