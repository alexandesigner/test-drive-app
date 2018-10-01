
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { ListItem, Text } from 'react-native-elements'
import { Colors } from '../Themes'

export default class ListEmployeers extends Component {
  static propTypes = {
    employeers: PropTypes.object,
    name: PropTypes.string,
    image: PropTypes.string,
    email: PropTypes.string,
    tests: PropTypes.number,
    onPress: PropTypes.func
  }
  render() {
    const { name, image, email, tests, onPress } = this.props.employeers
    return (
      <ListItem
        roundAvatar
        avatar={{uri:image}}
        title={name}
        subtitle={email}
        onPress={onPress}
        containerStyle={{ backgroundColor: Colors.transparent }}
        subtitleStyle={{ fontWeight: '400', color: Colors.textLight }}
        rightIcon={
          <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ color: Colors.brand, fontSize: 16 }}>{tests}</Text>
            <Text style={{ fontSize: 10, color: Colors.textLight }}>Testes</Text>
          </View>
        }
      />
    )
  }
}
