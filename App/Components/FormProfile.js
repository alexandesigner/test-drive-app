
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
    userId: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    image: PropTypes.string,
    onPress: PropTypes.func
  }
  constructor (props) {
    super(props)
    this.state = {
      modalPassword: false,
      userId: props.userId,
      email: props.email,
      name: props.name,
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
    const { fieldsConfig, name, image, email, userId } = this.state
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: 'transparent', alignItems: 'center', flexDirection: 'row', borderWidth: 1, borderStyle: 'dashed', borderColor: '#d2d2d2', padding: 10, marginLeft: 10, marginRight: 10 }}>
          <Avatar
            large
            rounded
            source={{uri: image}}
            activeOpacity={0.7}
          />
          <Button
            small
            buttonStyle={{
              backgroundColor: Colors.brand,
              borderWidth: 1,
              borderRadius: 3,
              borderColor: Colors.brandLight,
              borderBottomWidth: 0,
              shadowColor: Colors.brandLight,
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 3,
              elevation: 1
            }}
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
