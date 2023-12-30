import { Image, ScrollView, StyleSheet, Text } from "react-native";
import { CLOTHES } from "../data/dummy-data";
import { View } from "react-native";
import Subtitle from "../components/ClotheDetail/Subtitle";
import List from "../components/ClotheDetail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { useNavigation } from "@react-navigation/native";
import { FavoritesContext } from "../store/context/favorites-context";

function ClotheDetailScreen({ route }) {
  const favoriteClothesCtx = useContext(FavoritesContext);
  const navigation = useNavigation();
  const id = route.params.clotheId;

  const selectedClothe = CLOTHES.find((clothe) => clothe.id === id);
  const clotheIsFavorite = favoriteClothesCtx.ids.includes(id);

  function headerButtonPressHandler() {
    if (clotheIsFavorite) {
      favoriteClothesCtx.removeFavorite(id);
    } else {
      favoriteClothesCtx.addFavorite(id);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={clotheIsFavorite ? "heart" : "heart-outline"}
            color="white"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Image style={styles.image} source={{ uri: selectedClothe.image }} />
        <Text style={styles.title}>{selectedClothe.title}</Text>
        <View>
          <Text style={styles.detailItem}>{selectedClothe.price}đ</Text>
        </View>
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Description</Subtitle>
            <List data={selectedClothe.description} />
            <Subtitle>Material</Subtitle>
            <List data={selectedClothe.material} />
            <Subtitle>Handling</Subtitle>
            <List data={selectedClothe.processing} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default ClotheDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 300,
  },
  title: {
    fontFamily: "metropolis-medium",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "black",
  },
  detailText: {
    color: "black",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "100%",
  },
  detailItem: {
    fontFamily: "metropolis-regular",
    fontSize: 16,
    textAlign: "center",
    paddingBottom: 8,
    color: "black",
  },
});
