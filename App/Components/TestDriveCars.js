import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { ListItem, CheckBox } from 'react-native-elements'
import { Colors } from '../Themes'

// Redux
import TestDriveRedux from '../Redux/TestDriveRedux'

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
  render() {
    const { id, name, checked } = this.props
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
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    carsModels: state.testDrive.carsModels,
    modalCarVersion: state.testDrive.modalCarVersion
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeModalCarVersion: (visible) => dispatch(TestDriveRedux.changeModalCarVersion(visible)),
    setCurrentModel: (currentModel) => dispatch(TestDriveRedux.setCurrentModel(currentModel)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestDriveCars)

