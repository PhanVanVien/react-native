import { Text, StyleSheet } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;
const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
  },
});
