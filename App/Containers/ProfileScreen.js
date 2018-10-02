import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'

// Styles
import styles from './Styles/ProfileScreenStyles'

// Components
import Toolbar from '../Components/Toolbar'
import FormProfile from '../Components/FormProfile'

class ProfileScreen extends Component {
  static navigationOptions = {
    header: false
  }
  render () {
    const { user } = this.props
    return (
      <View style={styles.mainContainer}>
        <Toolbar
          title="Meu Perfil"
          bgColor="#fff"
          {...this.props}
        />
        <FormProfile
          userId={user.id}
          name={user.name}
          email={user.email}
          phone={user.phone}
          image={user.image}
          {...this.props}
        />
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
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
