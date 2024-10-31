import { commonStyles } from "@/styles/common.style";
import { external } from "@/styles/external.style";
import color from "@/themes/app.colors";
import { fontSizes, windowHeight, windowWidth } from "@/themes/app.constant";
import fonts from "@/themes/app.fonts";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  countryCodeContainer: {
    width: windowWidth(80),
    height: windowHeight(30),
    backgroundColor: color.whiteColor,
    borderRadius: 0,
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: windowHeight(7),
    paddingVertical: windowHeight(0),
    borderBottomWidth: 1,
    borderColor: color.border,
  },
  phoneNumberInput: {
    width: windowWidth(326),
    height: windowHeight(30),
    backgroundColor: color.whiteColor,
    borderRadius: 0,
    marginLeft: windowHeight(9),
    justifyContent: "center",
    paddingHorizontal: windowHeight(1),
    borderBottomWidth: 1,
    borderColor: color.border,
  },
  rememberMeText: {
    fontWeight: "400",
    fontFamily: fonts.medium,
    fontSize: fontSizes.FONT16,
    color: color.primaryText,
  },
  forgotPasswordText: {
    fontWeight: "400",
    fontFamily: fonts.medium,
    color: color.buttonBg,
    fontSize: fontSizes.FONT16,
  },
  newUserContainer: {
    ...external.fd_row,
    ...external.ai_center,
    ...external.mt_12,
    ...external.as_center,
  },
  newUserText: {
    ...commonStyles.regularText,
  },
  signUpText: {
    ...commonStyles.mediumTextBlack12,
    fontFamily: fonts.bold,
    paddingHorizontal: windowHeight(4),
  },
  rememberTextView: {
    ...external.fd_row,
    ...external.ai_center,
    ...external.mt_5,
    ...external.js_space,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: color.whiteColor,
  },
  containerview: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: windowHeight(12),
    paddingTop: windowHeight(12),
    paddingBottom: windowHeight(16),
  },
  buttonContainer: {
    alignItems: "center",
  },
 
});

export default styles;
