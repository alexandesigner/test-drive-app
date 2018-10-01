import React, { Component } from 'react'
import { ScrollView, View, Text } from 'react-native'
import { ListItem, Header, Icon, Avatar } from 'react-native-elements'
import { Colors } from '../Themes'

// Styles
import styles from './Styles/SideMenuStyles'

// Components
import UserProfile from '../Components/UserProfile'

const Brand = () => {
  return (
    <View>
      <Text style={{ color: '#fff', fontSize: 16, fontWeight: '900' }}>Alemanha Veículos</Text>
    </View>
  )
}

const Version = () => {
  return (
    <View>
      <Text style={{ color: '#fff' }}>v1.0.0</Text>
    </View>
  )
}

class SideMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      users: [{
        id: 0,
        name: 'Airton Souza!',
        email: 'airtonsouza1@gmail.com',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
      }],
      listNavigation: [{
        title: 'Início',
        screen: 'HomeScreen'
      }, {
        title: 'Perguntas Frequentes',
        screen: 'FAQScreen'
      }]
    }
  }
  render() {
    const { navigate } = this.props.navigation
    const { listNavigation, users } = this.state
    return (
      <View style={styles.container}>
        <Header
          leftComponent={<Brand />}
          rightComponent={<Version />}
          outerContainerStyles={{
              backgroundColor: Colors.brand,
              shadowColor: 'transparent',
              borderBottomWidth: 0,
              elevation: 0,
              justifyContent: 'center'
          }}
        />
        <View>
          {users.map(user => (
            <UserProfile
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              image={user.image}
              {...this.props}
            />
          ))}
        </View>
        <ScrollView>
          <View>
            {listNavigation.map((item, index) => (
              <ListItem
                key={index}
                title={item.title}
                onPress={() => navigate(`${item.screen}`)}
              />
            ))}
          </View>
        </ScrollView>
        <ListItem
            containerStyle={{borderTopWidth: 1, borderTopColor: Colors.border}}
            title="Desconectar"
            leftIcon={{name: 'log-out', color: 'red', style: styles.logoutIcon, type: 'feather'}}
            onPress={() => navigate('MainNavigation')}
          />
      </View>
    )
  }
}

export default SideMenu
