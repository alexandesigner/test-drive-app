import { StackNavigator } from 'react-navigation'

// Containers
import LaunchScreen from '../Containers/LaunchScreen'
import EmployeersScreen from '../Containers/EmployeersScreen'

// Authentication
import LoginScreen from '../Containers/LoginScreen'
import RegisterScreen from '../Containers/RegisterScreen'

const MainNavigation = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  LoginScreen: { screen: LoginScreen },
  RegisterScreen: { screen: RegisterScreen },
  EmployeersScreen: { screen: EmployeersScreen }
}, {
  headerMode: 'float',
  navigationOptions: {
    gesturesEnabled: false
  }
})

export default MainNavigation
