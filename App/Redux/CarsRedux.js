import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const CARS_DATA = [{
                    id: '123',
                    name: 'Up',
                    image: require('../Images/carro1.png'),
                  }, {
                    id: '456',
                    name: 'Gol',
                    image: require('../Images/carro2.png'),
                  }, {
                    id: '789',
                    name: 'Fox',
                    image: require('../Images/carro3.png'),
                  }, {
                    id: '101',
                    name: 'Novo Polo',
                    image: require('../Images/carro4.png'),
                  }, {
                    id: '102',
                    name: 'Golf',
                    image: require('../Images/carro5.png'),
                  }]

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setCars: ['cars'],
  getCars: ['cars']
})

export const CarsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  cars: CARS_DATA
})

/* ------------- Reducers ------------- */

export const setCars = (state, { cars }) =>
  state.merge({ cars })

export const getCars = (state) =>
  state

/* ------------- Selectors ------------- */


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_CARS]: setCars,
  [Types.GET_CARS]: getCars
})
