import { StackNavigator } from 'react-navigation'

// Containers
import LaunchScreen from '../Containers/LaunchScreen'
import EmployeersScreen from '../Containers/EmployeersScreen'
import CarDetailsScreen from '../Containers/CarDetailsScreen'
import TestDriveScreen from '../Containers/TestDriveScreen'
import CustomerTestDriveScreen from '../Containers/CustomerTestDriveScreen'
import GetKeyScreen from '../Containers/GetKeyScreen'
import InitTravelScreen from '../Containers/InitTravelScreen'
import TravelScreen from '../Containers/TravelScreen'
import CustomerSurveyScreen from '../Containers/CustomerSurveyScreen'
import ResumeTravelScreen from '../Containers/ResumeTravelScreen'

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
  TestDriveScreen: { screen: TestDriveScreen },
  CustomerTestDriveScreen: { screen: CustomerTestDriveScreen },
  GetKeyScreen: { screen: GetKeyScreen },
  InitTravelScreen: { screen: InitTravelScreen },
  TravelScreen: { screen: TravelScreen },
  CustomerSurveyScreen: { screen: CustomerSurveyScreen },
  ResumeTravelScreen: { screen: ResumeTravelScreen }
}, {
  headerMode: 'float',
  navigationOptions: {
    gesturesEnabled: false
  }
})

export default MainNavigation
