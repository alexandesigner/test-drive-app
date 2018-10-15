import { Platform } from 'react-native'
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
    modalClose: {
      position: 'absolute',
      right: 20,
      top: 3
    },
    labelInfo: {
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      fontSize: 16,
      fontWeight: '700',
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: Colors.border,
      color: Colors.text
    },
    labelForm: {
      width: '100%',
      fontSize: 16,
      color: Colors.text
    },
    padding: {
      padding: 20
    },
    labelInfoInner: {
      alignItems: 'center',
      textAlign: 'left',
      justifyContent: 'flex-start',
      fontSize: 16,
      fontWeight: '700',
      paddingTop: 0,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: Colors.border,
      color: Colors.text
    },
    modalTitle: {
      marginLeft: 20,
      marginTop: 0,
      fontSize: 26,
      fontWeight: '700',
      color: Colors.brand
    },
    modalCheckbox: {
      backgroundColor: 'transparent',
      paddingBottom: 0,
      borderWidth: 0,
      marginBottom: 0,
      marginLeft: 10,
      marginRight: 0,
      borderRadius: 0
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
    buttonDefault: {
      marginTop: 10,
      backgroundColor: '#fff',
      borderWidth: 1,
      borderRadius: 3,
      borderColor: Colors.border,
      borderBottomWidth: 0,
      shadowColor: Colors.border,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 3,
      elevation: 1
    },
    buttonLight: {
      marginTop: 10,
      backgroundColor: '#fff',
      borderWidth: 1,
      borderRadius: 3,
      borderColor: Colors.border,
      shadowColor: Colors.border,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 3,
      elevation: 1
    },
    buttonWhite: {
      marginTop: 10,
      backgroundColor: '#fff',
      borderWidth: 0,
      borderRadius: 3,
      borderColor: 'transparent',
      shadowColor: 'transparent',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 0,
      width: 300
    },
    buttonDanger: {
      marginTop: 10,
      backgroundColor: '#D0201C',
      borderWidth: 0,
      borderRadius: 0,
      borderColor: 'transparent',
      shadowColor: 'transparent',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 0,
      marginLeft: 0,
      marginRight: 0
    },
    selectField: {
      flex: 1,
      borderBottomWidth: Platform.OS === 'ios' ? 1 : 0,
      borderBottomColor: Platform.OS === 'ios' ? '#bdc6cf' : 'transparent',
      marginLeft: Platform.OS === 'ios' ? 20 : 15,
      marginRight: Platform.OS === 'ios' ? 20 : 15,
      minHeight: Platform.OS === 'ios' ? 36 : 46,
      justifyContent: 'center',
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      marginTop: 0
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
