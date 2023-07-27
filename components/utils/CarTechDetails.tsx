import { View, StyleSheet, Text } from "react-native";

interface CarTechDetailsProps {
  title: string;
  desc: string;
}

const CarTechDetails = ({ title, desc }: CarTechDetailsProps) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.desc}>{desc}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  desc: {
    color: "#656464",
  },
});

export default CarTechDetails;
