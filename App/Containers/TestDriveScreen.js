import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text, Modal, TouchableHighlight, Platform } from 'react-native'
import { Icon, List, Button } from 'react-native-elements'
import { Colors } from '../Themes'

// Redux

// Styles
import styles from './Styles/TestDriveScreenStyles'

// Components

class TestDriveScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerMode: 'float',
      headerStyle: { backgroundColor: '#fff' },
      title: <Text style={ styles.textHeader }>Test Drive</Text>,
      headerTintColor: Colors.text,
      headerLeft: <Icon
                    containerStyle={styles.toolbarIconLeft}
                    type="feather"
                    name="arrow-left"
                    color={Colors.brand}
                    onPress={() => navigation.navigate('DrawerNavigation')}
                  />
    }
  }
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            TEST DRIVE
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TestDriveScreen)
