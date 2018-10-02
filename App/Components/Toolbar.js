
import React, { Component } from 'react'
import { Platform } from 'react-native'
import PropTypes from 'prop-types'
import { Header, Icon } from 'react-native-elements'
import { Colors } from '../Themes'

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

const toolbarStyles = (props) => {
  const isAndroid = Platform.OS === 'android'
  const { noStyled, bgColor } = props
  return {
    borderBottomWidth: noStyled ? 0 : 1,
    borderBottomColor: noStyled ? 'transparent' : '#d2d2d2',
    backgroundColor: bgColor,
    shadowColor: !noStyled && isAndroid ? '#000000' : null,
    shadowOffset: !noStyled && isAndroid ? { width: 0, height: 2 } : null,
    shadowOpacity: !noStyled && isAndroid ? 0.2 : null,
    shadowRadius: !noStyled && isAndroid ? 1.2 : null,
    elevation: !noStyled && isAndroid ? 3 : 0
  }
}

export default class Toolbar extends Component {
  static defaultProps = {
    isIcon: false,
    noStyled: false
  }
  static propTypes = {
    title: PropTypes.string,
    bgColor: PropTypes.string,
    isIcon: PropTypes.bool,
    noStyled: PropTypes.bool,
    navigation: PropTypes.object,
  }
  render() {
    return (
      <Header
        statusBarProps={{ barStyle: 'dark-content' }}
        leftComponent={<ButtonToggle navigation={this.props.navigation} />}
        centerComponent={{ text: this.props.title, style: { color: Colors.text, fontSize: 22 } }}
        rightComponent={<ButtonEmployeers isIcon={this.props.isIcon} navigation={this.props.navigation} />}
        outerContainerStyles={toolbarStyles(this.props)}
      />
    )
  }
}
