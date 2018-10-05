import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import uuid from 'react-native-uuid'

// Generate userId
const genUserId = uuid.v4()

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  login: ['email', 'password'],
  register: ['name', 'email', 'phone', 'password'],
  setUser: ['name', 'email', 'phone', 'token'],
  getUser: null,
  logout: null,
  updateUser: ['name', 'phone', 'image'],
  recoveryPassword: ['email'],
  changePassword: ['userId'],
  changeModalNewPassword: ['visible']
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
  token: null,
  modalNewPassword: false
})

/* ------------- Reducers ------------- */

export const login = (state, { email }) =>
  state.merge({ email })

export const register = (state, { name, email, phone, token }) =>
  state.merge({ id: genUserId, name, email, phone, image: null, tests: 0, token })

export const logout = state =>
  state.merge(INITIAL_STATE)

export const setUser = (state, { name, email, phone, token }) =>
  state.merge({ id: userId, name, email, phone, token })

export const updateUser = (state, { name, phone, image }) =>
  state.merge({ name, phone, image })

export const getUser = (state) =>
  state

export const recoveryPassword = (state, { email }) =>
  state.merge({ email })

export const changePassword = (state, { userId }) =>
  state.merge({ id: userId })

export const changeModalNewPassword = (state, { visible }) =>
  state.merge({ modalNewPassword: visible })

/* ------------- Selectors ------------- */

export const UserSelectors = {
  selectToken: state => {
    return state.user.token
  }
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN]: login,
  [Types.LOGOUT]: logout,
  [Types.REGISTER]: register,
  [Types.SET_USER]: setUser,
  [Types.GET_USER]: getUser,
  [Types.UPDATE_USER]: updateUser,
  [Types.RECOVERY_PASSWORD]: recoveryPassword,
  [Types.CHANGE_PASSWORD]: changePassword,
  [Types.CHANGE_MODAL_NEW_PASSWORD]: changeModalNewPassword
})
