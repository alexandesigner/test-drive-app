import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Modal, Platform, Alert, StatusBar } from 'react-native'
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas'
import { Button, Icon } from 'react-native-elements'
import * as Animatable from 'react-native-animatable';
import Orientation from 'react-native-orientation'
import { Colors } from '../Themes'

// Redux
import TestDriveRedux from '../Redux/TestDriveRedux'

// Styles
import styles from './Styles/ModalSignatureStyles'

// Animatable
// ModalSignature = Animatable.createAnimatableComponent(ModalSignature)

class ModalSignature extends Component {
  constructor (props) {
    super(props)
    this.state = {
      landscape: false,
      orientation: 'PORTRAIT'
    }
  }
  componentDidMount() {
    Orientation.addOrientationListener(this.orientationDidChange)
  }
  overlayStyles = () => {
    const { landscape, orientation } = this.state
    if (!landscape) {
      if (orientation === 'PORTRAIT') {
        return {
          transform: [{ rotate: '0deg'}]
        }
      } else if (orientation === 'PORTRAITUPSIDEDOWN') {
        return {
          transform: [{ rotate: '-180deg'}]
        }
      }
    }
  }
  orientationDidChange = (orientation) => {
    if (orientation === 'LANDSCAPE') {
      this.setState({
        landscape: true,
        orientation: orientation
      })
    } else if (orientation === 'PORTRAIT' || orientation === 'PORTRAITUPSIDEDOWN') {
      this.setState({
        landscape: false,
        orientation: orientation
      })
    }
  }
  componentWillUnmount() {
    Orientation.getOrientation((err, orientation) => {
      console.log(`Current Device Orientation: ${orientation}`);
    });
    Orientation.removeOrientationListener(this.orientationDidChange);
  }
  evtModalSignature = (visible) => {
    this.props.onModalSignature(visible)
  }
  render () {
    const { modalSignature } = this.props
    const { landscape } = this.state
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalSignature}
        supportedOrientations={['portrait', 'landscape']}
        onRequestClose={() => Alert.alert('Modal has been closed.')}>
          {!landscape ?
          <View style={{ flex: 1 }}>
            <View style={styles.overlay}>
              <View style={this.overlayStyles(this.state)}>
                <Icon name="phone-rotate-landscape" type="material-community" size={52} color={Colors.text} />
                <Text style={{ color: Colors.text, marginTop: 20, textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                  Para assinar o termo de compromisso,
                </Text>
                <Text style={{ color: Colors.text, textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                  gire o dispositivo para a posição de paisagem.
                </Text>
                <Animatable.Text style={{ fontWeight: '700', fontSize: 10, color: Colors.text, marginTop: 20, textAlign: 'center', justifyContent: 'center', alignItems: 'center' }} animation="fadeIn" iterationCount={"infinite"} direction="alternate">
                  Caso não esteja conseguindo, habilite a rotação do celular
                </Animatable.Text>
              </View>
            </View>
          </View> :
          <View style={{
            flex: 1,
            backgroundColor: '#fff',
            marginTop: Platform.OS === 'android' ? 0 : 20
          }}>
          <View style={{ backgroundColor: '#f1f1f1', marginTop: 5, borderTopWidth: 1, borderBottomWidth: 1, borderColor: Colors.border, marginBottom: 10, flex: 1, flexDirection: 'row' }}>
            <SketchCanvas
              ref={ref => this.signatureCanvas = ref}
              style={{ flex: 1 }}
              strokeColor={Colors.brand}
              strokeWidth={2}
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <Button
              buttonStyle={styles.buttonDefault}
              fontWeight='600'
              title='LIMPAR'
              color={Colors.text}
              onPress={() => this.signatureCanvas.clear()}
            />
            <Button
              buttonStyle={styles.buttonBrand}
              fontWeight='600'
              title='CONFIRMAR'
              onPress={() => {
                StatusBar.setHidden(false)
                this.evtModalSignature(false)
                this.signatureCanvas.clear()
              }}
            />
          </View>
        </View>}
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
