import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text } from 'react-native'
import { Icon, List } from 'react-native-elements'
import { Colors } from '../Themes'

// Redux
import TestDriveRedux from '../Redux/TestDriveRedux'

// Transforms
import isObject from '../Transforms/isObject'

// Styles
import styles from './Styles/TestDriveScreenStyles'

// Components
import TestDriveCars from '../Components/TestDriveCars'
import ModalTestDriveVersion from '../Components/ModalTestDriveVersion'

class TestDriveScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerMode: 'float',
      headerStyle: { backgroundColor: '#fff' },
      title: <Text style={ styles.textHeader }>Selecione o modelo</Text>,
      headerTintColor: Colors.text,
      headerLeft: <Icon
                    containerStyle={styles.toolbarIconLeft}
                    type="feather"
                    name="arrow-left"
                    color={Colors.brand}
                    onPress={() => {
                      navigation.dispatch(TestDriveRedux.resetTestDrive())
                      navigation.navigate('DrawerNavigation')
                    }}
                  />
    }
  }
  componentDidMount () {
    this.props.resetTestDrive()
  }
  render () {
    const { carsModels, customerTestDrive } = this.props
    return (
      <View style={styles.mainContainer}>
        {!isObject(customerTestDrive) &&
        <View style={styles.customerTestDriveContainer}>
          <Text style={styles.customerTestDriveTitle}>Veículo de interesse do cliente</Text>
          <View style={styles.customerTestDriveInfo}>
            <Text style={styles.customerTestDriveName}>{customerTestDrive.model.name} - {customerTestDrive.version.name}</Text>
            <Text style={styles.customerTestDriveDescription}>{customerTestDrive.version.featured.map(item => item.label).join(', ')}</Text>
          </View>
        </View>}
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            {!isObject(customerTestDrive) ?
            <Text style={styles.labelInfo}>Agora escolha o modelo do veículo que será feito o test drive</Text>
            : <Text style={styles.labelInfo}>Qual o modelo do veículo que o cliente está interessado?</Text>}
            <List
              containerStyle={{ marginTop: 0, backgroundColor: 'transparent' }}>
              {carsModels.map((item) => {
                return (
                  <TestDriveCars
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    checked={item.checked}
                    {...this.props}
                  />
                )
              })}
            </List>
            <ModalTestDriveVersion
              {...this.props}
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    carsModels: state.testDrive.carsModels,
    customerTestDrive: state.testDrive.customerTestDrive,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetTestDrive: () => dispatch(TestDriveRedux.resetTestDrive())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestDriveScreen)
