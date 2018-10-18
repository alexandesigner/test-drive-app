import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Modal, TouchableHighlight, View, Alert, Platform } from 'react-native'
import { Text, FormLabel, FormInput, Button, Avatar, Icon } from 'react-native-elements'
import TextInputMask from 'react-native-text-input-mask'
import { Colors } from '../Themes'

// Redux
import UserRedux from '../Redux/UserRedux'

// Styles
import styles from './Styles/FormProfileStyles'

// Components
import FormNewPassword from './FormNewPassword'

class FormProfile extends Component {
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
      email: props.email,
      name: props.name,
      phone: props.phone,
      image: props.image,
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
        }
      }
    }
  }
  onChangeModalNewPassword = (visible) => {
    this.props.changeModalNewPassword(visible)
  }
  renderImage = (image) => {
    if (image === null) {
      return require('../Images/avatar.jpg')
    } else {
      return {uri: image}
    }
  }
  onUpdateUser = () => {
    // name, phone, image
    this.props.updateUser(this.state.name, this.state.phone, this.state.image)
    this.props.navigation.navigate('DrawerNavigation')
  }
  render() {
    const { fieldsConfig, name, image, email, phone } = this.state
    const { userId, modalNewPassword } = this.props
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: '#fff', alignItems: 'center', flexDirection: 'row', borderWidth: 2, borderStyle: 'dashed', borderColor: '#d2d2d2', padding: 10, marginLeft: 10, marginRight: 10 }}>
          <Avatar
            large
            rounded
            source={this.renderImage(image)}
            activeOpacity={0.7}
          />
          <Button
            small
            buttonStyle={styles.buttonBrandSmall}
            fontSize={14}
            fontWeight='600'
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
            textContentType='emailAddress'
            selectTextOnFocus={false}
          />
        </View>
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
          <FormLabel labelStyle={styles.labelForm}>Telefone (Whatsapp)</FormLabel>
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
          <FormLabel labelStyle={styles.labelForm}>Segurança</FormLabel>
          <Button
            small
            buttonStyle={{ borderRadius: 3, marginTop: 15 }}
            textStyle={{ color: '#fff' }}
            fontWeight='600'
            title='ALTERAR SENHA'
            onPress={() => this.onChangeModalNewPassword(true)}
          />
        </View>
        <View>
          <Button
            buttonStyle={styles.buttonBrand}
            fontWeight='600'
            title='SALVAR'
            onPress={this.onUpdateUser}
          />
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalNewPassword}
          onRequestClose={() => Alert.alert('Modal has been closed.')}>
          <View style={{marginTop: Platform.OS === 'android' ? 22 : 42}}>
            <View>
              <Text style={{ marginLeft: 20, fontSize: 26, color: Colors.text, fontWeight: '600' }}>Alterar senha</Text>
              <TouchableHighlight
                underlayColor='transparent'
                style={{ position: 'absolute', right: 20, top: 0 }}
                onPress={() => this.onChangeModalNewPassword(false)}>
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

const mapStateToProps = state => {
  return {
    user: state.user,
    modalNewPassword: state.user.modalNewPassword
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (id, name, phone, image) => dispatch(UserRedux.updateUser(id, name, phone, image)),
    changeModalNewPassword: (visible) => dispatch(UserRedux.changeModalNewPassword(visible))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormProfile)

