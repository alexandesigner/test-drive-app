import { StackNavigator } from 'react-navigation'

// Containers
import LaunchScreen from '../Containers/LaunchScreen'
import EmployeersScreen from '../Containers/EmployeersScreen'
import CarDetailsScreen from '../Containers/CarDetailsScreen'
import TestDriveScreen from '../Containers/TestDriveScreen'

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
  EmployeersScreen: { screen: EmployeersScreen },
  CarDetailsScreen: { screen: CarDetailsScreen },
  TestDriveScreen: { screen: TestDriveScreen }
}, {
  headerMode: 'float',
  navigationOptions: {
    gesturesEnabled: false
  }
})

export default MainNavigation
