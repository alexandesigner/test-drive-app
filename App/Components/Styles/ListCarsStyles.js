import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  cardTitle: {
    fontSize: 20,
    color: Colors.text,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10
  }
})
