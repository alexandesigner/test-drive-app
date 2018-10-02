import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import uuid from 'react-native-uuid'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  login: ['email', 'password'],
  register: ['name', 'email', 'phone', 'password'],
  setUser: ['name', 'email', 'phone', 'token'],
  getUser: null,
  logout: null,
  updateUser: ['id', 'name', 'phone', 'image'],
  recoveryPassword: ['email'],
  changePassword: ['userId']
})

export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  id: null,
  name: null,
  email: null,
  phone: null,
  image: null,
  tests: null,
  token: null
})

/* ------------- Reducers ------------- */

// Generate userId
const genUserId = uuid.v4()

export const loginRequest = (state, { email }) =>
  state.merge({ email })

export const registerRequest = (state, { name, email, phone, token }) =>
  state.merge({ id: genUserId, name, email, phone, image: null, tests: 0, token })

export const logoutRequest = state =>
  state.merge(INITIAL_STATE)

export const setUserRequest = (state, { name, email, phone, token }) =>
  state.merge({ id: userId, name, email, phone, token })

export const updateUserRequest = (state, { name, phone, image }) =>
  state.merge({ name, phone, image })

export const getUserRequest = (state) =>
  state

export const recoveryPasswordRequest = (state, { email }) =>
  state.merge({ email })

export const changePasswordRequest = (state, { userId }) =>
  state.merge({ id: userId })

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
  [Types.UPDATE_USER]: updateUserRequest,
  [Types.RECOVERY_PASSWORD]: recoveryPasswordRequest,
  [Types.CHANGE_PASSWORD]: changePasswordRequest
})
