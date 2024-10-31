import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useToast } from "react-native-toast-notifications";
import axios from "axios";
import SignInText from "@/components/login/signin.text";
import PhoneNumberInput from "@/components/login/phone-number.input";
import Button from "@/components/common/button";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Back } from "@/utils/icons";
import Topbar from "@/components/common/topbar"

export default function LoginScreen() {
  const navigation = useNavigation();
  const [phone_number, setphone_number] = useState("");
  const [loading, setloading] = useState(false);
  const [countryCode, setCountryCode] = useState("+44");
  const toast = useToast();



  // const handleSubmit = async () => {
  //   if (phone_number === "" || countryCode === "") {
  //     toast.show("Please fill the fields!", {
  //       placement: "bottom",
  //     });
  //   } else {
  //     setloading(true);
  //     const phoneNumber = `+${countryCode}${phone_number}`;

  //     await axios
  //       .post(`${process.env.EXPO_PUBLIC_SERVER_URI}/registration`, {
  //         phone_number: phoneNumber,
  //       })
  //       .then((res) => {
  //         setloading(false);
  //         router.push({
  //           pathname: "/(routes)/otp-verification",
  //           params: { phoneNumber },
  //         });
  //       })
  //       .catch((error) => {
  //         setloading(false);
  //         toast.show(
  //           "Something went wrong! please re check your phone number!",
  //           {
  //             type: "danger",
  //             placement: "bottom",
  //           }
  //         );
  //       });
  //   }
  // };

  
  // for dev purpuese
  const handleSubmit = async () => {
    router.push("/(routes)/otp-verification");
  };
  // for dev purpuese

  const buttonBackgroundColor = phone_number.length < 8 ? "gray" : undefined;
  const isButtonDisabled = loading || phone_number.length < 8;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
       <Topbar title="Pavdental"/>

        <View style={styles.containerview}>
          <View>
            <SignInText />
            <PhoneNumberInput
              phone_number={phone_number}
              setphone_number={setphone_number}
              countryCode={countryCode}
              setCountryCode={setCountryCode}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Next"
              onPress={handleSubmit}
              disabled={isButtonDisabled}
              backgroundColor={buttonBackgroundColor}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
