import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const EMPLOYEER_DATA = [{
                          id: 0,
                          name: 'Amy Farha',
                          image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                          email: 'amyfahra@gmail.com',
                          tests: 6
                        }, {
                          id: 1,
                          name: 'Chris Jackson',
                          image: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                          email: 'chrisjack@gmail.com',
                          tests: 3
                        }, {
                          id: 2,
                          name: 'Amy Whinehouse',
                          image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                          email: 'amyfahra@gmail.com',
                          tests: 0
                        }, {
                          id: 3,
                          name: 'Johny B Good',
                          image: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                          email: 'chrisjack@gmail.com',
                          tests: 25
                        }, {
                          id: 4,
                          name: 'Amy Farha',
                          image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                          email: 'amyfahra@gmail.com',
                          tests: 2
                        }, {
                          id: 5,
                          name: 'Chris Jackson',
                          image: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                          email: 'chrisjack@gmail.com',
                          tests: 1
                        }, {
                          id: 6,
                          name: 'Amy Whinehouse',
                          image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                          email: 'amyfahra@gmail.com',
                          tests: 0
                        }, {
                          id: 7,
                          name: 'Johny B Good',
                          image: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                          email: 'chrisjack@gmail.com',
                          tests: 12
                        }]

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setEmployeers: ['employeers'],
  getEmployeers: ['employeers'],
  changeModal: ['visible']
})

export const EmployeersType = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  employeers: EMPLOYEER_DATA,
  modal: false
})

/* ------------- Reducers ------------- */

export const changeModal = (state, { visible }) =>
  state.merge({ visible })

export const setEmployeers = (state, { employeers }) =>
  state.merge({ employeers })

export const getEmployeers = (state) =>
  state

/* ------------- Selectors ------------- */


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_EMPLOYEERS]: setEmployeers,
  [Types.GET_EMPLOYEERS]: getEmployeers,
  [Types.CHANGE_MODAL]: changeModal
})
