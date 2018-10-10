import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Modal, TouchableHighlight, Platform, Alert } from 'react-native'
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas'
import { Button, Icon } from 'react-native-elements'
import { Colors } from '../Themes'

// Redux
import TestDriveRedux from '../Redux/TestDriveRedux'

// Styles
import styles from './Styles/ModalSignatureStyles'

class ModalSignature extends Component {
  evtModalSignature = (visible) => {
    this.props.onModalSignature(visible)
  }
  render () {
    const { modalSignature } = this.props
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalSignature}
        onRequestClose={() => Alert.alert('Modal has been closed.')}>
        <View style={{
          flex: 1,
          backgroundColor: '#fff',
          marginTop: Platform.OS === 'android' ? 22 : 42
        }}>
          <Text style={styles.modalTitle}>Assinatura do cliente</Text>
          <TouchableHighlight
            style={styles.modalClose}
            onPress={() => this.evtModalSignature(false)}>
            <Icon name="x" type="feather" color={Colors.brand} />
          </TouchableHighlight>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.labelInfoInner}>Deixe a sua assinatura, use o dedo para escrever.</Text>
          </View>
          <View style={{ backgroundColor: '#f1f1f1', marginTop: 5, borderTopWidth: 1, borderBottomWidth: 1, borderColor: Colors.border, marginBottom: 10, flex: 1, flexDirection: 'row' }}>
            <SketchCanvas
              style={{ flex: 1 }}
              strokeColor={Colors.brand}
              strokeWidth={2}
            />
          </View>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Button
            buttonStyle={styles.buttonBrand}
            fontWeight='900'
            title='LIMPAR'
          />
          <Button
            buttonStyle={styles.buttonBrand}
            fontWeight='900'
            title='CONFIRMAR'
          />
        </View>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    modalSignature: state.testDrive.modalSignature
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onModalSignature: (visible) => dispatch(TestDriveRedux.onModalSignature(visible))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalSignature)
