import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, Text, View } from 'react-native'

// Styles
import styles from './Styles/FAQScreenStyles'

// Components
import Toolbar from '../Components/Toolbar'

class FAQScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Toolbar
          title="Perguntas Frequentes"
          rightIcon={false}
          bgColor="#fff"
          {...this.props}
        />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text>PERGUNTAS</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

FAQScreen.navigationOptions = {
  header: false
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(FAQScreen)
