import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text } from 'react-native'
import { Icon, FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import { Colors } from '../Themes'

// Styles
import styles from './Styles/LoginScreenStyles'

class LoginScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text style={styles.padding}>Caso você já tenha um cadastro, preencha os campos abaixo</Text>
            <View>
              <FormLabel>Email</FormLabel>
              <FormInput onChangeText={() => console.log('Email')}/>
            </View>
            <View>
              <FormLabel>Senha</FormLabel>
              <FormInput onChangeText={() => console.log('Senha')}/>
            </View>
            <View>
              <Button
                buttonStyle={styles.buttonBrand}
                title='ENTRAR'
              />
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

LoginScreen.navigationOptions = ({ navigation }) => {
  return {
    headerMode: 'float',
    headerStyle: { backgroundColor: '#fff' },
    title: 'Login',
    headerTintColor: Colors.text,
    headerLeft: null
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
