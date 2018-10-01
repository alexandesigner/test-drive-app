import { StackNavigator, DrawerNavigator } from 'react-navigation'

// Screens
import HomeScreen from '../Containers/HomeScreen'
import FAQScreen from '../Containers/FAQScreen'
import ProfileScreen from '../Containers/ProfileScreen'

// Components
import SideMenu from '../Components/SideMenu'

const DrawerStack = DrawerNavigator({
  HomeScreen: { screen: HomeScreen },
  FAQScreen: { screen: FAQScreen },
  ProfileScreen: { screen: ProfileScreen },
}, {
  initialRouteName: 'HomeScreen',
  drawerPosition: 'left',
  contentComponent: SideMenu,
  drawerWidth: 300,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
})

const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false
  }
})

export default DrawerNavigation
