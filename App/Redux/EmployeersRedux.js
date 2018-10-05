import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import uuid from 'react-native-uuid'

// Generate userId
const genUserId = uuid.v4()

const EMPLOYEER_DATA = [{
                          id: 0,
                          name: 'Amy Farha',
                          image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                          email: 'amyfahra@gmail.com',
                          tests: 6,
                          verified: true
                        }, {
                          id: 1,
                          name: 'Chris Jackson',
                          image: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                          email: 'chrisjack@gmail.com',
                          tests: 3,
                          verified: false
                        }]

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  registerEmployeers: ['name', 'email', 'image', 'phone', 'password'],
  getEmployeers: ['employeers'],
  changeModalAddEmployeers: ['visible']
})

export const EmployeersType = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  employeers: EMPLOYEER_DATA,
  modalAddEmployeers: false
})

/* ------------- Reducers ------------- */

export const changeModalAddEmployeers = (state, { visible }) =>
  state.merge({ modalAddEmployeers: visible })

export const registerEmployeers = (state, { name, email, phone, password, token }) =>
  state.merge({ employeers: [...state.employeers, { id: genUserId, name, email, image: null, phone, tests: 0, verified: false, password, token }] })

export const getEmployeers = (state) =>
  state

/* ------------- Selectors ------------- */


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REGISTER_EMPLOYEERS]: registerEmployeers,
  [Types.GET_EMPLOYEERS]: getEmployeers,
  [Types.CHANGE_MODAL_ADD_EMPLOYEERS]: changeModalAddEmployeers
})
