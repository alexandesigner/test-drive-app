import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View } from 'react-native'
import { Button } from 'react-native-elements'
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
  render () {
    const { cars } = this.props
    return (
      <View style={styles.mainContainer}>
        <Toolbar
          title="Test Drive App"
          bgColor={Colors.transparent}
          isIcon
          noStyled
          {...this.props}
        />
        <ScrollView style={styles.container}>
          <View>
            {cars.map(details => {
              return <ListCars
                        key={details.id}
                        id={details.id}
                        name={details.name}
                        image={details.image}
                      />
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

const mapStateToProps = state => {
  return {
    cars: state.cars.cars
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
