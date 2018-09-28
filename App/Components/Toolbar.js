
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Header, Icon } from 'react-native-elements'
import { Colors } from '../Themes'

// Styles
import styles from './Styles/ToolbarStyles'

// Button Toggle Drawer
const ButtonToggle = ({ navigation }) => {
  return (
    <Icon
      type="feather"
      name="menu"
      color={Colors.brand}
      onPress={() => navigation.navigate('DrawerOpen')}
    />
  )
}

// Button Employeers
const ButtonEmployeers = ({ navigation, isIcon }) => {
  return isIcon && <Icon
                      type="feather"
                      name="user-plus"
                      color={Colors.brand}
                      onPress={() => navigation.navigate('EmployeersScreen')}
                    />
}

export default class Toolbar extends Component {
  static defaultProps = {
    isIcon: false
  }
  static propTypes = {
    title: PropTypes.string,
    bgColor: PropTypes.string,
    isIcon: PropTypes.bool,
    navigation: PropTypes.object,
  }
  render() {
    return (
      <Header
        statusBarProps={{ barStyle: 'dark-content' }}
        leftComponent={<ButtonToggle navigation={this.props.navigation} />}
        centerComponent={{ text: this.props.title, style: { color: Colors.text, fontSize: 22 } }}
        rightComponent={<ButtonEmployeers isIcon={this.props.isIcon} navigation={this.props.navigation} />}
        outerContainerStyles={{ backgroundColor: this.props.bgColor, shadowColor: 'transparent', borderBottomWidth: 0, elevation: 0 }}
      />
    )
  }
}
