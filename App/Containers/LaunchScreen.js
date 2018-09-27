import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

// Components
import RoundedButton from '../Components/RoundedButton'

class LaunchScreen extends Component {
  render () {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>
          <View style={styles.section} >
            <RoundedButton text="Ir para a Home" onPress={() => navigate('DrawerNavigation')}/>
            <RoundedButton text="Login" onPress={() => navigate('LoginScreen')}/>
            <RoundedButton text="Cadastro" onPress={() => navigate('RegisterScreen')}/>
          </View>
        </ScrollView>
      </View>
    )
  }
}

LaunchScreen.navigationOptions = {
  header: false
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
