import { Entypo } from '@expo/vector-icons';
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import PlanetHeader from "../components/planet-header";
import Text from "../components/text/text";
import { PLANET_LISTS } from "../data/planet-list";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";



const Home = () => {
  return (
    <View style={styles.container}>
      <PlanetHeader />

      <FlatList
        contentContainerStyle={styles.list}
        data={PLANET_LISTS}
        keyExtractor={(item, index) => item.name}
        renderItem={({item, index}) => {
          return (
            <View style={styles.item}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={[styles.circle, {backgroundColor: item.color}]} />
                    <Text preset="h4" style={styles.itemName}>{item.name}</Text>
                </View>
                <Entypo name="chevron-small-right" size={18} color="white" />
            </View>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  },
  item: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing[4]
  },
  list: {
    padding: spacing[4]
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 15
  },
  itemName: {
    textTransform: 'uppercase',
    marginLeft: spacing[4]
  },
  separator: {
    borderBottomColor: colors.white,
    borderBottomWidth: 0.3
  }
});

export default Home;
