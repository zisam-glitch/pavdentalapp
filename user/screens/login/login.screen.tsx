import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
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

export default function LoginScreen() {
  const navigation = useNavigation();
  const [phone_number, setphone_number] = useState("");
  const [loading, setloading] = useState(false);
  const [countryCode, setCountryCode] = useState("+880");
  const toast = useToast();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSubmit = async () => {
    if (phone_number === "" || countryCode === "") {
      toast.show("Please fill the fields!", {
        placement: "bottom",
      });
    } else {
      setloading(true);
      const phoneNumber = `${countryCode}${phone_number}`;
      await axios
        .post(`${process.env.EXPO_PUBLIC_SERVER_URI}/registration`, {
          phone_number: phoneNumber,
        })
        .then((res) => {
          setloading(false);
          router.push({
            pathname: "/(routes)/otp-verification",
            params: { phoneNumber },
          });
        })
        .catch((error) => {
          console.log(error);
          setloading(false);
          toast.show(
            "Something went wrong! please re check your phone number!",
            {
              type: "danger",
              placement: "bottom",
            }
          );
        });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView  style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        
      >
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Back />
          </TouchableOpacity>
          <Text style={styles.topBarTitle}>PavDental</Text>
        </View>

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
              title="Get Otp"
              onPress={handleSubmit}
              disabled={loading}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
