import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { Colors } from '../Themes'

// Styles
import styles from './Styles/EmployeersScreenStyles'

class EmployeersScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text>Aeeee</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

EmployeersScreen.navigationOptions = ({ navigation }) => {
  return {
    headerMode: 'float',
    headerStyle: { backgroundColor: '#fff' },
    title: 'Colaboradores',
    headerTintColor: Colors.text,
    headerLeft: <Icon style={styles.marginButton} type="feather" name="arrow-left" color={Colors.brand} onPress={() => navigation.navigate('DrawerNavigation')} />
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeersScreen)
