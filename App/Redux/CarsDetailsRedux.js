import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const CARS_DETAILS_DATA = {
                    id: '123',
                    name: 'Up',
                    image: require('../Images/carro1.png'),
                    url: 'http://detalhedoveiculo.com.br',
                    models: [{
                      name: '1.0',
                      url: 'http://detalhedoveiculo.com.br/1.0',
                      featured: [{
                        label: 'Ar-condicionado com filtro de poeira e pólen #1',
                      }, {
                        label: 'Ar-condicionado com filtro de poeira e pólen #2',
                      }, {
                        label: 'Ar-condicionado com filtro de poeira e pólen #3',
                      }],
                      datasheet: [{
                        label: 'Motor',
                        description: '1.0'
                      }, {
                        label: 'Potência (cv)',
                        description: '84 - 75'
                      }, {
                        label: 'Torque (kgf.m)',
                        description: '10,4 - 97'
                      }, {
                        label: 'Velocidade Máxima (km/h)',
                        description: '170 - 166'
                      }, {
                        label: 'Tempo (0 - 100)',
                        description: '13'
                      }]
                    }, {
                      name: 'MSI',
                      url: 'http://detalhedoveiculo.com.br/msi',
                      featured: [{
                        label: 'Ar-condicionado com filtro de poeira e pólen'
                      }, {
                        label: 'Suporte para celular com entrada USB'
                      }],
                      datasheet: [{
                        label: 'Motor',
                        description: '2.0'
                      }, {
                        label: 'Potência (cv)',
                        description: '100 - 95'
                      }]
                    }]
                  }

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setCarsDetails: ['carsDetails'],
  getCarsDetails: ['carsDetails']
})

export const CarsDetailsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  carsDetails: CARS_DETAILS_DATA
})

/* ------------- Reducers ------------- */

export const setCarsDetails = (state, { cars }) =>
  state.merge({ cars })

export const getCarsDetails = (state) =>
  state

/* ------------- Selectors ------------- */


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_CARS_DETAILS]: setCarsDetails,
  [Types.GET_CARS_DETAILS]: getCarsDetails
})
