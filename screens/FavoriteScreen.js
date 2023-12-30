import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { CLOTHES, CATEGORIES } from "../data/dummy-data";
import ClotheItem from "../components/ClotheItem";
import { useContext, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FavoritesContext } from "../store/context/favorites-context";

function FavoriteScreen() {
  const favoriteClothesCtx = useContext(FavoritesContext);

  // const displayedClothe = CLOTHES.filter((clotheItem) => {
  //   return clotheItem.favorite === true;
  // });
  const favoriteClothes = CLOTHES.filter((clothe) =>
    favoriteClothesCtx.ids.includes(clothe.id)
  );

  function renderClotheItem(itemData) {
    const item = itemData.item;

    const clotheItemProps = {
      id: item.id,
      image: item.image,
      price: item.price,
      title: item.title,
      processing: item.processing,
      description: item.description,
      material: item.material,
    };

    return <ClotheItem {...clotheItemProps} />;
  }

  if (favoriteClothes.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No clothes added yet - start adding some!
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteClothes}
        keyExtractor={(item) => item.id}
        renderItem={renderClotheItem}
      />
    </View>
  );
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  fallbackText: {
    fontSize: 16,
    fontFamily: "metropolis-medium"
  }
});
