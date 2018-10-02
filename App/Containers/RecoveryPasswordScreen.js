import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import { Colors } from '../Themes'

// Styles
import styles from './Styles/RecoveryPasswordScreenStyles'

class RecoveryPasswordScreen extends Component {
  static navigationOptions = {
    headerMode: 'float',
    headerStyle: { backgroundColor: '#fff' },
    title: <Text style={ styles.textHeader }>Recuperar senha</Text>,
    headerTintColor: Colors.text,
    headerLeft: null
  }
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      fieldsConfig: {
        email: {
          autoCorrect: false,
          autoCapitalize: 'none',
          placeholder: 'Informe seu e-mail'
        }
      }
    }
  }
  onSubmitFields = () => {
    const fields = {
      email: this.state.email
    }
    alert(fields.email)
  }
  render () {
    const { fieldsConfig, email } = this.state
    const { navigate } = this.props.navigation
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View>
            <Text style={styles.labelInfo}>Caso você tenha esquecido a senha, preencha o campo abaixo</Text>
            <View>
              <FormLabel labelStyle={styles.labelForm}>Email</FormLabel>
              <FormInput
                {...fieldsConfig.email}
                style={styles.inputField}
                value={email}
                onChangeText={(email) => this.setState({ email })}
              />
            </View>
            <View>
              <Button
                buttonStyle={styles.buttonBrand}
                fontWeight='900'
                title='ENVIAR'
                onPress={this.onSubmitFields}
              />
            </View>
            <View style={styles.padding}>
              <Text style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center', color: Colors.error }}>Enviaremos um e-mail com o link para alterar a sua senha</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.padding}>
          <Text
            style={{ textAlign: 'center', alignItems: 'center',  justifyContent: 'center', fontSize: 22, fontWeight: '700', marginTop: 10, color: Colors.brand }}
            onPress={() => navigate('LoginScreen')}>
            Voltar
          </Text>
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(RecoveryPasswordScreen)
