import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, Image, View } from 'react-native'
import { Button } from 'react-native-elements'
import { Images } from '../Themes'

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
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>
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
