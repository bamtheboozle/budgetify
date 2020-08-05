import React, { useContext } from "react";
import { SafeAreaView, View, Text, Button } from "react-native";
import styles from "./AuthPage.styles";
import AuthContext from "../../contexts/AuthContext";
import { setAuthState } from "../../storageHelpers/auth";

const AuthPage = () => {
  const auth = useContext(AuthContext);
  const handleLogin = () => {
    auth.setIsAuthenticated(true);
    setAuthState({
      isAuthenticated: true,
    });
  };

  return (
    <SafeAreaView style={styles.lead}>
      <Text style={styles.text}>
        log in fucking loser. no account yet? sign up pussy
      </Text>
      <View style={styles.cta}>
        <View style={styles.login}>
          <Button title="Login" onPress={handleLogin} />
        </View>
        <Button style={styles.signup} title="Sign up" onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
};

export default AuthPage;
