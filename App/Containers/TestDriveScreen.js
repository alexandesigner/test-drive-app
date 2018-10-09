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
import CarsTestDrive from '../Components/CarsTestDrive'

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
  render () {
    const { carsModels, customerTestDrive } = this.props
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            {!isObject(customerTestDrive)
            ? <Text style={styles.labelInfo}>Qual o modelo do veículo que o cliente fará o test drive ?</Text>
            : <Text style={styles.labelInfo}>Qual o modelo do veículo que o cliente está interessado?</Text> }
            <List
              containerStyle={{ marginTop: 0, backgroundColor: 'transparent' }}>
              {carsModels.map((item) => {
                return (
                  <CarsTestDrive
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    checked={item.checked}
                    {...this.props}
                  />
                )
              })}
            </List>
          </View>
        </ScrollView>
        {!isObject(customerTestDrive) ?
          <View style={{ backgroundColor: '#fff', justifyContent: 'center' }}>
            <Text style={{ backgroundColor: Colors.brand, color: '#fff', fontWeight: '700', textAlign: 'center', padding: 5 }}>Veículo de interesse do cliente</Text>
            <View style={{ padding: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <Text style={{ color: Colors.brand, fontSize: 20, fontWeight: '700', marginBottom: 5 }}>{customerTestDrive.model.name} - {customerTestDrive.version.name}</Text>
              <Text style={{ color: '#999', fontSize: 12 }}>{customerTestDrive.version.featured.map(item => item.label).join(', ')}</Text>
            </View>
          </View>
        : '' }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    carsModels: state.testDrive.carsModels,
    customerTestDrive: state.testDrive.customerTestDrive
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TestDriveScreen)
