import { StyleSheet, View } from "react-native";

const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    padding: 16,
    marginTop: 24,
    backgroundColor: "black",
    borderRadius: 16,
    elevation: 4,
    alignItems: "center",
  },
});
