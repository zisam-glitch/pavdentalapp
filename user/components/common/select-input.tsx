import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import fonts from "@/themes/app.fonts";
import { windowHeight, windowWidth } from "@/themes/app.constant";
import color from "@/themes/app.colors";
import RNPickerSelect from "react-native-picker-select";

interface InputProps {
  title: string;
  placeholder: string;
  items: { label: string; value: string; name:string }[];
  value?: string;
  warning?: string;
  onValueChange: (value: string) => void;
  showWarning?: boolean;
}

export default function SelectInput({
  title,
  placeholder,
  items,
  value,
  warning,
  onValueChange,
  showWarning,
}: InputProps) {
  const { colors } = useTheme();



  return (
    <View>
      <RNPickerSelect
        onValueChange={onValueChange}
        items={items}
        placeholder={{
          label: placeholder,
          color: color.subtitle,
        }}
        
        style={{
          inputIOS: {
            ...styles.input,
            height: windowHeight(39),
            color: color.gray
          },
          inputAndroid: {
            ...styles.input,
            height: windowHeight(39),
            color: color.gray
         
          },
          iconContainer: {
            display: 'none',
          },
          
         
        }}
        value={value}
        useNativeAndroidPickerStyle={false} 
      />
      {showWarning && <Text style={[styles.warning]}>{warning}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.medium,
    fontSize: windowWidth(20),
    marginVertical: windowHeight(8),
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    marginBottom: 0,
    fontSize:  windowWidth(19),
    height: windowHeight(30),
    color: color.subtitle,
    paddingHorizontal: 8,
  },
  warning: {
    color: color.red,
    marginTop: 3,
  },
});