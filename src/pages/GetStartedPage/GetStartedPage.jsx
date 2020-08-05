import React from "react";
import { SafeAreaView, View, Text, Button } from "react-native";
import styles from "./GetStartedPage.styles";
import { PAGES } from "../../navigation/Navigation";

const GetStartedPage = ({ navigation }) => {
  const handleGetStartedPress = () => {
    navigation.navigate(PAGES.Auth);
  };
  return (
    <SafeAreaView style={styles.lead}>
      <Text style={styles.text}>
        Hello this is the app, good job get ready to save money and wreck havoc
      </Text>
      <View style={styles.cta}>
        <Button title="Get Started" onPress={handleGetStartedPress} />
      </View>
    </SafeAreaView>
  );
};

export default GetStartedPage;
