import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import TextInputMask from 'react-native-text-input-mask'

import { FormLabel, FormInput, Button } from 'react-native-elements'

// Redux
import EmployeersRedux from '../Redux/EmployeersRedux'

// Styles
import styles from './Styles/FormAddEmployersStyles'

class FormAddEmployers extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      password: '',
      fieldsConfig: {
        name: {
          autoCorrect: false,
          placeholder: 'Informe o nome'
        },
        email: {
          autoCorrect: false,
          autoCapitalize: 'none',
          placeholder: 'Informe o email'
        },
        phone: {
          autoCorrect: false,
          autoCapitalize: 'none',
          placeholder: '(xx) x xxxx-xxxx'
        },
        password: {
          autoCorrect: false,
          autoCapitalize: 'none',
          placeholder: 'Informe a senha'
        }
      }
    }
  }
  onSubmitFields = () => {
    // name, email, phone, password
    this.props.registerEmployeers(this.state.name, this.state.email, this.state.phone, this.state.password)
    this.props.changeModalAddEmployeers(false)
  }
  render() {
    const { fieldsConfig, name, email, phone, password } = this.state
    return (
      <View>
        <Text style={styles.labelInfo}>Preencha os campos abaixo para fazer o pré-cadastro de um colaborador</Text>
        <View>
          <FormLabel labelStyle={styles.labelForm}>Nome</FormLabel>
          <FormInput
            {...fieldsConfig.name}
            style={styles.inputField}
            value={name}
            textContentType='name'
            onChangeText={(name) => this.setState({ name })}
          />
        </View>
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
        </View>
        <View>
          <FormLabel labelStyle={styles.labelForm}>Telefone (whatsapp)</FormLabel>
          <TextInputMask
            {...fieldsConfig.phone}
            style={styles.inputField}
            value={phone}
            textContentType='telephoneNumber'
            mask={"([00]) [0] [0000] [0000]"}
            onChangeText={(phone) => this.setState({ phone })}
          />
        </View>
        <View>
          <FormLabel labelStyle={styles.labelForm}>Senha</FormLabel>
          <FormInput
            {...fieldsConfig.password}
            style={styles.inputField}
            value={password}
            textContentType='password'
            secureTextEntry
            onChangeText={(password) => this.setState({ password })}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Button
            buttonStyle={styles.buttonBrand}
            fontWeight='600'
            title='CONFIRMAR'
            onPress={this.onSubmitFields}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    changeModalAddEmployeers: (visible) => dispatch(EmployeersRedux.changeModalAddEmployeers(visible)),
    registerEmployeers: (name, email, phone, password) => dispatch(EmployeersRedux.registerEmployeers(name, email, phone, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAddEmployers)
