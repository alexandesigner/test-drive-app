import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text, Modal, TouchableHighlight, Platform } from 'react-native'
import { Icon, List, Button } from 'react-native-elements'
import { Colors } from '../Themes'

// Redux
import EmployeersRedux from '../Redux/EmployeersRedux'

// Styles
import styles from './Styles/EmployeersScreenStyles'

// Components
import ListEmployeers from '../Components/ListEmployeers'
import FormAddEmployeers from '../Components/FormAddEmployeers'

class EmployeersScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerMode: 'float',
      headerStyle: { backgroundColor: '#fff' },
      title: <Text style={ styles.textHeader }>Colaboradores</Text>,
      headerTintColor: Colors.text,
      headerLeft: <Icon
                    containerStyle={styles.toolbarIconLeft}
                    type="feather"
                    name="arrow-left"
                    color={Colors.brand}
                    onPress={() => navigation.navigate('DrawerNavigation')}
                  />
    }
  }
  onChangeModalAddEmployeers = (visible) => {
    this.props.changeModalAddEmployeers(visible)
  }
  render () {
    const { employeers, modalAddEmployeers } = this.props
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <List containerStyle={{marginTop: 0, backgroundColor: Colors.transparent }}>
              {employeers.map(employeer => {
                return <ListEmployeers key={employeer.id} employeers={employeer} />
              })}
            </List>
          </View>
        </ScrollView>
        <View style={{ marginBottom: 15 }}>
          <Button
            buttonStyle={styles.buttonBrand}
            fontWeight='600'
            icon={{name: 'plus', type: 'feather'}}
            title='CADASTRAR COLABORADOR'
            onPress={() => this.onChangeModalAddEmployeers(true)}
          />
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalAddEmployeers}
          onRequestClose={() => Alert.alert('Modal has been closed.')}>
          <View style={{marginTop: Platform.OS === 'android' ? 22 : 42}}>
            <View>
              <Text style={{ marginLeft: 20, fontSize: 26, color: Colors.text, fontWeight: '600' }}>Cadastrar colaborador</Text>
              <TouchableHighlight
                style={{ position: 'absolute', right: 20, top: 0 }}
                onPress={() => this.onChangeModalAddEmployeers(false)}>
                <Icon name="x" type="feather" color={Colors.brand} />
              </TouchableHighlight>
              <View style={{ marginTop: 20 }}>
                <FormAddEmployeers />
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
    employeers: state.employeers.employeers,
    modalAddEmployeers: state.employeers.modalAddEmployeers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeModalAddEmployeers: (visible) => dispatch(EmployeersRedux.changeModalAddEmployeers(visible))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeersScreen)
