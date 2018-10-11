import { StyleSheet } from 'react-native'
import { Colors, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainerKey: {
    flex: 1,
    backgroundColor: Colors.success
  }
})
