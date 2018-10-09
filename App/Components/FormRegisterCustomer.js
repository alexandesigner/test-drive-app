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
      name: '',
      email: '',
      phone: '',
      vehicle_brand: '',
      vehicle_model: '',
      vehicle_year: '',
      occupation: '',
      fieldsConfig: {
        cpf: {
          autoCorrect: false,
          placeholder: 'Informe o CPF do cliente'
        },
        name: {
          autoCorrect: false,
          placeholder: 'Informe o nome do cliente'
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
        vehicle_brand: {
          autoCorrect: false,
          placeholder: 'Informe a marca do veículo'
        },
        vehicle_model: {
          autoCorrect: false,
          placeholder: 'Informe modelo do veículo'
        },
        vehicle_year: {
          autoCorrect: false,
          placeholder: 'Informe o ano do veículo'
        },
        occupation: {
          autoCorrect: false,
          placeholder: 'Informe a profissão do cliente'
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
  onContactData = () => {
    console.log('Informações de contato: ', {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    })
  }
  onSubmitRegister = () => {
    console.log('Cliente Registrado com sucesso!', {
      cpf: this.state.cpf,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    })
  }
  render() {
    const {
      fieldsConfig,
      cpf,
      name,
      email,
      phone,
      vehicle_brand,
      vehicle_model,
      vehicle_year,
      occupation
    } = this.state
    return (
      <View>
        <View style={{ marginBottom: 20 }}>
          <View style={{ width: '100%', backgroundColor: '#fff', marginTop: 0, marginBottom: 10, borderTopWidth: 0, borderBottomWidth: 1, borderColor: Colors.border, padding: 10 }}>
            <Text style={{ marginLeft: 10, fontSize: 16, color: Colors.text, fontWeight: '800' }}>Dados essenciais</Text>
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
        <View style={{ marginBottom: 20 }}>
          <View style={{ width: '100%', backgroundColor: '#fff', marginTop: 0, marginBottom: 10, borderTopWidth: 0, borderBottomWidth: 1, borderColor: Colors.border, padding: 10 }}>
            <Text style={{ marginLeft: 10, fontSize: 16, color: Colors.text, fontWeight: '800' }}>Dados de contato</Text>
          </View>
          <FormLabel labelStyle={styles.labelForm}>Nome</FormLabel>
          <FormInput
            {...fieldsConfig.name}
            style={styles.inputField}
            value={name}
            textContentType='name'
            onChangeText={(name) => this.setState({ name })}
          />
          <FormLabel labelStyle={styles.labelForm}>Email</FormLabel>
          <FormInput
            {...fieldsConfig.email}
            style={styles.inputField}
            value={email}
            textContentType='emailAddress'
            onChangeText={(email) => this.setState({ email })}
          />
          <FormLabel labelStyle={styles.labelForm}>Telefone (Whatsapp)</FormLabel>
          <TextInputMask
            {...fieldsConfig.phone}
            style={styles.inputField}
            value={phone}
            textContentType='telephoneNumber'
            mask={"([00]) [0] [0000] [0000]"}
            onChangeText={(phone) => this.setState({ phone })}
          />
          <View style={{ flexWrap: 'wrap', alignItems: 'flex-start', flexDirection:'column', marginTop: 10 }}>
            <Button
              small
              buttonStyle={styles.buttonBrandSmall}
              fontWeight='900'
              fontSize={14}
              title='CONTINUAR'
              onPress={this.onContactData}
            />
          </View>
        </View>
        <View style={{ marginBottom: 20 }}>
          <View style={{ width: '100%', backgroundColor: '#fff', marginTop: 0, marginBottom: 10, borderTopWidth: 0, borderBottomWidth: 1, borderColor: Colors.border, padding: 10 }}>
            <Text style={{ marginLeft: 10, fontSize: 16, color: Colors.text, fontWeight: '800' }}>Outras informações</Text>
          </View>
          <View style={{ borderBottomWidth: 1, borderColor: Colors.border, paddingBottom: 15 }}>
            <FormLabel labelStyle={styles.labelForm}>Atualmente o cliente possui um veículo?</FormLabel>
          </View>
          <View style={{ marginLeft: 0, marginRight: 0 }}>
            <FormLabel labelStyle={styles.labelForm}>Marca do veículo</FormLabel>
            <FormInput
              {...fieldsConfig.vehicle_brand}
              style={styles.inputField}
              value={vehicle_brand}
              textContentType='name'
              onChangeText={(vehicle_brand) => this.setState({ vehicle_brand })}
            />
            <FormLabel labelStyle={styles.labelForm}>Modelo do veículo</FormLabel>
            <FormInput
              {...fieldsConfig.vehicle_model}
              style={styles.inputField}
              value={vehicle_model}
              textContentType='name'
              onChangeText={(vehicle_model) => this.setState({ vehicle_model })}
            />
            <FormLabel labelStyle={styles.labelForm}>Ano do veículo</FormLabel>
            <FormInput
              {...fieldsConfig.vehicle_year}
              style={styles.inputField}
              value={vehicle_year}
              textContentType='name'
              onChangeText={(vehicle_year) => this.setState({ vehicle_year })}
            />
          </View>
          <View style={{ borderBottomWidth: 1, borderColor: Colors.border, paddingBottom: 15 }}>
            <FormLabel labelStyle={styles.labelForm}>Utilizará na negociação?</FormLabel>
          </View>
          <View style={{ marginLeft: 0, marginRight: 0 }}>
            <FormLabel labelStyle={styles.labelForm}>Profissão do cliente</FormLabel>
            <FormInput
              {...fieldsConfig.occupation}
              style={styles.inputField}
              value={occupation}
              textContentType='name'
              onChangeText={(occupation) => this.setState({ occupation })}
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

