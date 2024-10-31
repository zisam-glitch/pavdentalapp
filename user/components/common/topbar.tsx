import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Back } from "@/utils/icons";
import { useNavigation } from "@react-navigation/native";
import fonts from "@/themes/app.fonts";

const Topbar: React.FC<ButtonProps> = ({ title }) => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.topBar}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Back />
      </TouchableOpacity>
      <Text style={styles.topBarTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    gap: 34,
    padding: 16,
    borderBottomWidth: 3,
    borderBottomColor: "#00000029",
  },
  backButton: {
    paddingTop: 3.5,
  },
  topBarTitle: {
    flex: 1,
    fontSize: 18,
    fontFamily: fonts.medium,
    paddingBottom: 1,
  },
});

export default Topbar;
