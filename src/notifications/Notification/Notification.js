import React, { PureComponent } from 'react'
import NotificationMolecula from '@rispa/ui-kit/molecules/Notification'
import { string, func } from 'prop-types'
import { notificationDelay } from '../constants'

import cx from './Notification.sss'

export default class Notification extends PureComponent {
  static propTypes = {
    key: string.isRequired,
    text: string.isRequired,
    type: string.isRequired,
    onClose: func.isRequired,
  }

  componentDidMount() {
    setTimeout(this.handleClose, notificationDelay)
  }

  handleClose = () => this.props.onClose({ key: this.props.key })

  render() {
    const { text, type, onClose } = this.props
    return (
      <div className={cx('notification')}>
        <NotificationMolecula type={type} onClose={onClose}>
          { text }
        </NotificationMolecula>
      </div>
    )
  }
}
