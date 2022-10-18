import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PlanetHeader from "../components/planet-header";
import Text from "../components/text/text";
import { PLANET_LISTS } from "../data/planet-list";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

const Home = ({ navigation }) => {
  const [lists, setLists] = useState(PLANET_LISTS);

  const searchFilter = (text) => {

    const filteredLists = PLANET_LISTS.filter(planet => {
      
      const planetName = planet.name.toLowerCase();
      const userTypedText = text.toLowerCase();
      return planetName.includes(userTypedText);
    })
    setLists(filteredLists);
  }


  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />

      <TextInput
        placeholder="Type the planet name"
        style={styles.searchInput}
        placeholderTextColor={colors.white}
        autoCorrect={false}
        onChangeText={(text) => searchFilter(text)}
      />

      <FlatList
        contentContainerStyle={styles.list}
        data={lists}
        keyExtractor={(item, index) => item.name}
        renderItem={({ item, index }) => {
          return (
            <Pressable
              onPress={() => {
                navigation.navigate("Details", { planet: item });
              }}
              style={styles.item}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={[styles.circle, { backgroundColor: item.color }]}
                />
                <Text preset="h4" style={styles.itemName}>
                  {item.name}
                </Text>
              </View>
              <Entypo name="chevron-small-right" size={18} color="white" />
            </Pressable>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: spacing[4],
  },
  list: {
    padding: spacing[4],
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 15,
  },
  itemName: {
    textTransform: "uppercase",
    marginLeft: spacing[4],
  },
  separator: {
    borderBottomColor: colors.white,
    borderBottomWidth: 0.3,
  },
  searchInput: {
    padding: spacing[4],
    color: colors.white,
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    margin: spacing[5],
  },
});

export default Home;
