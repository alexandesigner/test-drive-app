import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  card: {
    borderRadius: 4,
    shadowRadius: 4,
    elevation: 1
  },
  cardTitle: {
    fontSize: 20,
    color: Colors.text,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10
  }
})
