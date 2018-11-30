import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  blockContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#e1e1e1'
  },
  blockContainerLabel: {
    fontSize: 12,
    color: Colors.brand
  },
  blockContainerName: {
    fontSize: 18,
    color: Colors.text
  },
  ratingBlock: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 4,
    margin: 15
  },
  ratingItem: {
    padding: 20
  },
  ratingItemMargin: {
    marginBottom: 15
  },
})
