import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dimensions, View, Text, TouchableHighlight, StatusBar } from 'react-native'
import { Icon } from 'react-native-elements'

// Styles
import styles from './Styles/InitTravelScreenStyles'

class InitTravelScreen extends Component {
  static navigationOptions = {
    header: false
  }
  componentDidMount() {
    StatusBar.setHidden(true)
  }
  componentWillUnmount() {
    StatusBar.setHidden(false)
  }
  render () {
    return (
      <View style={styles.mainContainerInitTravel}>
        <TouchableHighlight style={{ paddingTop: 10, paddingBottom: 10, alignItems: 'center', justifyContent: 'center', opacity: 0.6 }}
          onPress={() => this.props.navigation.navigate('GetKeyScreen')}>
          <View style={{ alignItems: 'center', flexDirection: 'row' }}>
            <Icon name="arrow-left" type="feather" color="#fff" />
            <Text style={{ color: '#fff', marginLeft: 10 }}>voltar</Text>
          </View>
        </TouchableHighlight>
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
            <TouchableHighlight underlayColor='transparent' onPress={() => this.props.navigation.navigate('TravelScreen')}>
              <View style={{ backgroundColor: 'rgba(0,0,0,0.2)', marginBottom: 15, borderWidth: 10, borderColor: 'rgba(0,0,0,0.1)', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2, width: Dimensions.get('window').width * 0.5, height: Dimensions.get('window').width * 0.5 }}>
                <Icon containerStyle={{ marginLeft: 5 }} name="play" type="feather" size={72} color="#fff" />
              </View>
            </TouchableHighlight>
            <Text style={{ fontSize: 20, fontWeight: '900', color: '#fff', textAlign: 'center' }}>Iniciar test drive</Text>
            <Text style={{ fontSize: 14, marginTop: 5, marginBottom: 10, fontWeight: '400', lineHeight: 16, color: '#fff', textAlign: 'center' }}>Quando estiver confortável, dê a partida no veículo e aperte o botão acima.</Text>
          </View>
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(InitTravelScreen)
