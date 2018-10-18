import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text, TouchableHighlight, StatusBar } from 'react-native'
import { Icon, List, Button } from 'react-native-elements'
import { Colors } from '../Themes'

// Styles
import styles from './Styles/CustomerSurveyScreenStyles'

class CustomerSurveyScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerMode: 'float',
      headerStyle: { backgroundColor: '#fff' },
      title: <Text style={ styles.textHeader }>Pesquisa de satisfação</Text>,
      headerTintColor: Colors.text,
      headerLeft: null
    }
  }
  componentDidMount() {
    StatusBar.setBarStyle('dark-content', true)
    StatusBar.setHidden(false)
  }
  componentWillUnmount() {
    StatusBar.setHidden(false)
  }
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text>{'Início' + this.props.mileageStarted}</Text>
            <Text>{'Final' + this.props.mileageFinished}</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    mileageStarted: state.testDrive.mileageStarted,
    mileageFinished: state.testDrive.mileageFinished,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerSurveyScreen)
