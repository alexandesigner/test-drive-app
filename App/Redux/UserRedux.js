import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  login: ['email', 'password'],
  register: ['id', 'name', 'email', 'phone', 'password'],
  setUser: ['id', 'name', 'email', 'phone', 'token'],
  getUser: null,
  logout: null,
  recoveryPassword: ['email'],
  changePassword: ['email', 'currentPassword', 'newPassword']
})

export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  id: null,
  name: null,
  email: null,
  phone: null,
  image: require('../Images/avatar.jpg'),
  tests: 0,
  token: null
})

/* ------------- Reducers ------------- */

export const loginRequest = (state, { email }) =>
  state.merge({ email })

export const registerRequest = (state, { id, name, email, phone, token }) =>
  state.merge({ id, name, email, phone, token })

export const logoutRequest = state =>
  state.merge(INITIAL_STATE)

export const setUserRequest = (state, { id, name, email, phone, token }) =>
  state.merge({ id, name, email, phone, token })

export const getUserRequest = (state) =>
  state

export const recoveryPasswordRequest = (state, { email }) =>
  state.merge({ email })

export const changePasswordRequest = (state, { email, currentPassword, newPassword }) =>
  state.merge({ email, currentPassword, newPassword })

/* ------------- Selectors ------------- */

export const UserSelectors = {
  selectToken: state => {
    return state.user.token
  }
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN]: loginRequest,
  [Types.REGISTER]: registerRequest,
  [Types.SET_USER]: setUserRequest,
  [Types.GET_USER]: getUserRequest,
  [Types.RECOVERY_PASSWORD]: recoveryPasswordRequest,
  [Types.CHANGE_PASSWORD]: changePasswordRequest
})
