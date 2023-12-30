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
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

function ClothesOverviewScreen({ route }) {
  const navigation = useNavigation();
  const catId = route.params.categoryId;

  const displayedClothe = CLOTHES.filter((clotheItem) => {
    return clotheItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

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

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedClothe}
        keyExtractor={(item) => item.id}
        renderItem={renderClotheItem}
      />
    </View>
  );
}

export default ClothesOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
