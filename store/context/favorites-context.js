import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteClotheIds, setFavoriteClotheIds] = useState([]);

  function addFavorite(id) {
    setFavoriteClotheIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorite(id) {
    setFavoriteClotheIds((currentFavIds) =>
      currentFavIds.filter((clotheId) => clotheId !== id)
    );
  }

  const value = {
    ids: favoriteClotheIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
