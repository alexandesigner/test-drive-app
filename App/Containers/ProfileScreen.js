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
  constructor (props) {
    super(props)
    this.state = {
      userId: 0,
      name: 'Airton Souza!',
      email: 'airtonsouza@gmail.com',
      image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
    }
  }
  render () {
    const { userId, name, email, image } = this.state
    return (
      <View style={styles.mainContainer}>
        <Toolbar
          title="Meu Perfil"
          bgColor="#fff"
          {...this.props}
        />
        <FormProfile
          userId={userId}
          name={name}
          email={email}
          image={image}
          {...this.props}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
