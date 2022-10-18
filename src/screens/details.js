import React from 'react'
import { Linking, Pressable, ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PlanetHeader from '../components/planet-header'
import Text from '../components/text/text'
import { EarthSvg, JupiterSvg, MarsSvg, MercurySvg, NeptuneSvg, SaturnSvg, UranusSvg, VenusSvg } from '../svg'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'

const PlanetSection = ({title, value}) => {

  return (
    <View style={styles.planetSection}>
      <Text preset='small' style={{textTransform: 'uppercase'}}>{title}</Text>
      <Text preset='h2'>{value}</Text>
    </View>
  )
}

const Details = ({route}) => {
    const {name, description, rotationTime, revolutionTime, radius, avgTemp, wikiLink} = route.params.planet;
    

    const renderImage = (name) => {
      switch (name) {
        case 'mercury':
          return <MercurySvg />
        case 'earth':
          return <EarthSvg />
        case 'jupiter':
          return <JupiterSvg />
        case 'mars':
          return <MarsSvg />
        case 'neptune':
          return <NeptuneSvg />
        case 'saturn':
          return <SaturnSvg />
        case 'uranus':
          return <UranusSvg />
        case 'venus':
          return <VenusSvg />
        default:
          return <MercurySvg />
      }
    }

    const onPressLink = () => {
      Linking.openURL(wikiLink);
    }

  return (
    <SafeAreaView style={styles.container}>
        <PlanetHeader backBtn={true} />
        <ScrollView>
          <View style={styles.imageView}>
            {renderImage(name)}
          </View>
          <View style={styles.detailsView}>
            <Text preset='h1' style={styles.name}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Pressable style={styles.source} onPress={onPressLink}>
              <Text>Source: </Text>
              <Text style={styles.wikipedia}>Wikipedia</Text>
            </Pressable>
          </View>
          
          <PlanetSection title="Rotation Time" value={rotationTime} />
          <PlanetSection title="Revolution Time" value={revolutionTime} />
          <PlanetSection title="Radius" value={radius} />
          <PlanetSection title="Average Temp" value={avgTemp} />
        </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.black
    },
    imageView: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: spacing[8]
    },
    detailsView: {
      marginTop: spacing[10],
      marginHorizontal: spacing[6],
      alignItems: 'center'
    },
    name: {
      textTransform: 'uppercase',
    },
    description: {
      textAlign: 'center',
      lineHeight: 19
    },
    source: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: spacing[4],
      marginBottom: spacing[7]
    },
    wikipedia: {
      textDecorationLine: 'underline',
      fontWeight: 'bold'
    },
    planetSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: spacing[5],
      paddingVertical: spacing[3],
      borderWidth: 1,
      borderColor: colors.grey,
      marginHorizontal: spacing[6],
      marginBottom: spacing[4]
    }
    
  });

export default Details;