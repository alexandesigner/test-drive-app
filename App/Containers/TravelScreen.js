import React, { Component } from 'react'
import { connect } from 'react-redux'
import MapboxGL from '@mapbox/react-native-mapbox-gl'
import { View, Text, StatusBar } from 'react-native'
import { Button } from 'react-native-elements'
import { Colors } from '../Themes'

// Set map token
MapboxGL.setAccessToken('pk.eyJ1IjoiYWxleGFuZGVzaWduZXIiLCJhIjoiY2puZG0zeDBlMGU1eDNrbnkwZDloemw5YyJ9.l7iQ9MjUb0iNAD-hJtO6xA')

// Redux
import TestDriveRedux from '../Redux/TestDriveRedux'
import TravelRedux from '../Redux/TravelRedux'

// Components
import ModalMileage from '../Components/ModalMileage'

// Styles
import styles from './Styles/TravelScreenStyles'

class TravelScreen extends Component {
  static navigationOptions = {
    header: false,
  }
  constructor (props) {
    super(props)
  }
  componentDidMount() {
    StatusBar.setBarStyle('light-content', true)
    StatusBar.setHidden(false)
  }
  componentWillUnmount() {
    StatusBar.setHidden(true)
  }
  openModalMileage = (visible) => {
    this.props.onModalMileage(visible)
  }
  renderAnnotations() {
    return (
      <MapboxGL.PointAnnotation
        id='testdriveapp'
        coordinate={[-42.7664154, -5.082132]}
      >
        <View style={styles.annotationContainer}>
          <View style={styles.annotationFill} />
        </View>
        <MapboxGL.Callout title='Ponto de partida' />
      </MapboxGL.PointAnnotation>
    )
  }
  render () {
    return (
      <View style={styles.mainContainerTravel}>
        <View style={styles.travelInfo}>
          <View style={styles.travelInfoBox}>
            <Text style={styles.travelBoxLabel}>DISTÂNCIA</Text>
            <Text style={styles.travelBoxValue}>0.04</Text>
            <Text style={styles.travelBoxLabel}>km</Text>
          </View>
          <View style={styles.travelInfoBox}>
            <Text style={styles.travelBoxLabel}>VELOCIDADE</Text>
            <Text style={styles.travelBoxValue}>0.04</Text>
            <Text style={styles.travelBoxLabel}>km/h</Text>
          </View>
          <View style={styles.travelInfoBox}>
            <Text style={styles.travelBoxLabel}>DISTÂNCIA</Text>
            <Text style={styles.travelBoxValue}>0.04</Text>
            <Text style={styles.travelBoxLabel}>km/h</Text>
          </View>
          <View style={styles.travelInfoBox}>
            <Text style={styles.travelBoxLabel}>DURAÇÃO</Text>
            <Text style={styles.travelBoxValue}>13.15</Text>
            <Text style={styles.travelBoxLabel}>minutos</Text>
          </View>
        </View>
        <MapboxGL.MapView
          centerCoordinate={[-42.7664154, -5.082132]}
          style={styles.container}
          showUserLocation
          styleURL={MapboxGL.StyleURL.Light}
        >
        {this.renderAnnotations()}
        </MapboxGL.MapView>
        <View style={{ backgroundColor: Colors.danger }}>
          <Button
            buttonStyle={styles.buttonDanger}
            title='FINALIZAR TEST DRIVE'
            fontWeight='600'
            color='#fff'
            onPress={() => this.openModalMileage(true)}
          />
        </View>
        <ModalMileage started={false} navigation={this.props.navigation} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    modalMileage: state.testDrive.modalMileage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTravelStarted: (started) => dispatch(TravelRedux.setTravelStarted(started)),
    onModalMileage: (visible) => dispatch(TestDriveRedux.onModalMileage(visible))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TravelScreen)
