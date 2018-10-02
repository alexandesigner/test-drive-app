import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const FAQ_DATA = [{
                    id: '123',
                    question: 'Pergunta #1',
                    answer: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida semper urna quis pellentesque. Maecenas mollis ut est vitae gravida. Mauris quis erat lectus. Pellentesque odio eros, finibus at nisl non, ultrices lacinia elit. Mauris sed orci quis tellus imperdiet vulputate. Morbi gravida blandit nibh a egestas. Duis eget mattis lectus. Nam aliquet non est vel malesuada. Vestibulum velit magna, molestie ac turpis at, pharetra sodales nisi. Nullam in eros a neque mattis maximus id nec ipsum. Ut et metus nec ipsum tempus sagittis vitae ac velit. Nam id eros dapibus, commodo nibh in, mollis purus.</p>'
                  }, {
                    id: '321',
                    question: 'Pergunta #2',
                    answer: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida semper urna quis pellentesque. Maecenas mollis ut est vitae gravida. Mauris quis erat lectus. Pellentesque odio eros, finibus at nisl non, ultrices lacinia elit. Mauris sed orci quis tellus imperdiet vulputate. Morbi gravida blandit nibh a egestas. Duis eget mattis lectus. Nam aliquet non est vel malesuada. Vestibulum velit magna, molestie ac turpis at, pharetra sodales nisi. Nullam in eros a neque mattis maximus id nec ipsum. Ut et metus nec ipsum tempus sagittis vitae ac velit. Nam id eros dapibus, commodo nibh in, mollis purus.</p>'
                  }, {
                    id: '456',
                    question: 'Pergunta #3',
                    answer: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida semper urna quis pellentesque. Maecenas mollis ut est vitae gravida. Mauris quis erat lectus. Pellentesque odio eros, finibus at nisl non, ultrices lacinia elit. Mauris sed orci quis tellus imperdiet vulputate. Morbi gravida blandit nibh a egestas. Duis eget mattis lectus. Nam aliquet non est vel malesuada. Vestibulum velit magna, molestie ac turpis at, pharetra sodales nisi. Nullam in eros a neque mattis maximus id nec ipsum. Ut et metus nec ipsum tempus sagittis vitae ac velit. Nam id eros dapibus, commodo nibh in, mollis purus.</p>'
                  }, {
                    id: '653',
                    question: 'Pergunta #4',
                    answer: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida semper urna quis pellentesque. Maecenas mollis ut est vitae gravida. Mauris quis erat lectus. Pellentesque odio eros, finibus at nisl non, ultrices lacinia elit. Mauris sed orci quis tellus imperdiet vulputate. Morbi gravida blandit nibh a egestas. Duis eget mattis lectus. Nam aliquet non est vel malesuada. Vestibulum velit magna, molestie ac turpis at, pharetra sodales nisi. Nullam in eros a neque mattis maximus id nec ipsum. Ut et metus nec ipsum tempus sagittis vitae ac velit. Nam id eros dapibus, commodo nibh in, mollis purus.</p>'
                  }, {
                    id: '678',
                    question: 'Pergunta #5',
                    answer: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida semper urna quis pellentesque. Maecenas mollis ut est vitae gravida. Mauris quis erat lectus. Pellentesque odio eros, finibus at nisl non, ultrices lacinia elit. Mauris sed orci quis tellus imperdiet vulputate. Morbi gravida blandit nibh a egestas. Duis eget mattis lectus. Nam aliquet non est vel malesuada. Vestibulum velit magna, molestie ac turpis at, pharetra sodales nisi. Nullam in eros a neque mattis maximus id nec ipsum. Ut et metus nec ipsum tempus sagittis vitae ac velit. Nam id eros dapibus, commodo nibh in, mollis purus.</p><p>ALOOOOOOOOO ------- Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida semper urna quis pellentesque. Maecenas mollis ut est vitae gravida. Mauris quis erat lectus. Pellentesque odio eros, finibus at nisl non, ultrices lacinia elit. Mauris sed orci quis tellus imperdiet vulputate. Morbi gravida blandit nibh a egestas. Duis eget mattis lectus. Nam aliquet non est vel malesuada. Vestibulum velit magna, molestie ac turpis at, pharetra sodales nisi. Nullam in eros a neque mattis maximus id nec ipsum. Ut et metus nec ipsum tempus sagittis vitae ac velit. Nam id eros dapibus, commodo nibh in, mollis purus.</p>'
                  }, {
                    id: '985',
                    question: 'Pergunta #6',
                    answer: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida semper urna quis pellentesque. Maecenas mollis ut est vitae gravida. Mauris quis erat lectus. Pellentesque odio eros, finibus at nisl non, ultrices lacinia elit. Mauris sed orci quis tellus imperdiet vulputate. Morbi gravida blandit nibh a egestas. Duis eget mattis lectus. Nam aliquet non est vel malesuada. Vestibulum velit magna, molestie ac turpis at, pharetra sodales nisi. Nullam in eros a neque mattis maximus id nec ipsum. Ut et metus nec ipsum tempus sagittis vitae ac velit. Nam id eros dapibus, commodo nibh in, mollis purus.</p>'
                  }]

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setFaq: ['faq'],
  getFaq: ['faq']
})

export const FaqTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  faq: FAQ_DATA
})

/* ------------- Reducers ------------- */

export const setFaq = (state, { faq }) =>
  state.merge({ faq })

export const getFaq = (state) =>
  state

/* ------------- Selectors ------------- */


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_FAQ]: setFaq,
  [Types.GET_FAQ]: getFaq
})
