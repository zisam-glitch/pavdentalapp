import { View, Text, TextInput } from "react-native";
import { commonStyles } from "@/styles/common.style";
import { windowHeight, windowWidth } from "@/themes/app.constant";
import { external } from "@/styles/external.style";
import styles from "@/screens/login/styles";
import color from "@/themes/app.colors";
import SelectInput from "../common/select-input";
import { useState } from "react";
import { countryItems } from "@/configs/country-list";

interface Props {
  width?: number;
  phone_number: string;
  setphone_number: (phone_number: string) => void;
  countryCode: string;
  setCountryCode: (countryCode: string) => void;
}

export default function PhoneNumberInput({
   
  width,
  phone_number,
  setphone_number,
  countryCode,
  setCountryCode,
}: Props) {

  return (
    <View>
    
      <View
        style={[
          external.fd_row,
          external.ai_center,
          external.mt_16,
          { flexDirection: "row" },
        ]}
      >
        <View
          style={[
            styles.countryCodeContainer,
            {
              borderColor: color.border,
            },
          ]}
        >
          <SelectInput
            title=""
            placeholder={countryCode}
            value={countryCode}
            onValueChange={(text) => setCountryCode(text)}
            showWarning={false}
            warning={"Please choose your country code!"}
            items={countryItems}
          />
        </View>
        <View
          style={[
            styles.phoneNumberInput,
            {
              width: width || windowWidth(346),
              borderColor: color.border,
            },
          ]}
        >
          <TextInput
            style={[commonStyles.regularNumberText]}
            placeholderTextColor={color.subtitle}
            placeholder={"Phone Number"}
            keyboardType="numeric"
            value={phone_number}
            onChangeText={setphone_number}
            maxLength={10}
          />
        </View>
      </View>
    </View>
  );
}