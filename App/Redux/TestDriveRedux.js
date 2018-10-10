import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const CARS_MODELS = [{
                    id: 0,
                    name: 'Fox',
                    checked: false,
                    models: [{
                      id: 0,
                      name: '1.0',
                      checked: false,
                      featured: [{
                        label: '5 portas',
                      }, {
                        label: 'Flex',
                      }, {
                        label: 'Aspirado',
                      }]
                    }, {
                      id: 1,
                      name: 'MSI',
                      checked: false,
                      featured: [{
                        label: '4 portas',
                      }, {
                        label: 'Gasolina',
                      }, {
                        label: 'Aspirado',
                      }]
                    }]
                  }, {
                    id: 1,
                    name: 'Up',
                    checked: false,
                    models: [{
                      id: 0,
                      name: '2.0',
                      checked: false,
                      featured: [{
                        label: '5 portas',
                      }, {
                        label: 'Flex',
                      }, {
                        label: 'Aspirado',
                      }]
                    }, {
                      id: 1,
                      name: 'Turbo',
                      checked: false,
                      featured: [{
                        label: '3 portas',
                      }, {
                        label: 'Gasolina',
                      }, {
                        label: 'Aspirado',
                      }]
                    }]
                  }, {
                    id: 2,
                    name: 'Gol',
                    checked: false,
                    models: [{
                      id: 0,
                      name: '3.0',
                      checked: false,
                      featured: [{
                        label: '5 portas',
                      }, {
                        label: 'Flex',
                      }, {
                        label: 'Aspirado',
                      }]
                    }, {
                      id: 1,
                      name: 'STI',
                      checked: false,
                      featured: [{
                        label: '4 portas',
                      }, {
                        label: 'Gasolina',
                      }, {
                        label: 'Aspirado',
                      }]
                    }]
                  }, {
                    id: 3,
                    name: 'Golf',
                    checked: false,
                    models: [{
                      id: 0,
                      name: '1.0',
                      featured: [{
                        label: '5 portas',
                      }, {
                        label: 'Flex',
                      }, {
                        label: 'Aspirado',
                      }]
                    }, {
                      id: 1,
                      name: 'MSI',
                      checked: false,
                      featured: [{
                        label: '4 portas',
                      }, {
                        label: 'Gasolina',
                      }, {
                        label: 'Aspirado',
                      }]
                    }]
                  }]

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setCarsModels: ['carsModels'],
  getCarsModels: ['carsModels'],
  setCurrentModel: ['currentModel'],
  setCurrentVersion: ['currentVersion'],
  setCustomerTestDrive: ['customerTestDrive'],
  setMakeTestDrive: ['makeTestDrive'],
  changeModalCarVersion: ['visible'],
  onModalSignature: ['visible'],
  resetTestDrive: null
})

export const TestDriveType = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  carsModels: CARS_MODELS,
  currentModel: {},
  currentVersion: {},
  customerTestDrive: {},
  makeTestDrive: {},
  modalCarVersion: false,
  modalSignature: false
})

/* ------------- Reducers ------------- */

export const setCarsModels = (state, { carsModels }) =>
  state.merge({ carsModels })

export const getCarsModels = (state) =>
  state

export const resetTestDrive = state =>
  state.merge(INITIAL_STATE)

export const setCurrentModel = (state, { currentModel }) =>
  state.merge({ currentModel })

export const setCurrentVersion = (state, { currentVersion }) =>
  state.merge({ currentVersion })

export const setCustomerTestDrive = (state, { customerTestDrive }) =>
  state.merge({ customerTestDrive })

export const setMakeTestDrive = (state, { makeTestDrive }) =>
  state.merge({ makeTestDrive })

export const changeModalCarVersion = (state, { visible }) =>
  state.merge({ modalCarVersion: visible })

export const onModalSignature = (state, { visible }) =>
  state.merge({ modalSignature: visible })

/* ------------- Selectors ------------- */


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_CARS_MODELS]: setCarsModels,
  [Types.GET_CARS_MODELS]: getCarsModels,
  [Types.SET_CURRENT_MODEL]: setCurrentModel,
  [Types.SET_CURRENT_VERSION]: setCurrentVersion,
  [Types.SET_CUSTOMER_TEST_DRIVE]: setCustomerTestDrive,
  [Types.SET_MAKE_TEST_DRIVE]: setMakeTestDrive,
  [Types.RESET_TEST_DRIVE]: resetTestDrive,
  [Types.CHANGE_MODAL_CAR_VERSION]: changeModalCarVersion,
  [Types.ON_MODAL_SIGNATURE]: onModalSignature
})
