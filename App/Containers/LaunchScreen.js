import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Image } from 'react-native'
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
          <Text style={{ fontSize: 12, color: '#999', marginBottom: 10 }}>v1.0.0</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.section}>
            <Button
              buttonStyle={styles.buttonBrand}
              title='ENTRAR'
              fontWeight='600'
              onPress={() => navigate('LoginScreen')}
            />
            <Button
              buttonStyle={styles.buttonDefault}
              title='CADASTRAR'
              fontWeight='600'
              color={Colors.text}
              onPress={() => navigate('RegisterScreen')}
            />
            <Button
              buttonStyle={styles.buttonBrand}
              title='PESQUISA'
              fontWeight='600'
              onPress={() => navigate('CustomerSurveyScreen')}
            />
          </View>
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
