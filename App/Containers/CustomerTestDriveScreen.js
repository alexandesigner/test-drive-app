import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text} from 'react-native'
import { Icon } from 'react-native-elements'
import { Colors } from '../Themes'

// Redux
import TestDriveRedux from '../Redux/TestDriveRedux'

// Styles
import styles from './Styles/CustomerTestDriveScreenStyles'

class CustomerTestDriveScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerMode: 'float',
      headerStyle: { backgroundColor: '#fff' },
      title: <Text style={ styles.textHeader }>Cadastrar cliente</Text>,
      headerTintColor: Colors.text,
      headerLeft: <Icon
                    containerStyle={styles.toolbarIconLeft}
                    type="feather"
                    name="arrow-left"
                    color={Colors.brand}
                    onPress={() => {
                      navigation.dispatch(TestDriveRedux.resetTestDrive())
                      navigation.navigate('DrawerNavigation')
                    }}
                  />
    }
  }
  render () {
    const { customerTestDrive, makeTestDrive } = this.props
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
           <Text>{JSON.stringify(customerTestDrive)}</Text>
           <Text>{JSON.stringify(makeTestDrive)}</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    customerTestDrive: state.testDrive.customerTestDrive,
    makeTestDrive: state.testDrive.makeTestDrive
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerTestDriveScreen)
