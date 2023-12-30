import { useState } from "react";
import { Alert, Image, StyleSheet, View } from "react-native";

import FlatButton from "../ui/FlatButton";
import AuthForm from "./AuthForm";
import { useNavigation } from "@react-navigation/native";

function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    username: false,
    email: false,
    name: false,
    password: false,
    confirmPassword: false,
  });

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.replace("Signup");
    } else {
      navigation.replace("Login");
    }
  }

  function submitHandler(credentials) {
    let { username, email, name, password, confirmPassword } = credentials;

    username = username.trim();
    email = email.trim();
    name = name.trim();
    password = password.trim();

    const usernameIsValid = username.length >= 6;
    const emailIsValid = email.includes("@") && email.length >= 6;
    const nameIsValid = name.length >= 6;
    const passwordIsValid = password.length >= 6;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !usernameIsValid ||
      (!isLogin && !emailIsValid) ||
      (!isLogin && !nameIsValid) ||
      !passwordIsValid ||
      (!isLogin && !passwordsAreEqual)
    ) {
      Alert.alert("Invalid input", "Please check your entered credentials.");
      setCredentialsInvalid({
        username: !usernameIsValid,
        email: !emailIsValid,
        name: !nameIsValid,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }

    onAuthenticate({ username, email, name, password });
  }

  return (
    <View>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../../assets/images/logo1.png")}
      />
      <View style={styles.authContent}>
        <AuthForm
          isLogin={isLogin}
          onSubmit={submitHandler}
          credentialsInvalid={credentialsInvalid}
        />
        <View style={styles.buttons}>
          <FlatButton onPress={switchAuthModeHandler}>
            {isLogin ? "Create a new user" : "Log in instead"}
          </FlatButton>
        </View>
      </View>
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    marginTop: 24,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "black",
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  buttons: {
    marginTop: 8,
  },
  image: { alignSelf: "center", marginTop: 20, height: 100, width: 300 },
});
