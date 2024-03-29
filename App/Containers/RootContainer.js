import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
import Orientation from 'react-native-orientation'

// Redux
import StartupRedux from '../Redux/StartupRedux'

// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  constructor(props) {
    super(props)
    Orientation.lockToPortrait()
  }
  componentDidMount () {
    this.props.startup()
  }

  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='dark-content' />
        <ReduxNavigation />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupRedux.startup())
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
