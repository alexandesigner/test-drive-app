import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { View, Text, Modal, TouchableHighlight, Platform } from 'react-native'
import { Icon, List, ListItem, CheckBox } from 'react-native-elements'
import { Colors } from '../Themes'

// Redux
import TestDriveRedux from '../Redux/TestDriveRedux'

// Transforms
import isObject from '../Transforms/isObject'

// Styles
import styles from './Styles/TestDriveCarsStyles'

class TestDriveCars extends Component {
  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    checked: PropTypes.bool
  }
  onChangeModalCarVersion = (visible) => {
    this.props.changeModalCarVersion(visible)
  }
  choiceModel = (id) => {
    this.onChangeModalCarVersion(true)
    const selectedModel = this.props.carsModels.find((item) => item.id === id)
    this.props.setCurrentModel(selectedModel)
  }
  choiceVersion = (id) => {
    const {
      setCurrentVersion,
      setCustomerTestDrive,
      setMakeTestDrive,
      currentModel,
      customerTestDrive
    } = this.props

    this.onChangeModalCarVersion(false)

    // Selected and set Version
    const selectedVersion = currentModel.models[id]
    setCurrentVersion(selectedVersion)

    // Set Customer test drive
    if (isObject(customerTestDrive)) {
      setCustomerTestDrive({
        model: currentModel,
        version: selectedVersion
      })
    } else {
      setMakeTestDrive({
        model: currentModel,
        version: selectedVersion
      })
      this.props.navigation.navigate('CustomerTestDriveScreen')
    }
  }
  render() {
    const { id, name, checked, currentModel, modalCarVersion, customerTestDrive } = this.props
    return (
      <View>
        <ListItem
          containerStyle={{ paddingTop: 0, paddingBottom: 0, paddingRight: 0 }}
          wrapperStyle={{ marginLeft: 0 }}
          hideChevron
          title={
            <CheckBox
              title={name}
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checkedColor={Colors.brand}
              size={26}
              checked={checked}
              textStyle={{ fontSize: 18 }}
              containerStyle={{ margin: 0, backgroundColor: 'transparent' }}
              onPress={() => this.choiceModel(id)}
            />
          }
        />
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalCarVersion}
          onRequestClose={() => console.log('Modal closed')}
        >
          <View style={{marginTop: Platform.OS === 'android' ? 22 : 42}}>
            <View>
              <Text style={styles.modalTitle}>{currentModel.name}</Text>
              <TouchableHighlight
                style={styles.modalClose}
                onPress={() => this.onChangeModalCarVersion(false)}>
                <Icon name="x" type="feather" color={Colors.brand} />
              </TouchableHighlight>
              <View style={{ marginTop: 20 }}>
                {!isObject(customerTestDrive)
                ? <Text style={styles.labelInfoInner}>Qual a versão do veículo que o cliente fará o test drive ?</Text>
                : <Text style={styles.labelInfoInner}>Qual a versão do veículo que o cliente está interessado?</Text> }
                <List containerStyle={{ padding: 0, marginTop: 0 }}>
                  {!isObject(currentModel) ? (
                    currentModel.models.map(item => {
                      return (
                        <ListItem
                          key={item.id}
                          containerStyle={{ paddingTop: 0, paddingBottom: 0, paddingRight: 0 }}
                          wrapperStyle={{ marginLeft: 0 }}
                          subtitleStyle={{ marginTop: 0 }}
                          titleStyle={{ marginTop: 0 }}
                          hideChevron
                          title={
                            <View>
                              <CheckBox
                                title={item.name}
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checkedColor={Colors.brand}
                                size={26}
                                checked={item.checked}
                                textStyle={{ fontSize: 18 }}
                                containerStyle={styles.modalCheckbox}
                                onPress={() => this.choiceVersion(item.id)}
                              />
                              <Text style={{ marginLeft: 50, color: '#999', marginBottom: 10 }}>
                                {item.featured.map(item => item.label).join(', ')}
                              </Text>
                            </View>
                          }
                        />
                      )
                    })
                  ) : ''}
                </List>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    carsModels: state.testDrive.carsModels,
    modalCarVersion: state.testDrive.modalCarVersion,
    currentModel: state.testDrive.currentModel,
    currentVersion: state.testDrive.currentVersion,
    customerTestDrive: state.testDrive.customerTestDrive,
    makeTestDrive: state.testDrive.makeTestDrive
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeModalCarVersion: (visible) => dispatch(TestDriveRedux.changeModalCarVersion(visible)),
    setCurrentModel: (currentModel) => dispatch(TestDriveRedux.setCurrentModel(currentModel)),
    setCurrentVersion: (currentVersion) => dispatch(TestDriveRedux.setCurrentVersion(currentVersion)),
    setCustomerTestDrive: (customerTestDrive) => dispatch(TestDriveRedux.setCustomerTestDrive(customerTestDrive)),
    setMakeTestDrive: (makeTestDrive) => dispatch(TestDriveRedux.setMakeTestDrive(makeTestDrive)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestDriveCars)
