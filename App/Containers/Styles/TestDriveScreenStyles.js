import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  customerTestDriveContainer: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.border
  },
  customerTestDriveTitle: {
    backgroundColor:
    Colors.brand,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
    padding: 5
  },
  customerTestDriveInfo: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  customerTestDriveName: {
    color: Colors.brand,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 5
  },
  customerTestDriveDescription: {
    color: '#999',
    fontSize: 12
  }
})
