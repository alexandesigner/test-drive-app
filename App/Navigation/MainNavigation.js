import { StackNavigator } from 'react-navigation'

// Containers
import LaunchScreen from '../Containers/LaunchScreen'
import EmployeersScreen from '../Containers/EmployeersScreen'

// Authentication
import LoginScreen from '../Containers/LoginScreen'
import RegisterScreen from '../Containers/RegisterScreen'
import RecoveryPasswordScreen from '../Containers/RecoveryPasswordScreen'
import NewPasswordScreen from '../Containers/NewPasswordScreen'

const MainNavigation = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  LoginScreen: { screen: LoginScreen },
  RegisterScreen: { screen: RegisterScreen },
  RecoveryPasswordScreen: { screen: RecoveryPasswordScreen },
  NewPasswordScreen: { screen: NewPasswordScreen },
  EmployeersScreen: { screen: EmployeersScreen }
}, {
  headerMode: 'float',
  navigationOptions: {
    gesturesEnabled: false
  }
})

export default MainNavigation
