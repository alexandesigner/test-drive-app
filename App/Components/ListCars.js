
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableWithoutFeedback, View } from 'react-native'
import { Card, Text } from 'react-native-elements'

// Styles
import styles from './Styles/ListCarsStyles'

export default class ListCars extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    onPress: PropTypes.func
  }
  render() {
    const { name, image, onPress } = this.props
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View>
          <Card
            image={image}
            containerStyle={styles.card}>
            <Text style={styles.cardTitle}>
              {name}
            </Text>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
