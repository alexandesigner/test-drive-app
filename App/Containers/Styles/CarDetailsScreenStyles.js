import { StyleSheet, Dimensions } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'

const dimensions = Dimensions.get('window')
const imageWidth = dimensions.width

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  featuredImage: {
    width: imageWidth
  }
})
