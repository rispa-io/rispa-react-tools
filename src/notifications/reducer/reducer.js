import { createReducer } from '@rispa/redux'

import {
  notificationShow,
  notificationHide,
} from './actions'
import { REDUCER_NAME } from '../constants'

const initialState = {}

const actions = {
  [notificationShow]: (state, { text, type }) => {
    const key = `${Date.now()}_${text}`
    return ({
      ...state,
      [key]: { key, text, type },
    })
  },
  [notificationHide]: (state, { key }) => {
    const updatedState = { ...state }
    delete updatedState[key]
    return updatedState
  },
}

const reducer = createReducer(actions, initialState)

reducer.key = REDUCER_NAME

export default reducer
