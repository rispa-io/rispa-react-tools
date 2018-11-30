import { createSelector } from '@rispa/redux'
import { REDUCER_NAME } from '../constants'

const subStateSelector = state => state[REDUCER_NAME]

export default createSelector(
  subStateSelector,
  state => Object.keys(state).map(key => state[key]),
)
