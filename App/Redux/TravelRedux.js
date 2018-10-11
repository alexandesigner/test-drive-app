import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setTravelStarted: null
})

export const TravelTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  travelStarted: false
})

/* ------------- Reducers ------------- */

export const setTravelStarted = (state, { started }) =>
  state.merge({ travelStarted: started })


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_TRAVEL_STARTED]: setTravelStarted
})
