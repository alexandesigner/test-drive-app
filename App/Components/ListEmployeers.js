
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Platform } from 'react-native'
import { ListItem, Text, Badge } from 'react-native-elements'
import { Colors } from '../Themes'

export default class ListEmployeers extends Component {
  static propTypes = {
    employeers: PropTypes.object,
    name: PropTypes.string,
    image: PropTypes.string,
    email: PropTypes.string,
    tests: PropTypes.number,
    verified: PropTypes.bool,
    onPress: PropTypes.func
  }
  renderImage = (image) => {
    if (image === null) {
      return require('../Images/avatar.jpg')
    } else {
      return {uri: image}
    }
  }
  render() {
    const { name, image, email, tests, verified, onPress } = this.props.employeers
    return (
      <ListItem
        roundAvatar
        avatar={this.renderImage(image)}
        title={
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontWeight: '700', color: Colors.text, fontSize: 16, marginLeft: 10 }}>{name}</Text>
            {!verified && <Badge containerStyle={{ marginLeft: 10, paddingTop: 2, paddingLeft: 5, paddingRight: 5, paddingBottom: 2 }}>
              <Text style={{ color: '#fff', fontSize: 10 }}>não verificado</Text>
            </Badge>}
          </View>
        }
        subtitle={email}
        onPress={onPress}
        containerStyle={{ backgroundColor: Colors.transparent }}
        subtitleStyle={{ fontSize: 12, fontWeight: '400', color: Colors.textLight }}
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
