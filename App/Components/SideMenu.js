import React, { Component } from 'react'
import { ScrollView, View, Text } from 'react-native'
import { ListItem, Header, Icon } from 'react-native-elements'
import { Colors } from '../Themes'

// Styles
import styles from './Styles/SideMenuStyles'

const Brand = () => {
  return (
    <View>
      <Text style={styles.whiteText}>Alemanha Veículos</Text>
    </View>
  )
}

const Version = () => {
  return (
    <View>
      <Text style={styles.whiteText}>v1.0.0</Text>
    </View>
  )
}

class SideMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      listNavigation: [
        {
          title: 'Início',
          screen: 'HomeScreen'
        },
        {
          title: 'Perguntas Frequentes',
          screen: 'FAQScreen'
        }
      ]
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
              borderBottomWidth: 0, elevation: 0
          }}
        />
        <ScrollView>
          <View>
            {listNavigation.map((item, i) => (
              <ListItem
                key={i}
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
