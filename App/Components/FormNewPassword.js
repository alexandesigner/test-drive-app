import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'

// Redux
import UserRedux from '../Redux/UserRedux'

// Styles
import styles from './Styles/FormNewPasswordStyles'

class FormNewPassword extends Component {
  static defaultProps = {
    currentPassword: false
  }
  static propTypes = {
    currentPassword: PropTypes.bool,
    userId: PropTypes.string
  }
  constructor (props) {
    super(props)
    this.state = {
      userId: props.userId,
      password: '',
      newPassword: '',
      newPasswordConfirm: '',
      fieldsConfig: {
        password: {
          autoCorrect: false,
          autoCapitalize: 'none',
          placeholder: 'Informe sua senha atual'
        },
        newPassword: {
          autoCorrect: false,
          autoCapitalize: 'none',
          placeholder: 'Informe sua nova senha'
        },
        newPasswordConfirm: {
          autoCorrect: false,
          autoCapitalize: 'none',
          placeholder: 'Repita sua nova senha'
        }
      }
    }
  }
  onSubmitFields = () => {
    if (this.props.currentPassword) {
      const fields = {
        password: this.state.password,
        newPassword: this.state.newPassword,
        newPasswordConfirm: this.state.newPasswordConfirm
      }
      this.props.changeModalNewPassword(false)
    } else {
      const fields = {
        newPassword: this.state.newPassword,
        newPasswordConfirm: this.state.newPasswordConfirm
      }
      this.props.changeModalNewPassword(false)
    }
  }
  render() {
    const { fieldsConfig, password, newPassword, newPasswordConfirm } = this.state
    const { currentPassword } = this.props
    return (
      <View>
        {currentPassword && <View>
          <FormLabel labelStyle={styles.labelForm}>Senha atual</FormLabel>
          <FormInput
            {...fieldsConfig.password}
            style={styles.inputField}
            value={password}
            textContentType='password'
            secureTextEntry
            onChangeText={(password) => this.setState({ password })}
          />
        </View>}
        <View>
          <FormLabel labelStyle={styles.labelForm}>Nova senha</FormLabel>
          <FormInput
            {...fieldsConfig.newPassword}
            style={styles.inputField}
            value={newPassword}
            textContentType='password'
            secureTextEntry
            onChangeText={(newPassword) => this.setState({ newPassword })}
          />
        </View>
        <View>
          <FormLabel labelStyle={styles.labelForm}>Repita a nova senha</FormLabel>
          <FormInput
            {...fieldsConfig.newPasswordConfirm}
            style={styles.inputField}
            value={newPasswordConfirm}
            textContentType='password'
            secureTextEntry
            onChangeText={(newPasswordConfirm) => this.setState({ newPasswordConfirm })}
          />
        </View>
        <View>
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
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeModalNewPassword: (visible) => dispatch(UserRedux.changeModalNewPassword(visible))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormNewPassword)
