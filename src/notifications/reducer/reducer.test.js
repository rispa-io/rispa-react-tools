import reducer from '../reducer/reducer'
import { notificationShow, notificationHide } from './actions'
import itemsSelector from './selectors'

const CONSTANTS = {
  error_message: 'test error',
  notification_message: 'test notification',
}

const dispatchAction = (state, action, props) => ({
  ...state,
  [reducer.key]: reducer(state[reducer.key], action(props)),
})

describe('notification reducer', () => {
  let state = {
    [reducer.key]: reducer(),
  }
  it('should have initialState', () => {
    expect(itemsSelector(state)).toHaveLength(0)
  })

  it('should have notifaction after call action', () => {
    state = dispatchAction(state, notificationShow, { text: CONSTANTS.error, type: 'error' })
    state = dispatchAction(state, notificationShow, { text: CONSTANTS.notification_message, type: 'notification' })
    expect(itemsSelector(state)).toHaveLength(2)
  })

  it('shouldn\'t have error after hide action', () => {
    const { key } = itemsSelector(state)[0]
    state = dispatchAction(state, notificationHide, { key })
    const items = itemsSelector(state)
    expect(items).toHaveLength(1)
    expect(items[0].text).toEqual(CONSTANTS.notification_message)
  })
})
