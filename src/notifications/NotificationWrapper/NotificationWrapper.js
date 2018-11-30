import React, { PureComponent } from 'react'
import { shape, arrayOf, string, func, node } from 'prop-types'
import { connect, createStructuredSelector } from '@rispa/redux'
import Notification from '../Notification'
import itemsSelector from '../reducer/selectors'
import { notificationHide } from '../reducer/actions'

class NotificationWrapper extends PureComponent {
  static propTypes = {
    onClose: func.isRequired,
    items: arrayOf(
      shape({
        key: string.isRequired,
        text: string.isRequired,
        type: string.isRequired,
      })
    ),
    children: node,
  }

  constructor(props) {
    super(props)
    this.renderNotification = this.renderNotification.bind(this)
  }

  renderNotification({ key, text, type }) {
    return (
      <Notification
        key={key}
        text={text}
        type={type}
        onClose={this.props.onClose}
      />
    )
  }

  render() {
    const { items, children } = this.props
    return (
      <div>
        {children}
        {
          items.map(this.renderNotification)
        }
      </div>
    )
  }
}

export default connect(
  createStructuredSelector({
    items: itemsSelector,
  }),
  {
    onClose: notificationHide,
  }
)(NotificationWrapper)
