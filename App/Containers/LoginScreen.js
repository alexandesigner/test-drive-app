import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage, CheckBox, Button } from 'react-native-elements'
import { Colors } from '../Themes'

// Redux
import UserRedux from '../Redux/UserRedux'

// Styles
import styles from './Styles/LoginScreenStyles'

class LoginScreen extends Component {
  static navigationOptions = {
    headerMode: 'float',
    headerStyle: { backgroundColor: '#fff' },
    title: <Text style={ styles.textHeader }>Login</Text>,
    headerTintColor: Colors.text,
    headerLeft: null
  }
  constructor (props) {
    super(props)
    this.state = {
      remember: false,
      email: '',
      password: '',
      fieldsConfig: {
        email: {
          autoCorrect: false,
          autoCapitalize: 'none',
          placeholder: 'Informe seu e-mail'
        },
        password: {
          autoCorrect: false,
          autoCapitalize: 'none',
          placeholder: 'Informe sua senha'
        }
      }
    }
  }
  loginUser = () => {
    // email, password
    this.props.login(this.state.email, this.state.password)
    this.props.navigation.navigate('DrawerNavigation')
  }
  render () {
    const { fieldsConfig, email, password, remember } = this.state
    const { navigate } = this.props.navigation
    const { user } = this.props
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View>
            <Text style={styles.labelInfo}>Caso você já tenha um cadastro, preencha os campos abaixo</Text>
            <Text>{user.id}</Text>
            <Text>{user.name}</Text>
            <Text>{user.email}</Text>
            <Text>{user.phone}</Text>
            <Text>{user.tests}</Text>
            <View>
              <FormLabel labelStyle={styles.labelForm}>Email</FormLabel>
              <FormInput
                {...fieldsConfig.email}
                style={styles.inputField}
                value={email}
                textContentType='emailAddress'
                onChangeText={(email) => this.setState({ email })}
              />
            </View>
            <View>
              <FormLabel labelStyle={styles.labelForm}>Senha</FormLabel>
              <FormInput
                {...fieldsConfig.password}
                style={styles.inputField}
                value={password}
                textContentType='passowrd'
                secureTextEntry
                onChangeText={(password) => this.setState({ password })}
              />
            </View>
            <View style={{ marginTop: 5 }}>
              <CheckBox
                title='Me manter conectado'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor={Colors.brand}
                checked={remember}
                containerStyle={{ backgroundColor: 'transparent' }}
                onPress={() => this.setState({remember: !remember})}
              />
            </View>
            <View>
              <Button
                buttonStyle={styles.buttonBrand}
                fontWeight='900'
                title='ENTRAR'
                onPress={this.loginUser}
              />
            </View>
            <View style={styles.padding}>
              <Text
                style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}
                onPress={() => navigate('RecoveryPasswordScreen')}>
                Esqueci minha senha
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.padding}>
          <Text style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>Se você não tiver um cadastro</Text>
          <Text
            style={{ textAlign: 'center', alignItems: 'center',  justifyContent: 'center', fontSize: 22, fontWeight: '700', marginTop: 10, color: Colors.brand }}
            onPress={() => navigate('RegisterScreen')}>
            Fazer cadastro
          </Text>
        </View>
      </View>

    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(UserRedux.login(email, password)),
    getUser: () => dispatch(UserRedux.getUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
