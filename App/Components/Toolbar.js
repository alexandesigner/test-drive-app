
import React, { Component } from 'react'
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
const ButtonEmployeers = ({ navigation, rightIcon }) => {
  return rightIcon && <Icon
                        type="feather"
                        name="user-plus"
                        color={Colors.brand}
                        onPress={() => navigation.navigate('EmployeersScreen')}
                      />
}

export default class Toolbar extends Component {
  render() {
    return (
      <Header
        statusBarProps={{ barStyle: 'dark-content' }}
        leftComponent={<ButtonToggle navigation={this.props.navigation} />}
        centerComponent={{ text: this.props.title, style: { color: Colors.text, fontSize: 22 } }}
        rightComponent={<ButtonEmployeers rightIcon={this.props.rightIcon} navigation={this.props.navigation} />}
        outerContainerStyles={{ backgroundColor: this.props.bgColor, shadowColor: 'transparent', borderBottomWidth: 0, elevation: 0 }}
      />
    )
  }
}
