import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

function ClotheItem({ id, image, price, title }) {
  const navigation = useNavigation();

  function selectClotheItemHandler() {
    navigation.navigate("ClotheDetail", { clotheId: id });
  }

  return (
    <View style={styles.clotheItem}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectClotheItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View>
            <Text style={styles.detailItem}>{price}đ</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default ClotheItem;

const styles = StyleSheet.create({
  clotheItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    alignItems: "center",
    elevation: 4,
    backgroundColor: "black",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  image: { width: 350, height: 300 },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "black",
  },
  buttonPressed: { opacity: 0.5 },
  title: {
    fontFamily: "metropolis-medium",
    textAlign: "center",
    fontSize: 18,
    color: "white",
    marginTop: 8,
  },
  detailItem: {
    fontFamily: "metropolis-regular",
    fontSize: 16,
    textAlign: "center",
    paddingBottom: 8,
    color: "white",
  },
});
