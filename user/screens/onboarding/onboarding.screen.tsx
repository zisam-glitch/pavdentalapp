import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import appFonts from "../../themes/app.fonts";
import color from "../../themes/app.colors";
import SPACING from "../../themes/app.constant";
import { router } from "expo-router";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../../assets/images/onBoarding/welcome.jpg")}
    >
      <View style={styles.overlay} />
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.title}>Welcome to Pav Dental.</Text>
          <Text style={styles.subtitle}>
            Book instant appointments, and bring dental care right to your
            doorstep with mobile clinics.
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/(routes)/login")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
       
        </View>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  contentContainer: {
    position: "absolute",
    height: "100%",
    zIndex: 2,
    width: "100%",
    justifyContent: "flex-end",
    paddingHorizontal: SPACING * 2,
    paddingBottom: SPACING * 5,
  },
  title: {
    color: color.whiteColor,
    fontSize: SPACING * 4.5,
    textTransform: "capitalize",
    fontFamily: appFonts.bold,
  },
  subtitle: {
    color: color.whiteColor,
    fontWeight: "400",
    fontSize: SPACING * 1.7,
    opacity: 0.8,
    fontFamily: appFonts.regular,
  },
  button: {
    paddingTop: 15,
    paddingBottom: 17,
    backgroundColor: color.whiteColor,
    borderRadius: 6,
    alignItems: "center",
    marginTop: SPACING * 3,
  },
  buttonText: {
    color: color.blackColor,
    fontSize: 19,
    fontFamily: appFonts.bold,
  },
});
