import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text } from 'react-native'
import { Icon, List, Button } from 'react-native-elements'
import { Colors } from '../Themes'

// Styles
import styles from './Styles/EmployeersScreenStyles'

// Components
import ListEmployeers from '../Components/ListEmployeers'

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
  constructor (props) {
    super(props)
    this.state = {
      employeers: [{
        id: 0,
        name: 'Amy Farha',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        email: 'amyfahra@gmail.com',
        tests: 6
      }, {
        id: 1,
        name: 'Chris Jackson',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        email: 'chrisjack@gmail.com',
        tests: 3
      }, {
        id: 2,
        name: 'Amy Whinehouse',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        email: 'amyfahra@gmail.com',
        tests: 0
      }, {
        id: 3,
        name: 'Johny B Good',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        email: 'chrisjack@gmail.com',
        tests: 25
      }, {
        id: 4,
        name: 'Amy Farha',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        email: 'amyfahra@gmail.com',
        tests: 2
      }, {
        id: 5,
        name: 'Chris Jackson',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        email: 'chrisjack@gmail.com',
        tests: 1
      }, {
        id: 6,
        name: 'Amy Whinehouse',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        email: 'amyfahra@gmail.com',
        tests: 0
      }, {
        id: 7,
        name: 'Johny B Good',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        email: 'chrisjack@gmail.com',
        tests: 12
      }]
    }
  }
  render () {
    const { employeers } = this.state
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
            fontWeight='900'
            icon={{name: 'plus', type: 'feather'}}
            title='CADASTRAR COLABORADOR'
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeersScreen)
