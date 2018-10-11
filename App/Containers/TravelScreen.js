import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Platform, ScrollView, View, Text, StatusBar } from 'react-native'
import { Button } from 'react-native-elements'

// Redux
import TravelRedux from '../Redux/TravelRedux'

// Styles
import styles from './Styles/TravelScreenStyles'

class TravelScreen extends Component {
  static navigationOptions = {
    header: false,
  }
  constructor (props) {
    super(props)
  }
  componentDidMount() {
    StatusBar.setBarStyle('light-content', true)
    StatusBar.setHidden(false)
  }
  componentWillUnmount() {
    StatusBar.setHidden(true)
  }
  render () {
    return (
      <View style={styles.mainContainerTravel}>
        <View style={{ padding: 10, marginTop: Platform.OS === 'ios' ? 20 : 0 }}>
          <Text style={{ color: '#fff' }}>Informações da viagem</Text>
        </View>
        <ScrollView>
          <Text style={{ color: '#fff' }}>MAPA</Text>
        </ScrollView>
        <View>
          <Button
            buttonStyle={styles.buttonDanger}
            title='FINALIZAR TEST DRIVE'
            fontWeight='900'
            color='#fff'
            onPress={() => console.log('ae')}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    setTravelStarted: (started) => dispatch(TravelRedux.setTravelStarted(started))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TravelScreen)
