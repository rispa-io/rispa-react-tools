import { PureComponent } from 'react'
import { any, bool } from 'prop-types'

class Loading extends PureComponent {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    error: any,
    isLoading: bool,
    pastDelay: bool,
  }

  render() {
    const { error } = this.props

    if (error && process.env.SSR) {
      // eslint-disable-next-line no-console
      console.error(error)
    }

    return null
  }
}

export default Loading
