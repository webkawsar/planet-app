import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PlanetHeader from '../components/planet-header'
import Text from '../components/text/text'
import { EarthSvg, JupiterSvg, MarsSvg, MercurySvg, NeptuneSvg, SaturnSvg, UranusSvg, VenusSvg } from '../svg'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'



const Details = ({route}) => {
    const {name, color, description} = route.params.planet;
    

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
          </View>
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
    }
    
  });

export default Details