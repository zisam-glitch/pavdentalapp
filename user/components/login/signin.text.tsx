import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { commonStyles } from "@/styles/common.style";
import { external } from "@/styles/external.style";

export default function SignInText({
  title,
  subtitle,
  subtitle2,
}: {
  title?: string;
  subtitle?: string;
  subtitle2?: string;
}) {
  return (
    <>
      <Text
        style={[
          commonStyles.boldTextBigBlack,
          { color: "#000", textAlign: "left", marginTop: 0 },
        ]}
      >
        {title ? title : "What's your number?"}
      </Text>
      <View style={styles.transformLine} />

      <Text
        style={[
          commonStyles.regularTextBlack,
          external.pt_4,
          { textAlign: "left" },
        ]}
      >
        {subtitle
          ? subtitle
          : "We need to verify who you are."}
      </Text>
      <View style={styles.br} />
      <Text
        style={[
          commonStyles.regularTextBlack,
          external.pt_4,
          { textAlign: "left" },
        ]}
      >
        {subtitle2
          ? subtitle2
          : "Enter your mobile number below, and we will send you a code by text message that verifies your mobile phone. This check makes our service safer."}
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  transformLine: {
    width: 40,
    height: 2.5,
    backgroundColor: "#0000000f",
    marginVertical: 16,
  },
  br: {
    marginVertical: 8,
  },
});
