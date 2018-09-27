import { StackNavigator } from 'react-navigation'

// Navigation
import DrawerNavigation from './DrawerNavigation'
import MainNavigation from './MainNavigation'

// Manifest of possible screens
const AppNavigation = StackNavigator({
  MainNavigation: { screen: MainNavigation },
  DrawerNavigation: { screen: DrawerNavigation },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'DrawerNavigation'
})

export default AppNavigation
