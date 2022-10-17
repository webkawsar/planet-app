import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import Text from "./text/text";

const PlanetHeader = ({ backBtn, title='THE PLANETS' }) => {
  const navigation = useNavigation();

  
  return (
    <View style={styles.container}>
      {backBtn && (
        <Pressable style={{marginRight: spacing[4]}} onPress={() => {
          navigation.goBack();
      }}>
          <Entypo name="chevron-thin-left" size={20} color="white" />
        </Pressable>
      )}
      <Text preset="h2">{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing[5],
    borderBottomWidth: 0.3,
    borderBottomColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center'
  },
});

export default PlanetHeader;
