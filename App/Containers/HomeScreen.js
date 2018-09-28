import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, Text, View } from 'react-native'
import { Card, Button } from 'react-native-elements'
import { Colors } from '../Themes'

// Styles
import styles from './Styles/HomeScreenStyles'

// Components
import Toolbar from '../Components/Toolbar'
import ListCars from '../Components/ListCars'

class HomeScreen extends Component {
  static navigationOptions = {
    header: false
  }
  constructor (props) {
    super(props)
    this.state = {
      cars: [{
        id: 0,
        name: 'Up',
        image: require('../Images/carro1.png'),
      }, {
        id: 1,
        name: 'Gol',
        image: require('../Images/carro2.png'),
      }, {
        id: 2,
        name: 'Fox',
        image: require('../Images/carro3.png'),
      }, {
        id: 3,
        name: 'Novo Polo',
        image: require('../Images/carro4.png'),
      }, {
        id: 4,
        name: 'Golf',
        image: require('../Images/carro5.png'),
      }]
    }
  }
  render () {
    const { cars } = this.state
    return (
      <View style={styles.mainContainer}>
        <Toolbar
          title="Test Drive App"
          bgColor={Colors.transparent}
          isIcon
          {...this.props}
        />
        <ScrollView style={styles.container}>
          <View>
            {cars.map(details => {
              return <ListCars key={details.id} cars={details} />
            })}
          </View>
        </ScrollView>
        <View style={{ marginBottom: 15 }}>
          <Button
            buttonStyle={styles.buttonBrand}
            fontWeight='900'
            icon={{name: 'play', type: 'feather'}}
            title='INICIAR TEST DRIVE'
          />
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
