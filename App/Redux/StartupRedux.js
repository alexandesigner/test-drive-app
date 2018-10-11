import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: null,
  setStatusBar: ['visible']
})

export const StartupTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  statusBarVisible: false
})

/* ------------- Reducers ------------- */

export const setStatusBar = (state, { visible }) =>
  state.merge({ statusBarVisible: visible })


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_STATUS_BAR]: setStatusBar
})
