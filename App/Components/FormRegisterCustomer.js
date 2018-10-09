import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Text, FormLabel, FormInput, Button } from 'react-native-elements'
import TextInputMask from 'react-native-text-input-mask'
import { Colors } from '../Themes'

// Styles
import styles from './Styles/FormRegisterCustomerStyles'

class FormRegisterCustomer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cpf: '',
      fieldsConfig: {
        cpf: {
          autoCorrect: false,
          placeholder: 'Informe seu CPF'
        }
      }
    }
  }
  onCPFCheck = () => {
    console.log('CPF do Cliente: ', this.state.cpf)
  }
  onCNHPicture = () => {
    console.log('Tirar foto do cliente')
  }
  onSubmitRegister = () => {
    console.log('Cliente Registrado com sucesso!')
  }
  render() {
    const { fieldsConfig, cpf } = this.state
    return (
      <View>
        <View style={{ marginBottom: 20 }}>
          <View style={{ width: '100%', backgroundColor: '#fff', marginTop: 0, marginBottom: 10, borderTopWidth: 0, borderBottomWidth: 1, borderColor: Colors.border, padding: 10 }}>
            <Text style={{ marginLeft: 10, fontSize: 16, color: Colors.text, fontWeight: '800' }}>Informações essenciais</Text>
          </View>
          <FormLabel labelStyle={styles.labelForm}>CPF do Cliente</FormLabel>
          <TextInputMask
            {...fieldsConfig.cpf}
            style={styles.inputField}
            value={cpf}
            textContentType='name'
            mask={"[000] [000] [000] [00]"}
            onChangeText={(cpf) => this.setState({ cpf })}
          />
          <View style={{ flexWrap: 'wrap', alignItems: 'flex-start', flexDirection:'column', marginTop: 10 }}>
            <Button
              small
              buttonStyle={styles.buttonBrandSmall}
              fontWeight='900'
              fontSize={14}
              title='CONTINUAR'
              onPress={this.onCPFCheck}
            />
          </View>
        </View>
        <View style={{ marginBottom: 20 }}>
          <View style={{ width: '100%', backgroundColor: '#fff', marginTop: 0, marginBottom: 10, borderTopWidth: 0, borderBottomWidth: 1, borderColor: Colors.border, padding: 10 }}>
            <Text style={{ marginLeft: 10, fontSize: 16, color: Colors.text, fontWeight: '800' }}>CNH</Text>
          </View>
          <Text style={{ fontSize: 14, marginLeft: 20, marginTop: 10, marginBottom: 10, marginRight: 20, fontWeight: '700', color: Colors.text }}>É necessário apresentar uma Carteira Nacional de Habilitação (CNH) válida</Text>
          <View style={{ flexWrap: 'wrap', alignItems: 'flex-start', flexDirection:'column', marginTop: 10 }}>
            <Button
              small
              buttonStyle={styles.buttonBrandSmall}
              fontWeight='900'
              fontSize={14}
              title='CONTINUAR'
              onPress={this.onCNHPicture}
            />
          </View>
        </View>
        <View>
          <Button
            buttonStyle={styles.buttonBrand}
            fontWeight='900'
            title='SALVAR'
            onPress={this.onSubmitRegister}
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
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(FormRegisterCustomer)

