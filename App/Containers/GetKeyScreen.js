import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dimensions, View, Text, TouchableHighlight, Clipboard } from 'react-native'
import { Icon, Button } from 'react-native-elements'
import { Colors } from '../Themes'

// Redux
import StartupActions from '../Redux/StartupRedux'

// Styles
import styles from './Styles/GetKeyScreenStyles'

class GetKeyScreen extends Component {
  static navigationOptions = {
    header: false
  }
  constructor (props) {
    super(props)
    this.state = {
      securityCode: 'LCoD4m1',
      clipboardContent: null
    }
  }
  componentDidMount() {
    this.props.setStatusBar(true)
  }
  componentWillUnmount() {
    this.props.setStatusBar(false)
  }
  copySecurityCode = () => {
    Clipboard.setString(this.state.securityCode)
    this.setState({ clipboardContent: Clipboard.getString() })
    alert('Você copiou o código')
  }
  render () {
    return (
      <View style={styles.mainContainerKey}>
        <TouchableHighlight style={{ paddingTop: 10, paddingBottom: 10, alignItems: 'center', justifyContent: 'center', opacity: 0.6 }}
          onPress={() => this.props.navigation.popToTop()}>
          <View style={{ alignItems: 'center', flexDirection: 'row' }}>
            <Icon name="x" type="feather" color="#fff" />
            <Text style={{ color: '#fff', marginLeft: 10 }}>Cancelar test drive</Text>
          </View>
        </TouchableHighlight>
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
            <TouchableHighlight underlayColor='transparent' onPress={() => this.copySecurityCode()}>
              <View style={{ backgroundColor: 'rgba(0,0,0,0.2)', marginBottom: 15, borderWidth: 10, borderColor: 'rgba(0,0,0,0.1)', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2, width: Dimensions.get('window').width * 0.5, height: Dimensions.get('window').width * 0.5 }}>
                <Text style={{ fontSize: 32, color: '#fff', textAlign: 'center' }}>{this.state.securityCode}</Text>
                <Text style={{ fontSize: 12, color: '#fff', textAlign: 'center', marginTop: 5 }}>Aperte para copiar</Text>
              </View>
            </TouchableHighlight>
            <Text style={{ fontSize: 20, fontWeight: '900', color: '#fff', textAlign: 'center' }}>Cadastro realizado com sucesso</Text>
            <Text style={{ fontSize: 14, marginTop: 5, marginBottom: 10, fontWeight: '400', lineHeight: 16, color: '#fff', textAlign: 'center' }}>Dirija-se para pegar a chave do veículo e use o código de liberação.</Text>
            <Button
              buttonStyle={styles.buttonWhite}
              fontWeight='900'
              fontSize={14}
              title='CONTINUAR'
              color={Colors.success}
              onPress={() => this.props.navigation.navigate('InitTravelScreen')}
            />
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
  return {
    setStatusBar: (visible) => dispatch(StartupActions.setStatusBar(visible))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetKeyScreen)
