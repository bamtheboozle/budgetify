import { AsyncStorage } from "react-native";

export const fetchAuthState = async () => {
  try {
    const authData = await AsyncStorage.getItem("@Save:auth");
    if (authData !== null) {
      return JSON.parse(authData);
    }
    return null;
  } catch (e) {
    // error, quit app
  }
};

export const setAuthState = async (data) => {
  try {
    const stringifiedData = JSON.stringify(data);
    await AsyncStorage.setItem("@Save:auth", stringifiedData);
  } catch (e) {
    // error, quit app
  }
};
