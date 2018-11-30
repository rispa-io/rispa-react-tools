import React, { PureComponent } from 'react'
import { promiseListener, reduxForm } from '@rispa/redux'
import MakeAsyncFunction from 'react-redux-promise-listener'

export default ({ successAction, failureAction, startAction, ...other }) => Component =>
  class AsyncReduxForm extends PureComponent {
    render() {
      return (
        <MakeAsyncFunction
          listener={promiseListener}
          start={startAction}
          resolve={successAction}
          reject={failureAction}
        >
          {
            onSubmit => {
              const Form = reduxForm({ onSubmit, ...other })(Component)
              return <Form {...this.props} />
            }
          }
        </MakeAsyncFunction>
      )
    }
  }
