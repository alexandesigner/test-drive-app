import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, Text, View } from 'react-native'
import { Colors } from '../Themes'

// Styles
import styles from './Styles/HomeScreenStyles'

// Components
import Toolbar from '../Components/Toolbar'

class HomeScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Toolbar
          title="Test Drive App"
          rightIcon={true}
          bgColor={Colors.transparent}
          {...this.props}
        />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text>HOME</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

HomeScreen.navigationOptions = {
  header: false
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
