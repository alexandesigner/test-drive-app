import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { View, Text, Modal, Alert, TouchableHighlight } from 'react-native'
import { Button, Icon, FormLabel, FormInput } from 'react-native-elements'
import { Colors } from '../Themes'

// Reduxz
import TestDriveRedux from '../Redux/TestDriveRedux'

// Styles
import styles from './Styles/ModalMileageStyles'

class ModalMileage extends Component {
  static defaultProps = {
    started: false
  }
  static propTypes = {
    started: PropTypes.bool,
    navigation: PropTypes.object
  }
  constructor (props) {
    super(props)
    this.state = {
      mileage_started: null,
      mileage_finished: null,
      fieldsConfig: {
        mileage_started: {
          autoCorrect: false,
          placeholder: 'Informe qual a kilometragem atual'
        },
        mileage_finished: {
          autoCorrect: false,
          placeholder: 'Informe qual a kilometragem atual'
        }
      }
    }
  }
  onChangeModalMileage = (visible) => {
    this.props.onModalMileage(visible)
  }
  onSubmitMileage = () => {
    if (this.props.started) {
      this.props.setMileageStarted(this.state.mileage_started)
      this.props.navigation.navigate('TravelScreen')
      this.onChangeModalMileage(false)
    } else {
      this.props.setMileageFinished(this.state.mileage_finished)
      this.props.navigation.navigate('CustomerSurveyScreen')
      this.onChangeModalMileage(false)
    }
  }
  render () {
    const { modalMileage, started } = this.props
    const { mileage_started, mileage_finished, fieldsConfig } = this.state
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalMileage}
        supportedOrientations={['portrait']}
        onRequestClose={() => Alert.alert('Modal has been closed.')}>
        <View style={{marginTop: 22 }}>
          <View style={{ marginBottom: 15 }}>
            <Text style={styles.modalTitle}>Kilometragem atual</Text>
            <TouchableHighlight
              underlayColor='transparent'
              style={styles.modalClose}
              onPress={() => this.onChangeModalMileage(false)}>
              <Icon name="x" type="feather" color={Colors.brand} />
            </TouchableHighlight>
          </View>
          {started
            ? <Text style={styles.labelInfoInner}>Por favor, informe no campo abaixo a kilometragem atual antes de iniciar o test drive.</Text>
            : <Text style={styles.labelInfoInner}>Por favor, informe no campo abaixo a kilometragem atual antes de finalizar o test drive.</Text>}
          {started
          ? <View>
            <FormLabel labelStyle={styles.labelForm}>Kilometragem atual (início)</FormLabel>
            <FormInput
              {...fieldsConfig.mileage_started}
              style={styles.inputField}
              value={mileage_started}
              keyboardType='numeric'
              textContentType='telephoneNumber'
              onChangeText={(mileage_started) => this.setState({ mileage_started })}
            />
          </View>
          : <View>
            <FormLabel labelStyle={styles.labelForm}>Kilometragem atual (final)</FormLabel>
            <FormInput
              {...fieldsConfig.mileage_finished}
              style={styles.inputField}
              value={mileage_finished}
              keyboardType='numeric'
              textContentType='telephoneNumber'
              onChangeText={(mileage_finished) => this.setState({ mileage_finished })}
            />
          </View>}
          <View style={{ marginBottom: 40 }}>
            <Button
              buttonStyle={styles.buttonBrand}
              fontWeight='600'
              title='CONFIRMAR'
              onPress={this.onSubmitMileage}
            />
          </View>
        </View>
      </Modal>
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
    onModalMileage: (visible) => dispatch(TestDriveRedux.onModalMileage(visible)),
    setMileageStarted: (mileage_started) => dispatch(TestDriveRedux.setMileageStarted(mileage_started)),
    setMileageFinished: (mileage_finished) => dispatch(TestDriveRedux.setMileageFinished(mileage_finished)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalMileage)
