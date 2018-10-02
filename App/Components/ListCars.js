
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Text } from 'react-native-elements'
import { Colors } from '../Themes'

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
    const { id, name, image, onPress } = this.props
    return (
      <Card
        image={image}
        style={styles.card}
        onPress={onPress}>
        <Text style={styles.cardTitle}>
          {name}
        </Text>
      </Card>
    )
  }
}
