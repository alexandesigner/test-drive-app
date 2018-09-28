import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { Colors } from '../Themes'

// Styles
import styles from './Styles/EmployeersScreenStyles'

class EmployeersScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerMode: 'float',
      headerStyle: { backgroundColor: '#fff' },
      title: <Text style={ styles.textHeader }>Colaboradores</Text>,
      headerTintColor: Colors.text,
      headerLeft: <Icon
                      style={styles.marginButton}
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
            <Text>Colaboradores</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeersScreen)
