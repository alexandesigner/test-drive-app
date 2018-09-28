import React, { Component } from 'react'
import { ScrollView, View, Text } from 'react-native'
import { ListItem, Header, Icon, Avatar } from 'react-native-elements'
import { Colors } from '../Themes'

// Styles
import styles from './Styles/SideMenuStyles'

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
    const { listNavigation } = this.state
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
          <View style={{ justifyContent: 'space-between', flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: Colors.border }}>
            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
              <Avatar
                medium
                rounded
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
              />
              <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: '700', color: Colors.text }}>Allan Alexandre</Text>
                <Text style={{ fontSize: 12 }}>allanalexandre@gmail.com</Text>
              </View>
            </View>
            <Icon name="edit" type="feather" color={Colors.brand} />
          </View>
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
