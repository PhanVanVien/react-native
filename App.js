import "react-native-gesture-handler";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import ClothesOverviewScreen from "./screens/ClothesOverviewScreen";
import ClotheDetailScreen from "./screens/ClotheDetailScreen";
import { useFonts } from "expo-font";
import FavoriteScreen from "./screens/FavoriteScreen";
import { Ionicons } from "@expo/vector-icons";
import VideoPlayerScreen from "./screens/VideoPlayerScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import CameraScreen from "./screens/CameraScreen";
import FavoritesContextProvider from "./store/context/favorites-context";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import { useContext, useEffect, useState } from "react";
import WelcomeScreen from "./screens/WelcomeScreen";
import { Image, StyleSheet } from "react-native";
import ProfileScreen from "./screens/ProfileScreen";
import { getProfile } from "./util/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";
import AllPlaces from "./screens/AllPlaces";
import IconButton from "./components/IconButton";
import AddPlace from "./screens/AddPlace";
import Map from "./screens/Map";
import { init } from "./util/database";
import PlaceDetails from "./screens/PlaceDetails";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const authCtx = useContext(AuthContext);

  return (
    <DrawerContentScrollView>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("./assets/images/logo1.png")}
      />
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={authCtx.logout}
        icon={({ color, size }) => (
          <Ionicons name="exit-outline" color={color} size={size} />
        )}
        labelStyle={{ fontFamily: "metropolis-bold" }}
        style={styles.customDrawerItem}
      />
    </DrawerContentScrollView>
  );
}

function DrawerNavigator() {
  const [name, setName] = useState("");
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  getProfile(token)
    .then((profile) => {
      setName(profile.name);
    })
    .catch((error) => {
      console.error("Error fetching user profile:", error);
    });

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white",
        drawerInactiveTintColor: "black",
        drawerActiveTintColor: "white",
        drawerActiveBackgroundColor: "black",
        drawerLabelStyle: { fontFamily: "metropolis-bold" },
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerLabel: `${name}`,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          drawerLabel: "Favorites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Camera"
        component={AllPlaces}
        options={({ navigation }) => ({
          drawerLabel: "Camera",
          title: "Your Favorite Places",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="camera" color={color} size={size} />
          ),
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="add"
              size={24}
              color={tintColor}
              onPress={() => navigation.navigate("AddPlace")}
            />
          ),
        })}
      />
      <Drawer.Screen
        name="Video"
        component={VideoPlayerScreen}
        options={{
          drawerLabel: "Video",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="film" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="DrawerScreen"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ClothesOverview" component={ClothesOverviewScreen} />
      <Stack.Screen name="ClotheDetail" component={ClotheDetailScreen} />
      <Stack.Screen
        name="AddPlace"
        component={AddPlace}
        options={{ title: "Add a new Place" }}
      />
      <Stack.Screen
        name="AllPlaces"
        component={AllPlaces}
        options={{ title: "Add a new Place" }}
      />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="PlaceDetails" component={PlaceDetails} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

  useEffect(() => {
    // Prevent the splash screen from auto-hiding
    SplashScreen.preventAutoHideAsync();

    // Hide the splash screen when you're ready (in this case, when isTryingLogin is false)
    if (!isTryingLogin) {
      SplashScreen.hideAsync();
    }
  }, [isTryingLogin]);

  return <Navigation />;
}

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    init()
      .then(() => {
        setDbInitialized(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Initialize fonts regardless of the condition
  const [fontsLoaded] = useFonts({
    "metropolis-thin": require("./assets/fonts/Metropolis-Thin.otf"),
    "metropolis-light": require("./assets/fonts/Metropolis-Light.otf"),
    "metropolis-regular": require("./assets/fonts/Metropolis-Regular.otf"),
    "metropolis-medium": require("./assets/fonts/Metropolis-Medium.otf"),
    "metropolis-bold": require("./assets/fonts/Metropolis-Bold.otf"),
  });

  if (!dbInitialized) {
    return <AppLoading />;
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar backgroundColor="black" style="light" />
      <AuthContextProvider>
        <FavoritesContextProvider>
          <Root />
        </FavoritesContextProvider>
      </AuthContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  customDrawerItem: {
    borderTopWidth: 1,
    borderTopColor: "gray",
  },
  image: { alignSelf: "center", margin: 20, height: 50, width: "100%" },
});
