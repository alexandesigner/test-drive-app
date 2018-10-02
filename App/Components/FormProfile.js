
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, TouchableHighlight, View, Alert, ScrollView, Platform } from 'react-native'
import { Text, FormLabel, FormInput, Button, Avatar, Icon } from 'react-native-elements'
import { Colors } from '../Themes'

// Styles
import styles from './Styles/FormProfileStyles'

// Components
import FormNewPassword from './FormNewPassword'

export default class FormProfile extends Component {
  static propTypes = {
    userId: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    onPress: PropTypes.func
  }
  constructor (props) {
    super(props)
    this.state = {
      modalPassword: false,
      userId: props.userId,
      email: props.email,
      name: props.name,
      phone: props.phone,
      image: props.image,
      fieldsConfig: {
        name: {
          autoCorrect: false,
          autoCapitalize: 'none',
          placeholder: 'Informe seu nome'
        }
      }
    }
  }
  setModalPassword = (visible) => {
    this.setState({modalPassword: visible});
  }
  onSubmitFields = () => {
    const fields = {
      name: this.state.name
    }
    this.props.navigation.navigate('DrawerNavigation')
  }
  render() {
    const { fieldsConfig, name, image, email, phone, userId } = this.state
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: 'transparent', alignItems: 'center', flexDirection: 'row', borderWidth: 1, borderStyle: 'dashed', borderColor: '#d2d2d2', padding: 10, marginLeft: 10, marginRight: 10 }}>
          <Avatar
            large
            rounded
            source={image}
            activeOpacity={0.7}
          />
          <Button
            small
            buttonStyle={styles.buttonBrandSmall}
            fontSize={14}
            fontWeight='900'
            title='TROCAR FOTO'
          />
        </View>
        <View>
          <FormLabel labelStyle={styles.labelForm}>Email</FormLabel>
          <FormInput
            {...fieldsConfig.email}
            style={styles.inputField}
            value={email}
            editable={false}
            selectTextOnFocus={false}
          />
        </View>
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
          <FormLabel labelStyle={styles.labelForm}>Telefone (Whatsapp)</FormLabel>
          <FormInput
            {...fieldsConfig.phone}
            style={styles.inputField}
            value={phone}
            onChangeText={(phone) => this.setState({ phone })}
          />
        </View>
        <View>
          <FormLabel labelStyle={styles.labelForm}>Segurança</FormLabel>
          <Button
            small
            buttonStyle={{ backgroundColor: '#fff', borderRadius: 3, marginTop: 15 }}
            textStyle={{ color: Colors.text }}
            fontWeight='700'
            title='ALTERAR SENHA'
            onPress={() => {
              this.setModalPassword(true);
            }}
          />
        </View>
        <View>
          <Button
            buttonStyle={styles.buttonBrand}
            fontWeight='900'
            title='SALVAR'
            onPress={this.onSubmitFields}
          />
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalPassword}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: Platform.OS === 'android' ? 22 : 42}}>
            <View>
              <Text style={{ marginLeft: 20, fontSize: 26, color: Colors.text, fontWeight: '700' }}>Alterar senha</Text>
              <TouchableHighlight
                style={{ position: 'absolute', right: 20, top: 0 }}
                onPress={() => {
                  this.setModalPassword(!this.state.modalPassword);
                }}>
                <Icon name="x" type="feather" color={Colors.brand} />
              </TouchableHighlight>
              <View style={{ marginTop: 20 }}>
                <FormNewPassword userId={userId} />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}
