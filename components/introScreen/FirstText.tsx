import {
  StyleSheet,
  Text,
  View,
} from "react-native";

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

  const styles = StyleSheet.create({
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
  })
  
  export default FirstText;