import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, StatusBar, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { Colors, Images } from '../Themes'

// Styles
import styles from './Styles/HomeScreenStyles'

// Components
import Toolbar from '../Components/Toolbar'
import ListCars from '../Components/ListCars'

class HomeScreen extends Component {
  static navigationOptions = {
    header: false
  }
  componentDidMount() {
    StatusBar.setHidden(false)
  }
  render () {
    const { cars } = this.props
    const { navigate } = this.props.navigation
    return (
      <View style={styles.mainContainer}>
        <Toolbar
          title={<Image source={Images.logo} style={{ width: 206, height: 42, paddingTop: 15 }} />}
          bgColor={Colors.transparent}
          isIcon
          hideText
          noStyled
          {...this.props}
        />
        <ScrollView style={styles.container}>
          <View style={{ paddingRight: 10, paddingLeft: 10, paddingBottom: 10 }}>
            {cars.map(details => {
              const { id, name, image } = details
              return <ListCars
                        key={id}
                        id={id}
                        name={name}
                        image={image}
                        onPress={() => {
                          navigate('CarDetailsScreen', {
                            carId: id
                          })
                        }}
                        {...this.props}
                      />
            })}
          </View>
        </ScrollView>
        <View style={{ marginBottom: 15 }}>
          <Button
            buttonStyle={styles.buttonBrand}
            fontWeight='600'
            icon={{name: 'play', type: 'feather'}}
            title='INICIAR TEST DRIVE'
            onPress={() => navigate('TestDriveScreen')}
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
