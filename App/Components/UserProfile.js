
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { Icon, Avatar } from 'react-native-elements'
import { Colors } from '../Themes'

export default class UserProfile extends Component {
  static propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    onPress: PropTypes.func
  }
  render() {
    const { name, email, image } = this.props
    const { navigate } = this.props.navigation
    return (
      <View style={{ justifyContent: 'space-between', flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: Colors.border }}>
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Avatar
            medium
            rounded
            source={image}
            activeOpacity={0.7}
            onPress={() => navigate('ProfileScreen')}
          />
          <View style={{ flexDirection: 'column', marginLeft: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: '700', color: Colors.text }} onPress={() => navigate('ProfileScreen')}>{name}</Text>
            <Text style={{ fontSize: 12, color: Colors.textLight }} onPress={() => navigate('ProfileScreen')}>{email}</Text>
          </View>
        </View>
        <Icon name="edit" type="feather" color={Colors.brand} onPress={() => navigate('ProfileScreen')} />
      </View>
    )
  }
}
