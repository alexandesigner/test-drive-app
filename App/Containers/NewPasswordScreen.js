import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text } from 'react-native'
import { Colors } from '../Themes'

// Styles
import styles from './Styles/NewPasswordScreenStyles'

// Components
import FormNewPassword from '../Components/FormNewPassword'

class NewPasswordScreen extends Component {
  static navigationOptions = {
    headerMode: 'float',
    headerStyle: { backgroundColor: '#fff' },
    title: <Text style={ styles.textHeader }>Alterar senha</Text>,
    headerTintColor: Colors.text,
    headerLeft: null
  }
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View>
            <Text style={styles.labelInfo}>Caso você tenha esquecido a senha, preencha o campo abaixo</Text>
            <FormNewPassword currentPassword />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPasswordScreen)
