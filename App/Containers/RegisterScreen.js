import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import { Colors } from '../Themes'

// Styles
import styles from './Styles/RegisterScreenStyles'

class RegisterScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text style={styles.padding}>Para realizar o cadastro, por favor, preencha os campos abaixo</Text>
            <View>
              <FormLabel>Nome</FormLabel>
              <FormInput onChangeText={() => console.log('Nome')}/>
            </View>
            <View>
              <FormLabel>Email</FormLabel>
              <FormInput onChangeText={() => console.log('Email')}/>
            </View>
            <View>
              <FormLabel>Telefone</FormLabel>
              <FormInput onChangeText={() => console.log('Telefone')}/>
            </View>
            <View>
              <FormLabel>Senha</FormLabel>
              <FormInput onChangeText={() => console.log('Senha')}/>
            </View>
            <View>
              <Button
                buttonStyle={styles.buttonBrand}
                title='CADASTRAR'
              />
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

RegisterScreen.navigationOptions = ({ navigation }) => {
  return {
    headerMode: 'float',
    headerStyle: { backgroundColor: '#fff' },
    title: 'Cadastro',
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)
