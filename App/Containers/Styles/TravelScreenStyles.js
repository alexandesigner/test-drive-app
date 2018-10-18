import { StyleSheet, Platform } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainerTravel: {
    flex: 1,
    backgroundColor: Colors.brand
  },
  container: {
    flex: 1,
  },
  annotationContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  annotationFill: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.brand,
    transform: [{ scale: 0.8 }],
  },
  travelInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? 90 : 78,
    padding: Platform.OS === 'ios' ? 10 : 0,
    marginTop: Platform.OS === 'ios' ? 20 : -10
  },
  travelInfoBox: {
    width: '25%',
    height: 40,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  travelBoxLabel: {
    color: '#fff',
    fontSize: 10,
    opacity: 0.75,
    fontWeight: '600'
  },
  travelBoxValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
    marginTop: Platform.OS === 'ios' ? 5 : 0,
    marginBottom: Platform.OS === 'ios' ? 5 : 0
  }
})
