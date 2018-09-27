import AppNavigation from '../Navigation/AppNavigation'
import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  redirectTo: ['page']
})

export const NavTypes = Types
export default Creators

// INITIAL_STATE = AppNavigation.router.getStateForAction(action, state)

export const reducer = (state, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state)
  // const newState = AppNavigation.router.getStateForAction(action, state)
  return newState || state
}
