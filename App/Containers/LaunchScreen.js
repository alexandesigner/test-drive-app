import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View } from 'react-native'
import { Button, Text } from 'react-native-elements'
import { Colors } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

class LaunchScreen extends Component {
  static navigationOptions = {
    header: false
  }
  render () {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <View>
          <Text style={{ fontSize: 24, color: Colors.text, alignItems: 'center', justifyContent: 'center', marginTop: 40, textAlign: 'center' }}>Test Drive App</Text>
        </View>
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Button
              buttonStyle={styles.buttonBrand}
              title='Home'
              fontWeight='900'
              onPress={() => navigate('DrawerNavigation')}
            />
            <Button
              buttonStyle={styles.buttonBrand}
              title='Login'
              fontWeight='900'
              onPress={() => navigate('LoginScreen')}
            />
            <Button
              buttonStyle={styles.buttonBrand}
              title='Cadastro'
              fontWeight='900'
              onPress={() => navigate('RegisterScreen')}
            />
            <Button
              buttonStyle={styles.buttonBrand}
              title='Nova Senha'
              fontWeight='900'
              onPress={() => navigate('NewPasswordScreen')}
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
