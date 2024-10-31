import { StyleSheet } from "react-native";
import { fontSizes, windowHeight, windowWidth } from "@/themes/app.constant";
import color from "@/themes/app.colors";
import { commonStyles } from "@/styles/common.style";
import fonts from "@/themes/app.fonts";

const style = StyleSheet.create({
  otpTextInput: {
    backgroundColor: color.lightGray,
    borderColor: color.lightGray,
    borderWidth: 0.5,
    borderRadius: 6,
    width: windowWidth(60),
    height: windowHeight(40),
    borderBottomWidth: 0.5,
    color: color.subtitle,
    textAlign: "center",
    fontSize: fontSizes.FONT22,
    marginTop: windowHeight(10),
  },
  signUpText: {
    ...commonStyles.mediumTextBlack12,
    fontFamily: fonts.bold,
    paddingHorizontal: 5,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: color.whiteColor,
  },
  flex: {
    flex: 1,
  },
  containerview: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: windowHeight(12),
    paddingTop: windowHeight(12),
    paddingBottom: windowHeight(16),
  },
});



export { style };
