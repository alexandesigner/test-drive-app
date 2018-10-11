import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Text, FormLabel, FormInput, Button } from 'react-native-elements'
import RadioForm, {RadioButton} from 'react-native-simple-radio-button'
import RNPickerSelect from 'react-native-picker-select'
import HTML from 'react-native-render-html'
import TextInputMask from 'react-native-text-input-mask'
import { Colors } from '../Themes'

// Redux
import TestDriveRedux from '../Redux/TestDriveRedux'

// Styles
import styles from './Styles/FormRegisterCustomerStyles'

const pickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    color: '#86939e'
  }
})

class FormRegisterCustomer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      terms: '<p><strong style="margin-bottom: 15px;">Declaro que: </strong><ul><li>Possuo carteira de Habilitação válida e estou em condições físicas e psicológicas para participar do test drive</li><li>Possuo carteira de Habilitação válida e estou em condições físicas e psicológicas para participar do test drive</li></ul><strong style="margin-bottom: 15px;">Declaro que: </strong><ul><li>Possuo carteira de Habilitação válida e estou em condições físicas e psicológicas para participar do test drive</li><li>Possuo carteira de Habilitação válida e estou em condições físicas e psicológicas para participar do test drive</li></ul></p>',
      hasVehicle: 0,
      hasVehicleIndex: 0,
      hasVehicleOptions: [{
        label: 'Sim',
        value: 0
      }, {
        label: 'Não',
        value: 1
      }],
      willNegotiation: 0,
      willNegotiationIndex: 0,
      willNegotiationOptions: [{
        label: 'Sim',
        value: 0
      }, {
        label: 'Não',
        value: 1
      }],
      vehicles_brand: [
        {
          label: 'Alfa Romeo',
          value: 'alfa_romeo',
          models: [{
            label: '1.0',
            value: '1.0'
          },
          {
            label: '2.0',
            value: '2.0'
          },
          {
            label: '3.0',
            value: '3.0'
          }]
        },
        {
          label: 'Audi',
          value: 'audi',
          models: [{
            label: '8.0',
            value: '8.0'
          },
          {
            label: '9.0',
            value: '9.0'
          },
          {
            label: '10.0',
            value: '10.0'
          }]
        },
        {
          label: 'BMW',
          value: 'bmw',
          models: [{
            label: '4.0',
            value: '4.0'
          },
          {
            label: '5.0',
            value: '6.0'
          },
          {
            label: '7.0',
            value: '7.0'
          }]
        }
      ],
      current_vehicle: null,
      vehicles_models: [],
      current_vehicle_model: null,
      cpf: '',
      name: '',
      email: '',
      phone: '',
      current_vehicle_year: '',
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
        current_vehicle_year: {
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
  onSignature = () => {
    this.props.onModalSignature(true)
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
      phone: this.state.phone,
      current_vehicle: this.state.current_vehicle,
      current_vehicle_model: this.state.current_vehicle_model,
      current_vehicle_year: this.state.current_vehicle_year,
      occupation: this.state.occupation,
      hasVehicle: this.state.hasVehicle,
      willNegotiation: this.state.willNegotiation
    })
    this.props.navigation.navigate('GetKeyScreen')
  }
  render() {
    const {
      fieldsConfig,
      cpf,
      name,
      email,
      phone,
      vehicles_brand,
      vehicles_models,
      current_vehicle,
      current_vehicle_model,
      current_vehicle_year,
      hasVehicle,
      hasVehicleOptions,
      hasVehicleIndex,
      willNegotiationIndex,
      willNegotiationOptions,
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
              title='FOTOGRAFAR DOCUMENTO'
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
            <RadioForm
              formHorizontal={true}
              animation={true}
              style={{ marginLeft: 20, marginTop: 15 }}
            >
              {hasVehicleOptions.map((obj, i) => {
                let isSelected = hasVehicleIndex == i;
                return (
                  <View key={i}>
                    <RadioButton
                      isSelected={isSelected}
                      obj={obj}
                      index={i}
                      formHorizontal={true}
                      labelHorizontal={true}
                      buttonColor={Colors.brand}
                      labelColor={'#000'}
                      style={{ paddingRight: 20 }}
                      onPress={(value, index) => {
                        console.log(value, index)
                        this.setState({ hasVehicle: value })
                        this.setState({ hasVehicleIndex: index });
                      }}
                    />
                  </View>
                )
              })}
            </RadioForm>
          </View>
          {hasVehicle !== 1 &&
          <View>
            <View style={{ marginLeft: 0, marginRight: 0 }}>
              <FormLabel labelStyle={styles.labelForm}>Marca do veículo</FormLabel>
                <View style={styles.selectField}>
                <RNPickerSelect
                  hideIcon
                  style={{ ...pickerStyles }}
                  items={vehicles_brand}
                  placeholder={{
                      label: 'Selecione a marca do veículo',
                      value: null
                  }}
                  value={current_vehicle}
                  onValueChange={(value) => {
                    const brandModels = vehicles_brand.find(item => item.value === value)
                    console.log(brandModels)
                    this.setState({
                      current_vehicle: value,
                      current_vehicle_model: null,
                      vehicles_models: brandModels.models
                    })
                    console.log(current_vehicle_model)
                  }}
                />
              </View>
              <FormLabel labelStyle={styles.labelForm}>Modelo do veículo</FormLabel>
              <View style={styles.selectField}>
                <RNPickerSelect
                  hideIcon
                  style={{ ...pickerStyles }}
                  items={vehicles_models}
                  placeholder={{
                      label: 'Selecione o modelo do veículo',
                      value: null
                  }}
                  value={current_vehicle_model}
                  onValueChange={(value) => {
                    this.setState({
                      current_vehicle_model: value
                    })
                  }}
                />
              </View>
              <FormLabel labelStyle={styles.labelForm}>Ano do veículo</FormLabel>
              <FormInput
                {...fieldsConfig.current_vehicle_year}
                style={styles.inputField}
                value={current_vehicle_year}
                textContentType='name'
                onChangeText={(current_vehicle_year) => this.setState({ current_vehicle_year })}
              />
            </View>
            <View style={{ borderBottomWidth: 1, borderColor: Colors.border, paddingBottom: 15 }}>
              <FormLabel labelStyle={styles.labelForm}>Utilizará na negociação?</FormLabel>
              <RadioForm
                formHorizontal={true}
                animation={true}
                style={{ marginLeft: 20, marginTop: 15 }}
              >
                {willNegotiationOptions.map((obj, i) => {
                  let isSelected = willNegotiationIndex == i;
                  return (
                    <View key={i}>
                      <RadioButton
                        isSelected={isSelected}
                        obj={obj}
                        index={i}
                        formHorizontal={true}
                        labelHorizontal={true}
                        buttonColor={Colors.brand}
                        labelColor={'#000'}
                        style={{ paddingRight: 20 }}
                        onPress={(value, index) => {
                          this.setState({ willNegotiation: value })
                          this.setState({ willNegotiationIndex: index });
                        }}
                      />
                    </View>
                  )
                })}
              </RadioForm>
            </View>
          </View>}
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
        <View style={{ marginBottom: 20 }}>
          <View style={{ width: '100%', backgroundColor: '#fff', marginTop: 0, marginBottom: 10, borderTopWidth: 0, borderBottomWidth: 1, borderColor: Colors.border, padding: 10 }}>
            <Text style={{ marginLeft: 10, fontSize: 16, color: Colors.text, fontWeight: '800' }}>Termo de compromisso</Text>
          </View>
          <Text style={{ fontSize: 14, marginLeft: 20, marginTop: 10, marginBottom: 10, marginRight: 20, fontWeight: '700', color: Colors.text }}>Para realizar o teste drive é necessário ler e concordar com o termo de compromisso</Text>
          <View style={{ padding: 10, backgroundColor: '#fff', marginTop: 10, marginBottom: 10 }}>
            <HTML
              html={this.state.terms}
              baseFontStyle={{ fontSize: 12, lineHeight: 16, color: Colors.textLight, marginBottom: 10 }}
              imagesMaxWidth={Dimensions.get('window').width}
            />
          </View>
          <View style={{ flexWrap: 'wrap', alignItems: 'flex-start', flexDirection:'column', marginTop: 10 }}>
            <Button
              small
              buttonStyle={styles.buttonBrandSmall}
              fontWeight='900'
              fontSize={14}
              title='ASSINAR TERMO'
              onPress={this.onSignature}
            />
          </View>
        </View>
        <View style={{ marginBottom: 40 }}>
          <Button
            buttonStyle={styles.buttonBrand}
            fontWeight='900'
            title='CADASTRAR'
            onPress={this.onSubmitRegister}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    modalSignature: state.testDrive.modalSignature
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onModalSignature: (visible) => dispatch(TestDriveRedux.onModalSignature(visible))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormRegisterCustomer)

