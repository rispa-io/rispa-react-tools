import { SubmissionError } from '@rispa/redux'

export default data => {
  if (data.response) {
    const { data: { error, msg, fields } } = data.response
    if (fields) {
      throw new SubmissionError(fields.reduce((res, el) => ({ ...res, ...el })))
    }
    throw new SubmissionError({
      _error: msg || error,
    })
  }
  throw new SubmissionError({ _error: data.message })
}
