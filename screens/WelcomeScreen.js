import { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../store/auth-context";
import { getProfile } from "../util/auth";

function WelcomeScreen() {
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
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome {name}!</Text>
      <Text>You authenticated successfully!</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
