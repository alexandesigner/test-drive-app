
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View } from 'react-native'
import { FormLabel, FormInput, Button, Avatar } from 'react-native-elements'
import { Colors } from '../Themes'

// Styles
import styles from './Styles/FormProfileStyles'

export default class FormProfile extends Component {
  static propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    image: PropTypes.string,
    onPress: PropTypes.func
  }
  constructor (props) {
    super(props)
    this.state = {
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
  onSubmitFields = () => {
    const fields = {
      name: this.state.name
    }
    this.props.navigation.navigate('DrawerNavigation')
  }
  render() {
    const { fieldsConfig, name, image, email } = this.state
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
      </View>
    )
  }
}
