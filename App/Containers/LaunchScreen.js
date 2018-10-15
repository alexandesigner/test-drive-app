import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, TouchableHighlight, Image } from 'react-native'
import { Button, Text } from 'react-native-elements'
import { Colors, Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

class LaunchScreen extends Component {
  static navigationOptions = {
    header: false
  }
  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.mainContainer}>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 30 }}>
          <Image source={Images.mainLogo} style={{ marginTop: 60, width: 220, height: 220 }} resizeMode="stretch" />
        </View>
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Button
              buttonStyle={styles.buttonBrand}
              title='Fazer login'
              fontWeight='900'
              onPress={() => navigate('LoginScreen')}
            />
            <Button
              buttonStyle={styles.buttonDefault}
              title='Cadastrar'
              fontWeight='900'
              color={Colors.brand}
              onPress={() => navigate('RegisterScreen')}
            />
          </View>
        </ScrollView>
        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
          <Text style={{ fontSize: 12, color: '#999', marginBottom: 10 }}>Versão 1.0</Text>
          <Text style={{ fontSize: 10, color: '#999' }}>(c) 2018</Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
