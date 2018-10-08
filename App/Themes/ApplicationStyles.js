import { Platform } from 'react-native'
import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.transparent
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin,
      backgroundColor: Colors.transparent
    },
    toolbarIconLeft: {
      marginLeft: 10,
      marginTop: Platform.OS === 'android' ? 3 : 0
    },
    toolbarIconRight: {
      marginRight: 10,
      marginTop: Platform.OS === 'android' ? 3 : 0
    },
    textHeader: {
      fontSize: 22
    },
    textLight: {
      color: '#999'
    },
    labelInfo: {
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      fontSize: 16,
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: Colors.border,
      marginBottom: 10
    },
    labelForm: {
      fontSize: 16,
      color: Colors.text
    },
    padding: {
      padding: 20
    },
    buttonBrandSmall: {
      backgroundColor: Colors.brand,
      borderWidth: 1,
      borderRadius: 3,
      borderColor: Colors.brandLight,
      borderBottomWidth: 0,
      shadowColor: Colors.brandLight,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 3,
      elevation: 1
    },
    buttonBrand: {
      marginTop: 10,
      backgroundColor: Colors.brand,
      borderWidth: 1,
      borderRadius: 3,
      borderColor: Colors.brandLight,
      borderBottomWidth: 0,
      shadowColor: Colors.brandLight,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 3,
      elevation: 1
    },
    inputField: {
      borderBottomWidth: Platform.OS === 'ios' ? 1 : 0,
      borderBottomColor: Platform.OS === 'ios' ? '#bdc6cf' : 'transparent',
      marginLeft: Platform.OS === 'ios' ? 20 : 15,
      marginRight: Platform.OS === 'ios' ? 20 : 15,
      minHeight: Platform.OS === 'ios' ? 36 : 46,
      color: '#86939e'
    },
    titleBox: {
      fontSize: 16,
      color: Colors.brand,
      fontWeight: '600'
    },
    card: {
      borderRadius: 3,
      shadowRadius: 3,
      shadowOpacity: 0.6,
      shadowRadius: 3,
      elevation: 1,
      padding: 10,
      marginLeft: 0,
      marginRight: 0
    }
  }
}

export default ApplicationStyles
