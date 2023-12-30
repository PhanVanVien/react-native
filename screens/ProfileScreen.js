import { useContext, useState } from "react";
import { getProfile } from "../util/auth";
import { AuthContext } from "../store/auth-context";
import { StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [createdAt, setCreateAt] = useState("");
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  getProfile(token)
    .then((profile) => {
      setName(profile.name);
      setAddress(profile.address);
      setPhone(profile.phone);
    })
    .catch((error) => {
      console.error("Error fetching user profile:", error);
    });
  return (
    <View>
      <Text style={styles.title}>Name: {name}</Text>
      <Text style={styles.title}>Address: {address}</Text>
      <Text style={styles.title}>Phone: {phone}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontFamily: "metropolis-medium",
    textAlign: "center",
    fontSize: 18,
    color: "black",
    marginTop: 8,
  },
});
