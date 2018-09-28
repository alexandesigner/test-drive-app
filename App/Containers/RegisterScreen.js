import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import { Colors } from '../Themes'

// Styles
import styles from './Styles/RegisterScreenStyles'

class RegisterScreen extends Component {
  static navigationOptions = {
    headerMode: 'float',
    headerStyle: { backgroundColor: '#fff' },
    title: <Text style={ styles.textHeader }>Cadastro</Text>,
    headerTintColor: Colors.text,
    headerLeft: null
  }
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      phone: '',
      fieldsConfig: {
        name: {
          autoCorrect: false,
          placeholder: 'Informe seu nome'
        },
        email: {
          autoCorrect: false,
          autoCapitalize: 'none',
          placeholder: 'Informe seu e-mail'
        },
        phone: {
          autoCorrect: false,
          autoCapitalize: 'none',
          placeholder: '(xx) x xxxx-xxxx'
        },
        password: {
          autoCorrect: false,
          autoCapitalize: 'none',
          placeholder: 'Informe sua senha'
        }
      }
    }
  }
  onSubmitFields = () => {
    const fields = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
    }
    alert(fields)
  }
  render () {
    const { fieldsConfig, name, email, password, phone } = this.state
    const { navigate } = this.props.navigation
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View>
            <Text style={styles.labelInfo}>Caso você ainda não tenha um cadastro, preencha os campos abaixo</Text>
            <View>
              <FormLabel labelStyle={styles.labelForm}>Nome</FormLabel>
              <FormInput
                {...fieldsConfig.name}
                style={styles.inputField}
                value={name}
                onChangeText={(name) => this.setState({ name })}
              />
            </View>
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
              <FormLabel labelStyle={styles.labelForm}>Telefone (Whatsapp)</FormLabel>
              <FormInput
                {...fieldsConfig.phone}
                style={styles.inputField}
                value={phone}
                onChangeText={(phone) => this.setState({ phone })}
              />
            </View>
            <View>
              <FormLabel labelStyle={styles.labelForm}>Senha</FormLabel>
              <FormInput
                {...fieldsConfig.password}
                style={styles.inputField}
                value={password}
                onChangeText={(password) => this.setState({ password })}
              />
            </View>
            <View>
              <Button
                buttonStyle={styles.buttonBrand}
                fontWeight='900'
                title='CADASTRAR'
                onPress={this.onSubmitFields}
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.padding}>
          <Text style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>Se você já tiver cadastro</Text>
          <Text
            style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: '700', marginTop: 10, color: Colors.brand }}
            onPress={() => navigate('LoginScreen')}>
            Fazer Login
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)
